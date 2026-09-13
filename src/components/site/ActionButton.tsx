import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost";

interface ActionButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: Variant;
  arrow?: boolean;
}

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  solid:
    "bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_oklch(1_0_0/0.45)]",
  outline:
    "border border-border-strong px-6 py-3 text-foreground hover:border-foreground/40 hover:bg-secondary/40 hover:-translate-y-0.5 hover:shadow-[0_18px_46px_-22px_var(--violet)]",
  ghost: "text-sm text-foreground/90 hover:text-foreground",
};

export function ActionButton({
  variant = "solid",
  arrow = true,
  className,
  children,
  ...props
}: ActionButtonProps) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
      {arrow ? (
        <span
          aria-hidden
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      ) : null}
    </a>
  );
}

export function TextLink({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground",
        className,
      )}
      {...props}
    >
      {children}
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}
