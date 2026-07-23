import { ArrowRight, PlaneTakeoff } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export type RouteItem = {
  route: string;
  duration: string;
};

export function RouteCards({
  eyebrow,
  title,
  intro,
  routes,
  ctaHref = "/get-a-quote",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  routes: RouteItem[];
  ctaHref?: string;
}) {
  return (
    <section id="routes" className="bg-brand-ivory py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="block text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
              {eyebrow}
            </span>
            <h2 className="font-heading mt-3 text-[32px] font-bold tracking-tight text-brand-ink uppercase sm:text-[42px]">
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
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {routes.map(({ route, duration }) => {
              const [origin, destination] = route.split(" → ");
              return (
                <div
                  key={route}
                  className="group flex items-center justify-between gap-4 rounded-[20px] border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-navy/5 text-brand-navy group-hover:bg-brand-gold/10 group-hover:text-brand-gold">
                      <PlaneTakeoff className="size-5" aria-hidden />
                    </div>
                    <div>
                      <p className="font-heading text-base font-semibold text-brand-ink">
                        {origin}
                      </p>
                      {destination && (
                        <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                          <ArrowRight className="size-3.5" aria-hidden />
                          {destination}
                        </p>
                      )}
                      <p className="mt-1 text-xs font-medium text-brand-gold-hover">
                        ~{duration} travel time
                      </p>
                    </div>
                  </div>
                  <Button
                    render={<a href={ctaHref} />}
                    nativeButton={false}
                    variant="outline"
                    size="sm"
                    className="rounded-full border-brand-navy/20 text-brand-navy hover:border-brand-gold hover:bg-brand-gold/10 hover:text-brand-navy"
                  >
                    Get Quote
                  </Button>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
