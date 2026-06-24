"use client";

import { useEffect, useState } from "react";

// Official Rockstar pre-order day: June 25, 2026 (confirmed via the Rockstar Newswire).
// No exact hour given — anchor to UTC midnight. The bar auto-flips to "live" on that date.
const GO_MS = new Date("2026-06-25T00:00:00Z").getTime();
const PREORDER_URL = "https://www.rockstargames.com/VI";
const FORCE_LIVE = false; // set true to flip to "live" the moment pre-orders actually open

export function PreorderBanner() {
  // null until mounted, to avoid SSR/client hydration mismatch (same pattern as CountdownTimer)
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const live = FORCE_LIVE || (now !== null && now >= GO_MS);
  const diff = now === null ? 0 : Math.max(0, GO_MS - now);
  const d = Math.floor(diff / 86_400_000);
  const h = Math.floor((diff % 86_400_000) / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const countdown = d > 0 ? `${d}d ${h}h` : `${h}h ${m}m`;

  return (
    <a
      href={PREORDER_URL}
      target="_blank"
      rel="noopener"
      aria-label="GTA 6 pre-orders — open the official Rockstar page"
      className="group flex items-center justify-center gap-2 border-b border-border bg-gradient-to-r from-primary/15 via-background to-secondary/15 px-3 py-2 text-center text-xs sm:gap-3 sm:text-sm"
    >
      <span className="rounded bg-primary px-2 py-0.5 font-heading text-[9px] font-bold uppercase tracking-widest text-primary-foreground sm:text-[10px]">
        Official
      </span>
      <span className="font-heading font-black uppercase tracking-wide text-foreground">
        {live ? "GTA 6 pre-orders are live" : "GTA 6 pre-orders open June 25"}
      </span>
      {!live && now !== null ? (
        <span className="hidden font-heading font-black tabular-nums text-secondary sm:inline">
          {countdown}
        </span>
      ) : null}
      <span className="font-heading font-bold uppercase tracking-widest text-primary underline-offset-4 group-hover:underline">
        Pre-order -&gt;
      </span>
    </a>
  );
}
