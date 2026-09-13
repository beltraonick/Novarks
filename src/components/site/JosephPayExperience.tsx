import { useRef } from "react";

import { mix, useReducedMotion, useViewProgress } from "@/hooks/use-scroll-motion";
import { Reveal } from "./Reveal";
import { SystemFlow, type FlowStep } from "./SystemFlow";
import { TextLink } from "./ActionButton";

const steps: FlowStep[] = [
  { label: "Attract", detail: "Marketing and social reach." },
  { label: "Capture", detail: "Leads land in one place." },
  { label: "Organize", detail: "Conversations and pipeline." },
  { label: "Convert", detail: "Offers, follow-up, payments." },
  { label: "Retain", detail: "Loyalty and re-engagement." },
  { label: "Measure", detail: "What actually drives revenue." },
];

export function JosephPayExperience() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const vp = useViewProgress(ref, !reduced);

  return (
    <section ref={ref} className="relative isolate overflow-hidden py-28 lg:py-40">
      <div
        aria-hidden
        style={
          reduced
            ? undefined
            : { opacity: mix(0.04, 0.14, vp), transform: `scale(${mix(0.9, 1.15, vp)})` }
        }
        className="pointer-events-none absolute -right-[10%] top-1/4 -z-10 h-[60vh] w-[60vw] bg-[radial-gradient(closest-side,var(--josephpay),transparent)] blur-3xl will-change-transform"
      />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div>

          <div>
            <Reveal>
              <p className="eyebrow">Product 02 — JosephPay</p>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-6 max-w-md text-3xl font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-[2.75rem]">
                From attention to revenue.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                JosephPay is the system a business runs its growth on: every lead,
                conversation, payment and campaign connected end to end.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9">
                <TextLink href="#products" className="text-foreground/90">
                  Explore JosephPay
                </TextLink>
              </div>
            </Reveal>
          </div>
        </div>

        <SystemFlow
          steps={steps}
          accentVar="var(--josephpay)"
          className="mt-24 lg:mt-32"
        />
      </div>
    </section>
  );
}
