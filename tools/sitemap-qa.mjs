import fs from "node:fs";
import path from "node:path";

const domain = "https://www.ozgurozbebit.com.tr";
const xml = fs.readFileSync("sitemap.xml", "utf8");
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const errors = [];
const seen = new Set();
for (const url of urls) {
  if (!url.startsWith(`${domain}/`) || !url.endsWith("/")) errors.push(`Geçersiz sitemap URL: ${url}`);
  if (seen.has(url)) errors.push(`Yinelenen sitemap URL: ${url}`);
  seen.add(url);
  const pathname = new URL(url).pathname;
  const file = pathname === "/" ? "index.html" : path.join(pathname.slice(1), "index.html");
  if (!fs.existsSync(file)) { errors.push(`HTML bulunamadı: ${url}`); continue; }
  const html = fs.readFileSync(file, "utf8");
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
  if (!canonical) errors.push(`Canonical eksik: ${url}`);
  else if (canonical !== url) errors.push(`Canonical uyuşmuyor: ${url} → ${canonical}`);
  if (/<meta name="robots" content="[^"]*noindex/i.test(html)) errors.push(`Noindex sitemap URL: ${url}`);
}
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`Sitemap QA başarılı: ${urls.length} URL; HTTP testi statik dosya yapısı nedeniyle yapılmadı.`);
