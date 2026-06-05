"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { getArticleImage } from "@/lib/article-images";

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  tags: string[];
};

function getClaimLabel(article: Article) {
  const category = article.category.toLowerCase();
  const tags = article.tags.map((tag) => tag.toLowerCase());

  if (category === "news" || tags.includes("news")) return "News";
  if (category.includes("field") || tags.includes("evidence") || tags.includes("map")) return "Evidence";
  if (category.includes("predict") || tags.includes("predictions")) return "Theory";
  if (category.includes("leak") || tags.includes("leaks")) return "Leak watch";
  return "Analysis";
}

function getSectionTitle(category: string | null) {
  if (!category) return "All Intel";
  if (category === "theory") return "Theories";
  return category.charAt(0).toUpperCase() + category.slice(1);
}

export function ArticlesClient({ articles }: { articles: Article[] }) {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category")?.toLowerCase() || null;
  const urlTag = searchParams.get("tag") || null;

  // Category mapping for nav links: support ?category=leaks etc mapping to real content
  const categoryMatches = (a: Article, cat: string | null) => {
    if (!cat) return true;
    const c = a.category.toLowerCase();
    const t = a.tags.map((x) => x.toLowerCase());
    if (c === cat) return true;
    if (cat === "leaks" && (c.includes("leak") || t.includes("leak") || c === "predictions")) return true;
    if (cat === "evidence" && (c.includes("evidence") || c.includes("field") || t.includes("map") || t.includes("evidence"))) return true;
    if (cat === "news" && (c === "news" || t.includes("news"))) return true;
    if (cat === "analysis" && (c.includes("analys") || c === "analysis")) return true;
    if (cat === "theory" && (c.includes("theory") || c.includes("predict"))) return true;
    return false;
  };

  const categoryFiltered = articles.filter((article) => categoryMatches(article, urlCategory));
  const allTags = Array.from(new Set(categoryFiltered.flatMap((a) => a.tags))).sort();

  const buildTagHref = (tag: string | null) => {
    const params = new URLSearchParams();
    if (urlCategory) params.set("category", urlCategory);
    if (tag) params.set("tag", tag);
    const query = params.toString();
    return query ? `/articles?${query}` : "/articles";
  };

  const filtered = categoryFiltered.filter((article) => {
    if (urlTag && !article.tags.includes(urlTag)) return false;
    return true;
  });

  return (
    <>
      <div className="mb-3 flex flex-wrap gap-2">
        {[
          { href: "/articles", label: "All Intel" },
          { href: "/articles?category=news", label: "News" },
          { href: "/articles?category=leaks", label: "Leaks" },
          { href: "/articles?category=analysis", label: "Analysis" },
          { href: "/articles?category=evidence", label: "Evidence" },
          { href: "/articles?category=theory", label: "Theories" },
        ].map((c) => {
          const isActive = (urlCategory === null && urlTag === null && c.label === "All Intel") ||
            (urlCategory && c.href.includes(urlCategory));
          return (
            <Link
              key={c.label}
              href={c.href}
              className={`px-4 py-1 text-xs uppercase tracking-widest rounded border transition ${
                isActive
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border hover:border-primary"
              }`}
            >
              {c.label}
            </Link>
          );
        })}
      </div>

      <div className="mb-8 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible">
        <Link
          href={buildTagHref(null)}
          className={`shrink-0 px-4 py-1 text-xs uppercase tracking-widest rounded border transition ${
            !urlTag
              ? "bg-primary text-primary-foreground border-primary"
              : "border-border hover:border-primary"
          }`}
        >
          All Tags
        </Link>
        {allTags.map((tag) => (
          <Link
            key={tag}
            href={buildTagHref(tag)}
            className={`shrink-0 px-4 py-1 text-xs uppercase tracking-widest rounded border transition ${
              urlTag === tag
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border hover:border-primary"
            }`}
          >
            {tag}
          </Link>
        ))}
      </div>

      <div className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
        {getSectionTitle(urlCategory)} / {filtered.length} report{filtered.length === 1 ? "" : "s"} shown
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {filtered.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="group block rounded-lg overflow-hidden border border-border hover:border-primary transition"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={getArticleImage(article.slug, article.category)}
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
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="font-heading rounded border border-secondary/60 bg-secondary/10 px-2 py-0.5 text-[9px] uppercase tracking-widest text-secondary">
                  {getClaimLabel(article)}
                </span>
                <span className="font-heading text-[10px] uppercase tracking-widest text-muted-foreground">
                  {article.publishDate}
                </span>
              </div>
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
      {filtered.length === 0 && (
        <div className="rounded-lg border border-border bg-card/40 p-6 text-sm text-muted-foreground">
          No reports match this filter yet. This section needs a real content pass next.
        </div>
      )}
    </>
  );
}
