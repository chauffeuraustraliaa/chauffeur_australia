import { Reveal } from "@/components/reveal";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/services/Breadcrumbs";

export function LegalHero({
  title,
  subtitle,
  breadcrumbItems,
}: {
  title: string;
  subtitle: string;
  breadcrumbItems: BreadcrumbItem[];
}) {
  return (
    <section className="relative overflow-hidden bg-brand-navy-deep pt-32 pb-20 text-white">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--brand-gold),transparent_88%),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(160deg,var(--brand-navy)_0%,var(--brand-navy-deep)_100%)]" />
      </div>
      <div className="relative mx-auto max-w-[1280px] px-6">
        <Reveal>
          <Breadcrumbs items={breadcrumbItems} variant="dark" />
          <h1 className="font-heading mt-5 max-w-2xl text-[36px] leading-[1.08] font-bold tracking-tight uppercase sm:text-[48px]">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-[18px] leading-8 text-white/70">
            {subtitle}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
