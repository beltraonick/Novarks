import { useRef } from "react";

import { mix, useReducedMotion, useViewProgress } from "@/hooks/use-scroll-motion";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export interface FlowStep {
  label: string;
  detail: string;
}

interface SystemFlowProps {
  steps: readonly FlowStep[];
  /** CSS color for the accent rail and node marks. */
  accentVar: string;
  className?: string;
}

/**
 * A horizontal (desktop) / vertical (mobile) rail of connected nodes.
 * A single light travels the rail as the section scrolls — one reason, one motion.
 */
export function SystemFlow({ steps, accentVar, className }: SystemFlowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const vp = useViewProgress(ref, !reduced);
  const fill = reduced ? 1 : Math.min(Math.max((vp - 0.2) / 0.45, 0), 1);

  return (
    <div ref={ref} className={cn("relative", className)}>
      {/* Rail */}
      <div
        aria-hidden
        className="absolute left-[13px] top-2 bottom-2 w-px bg-border md:left-0 md:right-0 md:top-[13px] md:bottom-auto md:h-px md:w-auto"
      >
        <div
          className="h-full w-full transition-opacity duration-700"
          style={{
            background: `linear-gradient(to bottom, ${accentVar}, transparent)`,
            opacity: mix(0.1, 0.65, fill),
          }}
        />
      </div>

      <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8 lg:grid-cols-6">
        {steps.map((step, i) => {
          const lit = fill > (i + 0.2) / steps.length;
          return (
            <Reveal as="li" key={step.label} delay={i * 90} distance={16}>
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 md:block">
                <span
                  className="mt-0.5 block h-[7px] w-[7px] shrink-0 rounded-full transition-all duration-700 md:mt-0"
                  style={{
                    background: lit ? accentVar : "var(--border-strong)",
                    boxShadow: lit ? `0 0 18px ${accentVar}` : "none",
                  }}
                />
                <div className="min-w-0 md:mt-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-sm font-medium tracking-tight text-foreground">
                    {step.label}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {step.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </div>
  );
}
