import fs from "node:fs";
import path from "node:path";
import { allGlossaryPilotTerms as pilotTerms, thirdBatchSlugs } from "./glossary-pilot-data.mjs";

const root = process.cwd();
const glossaryTerms = new Set(
  [...fs.readFileSync(path.join(root, "assets/psychiatry-glossary.js"), "utf8").matchAll(/^(.+?)\|/gm)].map((match) => match[1].trim())
);

const requiredSeoFields = ["title", "description", "ogTitle", "ogDescription"];
const requiredTermFields = ["term", "slug", "shortDefinition", "intro", "sections", "relatedTerms", "relatedSiteLinks", "seo", "schema", "safetyNotes"];

function validateTerm(term, allTerms, knownSlugs, knownTitles, knownDescriptions) {
  const errors = [];
  for (const field of requiredTermFields) if (!(field in term)) errors.push(`${term.slug || "bilinmeyen"}: ${field} eksik`);
  if (!term.term?.trim()) errors.push("term boş olamaz");
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(term.slug || "")) errors.push(`${term.term}: geçersiz slug`);
  if (!term.shortDefinition?.trim()) errors.push(`${term.term}: shortDefinition boş olamaz`);
  if (!term.intro?.trim()) errors.push(`${term.term}: intro boş olamaz`);
  if (knownSlugs.has(term.slug)) errors.push(`${term.term}: yinelenen slug`);
  knownSlugs.add(term.slug);
  for (const field of requiredSeoFields) if (!term.seo?.[field]?.trim()) errors.push(`${term.term}: seo.${field} eksik`);
  if (knownTitles.has(term.seo?.title)) errors.push(`${term.term}: yinelenen SEO title`);
  if (knownDescriptions.has(term.seo?.description)) errors.push(`${term.term}: yinelenen meta description`);
  knownTitles.add(term.seo?.title); knownDescriptions.add(term.seo?.description);
  if (!Array.isArray(term.sections) || term.sections.length < 3) errors.push(`${term.term}: en az üç içerik bölümü gerekir`);
  for (const section of term.sections || []) if (!section.heading?.trim() || !section.body?.trim()) errors.push(`${term.term}: geçersiz içerik bölümü`);
  if (!Array.isArray(term.relatedTerms)) errors.push(`${term.term}: relatedTerms dizi olmalı`);
  if (!Array.isArray(term.relatedSiteLinks)) errors.push(`${term.term}: relatedSiteLinks dizi olmalı`);
  if (!Array.isArray(term.safetyNotes) || !term.safetyNotes.every((note) => note?.trim())) errors.push(`${term.term}: safetyNotes geçersiz`);
  for (const related of term.relatedTerms || []) if (!allTerms.has(related.term)) errors.push(`${term.term}: bilinmeyen ilgili terim ${related.term}`);
  for (const link of term.relatedSiteLinks || []) if (!link.href?.startsWith("/") || !link.label?.trim()) errors.push(`${term.term}: geçersiz site bağlantısı`);
  if (!term.schema?.definedTermDescription?.trim()) errors.push(`${term.term}: schema açıklaması eksik`);
  return errors;
}

export function validateTerms(terms = pilotTerms) {
  const knownSlugs = new Set(); const knownTitles = new Set(); const knownDescriptions = new Set();
  const allTerms = new Set([...glossaryTerms, ...terms.map((term) => term.term)]);
  return terms.flatMap((term) => validateTerm(term, allTerms, knownSlugs, knownTitles, knownDescriptions));
}

function siteLinkExists(href) {
  const local = href === "/" ? "index.html" : path.join(href.replace(/^\//, ""), "index.html");
  return fs.existsSync(path.join(root, local));
}

function textWordCount(html) {
  return html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().split(" ").filter(Boolean).length;
}

function validateRenderedHtml(term, html) {
  const url = `https://www.ozgurozbebit.com.tr/psikiyatri-sozlugu/${term.slug}/`;
  const errors = [];
  if (!html.includes(`<title>${term.seo.title}</title>`)) errors.push(`${term.slug}: title çıktıda yok`);
  if (!html.includes(`<meta name="description" content="${term.seo.description}">`)) errors.push(`${term.slug}: meta description çıktıda yok`);
  if (!html.includes(`<link rel="canonical" href="${url}">`)) errors.push(`${term.slug}: canonical çıktıda yok`);
  if (!html.includes(`<meta property="og:title" content="${term.seo.ogTitle}">`)) errors.push(`${term.slug}: OG title çıktıda yok`);
  if (!html.includes(`<meta property="og:description" content="${term.seo.ogDescription}">`)) errors.push(`${term.slug}: OG description çıktıda yok`);
  if ((html.match(/<h1>/g) || []).length !== 1) errors.push(`${term.slug}: çıktıdaki H1 sayısı bir değil`);
  const json = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  try {
    const types = JSON.parse(json)["@graph"].map((item) => item["@type"]);
    for (const type of ["DefinedTerm", "MedicalWebPage", "BreadcrumbList"]) if (!types.includes(type)) errors.push(`${term.slug}: ${type} schema çıktıda yok`);
  } catch { errors.push(`${term.slug}: JSON-LD geçersiz`); }
  const wordCount = textWordCount(html);
  if (wordCount < 350 || wordCount > 650) errors.push(`${term.slug}: çıktı kelime sayısı ${wordCount}; 350–650 aralığında değil`);
  return errors;
}

function render(term) {
  const url = `https://www.ozgurozbebit.com.tr/psikiyatri-sozlugu/${term.slug}/`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "DefinedTerm", "@id": `${url}#term`, name: term.term, description: term.schema.definedTermDescription, inDefinedTermSet: "https://www.ozgurozbebit.com.tr/psikiyatri-sozlugu/" },
    { "@type": "MedicalWebPage", "@id": `${url}#webpage`, url, name: `${term.term} Nedir?`, description: term.seo.description, inLanguage: "tr-TR", about: { "@id": `${url}#term` }, isPartOf: { "@type": "WebSite", "@id": "https://www.ozgurozbebit.com.tr/#website", name: "Uzm. Dr. Özgür Özbebit | Psikiyatri Uzmanı", url: "https://www.ozgurozbebit.com.tr/" } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://www.ozgurozbebit.com.tr/" }, { "@type": "ListItem", position: 2, name: "Psikiyatri Sözlüğü", item: "https://www.ozgurozbebit.com.tr/psikiyatri-sozlugu/" }, { "@type": "ListItem", position: 3, name: term.term, item: url }] }
  ] };
  const related = [...term.relatedTerms.filter((link) => siteLinkExists(`/psikiyatri-sozlugu/${link.slug}/`)).map((link) => `<a href="/psikiyatri-sozlugu/${link.slug}/">${link.term}</a>`), ...term.relatedSiteLinks.map((link) => `<a href="${link.href}">${link.label}</a>`)].join("\n");
  const sections = term.sections.map((section) => `<section><h2>${section.heading}</h2>${section.body.split("\n\n").map((paragraph) => `<p>${paragraph}</p>`).join("\n")}</section>`).join("\n");
  return `<!doctype html><html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${term.seo.title}</title><meta name="description" content="${term.seo.description}"><meta name="theme-color" content="#f4f1ea"><link rel="canonical" href="${url}"><link rel="icon" type="image/png" href="/favicon.png"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><meta name="robots" content="index, follow, max-image-preview:large"><meta property="og:locale" content="tr_TR"><meta property="og:type" content="article"><meta property="og:title" content="${term.seo.ogTitle}"><meta property="og:description" content="${term.seo.ogDescription}"><meta property="og:url" content="${url}"><meta property="og:image" content="https://www.ozgurozbebit.com.tr/assets/consultation-room.webp"><meta name="twitter:card" content="summary_large_image"><script type="application/ld+json">${JSON.stringify(schema)}</script><link rel="stylesheet" href="/styles.css?v=20260714-glossary-pilot"></head><body class="detail-page glossary-page"><header class="site-header detail-header is-scrolled" data-header><a class="brand" href="/" aria-label="Ana sayfa"><img class="brand-logo" src="/assets/logo2.png" alt="" aria-hidden="true"><span><strong>Uzm. Dr. Özgür ÖZBEBİT</strong><small>Psikiyatri Uzmanı</small></span></a><button class="nav-toggle" type="button" aria-label="Menüyü aç" aria-expanded="false" data-nav-toggle><span></span><span></span></button><nav class="nav" data-nav><a href="/hakkimda/">Hakkımda</a><div class="nav-dropdown" data-nav-dropdown><button class="nav-dropdown-toggle" type="button" aria-expanded="false" data-nav-dropdown-toggle>Hastalıklar</button><div class="nav-dropdown-menu" data-nav-dropdown-menu><a href="/dehb/">DEHB</a><a href="/anksiyete/">Anksiyete</a><a href="/panik-bozukluk">Panik Bozukluk</a><a href="/travma-sonrasi-stres-bozuklugu">Travma Sonrası Stres Bozukluğu</a><a href="/bagimliliklar">Bağımlılıklar</a><a href="/cinsel-islev-bozukluklari">Cinsel İşlev Bozuklukları</a><a href="/fobiler">Fobiler</a><a href="/okb/">OKB</a><a href="/bipolar-bozukluk/">Bipolar Bozukluk</a><a href="/psikotik-bozukluklar">Psikotik Bozukluklar</a><a href="/yeme-bozukluklari">Yeme Bozuklukları</a><a href="/depresyon">Depresyon</a><a href="/uyku-ve-stres">Uyku Bozuklukları</a></div></div><a href="/blog/">Blog</a><a href="/psikiyatri-sozlugu/" aria-current="page">Sözlük</a><a href="/psikiyatride-en-tuhaf-vakalar/">İlginç Vakalar</a><a href="/test-merkezi/">Test Merkezi</a><a href="/randevu/">Randevu</a><a href="/iletisim/">İletişim</a></nav></header><main><nav class="breadcrumb" aria-label="Sayfa yolu"><a href="/">Ana Sayfa</a><span aria-hidden="true">/</span><a href="/psikiyatri-sozlugu/">Psikiyatri Sözlüğü</a><span aria-hidden="true">/</span><span aria-current="page">${term.term}</span></nav><section class="detail-hero glossary-hero"><p class="eyebrow">Psikiyatri sözlüğü</p><h1>${term.term} Nedir?</h1><p class="hero-detail-copy">${term.shortDefinition}</p></section><article class="approach-article" aria-label="${term.term} açıklaması"><p class="lead">${term.intro}</p>${sections}<section><h2>İlgili Sayfalar</h2><div class="glossary-term-related">${related}</div></section><section><div class="glossary-term-note" role="note">${term.safetyNotes.join(" ")}</div><a class="glossary-back-link" href="/psikiyatri-sozlugu/">Psikiyatri sözlüğüne dön</a></section></article></main><footer><p>© <span data-year></span> Uzm. Dr. Özgür Özbebit</p><p>Bu web sitesi bilgilendirme amaçlıdır; acil durumlarda en yakın sağlık kuruluşuna başvurunuz.</p></footer><script src="/script.js?v=20260714-glossary-pilot"></script></body></html>`;
}

const requested = process.argv.slice(2);
const selected = requested.includes("--third-batch") ? pilotTerms.filter((term) => thirdBatchSlugs.includes(term.slug)) : (requested.includes("--second-batch") ? pilotTerms.slice(40, 80) : (requested.length ? pilotTerms.filter((term) => requested.includes(term.slug)) : []));
const unknownSlugs = requested.filter((slug) => slug !== "--second-batch" && slug !== "--third-batch" && !selected.some((term) => term.slug === slug));
const errors = validateTerms();
const linkErrors = pilotTerms.flatMap((term) => term.relatedSiteLinks.filter((link) => !siteLinkExists(link.href)).map((link) => `${term.term}: bulunamayan site bağlantısı ${link.href}`));
const rendered = selected.map((term) => ({ term, html: render(term) }));
const renderedErrors = rendered.flatMap(({ term, html }) => validateRenderedHtml(term, html));
if (errors.length || linkErrors.length || unknownSlugs.length || renderedErrors.length) { console.error([...errors, ...linkErrors, ...unknownSlugs.map((slug) => `${slug}: tanımlı değil`), ...renderedErrors].join("\n")); process.exit(1); }
for (const { term, html } of rendered) { const directory = path.join(root, "psikiyatri-sozlugu", term.slug); fs.mkdirSync(directory, { recursive: true }); fs.writeFileSync(path.join(directory, "index.html"), html); }
console.log(`Doğrulandı ve yazıldı: ${selected.map((term) => term.slug).join(", ") || "yok"}`);
