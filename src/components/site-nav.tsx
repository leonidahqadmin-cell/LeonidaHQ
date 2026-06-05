import Link from "next/link";
import { TopTicker } from "@/components/top-ticker";
import { MobileMenu } from "@/components/mobile-menu";

const NAV_ITEMS = [
  { href: "/articles?category=news", label: "News" },
  { href: "/articles?category=leaks", label: "Leaks" },
  { href: "/articles?category=analysis", label: "Analysis" },
  { href: "/map", label: "Map" },
  { href: "/articles?category=evidence", label: "Evidence" },
  { href: "/articles?category=theory", label: "Theories" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/88 backdrop-blur-xl">
      <TopTicker />
      <div className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-3">
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] font-heading text-xs font-black text-primary">
            LH
          </span>
          <span className="font-heading text-lg font-black tracking-tight sm:text-xl">
            Leonida<span className="text-secondary">HQ</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 font-heading text-xs uppercase tracking-[0.14em] font-black">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/70 transition hover:text-secondary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/#notify"
            className="hidden rounded-lg border border-secondary/70 px-4 py-2 font-heading text-xs font-black uppercase tracking-widest text-secondary transition hover:bg-secondary hover:text-secondary-foreground sm:inline-flex"
          >
            Join
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

