import fs from "node:fs";
import path from "node:path";

const excluded = new Set(["admin", "admin_panel", "api_disabled", "node_modules", ".git"]);
const issues = []; const summary = { html: 0, img: 0, picture: 0, broken: 0, missingAlt: 0, emptyAlt: 0, missingWidth: 0, missingHeight: 0, heroLazy: 0, heroPriority: 0, nonHeroPriority: 0, over250: 0, over500: 0, over1m: 0, optimizedFallback: 0 };
const altUsage = new Map();

function files(dir = ".") {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (excluded.has(entry.name)) return [];
    const item = path.join(dir, entry.name);
    return entry.isDirectory() ? files(item) : entry.name.endsWith(".html") ? [item] : [];
  });
}
function lineOf(text, index) { return text.slice(0, index).split("\n").length; }
function assetExists(file, value) {
  if (!value || /^(https?:|data:|#)/.test(value)) return true;
  const target = value.split("?")[0];
  return fs.existsSync(target.startsWith("/") ? path.resolve(target.slice(1)) : path.resolve(path.dirname(file), target));
}
function localAsset(file, value) {
  if (!value || /^(https?:|data:|#)/.test(value)) return null;
  const target = value.split("?")[0];
  return target.startsWith("/") ? path.resolve(target.slice(1)) : path.resolve(path.dirname(file), target);
}
function extensionTypeMatches(value, type) {
  if (!type) return true;
  const ext = path.extname(value.split("?")[0]).toLowerCase();
  return (type === "image/webp" && ext === ".webp") || (type === "image/avif" && ext === ".avif") || (type === "image/png" && ext === ".png") || (type === "image/jpeg" && [".jpg", ".jpeg"].includes(ext));
}
function report(level, file, line, message) { issues.push({ level, file, line, message }); if (level === "ERROR") summary.broken++; }
function sizeCheck(file, line, value, hasOptimizedSource) {
  const asset = localAsset(file, value); if (!asset || !fs.existsSync(asset)) return;
  const size = fs.statSync(asset).size;
  if (size > 250 * 1024) summary.over250++;
  if (size > 500 * 1024) summary.over500++;
  if (size > 1024 * 1024) summary.over1m++;
  if (size > 1024 * 1024 && hasOptimizedSource) { summary.optimizedFallback++; report("INFO", file, line, `Large fallback, optimized primary source exists: ${value}`); }
  else if (size > 1024 * 1024) report("VERY HIGH", file, line, `Large image (${Math.round(size / 1024)} KB): ${value}`);
  else if (size > 500 * 1024) report("HIGH", file, line, `Large image (${Math.round(size / 1024)} KB): ${value}`);
  else if (size > 250 * 1024) report("WARNING", file, line, `Large image (${Math.round(size / 1024)} KB): ${value}`);
}
function checkImg(file, text, index, tag, hasOptimizedSource = false, hero = false) {
  summary.img++; const line = lineOf(text, index); const src = tag.match(/\bsrc="([^"]+)"/i)?.[1];
  if (!src || !assetExists(file, src)) report("ERROR", file, line, `Broken or missing img src: ${src || "(missing)"}`);
  const alt = tag.match(/\balt="([^"]*)"/i)?.[1];
  if (alt === undefined) { summary.missingAlt++; report("WARNING", file, line, "Missing alt attribute"); }
  else if (!alt) { summary.emptyAlt++; report("INFO", file, line, "Empty alt (may be decorative)"); }
  else { altUsage.set(alt, [...(altUsage.get(alt) || []), `${file}:${line}`]); if (/^(image|img|foto|resim|görsel)$/i.test(alt.trim())) report("WARNING", file, line, `Uninformative alt: ${alt}`); }
  if (!/\bwidth=/.test(tag)) { summary.missingWidth++; report("WARNING", file, line, "Missing width (possible CLS risk)"); }
  if (!/\bheight=/.test(tag)) { summary.missingHeight++; report("WARNING", file, line, "Missing height (possible CLS risk)"); }
  if (hero && /\bloading="lazy"/i.test(tag)) { summary.heroLazy++; report("WARNING", file, line, "Hero image uses loading=lazy"); }
  if (hero && !/\bfetchpriority="high"/i.test(tag)) { summary.heroPriority++; report("WARNING", file, line, "Hero image lacks fetchpriority=high"); }
  if (!hero && /\bfetchpriority="high"/i.test(tag)) { summary.nonHeroPriority++; report("WARNING", file, line, "Non-hero image uses fetchpriority=high"); }
  if (src) sizeCheck(file, line, src, hasOptimizedSource);
}

for (const file of files()) {
  summary.html++; const text = fs.readFileSync(file, "utf8");
  const heroPositions = new Set(); const pictureRanges = [];
  for (const section of text.matchAll(/<section\b[^>]*class="[^"]*(?:detail-hero|\bhero\b)[^"]*"[^>]*>([\s\S]*?)<\/section>/gi)) {
    const visual = /<picture\b[^>]*>[\s\S]*?<\/picture>|<img\b[^>]*>/i.exec(section[0]);
    if (visual) heroPositions.add(section.index + visual.index);
  }
  for (const picture of text.matchAll(/<picture\b[^>]*>([\s\S]*?)<\/picture>/gi)) {
    summary.picture++; const index = picture.index; const block = picture[0]; const line = lineOf(text, index);
    pictureRanges.push([index, index + block.length]);
    const sources = [...block.matchAll(/<source\b[^>]*>/gi)]; const img = block.match(/<img\b[^>]*>/i)?.[0];
    if (!img) report("ERROR", file, line, "Picture fallback img missing");
    let optimized = false;
    for (const source of sources) { const tag = source[0]; const srcset = tag.match(/\bsrcset="([^"]+)"/i)?.[1]?.split(",")[0].trim().split(/\s+/)[0]; const type = tag.match(/\btype="([^"]+)"/i)?.[1];
      if (!srcset || !assetExists(file, srcset)) report("ERROR", file, line, `Broken picture source: ${srcset || "(missing)"}`);
      if (srcset && !extensionTypeMatches(srcset, type)) report("ERROR", file, line, `Picture type mismatch: ${srcset} (${type})`);
      if (type === "image/webp" || type === "image/avif") optimized = true;
    }
    if (img) checkImg(file, text, index, img, optimized, heroPositions.has(index));
  }
  for (const match of text.matchAll(/<img\b[^>]*>/gi)) {
    if (pictureRanges.some(([start, end]) => match.index >= start && match.index < end)) continue;
    checkImg(file, text, match.index, match[0], false, heroPositions.has(match.index));
  }
}
for (const [alt, refs] of altUsage) if (refs.length >= 8) report("INFO", refs[0].split(":")[0], refs[0].split(":")[1], `Repeated alt (${refs.length} uses): ${alt}`);
console.log("Image QA"); for (const [key, value] of Object.entries(summary)) console.log(`${key}: ${value}`);
for (const item of issues) console.log(`${item.level} ${item.file}:${item.line} — ${item.message}`);
if (summary.broken) process.exit(1);
