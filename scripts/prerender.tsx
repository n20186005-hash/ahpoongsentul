import React from 'react';
import {renderToString} from 'react-dom/server';
import {readFile,mkdir,writeFile} from 'node:fs/promises';
import path from 'node:path';
import Home from '../client/src/pages/Home';
import LegalPage from '../client/src/pages/LegalPage';
const origin='https://ahpoongsentul.com';const dir=path.resolve('dist/public');
const pages=[['/','/en/'],['/privacy/','/en/privacy/'],['/terms/','/en/terms/'],['/cookies/','/en/cookies/']];
const titles={id:['Ah Poong Sentul Bogor: Jam Buka, Biaya, Menu & Lokasi','Kebijakan Privasi | Ah Poong Sentul Guide','Ketentuan Layanan | Ah Poong Sentul Guide','Pengaturan Kuki | Ah Poong Sentul Guide'],en:['Ah Poong Sentul Bogor: Hours, Costs, Menus & Location','Privacy Policy | Ah Poong Sentul Guide','Terms of Use | Ah Poong Sentul Guide','Cookie Settings | Ah Poong Sentul Guide']};
const descriptions={id:['Panduan independen Ah Poong Sentul di Ecoart Park, Bogor: jam peta bertanggal, perbedaan biaya masuk dan makan, menu yang perlu dikonfirmasi, lokasi serta FAQ.','Cara Ah Poong Sentul Guide menggunakan data teknis, layanan Google, penyimpanan lokal dan pilihan analitik.','Ketentuan panduan independen Ah Poong Sentul: informasi kunjungan, perubahan layanan, sumber dan hak konten.','Kelola persetujuan Google Analytics dan penyimpanan pilihan pada Ah Poong Sentul Guide.'],en:['Independent Ah Poong Sentul guide in Ecoart Park, Bogor: dated map hours, admission versus dining costs, menus to confirm, location and visitor FAQ.','How Ah Poong Sentul Guide uses technical data, Google services, local storage and analytics choices.','Terms for the independent Ah Poong Sentul guide: visitor information, changing services, sources and content rights.','Manage Google Analytics consent and preference storage for Ah Poong Sentul Guide.']};
const esc=(s:string)=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
let template=await readFile(path.join(dir,'index.html'),'utf8');
template=template.replace(/<title>[\s\S]*?<\/title>/g,'').replace(/<link\b[^>]*rel="(?:canonical|alternate)"[^>]*>/g,'').replace(/<meta\b[^>]*>/g,tag=>/name="(?:description|twitter:[^"]*)"|property="og:[^"]*"/.test(tag)?'':tag);
for(const [i,pair] of pages.entries())for(const [j,route] of pair.entries()){
 const lang=j===0?'id':'en';const title=titles[lang][i];const description=descriptions[lang][i];
 const head=`<title>${esc(title)}</title><meta name="description" content="${esc(description)}"><meta name="robots" content="index, follow"><link rel="canonical" href="${origin+route}"><link rel="alternate" hreflang="id" href="${origin+pair[0]}"><link rel="alternate" hreflang="en" href="${origin+pair[1]}"><link rel="alternate" hreflang="x-default" href="${origin+pair[0]}"><meta property="og:type" content="website"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${origin+route}"><meta property="og:locale" content="${lang==='id'?'id_ID':'en_US'}"><meta property="og:image" content="${origin}/assets/ah-poong-riverside-hero.png"><meta name="twitter:card" content="summary_large_image">`;
 const body=renderToString(i===0 ? <Home initialLanguage={lang}/> : <LegalPage initialLanguage={lang} page={(['privacy','terms','cookies'] as const)[i-1]}/>);
 const html=template.replace(/<html lang="[^"]*">/,`<html lang="${lang}">`).replace('</head>',head+'</head>').replace('<div id="root"></div>',`<div id="root">${body}</div>`);
 const target=path.join(dir,route.slice(1),'index.html');await mkdir(path.dirname(target),{recursive:true});await writeFile(target,html);
}
await writeFile(path.join(dir,'404.html'),'<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex, follow"><title>404 — Ah Poong Sentul Guide</title></head><body><main><h1>404</h1><p>Halaman tidak ditemukan / Page not found.</p><a href="/">Panduan Bahasa Indonesia</a> · <a href="/en/">English guide</a></main></body></html>');
await writeFile(path.join(dir,'robots.txt'),`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
await writeFile(path.join(dir,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${pages.flatMap(p=>p.map(route=>`<url><loc>${origin+route}</loc><xhtml:link rel="alternate" hreflang="id" href="${origin+p[0]}"/><xhtml:link rel="alternate" hreflang="en" href="${origin+p[1]}"/><xhtml:link rel="alternate" hreflang="x-default" href="${origin+p[0]}"/></url>`)).join('')}</urlset>`);
console.log('Prerendered 8 topic-paired language pages, noindex404, sitemap and robots.');
