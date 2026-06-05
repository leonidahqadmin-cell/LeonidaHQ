import Link from "next/link";
import { MotionToggle } from "./motion-toggle";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto px-6 py-10 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <p className="font-heading text-2xl font-black tracking-wide">
              <span className="text-primary glow-primary">Leonida</span>
              <span className="text-secondary glow-secondary">HQ</span>
            </p>
            <p className="font-heading uppercase tracking-[0.3em] text-xs text-muted-foreground mt-2">
              GTA 6 News / All Day / Every Day
            </p>
            <p className="text-xs text-muted-foreground mt-4 max-w-md">
              (c) {new Date().getFullYear()} LeonidaHQ. Independent and unaffiliated.
              Not affiliated with Rockstar Games or Take-Two Interactive.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-2 font-heading uppercase tracking-widest text-xs">
            <Link href="/articles" className="text-foreground/80 hover:text-secondary transition">Reports</Link>
            <Link href="/map" className="text-foreground/80 hover:text-secondary transition">Map</Link>
            <Link href="/about" className="text-foreground/80 hover:text-secondary transition">About</Link>
            <Link href="/privacy" className="text-foreground/80 hover:text-secondary transition">Privacy</Link>
            <Link href="/terms" className="text-foreground/80 hover:text-secondary transition">Terms</Link>
            <Link href="/rss.xml" className="text-foreground/80 hover:text-secondary transition">RSS</Link>
            <Link href="https://x.com/viraltbf" target="_blank" className="text-foreground/80 hover:text-secondary transition col-span-2 sm:col-span-1">
              @viraltbf
            </Link>
          </div>

          <div className="text-xs">
            <MotionToggle />
            <div className="text-[9px] text-muted-foreground mt-1">Motion / parallax / ticker</div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-6 normal-case tracking-normal">
          LeonidaHQ / hello@leonidahq.gg
        </p>
      </div>
    </footer>
  );
}

