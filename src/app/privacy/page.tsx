export const metadata = {
  title: "Privacy",
  description: "How LeonidaHQ handles your data.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-3xl">
      <p className="font-heading uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-3 glow-secondary">
        ◆ Privacy
      </p>
      <h1 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tight glow-primary text-primary mb-3">
        Privacy Policy
      </h1>
      <p className="text-muted-foreground mb-12">Last updated: 2026-05-17</p>

      <div className="space-y-6 text-foreground/90 leading-relaxed">
        <section>
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-secondary mb-3">
            What we collect
          </h2>
          <p>
            <strong className="text-primary">Email addresses:</strong> If you subscribe to our list,
            we collect your email so we can send you news drops. We store it via Vercel and Resend.
            We don't sell it. Ever.
          </p>
          <p className="mt-3">
            <strong className="text-primary">Site analytics:</strong> We use Vercel Analytics, which
            is privacy-friendly and does not use cookies or fingerprinting. We see aggregate page
            views and referrers, not individual visitors.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-secondary mb-3">
            What we don't do
          </h2>
          <ul className="list-disc list-inside space-y-1 marker:text-primary">
            <li>Sell your data to third parties</li>
            <li>Run ad-tech trackers or behavioral retargeting pixels</li>
            <li>Share your email with anyone outside our email service (Resend)</li>
            <li>Use cookies for tracking (we use cookies only when required for site function)</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-secondary mb-3">
            Removal
          </h2>
          <p>
            Email{" "}
            <a href="mailto:hello@leonidahq.gg?subject=Data%20Removal" className="text-secondary hover:underline">
              hello@leonidahq.gg
            </a>{" "}
            and we'll remove your data within 30 days. No questions asked.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-secondary mb-3">
            Contact
          </h2>
          <p>
            LeonidaHQ ·{" "}
            <a href="mailto:hello@leonidahq.gg" className="text-secondary hover:underline">
              hello@leonidahq.gg
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
