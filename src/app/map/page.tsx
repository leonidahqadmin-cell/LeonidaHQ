import { MapView } from "@/components/map-view";
import { MotionToggle } from "@/components/motion-toggle";
import { LEONIDA_POIS, LAST_UPDATED } from "@/lib/poi-data";

export const metadata = {
  title: "Leonida Map",
  description:
    "The public Leonida map tracker. 25+ GTA 6 locations with source notes, confidence labels, filters, and evidence-first map intel.",
};

export default function MapPage() {
  return (
    <div className="flex h-[calc(100vh-5rem)] min-h-[560px] w-full flex-col md:h-[calc(100vh-5rem-2.25rem)] md:min-h-[640px]">
      <div className="border-b border-border bg-card/55 px-4 py-3 md:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="block font-heading text-xs font-bold uppercase tracking-widest text-secondary">
              Leonida evidence map
            </span>
            <span className="mt-1 block text-xs text-muted-foreground md:text-sm">
              {LEONIDA_POIS.length} pins / Confidence labels / Source notes / Last updated: {LAST_UPDATED}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="/articles?category=evidence"
              className="rounded border border-secondary px-3 py-1.5 text-xs uppercase tracking-widest text-secondary transition hover:bg-secondary hover:text-background"
            >
              Read Evidence
            </a>
            <a
              href="https://x.com/viraltbf"
              target="_blank"
              className="rounded border border-primary px-3 py-1.5 text-xs uppercase tracking-widest text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              @viraltbf
            </a>
            <MotionToggle />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <MapView />
      </div>
    </div>
  );
}
