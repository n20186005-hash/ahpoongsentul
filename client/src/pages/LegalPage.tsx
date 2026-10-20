/* River Market Archive design system: calm parchment surface, Sungai Hijau ink, editorial serif hierarchy. */
import { ArrowLeft, Check, Globe2, ShieldCheck } from "lucide-react";
import React, { useEffect, useState } from "react";
import { readConsent, saveConsentChoice, applyAnalytics } from "../consent";

type Language = "id" | "en";
type PageType = "privacy" | "terms" | "cookies";

const MARK_URL = "/assets/ah-poong-river-mark.png";

const copy = {
  id: {
    back: "Kembali ke panduan",
    privacy: "Kebijakan Privasi",
    terms: "Ketentuan Layanan",
    cookies: "Pengaturan Kuki",
    introPrivacy: "Ringkasan tentang data minimum yang dapat diproses saat Anda memakai panduan independen ini.",
    introTerms: "Ketentuan singkat untuk memakai informasi Ah Poong Sentul Guide secara bertanggung jawab.",
    introCookies: "Kelola izin untuk kuki yang membantu fungsi dan pemahaman penggunaan situs.",
    updated: "Diperbarui: 19 Oktober 2026",
    language: "Bahasa",
    sections: {
      privacy: [
        ["Informasi yang kami proses", "Kami hanya memproses data minimum yang diperlukan untuk menjalankan situs. Data tersebut dapat meliputi data penelusuran teknis seperti alamat IP, jenis peramban, halaman yang dibuka, kuki, tanpa formulir kontak, akun atau pemesanan pada situs ini."],
        ["Cara penggunaan", "Data digunakan untuk menjaga keamanan dan kinerja situs, memahami pola penggunaan secara agregat, meningkatkan kejelasan panduan, dan menjaga fungsi pilihan privasi."],
        ["Layanan pihak ketiga", "Font Google dan peta tertanam membuat permintaan ke layanan Google, terpisah dari pilihan analitik. Google Analytics hanya dimuat setelah persetujuan. Penyedia pihak ketiga memakai kebijakan mereka sendiri. Kami tidak menjual data pribadi dan tidak membuat profil pemasaran."],
        ["Hak Anda", "Anda dapat meminta akses, perbaikan, penghapusan, pembatasan pemrosesan, atau menyampaikan keberatan sesuai hukum yang berlaku. Situs ini tidak menyediakan kanal permintaan data atau formulir kontak. Anda dapat mengubah pilihan analitik melalui Pengaturan Kuki."],
      ],
      terms: [
        ["Sifat informasi", "Situs ini adalah panduan independen untuk tujuan edukasi dan perencanaan awal. Informasi bukan jaminan operasional, promosi, atau pengganti konfirmasi langsung kepada pengelola lokasi."],
        ["Penggunaan konten", "Teks asli dan desain situs dilindungi sesuai hukum yang berlaku. Foto tetap menjadi milik fotografer atau pemegang haknya. Anda dapat merujuk situs ini secara wajar dengan atribusi yang sesuai."],
        ["Ketepatan dan perubahan", "Kami berupaya menyajikan informasi dengan hati-hati, tetapi jam, akses, harga, kondisi parkir, dan layanan dapat berubah tanpa pemberitahuan. Selalu verifikasi kebutuhan perjalanan yang penting sebelum berangkat."],
        ["Batas tanggung jawab", "Situs disediakan sebagaimana adanya. Kami tidak bertanggung jawab atas kerugian yang timbul dari keputusan perjalanan, ketersediaan layanan pihak ketiga, atau perubahan kondisi di lapangan."],
      ],
    },
    essential: "Kuki esensial",
    essentialBody: "Penyimpanan lokal mengingat pilihan persetujuan bila perangkat mengizinkan; situs tetap dapat dibaca tanpa penyimpanan.",
    analytics: "Kuki analitik",
    analyticsBody: "Membantu kami memahami penggunaan situs secara agregat melalui Google Analytics 4.",
    preferences: "Kuki preferensi",
    preferencesBody: "Bahasa dipilih melalui URL halaman, tanpa menyimpan pilihan bahasa.",
    always: "Selalu aktif",
    save: "Simpan preferensi",
    saved: "Preferensi tersimpan di perangkat ini.",
    footer: "Proyek panduan pengunjung independen dan nonkomersial.",
  },
  en: {
    back: "Back to the guide",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    cookies: "Cookie Settings",
    introPrivacy: "A summary of the minimal data that may be processed when you use this independent guide.",
    introTerms: "Brief terms for using Ah Poong Sentul Guide information responsibly.",
    introCookies: "Manage permissions for cookies that support site functions and help us understand usage.",
    updated: "Updated: 19 October 2026",
    language: "Language",
    sections: {
      privacy: [
        ["Information we process", "We process only the minimum data needed to operate the site. This may include technical browsing data such as IP address, browser type, pages viewed, cookies, without a contact form, accounts or booking features on this site."],
        ["How it is used", "Data helps us maintain site security and performance, understand aggregate usage patterns, improve the clarity of this guide, and maintain privacy choices."],
        ["Third-party services", "Google Fonts and the embedded map make requests to Google separately from analytics choices. Google Analytics loads only after consent. Third-party providers apply their own policies. We do not sell personal data or create marketing profiles."],
        ["Your rights", "You may request access, correction, deletion, restriction of processing, or raise an objection where applicable law provides these rights. This site provides no data-request channel or contact form. You can change analytics choices in Cookie Settings."],
      ],
      terms: [
        ["Nature of this information", "This site is an independent guide for educational use and early-stage trip planning. It is not an operational guarantee, promotion, or substitute for confirmation with the location’s operator."],
        ["Use of content", "Original writing and site design are protected as applicable law permits. Photographs remain the property of their photographers or rights holders. You may reasonably refer to this site with appropriate attribution."],
        ["Accuracy and changes", "We aim to present information carefully, but hours, access, prices, parking conditions, and services can change without notice. Verify important travel needs before you depart."],
        ["Limitation of liability", "The site is provided as is. We are not responsible for loss arising from travel decisions, third-party service availability, or changing conditions on the ground."],
      ],
    },
    essential: "Essential cookies",
    essentialBody: "Local storage remembers consent choices when permitted; pages remain readable when storage is blocked.",
    analytics: "Analytics cookies",
    analyticsBody: "Help us understand aggregate site use through Google Analytics 4.",
    preferences: "Preference cookies",
    preferencesBody: "Language follows the page URL; no language preference is stored.",
    always: "Always active",
    save: "Save preferences",
    saved: "Your preferences have been saved on this device.",
    footer: "An independent, non-commercial visitor information project.",
  },
} as const;

function preference(defaultValue: boolean, key: string) {
  try {
    const saved = JSON.parse(localStorage.getItem("ahpoong-consent") || "{}");
    return typeof saved[key] === "boolean" ? saved[key] : defaultValue;
  } catch {
    return defaultValue;
  }
}

export default function LegalPage({ page, initialLanguage = "id" }: { page: PageType; initialLanguage?: Language }) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [analytics, setAnalytics] = useState(false);
  const [preferences, setPreferences] = useState(true);
  const [saved, setSaved] = useState<boolean | null>(null);

  useEffect(() => {
    applyAnalytics(readConsent()?.analytics === true);
    setAnalytics(preference(false, "analytics"));
    setPreferences(preference(true, "preferences"));
  }, []);

  const t = copy[language];
  const title = page === "privacy" ? t.privacy : page === "terms" ? t.terms : t.cookies;
  const intro = page === "privacy" ? t.introPrivacy : page === "terms" ? t.introTerms : t.introCookies;

  function changeLanguage(next: Language) {
    window.location.href = `${next === "en" ? "/en" : ""}/${page}/`;
  }

  function savePreferences() {
    setSaved(saveConsentChoice({ essential: true, analytics, preferences: false }));
  }

  return (
    <main className="legal-shell">
      <header className="legal-header">
        <a className="brand brand--ink" href={language === "en" ? "/en/" : "/"}>
          <img src={MARK_URL} alt="" />
          <span>Ah Poong <em>Sentul Guide</em></span>
        </a>
        <div className="language-toggle language-toggle--paper" aria-label={t.language}>
          <button className={language === "id" ? "is-active" : ""} onClick={() => changeLanguage("id")}>ID</button>
          <button className={language === "en" ? "is-active" : ""} onClick={() => changeLanguage("en")}>EN</button>
        </div>
      </header>
      <div className="legal-river-key" aria-hidden="true"><span>RIVER RECORD</span><i /> <b>-6.5699, 106.8459</b><i /> <span>CATATAN SUNGAI</span></div>

      <section className="legal-hero">
        <div className="legal-kicker"><ShieldCheck size={15} /> {t.updated}</div>
        <h1>{title}</h1>
        <p>{intro}</p>
        <a className="text-link" href={language === "en" ? "/en/" : "/"}><ArrowLeft size={16} /> {t.back}</a>
      </section>

      <section className="legal-content" aria-label={title}>
        {page !== "cookies" ? (
          t.sections[page].map(([heading, body]) => (
            <article key={heading} className="legal-card">
              <h2>{heading}</h2>
              <p>{body}</p>
            </article>
          ))
        ) : (
          <div className="cookie-panel">
            <PreferenceRow title={t.essential} body={t.essentialBody} checked disabled label={t.always} onChange={() => undefined} />
            <PreferenceRow title={t.analytics} body={t.analyticsBody} checked={analytics} onChange={setAnalytics} />

            <div className="cookie-actions">
              <button className="primary-button" onClick={savePreferences}><Check size={17} /> {t.save}</button>
              {saved !== null && <span className="saved-state" role="status"><Globe2 size={15} /> {saved ? t.saved : language === "id" ? "Pilihan berlaku di halaman ini, tetapi tidak tersimpan di perangkat." : "Choice applies on this page but could not be saved on this device."}</span>}
            </div>
          </div>
        )}
      </section>

      <footer className="legal-footer"><p>{t.footer}</p><a href={language === "en" ? "/en/privacy/" : "/privacy/"}>{t.privacy}</a> · <a href={language === "en" ? "/en/terms/" : "/terms/"}>{t.terms}</a> · <a href={language === "en" ? "/en/cookies/" : "/cookies/"}>{t.cookies}</a></footer>
    </main>
  );
}

function PreferenceRow({ title, body, checked, onChange, disabled, label }: { title: string; body: string; checked: boolean; onChange: (next: boolean) => void; disabled?: boolean; label?: string }) {
  return (
    <div className="preference-row">
      <div><h2>{title}</h2><p>{body}</p></div>
      {disabled ? <span className="always-pill">{label}</span> : (
        <button className={`switch ${checked ? "is-on" : ""}`} role="switch" aria-checked={checked} onClick={() => onChange(!checked)}>
          <span />
        </button>
      )}
    </div>
  );
}
