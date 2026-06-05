import Link from "next/link";

export function ClueHotspots() {
  const clues = [
    { label: "Vice Beach Pier", desc: "Trailer evidence / coastal", pin: "poi-1" },
    { label: "Ocean Drive Neon", desc: "Strong theory / nightlife", pin: "poi-6" },
    { label: "Swamp Hideout", desc: "Theory / off-grid", pin: "poi-20" },
    { label: "High-Value Zone", desc: "Theory / endgame", pin: "poi-25" },
  ];

  const items = [
    { title: "Trailer 2 Pier Drop", meta: "Trailer evidence / coastal", img: "/img/futuristic-map-mockup.jpg" },
    { title: "Neon Collectible", meta: "Strong theory / night", img: "/img/inland-city-dusk.jpg" },
    { title: "Port Heist Setup", meta: "Trailer Evidence", img: "/img/3d-map-section-mockup.jpg" },
    { title: "Evidence Journey", meta: "Pin trail / map notes", img: "/img/evidence-journey-map.jpg" },
  ];

  return (
    <>
      <div className="mb-6">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Tap a clue to jump toward the map</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {clues.map((clue, idx) => (
            <Link
              key={idx}
              href="/map"
              className="group text-left p-3 rounded-lg border border-border bg-background/50 hover:border-primary hover:bg-card transition active:scale-[0.985]"
            >
              <div className="font-heading uppercase tracking-widest text-xs text-secondary group-hover:text-primary">{clue.label}</div>
              <div className="text-sm text-muted-foreground mt-0.5">{clue.desc}</div>
              <div className="mt-2 text-[9px] text-primary/70 group-hover:underline">VIEW ON MAP -&gt;</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto pb-2 snap-x snap-mandatory flex gap-3 -mx-1 px-1">
        {items.map((item, i) => (
          <div key={i} className="min-w-[220px] sm:min-w-[260px] snap-start group rounded-xl overflow-hidden border border-white/10 bg-card/60 hover:border-primary transition">
            <div className="relative aspect-video overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <div className="font-heading text-sm font-bold tracking-tight group-hover:text-[#00E5CC] transition">{item.title}</div>
                <div className="text-[10px] text-white/60">{item.meta}</div>
              </div>
              <div className="absolute top-2 right-2 text-[9px] px-1.5 py-0.5 bg-black/60 rounded border border-white/20 opacity-0 group-hover:opacity-100 transition">LIVE</div>
            </div>
            <div className="p-2 text-[10px] flex justify-between text-muted-foreground">
              <span>Evidence board</span>
              <Link href="/map" className="hover:text-secondary">Pin -&gt;</Link>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-[10px] text-muted-foreground mt-2">Swipe the evidence cards. Each one should become a real source-backed pin.</p>
    </>
  );
}
