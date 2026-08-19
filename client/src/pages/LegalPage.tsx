/* River Market Archive design system: calm parchment surface, Sungai Hijau ink, editorial serif hierarchy. */
import { ArrowLeft, Check, Globe2, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

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
    updated: "Diperbarui: Agustus 2026",
    language: "Bahasa",
    sections: {
      privacy: [
        ["Informasi yang kami proses", "Kami hanya memproses data minimum yang diperlukan untuk menjalankan situs. Data tersebut dapat meliputi data penelusuran teknis seperti alamat IP, jenis peramban, halaman yang dibuka, kuki, serta informasi yang Anda berikan secara sukarela bila memilih menghubungi kami."],
        ["Cara penggunaan", "Data digunakan untuk menjaga keamanan dan kinerja situs, memahami pola penggunaan secara agregat, meningkatkan kejelasan panduan, menanggapi permintaan, serta memenuhi kewajiban hukum yang berlaku."],
        ["Layanan pihak ketiga", "Peta tertanam dan analitik, bila Anda mengizinkannya, dapat diproses oleh penyedia pihak ketiga sesuai kebijakan mereka sendiri. Kami tidak menjual data pribadi dan tidak membuat profil pemasaran."],
        ["Hak Anda", "Anda dapat meminta akses, perbaikan, penghapusan, pembatasan pemrosesan, atau menyampaikan keberatan sesuai hukum yang berlaku. Gunakan kanal kontak yang tersedia pada situs untuk permintaan terkait data."],
      ],
      terms: [
        ["Sifat informasi", "Situs ini adalah panduan independen untuk tujuan edukasi dan perencanaan awal. Informasi bukan jaminan operasional, promosi, atau pengganti konfirmasi langsung kepada pengelola lokasi."],
        ["Penggunaan konten", "Teks asli dan desain situs dilindungi sesuai hukum yang berlaku. Foto tetap menjadi milik fotografer atau pemegang haknya. Anda dapat merujuk situs ini secara wajar dengan atribusi yang sesuai."],
        ["Ketepatan dan perubahan", "Kami berupaya menyajikan informasi dengan hati-hati, tetapi jam, akses, harga, kondisi parkir, dan layanan dapat berubah tanpa pemberitahuan. Selalu verifikasi kebutuhan perjalanan yang penting sebelum berangkat."],
        ["Batas tanggung jawab", "Situs disediakan sebagaimana adanya. Kami tidak bertanggung jawab atas kerugian yang timbul dari keputusan perjalanan, ketersediaan layanan pihak ketiga, atau perubahan kondisi di lapangan."],
      ],
    },
    essential: "Kuki esensial",
    essentialBody: "Diperlukan agar situs dapat menyimpan pilihan dasar dan bekerja dengan benar.",
    analytics: "Kuki analitik",
    analyticsBody: "Membantu kami memahami penggunaan situs secara agregat melalui Google Analytics 4.",
    preferences: "Kuki preferensi",
    preferencesBody: "Mengingat pilihan bahasa Anda pada perangkat ini.",
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
    updated: "Updated: August 2026",
    language: "Language",
    sections: {
      privacy: [
        ["Information we process", "We process only the minimum data needed to operate the site. This may include technical browsing data such as IP address, browser type, pages viewed, cookies, and information you voluntarily provide if you choose to contact us."],
        ["How it is used", "Data helps us maintain site security and performance, understand aggregate usage patterns, improve the clarity of this guide, respond to requests, and meet applicable legal obligations."],
        ["Third-party services", "Embedded maps and analytics, when you allow them, may be processed by third-party providers under their own policies. We do not sell personal data or create marketing profiles."],
        ["Your rights", "You may request access, correction, deletion, restriction of processing, or raise an objection where applicable law provides these rights. Use the contact channel made available on this site for data-related requests."],
      ],
      terms: [
        ["Nature of this information", "This site is an independent guide for educational use and early-stage trip planning. It is not an operational guarantee, promotion, or substitute for confirmation with the location’s operator."],
        ["Use of content", "Original writing and site design are protected as applicable law permits. Photographs remain the property of their photographers or rights holders. You may reasonably refer to this site with appropriate attribution."],
        ["Accuracy and changes", "We aim to present information carefully, but hours, access, prices, parking conditions, and services can change without notice. Verify important travel needs before you depart."],
        ["Limitation of liability", "The site is provided as is. We are not responsible for loss arising from travel decisions, third-party service availability, or changing conditions on the ground."],
      ],
    },
    essential: "Essential cookies",
    essentialBody: "Needed for the site to remember core choices and operate correctly.",
    analytics: "Analytics cookies",
    analyticsBody: "Help us understand aggregate site use through Google Analytics 4.",
    preferences: "Preference cookies",
    preferencesBody: "Remember your language choice on this device.",
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

export default function LegalPage({ page }: { page: PageType }) {
  const [language, setLanguage] = useState<Language>("id");
  const [analytics, setAnalytics] = useState(false);
  const [preferences, setPreferences] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setLanguage(localStorage.getItem("ahpoong-language") === "en" ? "en" : "id");
    setAnalytics(preference(false, "analytics"));
    setPreferences(preference(true, "preferences"));
  }, []);

  const t = copy[language];
  const title = page === "privacy" ? t.privacy : page === "terms" ? t.terms : t.cookies;
  const intro = page === "privacy" ? t.introPrivacy : page === "terms" ? t.introTerms : t.introCookies;

  function changeLanguage(next: Language) {
    setLanguage(next);
    localStorage.setItem("ahpoong-language", next);
  }

  function savePreferences() {
    localStorage.setItem("ahpoong-consent", JSON.stringify({ essential: true, analytics, preferences }));
    setSaved(true);
  }

  return (
    <main className="legal-shell">
      <header className="legal-header">
        <a className="brand brand--ink" href="/">
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
        <a className="text-link" href="/"><ArrowLeft size={16} /> {t.back}</a>
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
            <PreferenceRow title={t.preferences} body={t.preferencesBody} checked={preferences} onChange={setPreferences} />
            <div className="cookie-actions">
              <button className="primary-button" onClick={savePreferences}><Check size={17} /> {t.save}</button>
              {saved && <span className="saved-state"><Globe2 size={15} /> {t.saved}</span>}
            </div>
          </div>
        )}
      </section>

      <footer className="legal-footer">{t.footer}</footer>
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
