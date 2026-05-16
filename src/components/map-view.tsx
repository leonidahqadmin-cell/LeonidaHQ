"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { PLACEHOLDER_POIS, type POI } from "@/lib/poi-data";

const CATEGORY_COLORS: Record<string, string> = {
  story: "oklch(0.66 0.27 0)",
  collectible: "oklch(0.85 0.16 215)",
  hidden: "oklch(0.72 0.18 40)",
  business: "oklch(0.6 0.22 320)",
};

export function MapView() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const [selectedPOI, setSelectedPOI] = useState<POI | null>(null);
  const [activeCategories, setActiveCategories] = useState<Set<string>>(
    new Set(Object.keys(CATEGORY_COLORS))
  );

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // CARTO Dark Matter tiles — dark-themed, no API key, CDN-friendly
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: {
        version: 8,
        sources: {
          carto: {
            type: "raster",
            tiles: [
              "https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
              "https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
              "https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
            ],
            tileSize: 256,
            attribution: "© OpenStreetMap contributors © CARTO",
          },
        },
        layers: [
          {
            id: "carto",
            type: "raster",
            source: "carto",
            paint: { "raster-saturation": -0.3, "raster-contrast": 0.1 },
          },
        ],
      },
      center: [-80.13, 25.79],
      zoom: 11,
      attributionControl: false,
    });

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");
    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    document.querySelectorAll(".leonida-marker").forEach((el) => el.remove());

    const filtered = PLACEHOLDER_POIS.filter((p) => activeCategories.has(p.category));
    filtered.forEach((poi) => {
      const el = document.createElement("div");
      el.className = "leonida-marker";
      el.style.cssText = `
        width: 24px; height: 24px;
        background: ${CATEGORY_COLORS[poi.category]};
        border: 2px solid oklch(0.08 0.02 280);
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 14px ${CATEGORY_COLORS[poi.category]};
        transition: transform 0.15s;
      `;
      el.onmouseenter = () => (el.style.transform = "scale(1.4)");
      el.onmouseleave = () => (el.style.transform = "scale(1)");
      el.onclick = () => setSelectedPOI(poi);
      new maplibregl.Marker({ element: el }).setLngLat([poi.lng, poi.lat]).addTo(map);
    });
  }, [activeCategories]);

  function toggleCategory(cat: string) {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  }

  return (
    <>
      <div
        ref={mapContainerRef}
        style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, minHeight: "600px" }}
      />

      {/* Category filter */}
      <div className="absolute bottom-6 left-6 z-10 bg-card/90 backdrop-blur border border-border rounded-lg p-3 flex gap-2 flex-wrap max-w-[calc(100vw-3rem)]">
        {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
          <button
            key={cat}
            onClick={() => toggleCategory(cat)}
            className="px-3 py-1.5 rounded text-xs font-medium uppercase tracking-wider transition"
            style={{
              backgroundColor: activeCategories.has(cat) ? `${color.replace(")", " / 0.25)")}` : "transparent",
              border: `1px solid ${activeCategories.has(cat) ? color : "oklch(1 0 0 / 12%)"}`,
              color: activeCategories.has(cat) ? "oklch(0.97 0.01 60)" : "oklch(0.7 0.02 280)",
              opacity: activeCategories.has(cat) ? 1 : 0.6,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* POI detail panel */}
      {selectedPOI && (
        <div className="absolute top-6 right-6 z-10 w-80 max-w-[calc(100vw-3rem)] bg-card border border-border rounded-lg p-5 shadow-2xl">
          <button
            onClick={() => setSelectedPOI(null)}
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
            aria-label="Close"
          >
            ✕
          </button>
          <p
            className="text-xs uppercase tracking-wider mb-2 font-semibold"
            style={{ color: CATEGORY_COLORS[selectedPOI.category] }}
          >
            {selectedPOI.category}
          </p>
          <h2 className="text-xl font-bold mb-2">{selectedPOI.name}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {selectedPOI.description}
          </p>
        </div>
      )}
    </>
  );
}
