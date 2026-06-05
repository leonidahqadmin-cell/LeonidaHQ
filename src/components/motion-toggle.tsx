"use client";
import { useEffect, useState } from "react";

export function MotionToggle() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("leonida-reduced-motion") === "true";
    const prefers = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const initial = saved || prefers;
    setReduced(initial);
    document.documentElement.classList.toggle("force-reduced-motion", initial);
  }, []);

  const toggle = () => {
    const next = !reduced;
    setReduced(next);
    document.documentElement.classList.toggle("force-reduced-motion", next);
    localStorage.setItem("leonida-reduced-motion", String(next));
  };

  return (
    <button
      onClick={toggle}
      className="text-[10px] uppercase tracking-widest border border-white/20 px-2 py-0.5 rounded hover:border-secondary hover:text-secondary transition"
      aria-pressed={reduced}
      title="Toggle heavy motion / parallax / marquee (Mixpanel-style a11y)"
    >
      {reduced ? "Motion: OFF" : "Motion: ON"}
    </button>
  );
}
