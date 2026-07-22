import {
  Anchor,
  Banknote,
  Briefcase,
  Building2,
  Car,
  Handshake,
  Navigation,
  PlaneLanding,
  ShieldCheck,
} from "lucide-react";
import type { Metadata } from "next";

import { BookingFormSection } from "@/components/booking/BookingFormSection";
import { BookingHero } from "@/components/booking/BookingHero";
import { BookingSteps } from "@/components/services/BookingSteps";
import { Features } from "@/components/services/Features";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceOfferings } from "@/components/services/ServiceOfferings";
import { Testimonials } from "@/components/services/Testimonials";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.australiataxiservice.com.au";
const pageTitle = "Book Your Chauffeur | Chauffeur Australia";
const pageDescription =
  "Request a quote for premium chauffeur services, airport transfers, hotel transfers and corporate travel across Australia.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/get-a-quote" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/get-a-quote",
    siteName: "Australia Taxi Service",
    title: pageTitle,
    description: pageDescription,
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription },
};

const whyBookFeatures = [
  { number: "01", icon: ShieldCheck, title: "Professional Chauffeurs", description: "Licensed, experienced drivers trained to prioritise safety and comfort." },
  { number: "02", icon: Car, title: "Luxury Vehicles", description: "A premium, immaculately presented fleet for every journey." },
  { number: "03", icon: Banknote, title: "Fixed Pricing", description: "Transparent, agreed pricing with no hidden fees or surprises." },
  { number: "04", icon: Handshake, title: "24/7 Support", description: "Our team is available around the clock for bookings and questions." },
  { number: "05", icon: PlaneLanding, title: "Flight Monitoring", description: "Airport pickups adjusted automatically for early or delayed flights." },
];

const bookingProcessSteps = [
  { number: "01", title: "Request Quote", description: "Share your trip details through the form above for a fixed-price quote." },
  { number: "02", title: "Receive Price", description: "We'll send you a fixed, obligation-free price for your journey." },
  { number: "03", title: "Confirm Booking", description: "Confirm your booking and receive your chauffeur and vehicle details." },
  { number: "04", title: "Enjoy Journey", description: "Relax in a premium vehicle with a professional chauffeur." },
];

const popularServices = [
  { icon: PlaneLanding, title: "Airport Transfers", description: "Reliable flight-tracked pickups and drop-offs across major airports.", href: "/airport-transfers" },
  { icon: Navigation, title: "City Transfers", description: "Private, door-to-door transfers around the city for any occasion.", href: "/city-transfers" },
  { icon: Building2, title: "Hotel Transfers", description: "Seamless transfers to and from hotels across Australia.", href: "/hotel-transfers" },
  { icon: Briefcase, title: "Corporate Chauffeur", description: "Professional transport for business travel and client transfers.", href: "/corporate-chauffeur" },
  { icon: Anchor, title: "Private Chauffeur", description: "Personal chauffeur hire by the hour, day or single trip.", href: "/private-chauffeur" },
];

const testimonials = [
  { name: "Rebecca L., Sydney", quote: "Filled out the quote form and had a fixed price back within the hour. Booking couldn't have been easier." },
  { name: "David K., Melbourne", quote: "Booked an airport transfer through the form for an early flight. Chauffeur was there waiting, exactly as arranged." },
  { name: "Sarah T., Brisbane", quote: "The multi-step form made it simple to specify everything we needed, right down to child seats. Great experience end to end." },
];

const faqs = [
  { question: "How quickly will I receive a quote?", answer: "Most quote requests are answered within one business hour. During business hours, it's often much faster." },
  { question: "Can I book last minute?", answer: "Yes, we accommodate short-notice and same-day bookings where a chauffeur is available, alongside advance bookings." },
  { question: "Do you provide child seats?", answer: "Yes, child and booster seats are available on request. Let us know your requirements in the special requests field." },
  { question: "Can I modify my booking?", answer: "Yes, you can request changes to your booking at any time before your trip by contacting our support team." },
  { question: "Do you monitor flights?", answer: "Yes, for airport transfers we track your flight and automatically adjust your pickup time for early or delayed arrivals." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Get A Quote", item: `${siteUrl}/get-a-quote` },
  ],
};

export default function GetAQuotePage() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />

      <BookingHero
        title="Book Your Chauffeur"
        subtitle="Receive a personalised quote for premium chauffeur services anywhere in Australia."
        breadcrumbItems={[{ label: "Get A Quote", href: "/get-a-quote" }]}
      />

      <BookingFormSection />

      <Features
        eyebrow="Our Advantage"
        title="Why Book With Chauffeur Australia"
        items={whyBookFeatures}
        tone="ivory"
      />

      <BookingSteps
        eyebrow="Simple Process"
        title="Booking Process"
        intro="From quote to journey in four simple steps, with a fixed price confirmed before you travel."
        steps={bookingProcessSteps}
      />

      <ServiceOfferings
        eyebrow="Explore More"
        title="Popular Services"
        items={popularServices}
        tone="ivory"
      />

      <Testimonials
        eyebrow="Testimonials"
        title="Customer Reviews"
        testimonials={testimonials}
      />

      <ServiceFAQ
        eyebrow="Questions & Answers"
        title="Frequently Asked Questions"
        faqs={faqs}
        tone="ivory"
      />

      <ServiceCTA
        title="Ready To Travel In Comfort?"
        description="Request your fixed-price quote and travel with a professional chauffeur."
        buttonLabel="Request Your Chauffeur"
        buttonHref="#booking-form"
        tone="navy"
      />
    </main>
  );
}
