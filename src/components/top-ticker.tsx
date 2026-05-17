"use client";

const HEADLINES = [
  "And IGN's Warning Has Everyone Talking",
  "Sony Is Literally Telling PS4 Players to Upgrade for GTA 6 — And It's Working",
  "Scottish MPs Call Out Rockstar Over Edinburgh References",
  "Best Buy Just Leaked The GTA 6 Pre-Order Date",
  "Take-Two Earnings Hint at $90 Launch Price",
];

export function TopTicker() {
  // Duplicate the headlines for seamless loop
  const items = [...HEADLINES, ...HEADLINES];
  return (
    <div className="relative bg-background border-b border-border h-9 overflow-hidden flex items-center text-xs font-medium">
      <span className="absolute left-0 top-0 bottom-0 z-10 px-3 flex items-center bg-primary text-primary-foreground uppercase tracking-widest font-bold">
        Live
      </span>
      <div className="ml-20 overflow-hidden whitespace-nowrap relative w-full">
        <div className="inline-flex animate-marquee gap-10 pl-4">
          {items.map((h, i) => (
            <span key={i} className="text-muted-foreground">
              <span className="text-secondary mr-2">◆</span>
              {h}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </div>
  );
}
