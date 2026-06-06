import Link from "next/link";
import type { Metadata } from "next";
import { CountdownTimer } from "@/components/countdown-timer";

const SITE = "https://leonidahq.gg";
const RELEASE = "November 19, 2026";

export const metadata: Metadata = {
  title: "GTA 6 Countdown — Days Until the November 19, 2026 Release Date",
  description:
    "Live GTA 6 countdown to the confirmed release date, November 19, 2026. See exactly how many days, hours, minutes and seconds until Grand Theft Auto VI launches.",
  keywords: [
    "gta 6 countdown",
    "gta 6 release date",
    "days until gta 6",
    "when does gta 6 come out",
    "grand theft auto 6 release date",
    "gta 6 launch date",
  ],
  alternates: { canonical: `${SITE}/countdown` },
  openGraph: {
    title: "GTA 6 Countdown — Days Until Release",
    description: `Live countdown to the GTA 6 release date: ${RELEASE}.`,
    url: `${SITE}/countdown`,
    type: "website",
    images: ["/img/leonidahq-social-card.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GTA 6 Countdown — Days Until Release",
    description: `Live countdown to the GTA 6 release date: ${RELEASE}.`,
    images: ["/img/leonidahq-social-card.jpg"],
  },
};

const FAQ = [
  {
    q: "When does GTA 6 come out?",
    a: "Grand Theft Auto VI is confirmed by Rockstar Games to release on November 19, 2026, across PlayStation 5 and Xbox Series X|S.",
  },
  {
    q: "How many days until GTA 6?",
    a: "The live countdown above shows the exact number of days, hours, minutes and seconds remaining until the November 19, 2026 launch.",
  },
  {
    q: "Has the GTA 6 release date been delayed?",
    a: "GTA 6 was originally targeted for an earlier 2026 window and moved to its current confirmed date of November 19, 2026. We update this page the moment any official change is announced.",
  },
  {
    q: "What platforms will GTA 6 launch on?",
    a: "GTA 6 launches first on PlayStation 5 and Xbox Series X|S. A PC version has not been dated.",
  },
];

export default function CountdownPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="container mx-auto max-w-4xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <p className="eyebrow mb-3">◆ GTA 6 Release Countdown</p>
      <h1 className="font-heading text-4xl font-black uppercase tracking-tight text-primary glow-primary md:text-6xl">
        GTA 6 Countdown
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/90">
        The official <strong>GTA 6 release date</strong> is{" "}
        <strong className="text-secondary">{RELEASE}</strong>. Here&apos;s exactly how long until
        Grand Theft Auto VI goes live — counting down to the second.
      </p>

      <div className="mt-10">
        <CountdownTimer />
      </div>

      <div className="mt-12 space-y-5 text-foreground/85 leading-relaxed max-w-2xl">
        <p>
          After more than a decade of waiting, Rockstar Games has locked{" "}
          <strong>Grand Theft Auto VI</strong> to <strong>{RELEASE}</strong> on PlayStation 5 and
          Xbox Series X|S. The game returns to <strong>Vice City</strong> in the modern-day state of
          Leonida, following dual protagonists Lucia and Jason.
        </p>
        <p>
          This page is a live <strong>GTA 6 countdown</strong> — bookmark it to track the days until
          launch. While you wait, dig into the evidence: explore the{" "}
          <Link href="/map" className="text-secondary underline-offset-4 hover:underline">
            interactive Leonida map
          </Link>{" "}
          of every confirmed and theorized location, or read the latest{" "}
          <Link href="/articles" className="text-secondary underline-offset-4 hover:underline">
            GTA 6 intel and analysis
          </Link>
          .
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/map" className="btn-primary">
          Explore the Map →
        </Link>
        <Link href="/articles" className="btn-secondary">
          Latest Intel
        </Link>
      </div>

      <section className="mt-16">
        <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-secondary">
          GTA 6 Release Date FAQ
        </h2>
        <div className="mt-6 space-y-6">
          {FAQ.map((f) => (
            <div key={f.q} className="surface rounded-lg p-5">
              <h3 className="font-heading text-base font-black">{f.q}</h3>
              <p className="mt-2 text-foreground/80 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
