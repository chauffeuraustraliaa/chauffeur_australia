import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/reveal";

export type ServiceDetailItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function ServiceDetailList({
  eyebrow,
  title,
  intro,
  items,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  items: ServiceDetailItem[];
}) {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="block text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
              {eyebrow}
            </span>
            <h2 className="font-heading mt-3 text-[28px] font-bold tracking-tight text-brand-ink uppercase sm:text-[36px]">
              {title}
            </h2>
            {intro && (
              <p className="mt-6 text-[17px] leading-8 text-muted-foreground">
                {intro}
              </p>
            )}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {items.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-[20px] border border-black/5 bg-white p-6 shadow-[0_8px_16px_-8px_rgba(11,42,58,0.15),0_30px_60px_-24px_rgba(11,42,58,0.35)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-navy/5 text-brand-navy">
                  <item.icon className="size-6" aria-hidden />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-brand-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
