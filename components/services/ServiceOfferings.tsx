import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";

export type OfferingItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
};

export function ServiceOfferings({
  eyebrow,
  title,
  items,
  ctaHref = "/get-a-quote",
  tone = "white",
}: {
  eyebrow: string;
  title: string;
  items: OfferingItem[];
  ctaHref?: string;
  tone?: "white" | "ivory";
}) {
  return (
    <section className={`${tone === "ivory" ? "bg-brand-ivory" : "bg-white"} py-[120px]`}>
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <Reveal>
          <span className="block text-center text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
            {eyebrow}
          </span>
          <h2 className="font-heading mt-3 text-center text-[32px] font-bold tracking-tight text-brand-ink uppercase sm:text-[42px]">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => {
              const href = item.href ?? ctaHref;
              const isInternal = href.startsWith("/");
              return (
                <div
                  key={item.title}
                  className="group flex flex-col gap-4 rounded-[20px] border-2 border-brand-navy bg-brand-navy p-8 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-gold hover:shadow-xl"
                >
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-brand-gold transition-colors duration-300 group-hover:bg-brand-gold group-hover:text-brand-navy-deep">
                    <item.icon className="size-7" aria-hidden />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-white/60">
                    {item.description}
                  </p>
                  {isInternal ? (
                    <Link
                      href={href}
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-white/85 transition-colors group-hover:text-brand-gold"
                    >
                      Learn More
                      <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-1"
                        aria-hidden
                      />
                    </Link>
                  ) : (
                    <a
                      href={href}
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-white/85 transition-colors group-hover:text-brand-gold"
                    >
                      Learn More
                      <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-1"
                        aria-hidden
                      />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
