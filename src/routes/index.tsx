import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout";
import {
  Hero,
  About,
  Services,
  FeaturedSolutions,
  HowWeWork,
  WhyNovark,
  Technologies,
  Leadership,
  CTA,
} from "@/components/home-sections";
import { ProductShowcase } from "@/components/product-showcase";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Novark — Premium Software, AI & Enterprise Solutions" },
      {
        name: "description",
        content:
          "Novark designs and develops premium software, AI solutions, and business platforms built for long-term growth.",
      },
      { property: "og:title", content: "Novark — Premium Software, AI & Enterprise Solutions" },
      {
        property: "og:description",
        content:
          "Novark designs and develops premium software, AI solutions, and business platforms built for long-term growth.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <About />
      <ProductShowcase />
      <Services />
      <FeaturedSolutions />
      <HowWeWork />
      <WhyNovark />
      <Technologies />
      <Leadership />
      <CTA />
    </SiteLayout>
  );
}
