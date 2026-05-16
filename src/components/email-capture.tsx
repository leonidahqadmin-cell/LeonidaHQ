"use client";

import { useState } from "react";

export function EmailCapture() {
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
      <div
        id="notify"
        className="bg-primary/10 border border-primary/30 rounded-lg p-4 max-w-md"
      >
        <p className="text-primary font-semibold">Logged.</p>
        <p className="text-sm text-muted-foreground mt-1">
          The Bureau will notify you when the Leonida map activates on 2026-11-19.
        </p>
      </div>
    );
  }

  return (
    <form
      id="notify"
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-md"
    >
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
