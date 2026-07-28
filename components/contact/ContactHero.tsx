import { PhoneCall, Star } from "lucide-react";
import Image from "next/image";

import { Breadcrumbs, type BreadcrumbItem } from "@/components/services/Breadcrumbs";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function ContactHero({
  breadcrumbItems,
}: {
  breadcrumbItems?: BreadcrumbItem[];
}) {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-brand-navy-deep text-white">
      <div className="absolute inset-0">
        <Image
          src="/chauffeur2.webp"
          alt="Chauffeur opening the door of a luxury Mercedes vehicle"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,15,23,0.95)_15%,rgba(7,15,23,0.8)_50%,rgba(7,15,23,0.5)_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/90 via-transparent to-transparent"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-6 pt-32 pb-20 lg:pt-24">
        <Reveal className="max-w-2xl">
          {breadcrumbItems && <Breadcrumbs items={breadcrumbItems} variant="dark" />}
          <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-brand-gold/30 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-brand-gold-light uppercase">
            <span className="flex text-brand-gold" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3 fill-current" />
              ))}
            </span>
            Premium Chauffeur Service
          </span>
          <h1 className="font-heading mt-5 text-[36px] leading-[1.08] font-bold tracking-tight uppercase sm:text-[48px] lg:text-[56px]">
            Contact Chauffeur Australia
          </h1>
          <p className="mt-6 text-[18px] leading-8 text-white/70">
            Have a question or need a personalised chauffeur quote? Our team
            is available to help you book premium chauffeur services anywhere
            in Australia.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button
              render={<a href="/get-a-quote" />}
              nativeButton={false}
              size="lg"
              className="h-13 rounded-full bg-brand-gold px-8 text-base font-semibold text-brand-navy-deep hover:bg-brand-gold-hover"
            >
              Get Instant Quote
            </Button>
            <Button
              render={<a href="tel:+61480289196" />}
              nativeButton={false}
              variant="outline"
              size="lg"
              className="h-13 gap-2 rounded-full border-white/30 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              <PhoneCall className="size-4" aria-hidden />
              Call Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
