import Link from "next/link";

export const metadata = {
  title: "Sponsor",
  description:
    "Put your brand in front of GTA 6 fans before launch. Sponsor LeonidaHQ — independent GTA 6 intel hub, tools, and community leaderboard.",
};

export default function SponsorPage() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-7xl">
      <p className="font-heading uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-3 glow-secondary">
        ◆ Sponsor LeonidaHQ
      </p>
      <h1 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tight glow-primary text-primary mb-3">
        Reach GTA 6 Fans Before Launch
      </h1>
      <div className="h-[3px] w-32 bg-gradient-to-r from-primary via-secondary to-primary mb-12" />

      <div className="space-y-10 text-foreground/90 text-lg leading-relaxed max-w-2xl">
        <p>
          LeonidaHQ is an independent GTA 6 intelligence hub: daily news and
          analysis, an interactive Leonida map, a live launch countdown, and a
          community crew leaderboard. Everything a fan needs while they wait —
          in one place.
        </p>

        <div>
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-secondary mb-3">
            The audience
          </h2>
          <p>
            GTA 6 fans in the pre-launch window — the most anticipated game
            release in history, launching <strong>November 19, 2026</strong>.
            Interest in this audience only compounds from now until launch day
            (and well beyond it). Our numbers are early and growing; we&apos;d
            rather tell you that straight than inflate a media kit.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-secondary mb-3">
            What we offer
          </h2>
          <ul className="space-y-2 list-disc list-inside marker:text-primary">
            <li>
              Newsletter sponsorship — a short placement in the email drops our
              subscribers actually open
            </li>
            <li>
              Site placements — sponsor slots on high-intent pages (map,
              countdown, articles) as traffic justifies them
            </li>
            <li>
              Custom ideas welcome — tools, giveaways, community tie-ins with
              the Top Crew leaderboard
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-secondary mb-3">
            Why now
          </h2>
          <p>
            Pre-launch is when attention is cheapest and loyalty is formed.
            Partners who show up before November 19 get grandfathered rates and
            first pick of placements as the wave builds.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-secondary mb-3">
            Get in touch
          </h2>
          <p>
            One email, no forms. Tell us what you&apos;re promoting and
            we&apos;ll reply with what&apos;s available:
          </p>
          <p className="mt-3">
            <Link href="mailto:hello@leonidahq.gg" className="btn-secondary gap-2">
              hello@leonidahq.gg →
            </Link>
          </p>
        </div>

        <p className="text-sm text-muted-foreground">
          LeonidaHQ is independent fan media. Not affiliated with Rockstar
          Games or Take-Two Interactive. Sponsorships are always labeled.
        </p>
      </div>
    </div>
  );
}
