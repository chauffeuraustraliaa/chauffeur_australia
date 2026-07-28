import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/reveal";

// Placeholder location — replace with the registered business address once
// available, and update the embed query below to match.
const BUSINESS_LOCATION = "Melbourne VIC, Australia";
const MAP_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
  BUSINESS_LOCATION
)}&t=&z=11&ie=UTF8&iwloc=&output=embed`;

export function GoogleMap() {
  return (
    <section className="bg-white py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <span className="block text-center text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
            Find Us
          </span>
          <h2 className="font-heading mt-3 text-center text-[32px] font-bold tracking-tight text-brand-ink uppercase sm:text-[42px]">
            Our Service Location
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="overflow-hidden rounded-[24px] border border-border shadow-sm">
              <iframe
                title="Chauffeur Australia service location"
                src={MAP_EMBED_SRC}
                width="100%"
                height="100%"
                loading="lazy"
                className="min-h-[360px] w-full border-0"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 rounded-[24px] border border-border bg-brand-cream p-8 shadow-sm">
              <div>
                <h3 className="font-heading text-lg font-semibold text-brand-ink">
                  Chauffeur Australia
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Servicing Melbourne, Sydney, Brisbane, Perth, Adelaide,
                  Canberra, the Gold Coast and surrounding regions.
                </p>
              </div>
              <div className="flex flex-col gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand-gold" aria-hidden />
                  <span className="text-brand-ink">{BUSINESS_LOCATION}</span>
                </div>
                <a href="tel:+61480289196" className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-brand-gold" aria-hidden />
                  <span className="text-brand-ink">+61 480 289 196</span>
                </a>
                <a
                  href="mailto:bookings@chauffeuraustralia.com"
                  className="flex items-start gap-3"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-brand-gold" aria-hidden />
                  <span className="text-brand-ink">bookings@chauffeuraustralia.com</span>
                </a>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-brand-gold" aria-hidden />
                  <span className="text-brand-ink">Available 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
