import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/layout";
import { ContactForm, InfoCard } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Novark" },
      {
        name: "description",
        content:
          "Contact Novark to start a project or discuss a partnership. Based in North Carolina, USA.",
      },
      { property: "og:title", content: "Contact — Novark" },
      {
        property: "og:description",
        content: "Start a project or discuss a partnership with Novark.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about what you're building."
        description="Share a few details about your project. We respond within one business day."
      />
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <div className="space-y-4">
            <InfoCard title="Company">
              Novark — operated by Nicollas Beltrão LLC.
              <br />
              Founded 2024.
            </InfoCard>
            <InfoCard title="Location">North Carolina, United States</InfoCard>
            <InfoCard title="General">hello@novarks.com</InfoCard>
            <InfoCard title="Support">support@novarks.com</InfoCard>
            <InfoCard title="Response Time">
              We reply to every inquiry within one business day.
            </InfoCard>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
