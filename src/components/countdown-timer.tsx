"use client";

import { useEffect, useState } from "react";

// GTA 6 confirmed launch: November 19, 2026. No official time given — anchor to midnight ET.
const LAUNCH_MS = new Date("2026-11-19T00:00:00-05:00").getTime();

function calc() {
  const diff = Math.max(0, LAUNCH_MS - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
    done: diff === 0,
  };
}

export function CountdownTimer() {
  // null until mounted to avoid SSR/client hydration mismatch
  const [t, setT] = useState<ReturnType<typeof calc> | null>(null);

  useEffect(() => {
    setT(calc());
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: t?.days, pad: 3 },
    { label: "Hours", value: t?.hours, pad: 2 },
    { label: "Minutes", value: t?.minutes, pad: 2 },
    { label: "Seconds", value: t?.seconds, pad: 2 },
  ];

  return (
    <div
      className="grid grid-cols-2 gap-3 sm:grid-cols-4"
      role="timer"
      aria-label="Time remaining until GTA 6 releases on November 19, 2026"
    >
      {units.map((u) => (
        <div
          key={u.label}
          className="surface flex flex-col items-center justify-center rounded-lg px-2 py-6"
        >
          <span className="font-heading text-4xl font-black tabular-nums text-primary glow-primary sm:text-5xl">
            {u.value === undefined ? "—" : String(u.value).padStart(u.pad, "0")}
          </span>
          <span className="mt-2 font-heading text-[10px] font-black uppercase tracking-widest text-white/65">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}
