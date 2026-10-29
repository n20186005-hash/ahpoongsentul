// Central registry for Ah Poong Sentul topic pages.
// Indonesian (id) and English (en) share the same slug; the language prefix
// in the URL (/<slug>/ vs /en/<slug>/) selects the language. This keeps
// bidirectional hreflang trivial and matches the existing home pattern (/en/).

import { idContent, type TopicContent } from "./topics.id";
import { enContent } from "./topics.en";

export type TopicLang = "id" | "en";

export interface TopicGroup {
  id: string;
  labelId: string;
  labelEn: string;
  slugs: string[];
}

// Order matters: shown as sections on the home guide hub and in sitemap logic.
export const TOPIC_GROUPS: TopicGroup[] = [
  {
    id: "kunjungan",
    labelId: "Sebelum Berangkat",
    labelEn: "Before You Go",
    slugs: ["jam-buka", "biaya-masuk", "apakah-buka", "waktu-terbaik", "parkir", "fasilitas"],
  },
  {
    id: "akses",
    labelId: "Cara Ke Sini",
    labelEn: "Getting Here",
    slugs: ["dari-jakarta", "dari-bogor", "kendaraan-pribadi", "grab-gojek", "transport-umum"],
  },
  {
    id: "kuliner",
    labelId: "Makan & Minum",
    labelEn: "Food & Drink",
    slugs: [
      "menu-makanan",
      "warung-temon",
      "kuliner-halal",
      "makanan-vegetarian",
      "kafe-tepi-sungai",
      "makan-keluarga",
      "jadwal-makan",
    ],
  },
  {
    id: "keluarga",
    labelId: "Keluarga & Anak",
    labelEn: "Family & Kids",
    slugs: [
      "bersama-anak",
      "permainan-anak",
      "mini-zoo",
      "perahu-aktivitas-air",
      "hari-hujan",
      "akses-kursi-roda",
      "cara-bayar",
    ],
  },
  {
    id: "sekitar",
    labelId: "Sekitar & Rencana",
    labelEn: "Nearby & Itineraries",
    slugs: [
      "eco-art-park",
      "taman-budaya",
      "jungleland",
      "mal-terdekat",
      "rencana-setengah-hari",
      "rencana-sehari-keluarga",
      "akhir-pekan-hemat",
      "sore-dan-malam",
    ],
  },
];

export const TOPIC_SLUGS: string[] = TOPIC_GROUPS.flatMap((g) => g.slugs);

export function getTopicContent(slug: string, lang: TopicLang): TopicContent | null {
  const map = lang === "en" ? enContent : idContent;
  return map[slug] ?? null;
}

export function getGroupOf(slug: string): TopicGroup | undefined {
  return TOPIC_GROUPS.find((g) => g.slugs.includes(slug));
}

export function getRelated(slug: string, lang: TopicLang, limit = 4): string[] {
  const group = getGroupOf(slug);
  if (!group) return [];
  return group.slugs.filter((s) => s !== slug).slice(0, limit);
}

export function topicUrl(slug: string, lang: TopicLang): string {
  return lang === "en" ? `/en/${slug}/` : `/${slug}/`;
}

export function topicLabel(slug: string, lang: TopicLang): string {
  const c = getTopicContent(slug, lang);
  return c ? c.title : slug;
}
