import { Box, Layers, Sparkles } from "lucide-react";

import { useT } from "@/i18n";
import { Reveal } from "./Reveal";
import { TextLink } from "./ActionButton";

const icons = [Box, Layers, Sparkles];

export function Capabilities() {
  const t = useT();

  return (
    <section id="services" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow">{t.capabilities.eyebrow}</p>
        </Reveal>

        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-end">
          <Reveal delay={60}>
            <h2 className="text-3xl font-medium leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl">
              {t.capabilities.headline.split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:pb-2">
              {t.capabilities.sub}
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {t.capabilities.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal as="li" key={item.title} delay={index * 90}>
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-5 md:block">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-border bg-surface">
                    <Icon className="h-6 w-6 text-foreground/80" strokeWidth={1.4} />
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
            );
          })}
        </ul>
      </div>
    </section>
  );
}
