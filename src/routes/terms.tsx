import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () => ({
    meta: [
      { title: "Terms of Service — Novark" },
      { name: "description", content: "The terms that govern use of Novark's website and services." },
      { property: "og:title", content: "Terms of Service — Novark" },
      { property: "og:description", content: "The terms that govern use of Novark's website and services." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
});

function Terms() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Service" updated="2024">
      <p>
        These Terms of Service govern your access to and use of the Novark website and services, provided
        by Nicollas Beltrão LLC. By using our site, you agree to these terms.
      </p>
      <h2>Use of services</h2>
      <p>
        You agree to use our website and services only for lawful purposes and in a manner that does not
        infringe on the rights of others or restrict their use of the services.
      </p>
      <h2>Intellectual property</h2>
      <p>
        All content on this website — including text, graphics, logos, and software — is the property of
        Novark or its licensors and is protected by applicable intellectual property laws.
      </p>
      <h2>Client engagements</h2>
      <p>
        Specific engagements are governed by separate written agreements, which prevail over these terms
        in case of conflict.
      </p>
      <h2>Disclaimer</h2>
      <p>
        The website is provided &ldquo;as is&rdquo; without warranties of any kind. Novark does not
        warrant that the website will be uninterrupted or error-free.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Novark shall not be liable for any indirect, incidental,
        special, or consequential damages arising from use of the website.
      </p>
      <h2>Contact</h2>
      <p>Questions about these terms: legal@novarks.com.</p>
    </LegalPage>
  );
}
