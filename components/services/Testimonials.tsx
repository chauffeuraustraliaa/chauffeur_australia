import { Quote, Star } from "lucide-react";

import { Reveal } from "@/components/reveal";

export type TestimonialItem = {
  name: string;
  quote: string;
};

export function Testimonials({
  eyebrow,
  title,
  subtitle = "Rated by travellers on Google Reviews",
  testimonials,
  tone = "white",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  testimonials: TestimonialItem[];
  tone?: "white" | "ivory";
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
          <div className="mt-4 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <div className="flex text-brand-gold" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <span>{subtitle}</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {testimonials.map((testimonial) => {
              const initials = testimonial.name
                .split(" ")
                .map((word) => word[0])
                .slice(0, 2)
                .join("")
                .toUpperCase();
              return (
                <figure
                  key={testimonial.name}
                  className="flex flex-col gap-5 rounded-[20px] border border-border bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex size-11 items-center justify-center rounded-full bg-brand-navy text-sm font-semibold text-brand-gold">
                        {initials}
                      </div>
                      <figcaption className="text-sm font-semibold text-brand-ink">
                        {testimonial.name}
                      </figcaption>
                    </div>
                    <Quote
                      className="size-6 shrink-0 text-brand-gold/40"
                      aria-hidden
                    />
                  </div>
                  <div className="flex text-brand-gold" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-sm leading-6 text-muted-foreground">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                </figure>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
