"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { href: "/articles?category=news", label: "News" },
  { href: "/articles?category=leaks", label: "Leaks" },
  { href: "/articles?category=characters", label: "Characters" },
  { href: "/map", label: "Map" },
  { href: "/articles?category=culture", label: "Culture" },
  { href: "/articles?category=guides", label: "Guides" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="lg:hidden text-foreground hover:text-secondary transition p-2 -mr-2"
      >
        <Menu size={28} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex flex-col">
          <div className="flex items-center justify-between h-20 px-6 border-b border-border">
            <Link href="/" onClick={() => setOpen(false)} className="font-heading text-2xl font-black tracking-wide">
              <span className="text-primary glow-primary">Leonida</span>
              <span className="text-secondary glow-secondary">HQ</span>
            </Link>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-foreground hover:text-secondary transition p-2 -mr-2"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-10 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground/90 hover:text-primary transition py-3 border-b border-border/40"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#notify"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center gap-2 border-2 border-secondary text-secondary font-heading uppercase tracking-widest text-sm font-bold px-5 py-3 rounded hover:bg-secondary hover:text-secondary-foreground transition"
            >
              ✉ Join the List
            </Link>
            <Link
              href="https://x.com/LeonidaHQgg"
              target="_blank"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-heading uppercase tracking-widest text-sm font-bold px-5 py-3 rounded hover:bg-primary hover:text-primary-foreground transition"
            >
              𝕏 @LeonidaHQgg
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
