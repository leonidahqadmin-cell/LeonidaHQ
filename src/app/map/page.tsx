import { MapView } from "@/components/map-view";

export const metadata = {
  title: "Interactive Map",
  description: "Explore every location, collectible, and mystery in Leonida.",
};

export default function MapPage() {
  return (
    <div
      className="w-full relative"
      style={{ height: "calc(100vh - 4rem)", minHeight: "600px" }}
    >
      <MapView />

      {/* Overlay banner — remove on launch day */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 bg-card/90 backdrop-blur border border-border rounded-lg px-6 py-3 text-sm pointer-events-none">
        <span className="text-primary font-semibold">Preview mode.</span>{" "}
        <span className="text-muted-foreground">
          Real Leonida map activates 2026-11-19.
        </span>
      </div>
    </div>
  );
}
