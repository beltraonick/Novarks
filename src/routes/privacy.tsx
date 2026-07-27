import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({
    meta: [
      { title: "Privacy Policy — Novark" },
      { name: "description", content: "How Novark collects, uses, and protects information." },
      { property: "og:title", content: "Privacy Policy — Novark" },
      { property: "og:description", content: "How Novark collects, uses, and protects information." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
});

function Privacy() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="2024">
      <p>
        Novark (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), operated by Nicollas Beltrão LLC,
        respects your privacy and is committed to protecting the personal information you share with us.
      </p>
      <h2>Information we collect</h2>
      <p>
        We collect information you voluntarily provide through contact and support forms, including your
        name, email, company, and message content. We also collect basic technical data such as IP
        address, browser type, and pages visited.
      </p>
      <h2>How we use information</h2>
      <p>
        Information is used to respond to inquiries, provide requested services, improve our website, and
        comply with legal obligations.
      </p>
      <h2>Sharing</h2>
      <p>
        We do not sell personal information. We share data only with trusted service providers who assist
        us in operating our website and delivering services, subject to confidentiality obligations.
      </p>
      <h2>Data retention</h2>
      <p>
        We retain personal data only as long as necessary to fulfill the purposes for which it was
        collected, or as required by law.
      </p>
      <h2>Your rights</h2>
      <p>
        You may request access, correction, or deletion of your personal data by contacting
        <a href="mailto:privacy@novarks.com"> privacy@novarks.com</a>.
      </p>
      <h2>Contact</h2>
      <p>
        Nicollas Beltrão LLC — North Carolina, United States. Email: privacy@novarks.com.
      </p>
    </LegalPage>
  );
}
