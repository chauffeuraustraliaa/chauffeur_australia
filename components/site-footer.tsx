import { ArrowUp, CarTaxiFront, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { label: "City Coverage", href: "#cities" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Popular Routes", href: "#routes" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const serviceLinks = [
  { label: "Airport Transfers", href: "#services" },
  { label: "Private Taxi Transfers", href: "#services" },
  { label: "Corporate Transfers", href: "#services" },
  { label: "Hotel Transfers", href: "#services" },
  { label: "Event Transfers", href: "#services" },
];

const contactDetails = [
  { icon: Phone, label: "24/7 Booking & Customer Support" },
  { icon: Mail, label: "Fast Online Quotes, No Obligation" },
  { icon: MapPin, label: "Servicing All Major Australian Cities" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    path: "M13.5 21v-7.5h2.5l.5-3H13.5V8.5c0-.9.25-1.5 1.55-1.5H16.5V4.35C16.19 4.31 15.14 4.2 13.92 4.2c-2.55 0-4.3 1.55-4.3 4.4v2h-2.5v3h2.5V21h3.38Z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2ZM12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm4.9-3.9a.85.85 0 1 1 0 1.7.85.85 0 0 1 0-1.7ZM12 5.7c-1.75 0-1.96.007-2.65.038-.68.032-1.15.14-1.55.3-.42.163-.78.38-1.13.73-.35.35-.567.71-.73 1.13-.16.4-.268.87-.3 1.55C5.607 10.14 5.6 10.35 5.6 12s.007 1.86.038 2.55c.032.68.14 1.15.3 1.55.163.42.38.78.73 1.13.35.35.71.567 1.13.73.4.16.87.268 1.55.3.69.031.9.038 2.65.038s1.96-.007 2.65-.038c.68-.032 1.15-.14 1.55-.3.42-.163.78-.38 1.13-.73.35-.35.567-.71.73-1.13.16-.4.268-.87.3-1.55.031-.69.038-.9.038-2.55s-.007-1.86-.038-2.55c-.032-.68-.14-1.15-.3-1.55a3.04 3.04 0 0 0-.73-1.13 3.04 3.04 0 0 0-1.13-.73c-.4-.16-.87-.268-1.55-.3C13.96 5.707 13.75 5.7 12 5.7Zm0-1.6c1.78 0 2 .007 2.7.04.7.032 1.32.16 1.87.38.57.223 1.05.53 1.53 1.01.48.48.787.96 1.01 1.53.22.55.348 1.17.38 1.87.033.7.04.92.04 2.7s-.007 2-.04 2.7c-.032.7-.16 1.32-.38 1.87-.223.57-.53 1.05-1.01 1.53-.48.48-.96.787-1.53 1.01-.55.22-1.17.348-1.87.38-.7.033-.92.04-2.7.04s-2-.007-2.7-.04c-.7-.032-1.32-.16-1.87-.38a4.6 4.6 0 0 1-1.53-1.01 4.6 4.6 0 0 1-1.01-1.53c-.22-.55-.348-1.17-.38-1.87C4.007 14 4 13.78 4 12s.007-2 .04-2.7c.032-.7.16-1.32.38-1.87.223-.57.53-1.05 1.01-1.53.48-.48.96-.787 1.53-1.01.55-.22 1.17-.348 1.87-.38.7-.033.92-.04 2.7-.04Z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M6.94 8.5H4.56V19H6.94V8.5ZM5.75 7.4a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8ZM19.44 19h-2.38v-5.34c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V19H10.87V8.5h2.28v1.43h.03c.32-.6 1.1-1.24 2.27-1.24 2.43 0 2.99 1.6 2.99 3.68V19Z",
  },
  {
    label: "X",
    href: "#",
    path: "M13.53 10.62 19.14 4h-1.33l-4.87 5.75L9.05 4H4l5.88 8.56L4 19.5h1.33l5.15-6.08 4.11 6.08h5.05l-6.11-8.88Zm-1.82 2.15-.6-.85L6.4 4.98h2.05l3.81 5.45.6.85 4.96 7.09h-2.05l-4.06-5.6Z",
  },
];

export function SiteFooter() {
  return (
    <footer className="relative bg-brand-navy-deep pt-16 text-white/70">
      <a
        href="#top"
        aria-label="Back to top"
        className="absolute -top-6 right-6 flex size-12 items-center justify-center rounded-full bg-brand-gold text-brand-navy-deep shadow-lg transition-colors duration-300 hover:bg-brand-gold-hover sm:right-10"
      >
        <ArrowUp className="size-5" aria-hidden />
      </a>

      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <a href="#top" className="flex items-center gap-2 text-white">
              <CarTaxiFront className="size-6 text-brand-gold" aria-hidden />
              <span className="font-heading text-lg font-bold tracking-tight uppercase">
                Australia Taxi Service
              </span>
            </a>
            <p className="max-w-xs text-sm leading-6">
              Caring about your journey with professional drivers and
              reliable, comfortable vehicles across Australia.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full border border-brand-gold/30 text-brand-gold transition-colors duration-300 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-navy-deep"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-4"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold tracking-wide text-white uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-brand-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold tracking-wide text-white uppercase">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-brand-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold tracking-wide text-white uppercase">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              {contactDetails.map((item) => (
                <li key={item.label} className="flex items-start gap-2.5">
                  <item.icon
                    className="mt-0.5 size-4 shrink-0 text-brand-gold"
                    aria-hidden
                  />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 py-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Australia Taxi Service. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-brand-gold">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-brand-gold">
              Terms Of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
