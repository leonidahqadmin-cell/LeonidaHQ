"use client";

import Link from "next/link";
import { useState } from "react";

export default function UnsubscribePage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      // Always show success — don't confuse the user
    }
    setStatus("done");
  }

  return (
    <div className="container mx-auto px-6 py-24 max-w-xl text-center">
      <p className="font-heading uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-3 glow-secondary">
        ◆ Civilian Notice
      </p>
      <h1 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tight glow-primary text-primary mb-4">
        Unsubscribe
      </h1>

      {status === "done" ? (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Done. <span className="text-foreground font-semibold">{email}</span> has been removed from the list.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-heading uppercase tracking-widest text-xs font-bold border-2 border-secondary text-secondary px-5 py-3 rounded hover:bg-secondary hover:text-secondary-foreground transition"
          >
            Back to HQ
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-muted-foreground mb-6">
            Enter the email you signed up with and we'll remove it instantly.
          </p>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full btn-primary disabled:opacity-50"
          >
            {status === "loading" ? "Removing..." : "Unsubscribe"}
          </button>
          <Link href="/" className="block text-sm text-muted-foreground hover:text-foreground transition">
            Never mind, take me back →
          </Link>
        </form>
      )}
    </div>
  );
}
