import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { ARTICLE_FAQ } from "@/lib/article-faq";
import { getArticleImage } from "@/lib/article-images";

type Params = Promise<{ slug: string }>;

function getTrustProfile(article: { category: string; tags: string[] }) {
  const category = article.category.toLowerCase();
  const tags = article.tags.map((tag) => tag.toLowerCase());

  if (category.includes("predict") || tags.includes("predictions")) {
    return {
      label: "Theory",
      confidence: "Speculative",
      note: "This is a reasoned prediction, not a confirmed Rockstar fact. Treat it like a smart guess.",
    };
  }
  if (category === "news" || tags.includes("news")) {
    return {
      label: "News",
      confidence: "Official signal",
      note: "Built from public Rockstar, Take-Two, or platform-facing movement. Analysis is separated from confirmed facts.",
    };
  }
  if (category.includes("field") || tags.includes("evidence") || tags.includes("map")) {
    return {
      label: "Evidence",
      confidence: "Map-backed",
      note: "This report should connect to map pins, trailer frames, visible geography, or source notes.",
    };
  }
  if (category.includes("leak") || tags.includes("leaks")) {
    return {
      label: "Leak watch",
      confidence: "Unverified until sourced",
      note: "Leak claims need extra care. Cross-check with official material before treating them as real.",
    };
  }

  return {
    label: "Analysis",
    confidence: "Reasoned read",
    note: "This combines known facts with LeonidaHQ interpretation. Strong claims should point to evidence.",
  };
}

function getReportSections(article: { tags: string[]; category: string }) {
  const tags = article.tags.map((tag) => tag.toLowerCase());
  const category = article.category.toLowerCase();
  const hasMapSignal = tags.includes("map") || tags.includes("locations") || category.includes("field");
  const hasNewsSignal = tags.includes("news") || category === "news";
  const hasTheorySignal = tags.includes("predictions") || category.includes("predict") || category.includes("theory");

  return {
    mapConnection: hasMapSignal ? "Direct map connection" : "Needs map follow-up",
    primarySource: hasNewsSignal ? "Official/public signal" : hasTheorySignal ? "Pattern read + community watch" : "LeonidaHQ analysis",
    sourceLedger: [
      hasNewsSignal ? "Official movement watch" : "Rockstar footage / public assets",
      hasMapSignal ? "Leonida map pins" : "Needs related pins",
      hasTheorySignal ? "Theory label required" : "Analysis label required",
      "@viraltbf discussion",
    ],
  };
}

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const a = getArticleBySlug(slug);
  if (!a) return {};
  const image = getArticleImage(a.slug, a.category);
  return {
    title: a.title,
    description: a.excerpt,
    openGraph: {
      title: a.title,
      description: a.excerpt,
      type: "article",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${a.title} - LeonidaHQ`,
      description: a.excerpt,
      images: [image],
    },
  };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const coverImage = getArticleImage(article.slug, article.category);
  const trustProfile = getTrustProfile(article);
  const reportSections = getReportSections(article);

  // Related intel: same-category first (getAllArticles is already newest-first), then fill.
  const related = getAllArticles()
    .filter((a) => a.slug !== article.slug)
    .sort(
      (a, b) =>
        (a.category === article.category ? 0 : 1) -
        (b.category === article.category ? 0 : 1)
    )
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    author: {
      "@type": "Organization",
      name: "LeonidaHQ",
      url: "https://leonidahq.gg",
    },
    publisher: {
      "@type": "Organization",
      name: "LeonidaHQ",
      url: "https://leonidahq.gg",
      logo: {
        "@type": "ImageObject",
        url: "https://leonidahq.gg/img/logo-circle.png",
      },
    },
    image: [`https://leonidahq.gg${coverImage}`],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://leonidahq.gg/articles/${article.slug}`,
    },
    articleSection: article.category,
    keywords: article.tags.join(", "),
  };

  const faq = ARTICLE_FAQ[article.slug];
  const faqJsonLd = faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {/* Hero cover */}
      <section className="relative w-full border-b border-white/10">
        <div className="relative h-[520px] w-full overflow-hidden">
          <Image
            src={coverImage}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/50 to-background" />
        </div>
        <div className="container mx-auto -mt-80 max-w-6xl px-4 pb-14 sm:px-6 relative z-10">
          <Link
            href="/articles"
            className="mb-5 inline-block font-heading text-xs font-black uppercase tracking-widest text-secondary transition hover:opacity-80"
          >
            &lt;- All Reports
          </Link>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-primary px-3 py-1 font-heading text-[10px] font-black uppercase tracking-widest text-primary-foreground">
              {article.category}
            </span>
            <span className="rounded-full border border-secondary/70 bg-secondary/10 px-3 py-1 font-heading text-[10px] font-black uppercase tracking-widest text-secondary">
              {trustProfile.label}
            </span>
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl">
            {article.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/72">
            {article.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-heading text-[11px] font-black uppercase tracking-widest text-white/65">
            <span>Filed {article.publishDate}</span>
            <span>By {article.filedBy} / @viraltbf</span>
          </div>

          {/* Share to X */}
          <div className="mt-4">
            <a
              href={`https://x.com/intent/tweet?text=${encodeURIComponent(article.title)} - ${encodeURIComponent(article.excerpt)} Read more: https://leonidahq.gg/articles/${article.slug} @viraltbf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-secondary/70 px-4 py-2 font-heading text-xs font-black uppercase tracking-widest text-secondary transition hover:bg-secondary hover:text-background"
            >
              Share this report on X -&gt;
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article>
          <div className="mb-8 rounded-lg border border-white/10 bg-card/55 p-5">
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="font-heading rounded border border-secondary/60 bg-secondary/10 px-2 py-1 text-[10px] uppercase tracking-widest text-secondary">
                {trustProfile.label}
              </span>
              <span className="font-heading rounded border border-primary/60 bg-primary/10 px-2 py-1 text-[10px] uppercase tracking-widest text-primary">
                {trustProfile.confidence}
              </span>
              <span className="font-heading rounded border border-white/15 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-widest text-white/65">
                {article.classification ?? "Open"}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              {trustProfile.note}
            </p>
          </div>

          <div className="mb-8 grid gap-3 sm:grid-cols-3">
            <ReportStat label="Claim Type" value={trustProfile.label} />
            <ReportStat label="Confidence" value={trustProfile.confidence} />
            <ReportStat label="Map Status" value={reportSections.mapConnection} />
          </div>

          <div
            className="prose prose-invert prose-lg max-w-none
                       prose-headings:font-heading prose-headings:tracking-normal prose-headings:font-black
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

          <div className="mt-10 rounded-lg border border-border bg-card/35 p-5 text-sm text-white/70">
            <strong className="text-secondary">Evidence note:</strong> This report separates confirmed info, analysis, and theories where possible. Not affiliated with Rockstar Games or Take-Two Interactive.
          </div>

          <div className="mt-12 rounded-lg border border-primary/35 bg-gradient-to-br from-primary/10 via-card to-secondary/10 p-6 sm:p-8">
            <p className="font-heading text-xs font-bold uppercase tracking-widest text-secondary">
              Keep the file moving
            </p>
            <h3 className="mt-2 font-heading text-xl font-black tracking-normal sm:text-2xl">
              Send tips, source notes, or map corrections to the desk.
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/#notify" className="btn-primary">
                Join List
              </Link>
              <a
                href="https://x.com/viraltbf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                @viraltbf
              </a>
            </div>
          </div>
        </article>

        <aside className="lg:sticky lg:top-32 lg:self-start">
          <div className="rounded-lg border border-white/10 bg-card/60 p-5">
            <p className="font-heading text-[10px] font-bold uppercase tracking-widest text-secondary">
              Report file
            </p>
            <div className="mt-4 space-y-3 text-sm">
              <ReportLine label="Filed" value={article.publishDate} />
              <ReportLine label="Desk" value={`${article.filedBy} / @viraltbf`} />
              <ReportLine label="Primary Source" value={reportSections.primarySource} />
              <ReportLine label="Map Link" value={reportSections.mapConnection} />
            </div>

            <div className="mt-5 border-t border-white/10 pt-5">
              <p className="font-heading text-[10px] font-bold uppercase tracking-widest text-primary">
                Source ledger
              </p>
              <ul className="mt-3 space-y-2">
                {reportSections.sourceLedger.map((item) => (
                  <li key={item} className="flex gap-2 text-xs leading-relaxed text-white/68">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 grid gap-2">
              <Link href="/map" className="btn-primary">
                Open Map
              </Link>
              <a
                href={`https://x.com/intent/tweet?text=${encodeURIComponent(article.title)} - ${encodeURIComponent(article.excerpt)} Read more: https://leonidahq.gg/articles/${article.slug} @viraltbf`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Share Report
              </a>
            </div>
          </div>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="container mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-10">
            <h2 className="font-heading text-xl font-black uppercase tracking-tight text-secondary sm:text-2xl">
              Related intel
            </h2>
            <Link
              href="/map"
              className="font-heading text-xs font-black uppercase tracking-widest text-primary transition hover:opacity-80"
            >
              Open the map -&gt;
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/articles/${r.slug}`}
                className="surface group rounded-lg p-5 transition hover:border-secondary/50"
              >
                <span className="font-heading text-[10px] font-black uppercase tracking-widest text-secondary">
                  {r.category}
                </span>
                <h3 className="mt-2 font-heading text-base font-black leading-tight transition group-hover:text-primary">
                  {r.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/65">
                  {r.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

function ReportStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-card/45 p-4">
      <p className="font-heading text-[9px] uppercase tracking-widest text-white/65">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold text-white/88">
        {value}
      </p>
    </div>
  );
}

function ReportLine({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-heading text-[9px] uppercase tracking-widest text-white/65">
        {label}
      </p>
      <p className="mt-1 text-white/78">
        {value}
      </p>
    </div>
  );
}
