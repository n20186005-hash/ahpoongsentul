import React from "react";
import { getTopicContent, getRelated, getGroupOf, topicUrl } from "../lib/topics";

interface Props {
  slug: string;
  language: "id" | "en";
}

export default function TopicPage({ slug, language }: Props) {
  const c = getTopicContent(slug, language);
  if (!c) return null;

  const isId = language === "id";
  const home = isId ? "/" : "/en/";
  const altUrl = isId ? `/en/${slug}/` : `/${slug}/`;
  const altLabel = isId ? "English" : "Bahasa";
  const group = getGroupOf(slug);
  const groupLabel = group ? (isId ? group.labelId : group.labelEn) : "";
  const related = getRelated(slug, language, 4);

  return (
    <>
      <header className="site-header site-header--paper">
        <div className="header-inner">
          <a className="brand" href={home}>
            <span className="brand-mark" aria-hidden="true">⊙</span>
            <span className="brand-text">
              Ah Poong Sentul <em>{isId ? "Panduan Independen" : "Independent Guide"}</em>
            </span>
          </a>
          <nav className="site-nav">
            <a href="/#panduan">{isId ? "Panduan" : "Guide"}</a>
            <a href="/#kunjungan">{isId ? "Kunjungan" : "Visit"}</a>
            <a href="/#akses">{isId ? "Akses" : "Getting here"}</a>
            <a href="/#sekitar">{isId ? "Sekitar" : "Nearby"}</a>
            <a className="lang-switch" href={altUrl}>
              {altLabel}
            </a>
          </nav>
        </div>
      </header>

      <main className="topic-shell">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href={home}>{isId ? "Beranda" : "Home"}</a>
          <span aria-hidden="true">/</span>
          <a href="/#panduan">{groupLabel}</a>
          <span aria-hidden="true">/</span>
          <span className="breadcrumb-current">{c.title}</span>
        </nav>

        <section className="topic-hero">
          {groupLabel && <p className="topic-kicker">{groupLabel}</p>}
          <h1>{c.h1}</h1>
          <p className="topic-lead">{c.lead}</p>
          <p className="topic-updated">{c.updated}</p>
        </section>

        {c.facts.length > 0 && (
          <section className="facts-grid" aria-label="Fakta singkat">
            {c.facts.map(([label, value], i) => (
              <div className="fact-card" key={i}>
                <p className="fact-label">{label}</p>
                <p className="fact-value">{value}</p>
              </div>
            ))}
          </section>
        )}

        <section className="topic-content">
          {c.sections.map((s, i) => (
            <div className="topic-block" key={i}>
              <h2>{s.heading}</h2>
              <p>{s.body}</p>
            </div>
          ))}
        </section>

        <section className="content-section" id="faq">
          <p className="section-kicker">{isId ? "Pertanyaan Umum" : "Common Questions"}</p>
          <h2>{isId ? "FAQ" : "FAQ"}</h2>
          <div className="faq-list topic-faq-list">
            {c.faqs.map((f, i) => (
              <details key={i}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {related.length > 0 && (
          <section className="topic-related">
            <h2>{isId ? "Baca juga" : "Related guides"}</h2>
            <div className="related-grid">
              {related.map((r) => (
                <a className="related-card" href={topicUrl(r, language)} key={r}>
                  <span>{getTopicContent(r, language)?.title ?? r}</span>
                </a>
              ))}
            </div>
          </section>
        )}

        <section className="disclaimer">
          <p>
            {isId
              ? "Panduan independen non-komersial. Bukan situs resmi, pengelola, atau agen tiket Ah Poong Sentul. Verifikasi jam, harga, dan status operasional di lokasi sebelum berangkat."
              : "An independent non-commercial guide. Not the official site, operator, or ticket agent of Ah Poong Sentul. Verify hours, prices, and operating status on site before travelling."}
          </p>
        </section>
      </main>

      <footer className="site-footer site-footer--paper">
        <div className="footer-inner">
          <p className="footer-brand">Ah Poong Sentul — {isId ? "Panduan Independen" : "Independent Guide"}</p>
          <nav className="footer-nav">
            <a href={home}>{isId ? "Beranda" : "Home"}</a>
            <a href="/#panduan">{isId ? "Panduan Topik" : "Topic Guide"}</a>
            <a href="/privacy/">{isId ? "Privasi" : "Privacy"}</a>
            <a href="/terms/">{isId ? "Syarat" : "Terms"}</a>
            <a href="/cookies/">{isId ? "Cookie" : "Cookies"}</a>
            {isId && <a href="/en/">English</a>}
            {!isId && <a href="/">Bahasa</a>}
          </nav>
          <p className="footer-note">
            {isId
              ? "Bukan situs resmi atau agen tiket. Data lokasi dari Google Maps (diperiksa 19 Okt 2026); jam & harga fasilitas belum seluruhnya terverifikasi."
              : "Not an official site or ticket agent. Location data from Google Maps (checked 19 Oct 2026); hours & facility prices are not all verified."}
          </p>
        </div>
      </footer>
    </>
  );
}
