import { CalendarDays, MapPin, Navigation, Search, Users } from "lucide-react";

import { Button } from "@/components/ui/button";

export function QuoteForm({
  title = "Get Your Fixed-Price Quote",
  formId = "quote-form",
}: {
  title?: string;
  formId?: string;
}) {
  return (
    <form
      id={formId}
      action="#quote"
      className="mx-auto w-full max-w-md scroll-mt-28 rounded-[20px] bg-white p-6 text-brand-ink shadow-2xl sm:p-8"
    >
      <h2 className="font-heading text-lg font-bold tracking-tight uppercase">
        {title}
      </h2>
      <div className="mt-5 flex flex-col gap-4">
        <label className="flex flex-col gap-1.5">
          <span className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <MapPin className="size-3.5 text-brand-gold" aria-hidden />
            Pickup
          </span>
          <input
            type="text"
            name="pickup"
            placeholder="Airport, hotel or address"
            className="rounded-lg border border-border bg-brand-cream px-3 py-2.5 text-sm outline-none focus:border-brand-gold"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Navigation className="size-3.5 text-brand-gold" aria-hidden />
            Dropoff
          </span>
          <input
            type="text"
            name="dropoff"
            placeholder="Where are you headed?"
            className="rounded-lg border border-border bg-brand-cream px-3 py-2.5 text-sm outline-none focus:border-brand-gold"
          />
        </label>
        <div className="grid grid-cols-2 gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <CalendarDays className="size-3.5 text-brand-gold" aria-hidden />
              Date
            </span>
            <input
              type="date"
              name="date"
              className="rounded-lg border border-border bg-brand-cream px-3 py-2.5 text-sm outline-none focus:border-brand-gold"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Users className="size-3.5 text-brand-gold" aria-hidden />
              Passengers
            </span>
            <select
              name="passengers"
              defaultValue="1"
              className="rounded-lg border border-border bg-brand-cream px-3 py-2.5 text-sm outline-none focus:border-brand-gold"
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1} {i === 0 ? "Passenger" : "Passengers"}
                </option>
              ))}
            </select>
          </label>
        </div>
        <Button
          type="submit"
          size="lg"
          className="h-13 mt-1 w-full gap-2 rounded-full bg-brand-gold text-base font-semibold text-brand-navy-deep hover:bg-brand-gold-hover"
        >
          <Search className="size-4" aria-hidden />
          Get Instant Quote
        </Button>
      </div>
    </form>
  );
}
