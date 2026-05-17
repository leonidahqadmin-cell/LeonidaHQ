import Link from "next/link";
import { FollowSidebar } from "@/components/follow-sidebar";

export const metadata = {
  title: "About",
  description: "What LeonidaHQ is, who runs it, and why.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-7xl">
      <p className="font-heading uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-3 glow-secondary">
        ◆ About LeonidaHQ
      </p>
      <h1 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tight glow-primary text-primary mb-3">
        Built for the Obsessed
      </h1>
      <div className="h-[3px] w-32 bg-gradient-to-r from-primary via-secondary to-primary mb-12" />

      <div className="grid lg:grid-cols-[1fr_320px] gap-12">
        <div className="space-y-10 text-foreground/90 text-lg leading-relaxed max-w-2xl">
          <p>
            LeonidaHQ is independent fan media for Grand Theft Auto VI. We cover
            news, leaks, lore, characters, and the interactive map of Leonida State.
          </p>

          <div>
            <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-secondary mb-3">
              What we do
            </h2>
            <ul className="space-y-2 list-disc list-inside marker:text-primary">
              <li>Daily news drops on every confirmed GTA 6 disclosure</li>
              <li>Verified leak triage — we read the silence, not just the marketing</li>
              <li>Character and lore deep dives for Lucia, Jason, and the Leonida cast</li>
              <li>The interactive Leonida map (activates on launch day, 2026-11-19)</li>
              <li>Honest economic analysis of GTA Online's wind-down</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-secondary mb-3">
              What we don't do
            </h2>
            <ul className="space-y-2 list-disc list-inside marker:text-primary">
              <li>Clickbait headlines</li>
              <li>Unverified leak amplification</li>
              <li>Recycled YouTube essay theories</li>
              <li>PR fluff or corporate spin</li>
              <li>Pretending to know things we don't</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-secondary mb-3">
              Who runs this
            </h2>
            <p>
              Built by a fan, in Fredericksburg, VA. Independent. Unaffiliated.
              Not Rockstar. Not Take-Two. Just someone obsessed with what's coming
              on November 19, 2026 — and building the site we wished existed.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-secondary mb-3">
              How to reach us
            </h2>
            <p>
              Tips, corrections, leak verification:{" "}
              <Link
                href="mailto:hello@leonidahq.gg"
                className="text-secondary hover:underline"
              >
                hello@leonidahq.gg
              </Link>
            </p>
            <p className="mt-1">
              Social:{" "}
              <Link
                href="https://x.com/LeonidaHQgg"
                target="_blank"
                className="text-secondary hover:underline"
              >
                @LeonidaHQgg
              </Link>
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 font-heading uppercase tracking-widest text-xs font-bold bg-primary text-primary-foreground px-5 py-3 rounded hover:opacity-90 transition"
            >
              Read the Reports →
            </Link>
          </div>
        </div>

        <FollowSidebar />
      </div>
    </div>
  );
}
