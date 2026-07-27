import { Link } from "@tanstack/react-router";
import logo from "@/assets/novark-logo.png.asset.json";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-[color:var(--background)]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3">
              <img src={logo.url} alt="Novark" className="h-9 w-9 object-contain" />
              <span className="text-sm font-medium tracking-[0.28em]">NOVARK</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Premium software, AI, and business platforms — engineered for long-term growth.
            </p>
            <p className="mt-6 text-xs text-muted-foreground/80">
              Nicollas Beltrão LLC
              <br />
              North Carolina, United States
              <br />
              Founded 2024
            </p>
          </div>

          <FooterCol
            title="Navigation"
            items={[
              { to: "/", label: "Home" },
              { to: "/solutions", label: "Solutions" },
              { to: "/projects", label: "Projects" },
              { to: "/about", label: "About" },
            ]}
          />
          <FooterCol
            title="Support"
            items={[
              { to: "/support", label: "Support Portal" },
              { to: "/support", label: "Knowledge Base" },
              { to: "/support", label: "Submit Request" },
              { to: "/contact", label: "Contact" },
            ]}
          />
          <FooterCol
            title="Legal"
            items={[
              { to: "/privacy", label: "Privacy Policy" },
              { to: "/terms", label: "Terms of Service" },
              { to: "/cookies", label: "Cookie Policy" },
            ]}
          />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>
            © 2024–{year} Novark. Operated by Nicollas Beltrão LLC. All rights reserved.
          </p>
          <p className="tracking-widest text-muted-foreground/70">NOVARKS.COM</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { to: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold tracking-[0.22em] text-foreground/80">
        {title.toUpperCase()}
      </h4>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i.label}>
            <Link
              to={i.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
