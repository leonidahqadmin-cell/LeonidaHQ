// Placeholder POI data. Replace with real Leonida coordinates after 2026-11-19 launch.

export type POICategory = "story" | "collectible" | "hidden" | "business";

export type POI = {
  id: string;
  name: string;
  category: POICategory;
  lat: number;
  lng: number;
  description: string;
};

export const PLACEHOLDER_POIS: POI[] = [
  {
    id: "poi-1",
    name: "Vice Beach Pier",
    category: "story",
    lat: 25.79,
    lng: -80.13,
    description:
      "Story mission start. Meet your contact at sunset for the first job. Bring a vehicle you don't mind losing.",
  },
  {
    id: "poi-2",
    name: "Leonida Card #1",
    category: "collectible",
    lat: 25.82,
    lng: -80.17,
    description:
      "First of 50 collectible Leonida Cards. Found on the rooftop of the marina parking garage.",
  },
  {
    id: "poi-3",
    name: "Hidden Pawn Shop",
    category: "hidden",
    lat: 25.76,
    lng: -80.2,
    description:
      "Off-the-books fencer. Sells stolen goods at 70% market value. Closed during story missions.",
  },
  {
    id: "poi-4",
    name: "Cluckin' Bell HQ",
    category: "business",
    lat: 25.85,
    lng: -80.11,
    description:
      "Buyable franchise. Generates $5,000/in-game-day passive income after acquisition.",
  },
  {
    id: "poi-5",
    name: "Sunset Drop Mission",
    category: "story",
    lat: 25.74,
    lng: -80.15,
    description:
      "Heist setup mission. Requires 3 NPCs hired from the gang network beforehand.",
  },
  {
    id: "poi-6",
    name: "Leonida Card #2",
    category: "collectible",
    lat: 25.81,
    lng: -80.09,
    description:
      "Wedged behind the neon sign at the Ocean Drive diner. Visible only at night.",
  },
];
