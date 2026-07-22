import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/reveal";

export type FleetItem = {
  icon: LucideIcon;
  name: string;
  description: string;
};

export function FleetShowcase({
  eyebrow,
  title,
  intro,
  vehicles,
  tone = "ivory",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  vehicles: FleetItem[];
  tone?: "ivory" | "white";
}) {
  return (
    <section className={`${tone === "ivory" ? "bg-brand-ivory" : "bg-white"} py-20`}>
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
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.name}
                className="flex flex-col gap-3 rounded-[20px] border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold hover:shadow-lg"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-navy/5 text-brand-navy">
                  <vehicle.icon className="size-6" aria-hidden />
                </div>
                <h3 className="font-heading text-lg font-semibold text-brand-ink">
                  {vehicle.name}
                </h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {vehicle.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
