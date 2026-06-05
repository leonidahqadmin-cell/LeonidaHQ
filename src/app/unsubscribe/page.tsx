import Link from "next/link";

export const metadata = {
  title: "Unsubscribe",
  description: "Remove yourself from the LeonidaHQ list.",
  robots: { index: false },
};

export default function UnsubscribePage() {
  return (
    <div className="container mx-auto px-6 py-24 max-w-xl text-center">
      <p className="font-heading uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-3 glow-secondary">
        ◆ Civilian Notice
      </p>
      <h1 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tight glow-primary text-primary mb-4">
        Unsubscribe
      </h1>
      <p className="text-muted-foreground mb-8">
        Email{" "}
        <a href="mailto:hello@leonidahq.gg?subject=Unsubscribe" className="text-secondary hover:underline">
          hello@leonidahq.gg
        </a>{" "}
        with the subject line <span className="text-primary font-bold">Unsubscribe</span> and we'll remove your address within 24 hours. (Self-serve unsubscribe coming soon — for now we do it by hand to keep it simple.)
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-heading uppercase tracking-widest text-xs font-bold border-2 border-secondary text-secondary px-5 py-3 rounded hover:bg-secondary hover:text-secondary-foreground transition"
      >
        Back to HQ
      </Link>
    </div>
  );
}
