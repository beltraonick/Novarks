import { useEffect, useRef } from "react";

/**
 * Attaches a scroll listener that computes an element's progress
 * through the viewport (0 → 1 as it moves from bottom entering → top exiting)
 * and writes it to CSS custom properties on the element.
 *
 * `--p`: raw progress 0..1
 * `--p-in`: enter progress 0..1 (top of element from viewport bottom → viewport center)
 * Uses rAF throttling; never triggers React re-renders.
 */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--p", "0.5");
      el.style.setProperty("--p-in", "1");
      return;
    }

    let raf = 0;
    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // p: 0 when top hits bottom of viewport, 1 when bottom hits top of viewport
      const total = rect.height + vh;
      const p = Math.min(1, Math.max(0, (vh - rect.top) / total));
      // p-in: 0..1 as top moves from viewport bottom → viewport middle
      const pIn = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.9)));
      el.style.setProperty("--p", p.toFixed(4));
      el.style.setProperty("--p-in", pIn.toFixed(4));
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return ref;
}
