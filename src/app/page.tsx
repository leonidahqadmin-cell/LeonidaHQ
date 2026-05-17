import Link from "next/link";
import Image from "next/image";
import { FollowSidebar } from "@/components/follow-sidebar";
import { getAllArticles } from "@/lib/articles";

const HERO_TAGLINE = "GTA 6 NEWS. ALL DAY. EVERY DAY.";

const CARD_IMAGES = [
  "/img/beach-sunset.png",
  "/img/couple-silhouette.png",
  "/img/ps5-window.png",
  "/img/skyline-rain.png",
  "/img/grid-4-panel.png",
  "/img/favicon-source.png",
];

export default function HomePage() {
  const articles = getAllArticles().slice(0, 4);
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      {/* HERO — wide banner image, cropped to hide outdated social URLs */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full aspect-[3/1] min-h-[340px] max-h-[600px] overflow-hidden">
          <Image
            src="/img/banner-wide.png"
            alt="LeonidaHQ — GTA 6 News"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_22%] scale-[1.18]"
          />
          {/* Hard mask the bottom 25% — covers baked-in social URLs */}
          <div className="absolute bottom-0 inset-x-0 h-1/4 bg-background" />
          {/* Gradient fade for smooth transition */}
          <div className="absolute bottom-[25%] inset-x-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="container mx-auto px-6 max-w-6xl -mt-10 sm:-mt-16 relative z-10">
          <p className="font-heading uppercase tracking-[0.4em] text-xs sm:text-sm text-secondary font-bold mb-3 glow-secondary">
            ◆ {HERO_TAGLINE}
          </p>
          <p className="text-foreground/85 text-base sm:text-lg max-w-3xl">
            The #1 source for GTA 6 news, leaks, and updates. Fast. Reliable.
            Connected to Vice City.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/articles"
              className="font-heading uppercase tracking-widest text-xs font-bold bg-primary text-primary-foreground px-5 py-3 rounded hover:opacity-90 transition"
            >
              Latest Intel →
            </Link>
            <Link
              href="/map"
              className="font-heading uppercase tracking-widest text-xs font-bold border-2 border-secondary text-secondary px-5 py-3 rounded hover:bg-secondary hover:text-secondary-foreground transition"
            >
              Preview the Map
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED + GRID */}
      <section className="container mx-auto px-6 max-w-7xl pt-16 pb-20">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          <div>
            <div className="flex items-baseline gap-4 mb-2">
              <h2 className="font-heading text-3xl md:text-4xl font-black uppercase tracking-wide text-primary glow-primary">
                Latest Intel
              </h2>
              <span className="font-heading uppercase tracking-[0.3em] text-xs text-muted-foreground">
                ◆ Vice City
              </span>
            </div>
            <div className="h-[3px] w-32 bg-gradient-to-r from-primary via-secondary to-primary mb-10" />

            {featured && <FeaturedCard article={featured} image={CARD_IMAGES[0]} />}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {rest.map((article, i) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  image={CARD_IMAGES[(i + 1) % CARD_IMAGES.length]}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 font-heading uppercase tracking-widest text-xs font-bold border border-border text-foreground px-6 py-3 rounded hover:border-secondary hover:text-secondary transition"
              >
                All Reports →
              </Link>
            </div>
          </div>

          <FollowSidebar />
        </div>
      </section>

      {/* BRAND STRIP */}
      <section className="border-t border-border bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-6 py-14 max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 font-heading uppercase text-center">
            <BrandPillar emoji="🌴" title="Vice City Vibes" />
            <BrandPillar emoji="⚡" title="Fast & Reliable" />
            <BrandPillar emoji="◆" title="Always On Point" />
            <BrandPillar emoji="🛠" title="Built for the Community" />
          </div>
        </div>
      </section>
    </>
  );
}

function BrandPillar({ emoji, title }: { emoji: string; title: string }) {
  return (
    <div className="rounded-lg border border-border bg-card/40 p-5 hover:border-primary transition">
      <div className="text-2xl mb-2">{emoji}</div>
      <div className="text-xs tracking-[0.2em] font-bold text-secondary">{title}</div>
    </div>
  );
}

type ArticleLite = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
};

function FeaturedCard({ article, image }: { article: ArticleLite; image: string }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block rounded-xl overflow-hidden border border-border hover:border-primary transition relative"
    >
      <div className="relative aspect-[16/8]">
        <Image src={image} alt={article.title} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <span className="inline-block font-heading bg-primary text-primary-foreground uppercase tracking-widest text-[10px] font-bold px-2.5 py-1 rounded mb-3">
            {article.category}
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-3 group-hover:text-primary transition">
            {article.title}
          </h3>
          <p className="text-foreground/85 text-sm sm:text-base max-w-3xl">
            {article.excerpt}
          </p>
          <p className="font-heading uppercase tracking-widest text-[10px] text-muted-foreground mt-4">
            ◆ {article.publishDate}
          </p>
        </div>
      </div>
    </Link>
  );
}

function ArticleCard({ article, image }: { article: ArticleLite; image: string }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block rounded-lg overflow-hidden border border-border hover:border-primary transition"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={article.title}
          fill
          sizes="(max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <span className="absolute bottom-3 left-3 font-heading bg-primary/90 text-primary-foreground uppercase tracking-widest text-[10px] font-bold px-2 py-1 rounded">
          {article.category}
        </span>
      </div>
      <div className="p-5">
        <p className="font-heading uppercase tracking-widest text-[10px] text-muted-foreground mb-2">
          {article.publishDate}
        </p>
        <h3 className="font-heading text-lg font-bold leading-snug mb-3 group-hover:text-primary transition">
          {article.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {article.excerpt}
        </p>
      </div>
    </Link>
  );
}
