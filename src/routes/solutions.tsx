import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/layout";
import { Services, CTA } from "@/components/home-sections";

export const Route = createFileRoute("/solutions")({
  component: SolutionsPage,
  head: () => ({
    meta: [
      { title: "Solutions — Novark" },
      {
        name: "description",
        content:
          "A full engineering studio: custom software, mobile apps, AI, automation, enterprise systems, cloud, and long-term support.",
      },
      { property: "og:title", content: "Solutions — Novark" },
      {
        property: "og:description",
        content:
          "Custom software, mobile apps, AI, automation, enterprise systems, cloud, and long-term support.",
      },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
});

function SolutionsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Solutions"
        title="Everything needed to design, build, and scale premium software."
        description="A full engineering studio under one roof — from initial discovery through long-term maintenance."
      />
      <Services />
      <CTA />
    </SiteLayout>
  );
}
