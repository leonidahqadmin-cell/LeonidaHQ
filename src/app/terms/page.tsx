export const metadata = {
  title: "Terms",
  description: "Terms of use for LeonidaHQ.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-3xl">
      <p className="font-heading uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-3 glow-secondary">
        ◆ Terms
      </p>
      <h1 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tight glow-primary text-primary mb-3">
        Terms of Use
      </h1>
      <p className="text-muted-foreground mb-12">Last updated: 2026-05-17</p>

      <div className="space-y-6 text-foreground/90 leading-relaxed">
        <section>
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-secondary mb-3">
            What this site is
          </h2>
          <p>
            LeonidaHQ is independent fan media covering Grand Theft Auto VI. We are not affiliated
            with Rockstar Games, Take-Two Interactive, or any of their subsidiaries. All trademarks
            referenced — Grand Theft Auto, Vice City, Leonida, etc. — belong to their respective owners.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-secondary mb-3">
            Use of the site
          </h2>
          <p>
            All content on LeonidaHQ is provided as-is for informational and entertainment purposes.
            We make our best effort to verify leaks and report accurately, but we don't guarantee the
            accuracy of pre-release information. Don't make purchasing decisions solely based on what
            you read here.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-secondary mb-3">
            User content
          </h2>
          <p>
            If you email us tips or corrections, you grant us permission to use them in coverage with
            appropriate attribution (or anonymity if you prefer). We don't claim ownership of your
            contributions — we just need permission to publish.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-secondary mb-3">
            Liability
          </h2>
          <p>
            LeonidaHQ is provided without warranty. We aren't liable for losses you incur from
            relying on our reporting. If a leak we shared turns out to be wrong and you bought a
            $90 game expecting otherwise — that's on the game, not on us.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-secondary mb-3">
            Changes
          </h2>
          <p>
            We may update these terms occasionally. Material changes will be noted at the top of this
            page. Continued use of the site means acceptance of any updates.
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
