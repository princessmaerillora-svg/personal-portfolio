"use client";

import { useEffect, useState } from "react";
import { btn } from "./button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#quick-facts", label: "Quick facts" },
];

export default function Navbar({ name }: { name: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08090c]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#home"
          className="flex items-center gap-3 font-serif text-xl leading-none tracking-wide text-[#eee6c9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e2c866] sm:text-2xl"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full border border-[#c9a83e]/50 bg-[#c9a83e]/10 font-sans text-[0.65rem] font-semibold text-[#e2c866]">
            PR
          </span>
          <span className="uppercase">{name}</span>
          <span className="hidden h-6 w-px bg-white/15 sm:block" />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-2 text-xs font-medium text-white/55 transition-colors hover:bg-white/[0.06] hover:text-[#e2c866] focus-visible:outline-2 focus-visible:outline-[#e2c866]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className={btn("solid", "hidden sm:inline-flex")}>
            Let&apos;s talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center rounded-full text-[#f0eee6] transition-colors hover:bg-white/[0.06] hover:text-[#e2c866] focus-visible:outline-2 focus-visible:outline-[#e2c866] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-[#0b0d12] px-4 pb-6 md:hidden">
          <ul>
            {links.map((l, i) => (
              <li key={l.href} className="border-b border-white/10">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center justify-between font-display text-2xl uppercase tracking-wide text-[#f0eee6] active:text-[#e2c866]"
                >
                  {l.label}
                  <span aria-hidden="true" className="font-mono text-xs text-[#c9a83e]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={() => setOpen(false)} className={btn("solid", "mt-6 w-full")}>
            Let&apos;s talk
          </a>
        </div>
      )}
    </header>
  );
}
