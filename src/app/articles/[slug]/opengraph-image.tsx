import { ImageResponse } from "next/og";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";

// getArticleBySlug reads the filesystem (gray-matter) → must run on Node, not Edge.
export const runtime = "nodejs";

export const alt = "LeonidaHQ — GTA 6 intel";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const title = article?.title ?? "GTA 6 Intel";
  const category = (article?.category ?? "LeonidaHQ").toUpperCase();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #08060f 0%, #140a1f 55%, #1a0a16 100%)",
          color: "#ffffff",
        }}
      >
        {/* top: category eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 26,
            fontWeight: 800,
            letterSpacing: "0.32em",
            color: "#00E5CC",
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              background: "#FF2D78",
              transform: "rotate(45deg)",
              marginRight: 22,
            }}
          />
          {category}
        </div>

        {/* middle: title */}
        <div
          style={{
            display: "flex",
            fontSize: title.length > 70 ? 64 : 78,
            fontWeight: 900,
            lineHeight: 1.04,
            letterSpacing: "-0.02em",
            color: "#ffffff",
            maxWidth: "1000px",
          }}
        >
          {title}
        </div>

        {/* bottom: wordmark + url */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 34,
            fontWeight: 900,
          }}
        >
          <div style={{ display: "flex" }}>
            <span style={{ color: "#FF2D78" }}>Leonida</span>
            <span style={{ color: "#00E5CC" }}>HQ</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            GTA 6 · leonidahq.gg
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
