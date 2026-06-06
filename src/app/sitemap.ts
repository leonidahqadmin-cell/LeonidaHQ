import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";

const SITE = "https://leonidahq.gg";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const articles = getAllArticles();
  return [
    { url: SITE, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${SITE}/map`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE}/countdown`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE}/articles`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    ...articles.map((a) => ({
      url: `${SITE}/articles/${a.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
