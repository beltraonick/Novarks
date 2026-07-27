import { Reveal } from "./reveal";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import {
  Search,
  Command,
  Circle,
  CheckCircle2,
  Folder,
  Layers,
  Sparkles,
  ArrowRight,
} from "lucide-react";

/**
 * Floating dark UI mockups — no fake analytics, no charts.
 * Communicates "software" through interface craft: sidebar navigation,
 * command palettes, task rows, minimal chrome, brushed-metal cards.
 */
export function ProductShowcase() {
  const ref = useScrollProgress<HTMLElement>();

  return (
    <section
      ref={ref}
      id="showcase"
      className="relative overflow-hidden py-32 md:py-48"
      style={{
        ["--sy" as string]: "calc((var(--p, 0) - 0.5) * 60px)",
        ["--sy2" as string]: "calc((var(--p, 0) - 0.5) * -80px)",
        ["--sy3" as string]: "calc((var(--p, 0) - 0.5) * 40px)",
      }}
    >
      {/* soft gold spot to anchor the frame */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-2xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 18%, transparent), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.3em] text-[color:var(--gold)]/90">
              THE PRODUCT
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              Software, rendered with the same care as the architecture around it.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Interfaces designed to disappear — restrained typography, deliberate
              spacing, and a quiet dark palette that lets the work take the stage.
            </p>
          </Reveal>
        </div>

        {/* Stage */}
        <div className="relative mx-auto mt-20 h-[640px] max-w-6xl md:h-[720px]">
          {/* Primary window */}
          <div
            className="absolute left-1/2 top-8 w-[92%] max-w-[900px] -translate-x-1/2"
            style={{ transform: "translate3d(-50%, var(--sy), 0)" }}
          >
            <MockWindow title="Orbit — Field Operations">
              <div className="grid grid-cols-[180px_1fr] gap-0">
                {/* sidebar */}
                <aside className="border-r border-white/[0.06] p-4">
                  <div className="mb-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/40">
                    Workspace
                  </div>
                  <ul className="space-y-1 text-sm">
                    {[
                      { icon: Layers, label: "Overview" },
                      { icon: Folder, label: "Projects", active: true },
                      { icon: CheckCircle2, label: "Tasks" },
                      { icon: Sparkles, label: "AI Assistant" },
                    ].map((i) => (
                      <li
                        key={i.label}
                        className={
                          "flex items-center gap-2.5 rounded-lg px-2.5 py-2 transition-colors " +
                          (i.active
                            ? "bg-white/[0.06] text-white"
                            : "text-white/60 hover:text-white/80")
                        }
                      >
                        <i.icon className="h-3.5 w-3.5" />
                        {i.label}
                      </li>
                    ))}
                  </ul>
                </aside>
                {/* content */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.24em] text-white/40">
                        Project
                      </div>
                      <div className="mt-1 text-lg font-semibold text-white">
                        Marina District — Phase III
                      </div>
                    </div>
                    <div className="inline-flex h-8 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 text-xs text-white/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
                      On schedule
                    </div>
                  </div>

                  <div className="mt-6 space-y-2.5">
                    {[
                      { done: true, label: "Site survey completed", meta: "9:12" },
                      { done: true, label: "Foundation pour — Sector A", meta: "11:40" },
                      { done: false, label: "Curtain wall installation — Level 4", meta: "14:20" },
                      { done: false, label: "Inspection walkthrough with client", meta: "16:00" },
                    ].map((t) => (
                      <div
                        key={t.label}
                        className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          {t.done ? (
                            <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)]" />
                          ) : (
                            <Circle className="h-4 w-4 text-white/30" />
                          )}
                          <span className={t.done ? "text-white/50 line-through" : "text-white/90"}>
                            {t.label}
                          </span>
                        </div>
                        <span className="text-xs text-white/40">{t.meta}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </MockWindow>
          </div>

          {/* Floating command palette — top right */}
          <div
            className="absolute right-2 top-0 hidden w-[320px] md:block"
            style={{ transform: "translate3d(0, var(--sy2), 0)" }}
          >
            <MockCard>
              <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
                <Search className="h-3.5 w-3.5 text-white/40" />
                <span className="text-sm text-white/50">Search anything…</span>
                <div className="ml-auto inline-flex items-center gap-1 rounded-md border border-white/10 px-1.5 py-0.5 text-[10px] text-white/50">
                  <Command className="h-3 w-3" /> K
                </div>
              </div>
              <div className="p-2 text-sm">
                {["Create new project", "Invite teammate", "Generate report", "Open AI Assistant"].map(
                  (l, i) => (
                    <div
                      key={l}
                      className={
                        "flex items-center justify-between rounded-lg px-3 py-2 " +
                        (i === 0 ? "bg-white/[0.05] text-white" : "text-white/60")
                      }
                    >
                      <span>{l}</span>
                      {i === 0 && <ArrowRight className="h-3.5 w-3.5 text-[color:var(--gold)]" />}
                    </div>
                  )
                )}
              </div>
            </MockCard>
          </div>

          {/* Floating AI card — bottom left */}
          <div
            className="absolute -bottom-2 left-0 hidden w-[300px] md:block"
            style={{ transform: "translate3d(0, var(--sy3), 0)" }}
          >
            <MockCard>
              <div className="p-4">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[color:var(--gold)]/90">
                  <Sparkles className="h-3 w-3" /> Assistant
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  Three tasks on Level 4 are blocked by the delayed inspection.
                  Reschedule to Thursday morning?
                </p>
                <div className="mt-4 flex gap-2">
                  <button className="rounded-full bg-[color:var(--gold)] px-3 py-1.5 text-xs font-semibold text-[color:var(--primary-foreground)]">
                    Reschedule
                  </button>
                  <button className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70">
                    Dismiss
                  </button>
                </div>
              </div>
            </MockCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function MockWindow({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[color:var(--background-deep)]/95 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.75),0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,0.03), transparent 30%)",
      }}
    >
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <div className="ml-3 text-xs text-white/50">{title}</div>
      </div>
      {children}
    </div>
  );
}

function MockCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[color:var(--surface)]/90 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,0.04), transparent 40%)",
      }}
    >
      {children}
    </div>
  );
}
