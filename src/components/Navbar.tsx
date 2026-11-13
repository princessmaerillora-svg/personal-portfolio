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
    <header className="sticky top-0 z-50 border-b border-indigo-950/10 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#home"
          className="font-serif text-[1.75rem] italic leading-none text-indigo-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"
        >
          {name}
          <span className="text-indigo-600">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-full px-3 py-2 text-sm font-medium text-indigo-950/80 transition-colors hover:text-indigo-950 focus-visible:outline-2 focus-visible:outline-indigo-600 after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-indigo-600 after:transition-transform hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className={btn("solid", "hidden sm:inline-flex")}>
            Contact
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center rounded-full text-indigo-950 transition-colors hover:bg-indigo-50 active:bg-indigo-100 focus-visible:outline-2 focus-visible:outline-indigo-600 md:hidden"
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
        <div id="mobile-menu" className="border-t border-indigo-950/10 bg-white px-4 pb-6 md:hidden">
          <ul>
            {links.map((l) => (
              <li key={l.href} className="border-b border-indigo-950/10">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center justify-between font-display text-2xl uppercase tracking-wide text-indigo-950 active:text-indigo-600"
                >
                  {l.label}
                  <span aria-hidden="true" className="font-sans text-base text-indigo-600">→</span>
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={() => setOpen(false)} className={btn("solid", "mt-6 w-full")}>
            Contact me
          </a>
        </div>
      )}
    </header>
  );
}
