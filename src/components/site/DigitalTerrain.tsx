import { useEffect, useRef } from "react";

import { useReducedMotion } from "@/hooks/use-scroll-motion";

interface DigitalTerrainProps {
  progress: number;
}

/**
 * A scroll-reactive computational landscape. It draws only on resize and
 * scroll-progress changes, so there is no permanent animation loop.
 */
export function DigitalTerrain({ progress }: DigitalTerrainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    const draw = () => {
      frame = 0;
      const bounds = canvas.getBoundingClientRect();
      const width = Math.max(bounds.width, 1);
      const height = Math.max(bounds.height, 1);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const horizon = height * (0.48 - progress * 0.018);
      const rows = 25;
      const columns = width < 720 ? 18 : 34;
      const left = -width * 0.12;
      const span = width * 1.24;
      const point = (column: number, row: number) => {
        const depth = row / (rows - 1);
        const perspective = depth * depth;
        const xBase = left + (column / columns) * span;
        const x = width / 2 + (xBase - width / 2) * (0.62 + perspective * 0.55);
        const ridge =
          Math.sin(column * 0.73 + row * 0.18) * 8 +
          Math.sin(column * 0.21 - row * 0.38) * 13 +
          Math.exp(-Math.pow((column / columns - 0.69) * 4.4, 2)) * -52;
        const y = horizon + perspective * height * 0.57 + ridge * (0.2 + depth * 0.82);
        return { x, y, depth };
      };

      ctx.lineWidth = 0.65;
      for (let row = 0; row < rows; row += 1) {
        const depth = row / (rows - 1);
        ctx.beginPath();
        for (let column = 0; column <= columns; column += 1) {
          const p = point(column, row);
          if (column === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = `oklch(0.78 0.035 275 / ${0.025 + depth * 0.1})`;
        ctx.stroke();
      }

      for (let column = 0; column <= columns; column += 2) {
        ctx.beginPath();
        for (let row = 0; row < rows; row += 1) {
          const p = point(column, row);
          if (row === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = "oklch(0.7 0.04 278 / 0.06)";
        ctx.stroke();
      }

      for (let row = 2; row < rows; row += 3) {
        for (let column = (row % 4) + 1; column < columns; column += 5) {
          const p = point(column, row);
          const lit = (row + column) % 11 === 0;
          ctx.beginPath();
          ctx.arc(p.x, p.y, lit ? 1.25 : 0.7, 0, Math.PI * 2);
          ctx.fillStyle = lit
            ? `oklch(0.72 0.19 294 / ${0.24 + p.depth * 0.32})`
            : `oklch(0.88 0.02 275 / ${0.07 + p.depth * 0.12})`;
          ctx.fill();
        }
      }
    };

    const schedule = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(draw);
    };
    schedule();
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("resize", schedule);
    };
  }, [progress, reduced]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full"
    />
  );
}