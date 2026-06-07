const SLUG_IMAGES: Record<string, string> = {
  "gta-6-table-tennis-rage-origin": "/img/vice-city-neon-hero.jpg",
  "why-we-waited-13-years-for-gta-6": "/img/article-two-cities.jpg",
  "fake-gta-6-beta-scam-warning": "/img/vice-city-neon-hero.jpg",
  "how-big-will-gta-6-be-file-size": "/img/article-two-cities.jpg",
  "could-gta-6-get-a-subscription-model": "/img/leonida-map-preview.jpg",
  "rockstar-workers-organizing": "/img/vice-city-neon-hero.jpg",
  "no-third-delay": "/img/article-two-cities.jpg",
  "originally-2025": "/img/vice-city-neon-hero.jpg",
  "review-copies": "/img/article-two-cities.jpg",
  "rdr2-mechanic": "/img/vice-city-neon-hero.jpg",
  "gta-6-pc-release": "/img/article-two-cities.jpg",
  "asset-profile-caminos-duclos": "/img/article-lucia-jason.jpg",
  "lucia-jason-deep-dive": "/img/article-lucia-jason.jpg",
  "two-cities-online": "/img/article-two-cities.jpg",
  "second-city-evidence": "/img/article-two-cities.jpg",
  "internal-memo-inland-settlement": "/img/article-two-cities.jpg",
  "real-leonida-locations": "/img/leonida-map-preview.jpg",
  "billion-dollar-map": "/img/map-illustration.jpg",
  "launch-day-economy": "/img/article-two-cities.jpg",
  "state-of-play-reality-check": "/img/vice-city-neon-hero.jpg",
  "summer-asset-drop": "/img/summer-marketing-hype.jpg",
  "trailer-3-scorecard": "/img/vice-city-neon-hero.jpg",
  "trailer-3-predictions": "/img/vice-city-neon-hero.jpg",
  "20-days-to-marketing": "/img/article-two-cities.jpg",
  "discord-gta6-channel-signals": "/img/vice-city-neon-hero.jpg",
  "the-90-dollar-question": "/img/vice-city-neon-hero.jpg",
  "threat-assessment-online-migration": "/img/evidence-journey-map.jpg",
  "vice-city-2026-vs-1986": "/img/vice-city-neon-hero.jpg",
  "bureau-position-the-1986-mistake": "/img/vice-city-neon-hero.jpg",
  "surveillance-note-external-source-silences": "/img/summer-marketing-hype.jpg",
};

const CATEGORY_IMAGES: Record<string, string> = {
  news: "/img/vice-city-neon-hero.jpg",
  leaks: "/img/summer-marketing-hype.jpg",
  analysis: "/img/map-illustration.jpg",
  predictions: "/img/vice-city-neon-hero.jpg",
  characters: "/img/article-lucia-jason.jpg",
  map: "/img/leonida-map-preview.jpg",
  online: "/img/evidence-journey-map.jpg",
  lore: "/img/vice-city-neon-hero.jpg",
  business: "/img/article-two-cities.jpg",
  "field report": "/img/article-two-cities.jpg",
};

export function getArticleImage(slug: string, category?: string) {
  const categoryKey = category?.toLowerCase() ?? "";
  return SLUG_IMAGES[slug] ?? CATEGORY_IMAGES[categoryKey] ?? "/img/leonidahq-social-card.jpg";
}
