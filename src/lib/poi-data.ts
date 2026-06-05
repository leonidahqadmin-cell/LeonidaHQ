// Leonida map evidence data. Pins are based on trailer analysis, logic, and community signals.
// Confidence levels indicate how solid the evidence is.

export type POICategory = "story" | "collectible" | "hidden" | "business";

export type Confidence = "Confirmed" | "Trailer Evidence" | "Strong Theory" | "Weak Theory" | "Unverified";

export type POI = {
  id: string;
  name: string;
  category: POICategory;
  lat: number;
  lng: number;
  description: string;
  confidence: Confidence;
  source: string;
  reason?: string;
  evidenceType?: string;
  relatedArticle?: string;
  lastUpdated?: string;
  evidenceImage?: string;
};

export const LEONIDA_POIS: POI[] = [
  {
    id: "poi-1",
    name: "Vice Beach Pier Area",
    category: "story",
    lat: 25.79,
    lng: -80.13,
    description:
      "Coastal story-signal zone. Trailer framing makes this feel like an early meeting, chase, or setup location, but no mission is confirmed.",
    confidence: "Trailer Evidence",
    source: "Trailer 2 coastal shots + common GTA mission structure",
    reason: "Pier lighting, traffic flow, and character staging match a Rockstar-style intro space.",
    evidenceType: "Trailer frame read",
    relatedArticle: "real-leonida-locations",
    lastUpdated: "2026-06-03",
    evidenceImage: "/img/leonida-map-preview.jpg",
  },
  {
    id: "poi-2",
    name: "Possible Collectible: Marina Rooftop",
    category: "collectible",
    lat: 25.82,
    lng: -80.17,
    description:
      "Rooftop collectible theory. The geometry looks like the kind of high-visibility spot Rockstar uses for small discovery rewards.",
    confidence: "Strong Theory",
    source: "Trailer 2 geometry analysis + community frame checks",
    reason: "Rooftop angles line up with collectible-style hides in past GTA games.",
    evidenceType: "Geometry theory",
    relatedArticle: "real-leonida-locations",
    lastUpdated: "2026-06-03",
    evidenceImage: "/img/evidence-journey-map.jpg",
  },
  {
    id: "poi-3",
    name: "Off-Grid Pawn / Fence Location",
    category: "hidden",
    lat: 25.76,
    lng: -80.2,
    description:
      "Possible off-grid vendor or fence location. Treat this as a systems theory, not confirmed gameplay.",
    confidence: "Strong Theory",
    source: "Trailer 1 interior shots + classic GTA side activity patterns",
    reason: "Small interior staging and off-strip placement match hidden vendor patterns from Rockstar games.",
    evidenceType: "Systems theory",
    relatedArticle: "trailer-3-scorecard",
    lastUpdated: "2026-06-03",
    evidenceImage: "/img/summer-marketing-hype.jpg",
  },
  {
    id: "poi-4",
    name: "Cluckin' Bell Franchise Hub",
    category: "business",
    lat: 25.85,
    lng: -80.11,
    description:
      "Recurring GTA brand watch. This pin tracks visible food-chain signage and possible business-system implications.",
    confidence: "Trailer Evidence",
    source: "Rockstar screenshots + trailer signage",
    reason: "Cluckin' Bell is a recurring GTA brand, and the location fits a coastal commercial strip.",
    evidenceType: "Brand sighting",
    relatedArticle: "launch-day-economy",
    lastUpdated: "2026-06-03",
    evidenceImage: "/img/social-card-premium.jpg",
  },
  {
    id: "poi-5",
    name: "Sunset Drop Heist Setup",
    category: "story",
    lat: 25.74,
    lng: -80.15,
    description:
      "Sunset action-zone theory. Vehicle placement and lighting suggest a setup or handoff scene, but the details are unknown.",
    confidence: "Trailer Evidence",
    source: "Trailer 2 lighting and vehicle placements",
    reason: "Sunset timing, road shape, and staged vehicles make this worth tracking.",
    evidenceType: "Trailer staging",
    relatedArticle: "trailer-3-scorecard",
    lastUpdated: "2026-06-03",
    evidenceImage: "/img/hero-neon-banner.jpg",
  },
  {
    id: "poi-6",
    name: "Possible Collectible: Ocean Drive Neon",
    category: "collectible",
    lat: 25.81,
    lng: -80.09,
    description:
      "Neon-sign collectible theory. The spot is visually loud enough to become a small hidden reward location.",
    confidence: "Weak Theory",
    source: "Community theory + neon sign closeups in trailers",
    reason: "Neon landmarks are easy to remember and often become collectible anchors.",
  },
  {
    id: "poi-7",
    name: "Triangle Heist Prep Zone",
    category: "story",
    lat: 25.78,
    lng: -80.18,
    description:
      "Dense urban mission-zone theory. The road layout suggests a place Rockstar could use for pursuit, meetup, or heist staging.",
    confidence: "Strong Theory",
    source: "Trailer 2 urban geometry + heist mission patterns from GTA V",
    reason: "The triangle road shape creates natural approach and escape paths.",
  },
  {
    id: "poi-8",
    name: "Underground Fight Club",
    category: "hidden",
    lat: 25.77,
    lng: -80.14,
    description:
      "Interior side-activity watch. Basement-style shots point toward a nightlife, fight, or underground social space.",
    confidence: "Trailer Evidence",
    source: "Trailer 1 basement interiors + audio cues",
    reason: "The lighting and crowd framing fit an optional activity space.",
  },
  {
    id: "poi-9",
    name: "Possible Collectible: Lifeguard Tower",
    category: "collectible",
    lat: 25.83,
    lng: -80.12,
    description:
      "Beach landmark collectible theory. The tower is a clean candidate for hidden pickups or photo-style discovery.",
    confidence: "Strong Theory",
    source: "Trailer 2 beach footage + collectible logic",
    reason: "Tall beach objects make strong discovery landmarks.",
  },
  {
    id: "poi-10",
    name: "Vangelico Jeweler (Leonida)",
    category: "business",
    lat: 25.8,
    lng: -80.16,
    description:
      "Luxury-store signal. This tracks whether a high-end retail space becomes story, heist, or economy content.",
    confidence: "Trailer Evidence",
    source: "Rockstar marketing assets + classic GTA heist target",
    reason: "Vangelico has GTA history, and luxury strips are natural mission targets.",
  },
  {
    id: "poi-11",
    name: "Darnell Bros. Warehouse",
    category: "story",
    lat: 25.75,
    lng: -80.19,
    description:
      "Warehouse signal. The area has the kind of industrial shape Rockstar often uses for planning, storage, or crew scenes.",
    confidence: "Strong Theory",
    source: "Trailer 1 warehouse interiors",
    reason: "Warehouse interiors and rooftop access are strong GTA setup patterns.",
  },
  {
    id: "poi-12",
    name: "Possible Collectible: Drive-In Screen",
    category: "collectible",
    lat: 25.79,
    lng: -80.21,
    description:
      "Drive-in collectible theory. Abandoned entertainment spaces are good candidates for small hidden discoveries.",
    confidence: "Weak Theory",
    source: "Community theory + abandoned location logic",
    reason: "Drive-ins are memorable landmarks and easy to reuse for exploration.",
  },
  {
    id: "poi-13",
    name: "Pit Stop Chop Shop",
    category: "hidden",
    lat: 25.82,
    lng: -80.08,
    description:
      "Vehicle-system watch. This pin tracks whether a garage or chop-shop style loop appears in the Leonida economy.",
    confidence: "Trailer Evidence",
    source: "Trailer 2 vehicle custom shots + side activity patterns",
    reason: "Vehicle modification and resale systems are natural GTA side loops.",
  },
  {
    id: "poi-14",
    name: "Bean Machine Franchise",
    category: "business",
    lat: 25.84,
    lng: -80.15,
    description:
      "Recurring brand signal. Bean Machine signage is worth tracking because brands often connect to interiors, jokes, or business loops.",
    confidence: "Trailer Evidence",
    source: "Rockstar assets + recurring GTA brand",
    reason: "Long-running GTA brands often become worldbuilding anchors.",
  },
  {
    id: "poi-15",
    name: "Vice City Port Heist",
    category: "story",
    lat: 25.73,
    lng: -80.11,
    description:
      "Dockside action-zone theory. Port and water shots suggest a space for smuggling, pursuit, or heist staging.",
    confidence: "Trailer Evidence",
    source: "Trailer 2 port and water shots",
    reason: "Ports create natural vehicle variety: boats, trucks, cranes, and escape routes.",
  },
  {
    id: "poi-16",
    name: "Possible Collectible: Abandoned Station",
    category: "collectible",
    lat: 25.77,
    lng: -80.22,
    description:
      "Abandoned-station collectible theory. This marks a quiet beach structure that could hide a small reward or clue.",
    confidence: "Weak Theory",
    source: "Trailer 2 south beach angles",
    reason: "Abandoned spots invite exploration and make good low-noise collectible candidates.",
  },
  {
    id: "poi-17",
    name: "Kortz Center (Leonida)",
    category: "story",
    lat: 25.81,
    lng: -80.18,
    description:
      "Museum-style mission theory. The interior read suggests a high-value culture or art-space location, not a confirmed heist.",
    confidence: "Strong Theory",
    source: "Trailer 1 museum-style interiors + GTA V Kortz reference",
    reason: "Museum-style spaces naturally support stealth, security, and set-piece missions.",
  },
  {
    id: "poi-18",
    name: "Possible Collectible: Scrapyard Trunk",
    category: "collectible",
    lat: 25.76,
    lng: -80.07,
    description:
      "Scrapyard collectible theory. The area has enough clutter and landmarks to support hidden-item hunting.",
    confidence: "Weak Theory",
    source: "Community theory + scrapyard visuals",
    reason: "Scrapyards are built for search-and-discover gameplay.",
  },
  {
    id: "poi-19",
    name: "The Diamond Casino (Leonida)",
    category: "business",
    lat: 25.79,
    lng: -80.13,
    description:
      "Casino and entertainment signal. This tracks whether Leonida gets a high-stakes money, nightlife, or social hub.",
    confidence: "Trailer Evidence",
    source: "Rockstar casino assets + GTA V Diamond Casino parallel",
    reason: "Casino spaces fit Vice City tone and GTA Online-style social systems.",
  },
  {
    id: "poi-20",
    name: "Swamp Hideout",
    category: "hidden",
    lat: 25.71,
    lng: -80.25,
    description:
      "Swamp hideout theory. Inland footage makes this a strong candidate for off-grid story beats or side activity.",
    confidence: "Trailer Evidence",
    source: "Trailer 2 swamp and inland shots",
    reason: "Swamps are Leonida's natural contrast to the neon coast.",
  },
  {
    id: "poi-21",
    name: "Aerial Tram Station",
    category: "story",
    lat: 25.85,
    lng: -80.09,
    description:
      "Transport-system theory. Aerial or elevated structures could become traversal, chase, or skyline landmarks.",
    confidence: "Strong Theory",
    source: "Trailer 2 aerial and tram-like structures",
    reason: "Elevated transport gives Rockstar easy movement, views, and chase geometry.",
  },
  {
    id: "poi-22",
    name: "Possible Collectible: Highway Sign",
    category: "collectible",
    lat: 25.82,
    lng: -80.23,
    description:
      "Highway-sign collectible theory. Large signage is a strong candidate for climbing, photo, or hidden reward moments.",
    confidence: "Strong Theory",
    source: "Trailer 2 highway and sign closeups",
    reason: "Highway signs are easy-to-share landmarks and natural elevated hiding spots.",
  },
  {
    id: "poi-23",
    name: "Submarine Pen",
    category: "hidden",
    lat: 25.72,
    lng: -80.05,
    description:
      "Underwater-facility theory. Interesting water infrastructure, but this needs much stronger proof before being treated seriously.",
    confidence: "Weak Theory",
    source: "Community theory + water facility logic",
    reason: "GTA has used water for hidden content before, but this one remains a weak read.",
  },
  {
    id: "poi-24",
    name: "Vinewood Sign (Leonida)",
    category: "business",
    lat: 25.78,
    lng: -80.20,
    description:
      "Landmark and entertainment-industry signal. This tracks whether Leonida mirrors GTA's celebrity and media satire spaces.",
    confidence: "Trailer Evidence",
    source: "Rockstar assets + GTA V Vinewood parallel",
    reason: "Large signs and media landmarks are core GTA worldbuilding tools.",
  },
  {
    id: "poi-25",
    name: "Theory: High-Value Mission Zone",
    category: "story",
    lat: 25.80,
    lng: -80.10,
    description:
      "High-value mission-zone theory. This is a pattern read based on staging and security vibes, not confirmed endgame content.",
    confidence: "Strong Theory",
    source: "Trailer 2 finale-style lighting + mission structure logic",
    reason: "The area has the density and lighting Rockstar often uses for major set pieces.",
  },
];

// Derived from the data so the map header date is never a hardcoded lie:
// it reflects the most recently updated pin and moves automatically as pins are maintained.
const _latestUpdated = LEONIDA_POIS.reduce(
  (max, p) => (p.lastUpdated && p.lastUpdated > max ? p.lastUpdated : max),
  "2026-06-03"
);
export const LAST_UPDATED_ISO = _latestUpdated;
export const LAST_UPDATED = new Date(`${_latestUpdated}T00:00:00`).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
