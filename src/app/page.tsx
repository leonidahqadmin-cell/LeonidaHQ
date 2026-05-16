import Link from "next/link";
import { EmailCapture } from "@/components/email-capture";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background gradient — replace with hero image when Midjourney art lands */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-background to-secondary/15" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

        <div className="container mx-auto px-6 pt-32 pb-24 max-w-5xl">
          <p className="uppercase tracking-[0.3em] text-xs text-secondary mb-6 font-medium">
            Filed 2026-05-16 · Bureau of Civilian Affairs
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[0.95]">
            Your guide to
            <br />
            <span className="glow-primary text-primary">Leonida.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12">
            The interactive map, field reports, and lore archive for the State of Leonida.
            Filed by the Bureau of Civilian Affairs.
          </p>

          <EmailCapture />

          <div className="mt-20 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <Link href="/map" className="hover:text-primary transition">
              Preview the map →
            </Link>
            <Link href="/articles" className="hover:text-primary transition">
              Read field reports →
            </Link>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="border-t border-border bg-card/30">
        <div className="container mx-auto px-6 py-24 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-12">
            <Feature
              title="Interactive Map"
              body="Pan, zoom, and filter every collectible, side mission, and hidden location in Leonida — activated on launch day."
            />
            <Feature
              title="Field Reports"
              body="Bureau-classified analysis of incoming intel, Beyond-the-Wall press, and operational forecasts."
            />
            <Feature
              title="Asset Profiles"
              body="Confirmed dossiers on the civilians, factions, and external sources shaping Leonida's near future."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
