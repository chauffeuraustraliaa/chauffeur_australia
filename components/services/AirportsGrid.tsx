import { ArrowUpRight } from "lucide-react";

import { CitySkyline } from "@/components/city-skyline";
import { Reveal } from "@/components/reveal";

export type AirportItem = {
  name: string;
  code: string;
  description?: string;
};

export function AirportsGrid({
  eyebrow,
  title,
  description,
  items,
  ctaHref = "/get-a-quote",
  tone = "ivory",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  items: AirportItem[];
  ctaHref?: string;
  tone?: "ivory" | "white";
}) {
  return (
    <section className={`${tone === "ivory" ? "bg-brand-ivory" : "bg-white"} py-[120px]`}>
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <span className="block text-center text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
            {eyebrow}
          </span>
          <h2 className="font-heading mt-3 text-center text-[32px] font-bold tracking-tight text-brand-ink uppercase sm:text-[42px]">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-center text-[18px] text-muted-foreground">
              {description}
            </p>
          )}
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((airport, index) => (
              <div
                key={airport.name}
                className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-[20px] p-6 shadow-lg"
              >
                <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-110">
                  <CitySkyline seed={index * 13 + 5} />
                </div>
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                />
                <div className="relative">
                  <span className="text-xs font-semibold tracking-widest text-brand-gold-light uppercase">
                    {airport.code}
                  </span>
                  <h3 className="font-heading mt-1 text-2xl font-semibold text-white">
                    {airport.name}
                  </h3>
                  {airport.description && (
                    <p className="mt-1.5 max-w-xs text-sm leading-5 text-white/70">
                      {airport.description}
                    </p>
                  )}
                  <a
                    href={ctaHref}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white/85 transition-colors group-hover:text-brand-gold"
                  >
                    Explore
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
