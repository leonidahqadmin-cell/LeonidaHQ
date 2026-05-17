import Link from "next/link";
import Image from "next/image";
import { TopTicker } from "@/components/top-ticker";
import { MobileMenu } from "@/components/mobile-menu";

const NAV_ITEMS = [
  { href: "/articles?category=news", label: "News" },
  { href: "/articles?category=leaks", label: "Leaks" },
  { href: "/articles?category=characters", label: "Characters" },
  { href: "/map", label: "Map" },
  { href: "/articles?category=culture", label: "Culture" },
  { href: "/articles?category=guides", label: "Guides" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <TopTicker />
      <div className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <Image
            src="/img/logo-circle.png"
            alt="LeonidaHQ"
            width={56}
            height={56}
            priority
            className="rounded-full shrink-0"
          />
          <span className="hidden sm:inline font-heading text-2xl font-black tracking-wide whitespace-nowrap">
            <span className="text-primary glow-primary">Leonida</span>
            <span className="text-secondary glow-secondary">HQ</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 font-heading text-sm uppercase tracking-[0.18em] font-bold">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/85 hover:text-secondary transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/#notify"
            className="hidden sm:inline-flex items-center gap-2 border-2 border-secondary text-secondary font-heading uppercase tracking-widest text-xs font-bold px-4 py-2 rounded hover:bg-secondary hover:text-secondary-foreground transition whitespace-nowrap"
          >
            <span>✉</span> Join
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
