"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  Briefcase,
  CheckSquare,
  Eye,
  EyeOff,
  Flame,
  Gem,
  Layers,
  MapPin,
  Minus,
  Plus,
  Route,
  Search,
  Settings,
  Share2,
  Star,
  Target,
  X,
} from "lucide-react";
import { LEONIDA_POIS, type Confidence, type POI } from "@/lib/poi-data";

const CATEGORY_META = {
  story: { color: "#ff2d78", label: "Story", icon: Flame },
  collectible: { color: "#6bdcff", label: "Collectible", icon: Gem },
  hidden: { color: "#ffb45e", label: "Hidden", icon: Target },
  business: { color: "#b875ff", label: "Business", icon: Briefcase },
} as const;

const CONFIDENCE_META: Record<Confidence, { color: string; label: string; helper: string }> = {
  Confirmed: { color: "#6CFF9E", label: "Official", helper: "Officially named or directly shown." },
  "Trailer Evidence": { color: "#00E5CC", label: "Trailer Evidence", helper: "Visible in Rockstar footage or public assets." },
  "Strong Theory": { color: "#FF2D78", label: "Strong Theory", helper: "Good pattern match, still not confirmed." },
  "Weak Theory": { color: "#FFB45E", label: "Rumor Watch", helper: "Interesting, but needs more proof." },
  Unverified: { color: "#8A8A96", label: "Unverified", helper: "Do not treat as real yet." },
};

const MAP_BOUNDS = {
  minLng: -80.25,
  maxLng: -80.05,
  minLat: 25.71,
  maxLat: 25.85,
};

const CONFIDENCE_ORDER: Confidence[] = [
  "Trailer Evidence",
  "Strong Theory",
  "Weak Theory",
  "Confirmed",
  "Unverified",
];

function getRelatedArticle(poi: POI) {
  if (poi.relatedArticle) return poi.relatedArticle;
  if (poi.category === "business") return "launch-day-economy";
  if (poi.category === "collectible") return "real-leonida-locations";
  if (poi.category === "hidden") return "trailer-3-scorecard";
  return "real-leonida-locations";
}

function getEvidenceType(poi: POI) {
  return poi.evidenceType ?? (poi.confidence === "Trailer Evidence" ? "Trailer frame read" : "Pattern theory");
}

function getConfidenceScore(confidence: Confidence) {
  if (confidence === "Confirmed") return 95;
  if (confidence === "Trailer Evidence") return 82;
  if (confidence === "Strong Theory") return 62;
  if (confidence === "Weak Theory") return 34;
  return 18;
}

function getEvidenceImage(poi: POI) {
  if (poi.evidenceImage) return poi.evidenceImage;
  if (poi.category === "business") return "/img/social-card-premium.jpg";
  if (poi.category === "collectible") return "/img/evidence-journey-map.jpg";
  if (poi.category === "hidden") return "/img/inland-city-dusk.jpg";
  return "/img/leonida-map-preview.jpg";
}

function pinPosition(poi: POI) {
  const x = ((poi.lng - MAP_BOUNDS.minLng) / (MAP_BOUNDS.maxLng - MAP_BOUNDS.minLng)) * 100;
  const y = (1 - (poi.lat - MAP_BOUNDS.minLat) / (MAP_BOUNDS.maxLat - MAP_BOUNDS.minLat)) * 100;
  return {
    left: `${Math.min(96, Math.max(4, x))}%`,
    top: `${Math.min(94, Math.max(5, y))}%`,
  };
}

export function MapView() {
  const [selectedPOI, setSelectedPOI] = useState<POI | null>(null);
  const [activeCategories, setActiveCategories] = useState<Set<string>>(
    new Set(Object.keys(CATEGORY_META))
  );
  const [activeConfidence, setActiveConfidence] = useState<Set<Confidence>>(
    new Set(CONFIDENCE_ORDER)
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [zoom, setZoom] = useState(1);
  const [showRoutes, setShowRoutes] = useState(true);
  const [showHeat, setShowHeat] = useState(false);
  const [showClusters, setShowClusters] = useState(true);
  const [coords, setCoords] = useState({ x: "0.000", y: "0.000" });

  const countsByCategory = useMemo(() => {
    return LEONIDA_POIS.reduce<Record<string, number>>((acc, poi) => {
      acc[poi.category] = (acc[poi.category] ?? 0) + 1;
      return acc;
    }, {});
  }, []);

  const countsByConfidence = useMemo(() => {
    return LEONIDA_POIS.reduce<Record<Confidence, number>>(
      (acc, poi) => {
        acc[poi.confidence] += 1;
        return acc;
      },
      {
        Confirmed: 0,
        "Trailer Evidence": 0,
        "Strong Theory": 0,
        "Weak Theory": 0,
        Unverified: 0,
      }
    );
  }, []);

  const filteredPOIs = useMemo(() => {
    const query = searchTerm.toLowerCase();
    return LEONIDA_POIS.filter((poi) => {
      if (!activeCategories.has(poi.category)) return false;
      if (!activeConfidence.has(poi.confidence)) return false;
      if (!query) return true;
      return `${poi.name} ${poi.description} ${poi.source} ${poi.reason ?? ""}`.toLowerCase().includes(query);
    });
  }, [activeCategories, activeConfidence, searchTerm]);

  function toggleCategory(category: string) {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
  }

  function toggleConfidence(confidence: Confidence) {
    setActiveConfidence((prev) => {
      const next = new Set(prev);
      if (next.has(confidence)) next.delete(confidence);
      else next.add(confidence);
      return next;
    });
  }

  function showAll() {
    setActiveCategories(new Set(Object.keys(CATEGORY_META)));
    setActiveConfidence(new Set(CONFIDENCE_ORDER));
  }

  function hideAll() {
    setActiveCategories(new Set());
    setActiveConfidence(new Set());
  }

  return (
    <div className="grid min-h-[520px] bg-[#070707] lg:h-full lg:min-h-[760px] lg:grid-cols-[360px_minmax(0,1fr)]">
      <aside className="order-2 border-t border-white/10 bg-[#0d0b0a] p-4 lg:order-1 lg:border-r lg:border-t-0">
        <div className="flex items-center justify-between">
          <div>
            <p className="eyebrow">Interactive map</p>
            <h2 className="mt-1 text-2xl font-black tracking-tight">Leonida</h2>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] font-black uppercase tracking-widest text-white/65">
            Preview
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/55" />
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search markers..."
              className="w-full rounded-lg border border-white/10 bg-black/45 py-3 pl-9 pr-3 text-sm outline-none transition focus:border-secondary"
            />
          </div>
          <button className="rounded-lg border border-white/10 px-4 text-xs font-black uppercase tracking-widest text-white/68">
            Search
          </button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button onClick={showAll} className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-3 text-xs font-bold text-white/75">
            <Eye className="h-4 w-4" /> Show All
          </button>
          <button onClick={hideAll} className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-3 text-xs font-bold text-white/75">
            <EyeOff className="h-4 w-4" /> Hide All
          </button>
        </div>

        <FilterSection title="Evidence Types">
          {(Object.entries(CATEGORY_META) as Array<[keyof typeof CATEGORY_META, typeof CATEGORY_META[keyof typeof CATEGORY_META]]>).map(([category, meta]) => {
            const Icon = meta.icon;
            return (
              <FilterButton
                key={category}
                active={activeCategories.has(category)}
                color={meta.color}
                count={countsByCategory[category] ?? 0}
                onClick={() => toggleCategory(category)}
              >
                <Icon className="h-4 w-4" />
                {meta.label}
              </FilterButton>
            );
          })}
        </FilterSection>

        <FilterSection title="Signal Filters">
          {CONFIDENCE_ORDER.map((confidence) => (
            <FilterButton
              key={confidence}
              active={activeConfidence.has(confidence)}
              color={CONFIDENCE_META[confidence].color}
              count={countsByConfidence[confidence]}
              onClick={() => toggleConfidence(confidence)}
            >
              <CheckSquare className="h-4 w-4" />
              {CONFIDENCE_META[confidence].label}
            </FilterButton>
          ))}
        </FilterSection>

        <FilterSection title="Map Tools">
          <ToolButton active={showRoutes} onClick={() => setShowRoutes((v) => !v)} icon={Route} label="Routes" />
          <ToolButton active={showHeat} onClick={() => setShowHeat((v) => !v)} icon={Layers} label="Heatmap" />
          <ToolButton active={false} onClick={() => setSelectedPOI(null)} icon={Settings} label="Reset View" />
          <ToolButton active={false} onClick={() => window.open("https://x.com/viraltbf", "_blank")} icon={Share2} label="Send Tip" />
        </FilterSection>

        <div className="mt-5 max-h-[260px] space-y-2 overflow-y-auto pr-1 lg:max-h-[calc(100vh-650px)]">
          {filteredPOIs.map((poi) => (
            <button
              key={poi.id}
              onClick={() => setSelectedPOI(poi)}
              className={`w-full rounded-lg border p-3 text-left transition ${
                selectedPOI?.id === poi.id
                  ? "border-primary bg-primary/12"
                  : "border-white/10 bg-black/30 hover:border-secondary/60"
              }`}
            >
              <div className="flex items-start gap-2">
                <MarkerIcon poi={poi} small />
                <div className="min-w-0">
                  <div className="text-sm font-black leading-tight">{poi.name}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-white/65">
                    {CATEGORY_META[poi.category].label} / {CONFIDENCE_META[poi.confidence].label} / {getConfidenceScore(poi.confidence)}/100
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </aside>

      <section className="relative order-1 min-h-[420px] overflow-hidden bg-black lg:order-2 lg:min-h-[620px]">
        <div
          className="absolute inset-0 origin-center transition duration-300"
          style={{ transform: `scale(${zoom})` }}
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;
            setCoords({ x: x.toFixed(3), y: y.toFixed(3) });
          }}
        >
          <Image
            src="/img/map-illustration.jpg"
            alt="Leonida interactive evidence map"
            fill
            priority
            sizes="100vw"
            className="scale-[1.42] object-contain object-center"
            style={{ objectPosition: "center 30%" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[length:44px_44px]" />
          <div className="absolute inset-0 bg-black/5" />
          {showHeat && <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_48%,rgba(255,45,120,0.35),transparent_34%),radial-gradient(circle_at_67%_36%,rgba(0,229,204,0.24),transparent_28%)]" />}
          {showRoutes && (
            <svg className="absolute inset-0 h-full w-full opacity-45" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M8 63 C22 51, 36 54, 48 42 S70 30, 92 24" fill="none" stroke="#00E5CC" strokeWidth="0.35" strokeDasharray="1.2 1.2" />
              <path d="M14 81 C32 70, 45 70, 59 58 S78 53, 90 40" fill="none" stroke="#FF2D78" strokeWidth="0.32" strokeDasharray="1 1.3" />
            </svg>
          )}
        </div>

        {showClusters && (
          <>
            <ClusterBadge label="Trailer" count={countsByConfidence["Trailer Evidence"]} color="#ff3b57" left="66%" top="52%" />
            <ClusterBadge label="Strong" count={countsByConfidence["Strong Theory"]} color="#ff2d78" left="48%" top="46%" />
            <ClusterBadge label="Rumor" count={countsByConfidence["Weak Theory"]} color="#4cc36f" left="56%" top="68%" />
            <ClusterBadge label="Pins" count={filteredPOIs.length} color="#7367ff" left="71%" top="33%" />
          </>
        )}

        {!showClusters && filteredPOIs.map((poi) => {
          const position = pinPosition(poi);
          return (
            <button
              key={poi.id}
              onClick={() => setSelectedPOI(poi)}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2 transition hover:z-20 hover:scale-110"
              style={position}
              aria-label={poi.name}
            >
              <MarkerIcon poi={poi} active={selectedPOI?.id === poi.id} />
            </button>
          );
        })}

        <div className="absolute left-1/2 top-16 z-30 -translate-x-1/2 rounded-full border border-white/15 bg-black/60 px-5 py-3 shadow-xl backdrop-blur lg:top-4">
          <p className="text-center text-[10px] font-black uppercase tracking-widest text-secondary">State of Leonida</p>
          <p className="mt-1 text-center text-xs text-white/68">{filteredPOIs.length} visible markers / evidence preview</p>
        </div>

        <div className="absolute left-4 top-4 z-30 grid gap-2">
          <ToolSquare icon={MapPin} active={!showClusters} label={showClusters ? "Show pins" : "Show clusters"} onClick={() => setShowClusters((v) => !v)} />
          <ToolSquare icon={Search} label="Search" onClick={() => setSearchTerm("")} />
          <ToolSquare icon={Route} active={showRoutes} label="Routes" onClick={() => setShowRoutes((v) => !v)} />
          <ToolSquare icon={Layers} active={showHeat} label="Heat" onClick={() => setShowHeat((v) => !v)} />
        </div>

        <div className="absolute right-4 top-4 z-30 grid gap-2">
          <button onClick={() => setZoom((z) => Math.min(1.7, z + 0.12))} className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-black/70 text-white backdrop-blur">
            <Plus className="h-4 w-4" />
          </button>
          <button onClick={() => setZoom((z) => Math.max(1, z - 0.12))} className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-black/70 text-white backdrop-blur">
            <Minus className="h-4 w-4" />
          </button>
        </div>

        <div className="absolute bottom-4 left-4 z-30 hidden rounded-lg border border-white/10 bg-black/70 px-3 py-2 text-xs text-white/70 backdrop-blur lg:block">
          X: {coords.x}, Y: {coords.y}
        </div>

        {selectedPOI && (
        <div className="fixed inset-x-0 bottom-0 z-50 max-h-[72vh] overflow-y-auto rounded-t-2xl border-t border-white/15 bg-[#0a0712] p-4 pb-6 shadow-2xl backdrop-blur lg:absolute lg:inset-x-auto lg:bottom-4 lg:right-4 lg:w-[390px] lg:rounded-lg lg:border lg:pb-4">
          <button
            onClick={() => setSelectedPOI(null)}
            className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-black/70 text-white/80 transition hover:text-white"
            aria-label="Close pin details"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="flex flex-wrap gap-2 pr-6">
            <Badge color={CATEGORY_META[selectedPOI.category].color} label={CATEGORY_META[selectedPOI.category].label} />
            <Badge color={CONFIDENCE_META[selectedPOI.confidence].color} label={CONFIDENCE_META[selectedPOI.confidence].label} />
          </div>
          <div className="relative mt-3 aspect-[16/8] overflow-hidden rounded-lg border border-white/10">
            <Image
              src={getEvidenceImage(selectedPOI)}
              alt={`${selectedPOI.name} evidence visual`}
              fill
              sizes="390px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
            <div className="absolute bottom-2 left-2 rounded bg-black/65 px-2 py-1 text-[9px] font-black uppercase tracking-widest text-white/70">
              Evidence visual
            </div>
          </div>
          <h2 className="mt-3 text-xl font-black tracking-tight">{selectedPOI.name}</h2>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/68">{selectedPOI.description}</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <ProofBox label="Evidence" value={getEvidenceType(selectedPOI)} />
            <ProofBox label="Updated" value={selectedPOI.lastUpdated ?? "2026-06-03"} />
          </div>
          <ConfidenceScore score={getConfidenceScore(selectedPOI.confidence)} color={CONFIDENCE_META[selectedPOI.confidence].color} />
          <div className="mt-2 rounded-lg border border-white/10 bg-white/[0.04] p-3">
            <p className="text-[10px] font-black uppercase tracking-widest text-secondary">Source note</p>
            <p className="mt-1 text-xs leading-relaxed text-white/60">{selectedPOI.source}</p>
            {selectedPOI.reason && (
              <p className="mt-2 text-xs leading-relaxed text-white/65">Why it matters: {selectedPOI.reason}</p>
            )}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <a
              href={`/articles/${getRelatedArticle(selectedPOI)}`}
              className="rounded-lg border border-secondary/70 px-3 py-2 text-center text-[10px] font-black uppercase tracking-widest text-secondary transition hover:bg-secondary hover:text-black"
            >
              Related Report
            </a>
            <a
              href={`https://x.com/intent/tweet?text=${encodeURIComponent(`Tracking ${selectedPOI.name} on LeonidaHQ. ${selectedPOI.confidence}.`)} @viraltbf`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-primary/70 px-3 py-2 text-center text-[10px] font-black uppercase tracking-widest text-primary transition hover:bg-primary hover:text-black"
            >
              Share Pin
            </a>
          </div>
        </div>
        )}
      </section>
    </div>
  );
}

function ProofBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
      <p className="text-[9px] font-black uppercase tracking-widest text-white/65">{label}</p>
      <p className="mt-1 text-xs font-bold leading-snug text-white/74">{value}</p>
    </div>
  );
}

function ConfidenceScore({ score, color }: { score: number; color: string }) {
  return (
    <div className="mt-2 rounded-lg border border-white/10 bg-white/[0.04] p-3">
      <div className="flex items-center justify-between">
        <p className="text-[9px] font-black uppercase tracking-widest text-white/65">Confidence score</p>
        <p className="text-xs font-black" style={{ color }}>{score}/100</p>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full" style={{ width: `${score}%`, background: color }} />
      </div>
    </div>
  );
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm font-black text-white/78">{title}</p>
        <Star className="h-3.5 w-3.5 text-white/25" />
      </div>
      <div className="grid grid-cols-2 gap-2">{children}</div>
    </div>
  );
}

function FilterButton({
  active,
  color,
  count,
  onClick,
  children,
}: {
  active: boolean;
  color: string;
  count: number;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="flex min-h-[40px] items-center justify-between gap-2 rounded-lg border px-2.5 py-2 text-left text-xs font-bold transition"
      style={{
        borderColor: active ? `${color}aa` : "rgba(255,255,255,0.1)",
        background: active ? `${color}16` : "rgba(255,255,255,0.02)",
        color: active ? "white" : "rgba(255,255,255,0.45)",
      }}
    >
      <span className="flex min-w-0 items-center gap-2 truncate">{children}</span>
      <span className="rounded bg-black/35 px-1.5 py-0.5 text-[10px] text-white/65">{count}</span>
    </button>
  );
}

function ToolButton({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-bold transition ${
        active ? "border-secondary/70 bg-secondary/10 text-secondary" : "border-white/10 bg-white/[0.02] text-white/62"
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}

function ToolSquare({
  icon: Icon,
  label,
  active = false,
  onClick,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      title={label}
      className={`grid h-12 w-12 place-items-center rounded-xl border shadow-xl backdrop-blur transition ${
        active
          ? "border-secondary/70 bg-secondary/15 text-secondary"
          : "border-white/10 bg-black/62 text-white/68 hover:text-white"
      }`}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}

function ClusterBadge({
  label,
  count,
  color,
  left,
  top,
}: {
  label: string;
  count: number;
  color: string;
  left: string;
  top: string;
}) {
  return (
    <button
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-black/78 px-4 py-3 text-center shadow-2xl backdrop-blur transition hover:scale-105"
      style={{ left, top, borderColor: color, boxShadow: `0 0 28px ${color}66` }}
      title={`${count} ${label} markers`}
    >
      <div className="text-xl font-black" style={{ color }}>{count}</div>
      <div className="text-[9px] font-black uppercase tracking-widest text-white/65">{label}</div>
    </button>
  );
}

function MarkerIcon({ poi, active = false, small = false }: { poi: POI; active?: boolean; small?: boolean }) {
  const category = CATEGORY_META[poi.category];
  const confidence = CONFIDENCE_META[poi.confidence];
  const Icon = category.icon;
  const size = small ? "h-7 w-7" : "h-9 w-9";
  const iconSize = small ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <span
      className={`grid ${size} place-items-center rounded-full border-2 bg-black text-white shadow-lg transition ${active ? "scale-125" : ""}`}
      style={{
        borderColor: confidence.color,
        boxShadow: `0 0 0 3px rgba(0,0,0,0.68), 0 0 18px ${category.color}`,
      }}
    >
      <Icon className={iconSize} style={{ color: category.color }} />
    </span>
  );
}

function Badge({ color, label }: { color: string; label: string }) {
  return (
    <span
      className="rounded-full border px-2 py-1 text-[9px] font-black uppercase tracking-widest"
      style={{ color, borderColor: `${color}88`, background: `${color}14` }}
    >
      {label}
    </span>
  );
}
