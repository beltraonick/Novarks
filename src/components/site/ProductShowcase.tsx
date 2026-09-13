import orbitopsShowcase from "@/assets/orbitops-showcase.png.asset.json";
import orbitopsLogo from "@/assets/orbitops-logo.png.asset.json";
import josephpayShowcase from "@/assets/josephpay-showcase.png.asset.json";
import josephpayLogo from "@/assets/josephpay-logo.png.asset.json";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Reveal";
import { TextLink } from "./ActionButton";

function OrbitMark() {
  return (
    <span className="block h-9 w-9 overflow-hidden rounded-xl border border-orbitops/20 shadow-sm">
      <img
        src={orbitopsLogo.url}
        alt="OrbitOps logo"
        loading="lazy"
        width={72}
        height={72}
        className="h-full w-full object-cover"
      />
    </span>
  );
}

function JosephMark() {
  return (
    <span className="block h-9 w-9 overflow-hidden rounded-xl border border-josephpay/20 shadow-sm">
      <img
        src={josephpayLogo.url}
        alt="JosephPay logo"
        loading="lazy"
        width={72}
        height={72}
        className="h-full w-full object-cover"
      />
    </span>
  );
}

export function ProductShowcase() {
  return (
    <section
      id="products"
      className="relative py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow">Built by Novarks</p>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <h2 className="text-3xl font-medium leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl">
              <Reveal delay={140} distance={18}>
                Real products.
              </Reveal>
              <Reveal delay={420} distance={18}>
                <span className="inline-block [text-shadow:0_0_60px_var(--accent)]">
                  Real impact.
                </span>
              </Reveal>
            </h2>
            <Reveal delay={620}>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
                We create and operate technology products designed to solve real
                business problems.
              </p>
            </Reveal>
          </div>
          <Reveal delay={700}>
            <TextLink href="#products" className="text-foreground/90">
              View all products
            </TextLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal delay={60} direction="left" distance={34}>
            <ProductCard
              name="OrbitOps"
              mark={<OrbitMark />}
              category="Workforce Management / Construction Operations"
              headline="Construction operations, connected."
              description="Manage employees, projects, tasks, time, payroll and field operations from one connected workspace."
              ctaLabel="Explore OrbitOps"
              href="#products"
              status="IN DEVELOPMENT"
              image={orbitopsShowcase.url}
              imageAlt="OrbitOps workforce management dashboard across laptop and mobile devices"
              theme="orbitops"
              className="h-full"
            />
          </Reveal>
          <Reveal delay={220} direction="right" distance={34}>
            <ProductCard
              name="JosephPay"
              mark={<JosephMark />}
              category="Business Growth Platform"
              headline="More customers. More organized. More growth."
              description="JosephPay helps businesses attract more customers, organize leads and sales, manage payments, track marketing performance and keep everything connected."
              ctaLabel="Explore JosephPay"
              href="#products"
              status="LIVE"
              image={josephpayShowcase.url}
              imageAlt="JosephPay business growth platform dashboard across laptop and mobile devices"
              theme="josephpay"
              className="h-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
