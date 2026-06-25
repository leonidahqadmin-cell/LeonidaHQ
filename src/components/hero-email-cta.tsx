"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { EmailCapture } from "@/components/email-capture";

// Mirrors the same go-live moment used by PreorderBanner.
const GO_MS = new Date("2026-06-25T00:00:00Z").getTime();

export function HeroEmailCta() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const live = mounted && Date.now() >= GO_MS;

  return (
    <div className="mobile-safe-width mt-6 border-t border-white/15 pt-5">
      <p className="mb-2.5 font-heading text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">
        {live
          ? "✉ GTA 6 pre-orders are live — get the full breakdown"
          : "✉ Pre-orders open June 25 — get the breakdown first"}
      </p>
      <EmailCapture />
      {live && (
        <p className="mt-3 text-xs text-white/50">
          Already subscribed?{" "}
          <Link
            href="/articles/gta-6-preorder-breakdown"
            className="text-secondary hover:underline"
          >
            Read the breakdown →
          </Link>
        </p>
      )}
    </div>
  );
}
