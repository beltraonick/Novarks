import type { ReactNode } from "react";
import { Nav } from "./nav";
import { Footer } from "./footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-dvh bg-background text-foreground">
      {/* Continuous atmospheric background that stitches sections together */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(80rem 60rem at 50% -10%, color-mix(in oklab, var(--gold) 8%, transparent), transparent 60%), radial-gradient(60rem 50rem at 100% 40%, color-mix(in oklab, var(--gold) 4%, transparent), transparent 70%), radial-gradient(70rem 60rem at 0% 90%, color-mix(in oklab, var(--gold) 3%, transparent), transparent 70%), linear-gradient(180deg, var(--background-deep), var(--background) 40%, var(--background-deep))",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />
      <Nav />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ambient pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        {eyebrow && (
          <p className="mb-5 text-xs font-medium tracking-[0.28em] text-[color:var(--gold)]/90">
            {eyebrow.toUpperCase()}
          </p>
        )}
        <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
