"use client";

import { useState } from "react";

type Props = {
  variant?: "default" | "compact";
};

export function EmailCapture({ variant = "default" }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("subscribe failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-sm">
        <p className="text-primary font-semibold">You're on the list.</p>
        <p className="text-muted-foreground mt-1">
          The Bureau will notify you when the Leonida map activates on 2026-11-19.
        </p>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full bg-input border border-border rounded px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full inline-flex items-center justify-center gap-2 border border-secondary text-secondary uppercase tracking-widest text-xs font-bold px-4 py-2 rounded hover:bg-secondary hover:text-secondary-foreground transition disabled:opacity-50"
        >
          {status === "loading" ? "..." : "Subscribe Free →"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-primary text-primary-foreground font-semibold rounded-lg px-6 py-3 hover:opacity-90 transition disabled:opacity-50"
      >
        {status === "loading" ? "..." : "Notify me"}
      </button>
    </form>
  );
}
