"use client";

const HEADLINES = [
  { label: "Official", text: "Take-Two says marketing starts this summer", href: "/articles?category=news" },
  { label: "Watch", text: "Rockstar opened a GTA 6 Discord channel", href: "/articles?category=news" },
  { label: "Evidence", text: "Second-city map clues are tracked on the evidence board", href: "/articles?category=evidence" },
  { label: "Theory", text: "Trailer 3 timing remains a signal watch, not a confirmed date", href: "/articles?category=theory" },
  { label: "Map", text: "Leonida pins now show trailer, strong, or weak confidence", href: "/map" },
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
