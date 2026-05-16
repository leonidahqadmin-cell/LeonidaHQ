import Link from "next/link";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-border bg-background/80 backdrop-blur">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight">
          Leonida<span className="text-primary">HQ</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/map" className="hover:text-primary transition">
            Map
          </Link>
          <Link href="/articles" className="hover:text-primary transition">
            Reports
          </Link>
          <Link
            href="/#notify"
            className="bg-primary text-primary-foreground font-semibold rounded-lg px-4 py-2 hover:opacity-90 transition"
          >
            Get notified
          </Link>
        </nav>
      </div>
    </header>
  );
}
