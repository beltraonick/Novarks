import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { useT } from "@/i18n";
import { ActionButton } from "./ActionButton";

const hrefs = ["#products", "#services", "#about", "#careers"];

export function Navbar() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = t.nav.links.map((label, i) => ({ label, href: hrefs[i] }));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 lg:px-10">
        <div className="flex min-w-0 items-center gap-12">
          <a
            href="#top"
            className="shrink-0 text-lg font-semibold tracking-[0.24em] text-foreground"
          >
            NOVARKS
          </a>
          <ul className="hidden items-center gap-9 lg:flex">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <ActionButton
            href="#contact"
            variant="outline"
            className="hidden px-5 py-2.5 sm:inline-flex"
          >
            {t.nav.cta}
          </ActionButton>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-all duration-400 lg:hidden",
          open ? "max-h-96" : "max-h-0 border-transparent",
        )}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <ActionButton
              href="#contact"
              onClick={() => setOpen(false)}
              className="w-full"
            >
              {t.nav.cta}
            </ActionButton>
          </li>
        </ul>
      </div>
    </header>
  );
}
