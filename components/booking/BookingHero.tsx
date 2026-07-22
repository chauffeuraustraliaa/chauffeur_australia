import { Banknote, Clock, ShieldCheck } from "lucide-react";
import Image from "next/image";

import { Breadcrumbs, type BreadcrumbItem } from "@/components/services/Breadcrumbs";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

const trustPoints = [
  { icon: ShieldCheck, label: "Professional, licensed chauffeurs" },
  { icon: Banknote, label: "Fixed pricing, no hidden fees" },
  { icon: Clock, label: "24/7 booking support" },
];

export function BookingHero({
  title,
  subtitle,
  breadcrumbItems,
}: {
  title: string;
  subtitle: string;
  breadcrumbItems: BreadcrumbItem[];
}) {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-brand-navy-deep text-white">
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt=""
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

      <div className="relative mx-auto w-full max-w-[1280px] px-6 pt-32 pb-20 lg:pt-24">
        <Reveal>
          <Breadcrumbs items={breadcrumbItems} variant="dark" />
          <h1 className="font-heading mt-5 max-w-2xl text-[36px] leading-[1.08] font-bold tracking-tight uppercase sm:text-[48px] lg:text-[56px]">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-[18px] leading-8 text-white/70">
            {subtitle}
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {trustPoints.map((point) => (
              <li key={point.label} className="flex items-center gap-2.5 text-sm">
                <point.icon className="size-4 shrink-0 text-brand-gold" aria-hidden />
                {point.label}
              </li>
            ))}
          </ul>
          <Button
            render={<a href="#booking-form" />}
            nativeButton={false}
            size="lg"
            className="h-13 mt-9 rounded-full bg-brand-gold px-8 text-base font-semibold text-brand-navy-deep hover:bg-brand-gold-hover"
          >
            Request Your Quote
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
