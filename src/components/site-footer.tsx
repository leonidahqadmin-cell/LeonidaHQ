import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto px-6 py-10 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-heading text-2xl font-black tracking-wide">
              <span className="text-primary glow-primary">Leonida</span>
              <span className="text-secondary glow-secondary">HQ</span>
            </p>
            <p className="font-heading uppercase tracking-[0.3em] text-xs text-muted-foreground mt-2">
              GTA 6 News · All Day · Every Day
            </p>
            <p className="text-xs text-muted-foreground mt-4 max-w-md">
              © {new Date().getFullYear()} LeonidaHQ. Independent and unaffiliated.
              Not affiliated with Rockstar Games or Take-Two Interactive.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 font-heading uppercase tracking-widest text-xs">
            <div className="flex gap-4">
              <Link href="https://x.com/LeonidaHQgg" target="_blank" className="text-foreground/80 hover:text-secondary transition">
                𝕏 @LeonidaHQgg
              </Link>
              <Link href="/articles" className="text-foreground/80 hover:text-secondary transition">
                Reports
              </Link>
              <Link href="/map" className="text-foreground/80 hover:text-secondary transition">
                Map
              </Link>
            </div>
            <p className="text-muted-foreground normal-case tracking-normal text-xs">
              hello@leonidahq.gg · Fredericksburg, VA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
