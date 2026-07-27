import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/cookies")({
  component: Cookies,
  head: () => ({
    meta: [
      { title: "Cookie Policy — Novark" },
      { name: "description", content: "How Novark uses cookies and similar technologies." },
      { property: "og:title", content: "Cookie Policy — Novark" },
      { property: "og:description", content: "How Novark uses cookies and similar technologies." },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
});

function Cookies() {
  return (
    <LegalPage eyebrow="Legal" title="Cookie Policy" updated="2024">
      <p>
        This Cookie Policy explains how Novark uses cookies and similar technologies on our website.
      </p>
      <h2>What are cookies</h2>
      <p>
        Cookies are small text files stored on your device that help websites function and collect
        information about how visitors use them.
      </p>
      <h2>How we use cookies</h2>
      <p>
        We use essential cookies to operate the site and, where enabled, analytics cookies to understand
        how visitors interact with our content so we can improve it.
      </p>
      <h2>Managing cookies</h2>
      <p>
        You can control and delete cookies through your browser settings. Restricting cookies may impact
        your experience on our site.
      </p>
      <h2>Contact</h2>
      <p>Questions about cookies: privacy@novarks.com.</p>
    </LegalPage>
  );
}
