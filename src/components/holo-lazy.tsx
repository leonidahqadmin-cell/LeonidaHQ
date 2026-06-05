"use client";

import dynamic from "next/dynamic";

const HolographicScene = dynamic(() => import("@/components/HolographicScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[420px] md:h-[520px] rounded-2xl border border-white/10 bg-black/60 flex items-center justify-center text-xs text-white/50">
      Loading Leonida signal…
    </div>
  ),
});

export function HoloLazy() {
  return <HolographicScene />;
}
