import type { ReactNode } from "react";
import { SiteLayout, PageHeader } from "./layout";

export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <SiteLayout>
      <PageHeader eyebrow={eyebrow} title={title} description={`Last updated: ${updated}`} />
      <article className="mx-auto max-w-3xl px-6 pb-24 lg:px-10">
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-sm leading-relaxed text-muted-foreground [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_p]:leading-relaxed [&_a]:text-[color:var(--gold)] [&_a]:no-underline">
          {children}
        </div>
      </article>
    </SiteLayout>
  );
}
