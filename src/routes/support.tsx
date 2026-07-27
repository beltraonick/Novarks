import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/layout";
import { Reveal } from "@/components/reveal";
import { ContactForm, InfoCard } from "@/components/contact-form";
import { BookOpen, LifeBuoy, MessageSquare, Bot, HelpCircle, Send } from "lucide-react";

export const Route = createFileRoute("/support")({
  component: SupportPage,
  head: () => ({
    meta: [
      { title: "Support — Novark" },
      {
        name: "description",
        content:
          "Novark support center: knowledge base, FAQs, requests, and upcoming live chat and AI assistant.",
      },
      { property: "og:title", content: "Support — Novark" },
      {
        property: "og:description",
        content:
          "Knowledge base, FAQs, submit a request, and upcoming AI-powered support.",
      },
      { property: "og:url", content: "/support" },
    ],
    links: [{ rel: "canonical", href: "/support" }],
  }),
});

const channels = [
  { icon: LifeBuoy, title: "Support Portal", body: "Centralized access to your active requests and resolutions." },
  { icon: BookOpen, title: "Knowledge Base", body: "Guides and technical references for Novark products." },
  { icon: HelpCircle, title: "FAQs", body: "Quick answers to the most common questions." },
  { icon: Send, title: "Submit Request", body: "Open a ticket and receive a reply within one business day." },
  { icon: MessageSquare, title: "Live Chat", body: "Coming soon — real-time conversations with our team.", soon: true },
  { icon: Bot, title: "AI Assistant", body: "Coming soon — intelligent, 24/7 self-serve support.", soon: true },
];

const faqs = [
  {
    q: "How quickly does Novark respond to support requests?",
    a: "Within one business day for standard requests. Enterprise SLAs are available on request.",
  },
  {
    q: "Do you provide ongoing maintenance for the software you build?",
    a: "Yes — long-term maintenance and evolution is a core part of every engagement.",
  },
  {
    q: "Can Novark take over an existing codebase?",
    a: "Absolutely. We begin with a technical audit and a clear transition plan.",
  },
  {
    q: "Where is Novark based?",
    a: "Novark is operated by Nicollas Beltrão LLC, headquartered in North Carolina, United States.",
  },
];

function SupportPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Support"
        title="Support, engineered with the same care as our products."
        description="Everything you need to get help fast — with live chat and an AI assistant arriving soon."
      />

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/5 bg-white/5 md:grid-cols-2 lg:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 60}>
              <div className="relative h-full bg-[color:var(--background)] p-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[color:var(--gold)]">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <h3 className="text-base font-semibold">{c.title}</h3>
                  {c.soon && (
                    <span className="rounded-full border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/10 px-2 py-0.5 text-[10px] font-medium tracking-widest text-[color:var(--gold)]/90">
                      SOON
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-[11px] font-medium tracking-[0.3em] text-[color:var(--gold)]/90">
              FREQUENTLY ASKED
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Questions we hear often.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Can&apos;t find what you&apos;re looking for? Submit a request and our team will reply directly.
            </p>
          </div>
          <div className="divide-y divide-white/5 rounded-2xl border border-white/5 bg-[color:var(--surface)]/60">
            {faqs.map((f) => (
              <details key={f.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-start justify-between gap-6 text-sm font-medium text-foreground">
                  {f.q}
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-[color:var(--gold)] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <Reveal>
          <div className="mb-8 text-center">
            <p className="text-[11px] font-medium tracking-[0.3em] text-[color:var(--gold)]/90">
              SUBMIT REQUEST
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Open a support ticket.
            </h2>
          </div>
        </Reveal>
        <ContactForm submitLabel="Submit request" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <InfoCard title="Response Time">
            Standard: within 1 business day. Enterprise SLAs available on request.
          </InfoCard>
          <InfoCard title="Direct Email">support@novarks.com</InfoCard>
        </div>
      </section>
    </SiteLayout>
  );
}
