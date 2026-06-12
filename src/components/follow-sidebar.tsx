import Link from "next/link";
import { EmailCapture } from "@/components/email-capture";

export function FollowSidebar() {
  return (
    <aside className="space-y-6">
      {/* Follow on X */}
      <div className="border-2 border-primary/50 rounded-lg p-5 bg-gradient-to-br from-primary/15 to-transparent">
        <p className="uppercase tracking-widest text-xs font-bold text-primary mb-2 flex items-center gap-2">
          <span>𝕏</span> Follow on X
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          Real-time intel, predictions, and the daily pulse — straight from @viraltbf. Get the map clues before they go quiet.
        </p>
        <Link
          href="https://x.com/viraltbf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary-outline btn-sm gap-2"
        >
          @viraltbf →
        </Link>
      </div>

      {/* Join the List */}
      <div
        id="notify"
        className="border-2 border-secondary/50 rounded-lg p-5 bg-gradient-to-br from-secondary/15 to-transparent"
      >
        <p className="uppercase tracking-widest text-xs font-bold text-secondary mb-2 flex items-center gap-2">
          <span>✉</span> Join the List
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          Map updates, exclusive predictions, and real-time alerts. No spam.
        </p>
        <EmailCapture variant="compact" />
      </div>
      {/* Ko-fi */}
      <div className="border-2 border-white/10 rounded-lg p-5 bg-gradient-to-br from-white/5 to-transparent">
        <p className="uppercase tracking-widest text-xs font-bold text-muted-foreground mb-2 flex items-center gap-2">
          ☕ Support the hub
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          LeonidaHQ is independent, ad-free, and obsessive. If it's useful, a coffee keeps it running.
        </p>
        <a
          href="https://ko-fi.com/viraltbf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-heading uppercase tracking-widest text-xs font-bold border border-white/20 text-white/70 px-4 py-2.5 rounded hover:border-white/50 hover:text-white transition"
        >
          ☕ Buy me a coffee
        </a>
      </div>

      {/* GTA 6 Gear */}
      <div className="border-2 border-white/10 rounded-lg p-5 bg-gradient-to-br from-white/5 to-transparent">
        <p className="uppercase tracking-widest text-xs font-bold text-muted-foreground mb-2">
          🎮 Get Ready for Launch
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          November 19, 2026. Grab your setup before the wave hits.
        </p>
        <ul className="space-y-2 text-sm">
          <li>
            <a
              href="https://www.amazon.com/dp/B0CL61F39H?tag=leonidahq-20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              PS5 Slim Console →
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.com/dp/B0CL5N5TNB?tag=leonidahq-20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              DualSense Wireless Controller →
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.com/dp/B003O6JKLE?tag=leonidahq-20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              GTA V (PS4/PS5) →
            </a>
          </li>
        </ul>
        <p className="mt-3 text-[10px] text-muted-foreground/50">Affiliate links — helps keep the site free.</p>
      </div>
    </aside>
  );
}
