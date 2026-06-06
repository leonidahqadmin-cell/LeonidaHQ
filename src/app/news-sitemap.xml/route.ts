import { getAllArticles } from "@/lib/articles";

const SITE = "https://leonidahq.gg";
// Google News only indexes recent articles; 48h window, with a fallback so it's never empty.
const WINDOW_MS = 48 * 60 * 60 * 1000;

export const revalidate = 3600;

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const articles = getAllArticles();
  const now = Date.now();
  const recent = articles.filter(
    (a) => now - new Date(`${a.publishDate}T08:00:00Z`).getTime() <= WINDOW_MS
  );
  const list = (recent.length ? recent : articles.slice(0, 10)).slice(0, 1000);

  const urls = list
    .map((a) => {
      const pub = new Date(`${a.publishDate}T08:00:00Z`).toISOString();
      return `  <url>
    <loc>${SITE}/articles/${a.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>LeonidaHQ</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${pub}</news:publication_date>
      <news:title>${escapeXml(a.title)}</news:title>
    </news:news>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
