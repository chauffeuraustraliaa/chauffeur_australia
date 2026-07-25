import {
  Banknote,
  Briefcase,
  Building2,
  Car,
  CarFront,
  Clock,
  Crown,
  Handshake,
  Heart,
  MapPin,
  Navigation,
  PlaneLanding,
  ShieldCheck,
  Ship,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

import { BookingSteps } from "@/components/services/BookingSteps";
import { ContentBlock } from "@/components/services/ContentBlock";
import { Features } from "@/components/services/Features";
import { FleetShowcase } from "@/components/services/FleetShowcase";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOfferings } from "@/components/services/ServiceOfferings";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.australiataxiservice.com.au";
const pageTitle = "Melbourne Airport To CBD Transfer | Fixed-Price Chauffeur Service";
const pageDescription =
  "Book a fixed-price chauffeur transfer from Melbourne Airport to the CBD. Flight-tracked pickups, luxury vehicles and a professional driver, available 24/7.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "Melbourne Airport To CBD Transfer",
    "Melbourne Airport To City",
    "Tullamarine To CBD",
    "Melbourne Airport Chauffeur CBD",
    "Airport Transfer Melbourne CBD",
  ],
  alternates: { canonical: "/melbourne-airport-to-cbd" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/melbourne-airport-to-cbd",
    siteName: "Australia Taxi Service",
    title: pageTitle,
    description: pageDescription,
    images: [{ url: "/melbourne.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/melbourne.jpeg"],
  },
};

const whyChooseFeatures = [
  { number: "01", icon: PlaneLanding, title: "Flight Tracking", description: "We monitor your flight so your pickup adjusts automatically for delays." },
  { number: "02", icon: ShieldCheck, title: "Professional Chauffeurs", description: "Licensed drivers who know the fastest CBD routes at any hour." },
  { number: "03", icon: Banknote, title: "Fixed Pricing", description: "One upfront price for the whole trip, agreed before you fly." },
  { number: "04", icon: Clock, title: "24/7 Availability", description: "Early arrivals or late-night landings — we're always on call." },
];

const fleetVehicles = [
  { icon: Car, name: "Executive Sedan", description: "A comfortable sedan suited to solo travellers and couples." },
  { icon: CarFront, name: "Luxury SUV", description: "Extra space for luggage, with a commanding ride into the city." },
  { icon: Users, name: "People Mover", description: "Generous capacity for groups and families travelling together." },
  { icon: Crown, name: "Luxury Vehicle", description: "Our flagship option for a premium arrival into the CBD." },
];

const bookingSteps = [
  { number: "01", title: "Request Quote", description: "Share your flight details for a fixed-price CBD transfer." },
  { number: "02", title: "Receive Fixed Price", description: "Get an upfront, obligation-free quote before you confirm." },
  { number: "03", title: "Confirm Booking", description: "Confirm your transfer and receive your chauffeur details." },
  { number: "04", title: "Enjoy Your Journey", description: "Your chauffeur meets you at arrivals and drives you straight into the CBD." },
];

const faqs = [
  { question: "How far is Melbourne Airport from the CBD?", answer: "Melbourne Airport is around 23km from the CBD, typically via the Tullamarine Freeway and CityLink." },
  { question: "How long does the transfer take?", answer: "A typical transfer takes 25-30 minutes outside peak traffic, and up to 45 minutes during busy periods." },
  { question: "How much does the transfer cost?", answer: "Pricing is a fixed, obligation-free quote based on your vehicle type and passenger numbers, agreed before you travel." },
  { question: "Do you track my flight for the pickup?", answer: "Yes, we monitor your flight number in real time so your pickup adjusts automatically for early arrivals or delays." },
  { question: "Can I book a return transfer to the airport?", answer: "Yes, you can book your airport pickup and CBD drop-off together, or arrange each leg separately." },
  { question: "Which CBD hotels and addresses do you cover?", answer: "We cover the entire CBD grid, including all major hotels, apartments and office addresses." },
  { question: "Can I request a specific vehicle for this transfer?", answer: "Yes, you can request an executive sedan, luxury SUV, people mover or our flagship luxury vehicle." },
  { question: "Is the price different for late-night or early-morning transfers?", answer: "No, your fixed price is agreed upfront regardless of the time of day." },
];

const relatedServices = [
  { icon: Crown, title: "Melbourne Chauffeur Service", description: "The full range of premium chauffeur services across Melbourne.", href: "/melbourne-chauffeur-service" },
  { icon: PlaneLanding, title: "Melbourne Airport Transfers", description: "Flight-tracked pickups and drop-offs at Melbourne Airport.", href: "/melbourne-airport-transfers" },
  { icon: Building2, title: "Melbourne City Transfers", description: "Door-to-door transfers around the CBD and inner suburbs.", href: "/melbourne-city-transfers" },
  { icon: MapPin, title: "Melbourne Hotel Transfers", description: "Seamless transfers between hotels, the airport and the city.", href: "/melbourne-hotel-transfers" },
  { icon: Briefcase, title: "Melbourne Corporate Chauffeur", description: "Reliable business travel for executives and visiting clients.", href: "/melbourne-corporate-chauffeur" },
  { icon: Heart, title: "Melbourne Wedding Chauffeur", description: "Elegant, on-time transport for your wedding day.", href: "/melbourne-wedding-chauffeur" },
  { icon: Ship, title: "Melbourne Cruise Transfers", description: "Transfers to and from Station Pier and Port Melbourne.", href: "/melbourne-cruise-transfers" },
  { icon: Navigation, title: "Airport → Southbank", description: "Dedicated route page with pricing and travel time.", href: "/melbourne-airport-to-southbank" },
  { icon: Navigation, title: "Airport → St Kilda", description: "Dedicated route page with pricing and travel time.", href: "/melbourne-airport-to-st-kilda" },
  { icon: Navigation, title: "Airport → Docklands", description: "Dedicated route page with pricing and travel time.", href: "/melbourne-airport-to-docklands" },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Melbourne Airport To CBD Transfer",
  name: "Melbourne Airport To CBD Transfer",
  description: pageDescription,
  provider: { "@type": "LocalBusiness", name: "Australia Taxi Service" },
  areaServed: { "@type": "City", name: "Melbourne" },
};

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
    { "@type": "ListItem", position: 2, name: "Melbourne Chauffeur Service", item: `${siteUrl}/melbourne-chauffeur-service` },
    { "@type": "ListItem", position: 3, name: "Melbourne Airport Transfers", item: `${siteUrl}/melbourne-airport-transfers` },
    { "@type": "ListItem", position: 4, name: "Airport To CBD", item: `${siteUrl}/melbourne-airport-to-cbd` },
  ],
};

export default function MelbourneAirportToCbdPage() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />

      <ServiceHero
        badge="Fixed-Price Route"
        title="Melbourne Airport To CBD Transfer"
        description="A flight-tracked, fixed-price chauffeur transfer from Melbourne Airport straight into the CBD — professional driver, luxury vehicle, available 24/7."
        primaryCta="Request A Quote"
        secondaryCta="Call Now"
        secondaryHref="tel:+61480289196"
        image="/melbourne.jpeg"
        imageAlt="Melbourne city skyline at dusk"
        breadcrumbItems={[
          { label: "Melbourne Chauffeur Service", href: "/melbourne-chauffeur-service" },
          { label: "Melbourne Airport Transfers", href: "/melbourne-airport-transfers" },
          { label: "Airport To CBD", href: "/melbourne-airport-to-cbd" },
        ]}
      />

      <ContentBlock
        eyebrow="Journey Overview"
        title="Melbourne Airport To The CBD"
        tone="white"
        paragraphs={[
          "The transfer from Melbourne Airport to the CBD is our most requested route, and one our chauffeurs drive every day. After meeting you at arrivals, your driver takes the Tullamarine Freeway and CityLink into the city, adjusting the route in real time if traffic or roadworks call for it.",
          "This route suits business travellers heading straight to a CBD meeting, tourists arriving for a city stay, and anyone who wants a direct, private transfer rather than navigating public transport or a taxi rank with luggage.",
        ]}
        highlights={[
          "Distance — approximately 23km",
          "Typical travel time — 25-30 minutes outside peak traffic",
          "Peak-hour travel time — up to 45 minutes",
          "Route — Tullamarine Freeway and CityLink",
        ]}
      />

      <FleetShowcase
        eyebrow="Vehicle Options"
        title="Choose Your Vehicle"
        intro="Every vehicle is selected for comfort and presentation, with generous luggage capacity for your airport transfer."
        vehicles={fleetVehicles}
      />

      <ContentBlock
        eyebrow="Pricing Information"
        title="Fixed, Upfront Pricing"
        tone="white"
        paragraphs={[
          "Your Melbourne Airport to CBD transfer is priced before you travel, based on your vehicle choice and passenger numbers. There are no metered surprises, no surge pricing during busy periods, and no hidden extras for standard luggage or waiting time within the allowance.",
          "Submit your trip details through our booking form and you'll receive a fixed price to review before confirming anything — the fare you're quoted is the fare you pay.",
        ]}
      />

      <Features eyebrow="Our Advantage" title="Why Choose Chauffeur Australia" items={whyChooseFeatures} />

      <BookingSteps
        eyebrow="Simple Process"
        title="Booking Process"
        intro="Booking your Melbourne Airport to CBD transfer takes a few minutes — share your flight details, receive a fixed price, confirm your booking, and enjoy the journey."
        steps={bookingSteps}
      />

      <ServiceFAQ
        eyebrow="Questions & Answers"
        title="Frequently Asked Questions"
        faqs={faqs}
        tone="ivory"
      />

      <ServiceOfferings
        eyebrow="Explore More"
        title="Related Services"
        items={relatedServices}
        tone="white"
      />

      <ServiceCTA
        title="Book Your Melbourne Airport To CBD Transfer Today"
        description="Get a fixed-price quote and travel in comfort with a professional Melbourne chauffeur."
        tone="gold"
      />
    </main>
  );
}
