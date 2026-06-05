"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { href: "/articles?category=news", label: "News" },
  { href: "/articles?category=leaks", label: "Leaks" },
  { href: "/articles?category=analysis", label: "Analysis" },
  { href: "/map", label: "Map" },
  { href: "/articles?category=evidence", label: "Evidence" },
  { href: "/articles?category=theory", label: "Theories" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="p-2 -mr-2 text-foreground transition hover:text-secondary lg:hidden"
      >
        <Menu size={28} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-background/95 backdrop-blur-md">
          <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 font-heading text-xl font-black tracking-tight"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-xs text-primary">
                LH
              </span>
              <span>Leonida<span className="text-secondary">HQ</span></span>
            </Link>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 -mr-2 text-foreground transition hover:text-secondary"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-6 py-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3 font-heading text-2xl font-black uppercase tracking-tight text-foreground/90 transition hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#notify"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center border-2 border-secondary px-5 py-3 font-heading text-sm font-bold uppercase tracking-widest text-secondary transition hover:bg-secondary hover:text-secondary-foreground"
            >
              Join the List
            </Link>
            <Link
              href="https://x.com/viraltbf"
              target="_blank"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center border-2 border-primary px-5 py-3 font-heading text-sm font-bold uppercase tracking-widest text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              @viraltbf
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
