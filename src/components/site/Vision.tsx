import { useRef } from "react";

import earth from "@/assets/earth.jpg";
import {
  mix,
  range,
  useReducedMotion,
  useViewProgress,
} from "@/hooks/use-scroll-motion";
import { useT } from "@/i18n";
import { ActionButton } from "./ActionButton";
import { Reveal } from "./Reveal";

export function Vision() {
  const t = useT();
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const vp = useViewProgress(ref, !reduced);

  // Image drifts slower than the copy; the light expands and brightens.
  const imageStyle = reduced
    ? undefined
    : {
        transform: `translate3d(${mix(-18, 18, vp)}px, ${mix(-24, 24, vp)}px, 0) scale(${mix(1.08, 1.16, vp)})`,
      };

  const lightStyle = reduced
    ? undefined
    : {
        opacity: mix(0.35, 0.85, range(vp, 0.15, 0.75)),
        transform: `translate3d(${mix(40, -40, vp)}px, 0, 0) scale(${mix(0.9, 1.25, vp)})`,
      };

  const copyStyle = reduced
    ? undefined
    : { transform: `translate3d(0, ${mix(26, -26, vp)}px, 0)` };

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden"
    >
      <img
        src={earth}
        alt="Earth at night seen from orbit with sunrise along the horizon"
        loading="lazy"
        width={1920}
        height={912}
        style={imageStyle}
        className="absolute inset-0 -z-10 h-full w-full object-cover will-change-transform"
      />
      <div
        aria-hidden
        style={lightStyle}
        className="glow-violet pointer-events-none absolute inset-y-0 right-0 -z-10 w-2/3 will-change-transform"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-background/30"
      />

      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:px-10 lg:py-32">
        <Reveal className="max-w-xl">
          <div style={copyStyle} className="will-change-transform">
            <h2 className="text-3xl font-medium leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl">
              {t.vision.headline.split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              {t.vision.sub}
            </p>
            <div className="mt-9">
              <ActionButton href="#contact" variant="outline">
                {t.vision.cta}
              </ActionButton>
            </div>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <ul className="grid grid-cols-3 gap-6 sm:gap-10">
            {t.vision.pillars.map((pillar, i) => (
              <li
                key={pillar.top}
                className="border-l border-border pl-4 first:border-l-0 first:pl-0 sm:pl-8"
              >
                <Reveal delay={300 + i * 120} distance={16}>
                  <p className="text-lg font-medium tracking-tight text-foreground sm:text-xl">
                    {pillar.top}
                  </p>
                  <p className="text-lg tracking-tight text-muted-foreground sm:text-xl">
                    {pillar.bottom}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
