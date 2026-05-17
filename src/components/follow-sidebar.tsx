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
          Live leaks, hot takes, and instant updates.
        </p>
        <Link
          href="https://x.com/LeonidaHQgg"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-primary text-primary uppercase tracking-widest text-xs font-bold px-4 py-2 rounded hover:bg-primary hover:text-primary-foreground transition"
        >
          @LeonidaHQgg →
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
          Weekly Vice City intel drops. No spam. Ever.
        </p>
        <EmailCapture variant="compact" />
      </div>
    </aside>
  );
}
