import React from "react";
import { renderToString } from "react-dom/server";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import Home from "../client/src/pages/Home";
import LegalPage from "../client/src/pages/LegalPage";
import TopicPage from "../client/src/components/TopicPage";
import { TOPIC_SLUGS, getTopicContent } from "../client/src/lib/topics";

const origin = "https://ahpoongsentul.com";
const dir = path.resolve("dist/public");
const assetImage = `${origin}/assets/ah-poong-riverside-hero.png`;

const esc = (s: string) =>
  s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

interface PageSpec {
  path: string; // canonical path, leading + trailing slash
  lang: "id" | "en";
  alternates: { hreflang: string; href: string }[];
  title: string;
  description: string;
  ldJson: string;
  render: () => React.ReactElement;
}

const pages: PageSpec[] = [];
const add = (s: PageSpec) => pages.push(s);

// ----- Home -----
const homeLd = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "@id": "https://ahpoongsentul.com/#attraction",
    name: "Ah Poong Sentul",
    description:
      "Panduan independen non-komersial untuk Ah Poong Sentul, ruang kuliner tepi air di Ecoart Park Sentul City, Bogor. Jam, biaya, akses, dan tips kunjungan.",
    isAccessibleForFree: true,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ecoart Park Sentul City, Jl. Ir H. Juanda, Cipambuan",
      addressLocality: "Babakan Madang",
      addressRegion: "Jawa Barat",
      postalCode: "16710",
      addressCountry: "ID",
    },
    geo: { "@type": "GeoCoordinates", latitude: -6.5699273, longitude: 106.8458556 },
    sameAs: [
      "https://maps.app.goo.gl/kr7TTUgpwtk8vd1R7",
      "https://www.google.com/maps/place/?q=Ah+Poong+Sentul",
    ],
    image: [assetImage],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.3",
      reviewCount: "9886",
      author: { "@type": "Organization", name: "Google Maps" },
      datePublished: "2026-10-19",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ah Poong Sentul — Panduan Wisata Independen",
    url: "https://ahpoongsentul.com/",
    inLanguage: ["id", "en"],
    publisher: {
      "@type": "Organization",
      name: "Ah Poong Sentul Guide",
      url: "https://ahpoongsentul.com/",
    },
  },
]);

const homeTitles = {
  id: "Ah Poong Sentul Bogor: Jam Buka, Biaya, Menu & Lokasi",
  en: "Ah Poong Sentul Bogor: Hours, Costs, Menus & Location",
};
const homeDescriptions = {
  id: "Panduan independen Ah Poong Sentul di Ecoart Park, Bogor: jam peta bertanggal, perbedaan biaya masuk dan makan, menu yang perlu dikonfirmasi, lokasi serta FAQ.",
  en: "Independent Ah Poong Sentul guide in Ecoart Park, Bogor: dated map hours, admission versus dining costs, menus to confirm, location and visitor FAQ.",
};

for (const lang of ["id", "en"] as const) {
  const pathStr = lang === "id" ? "/" : "/en/";
  add({
    path: pathStr,
    lang,
    alternates: [
      { hreflang: "id", href: `${origin}/` },
      { hreflang: "en", href: `${origin}/en/` },
      { hreflang: "x-default", href: `${origin}/` },
    ],
    title: homeTitles[lang],
    description: homeDescriptions[lang],
    ldJson: homeLd,
    render: () => <Home initialLanguage={lang} />,
  });
}

// ----- Legal -----
const legalTypes = ["privacy", "terms", "cookies"] as const;
const legalMeta: Record<string, { id: { t: string; d: string }; en: { t: string; d: string } }> = {
  privacy: {
    id: {
      t: "Kebijakan Privasi | Ah Poong Sentul Guide",
      d: "Cara Ah Poong Sentul Guide menggunakan data teknis, layanan Google, penyimpanan lokal dan pilihan analitik.",
    },
    en: {
      t: "Privacy Policy | Ah Poong Sentul Guide",
      d: "How Ah Poong Sentul Guide uses technical data, Google services, local storage and analytics choices.",
    },
  },
  terms: {
    id: {
      t: "Ketentuan Layanan | Ah Poong Sentul Guide",
      d: "Ketentuan panduan independen Ah Poong Sentul: informasi kunjungan, perubahan layanan, sumber dan hak konten.",
    },
    en: {
      t: "Terms of Use | Ah Poong Sentul Guide",
      d: "Terms for the independent Ah Poong Sentul guide: visitor information, changing services, sources and content rights.",
    },
  },
  cookies: {
    id: {
      t: "Pengaturan Kuki | Ah Poong Sentul Guide",
      d: "Kelola persetujuan Google Analytics dan penyimpanan pilihan pada Ah Poong Sentul Guide.",
    },
    en: {
      t: "Cookie Settings | Ah Poong Sentul Guide",
      d: "Manage Google Analytics consent and preference storage for Ah Poong Sentul Guide.",
    },
  },
};

for (const type of legalTypes) {
  for (const lang of ["id", "en"] as const) {
    const pathStr = lang === "id" ? `/${type}/` : `/en/${type}/`;
    const meta = legalMeta[type][lang];
    add({
      path: pathStr,
      lang,
      alternates: [
        { hreflang: "id", href: `${origin}/${type}/` },
        { hreflang: "en", href: `${origin}/en/${type}/` },
        { hreflang: "x-default", href: `${origin}/${type}/` },
      ],
      title: meta.t,
      description: meta.d,
      ldJson: "",
      render: () => <LegalPage type={type} language={lang} />,
    });
  }
}

// ----- Topic pages -----
function buildTopicLd(slug: string, lang: "id" | "en", url: string): string {
  const c = getTopicContent(slug, lang);
  if (!c) return "";
  const base = origin + (lang === "en" ? "/en/" : "/");
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ah Poong Sentul", item: base },
      { "@type": "ListItem", position: 2, name: c.title, item: url },
    ],
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: c.h1,
    url,
    inLanguage: lang === "en" ? "en" : "id",
    about: { "@type": "TouristAttraction", name: "Ah Poong Sentul", url: base },
  };
  return JSON.stringify([breadcrumb, faq, webPage]);
}

for (const slug of TOPIC_SLUGS) {
  const idC = getTopicContent(slug, "id");
  const enC = getTopicContent(slug, "en");
  if (!idC || !enC) continue;
  const idUrl = `${origin}/${slug}/`;
  const enUrl = `${origin}/en/${slug}/`;

  add({
    path: `/${slug}/`,
    lang: "id",
    alternates: [
      { hreflang: "id", href: idUrl },
      { hreflang: "en", href: enUrl },
      { hreflang: "x-default", href: idUrl },
    ],
    title: idC.metaTitle,
    description: idC.metaDescription,
    ldJson: buildTopicLd(slug, "id", idUrl),
    render: () => <TopicPage slug={slug} language="id" />,
  });
  add({
    path: `/en/${slug}/`,
    lang: "en",
    alternates: [
      { hreflang: "id", href: idUrl },
      { hreflang: "en", href: enUrl },
      { hreflang: "x-default", href: idUrl },
    ],
    title: enC.metaTitle,
    description: enC.metaDescription,
    ldJson: buildTopicLd(slug, "en", enUrl),
    render: () => <TopicPage slug={slug} language="en" />,
  });
}

// ----- Render -----
let template = await readFile(path.join(dir, "index.html"), "utf8");
template = template
  .replace(/<title>[\s\S]*?<\/title>/g, "")
  .replace(/<link\b[^>]*\srel="(?:canonical|alternate)"[^>]*>/gi, "")
  .replace(
    /<meta\b[^>]*(?:name="description"|property="og:[^"]*"|name="twitter:[^"]*")[^>]*>/gi,
    "",
  )
  .replace(
    /<script\b[^>]*\stype="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi,
    "",
  );

// Make prerendering idempotent: the home page target IS dist/public/index.html,
// which pollutes this template on re-runs. Reset the #root container to empty so
// every page gets its own freshly-rendered body regardless of prior runs.
template = template.replace(/<div id="root">[\s\S]*?<\/div><\/body>/, '<div id="root"></div></body>');

for (const p of pages) {
  const head =
    `<title>${esc(p.title)}</title>` +
    `<meta name="description" content="${esc(p.description)}">` +
    `<meta name="robots" content="index, follow">` +
    `<link rel="canonical" href="${origin}${p.path}">` +
    p.alternates
      .map((a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${a.href}">`)
      .join("") +
    `<meta property="og:type" content="website">` +
    `<meta property="og:title" content="${esc(p.title)}">` +
    `<meta property="og:description" content="${esc(p.description)}">` +
    `<meta property="og:url" content="${origin}${p.path}">` +
    `<meta property="og:locale" content="${p.lang === "id" ? "id_ID" : "en_US"}">` +
    `<meta property="og:image" content="${assetImage}">` +
    `<meta name="twitter:card" content="summary_large_image">` +
    (p.ldJson ? `<script type="application/ld+json">${p.ldJson}</script>` : "");

  const body = renderToString(p.render());
  const html = template
    .replace(/<html lang="[^"]*">/, `<html lang="${p.lang}">`)
    .replace("</head>", `${head}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  const target = path.join(dir, p.path.slice(1), "index.html");
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, html);
}

await writeFile(
  path.join(dir, "404.html"),
  '<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex, follow"><title>404 — Ah Poong Sentul Guide</title></head><body><main><h1>404</h1><p>Halaman tidak ditemukan / Page not found.</p><a href="/">Panduan Bahasa Indonesia</a> · <a href="/en/">English guide</a></main></body></html>',
);

await writeFile(
  path.join(dir, "robots.txt"),
  `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`,
);

await writeFile(
  path.join(dir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${pages
    .map(
      (p) =>
        `<url><loc>${origin}${p.path}</loc>${p.alternates
          .map(
            (a) =>
              `<xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`,
          )
          .join("")}</url>`,
    )
    .join("")}</urlset>`,
);

console.log(
  `Prerendered ${pages.length} pages (${TOPIC_SLUGS.length} topics x 2 languages + home + legal).`,
);
