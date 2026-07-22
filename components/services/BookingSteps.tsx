import { Reveal } from "@/components/reveal";

export type BookingStep = {
  number: string;
  title: string;
  description: string;
};

export function BookingSteps({
  eyebrow,
  title,
  intro,
  steps,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  steps: BookingStep[];
}) {
  return (
    <section className="bg-white py-[120px]">
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
          <ol className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div
              aria-hidden
              className="absolute top-7 right-0 left-0 hidden h-px bg-border lg:block"
            />
            {steps.map((step) => (
              <li key={step.title} className="group relative flex flex-col">
                <div className="relative z-10 flex size-14 items-center justify-center rounded-full bg-brand-navy text-brand-gold shadow-md transition-transform duration-300 group-hover:scale-110">
                  <span className="font-heading text-xl font-bold">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-heading mt-5 text-lg font-semibold text-brand-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
