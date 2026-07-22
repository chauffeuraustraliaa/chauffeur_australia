import { Star } from "lucide-react";
import Image from "next/image";

import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/services/Breadcrumbs";

export function ServiceHero({
  badge = "Premium Chauffeur Service",
  title,
  description,
  primaryCta = "Get Instant Quote",
  secondaryCta = "Book Your Chauffeur",
  image,
  imageAlt,
  breadcrumbItems,
}: {
  badge?: string;
  title: string;
  description: string;
  primaryCta?: string;
  secondaryCta?: string;
  image: string;
  imageAlt: string;
  breadcrumbItems?: BreadcrumbItem[];
}) {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-brand-navy-deep text-white">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,15,23,0.95)_15%,rgba(7,15,23,0.75)_50%,rgba(7,15,23,0.4)_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/90 via-transparent to-transparent"
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-16 px-6 pt-32 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24">
        <Reveal>
          {breadcrumbItems && (
            <Breadcrumbs items={breadcrumbItems} variant="dark" />
          )}
          <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-brand-gold/30 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-brand-gold-light uppercase">
            <span className="flex text-brand-gold" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3 fill-current" />
              ))}
            </span>
            {badge}
          </span>
          <h1 className="font-heading mt-5 max-w-2xl text-[36px] leading-[1.08] font-bold tracking-tight uppercase sm:text-[48px] lg:text-[56px]">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-[18px] leading-8 text-white/70">
            {description}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button
              render={<a href="#quote-form" />}
              nativeButton={false}
              size="lg"
              className="h-13 rounded-full bg-brand-gold px-8 text-base font-semibold text-brand-navy-deep hover:bg-brand-gold-hover"
            >
              {primaryCta}
            </Button>
            <Button
              render={<a href="#quote" />}
              nativeButton={false}
              variant="outline"
              size="lg"
              className="h-13 rounded-full border-white/30 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              {secondaryCta}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}
