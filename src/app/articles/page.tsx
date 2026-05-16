import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export const metadata = {
  title: "Field Reports",
  description: "Bureau-filed analysis of GTA 6 / Leonida news, leaks, and lore.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl">
      <p className="uppercase tracking-[0.3em] text-xs text-secondary mb-4 font-medium">
        Bureau of Civilian Affairs
      </p>
      <h1 className="text-5xl font-bold mb-4">Field Reports</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Classified analysis declassified for civilian distribution.
      </p>

      <div className="space-y-8">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="block group border-b border-border pb-8 last:border-b-0"
          >
            <p
              className="uppercase tracking-wider text-xs font-medium mb-2"
              style={{ color: "var(--color-secondary)" }}
            >
              {article.category} · {article.publishDate}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition">
              {article.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{article.excerpt}</p>
            <p className="text-xs text-muted-foreground mt-3 italic">
              Filed by {article.filedBy}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
