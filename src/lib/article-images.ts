const SLUG_IMAGES: Record<string, string> = {
  "asset-profile-caminos-duclos": "/img/article-lucia-jason.jpg",
  "lucia-jason-deep-dive": "/img/article-lucia-jason.jpg",
  "two-cities-online": "/img/article-two-cities.jpg",
  "second-city-evidence": "/img/article-two-cities.jpg",
  "internal-memo-inland-settlement": "/img/article-two-cities.jpg",
  "real-leonida-locations": "/img/leonida-map-preview.jpg",
  "billion-dollar-map": "/img/map-illustration.jpg",
  "launch-day-economy": "/img/social-card-premium.jpg",
  "state-of-play-reality-check": "/img/hero-neon-banner.jpg",
  "summer-asset-drop": "/img/summer-marketing-hype.jpg",
  "trailer-3-scorecard": "/img/hero-neon-banner.jpg",
  "trailer-3-predictions": "/img/summer-marketing-hype.jpg",
  "20-days-to-marketing": "/img/summer-marketing-hype.jpg",
  "discord-gta6-channel-signals": "/img/social-card-premium.jpg",
  "the-90-dollar-question": "/img/ps5-window.png",
  "threat-assessment-online-migration": "/img/evidence-journey-map.jpg",
  "vice-city-2026-vs-1986": "/img/vice-city-neon-hero.jpg",
  "bureau-position-the-1986-mistake": "/img/vice-city-neon-hero.jpg",
  "surveillance-note-external-source-silences": "/img/inland-city-dusk.jpg",
};

const CATEGORY_IMAGES: Record<string, string> = {
  news: "/img/hero-neon-banner.jpg",
  leaks: "/img/inland-city-dusk.jpg",
  analysis: "/img/map-illustration.jpg",
  predictions: "/img/summer-marketing-hype.jpg",
  characters: "/img/article-lucia-jason.jpg",
  map: "/img/leonida-map-preview.jpg",
  online: "/img/evidence-journey-map.jpg",
  lore: "/img/vice-city-neon-hero.jpg",
  business: "/img/ps5-window.png",
  "field report": "/img/article-two-cities.jpg",
};

export function getArticleImage(slug: string, category?: string) {
  const categoryKey = category?.toLowerCase() ?? "";
  return SLUG_IMAGES[slug] ?? CATEGORY_IMAGES[categoryKey] ?? "/img/leonidahq-social-card.jpg";
}
