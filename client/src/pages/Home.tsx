/* River Market Archive design system: a tropical field guide with river-line motifs, handwritten notes and quiet editorial motion. */
import React, { useEffect, useState } from "react";
import { readConsent, saveConsentChoice, applyAnalytics } from "../consent";
import {
  ArrowDownRight, ArrowUpRight, BusFront, CarFront, ChevronRight, Clock3, Compass, CupSoda,
  ExternalLink, Footprints, Fuel, Globe2, Info, MapPin, Menu, MoonStar, ParkingCircle,
  Plane, ShowerHead, Sparkles, Store, Ticket, TrainFront, Trees, Utensils, X,
} from "lucide-react";

type Language = "id" | "en";

const ASSETS = {
  hero: "/assets/ah-poong-riverside-hero.jpg",
  pavilion: "/assets/ah-poong-pavilion-detail.jpg",
  riverwalk: "/assets/ah-poong-riverwalk.jpg",
  mark: "/assets/ah-poong-river-mark.png",
  realMarket: "/assets/ah-poong-riverside-real.jpg",
  realRiver: "/assets/ah-poong-river-real.jpg",
};

const mapUrl = "https://maps.app.goo.gl/kr7TTUgpwtk8vd1R7";

function StructuredData({ faqs }: { faqs: readonly (readonly [string, string])[] }) {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: "Ah Poong Sentul",
      description: "Riverside dining complex and floating market in Ecoart Park Sentul City, Bogor Regency, West Java, Indonesia.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "CRJW+28H, Jl. Ir H. Juanda, Cipambuan, Kec. Babakan Madang",
        addressLocality: "Kabupaten Bogor",
        addressRegion: "Jawa Barat",
        postalCode: "16710",
        addressCountry: "ID",
      },
      geo: { "@type": "GeoCoordinates", latitude: -6.5699273, longitude: 106.8458556 },
      hasMap: mapUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const copy = {
  id: {
    nav: ["Ringkasan", "Cerita tempat", "Kunjungan", "Akses", "Sekitar", "Tanya jawab"],
    openMap: "Buka lokasi di Google Maps",
    plan: "Rencanakan kunjungan",
    close: "Tutup navigasi",
    menu: "Buka navigasi",
    guide: "Panduan pengunjung independen · nonkomersial",
    eyebrow: "Sentul · Kabupaten Bogor · Jawa Barat",
    title: ["Ah Poong Sentul", "kuliner tepi Sungai Cikeas."],
    intro: "Ah Poong Sentul adalah ruang makan di tepi air dalam Ecoart Park Sentul City—tempat untuk memadukan jeda, hidangan regional, dan kunjungan di kawasan Bogor.",
    photoNote: "Citra suasana untuk panduan ini. Kondisi dan tampilan di lokasi dapat berubah.",
    quick: [
      ["Peta Google", "4,3 / 5", "9.886 ulasan · 19 Oktober 2026"],
      ["Kategori", "Pasar terapung", "Kompleks kuliner tepi air"],
      ["Jam peta", "Sen–Jum 10–21", "Sab–Min 08–22 · 19 Okt 2026"],
      ["Saran alokasi waktu", "1–2 jam", "Tambahkan waktu saat akhir pekan"],
    ],
    index: "Daftar lapangan",
    introKicker: "01 · ORIENTASI",
    overviewTitle: "Bukan sekadar tempat makan. Ini adalah jeda di tepian Sentul.",
    overviewBody: "Ah Poong Sentul tercantum di Google Maps sebagai pasar terapung dan kompleks makan tepi sungai. Area ini berada di Ecoart Park Sentul City, di sisi Jalan Ir. H. Juanda, Cipambuan. Suasananya paling mudah dibaca lewat tiga unsur: air, paviliun, dan meja-meja yang membuat kunjungan terasa seperti singgah, bukan sekadar transaksi cepat.",
    cards: [
      ["Nama di peta", "Ah Poong Sentul"],
      ["Alamat", "CRJW+28H, Jl. Ir H. Juanda, Cipambuan, Babakan Madang, Kabupaten Bogor 16710"],
      ["Koordinat", "-6.5699273, 106.8458556"],
      ["Konteks", "Di dalam Ecoart Park Sentul City"],
    ],
    fieldNote: "Catatan lapangan",
    fieldBody: "Data peta, jam, serta akses operasional bisa berubah. Halaman ini membedakan informasi lokasi yang dapat dicek ulang dari saran persiapan yang bersifat umum.",
    storyKicker: "02 · KONTEKS TEMPAT",
    storyTitle: "Ruang makan yang dibingkai air dan lintasan pejalan kaki.",
    storyBody: "Karakter Ah Poong bukan pasar tradisional terapung dalam arti harfiah. Penanda yang lebih tepat adalah kompleks kuliner terbuka di tepi air, dengan area duduk, paviliun, dan jalur yang menghadap lanskap sungai. Pilih datang dengan ekspektasi sederhana: tempat untuk berhenti, makan, berbincang, lalu melanjutkan perjalanan di kawasan Sentul.",
    storyPoints: [
      ["Air sebagai orientasi", "Artikel Sentul City April 2024 menempatkan kuliner ini di tepi Sungai Cikeas; akses setiap jalur perlu dicek di lokasi."],
      ["Ruang terbuka", "Sebagian pengalaman berlangsung di luar ruang; cuaca, hujan, dan panas menentukan kenyamanan."],
      ["Kuliner regional", "Sajian berasal dari berbagai penjual; ketersediaan, harga, dan metode pembayaran sebaiknya dicek langsung."],
    ],
    visitKicker: "03 · RENCANA KUNJUNGAN",
    visitTitle: "Datang dengan ruang untuk berubah.",
    visitIntro: "Petunjuk berikut membantu menyusun kunjungan awal. Jam, biaya, akses, dan kepadatan sebaiknya dicek pada hari keberangkatan.",
    visit: [
      ["Jam kunjungan", "Google Maps, diperiksa 19 Oktober 2026: Senin–Jumat 10.00–21.00, Sabtu–Minggu 08.00–22.00. Artikel Sentul City 17 April 2024 menyebut tutup hari kerja pukul 22.00. Sumber berbeda tanggal; konfirmasikan jam hari kunjungan dan tiap pedagang, bukan menganggap semua layanan mengikuti daftar peta."],
      ["Biaya masuk", "Tarif masuk terkini belum diverifikasi. Tanyakan secara terpisah biaya masuk area, makanan/minuman, parkir, perahu dan permainan anak. Jangan menganggap pembelian makanan mencakup layanan lain atau semua kegiatan gratis."],
      ["Waktu terbaik", "Pagi menjelang siang atau sore biasanya memberi cahaya lebih nyaman untuk ruang tepi air. Akhir pekan dan hari libur berpotensi lebih ramai; beri waktu tambahan."],
      ["Durasi", "Sisihkan sekitar 1–2 jam untuk makan dan berjalan santai. Tambahkan waktu bila Anda ingin menggabungkan kunjungan dengan ruang hijau atau tujuan lain di Sentul."],
    ],
    accessKicker: "04 · AKSES & KEBUTUHAN",
    accessTitle: "Rute yang realistis lebih berguna daripada janji waktu tempuh.",
    accessIntro: "Kawasan Sentul terhubung melalui jaringan jalan Bogor dan Jabodetabek. Waktu perjalanan sangat dipengaruhi titik berangkat, lalu lintas, cuaca, dan waktu kedatangan.",
    transport: [
      ["Dari bandara", "Dari bandara di kawasan Jakarta, lanjutkan perjalanan darat menuju Sentul/Bogor dengan kendaraan berizin, layanan sewa, atau layanan berbasis aplikasi sesuai titik jemput. Sisakan jeda karena perjalanan darat dapat berubah tajam pada jam sibuk."],
      ["Bus & angkutan umum", "Cari layanan antarkota atau jaringan bus menuju Bogor/Sentul yang aktif pada hari perjalanan, lalu lanjutkan dengan taksi berizin atau layanan berbasis aplikasi dari titik turun yang aman. Rute dan titik berhenti dapat berubah."],
      ["Taksi & aplikasi", "Masukkan ‘Ah Poong Sentul’ sebagai tujuan, periksa titik jemput dan estimasi sebelum naik. Gunakan titik turun yang tidak mengganggu arus kendaraan dan ikuti arahan petugas setempat."],
      ["Kendaraan pribadi", "Ikuti rambu kawasan dan gunakan area parkir yang ditetapkan. Jangan mengandalkan tempat tepat di depan pintu masuk; kapasitas dan tarif parkir perlu dikonfirmasi saat tiba."],
    ],
    needsTitle: "Hal kecil yang perlu disiapkan.",
    needs: [
      ["Parkir", "Gunakan area resmi dan cek kapasitas saat tiba; ketentuan dapat berubah saat ramai."],
      ["Toilet & kebersihan", "Tanyakan lokasi fasilitas yang aktif di lapangan dan siapkan kebutuhan pribadi dasar."],
      ["Akses mobilitas", "Jalur luar ruang, perubahan permukaan, dan keramaian dapat memengaruhi kenyamanan pengguna kursi roda."],
      ["Cuaca", "Bawa pelindung hujan atau matahari. Permukaan terbuka dapat licin setelah hujan."],
      ["Makan & minum", "Pilih jenis kuliner sesuai kebutuhan; cek bahan, harga, ketersediaan, dan cara pembayaran langsung kepada penjual."],
      ["BBM & pengisian", "Rencanakan bahan bakar atau pengisian kendaraan sebelum masuk kawasan; status fasilitas dapat berubah."],
    ],
    aroundKicker: "05 · KAWASAN SEKITAR",
    aroundTitle: "Susun satu hari dengan logika kawasan, bukan daftar rekomendasi.",
    aroundIntro: "Panduan ini tidak memberi rekomendasi pedagang atau operator tertentu. Kategori di bawah adalah ide pencarian, bukan daftar tempat atau fasilitas yang telah diverifikasi. Periksa lokasi, jarak, jam, akses dan layanan setiap pilihan melalui peta terkini.",
    around: [
      ["Ruang hijau", "Cari taman kota, jalur jalan kaki, atau ruang terbuka di kawasan Sentul untuk memperpanjang jeda sebelum atau sesudah makan."],
      ["Kuliner tambahan", "Cari warung, rumah makan, kedai minum atau pasar pada peta terkini. Pilih berdasarkan kebutuhan diet, akses, dan jam nyata di hari kunjungan."],
      ["Menginap", "Cari rumah tamu, hotel atau vila di peta terkini. Pertimbangkan akses jalan, rencana berkendara, serta kebutuhan mobilitas."],
      ["Kebutuhan harian", "Cari minimarket, swalayan atau layanan kendaraan sesuai kebutuhan. Periksa lokasi serta jam buka sendiri sebelum bergantung pada suatu fasilitas."],
    ],
    galleryTitle: "Catatan visual dari kawasan.",
    galleryBody: "Gambar referensi membantu orientasi suasana; akses, layanan dan kondisi saat ini dapat berbeda.",
    mapKicker: "06 · TITIK DI PETA",
    mapTitle: "Temukan Ah Poong Sentul di tepi Jl. Ir H. Juanda.",
    mapBody: "Gunakan peta untuk memeriksa rute, kondisi lalu lintas, titik turun, dan pembaruan lokasi sebelum berangkat.",
    faqKicker: "07 · TANYA JAWAB",
    faqTitle: "Pertanyaan yang layak dijawab sebelum berangkat.",
    faq: [
      ["Apakah Ah Poong Sentul berbayar?", "Biaya masuk saat ini belum diverifikasi. Makanan, parkir, perahu dan permainan dapat memiliki ketentuan terpisah; minta harga dan cakupan masing-masing sebelum membeli."],
      ["Jam berapa tempat ini buka?", "Peta 19 Oktober 2026 mencatat Sen–Jum 10.00–21.00 dan Sab–Min 08.00–22.00. Artikel Sentul City April 2024 menyebut hari kerja sampai 22.00; periksa pembaruan pengelola untuk hari kunjungan. Jam pedagang dan kegiatan dapat berbeda."],
      ["Berapa lama waktu yang ideal?", "Sebagai saran perencanaan, alokasikan 1–2 jam untuk makan dan berjalan ringan. Tambahkan waktu saat akhir pekan, hujan, atau bila menggabungkan kunjungan dengan kawasan Sentul lain."],
      ["Di mana menu dan harga makanan terbaru?", "Panduan ini tidak memiliki menu atau daftar pedagang terkini yang terverifikasi. Tanyakan menu, porsi, bahan, harga, pajak dan metode pembayaran langsung kepada penjual sebelum memesan."],
      ["Apakah tersedia parkir dan toilet?", "Fasilitas semacam ini perlu ditanyakan atau dilihat saat tiba. Gunakan area parkir resmi dan ikuti rambu di lokasi."],
      ["Apakah perahu dan permainan anak selalu tersedia?", "Artikel Sentul City April 2024 menyebut kegiatan tersebut, bukan jaminan layanan saat ini. Konfirmasikan operasional, batas usia, pengawasan, biaya dan ketentuan cuaca langsung; jangan menganggapnya termasuk makan atau akses area."],
    ],
    sourceTitle: "Catatan sumber & batasan",
    sources: "Lokasi, koordinat, jam dan penilaian: Google Maps, diperiksa 19 Oktober 2026. Sentul City, 17 April 2024, mendukung konteks kuliner semi-terbuka di tepi Sungai Cikeas. Informasi fasilitas, permainan, musik dan pembayaran pada artikel lama tidak menjamin ketersediaan sekarang.",
    footerTitle: "Ah Poong Sentul Bogor — Panduan Wisata",
    footerBody: "Proyek panduan pengunjung independen dan nonkomersial. Tidak berafiliasi dengan pengelola tempat, pemerintah, atau organisasi resmi mana pun.",
    footerRef: "Rujukan utama: daftar lokasi Google Maps dan artikel pengembang kawasan Sentul City bertanggal 17 April 2024. Periksa pembaruan pengelola sebelum berangkat.",
    photoRights: "Hak cipta foto tetap berada pada fotografer atau pemegang hak terkait.",
    privacy: "Kebijakan Privasi",
    terms: "Ketentuan Layanan",
    cookies: "Pengaturan Kuki",
    cookieTitle: "Pilihan kuki Anda",
    cookieBody: "Pilihan persetujuan disimpan bila perangkat mengizinkan. Analitik hanya dimuat setelah izin Anda; bahasa mengikuti URL halaman.",
    essentials: "Hanya esensial",
    allowAnalytics: "Izinkan analitik",
    settings: "Atur",
  },
  en: {
    nav: ["Overview", "The place", "Visit", "Getting there", "Nearby", "FAQ"],
    openMap: "Open location in Google Maps",
    plan: "Plan a visit",
    close: "Close navigation",
    menu: "Open navigation",
    guide: "Independent visitor guide · non-commercial",
    eyebrow: "Sentul · Bogor Regency · West Java",
    title: ["Ah Poong Sentul", "food by the Cikeas River."],
    intro: "Ah Poong Sentul is a waterside dining space within Ecoart Park Sentul City—a place to plan a meal and a pause in the Bogor area.",
    photoNote: "Atmosphere image for this guide. Conditions and appearance on site can change.",
    quick: [
      ["Google Maps", "4.3 / 5", "9,886 reviews · 19 October 2026"],
      ["Category", "Floating market", "Waterside dining complex"],
      ["Map hours", "Mon–Fri 10–21", "Sat–Sun 08–22 · 19 Oct 2026"],
      ["Planning suggestion", "1–2 hours", "Allow more time on weekends"],
    ],
    index: "Field index",
    introKicker: "01 · ORIENTATION",
    overviewTitle: "Not simply somewhere to eat. A pause on Sentul’s edge.",
    overviewBody: "Google Maps lists Ah Poong Sentul as a floating market and a riverside dining complex. It sits in Ecoart Park Sentul City, beside Jalan Ir. H. Juanda in Cipambuan. Its atmosphere is best understood through three elements: water, pavilions, and tables that make a visit feel like a stopover—not just a quick transaction.",
    cards: [
      ["Map name", "Ah Poong Sentul"],
      ["Address", "CRJW+28H, Jl. Ir H. Juanda, Cipambuan, Babakan Madang, Bogor Regency 16710"],
      ["Coordinates", "-6.5699273, 106.8458556"],
      ["Setting", "Within Ecoart Park Sentul City"],
    ],
    fieldNote: "Field note",
    fieldBody: "Map data, hours, and operational access can change. This page separates location details you can recheck from general preparation advice.",
    storyKicker: "02 · PLACE CONTEXT",
    storyTitle: "A dining space framed by water and walking routes.",
    storyBody: "Ah Poong is not a traditional floating market in the literal sense. It is more accurately read as an open riverside food complex with seating, pavilions, and routes that look toward the river landscape. Arrive with a simple expectation: pause, eat, talk, then continue your time in the Sentul area.",
    storyPoints: [
      ["Water as orientation", "Sentul City’s April 2024 article places this dining area beside the Cikeas River; check access to individual paths on site."],
      ["Open-air setting", "Part of the experience happens outdoors; weather, rain, and heat shape comfort."],
      ["Regional food", "Food comes from different vendors; check availability, prices, and payment methods directly."],
    ],
    visitKicker: "03 · VISIT PLAN",
    visitTitle: "Arrive with room for change.",
    visitIntro: "These notes support an initial plan. Check hours, fees, access, and crowd conditions on the day you travel.",
    visit: [
      ["Hours", "Google Maps checked 19 October 2026 lists Monday–Friday 10:00–21:00 and Saturday–Sunday 08:00–22:00. Sentul City’s 17 April 2024 article gave a 22:00 weekday close. These dated sources differ; confirm your visit-day hours and each vendor rather than applying the place listing to every service."],
      ["Entry & costs", "Current admission charges have not been verified. Ask separately about access, food and drink, parking, boats and children’s activities. A meal purchase should not be assumed to include other services or make every activity free."],
      ["Best timing", "Late morning or afternoon often provides gentler light for a waterside setting. Weekends and public holidays may be busier, so allow extra time."],
      ["Length of stay", "As a planning suggestion, allow 1–2 hours for a meal and a relaxed walk. Add time if you plan to combine it with green space or another Sentul destination."],
    ],
    accessKicker: "04 · ACCESS & NEEDS",
    accessTitle: "A realistic route is more useful than a promised travel time.",
    accessIntro: "Sentul connects through Bogor and greater Jakarta road networks. Journey times depend heavily on your starting point, traffic, weather, and arrival time.",
    transport: [
      ["From an airport", "From airports in the Jakarta area, continue overland toward Sentul/Bogor by licensed vehicle, rental service, or app-based transport according to available pickup areas. Leave a generous buffer: road travel can change sharply in peak periods."],
      ["Bus & public transport", "Check active intercity or bus links toward Bogor/Sentul on your travel day, then continue from a safe drop-off point by a licensed taxi or app-based transport. Routes and stopping points can change."],
      ["Taxi & ride-hailing", "Enter ‘Ah Poong Sentul’ as your destination, then review the pickup point and estimate before boarding. Use a drop-off point that does not obstruct traffic and follow on-site staff directions."],
      ["Private vehicle", "Follow local signage and use designated parking. Do not rely on a space directly at the entrance; capacity and parking charges should be confirmed when you arrive."],
    ],
    needsTitle: "The small details worth preparing.",
    needs: [
      ["Parking", "Use official areas and check capacity upon arrival; conditions can change when the area is busy."],
      ["Toilets & hygiene", "Ask for the location of currently available facilities on site and bring basic personal necessities."],
      ["Mobility access", "Outdoor routes, changing surfaces, and crowd levels can affect comfort for wheelchair users."],
      ["Weather", "Bring rain or sun protection. Open surfaces can be slippery after rain."],
      ["Food & drink", "Choose the type of food that meets your needs; check ingredients, prices, availability, and payment directly with the vendor."],
      ["Fuel & charging", "Plan vehicle fuel or charging before entering the area; facility status can change."],
    ],
    aroundKicker: "05 · THE WIDER AREA",
    aroundTitle: "Build a day around an area—not a recommendation list.",
    aroundIntro: "This guide does not endorse particular merchants or operators. The categories below are search ideas, not verified destinations or facilities. Check each option’s current location, distance, hours, access and services.",
    around: [
      ["Green space", "Look for urban parks, walking routes, or open areas in Sentul if you would like a quieter break before or after eating."],
      ["Further food", "Search current maps for warungs, restaurants, drink stalls or markets. Choose by dietary needs, access, and actual opening hours on your visit day."],
      ["Staying overnight", "Search current maps for guesthouses, hotels or villas. Consider road access, your driving plan, and mobility needs."],
      ["Daily needs", "Search current maps for convenience stores, supermarkets or vehicle services. Check location and opening hours yourself before relying on any facility."],
    ],
    galleryTitle: "Visual field notes from the area.",
    galleryBody: "Reference images provide visual context; current access, services and conditions may differ.",
    mapKicker: "06 · MAP POINT",
    mapTitle: "Find Ah Poong Sentul beside Jl. Ir H. Juanda.",
    mapBody: "Use the map to check your route, traffic conditions, drop-off point, and location updates before you set out.",
    faqKicker: "07 · QUESTIONS",
    faqTitle: "Questions worth answering before you leave.",
    faq: [
      ["Does Ah Poong Sentul charge entry?", "Current admission charges are unverified. Food, parking, boats and play activities may have separate terms; ask what each price includes before paying."],
      ["What time does it open?", "Maps checked 19 October 2026 lists Mon–Fri 10:00–21:00 and Sat–Sun 08:00–22:00. Sentul City’s April 2024 article gave a 22:00 weekday close. Confirm visit-day hours; vendors and activities may differ."],
      ["How long should I allow?", "As a planning suggestion, allow 1–2 hours for a meal and gentle walk. Allow more time on weekends, in rain, or when combining the visit with other parts of Sentul."],
      ["Where can I find current menus and food prices?", "This guide has no verified current menu or vendor directory. Ask the seller about dishes, portions, ingredients, prices, taxes and payment methods before ordering."],
      ["Are parking and toilets available?", "Facilities of this kind should be checked as you arrive. Use official parking areas and follow site signage."],
      ["Are boats and children’s activities always available?", "Sentul City’s April 2024 article described activities, not a guarantee of current service. Confirm operation, age rules, supervision, prices and weather terms directly; do not assume they are included with food or area access."],
    ],
    sourceTitle: "Source note & limits",
    sources: "Location, coordinates, hours and rating: Google Maps checked 19 October 2026. Sentul City’s 17 April 2024 article supports the semi-outdoor Cikeas riverside dining context. Its facilities, activities, music and payment information do not guarantee availability today.",
    footerTitle: "Ah Poong Sentul Bogor — Travel Guide",
    footerBody: "An independent, non-commercial visitor information project. It is not affiliated with the venue operator, government, or any official organisation.",
    footerRef: "Sources: the Google Maps place listing and Sentul City’s dated 17 April 2024 article. Check current operator updates before travelling.",
    photoRights: "Photographs remain the copyright of their respective photographers or rights holders.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    cookies: "Cookie Settings",
    cookieTitle: "Your cookie choices",
    cookieBody: "Consent choices are stored when your device permits. Analytics loads only after your permission; language follows the page URL.",
    essentials: "Essential only",
    allowAnalytics: "Allow analytics",
    settings: "Settings",
  },
} as const;

declare global {
  interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; }
}

export default function Home({ initialLanguage = "id" }: { initialLanguage?: Language }) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(false);
  const [cookieVisible, setCookieVisible] = useState(false);
  const [storageNotice, setStorageNotice] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const t = copy[language];

  useEffect(() => {
    setCookieVisible(readConsent() === null);
    applyAnalytics(readConsent()?.analytics === true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function selectLanguage(next: Language) {
    window.location.href = next === "en" ? "/en/" : "/";
  }
  function saveConsent(analytics: boolean) {
    const persisted = saveConsentChoice({ essential: true, preferences: true, analytics });
    setCookieVisible(false);
    setCookieOpen(false);
    if (!persisted) setStorageNotice(language === "id" ? "Pilihan berlaku di halaman ini; tidak dapat disimpan di perangkat." : "Choice applies on this page; it could not be saved on this device.");
  }
  const navTargets = ["overview", "story", "visit", "access", "nearby", "faq"];
  const navCompanion = language === "id" ? ["Overview", "The place", "Visit", "Getting there", "Nearby", "FAQ"] : ["Ringkasan", "Cerita tempat", "Kunjungan", "Akses", "Sekitar", "Tanya jawab"];
  const quickCompanion = language === "id" ? ["MAP RECORD", "PLACE TYPE", "OPENING NOTE", "FIELD RHYTHM"] : ["CATATAN PETA", "JENIS TEMPAT", "CATATAN JAM", "RITME KUNJUNGAN"];
  const quickIcons = [Sparkles, Compass, Clock3, Footprints];
  const transportIcons = [Plane, BusFront, CarFront, CarFront];
  const needIcons = [ParkingCircle, ShowerHead, Footprints, MoonStar, Utensils, Fuel];

  return (
    <div className="site-shell" id="top">
      <StructuredData faqs={t.faq} />
      <a className="skip-link" href="#overview">{language === "id" ? "Lewati ke isi utama" : "Skip to main content"}</a>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Ah Poong Sentul Guide">
          <img src={ASSETS.mark} alt="" />
          <span>Ah Poong <em>Sentul Guide</em></span>
        </a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} id="primary-navigation" aria-label="Primary navigation">
          {t.nav.map((item, index) => <a key={item} href={`#${navTargets[index]}`} onClick={() => setMenuOpen(false)}><span>{item}</span><small>{navCompanion[index]}</small></a>)}
        </nav>
        <div className="header-actions">
          <div className="language-toggle" aria-label="Language selection">
            <button className={language === "id" ? "is-active" : ""} onClick={() => selectLanguage("id")}>ID</button>
            <button className={language === "en" ? "is-active" : ""} onClick={() => selectLanguage("en")}>EN</button>
          </div>
          <a className="header-map" href={mapUrl} target="_blank" rel="noreferrer"><MapPin size={15} /><span>{t.openMap}</span></a>
          <button className="menu-button" aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? t.close : t.menu} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <img className="hero-image" src={ASSETS.hero} alt={language === "id" ? "Bangunan beratap genteng dan jembatan di tepi sungai — gambar referensi" : "Tiled-roof buildings and a bridge beside a river — reference image"} />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="eyebrow">{t.eyebrow}</div>
            <div className="hero-rule" />
            <p className="guide-label">{t.guide}</p>
            <h1>{t.title[0]} <em>{t.title[1]}</em></h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="primary-button" href="#visit"><span>{t.plan}</span><ArrowDownRight size={18} /></a>
              <a className="quiet-button" href={mapUrl} target="_blank" rel="noreferrer"><MapPin size={17} /> {t.openMap}</a>
            </div>
            <p className="photo-note">{t.photoNote}</p>
          </div>
          <div className="hero-coordinates">-6.5699273 · 106.8458556</div>
        </section>

        <section className="quick-facts" aria-label={language === "id" ? "Informasi singkat" : "At a glance"}>
          {t.quick.map(([label, value, detail], index) => {
            const Icon = quickIcons[index];
            return <article className="quick-fact" key={label}><Icon size={19} /><div><span>{label}</span><small className="paired-label">{quickCompanion[index]}</small><strong>{value}</strong><small>{detail}</small></div></article>;
          })}
        </section>

        <div className="river-layout">
          <aside className="field-index" aria-label={t.index}>
            <span>{t.index}</span>
            {t.nav.map((item, index) => <a href={`#${navTargets[index]}`} key={item}><b>0{index + 1}</b><span>{item}<small>{navCompanion[index]}</small></span></a>)}
          </aside>

          <div className="river-content">
            <section id="overview" className="content-section overview-section">
              <div className="section-kicker">{t.introKicker}</div>
              <div className="section-heading heading-split"><h2>{t.overviewTitle}</h2><p>{t.overviewBody}</p></div>
              <div className="facts-grid">
                {t.cards.map(([title, value]) => <article className="fact-card" key={title}><span>{title}</span><strong>{value}</strong></article>)}
              </div>
              <div className="field-note"><Info size={19} /><div><strong>{t.fieldNote}</strong><p>{t.fieldBody}</p></div></div>
            </section>

            <section id="story" className="content-section story-section">
              <div className="section-kicker">{t.storyKicker}</div>
              <div className="story-grid">
                <div className="story-copy"><h2>{t.storyTitle}</h2><p>{t.storyBody}</p><ol>{t.storyPoints.map(([title, body], index) => <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol></div>
                <figure className="detail-figure"><img src={ASSETS.pavilion} alt={language === "id" ? "Tiang berukir dan meja kayu di dekat air — gambar referensi" : "Carved post and wooden table beside water — reference image"} /><figcaption>{t.photoNote}</figcaption></figure>
              </div>
            </section>

            <section id="visit" className="content-section visit-section">
              <div className="section-kicker">{t.visitKicker}</div>
              <div className="section-heading"><h2>{t.visitTitle}</h2><p>{t.visitIntro}</p></div>
              <div className="visit-list">
                {t.visit.map(([title, body], index) => <article key={title} className="visit-item"><span>0{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}
              </div>
            </section>

            <section id="access" className="content-section access-section">
              <div className="section-kicker">{t.accessKicker}</div>
              <div className="section-heading heading-split"><h2>{t.accessTitle}</h2><p>{t.accessIntro}</p></div>
              <div className="transport-grid">
                {t.transport.map(([title, body], index) => { const Icon = transportIcons[index]; return <article key={title}><Icon size={25} /><h3>{title}</h3><p>{body}</p></article>; })}
              </div>
              <div className="needs-block"><div className="needs-heading"><span className="section-kicker">{language === "id" ? "CATATAN PRAKTIS" : "PRACTICAL NOTES"}</span><h2>{t.needsTitle}</h2></div><div className="needs-grid">{t.needs.map(([title, body], index) => { const Icon = needIcons[index]; return <article key={title}><Icon size={19} /><div><h3>{title}</h3><p>{body}</p></div></article>; })}</div></div>
            </section>

            <section id="nearby" className="content-section nearby-section">
              <div className="nearby-media"><img src={ASSETS.riverwalk} alt={language === "id" ? "Jalur berpagar di tepi sungai dengan pepohonan — gambar referensi" : "Fenced riverside path with trees — reference image"} /></div>
              <div className="nearby-copy"><div className="section-kicker">{t.aroundKicker}</div><h2>{t.aroundTitle}</h2><p>{t.aroundIntro}</p><div className="nearby-list">{t.around.map(([title, body]) => <article key={title}><ChevronRight size={17} /><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></div>
            </section>

            <section className="content-section photo-section">
              <div><div className="section-kicker">{language === "id" ? "GAMBAR REFERENSI" : "REFERENCE IMAGES"}</div><h2>{t.galleryTitle}</h2><p>{t.galleryBody}</p></div>
              <div className="real-photo-grid"><figure><img src={ASSETS.realMarket} alt={language === "id" ? "Bangunan dan tangga di seberang sungai — gambar referensi" : "Building and steps across a river — reference image"} /><figcaption>Ah Poong Sentul · {language === "id" ? "gambar referensi; kondisi saat ini dapat berbeda" : "reference image; current conditions may differ"}</figcaption></figure><figure><img src={ASSETS.realRiver} alt={language === "id" ? "Air sungai, tepian dan perahu kecil — gambar referensi" : "River water, banks and small boats — reference image"} /><figcaption>{language === "id" ? "Tepian sungai di kawasan Ah Poong" : "Riverside setting in the Ah Poong area"}</figcaption></figure></div>
            </section>

            <section className="content-section map-section">
              <div className="map-intro"><div className="section-kicker">{t.mapKicker}</div><h2>{t.mapTitle}</h2><p>{t.mapBody}</p><a href={mapUrl} target="_blank" rel="noreferrer" className="text-link"><ExternalLink size={16} /> {t.openMap}</a></div>
              <div className="map-frame"><iframe title="Ah Poong Sentul map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6853.76245601456!2d106.84334746245183!3d-6.569342993396574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c6ec0ebe7b61%3A0x2bcec953608237d!2sAh%20Poong%20Sentul!5e1!3m2!1sid!2sid!4v1787105587306!5m2!1sid!2sid" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /></div>
            </section>

            <section id="faq" className="content-section faq-section">
              <div className="section-kicker">{t.faqKicker}</div><h2>{t.faqTitle}</h2>
              <div className="faq-list">{t.faq.map(([question, answer], index) => <details key={question}><summary><span>0{index + 1}</span>{question}<ChevronRight size={18} /></summary><p>{answer}</p></details>)}</div>
            </section>

            <section className="source-note"><Store size={19} /><div><h2>{t.sourceTitle}</h2><p>{t.sources}</p><p><a href="https://sentulcity.co.id/news/read/Menikmati-Wisata-Kuliner-dan-Rekreasi-Keluarga-di-Ah-Poong-Food-Market-Sentul">Sentul City · 17 April 2024</a> · <a href="https://www.instagram.com/ahpoongfoodmarket/">Instagram Ah Poong (linked by Sentul City)</a></p></div><a href={mapUrl} target="_blank" rel="noreferrer"><ArrowUpRight size={18} /></a></section>
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><img src={ASSETS.mark} alt="" /><div><h2>{t.footerTitle}</h2><p>{t.footerBody}</p></div></div>
        <div className="footer-notes"><p>{t.footerRef}</p><p>{t.photoRights}</p><p>© 2026 Ah Poong Sentul Guide.</p></div>
        <div className="footer-links"><a href={language === "en" ? "/en/privacy/" : "/privacy/"}>{t.privacy}</a><a href={language === "en" ? "/en/terms/" : "/terms/"}>{t.terms}</a><a href={language === "en" ? "/en/cookies/" : "/cookies/"}>{t.cookies}</a></div>
      </footer>

      {storageNotice && <p className="storage-notice" role="status">{storageNotice}</p>}
      {(cookieVisible || cookieOpen) && <CookieBanner t={t} expanded={cookieOpen} onEssential={() => saveConsent(false)} onAnalytics={() => saveConsent(true)} onSettings={() => { window.location.href = language === "en" ? "/en/cookies/" : "/cookies/"; }} />}
    </div>
  );
}

function CookieBanner({ t, expanded, onEssential, onAnalytics, onSettings }: { t: typeof copy.id | typeof copy.en; expanded: boolean; onEssential: () => void; onAnalytics: () => void; onSettings: () => void }) {
  return <aside className={`cookie-banner ${expanded ? "is-expanded" : ""}`} aria-label={t.cookieTitle}><div><span className="cookie-kicker"><Globe2 size={15} /> {t.cookieTitle}</span><p>{t.cookieBody}</p></div><div className="cookie-actions"><button className="text-button" onClick={onSettings}>{t.settings}</button><button className="outline-button" onClick={onEssential}>{t.essentials}</button><button className="primary-button" onClick={onAnalytics}>{t.allowAnalytics}</button></div></aside>;
}
