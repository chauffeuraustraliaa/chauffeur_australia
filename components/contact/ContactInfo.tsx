import { Clock, Mail, MessageCircleReply, Phone, ShieldAlert } from "lucide-react";

import { Reveal } from "@/components/reveal";

const contactCards = [
  {
    icon: Phone,
    title: "Phone",
    value: "+61 480 289 196",
    href: "tel:+61480289196",
  },
  {
    icon: Mail,
    title: "Email",
    value: "bookings@chauffeuraustralia.com",
    href: "mailto:bookings@chauffeuraustralia.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "24/7 — every day of the year",
  },
  {
    icon: ShieldAlert,
    title: "Emergency Support",
    value: "Available around the clock for active bookings",
  },
  {
    icon: MessageCircleReply,
    title: "Response Time",
    value: "Most enquiries answered within 30 minutes",
  },
];

export function ContactInfo() {
  return (
    <section className="bg-white py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <span className="block text-center text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
            Get In Touch
          </span>
          <h2 className="font-heading mt-3 text-center text-[32px] font-bold tracking-tight text-brand-ink uppercase sm:text-[42px]">
            Contact Information
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {contactCards.map((card) => {
              const content = (
                <>
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-navy/5 text-brand-navy transition-colors duration-300 group-hover:bg-brand-gold group-hover:text-brand-navy-deep">
                    <card.icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="font-heading mt-4 text-base font-semibold text-brand-ink">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 break-words text-muted-foreground">
                    {card.value}
                  </p>
                </>
              );
              const className =
                "group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold hover:shadow-lg";

              return card.href ? (
                <a key={card.title} href={card.href} className={className}>
                  {content}
                </a>
              ) : (
                <div key={card.title} className={className}>
                  {content}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
