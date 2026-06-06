import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const ARTICLES_DIR = path.join(process.cwd(), "src", "content", "articles");

export type Article = {
  slug: string;
  title: string;
  publishDate: string;
  filedBy: string;
  category: string;
  classification?: string;
  excerpt: string;
  tags: string[];
  html: string;
};

function isFutureDate(date: string) {
  const publishDate = new Date(`${date}T00:00:00`);
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  return publishDate.getTime() > today.getTime();
}

// Desk byline varies by category (instead of a flat "LeonidaHQ Desk" everywhere).
// Applied at read-time so every render site (byline, sidebar, JSON-LD author) stays in sync.
const DESK_BY_CATEGORY: Record<string, string> = {
  news: "News Desk",
  analysis: "Intel Desk",
  predictions: "Forecast Desk",
  leaks: "Leaks Desk",
  map: "Map Desk",
  characters: "Lore Desk",
  lore: "Lore Desk",
  online: "Online Desk",
  business: "Business Desk",
  "field report": "Field Desk",
};

function deskFor(category: string): string {
  return DESK_BY_CATEGORY[category.toLowerCase().trim()] ?? "Leonida Desk";
}

function readAllFiles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), "utf8");
      const { data, content } = matter(raw);

      // Body validation — refuse to ship empty content (prevents the Ghost-style bug)
      const bodyWordCount = content.trim().split(/\s+/).length;
      if (bodyWordCount < 100) {
        throw new Error(
          `Article ${file} has only ${bodyWordCount} words. Articles require at least 100 words of body content.`
        );
      }
      if (!data.title || !data.slug || !data.publishDate) {
        throw new Error(`Article ${file} is missing required frontmatter (title, slug, publishDate)`);
      }

      const category = String(data.category ?? "Field Report");
      const rawFiledBy = String(data.filedBy ?? "");
      // Generic placeholder bylines get a category-specific desk; bespoke ones are kept.
      const filedBy =
        !rawFiledBy || rawFiledBy === "LeonidaHQ Desk" || rawFiledBy === "Bureau Desk"
          ? deskFor(category)
          : rawFiledBy;

      return {
        slug: String(data.slug),
        title: String(data.title),
        publishDate: String(data.publishDate),
        filedBy,
        category,
        classification: data.classification ? String(data.classification) : undefined,
        excerpt: String(data.excerpt ?? ""),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        html: marked.parse(content, { async: false }) as string,
      };
    })
    .filter((article) => !isFutureDate(article.publishDate))
    .sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));
}

export function getAllArticles(): Article[] {
  return readAllFiles();
}

export function getArticleBySlug(slug: string): Article | undefined {
  return readAllFiles().find((a) => a.slug === slug);
}
