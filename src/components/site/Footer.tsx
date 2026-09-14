import { Facebook, Instagram, Twitter } from "lucide-react";
import { useT } from "@/i18n";

const hrefs = ["#products", "#services", "#about", "#careers", "#contact"];

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "X" },
  { icon: Instagram, label: "Instagram" },
];

export function Footer() {
  const t = useT();

  return (
    <footer id="contact" className="relative py-16">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:px-10">
        <div className="min-w-0">
          <p className="text-base font-semibold tracking-[0.24em] text-foreground">
            NOVARKS
          </p>
          <p className="mt-2 text-xs text-muted-foreground">{t.footer.tagline}</p>
        </div>

        <div className="grid gap-8 lg:justify-items-end">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {t.footer.links.map((label, i) => (
              <li key={label}>
                <a
                  href={hrefs[i]}
                  className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-4 lg:justify-end">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href="#contact"
                  aria-label={social.label}
                  className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                >
                  <social.icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-[11px] leading-relaxed text-muted-foreground lg:text-right">
            {t.footer.copy}
            <span className="ml-2">{t.footer.location}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
