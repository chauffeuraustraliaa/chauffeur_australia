import { BookingForm } from "@/components/booking/BookingForm";
import { Reveal } from "@/components/reveal";

export function BookingFormSection() {
  return (
    <section id="booking-form" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <div className="text-center">
            <span className="block text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
              Get Started
            </span>
            <h2 className="font-heading mt-3 text-[32px] font-bold tracking-tight text-brand-ink uppercase sm:text-[42px]">
              Request Your Quote
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-muted-foreground">
              Fixed pricing, confirmed before you travel. It only takes a
              couple of minutes.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 w-full rounded-[20px] border border-border bg-white p-6 shadow-[0_8px_16px_-8px_rgba(11,42,58,0.15),0_30px_60px_-24px_rgba(11,42,58,0.35)] sm:p-8">
            <BookingForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
