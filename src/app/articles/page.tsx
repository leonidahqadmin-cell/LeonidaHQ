import Link from "next/link";
import Image from "next/image";
import { getAllArticles } from "@/lib/articles";
import { FollowSidebar } from "@/components/follow-sidebar";

export const metadata = {
  title: "All Reports",
  description: "Every GTA 6 / Leonida news drop, leak, and analysis from LeonidaHQ.",
};

const COVER_IMAGES = [
  "/img/beach-sunset.png",
  "/img/couple-silhouette.png",
  "/img/ps5-window.png",
  "/img/skyline-rain.png",
  "/img/grid-4-panel.png",
];

function hashIndex(s: string, len: number) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h) % len;
}

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="container mx-auto px-6 py-16 max-w-7xl">
      <div className="mb-12">
        <p className="font-heading uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-3 glow-secondary">
          ◆ GTA 6 Intel · All Day · Every Day
        </p>
        <h1 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tight glow-primary text-primary mb-3">
          All Reports
        </h1>
        <div className="h-[3px] w-32 bg-gradient-to-r from-primary via-secondary to-primary mb-6" />
        <p className="text-lg text-foreground/80 max-w-2xl">
          Every leak, breakdown, and hot take. Fresh signal from the LeonidaHQ desk.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-12">
        <div className="grid sm:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group block rounded-lg overflow-hidden border border-border hover:border-primary transition"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={COVER_IMAGES[hashIndex(article.slug, COVER_IMAGES.length)]}
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
                  ◆ {article.publishDate}
                </p>
                <h2 className="font-heading text-lg md:text-xl font-bold leading-snug mb-3 group-hover:text-primary transition">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <FollowSidebar />
      </div>
    </div>
  );
}
