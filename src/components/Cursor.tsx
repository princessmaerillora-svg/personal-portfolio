"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, [role='button'], label, summary";
const HERO_TEXT = "h1 > span, p";

export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const r = ring.current;
    const d = dot.current;
    if (!r || !d) return;
    if (!window.matchMedia("(any-pointer: fine)").matches) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    let x = 0;
    let y = 0;
    let tx = 0;
    let ty = 0;
    let frame = 0;
    let shown = false;

    const tick = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      r.style.translate = `${x}px ${y}px`;
      frame = Math.abs(tx - x) + Math.abs(ty - y) > 0.1 ? requestAnimationFrame(tick) : 0;
    };

    const show = (visible: boolean) => {
      shown = visible;
      r.classList.toggle("is-visible", visible);
      d.classList.toggle("is-visible", visible);
      root.classList.toggle("custom-cursor", visible);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") {
        if (shown) show(false);
        return;
      }
      tx = e.clientX;
      ty = e.clientY;
      d.style.translate = `${tx}px ${ty}px`;
      if (!shown || reduced) {
        x = tx;
        y = ty;
        r.style.translate = `${x}px ${y}px`;
        if (!shown) show(true);
      } else if (!frame) {
        frame = requestAnimationFrame(tick);
      }

      update(e.target instanceof Element ? e.target : null);
    };

    const update = (target: Element | null) => {
      const inHero = !!target?.closest("#home");
      const inHeader = !!target?.closest("header");
      const hover =
        (!inHeader && !!target?.closest(INTERACTIVE)) ||
        (inHero && !!target?.closest(HERO_TEXT));
      r.classList.toggle("is-glow", inHero);
      d.classList.toggle("is-glow", inHero);
      r.classList.toggle("is-hover", hover);
    };

    const onScroll = () => {
      if (shown) update(document.elementFromPoint(tx, ty));
    };

    const onDown = () => r.classList.add("is-press");
    const onUp = () => r.classList.remove("is-press");

    const onOut = (e: PointerEvent) => {
      if (!e.relatedTarget) show(false);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("pointerout", onOut);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerout", onOut);
      cancelAnimationFrame(frame);
      root.classList.remove("custom-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
