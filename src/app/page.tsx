import Link from "next/link";
import Image from "next/image";
import { FollowSidebar } from "@/components/follow-sidebar";
import { ClueHotspots } from "@/components/clue-hotspots";
import { getAllArticles } from "@/lib/articles";
import { getArticleImage } from "@/lib/article-images";

const TRACKING_AREAS = [
  {
    title: "Map Evidence",
    label: "Pins + sources",
    body: "Trailer locations, theory zones, and confidence levels in one living Leonida board.",
    href: "/map",
  },
  {
    title: "Trailer Clues",
    label: "Frame watch",
    body: "Small Rockstar footage details turned into clean, checkable notes.",
    href: "/articles?category=analysis",
  },
  {
    title: "Rockstar Watch",
    label: "Official moves",
    body: "Dates, screenshots, pricing signals, and marketing beats without the fake noise.",
    href: "/articles?category=news",
  },
  {
    title: "X Pulse",
    label: "@viraltbf",
    body: "The loudest fan questions from X, organized so the good stuff does not disappear.",
    href: "https://x.com/viraltbf",
  },
];

export default function HomePage() {
  const articles = getAllArticles().slice(0, 4);
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      <Hero />
      <MapCommandCenter />
      <TrustBoard />
      <EvidenceFeed />
      <LatestIntel featured={featured} rest={rest} />
      <FinalFollow />
    </>
  );
}

function Hero() {
  return (
    <section className="relative w-full overflow-hidden border-b border-border">
      <div className="relative min-h-[520px] w-full overflow-hidden sm:min-h-[560px] lg:min-h-[620px]">
        <Image
          src="/img/vice-city-neon-hero.jpg"
          alt="LeonidaHQ GTA 6 Leonida map and intel hub. Neon Vice City skyline."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_32%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,229,204,0.035)_50%)] bg-[length:100%_4px]" />
      </div>

      <div className="container absolute inset-x-0 bottom-0 z-10 mx-auto max-w-6xl px-4 pb-10 sm:px-6 sm:pb-14">
        <p className="font-heading text-[10px] font-bold uppercase tracking-[0.28em] text-secondary sm:text-xs">
          GTA 6 fan intel hub
        </p>
        <h1 className="mobile-safe-width mt-3 max-w-4xl font-heading text-3xl font-black leading-[1.05] tracking-normal text-foreground sm:text-5xl lg:text-6xl">
          GTA 6 news, Leonida map evidence, and theories that say what they are.
        </h1>
        <p className="mobile-safe-width mt-5 max-w-2xl text-base leading-relaxed text-white/82 sm:text-xl">
          Built for the long wait and the long game after launch. Facts first, hype labeled, map pins at the center.
        </p>
        <div className="mobile-safe-width mt-7 grid gap-3 sm:flex sm:flex-wrap">
          <Link href="/map" className="btn-primary w-full sm:w-auto">
            Open Map
          </Link>
          <Link href="/articles" className="btn-secondary w-full sm:w-auto">
            Read Intel
          </Link>
          <Link href="https://x.com/viraltbf" target="_blank" className="btn-tertiary w-full sm:w-auto">
            Follow @viraltbf
          </Link>
        </div>
      </div>
    </section>
  );
}

function MapCommandCenter() {
  return (
    <section className="border-b border-border bg-card/20 py-12 sm:py-16">
      <div className="container mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <p className="font-heading text-[10px] font-bold uppercase tracking-[0.28em] text-secondary sm:text-xs">
            The moat
          </p>
          <h2 className="mt-3 font-heading text-3xl font-black leading-tight tracking-normal sm:text-4xl">
            The map should become the place every GTA 6 fan checks first.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/72">
            LeonidaHQ gets stronger when every claim connects to a place, a trailer frame, a source note, or a confidence label.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-2 text-center font-heading">
            <SignalStat value="25+" label="Pins" />
            <SignalStat value="3" label="Levels" />
            <SignalStat value="Live" label="Preview" />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/map" className="btn-primary">
              Open Full Map
            </Link>
            <Link href="/articles?category=evidence" className="btn-secondary">
              Evidence
            </Link>
          </div>
        </div>

        <Link
          href="/map"
          className="group block overflow-hidden rounded-lg border border-white/10 bg-background transition hover:border-secondary/70"
        >
          <div className="relative aspect-[16/10]">
            <Image
              src="/img/leonida-map-preview.jpg"
              alt="LeonidaHQ map preview with evidence pins"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-heading text-[10px] uppercase tracking-widest text-secondary">
                Map preview
              </p>
              <p className="mt-1 font-heading text-xl font-black tracking-normal">
                Pins, confidence, source notes
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

function TrustBoard() {
  return (
    <section className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-heading text-[10px] font-bold uppercase tracking-[0.28em] text-secondary sm:text-xs">
            What LeonidaHQ tracks
          </p>
          <h2 className="mt-2 max-w-3xl font-heading text-2xl font-black leading-tight tracking-normal sm:text-4xl">
            Trust is the design system.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-white/64 sm:text-base">
          The site should make it easy to tell confirmed info from smart guesses.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {TRACKING_AREAS.map((area) => (
          <Link
            key={area.title}
            href={area.href}
            className="evidence-card group flex min-h-[164px] flex-col justify-between p-4 transition hover:border-secondary/70"
          >
            <div>
              <p className="font-heading text-[10px] font-bold uppercase tracking-widest text-primary">
                {area.label}
              </p>
              <h3 className="mt-2 font-heading text-lg font-black leading-tight tracking-normal transition group-hover:text-secondary">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/68">
                {area.body}
              </p>
            </div>
            <span className="mt-4 font-heading text-[10px] uppercase tracking-widest text-secondary">
              Open -&gt;
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function EvidenceFeed() {
  return (
    <section className="border-y border-border bg-card/20 py-12">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-heading text-[10px] font-bold uppercase tracking-[0.28em] text-secondary sm:text-xs">
              Evidence feed
            </span>
            <h2 className="mt-2 font-heading text-2xl font-black leading-tight tracking-normal sm:text-3xl">
              Trailer clues, sorted
            </h2>
          </div>
          <Link href="/map" className="btn-secondary">
            Open Map
          </Link>
        </div>
        <ClueHotspots />
      </div>
    </section>
  );
}

type ArticleLite = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
};

function LatestIntel({
  featured,
  rest,
}: {
  featured?: ArticleLite;
  rest: ArticleLite[];
}) {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18">
      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        <div>
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-heading text-[10px] font-bold uppercase tracking-[0.28em] text-secondary sm:text-xs">
                Latest intel
              </p>
              <h2 className="mt-2 font-heading text-3xl font-black leading-tight tracking-normal sm:text-4xl">
                Read what changed.
              </h2>
            </div>
            <Link href="/articles" className="btn-tertiary">
              All Reports
            </Link>
          </div>

          {featured && <FeaturedCard article={featured} />}

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>

        <FollowSidebar />
      </div>
    </section>
  );
}

function FinalFollow() {
  return (
    <section className="border-t border-border bg-card/30 py-12">
      <div className="container mx-auto flex max-w-6xl flex-col gap-5 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-[10px] font-bold uppercase tracking-[0.28em] text-secondary sm:text-xs">
            Keep the signal moving
          </p>
          <h2 className="mt-2 font-heading text-2xl font-black leading-tight tracking-normal sm:text-4xl">
            Every new Rockstar move should become a clean LeonidaHQ update.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/#notify" className="btn-primary">
            Join List
          </Link>
          <Link href="https://x.com/viraltbf" target="_blank" className="btn-secondary">
            @viraltbf
          </Link>
        </div>
      </div>
    </section>
  );
}

function SignalStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-background/70 p-3">
      <div className="text-lg font-black text-primary">{value}</div>
      <div className="mt-1 text-[9px] uppercase tracking-widest text-white/65">{label}</div>
    </div>
  );
}

function FeaturedCard({ article }: { article: ArticleLite }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block overflow-hidden rounded-lg border border-white/10 bg-card/50 transition hover:border-primary/80"
    >
      <div className="relative aspect-[16/8] min-h-[260px]">
        <Image
          src={getArticleImage(article.slug, article.category)}
          alt={article.title}
          fill
          sizes="100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
          <span className="inline-block rounded bg-primary px-2.5 py-1 font-heading text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
            {article.category}
          </span>
          <h3 className="mt-3 max-w-3xl font-heading text-2xl font-black leading-tight tracking-normal transition group-hover:text-primary sm:text-4xl">
            {article.title}
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/82 sm:text-base">
            {article.excerpt}
          </p>
          <p className="mt-4 font-heading text-[10px] uppercase tracking-widest text-white/65">
            Filed {article.publishDate}
          </p>
        </div>
      </div>
    </Link>
  );
}

function ArticleCard({ article }: { article: ArticleLite }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block overflow-hidden rounded-lg border border-white/10 bg-card/50 transition hover:border-secondary/70"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={getArticleImage(article.slug, article.category)}
          alt={article.title}
          fill
          sizes="(max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/25 to-transparent" />
        <span className="absolute bottom-3 left-3 rounded bg-primary/90 px-2 py-1 font-heading text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
          {article.category}
        </span>
      </div>
      <div className="p-5">
        <p className="font-heading text-[10px] uppercase tracking-widest text-muted-foreground">
          {article.publishDate}
        </p>
        <h3 className="mt-2 font-heading text-lg font-bold leading-snug tracking-normal transition group-hover:text-secondary">
          {article.title}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>
      </div>
    </Link>
  );
}
