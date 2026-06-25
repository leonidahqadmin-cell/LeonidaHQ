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
          We'll send the pre-order breakdown when it drops, plus map updates and trailer intel as it lands. No spam.
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
          className="btn-secondary btn-sm w-full gap-2 disabled:opacity-50"
        >
          {status === "loading" ? "..." : "Subscribe Free →"}
        </button>
        {status === "error" && (
          <p className="text-xs text-red-400">Something went wrong — please try again.</p>
        )}
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
        className="btn-primary disabled:opacity-50"
      >
        {status === "loading" ? "..." : "Get the breakdown first →"}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-400 sm:col-span-2 sm:w-full">Something went wrong — please try again.</p>
      )}
    </form>
  );
}
