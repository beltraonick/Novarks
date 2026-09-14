const orbitopsShowcaseUrl = "/images/orbitops-showcase.png";
const orbitopsLogoUrl = "/images/orbitops-logo.jpeg";
const josephpayShowcaseUrl = "/images/josephpay-showcase.png";
const josephpayLogoUrl = "/images/josephpay-logo.png";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Reveal";
import { TextLink } from "./ActionButton";
import { useT } from "@/i18n";

function OrbitMark() {
  return (
    <span className="block h-9 w-9 overflow-hidden rounded-xl border border-orbitops/20 shadow-sm">
      <img
        src={orbitopsLogoUrl}
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
        src={josephpayLogoUrl}
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
  const t = useT();

  return (
    <section
      id="products"
      className="relative py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow">{t.products.eyebrow}</p>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <h2 className="text-3xl font-medium leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl">
              <Reveal delay={140} distance={18}>
                {t.products.headline1}
              </Reveal>
              <Reveal delay={420} distance={18}>
                <span className="inline-block [text-shadow:0_0_60px_var(--accent)]">
                  {t.products.headline2}
                </span>
              </Reveal>
            </h2>
            <Reveal delay={620}>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
                {t.products.sub}
              </p>
            </Reveal>
          </div>
          <Reveal delay={700}>
            <TextLink href="#products" className="text-foreground/90">
              {t.products.viewAll}
            </TextLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal delay={60} direction="left" distance={34}>
            <ProductCard
              name="JosephPay"
              mark={<JosephMark />}
              category={t.products.josephpay.category}
              headline={t.products.josephpay.headline}
              description={t.products.josephpay.description}
              ctaLabel={t.products.josephpay.ctaLabel}
              href="#products"
              status={t.products.josephpay.status}
              image={josephpayShowcaseUrl}
              imageAlt="JosephPay business growth platform dashboard across laptop and mobile devices"
              theme="josephpay"
              className="h-full"
            />
          </Reveal>
          <Reveal delay={220} direction="right" distance={34}>
            <ProductCard
              name="OrbitOps"
              mark={<OrbitMark />}
              category={t.products.orbitops.category}
              headline={t.products.orbitops.headline}
              description={t.products.orbitops.description}
              ctaLabel={t.products.orbitops.ctaLabel}
              href="#products"
              status={t.products.orbitops.status}
              image={orbitopsShowcaseUrl}
              imageAlt="OrbitOps workforce management dashboard across laptop and mobile devices"
              theme="orbitops"
              className="h-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
