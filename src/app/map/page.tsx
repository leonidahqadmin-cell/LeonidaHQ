import { MapView } from "@/components/map-view";

export const metadata = {
  title: "Interactive Map",
  description:
    "Every collectible, mission, business, and hidden location in Leonida. Activated on launch day, 2026-11-19.",
};

export default function MapPage() {
  return (
    <div
      className="w-full relative"
      style={{ height: "calc(100vh - 5rem - 2.25rem)", minHeight: "600px" }}
    >
      <MapView />

      {/* Top banner */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 max-w-[calc(100vw-2rem)] bg-card/95 backdrop-blur border-2 border-primary/40 rounded-lg px-5 py-3 shadow-2xl">
        <p className="font-heading uppercase tracking-widest text-[10px] text-secondary font-bold">
          ◆ Preview Mode
        </p>
        <p className="text-sm">
          <span className="text-foreground font-semibold">Real Leonida map activates</span>{" "}
          <span className="text-primary font-bold">2026-11-19</span>
        </p>
      </div>
    </div>
  );
}
