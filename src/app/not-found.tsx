import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] container mx-auto px-6 py-24 max-w-3xl flex flex-col items-center justify-center text-center">
      <p className="font-heading uppercase tracking-[0.4em] text-xs text-secondary font-bold mb-4 glow-secondary">
        ◆ Signal Lost
      </p>
      <h1 className="font-heading text-7xl sm:text-9xl font-black glow-primary text-primary mb-4">
        404
      </h1>
      <p className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wide mb-3">
        Off the Map
      </p>
      <p className="text-muted-foreground mb-10 max-w-md">
        This page doesn't exist in Leonida. Maybe it never did. Maybe the intel
        is still being processed. Try the front page.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/"
          className="font-heading uppercase tracking-widest text-xs font-bold bg-primary text-primary-foreground px-5 py-3 rounded hover:opacity-90 transition"
        >
          Back to HQ →
        </Link>
        <Link
          href="/articles"
          className="font-heading uppercase tracking-widest text-xs font-bold border-2 border-secondary text-secondary px-5 py-3 rounded hover:bg-secondary hover:text-secondary-foreground transition"
        >
          Latest Intel
        </Link>
      </div>
    </div>
  );
}
