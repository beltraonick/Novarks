import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/layout";
import { About, Leadership, WhyNovark, HowWeWork, CTA } from "@/components/home-sections";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Novark" },
      {
        name: "description",
        content:
          "Novark is a premium software company founded in 2024 in North Carolina, building custom software, AI, and enterprise platforms.",
      },
      { property: "og:title", content: "About — Novark" },
      {
        property: "og:description",
        content:
          "Novark — a premium software company founded in 2024. Custom software, AI, and enterprise platforms.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About"
        title="A software company built with intention."
        description="Novark is operated by Nicollas Beltrão LLC in North Carolina. We build enduring software for businesses of any size."
      />
      <About />
      <WhyNovark />
      <HowWeWork />
      <Leadership />
      <CTA />
    </SiteLayout>
  );
}
