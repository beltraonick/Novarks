import { useRef, type ReactNode } from "react";

import {
  mix,
  range,
  useReducedMotion,
  useViewProgress,
} from "@/hooks/use-scroll-motion";
import { cn } from "@/lib/utils";
import { TextLink } from "./ActionButton";

type ProductTheme = "orbitops" | "josephpay";

interface ProductCardProps {
  name: string;
  mark: ReactNode;
  category: string;
  headline: string;
  description: string;
  ctaLabel: string;
  href: string;
  status: string;
  image: string;
  imageAlt: string;
  theme?: ProductTheme;
  className?: string;
}

const themeClasses: Record<ProductTheme, string> = {
  orbitops:
    "lg:hover:border-orbitops/35 lg:hover:shadow-[0_0_90px_-40px_var(--orbitops)] focus-visible:ring-orbitops",
  josephpay:
    "lg:hover:border-josephpay/35 lg:hover:shadow-[0_0_90px_-40px_var(--josephpay)] focus-visible:ring-josephpay",
};

const statusClasses: Record<ProductTheme, string> = {
  orbitops: "border-orbitops/30 bg-orbitops/10 text-orbitops",
  josephpay: "border-josephpay/30 bg-josephpay/10 text-josephpay",
};

const glowClasses: Record<ProductTheme, string> = {
  orbitops:
    "bg-[radial-gradient(60%_60%_at_50%_55%,var(--orbitops)_0%,transparent_70%)]",
  josephpay:
    "bg-[radial-gradient(60%_60%_at_50%_55%,var(--josephpay)_0%,transparent_70%)]",
};

export function ProductCard({
  name,
  mark,
  category,
  headline,
  description,
  ctaLabel,
  href,
  status,
  image,
  imageAlt,
  theme = "orbitops",
  className,
}: ProductCardProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const vp = useViewProgress(ref, !reduced);

  const imageStyle = reduced
    ? undefined
    : { transform: `translate3d(0, ${mix(16, -16, vp)}px, 0)` };

  const glowStyle = reduced
    ? undefined
    : {
        opacity: mix(0, 0.22, range(vp, 0.2, 0.6)),
        transform: `translate3d(0, ${mix(24, -10, vp)}px, 0) scale(${mix(0.9, 1.1, vp)})`,
      };

  return (
    <article
      ref={ref}
      className={cn(
        "group relative isolate flex flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-surface/45 backdrop-blur-[2px] transition-[transform,border-color,box-shadow,background-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hover:-translate-y-1 lg:hover:bg-surface/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        themeClasses[theme],
        className,
      )}
    >
      <header className="flex items-start justify-between gap-4 p-6 sm:p-8">
        <div className="flex min-w-0 items-center gap-3">
          <span className="shrink-0">{mark}</span>
          <div className="min-w-0">
            <h3 className="truncate text-xl font-semibold tracking-[0.14em] text-foreground">
              {name}
            </h3>
            <p className="mt-0.5 truncate text-xs text-muted-foreground">{category}</p>
          </div>
        </div>
        <span
          className={cn(
            "shrink-0 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] backdrop-blur",
            statusClasses[theme],
          )}
        >
          {status}
        </span>
      </header>

      <div className="relative px-6 sm:px-8">
        <div
          aria-hidden
          style={glowStyle}
          className={cn(
            "pointer-events-none absolute inset-4 -z-10 blur-2xl will-change-transform",
            glowClasses[theme],
          )}
        />
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-4 -z-10 opacity-0 blur-2xl transition-opacity duration-700 lg:group-hover:opacity-25",
            glowClasses[theme],
          )}
        />
        <div style={imageStyle} className="will-change-transform">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            width={1600}
            height={900}
            className="w-full rounded-2xl border border-border/50 object-contain shadow-2xl transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:group-hover:scale-[1.02]"
          />
        </div>
      </div>

      <div className="flex flex-col p-6 pt-6 sm:p-8">
        <h3 className="max-w-lg text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-[1.75rem]">
          {headline}
        </h3>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="mt-auto pt-8">
          <TextLink href={href} className="text-foreground/90">
            {ctaLabel}
          </TextLink>
        </div>
      </div>
    </article>
  );
}
