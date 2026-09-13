import { useEffect, useRef, useState, type RefObject } from "react";

/** True when the user asked for reduced motion. */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return reduced;
}

/** True when the viewport matches the given media query. */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const update = () => setMatches(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [query]);

  return matches;
}

/**
 * Scroll progress (0 -> 1) of a pinned/tall element travelling through the
 * viewport. Reads layout inside a rAF frame and only re-renders on change.
 */
export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
  enabled = true,
) {
  const [progress, setProgress] = useState(0);
  const frame = useRef(0);
  const last = useRef(0);

  useEffect(() => {
    if (!enabled) {
      setProgress(0);
      return;
    }

    const measure = () => {
      frame.current = 0;
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const travel = Math.max(rect.height - window.innerHeight, 1);
      const raw = Math.min(Math.max(-rect.top / travel, 0), 1);
      const next = Math.round(raw * 1000) / 1000;
      if (next !== last.current) {
        last.current = next;
        setProgress(next);
      }
    };

    const onScroll = () => {
      if (frame.current) return;
      frame.current = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref, enabled]);

  return progress;
}

/**
 * Progress (0 -> 1) of an element travelling through the viewport:
 * 0 when its top hits the bottom of the screen, 1 when its bottom leaves the top.
 * Use for section-scoped parallax on any element (works on mobile too).
 */
export function useViewProgress(
  ref: RefObject<HTMLElement | null>,
  enabled = true,
) {
  const [progress, setProgress] = useState(0.5);
  const frame = useRef(0);
  const last = useRef(0.5);

  useEffect(() => {
    if (!enabled) {
      setProgress(0.5);
      return;
    }

    const measure = () => {
      frame.current = 0;
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const travel = Math.max(window.innerHeight + rect.height, 1);
      const raw = Math.min(
        Math.max((window.innerHeight - rect.top) / travel, 0),
        1,
      );
      const next = Math.round(raw * 1000) / 1000;
      if (next !== last.current) {
        last.current = next;
        setProgress(next);
      }
    };

    const onScroll = () => {
      if (frame.current) return;
      frame.current = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref, enabled]);

  return progress;
}

/** Map a 0..1 progress into a sub-range, clamped. */
export function range(progress: number, start: number, end: number) {
  if (end === start) return 0;
  return Math.min(Math.max((progress - start) / (end - start), 0), 1);
}

/** Linear interpolation helper. */
export function mix(from: number, to: number, t: number) {
  return from + (to - from) * t;
}
