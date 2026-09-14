import { createFileRoute } from "@tanstack/react-router";
import { useLayoutEffect } from "react";

import { Navbar } from "@/components/site/Navbar";
import { Atmosphere } from "@/components/site/Atmosphere";
import { Hero } from "@/components/site/Hero";
import { ProductShowcase } from "@/components/site/ProductShowcase";
import { OrbitOpsExperience } from "@/components/site/OrbitOpsExperience";
import { JosephPayExperience } from "@/components/site/JosephPayExperience";
import { Capabilities } from "@/components/site/Capabilities";
import { Vision } from "@/components/site/Vision";
import { Leadership } from "@/components/site/Leadership";
import { Footer } from "@/components/site/Footer";

const title = "Novarks — Technology products, business systems and AI";
const description =
  "Novarks builds technology that moves businesses forward: our own products OrbitOps and JosephPay, custom business systems, and AI automation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useLayoutEffect(() => {
    if (window.location.pathname !== "/") return;

    window.history.scrollRestoration = "manual";
    if (window.location.hash) {
      window.history.replaceState(window.history.state, "", "/");
    }

    const reset = () => window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    reset();
    const firstFrame = requestAnimationFrame(() => {
      reset();
      requestAnimationFrame(reset);
    });

    return () => cancelAnimationFrame(firstFrame);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Atmosphere />
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <JosephPayExperience />
        <OrbitOpsExperience />
        <Capabilities />
        <Vision />
        <Leadership />
      </main>
      <Footer />
    </div>
  );
}
