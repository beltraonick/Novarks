import { Box, Layers, Sparkles } from "lucide-react";

import { Reveal } from "./Reveal";
import { TextLink } from "./ActionButton";

const items = [
  {
    icon: Box,
    title: "Products",
    body: "We create and operate our own technology products.",
    cta: "Build what's next",
  },
  {
    icon: Layers,
    title: "Business Systems",
    body: "Custom platforms designed around how your company actually operates.",
    cta: "Solve your challenge",
  },
  {
    icon: Sparkles,
    title: "AI & Automation",
    body: "Intelligent systems that reduce repetitive work and help teams make better decisions.",
    cta: "Explore AI",
  },
];

export function Capabilities() {
  return (
    <section id="services" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow">What we do</p>
        </Reveal>

        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-end">
          <Reveal delay={60}>
            <h2 className="text-3xl font-medium leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl">
              Three ways
              <br />
              to build forward.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:pb-2">
              Products, business systems and AI — working together to create real
              operational value.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {items.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 90}>
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-5 md:block">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-border bg-surface">
                  <item.icon className="h-6 w-6 text-foreground/80" strokeWidth={1.4} />
                </span>
                <div className="min-w-0 md:mt-7">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                  <div className="mt-6">
                    <TextLink href="#contact">{item.cta}</TextLink>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
