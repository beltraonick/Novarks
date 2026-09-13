import { useEffect, useRef } from "react";

import { useMediaQuery, useReducedMotion } from "@/hooks/use-scroll-motion";

/**
 * One continuous Novarks environment: a sparse monochrome particle field with
 * occasional holographic violet illumination, fixed behind the whole page.
 * Everything is transform/alpha only and pauses when off-screen or hidden.
 */
export function Atmosphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;

    type P = {
      x: number;
      y: number;
      z: number;
      r: number;
      vy: number;
      violet: boolean;
    };
    let points: P[] = [];

    const build = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = isDesktop ? 13000 : 26000;
      const count = Math.min(Math.round((w * h) / density), 220);
      points = Array.from({ length: count }, () => {
        const z = 0.35 + Math.random() * 0.65;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          z,
          r: 0.4 + z * 1.0,
          vy: (0.05 + Math.random() * 0.14) * z,
          violet: Math.random() < 0.07,
        };
      });
    };

    let scrollY = window.scrollY;
    const onScroll = () => {
      scrollY = window.scrollY;
    };

    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (!running) return;
      ctx.clearRect(0, 0, w, h);

      for (const p of points) {
        p.y -= p.vy;
        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }
        // Depth-based parallax against page scroll.
        const y = ((p.y - scrollY * 0.06 * p.z) % (h + 20) + h + 20) % (h + 20) - 10;
        const alpha = 0.05 + p.z * 0.16;
        ctx.beginPath();
        ctx.arc(p.x, y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.violet
          ? `rgba(178, 140, 255, ${alpha * 1.5})`
          : `rgba(226, 230, 240, ${alpha})`;
        ctx.fill();
      }
    };

    const onVisibility = () => {
      running = document.visibilityState === "visible";
    };

    build();
    draw();
    window.addEventListener("resize", build);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced, isDesktop]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-background" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* Ambient holographic light — light through dark glass, never a purple wall. */}
      <div className="absolute -left-1/4 top-1/4 h-[70vh] w-[70vw] bg-[radial-gradient(closest-side,oklch(0.55_0.2_295_/_0.14),transparent)]" />
      <div className="absolute -right-1/4 top-2/3 h-[70vh] w-[70vw] bg-[radial-gradient(closest-side,oklch(0.55_0.17_268_/_0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_0%,transparent_40%,oklch(0.1_0.005_265_/_0.75)_100%)]" />
    </div>
  );
}
