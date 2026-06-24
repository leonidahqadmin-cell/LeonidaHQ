"use client";

const HEADLINES = [
  { label: "Breaking", text: "GTA 6 pre-orders open June 25 — watch for scams, only order from Rockstar or major retailers", href: "/articles/fake-gta-6-beta-scam-warning" },
  { label: "Confirmed", text: "GTA 6 launches November 19, 2026 on PS5 and Xbox Series X/S — why it won't slip again", href: "/articles/no-third-delay" },
  { label: "Trailer 3", text: "Rockstar still owes us five things before launch — the pre-order scorecard", href: "/articles/trailer-3-scorecard" },
  { label: "Map", text: "25 Leonida pins tracked with trailer confidence levels — explore now", href: "/map" },
  { label: "Price", text: "GTA 6 may break the $70 ceiling — the case for $90 at launch", href: "/articles/the-90-dollar-question" },
];

export function TopTicker() {
  const items = [...HEADLINES, ...HEADLINES];

  return (
    <div className="relative hidden h-9 items-center overflow-hidden border-b border-border bg-background text-xs font-medium md:flex">
      <span className="absolute bottom-0 left-0 top-0 z-10 flex items-center bg-primary px-3 font-bold uppercase tracking-widest text-primary-foreground">
        Live Intel
      </span>
      <div className="relative ml-24 w-full overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-marquee gap-10 pl-4">
          {items.map((headline, index) => (
            <a
              key={`${headline.label}-${index}`}
              href={headline.href}
              className="inline-flex items-center gap-2 text-muted-foreground transition hover:text-secondary"
              title="Open related LeonidaHQ report"
            >
              <span className="rounded border border-secondary/40 px-1.5 py-0.5 font-heading text-[9px] uppercase tracking-widest text-secondary">
                {headline.label}
              </span>
              <span>{headline.text}</span>
            </a>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 70s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>
    </div>
  );
}
