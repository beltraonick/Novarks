import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Navbar } from "./site/Navbar";
import { Footer } from "./site/Footer";

interface LegalPageProps {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}

export function LegalPage({ eyebrow, title, updated, children }: LegalPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="mx-auto w-full max-w-2xl flex-1 px-6 pb-24 pt-36 lg:px-0">
        <div className="mb-10">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1 className="text-4xl font-medium tracking-[-0.03em] text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>
        </div>
        <div className="prose-legal">{children}</div>
        <div className="mt-14">
          <Link
            to="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to Novarks
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
