import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";

type Params = Promise<{ slug: string }>;

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
    openGraph: {
      title: a.title,
      description: a.excerpt,
      type: "article",
      images: [COVER_IMAGES[hashIndex(a.slug, COVER_IMAGES.length)]],
    },
    twitter: {
      card: "summary_large_image",
      title: a.title,
      description: a.excerpt,
      images: [COVER_IMAGES[hashIndex(a.slug, COVER_IMAGES.length)]],
    },
  };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const coverImage = COVER_IMAGES[hashIndex(article.slug, COVER_IMAGES.length)];

  return (
    <>
      {/* Hero cover */}
      <section className="relative w-full">
        <div className="relative w-full aspect-[21/9] min-h-[260px] max-h-[480px] overflow-hidden">
          <Image
            src={coverImage}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="container mx-auto px-6 max-w-3xl -mt-24 sm:-mt-32 relative z-10">
          <Link
            href="/articles"
            className="font-heading uppercase tracking-widest text-xs text-secondary hover:opacity-80 transition inline-block mb-4"
          >
            ← All Reports
          </Link>
          <span className="font-heading inline-block bg-primary text-primary-foreground uppercase tracking-widest text-[10px] font-bold px-2.5 py-1 rounded mb-4">
            {article.category}
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black leading-[1.05] mb-6 glow-primary">
            {article.title}
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-heading uppercase tracking-widest text-[11px] text-muted-foreground">
            <span>◆ Filed {article.publishDate}</span>
            <span>By {article.filedBy}</span>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-6 py-16 max-w-3xl">
        <div
          className="prose prose-invert prose-lg max-w-none
                     prose-headings:font-heading prose-headings:tracking-tight prose-headings:font-black
                     prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-secondary
                     prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-primary
                     prose-p:leading-relaxed prose-p:text-foreground/90
                     prose-strong:text-primary prose-strong:font-bold
                     prose-a:text-secondary prose-a:no-underline hover:prose-a:underline
                     prose-blockquote:border-l-primary prose-blockquote:bg-card/40
                     prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic
                     prose-li:marker:text-primary
                     prose-hr:border-border"
          dangerouslySetInnerHTML={{ __html: article.html }}
        />

        {/* CTA at end */}
        <div className="mt-16 p-6 sm:p-8 rounded-xl border-2 border-primary/40 bg-gradient-to-br from-primary/10 via-card to-secondary/10">
          <p className="font-heading uppercase tracking-widest text-xs text-secondary font-bold mb-2">
            ◆ Don't miss the next drop
          </p>
          <h3 className="font-heading text-xl sm:text-2xl font-black mb-4">
            Get our daily intel before everyone else.
          </h3>
          <Link
            href="/#notify"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading uppercase tracking-widest text-xs font-bold px-5 py-3 rounded hover:opacity-90 transition"
          >
            Join the List →
          </Link>
        </div>
      </article>
    </>
  );
}
