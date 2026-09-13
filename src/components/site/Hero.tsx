import { useRef } from "react";

import orbitDevices from "@/assets/orbitops-devices.png.asset.json";
import {
  mix,
  range,
  useMediaQuery,
  useReducedMotion,
  useScrollProgress,
  useViewProgress,
} from "@/hooks/use-scroll-motion";
import { ActionButton } from "./ActionButton";
import { DigitalTerrain } from "./DigitalTerrain";
import { Reveal } from "./Reveal";

const stats = [
  { value: "2+", label: "Products" },
  { value: "20+", label: "Projects Delivered" },
  { value: "100%", label: "Client-Focused" },
  { value: "Global", label: "Remote-First" },
];

export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const cinematic = isDesktop && !reduced;
  const p = useScrollProgress(wrapRef, cinematic);
  // Lighter, non-pinned motion for phones/tablets.
  const mobile = !isDesktop && !reduced;
  const mp = useViewProgress(wrapRef, mobile);

  // Layered fades: support copy and buttons leave before the headline.
  const headline = range(p, 0.2, 0.82);
  const support = range(p, 0.06, 0.5);
  const buttons = range(p, 0.14, 0.6);
  const device = range(p, 0, 0.9);

  const t = (y: number, scale = 1) =>
    `translate3d(0, ${y}px, 0) scale(${scale})`;

  // --- Depth layers (slowest at the back) ---
  const haloStyle = cinematic
    ? {
        opacity: mix(0.55, 1, device),
        transform: t(mix(0, 18, p), mix(1, 1.16, device)),
      }
    : mobile
      ? { opacity: mix(0.5, 0.95, mp), transform: t(0, mix(0.98, 1.14, mp)) }
      : undefined;

  const skyStyle = cinematic
    ? { opacity: mix(1, 0.18, range(p, 0.48, 1)), transform: t(mix(0, 24, p), mix(1, 1.035, p)) }
    : mobile
      ? { opacity: mix(1, 0.45, range(mp, 0.55, 1)), transform: t(mix(-8, 14, mp), 1.02) }
      : undefined;

  const groundStyle = cinematic
    ? { opacity: mix(0.82, 0.08, range(p, 0.42, 1)), transform: t(mix(0, -46, p), mix(1, 1.06, p)) }
    : mobile
      ? { opacity: mix(0.72, 0.2, range(mp, 0.55, 1)), transform: t(mix(12, -18, mp), 1.03) }
      : undefined;

  const deviceStyle = cinematic
    ? {
        transform: `translate3d(${mix(0, -30, device)}px, ${mix(0, -34, device)}px, 0) scale(${mix(1, 1.08, device)})`,
      }
    : mobile
      ? {
          transform: `translate3d(0, ${mix(16, -20, mp)}px, 0) scale(${mix(0.98, 1.05, mp)})`,
        }
      : undefined;

  const headlineStyle = cinematic
    ? {
        opacity: mix(1, 0.04, headline),
        transform: t(mix(0, -46, headline)),
      }
    : mobile
      ? { transform: t(mix(0, -16, range(mp, 0.4, 1))) }
      : undefined;

  const supportStyle = cinematic
    ? { opacity: mix(1, 0, support), transform: t(mix(0, -34, support)) }
    : mobile
      ? {
          opacity: mix(1, 0.4, range(mp, 0.5, 1)),
          transform: t(mix(0, -12, range(mp, 0.4, 1))),
        }
      : undefined;

  const buttonsStyle = cinematic
    ? { opacity: mix(1, 0, buttons), transform: t(mix(0, -30, buttons)) }
    : supportStyle;

  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div ref={wrapRef} className="relative lg:h-[175vh]">
        <div className="relative min-h-[100svh] overflow-hidden lg:sticky lg:top-0 lg:h-screen">
          {/* Back layer — a computational field that dissolves into the site atmosphere. */}
          <div
            aria-hidden
            style={skyStyle}
            className="pointer-events-none absolute inset-0 will-change-transform"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_42%,color-mix(in_oklab,var(--violet)_14%,transparent),transparent_38%),linear-gradient(to_bottom,color-mix(in_oklab,var(--surface)_36%,transparent),transparent_72%)]" />
            <DigitalTerrain progress={cinematic ? p : mobile ? mp * 0.7 : 0} />
          </div>

          {/* Purple light arc — slowest layer */}
          <div
            aria-hidden
            style={haloStyle}
            className="glow-violet pointer-events-none absolute inset-x-0 top-[6%] h-[70vh] will-change-transform"
          />
          <div
            aria-hidden
            style={haloStyle}
            className="glow-blue pointer-events-none absolute inset-y-0 right-0 w-[70%] will-change-transform"
          />

          {/* Near data plane moves faster, giving the devices physical depth. */}
          <div
            aria-hidden
            style={groundStyle}
            className="pointer-events-none absolute inset-x-[-8%] bottom-[-13%] h-[52%] origin-bottom will-change-transform"
          >
            <div className="absolute inset-0 origin-bottom [background-image:linear-gradient(color-mix(in_oklab,var(--foreground)_5%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_oklab,var(--foreground)_4%,transparent)_1px,transparent_1px)] [background-size:72px_38px] [mask-image:linear-gradient(to_bottom,transparent,black_35%,transparent_92%)] [transform:perspective(600px)_rotateX(62deg)]" />
          </div>
          {/* Cinematic grading and an edge-free dissolve into Products. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_82%_at_66%_32%,transparent_24%,color-mix(in_oklab,var(--background)_72%,transparent)_100%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,var(--background)_0%,transparent_100%)] opacity-90"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[38vh] bg-[linear-gradient(to_bottom,transparent_0%,color-mix(in_oklab,var(--background)_72%,transparent)_52%,var(--background)_100%)]"
          />

          <div className="relative flex min-h-[100svh] flex-col justify-between pt-32 lg:h-screen lg:pt-24">
            <div className="mx-auto grid w-full max-w-[1400px] flex-1 items-center gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-6 lg:px-10">
              <div className="max-w-2xl">
                <div style={supportStyle} className="will-change-transform">
                  <Reveal>
                    <p className="eyebrow">Software. AI. Products.</p>
                  </Reveal>
                </div>
                <div style={headlineStyle} className="will-change-transform">
                  <Reveal delay={80}>
                    <h1 className="mt-6 text-[2.6rem] font-medium leading-[1.05] tracking-[-0.035em] text-foreground drop-shadow-[0_10px_40px_oklch(0_0_0/0.6)] sm:text-6xl lg:text-[4.25rem]">
                      We build
                      <br className="hidden sm:block" /> technology that
                      <br className="hidden sm:block" /> moves businesses
                      <br className="hidden sm:block" />{" "}
                      <span className="text-violet">forward.</span>
                    </h1>
                  </Reveal>
                </div>
                <div style={supportStyle} className="will-change-transform">
                  <Reveal delay={160}>
                    <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
                      From business systems and automation to products used in the
                      field, Novarks designs and builds technology around real-world
                      problems.
                    </p>
                  </Reveal>
                </div>
                <div style={buttonsStyle} className="will-change-transform">
                  <Reveal delay={240}>
                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                      <ActionButton href="#products">Explore our products</ActionButton>
                      <ActionButton href="#contact" variant="outline" arrow={false}>
                        Build with Novarks
                      </ActionButton>
                    </div>
                  </Reveal>
                </div>
              </div>

              <Reveal delay={200} className="relative lg:-mr-6">
                <img
                  src={orbitDevices.url}
                  alt="OrbitOps construction operations dashboard on a MacBook and iPhone"
                  width={836}
                  height={541}
                  fetchPriority="high"
                  style={deviceStyle}
                  className="relative w-full drop-shadow-[0_62px_82px_oklch(0_0_0/0.78)] will-change-transform"
                />
                <p
                  style={supportStyle}
                  className="mt-2 hidden text-right text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground lg:block"
                >
                  Built for <span className="text-foreground/40">———</span>
                  <br />
                  real progress.
                </p>
              </Reveal>
            </div>

            {/* Metrics live inside the same cinematic environment */}
            <div className="mx-auto w-full max-w-[1400px] px-6 pb-14 lg:px-10 lg:pb-16">
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                {stats.map((stat, i) => (
                  <Reveal key={stat.label} delay={i * 90} distance={18}>
                    <p className="text-xl font-medium tracking-tight text-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
