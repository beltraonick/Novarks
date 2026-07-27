import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/layout";
import { FeaturedSolutions, Technologies, CTA } from "@/components/home-sections";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Novark" },
      {
        name: "description",
        content:
          "Selected Novark products including Orbit (construction management) and Opportunity (investment intelligence).",
      },
      { property: "og:title", content: "Projects — Novark" },
      {
        property: "og:description",
        content:
          "Selected Novark products spanning field operations, financial intelligence, and enterprise systems.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

function ProjectsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Projects"
        title="A quiet portfolio of considered work."
        description="Platforms we've architected across construction operations, investment intelligence, and enterprise systems."
      />
      <FeaturedSolutions />
      <Technologies />
      <CTA />
    </SiteLayout>
  );
}
