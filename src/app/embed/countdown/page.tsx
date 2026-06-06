import { CountdownTimer } from "@/components/countdown-timer";

// Standalone widget meant to be iframed on other sites. noindex so it never
// competes with /countdown in search. Renders a fixed full-bleed panel that
// fills the iframe and covers the site chrome behind it.
export const metadata = {
  title: "GTA 6 Countdown",
  robots: { index: false, follow: false },
};

export default function EmbedCountdownPage() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-4 bg-[#08060f] px-4 py-5 text-center">
      <p className="font-heading text-[10px] font-black uppercase tracking-[0.3em] text-secondary">
        GTA 6 &middot; November 19, 2026
      </p>
      <div className="w-full max-w-lg">
        <CountdownTimer compact />
      </div>
      <a
        href="https://leonidahq.gg/countdown"
        target="_blank"
        rel="noopener"
        className="font-heading text-[10px] font-black uppercase tracking-widest text-white/65 transition hover:text-secondary"
      >
        via leonidahq.gg &rarr;
      </a>
    </div>
  );
}
