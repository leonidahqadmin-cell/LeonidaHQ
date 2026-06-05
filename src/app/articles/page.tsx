export const metadata = {
  title: "All Reports",
  description: "Every GTA 6 / Leonida news drop, leak, and analysis from LeonidaHQ.",
};

import { getAllArticles } from "@/lib/articles";
import { FollowSidebar } from "@/components/follow-sidebar";
import { ArticlesClient } from "./ArticlesClient";
import { Suspense } from "react";

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="container mx-auto px-6 py-16 max-w-7xl">
      <div className="mb-8">
        <p className="font-heading uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-3 glow-secondary">
          GTA 6 Intel / Evidence / Theories
        </p>
        <h1 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tight glow-primary text-primary mb-3">
          All Reports
        </h1>
        <div className="h-[3px] w-32 bg-gradient-to-r from-primary via-secondary to-primary mb-6" />
        <p className="text-lg text-foreground/80 max-w-2xl">
          GTA 6 reports sorted by news, evidence, theories, and map-backed analysis. Clear labels first, hype second.
        </p>
      </div>

      <Suspense fallback={<div className="text-center py-8">Loading reports...</div>}>
        <ArticlesClient articles={articles} />
      </Suspense>

      <div className="grid lg:grid-cols-[1fr_320px] gap-12 mt-8">
        <div />
        <FollowSidebar />
      </div>
    </div>
  );
}
