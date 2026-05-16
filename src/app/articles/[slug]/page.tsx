import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const a = getArticleBySlug(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    openGraph: { title: a.title, description: a.excerpt, type: "article" },
  };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <article className="container mx-auto px-6 py-24 max-w-3xl">
      <Link
        href="/articles"
        className="text-sm text-muted-foreground hover:text-primary transition"
      >
        ← All field reports
      </Link>

      <header className="mt-8 mb-12">
        <p
          className="uppercase tracking-[0.25em] text-xs font-medium mb-4"
          style={{ color: "var(--color-secondary)" }}
        >
          {article.category} · Classification: {article.classification ?? "Civilian"}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {article.title}
        </h1>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span>Filed {article.publishDate}</span>
          <span>By {article.filedBy}</span>
        </div>
      </header>

      <div
        className="prose prose-invert prose-lg max-w-none
                   prose-headings:font-bold prose-headings:tracking-tight
                   prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
                   prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                   prose-p:leading-relaxed prose-p:text-foreground/90
                   prose-strong:text-primary prose-strong:font-semibold
                   prose-a:text-secondary prose-a:no-underline hover:prose-a:underline
                   prose-blockquote:border-l-primary prose-blockquote:bg-card/40
                   prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic
                   prose-hr:border-border"
        dangerouslySetInnerHTML={{ __html: article.html }}
      />
    </article>
  );
}
