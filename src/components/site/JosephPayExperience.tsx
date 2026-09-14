import { useRef } from "react";

import { mix, useReducedMotion, useViewProgress } from "@/hooks/use-scroll-motion";
import { useT } from "@/i18n";
import { Reveal } from "./Reveal";
import { SystemFlow } from "./SystemFlow";
import { TextLink } from "./ActionButton";

export function JosephPayExperience() {
  const t = useT();
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
              <p className="eyebrow">{t.josephpay.eyebrow}</p>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-6 max-w-md text-3xl font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-[2.75rem]">
                {t.josephpay.headline}
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                {t.josephpay.description}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9">
                <TextLink href="#products" className="text-foreground/90">
                  {t.josephpay.cta}
                </TextLink>
              </div>
            </Reveal>
          </div>
        </div>

        <SystemFlow
          steps={t.josephpay.steps}
          accentVar="var(--josephpay)"
          className="mt-24 lg:mt-32"
        />
      </div>
    </section>
  );
}
