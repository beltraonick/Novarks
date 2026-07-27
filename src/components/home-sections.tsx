import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Sparkles,
  Cpu,
  ShieldCheck,
  Layers,
  Users,
  Infinity as InfinityIcon,
  Code2,
  Smartphone,
  Globe,
  Bot,
  Workflow,
  Building2,
  Palette,
  Cloud,
  LifeBuoy,
} from "lucide-react";
import logo from "@/assets/novark-logo.png.asset.json";
import { Reveal } from "./reveal";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function Hero() {
  const ref = useScrollProgress<HTMLElement>();
  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-ambient pt-32 pb-28 md:pt-48 md:pb-40"
      style={{
        // custom props consumed below via calc()
        ["--hero-y" as string]: "calc(var(--p, 0) * 120px)",
        ["--hero-y-slow" as string]: "calc(var(--p, 0) * 60px)",
        ["--hero-y-fast" as string]: "calc(var(--p, 0) * -80px)",
        ["--hero-scale" as string]: "calc(1 + var(--p, 0) * 0.06)",
        ["--hero-fade" as string]: "calc(1 - var(--p, 0) * 0.5)",
      }}
    >
      {/* Depth layer 1 — crisp gold spotlight (no haze) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ transform: "translate3d(0, var(--hero-y-slow), 0)" }}
      >
        <div
          className="absolute left-1/2 top-[20%] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full opacity-95 blur-xl"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 42%, transparent) 0%, color-mix(in oklab, var(--gold) 14%, transparent) 45%, transparent 72%)",
          }}
        />
        {/* directional top rim light */}
        <div
          className="absolute inset-x-0 top-0 h-40 opacity-70"
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in oklab, var(--gold) 10%, transparent), transparent)",
          }}
        />
      </div>

      {/* Depth layer 2 — architectural monoliths (glass towers + curved facade) */}
      <svg
        aria-hidden
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMax slice"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.55]"
        style={{ transform: "translate3d(0, var(--hero-y), 0) scale(var(--hero-scale))" }}
      >
        <defs>
          <linearGradient id="glassTower" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#3a4049" stopOpacity="0.0" />
            <stop offset="35%" stopColor="#2a2e36" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#15171b" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="glassTowerRim" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="goldRim" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.94 0.10 85)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.62 0.11 70)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="brushedMetal" x1="0" x2="1" y1="0.5" y2="0.5">
            <stop offset="0%" stopColor="#1c1e23" />
            <stop offset="45%" stopColor="#3a4049" />
            <stop offset="55%" stopColor="#3a4049" />
            <stop offset="100%" stopColor="#1c1e23" />
          </linearGradient>
          <radialGradient id="floorReflect" cx="0.5" cy="0" r="0.7">
            <stop offset="0%" stopColor="oklch(0.82 0.115 82)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="oklch(0.82 0.115 82)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* far horizon plate */}
        <rect x="0" y="620" width="1600" height="280" fill="url(#brushedMetal)" opacity="0.55" />
        <ellipse cx="800" cy="620" rx="900" ry="140" fill="url(#floorReflect)" />

        {/* Back row — distant monoliths */}
        <g opacity="0.55">
          <rect x="120" y="360" width="90" height="380" fill="url(#glassTower)" />
          <rect x="230" y="410" width="60" height="330" fill="url(#glassTower)" />
          <rect x="1310" y="340" width="110" height="400" fill="url(#glassTower)" />
          <rect x="1440" y="400" width="70" height="340" fill="url(#glassTower)" />
        </g>

        {/* Mid row */}
        <g opacity="0.85">
          <rect x="300" y="280" width="150" height="460" fill="url(#glassTower)" />
          <rect x="1150" y="260" width="160" height="480" fill="url(#glassTower)" />
          {/* rim highlights */}
          <rect x="300" y="280" width="150" height="2" fill="url(#glassTowerRim)" />
          <rect x="1150" y="260" width="160" height="2" fill="url(#glassTowerRim)" />
        </g>

        {/* Central curved glass facade — the "headquarters" */}
        <g>
          <path
            d="M 560 740 L 560 320 Q 800 180 1040 320 L 1040 740 Z"
            fill="url(#glassTower)"
          />
          {/* rim light along the curved top */}
          <path
            d="M 560 320 Q 800 180 1040 320"
            fill="none"
            stroke="url(#goldRim)"
            strokeWidth="2.5"
          />
          {/* vertical mullions — glass panels */}
          {Array.from({ length: 11 }).map((_, i) => {
            const x = 560 + ((1040 - 560) / 11) * (i + 0.5);
            return (
              <line
                key={i}
                x1={x}
                y1="320"
                x2={x}
                y2="740"
                stroke="#ffffff"
                strokeOpacity="0.05"
              />
            );
          })}
          {/* horizontal floor lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1="560"
              y1={340 + i * 50}
              x2="1040"
              y2={340 + i * 50}
              stroke="#ffffff"
              strokeOpacity="0.04"
            />
          ))}
          {/* single warm interior glow */}
          <ellipse cx="800" cy="560" rx="220" ry="90" fill="oklch(0.82 0.115 82)" opacity="0.10" />
        </g>

        {/* Foreground silhouette bar for grounding */}
        <rect x="0" y="738" width="1600" height="6" fill="#0f1115" opacity="0.9" />
      </svg>

      {/* Depth layer 3 — precision grid (floor) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[55%] opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to top, black 20%, transparent 100%)",
          transform: "translate3d(0, var(--hero-y-fast), 0) perspective(600px) rotateX(60deg)",
          transformOrigin: "50% 100%",
        }}
      />


      {/* Content */}
      <div
        className="relative mx-auto max-w-6xl px-6 text-center lg:px-10"
        style={{
          opacity: "var(--hero-fade)",
          transform: "translate3d(0, calc(var(--p, 0) * -30px), 0)",
        }}
      >
        <Reveal>
          <div
            className="relative mx-auto flex h-40 w-40 items-center justify-center md:h-52 md:w-52"
            style={{
              transform:
                "translate3d(0, calc(var(--p, 0) * -40px), 0) scale(calc(1 - var(--p, 0) * 0.08))",
            }}
          >
            {/* tight, crisp halo — sits just behind the mark */}
            <div
              aria-hidden
              className="absolute inset-[18%] -z-10 rounded-full blur-lg"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 55%, transparent), transparent 72%)",
              }}
            />
            <img
              src={logo.url}
              alt="Novark"
              className="h-full w-full object-contain [image-rendering:-webkit-optimize-contrast] drop-shadow-[0_10px_28px_rgba(217,175,90,0.45)]"
              draggable={false}
            />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-10 text-xs font-bold uppercase tracking-[0.44em] text-[color:var(--gold)] [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]">
            Software · AI · Enterprise
          </p>
        </Reveal>

        <Reveal delay={160}>
          <h1
            className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.55)] md:text-6xl lg:text-7xl"
            style={{ transform: "translate3d(0, calc(var(--p, 0) * 24px), 0)" }}
          >
            Building software that moves{" "}
            <span className="text-gold-gradient">businesses forward.</span>
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-relaxed text-white/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.5)] md:text-lg">
            Novark designs and develops premium software, AI solutions, business
            platforms, and digital products built for long-term growth.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-full bg-[color:var(--gold)] px-7 text-sm font-semibold text-[color:var(--primary-foreground)] shadow-[0_12px_40px_-12px_rgba(217,175,90,0.6)] transition-all hover:brightness-110 hover:shadow-[0_18px_50px_-12px_rgba(217,175,90,0.75)]"
            >
              <span className="relative z-10">Start a Project</span>
              <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
            </Link>
            <Link
              to="/projects"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-[color:var(--gold)]/50 hover:bg-white/[0.08]"
            >
              Explore Our Work
            </Link>
          </div>
        </Reveal>
      </div>

    </section>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <Reveal>
              <p className="text-[11px] font-medium tracking-[0.3em] text-[color:var(--gold)]/90">
                {eyebrow.toUpperCase()}
              </p>
            </Reveal>
          )}
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              {title}
            </h2>
          </Reveal>
          {description && (
            <Reveal delay={140}>
              <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                {description}
              </p>
            </Reveal>
          )}
        </div>
        {children && <div className="mt-16 md:mt-20">{children}</div>}
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Novark"
      title="Engineering software with intention."
      description="Novark builds custom software, mobile applications, enterprise platforms, AI systems, automation, and cloud products focused on solving real business problems — not chasing trends."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Engineered for scale",
            body: "Architecture designed to grow with the business — from first release to enterprise deployment.",
          },
          {
            title: "AI where it matters",
            body: "We integrate intelligence where it creates measurable value — never as a feature checkbox.",
          },
          {
            title: "Long-term partnership",
            body: "Every product we ship is built to be maintained, extended, and trusted for years.",
          },
        ].map((c, i) => (
          <Reveal key={c.title} delay={i * 90}>
            <div className="hairline rounded-2xl bg-[color:var(--surface)]/60 p-7">
              <h3 className="text-base font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {c.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const services = [
  { icon: Code2, title: "Custom Software Development", body: "Bespoke systems architected around your operations." },
  { icon: Smartphone, title: "iOS Applications", body: "Native experiences designed to Apple's standard." },
  { icon: Smartphone, title: "Android Applications", body: "Fluid, performant apps for the Android ecosystem." },
  { icon: Globe, title: "Web Platforms", body: "Fast, accessible, production-grade web products." },
  { icon: Bot, title: "Artificial Intelligence", body: "Applied AI, RAG, agents, and intelligent workflows." },
  { icon: Workflow, title: "Workflow Automation", body: "Automations that remove friction across teams." },
  { icon: Building2, title: "Enterprise Systems", body: "Mission-critical platforms with long-horizon design." },
  { icon: Palette, title: "UI / UX Design", body: "Interfaces that are quiet, precise, and effortless." },
  { icon: Cloud, title: "Cloud Architecture", body: "Modern infrastructure — secure, elastic, observable." },
  { icon: LifeBuoy, title: "Maintenance & Support", body: "Ongoing engineering care beyond launch." },
];

export function Services() {
  return (
    <Section
      id="solutions"
      eyebrow="Services"
      title="A full engineering studio, under one roof."
      description="From first concept to long-term maintenance — everything you need to ship a product that endures."
    >
      <div className="grid gap-px overflow-hidden rounded-3xl border border-white/5 bg-white/5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 60}>
            <div className="group relative h-full bg-[color:var(--background)] p-8 transition-colors hover:bg-[color:var(--surface)]/70">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[color:var(--gold)]">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const solutions = [
  {
    name: "Orbit",
    tag: "Construction Management",
    body: "Field-first operations platform: clock in/out, task management, project tracking, reports, and integrated AI assistance.",
    bullets: ["Clock In / Out", "Task & Project Tracking", "Reporting", "AI Assistance"],
  },
  {
    name: "Opportunity",
    tag: "Investment Intelligence",
    body: "AI-driven insights for portfolio management, market analysis, and confident decision support.",
    bullets: ["AI Insights", "Portfolio Management", "Market Analysis", "Decision Support"],
  },
  {
    name: "Enterprise",
    tag: "Custom Software",
    body: "Bespoke platforms built specifically for each client's operational needs — from internal tools to full digital products.",
    bullets: ["Bespoke Architecture", "Deep Integrations", "Scalable by Design", "Owned by You"],
  },
];

export function FeaturedSolutions() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Solutions"
      title="Products designed to move industries."
      description="A selection of platforms we've architected — spanning field operations, financial intelligence, and enterprise systems."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {solutions.map((s, i) => (
          <Reveal key={s.name} delay={i * 90}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-[color:var(--surface)] to-[color:var(--background)] p-8 transition-all hover:border-[color:var(--gold)]/25">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
                <span className="text-[11px] font-medium tracking-[0.24em] text-muted-foreground">
                  {s.tag.toUpperCase()}
                </span>
              </div>
              <h3 className="mt-6 text-3xl font-semibold tracking-tight">{s.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              <ul className="mt-6 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-foreground/85">
                    <span className="h-1 w-1 rounded-full bg-[color:var(--gold)]" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-2 text-sm text-[color:var(--gold)]/90">
                <Sparkles className="h-4 w-4" /> Case details on request
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const steps = [
  "Discovery",
  "Strategy",
  "Design",
  "Development",
  "Testing",
  "Deployment",
  "Long-Term Support",
];

export function HowWeWork() {
  return (
    <Section
      eyebrow="How We Work"
      title="A calm, deliberate process."
      description="Seven stages — engineered for clarity, momentum, and lasting outcomes."
    >
      <div className="relative">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block"
        />
        <ol className="grid gap-6 md:grid-cols-7">
          {steps.map((s, i) => (
            <Reveal key={s} delay={i * 60}>
              <li className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[color:var(--surface)] text-sm font-semibold text-[color:var(--gold)]">
                  {i + 1}
                </div>
                <p className="mt-4 text-sm font-medium">{s}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}

const reasons = [
  { icon: Layers, title: "Scalable Architecture", body: "Systems designed to grow — never rebuilt from scratch." },
  { icon: Cpu, title: "Modern Engineering", body: "Contemporary stacks, strict typing, tested at every layer." },
  { icon: ShieldCheck, title: "Security First", body: "Defense-in-depth built into every product from day one." },
  { icon: Users, title: "Human-Centered Design", body: "Interfaces people actually enjoy using every day." },
  { icon: Bot, title: "Artificial Intelligence", body: "Applied AI that produces measurable business value." },
  { icon: InfinityIcon, title: "Long-Term Partnership", body: "We stay with the product — long after the first release." },
];

export function WhyNovark() {
  return (
    <Section
      eyebrow="Why Novark"
      title="Every detail is deliberate."
      description="Six principles that define how we build."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={(i % 3) * 70}>
            <div className="hairline group relative h-full overflow-hidden rounded-2xl bg-[color:var(--surface)]/60 p-7 transition-colors hover:bg-[color:var(--surface)]">
              <r.icon className="h-5 w-5 text-[color:var(--gold)]" />
              <h3 className="mt-5 text-base font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {r.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const techs = [
  "React", "Next.js", "Flutter", "Supabase", "Firebase", "TypeScript",
  "OpenAI", "Anthropic", "Node.js", "Vercel", "GitHub", "PostgreSQL",
  "REST APIs", "Modern Cloud",
];

export function Technologies() {
  return (
    <Section
      eyebrow="Technologies"
      title="The stack behind every product."
      description="Battle-tested tools chosen for reliability, longevity, and developer velocity."
    >
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/5 bg-white/5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {techs.map((t, i) => (
          <Reveal key={t} delay={(i % 7) * 40}>
            <div className="flex h-24 items-center justify-center bg-[color:var(--background)] px-3 text-sm font-medium text-foreground/85 transition-colors hover:bg-[color:var(--surface)]">
              {t}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Leadership() {
  const founders = [
    {
      name: "Nicollas Beltrão",
      title: "Co-Founder, Chief Executive Officer & Investor",
      body:
        "Nicollas leads Novark's business vision, strategic growth, product direction, client relationships, and long-term company development.",
      initials: "NB",
    },
    {
      name: "Thomas Vidall",
      title: "Co-Founder & Chief Technology Officer",
      body:
        "Thomas leads Novark's software engineering, architecture, infrastructure, technical strategy, and development standards — ensuring every solution is reliable, scalable, and built for long-term success.",
      initials: "TV",
    },
  ];
  return (
    <Section
      eyebrow="Leadership"
      title="The people behind Novark."
      description="Two founders. One shared standard for the software we ship."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {founders.map((f, i) => (
          <Reveal key={f.name} delay={i * 100}>
            <article className="relative overflow-hidden rounded-3xl border border-white/5 bg-[color:var(--surface)]/60 p-10">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[color:var(--gold)]/25 bg-gradient-to-br from-[color:var(--gold)]/15 to-transparent text-lg font-semibold text-[color:var(--gold)]">
                  {f.initials}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-xl font-semibold tracking-tight">{f.name}</h3>
                  <p className="mt-1 text-xs font-medium tracking-[0.2em] text-[color:var(--gold)]/90">
                    {f.title.toUpperCase()}
                  </p>
                </div>
              </div>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                {f.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="absolute inset-0 bg-ambient opacity-90"
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Let&apos;s build something that lasts.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
            Tell us about your product, business, or idea. We&apos;ll respond within one business day.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 text-sm font-semibold text-[color:var(--primary-foreground)] transition-all hover:brightness-110"
            >
              Start a Project <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/support"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-medium text-foreground transition-all hover:border-white/20 hover:bg-white/[0.06]"
            >
              Visit Support
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
