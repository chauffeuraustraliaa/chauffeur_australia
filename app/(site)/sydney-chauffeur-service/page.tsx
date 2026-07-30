import {
  Banknote,
  Briefcase,
  Building2,
  Car,
  CarFront,
  CarTaxiFront,
  Clock,
  Crown,
  Handshake,
  Heart,
  MapPin,
  PlaneLanding,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

import { AirportsGrid } from "@/components/services/AirportsGrid";
import { BookingSteps } from "@/components/services/BookingSteps";
import { ContentBlock } from "@/components/services/ContentBlock";
import { Features } from "@/components/services/Features";
import { FleetShowcase } from "@/components/services/FleetShowcase";
import { RouteCards } from "@/components/services/RouteCards";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOfferings } from "@/components/services/ServiceOfferings";
import { Testimonials } from "@/components/services/Testimonials";
import { siteUrl } from "@/lib/site-config";

const pageTitle = "Sydney Chauffeur Service | Luxury Airport Transfers & Private Drivers";
const pageDescription =
  "Book premium chauffeur services in Sydney. Luxury airport transfers, corporate travel, hotel transfers, event transportation and private chauffeurs available 24/7.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "Sydney Chauffeur Service",
    "Sydney Airport Transfers",
    "Private Chauffeur Sydney",
    "Luxury Chauffeur Sydney",
    "Corporate Chauffeur Sydney",
    "Sydney Private Driver",
    "Airport Transfers Sydney",
  ],
  alternates: {
    canonical: "/sydney-chauffeur-service",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/sydney-chauffeur-service",
    siteName: "Australia Taxi Service",
    title: pageTitle,
    description: pageDescription,
    images: [{ url: "/sydney.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/sydney.webp"],
  },
};

const whyChooseFeatures = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Professional Chauffeurs",
    description:
      "Licensed, uniformed drivers who know Sydney's streets, harbour crossings and peak-hour patterns.",
  },
  {
    number: "02",
    icon: Car,
    title: "Luxury Vehicles",
    description:
      "Travel across Sydney in a premium, immaculately presented vehicle for every journey.",
  },
  {
    number: "03",
    icon: Banknote,
    title: "Fixed Pricing",
    description:
      "One upfront price agreed before you travel, with no surge charges or metered surprises.",
  },
  {
    number: "04",
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Early flights into Kingsford Smith or a late finish in the CBD — we're available around the clock.",
  },
  {
    number: "05",
    icon: Handshake,
    title: "Meet & Greet",
    description:
      "Your chauffeur meets you at arrivals with a name board, ready to help with your luggage.",
  },
  {
    number: "06",
    icon: PlaneLanding,
    title: "Flight Tracking",
    description:
      "We monitor your flight in real time, so your Sydney Airport pickup adjusts automatically.",
  },
  {
    number: "07",
    icon: ShieldCheck,
    title: "Licensed Drivers",
    description:
      "Every chauffeur is licensed under NSW passenger transport regulations and fully insured.",
  },
];

const sydneyServices = [
  {
    icon: PlaneLanding,
    title: "Airport Transfers",
    description: "Flight-tracked pickups and drop-offs at Sydney Airport.",
    href: "/airport-transfers",
  },
  {
    icon: Building2,
    title: "City Transfers",
    description: "Door-to-door transfers around the CBD, the harbour and inner suburbs.",
    href: "/city-transfers",
  },
  {
    icon: MapPin,
    title: "Hotel Transfers",
    description: "Seamless transfers between Sydney hotels, the airport and the city.",
    href: "/hotel-transfers",
  },
  {
    icon: Briefcase,
    title: "Corporate Chauffeur",
    description: "Reliable business travel for Sydney executives and visiting clients.",
    href: "/corporate-chauffeur",
  },
  {
    icon: Crown,
    title: "Executive Travel",
    description: "VIP vehicles and discreet service for high-profile Sydney travel.",
    href: "/executive-transfers",
  },
  {
    icon: Heart,
    title: "Wedding Chauffeur",
    description: "Elegant, on-time transport for your wedding day across Sydney.",
    href: "/wedding-chauffeur",
  },
  {
    icon: Users,
    title: "Event Transfers",
    description: "Group transfers for Sydney concerts, galas and major events.",
    href: "/event-chauffeur",
  },
  {
    icon: CarTaxiFront,
    title: "Private Driver",
    description: "Personal chauffeur hire by the hour or day, anywhere in Sydney.",
    href: "/private-chauffeur",
  },
];

const sydneyAreas = [
  {
    icon: Building2,
    title: "Sydney CBD",
    description: "Fast, reliable pickups across the CBD, from Circular Quay to Darling Harbour.",
  },
  {
    icon: MapPin,
    title: "Parramatta",
    description: "Chauffeurs on call for Western Sydney's business district and Parramatta River precinct.",
  },
  {
    icon: MapPin,
    title: "Bondi",
    description: "Beachside pickups along Campbell Parade and the Bondi to Coogee coastal strip.",
  },
  {
    icon: MapPin,
    title: "Manly",
    description: "Transfers across the Northern Beaches, including Manly's Corso and ferry terminal.",
  },
  {
    icon: MapPin,
    title: "Chatswood",
    description: "Premium transfers for the North Shore's shopping, dining and business hub.",
  },
];

const sydneyAirports = [
  {
    name: "Sydney Airport",
    code: "SYD",
    description:
      "Transfers to and from all terminals at Kingsford Smith, with chauffeurs tracking your flight and familiar with the airport's international and domestic precincts.",
  },
];

const sydneyRoutes = [
  { route: "Sydney Airport → Sydney CBD", duration: "20-25 min" },
  { route: "Sydney Airport → Bondi", duration: "25-30 min" },
  { route: "Sydney Airport → Darling Harbour", duration: "20 min" },
  { route: "Sydney Airport → Parramatta", duration: "35-40 min" },
  { route: "Sydney Airport → Chatswood", duration: "35 min" },
  { route: "Sydney Airport → Manly", duration: "45 min" },
];

const fleetVehicles = [
  {
    icon: Car,
    name: "Executive Sedans",
    description: "Sleek, comfortable sedans suited to solo travellers and business trips into the CBD.",
  },
  {
    icon: CarFront,
    name: "Luxury SUVs",
    description: "Extra space for luggage and passengers, with a commanding ride for families or executives.",
  },
  {
    icon: Briefcase,
    name: "Business Vehicles",
    description: "Quiet, well-equipped cabins fitted out for calls and preparation on the move.",
  },
  {
    icon: Users,
    name: "People Movers",
    description: "Larger vehicles with generous luggage capacity for groups and families travelling together.",
  },
];

const bookingSteps = [
  {
    number: "01",
    title: "Request Quote",
    description: "Share your Sydney pickup details for a fixed-price quote.",
  },
  {
    number: "02",
    title: "Receive Fixed Price",
    description: "Get an upfront, obligation-free price before you confirm anything.",
  },
  {
    number: "03",
    title: "Confirm Booking",
    description: "Confirm your transfer and receive your chauffeur and vehicle details.",
  },
  {
    number: "04",
    title: "Enjoy Your Journey",
    description: "Relax in a premium vehicle on the way to your Sydney destination.",
  },
];

const testimonials = [
  {
    name: "Business Traveller, Sydney CBD",
    quote:
      "Landed at Kingsford Smith to a delayed bag and the chauffeur was still there waiting. Smooth ride straight into the city.",
  },
  {
    name: "Visitor Staying in Darling Harbour",
    quote:
      "Booked a chauffeur for the week for meetings across the city. Same driver, same fixed prices, zero stress.",
  },
  {
    name: "Wedding Party, Bondi",
    quote:
      "Immaculate car, punctual to the minute, and genuinely helpful on a hectic day. Couldn't have asked for more.",
  },
];

const faqs = [
  {
    question: "How much does a chauffeur service cost in Sydney?",
    answer:
      "Pricing is a fixed, obligation-free quote based on your route, vehicle type and passenger numbers, agreed before you travel — there are no metered surprises.",
  },
  {
    question: "Do you provide airport transfers in Sydney?",
    answer:
      "Yes, we provide flight-tracked chauffeur transfers to and from Sydney Airport (Kingsford Smith).",
  },
  {
    question: "Can I book a corporate chauffeur in Sydney?",
    answer:
      "Yes, we offer corporate accounts, recurring bookings and invoicing on request for Sydney businesses and visiting executives.",
  },
  {
    question: "Do you monitor flights for Sydney Airport pickups?",
    answer:
      "Yes, we track your flight number in real time so your chauffeur adjusts your pickup time automatically for early arrivals or delays.",
  },
  {
    question: "Can I book a chauffeur by the hour in Sydney?",
    answer:
      "Yes, our private driver service is available by the hour or by the day for meetings, shopping trips or a full day around Sydney.",
  },
  {
    question: "Which Sydney suburbs do you service?",
    answer:
      "We cover the CBD, Parramatta, Bondi, Manly, Chatswood and greater Sydney.",
  },
  {
    question: "How far is Sydney Airport from the CBD?",
    answer:
      "Sydney Airport is around 8km from the CBD, with a typical chauffeur transfer taking 20-25 minutes outside peak traffic.",
  },
  {
    question: "Can I book a return airport transfer?",
    answer:
      "Yes, you can book your Sydney Airport pickup and drop-off together, or arrange each leg separately.",
  },
  {
    question: "Do you provide chauffeurs for weddings and events in Sydney?",
    answer:
      "Yes, we provide elegant, punctual wedding chauffeur services and group transfers for events across Sydney.",
  },
  {
    question: "Are Sydney chauffeurs licensed and insured?",
    answer:
      "Every chauffeur is licensed under NSW passenger transport regulations, and every trip is covered by comprehensive passenger insurance.",
  },
  {
    question: "How far in advance should I book a Sydney chauffeur?",
    answer:
      "We recommend booking at least 24 hours ahead, though we also accommodate last-minute requests where availability allows.",
  },
  {
    question: "Can I request a specific vehicle for my Sydney transfer?",
    answer:
      "Yes, you can request an executive sedan, luxury SUV or a larger people mover when you submit your booking.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Sydney Chauffeur Service",
  name: "Sydney Chauffeur Service",
  description: pageDescription,
  provider: {
    "@type": "LocalBusiness",
    name: "Australia Taxi Service",
    areaServed: {
      "@type": "City",
      name: "Sydney",
    },
  },
  areaServed: {
    "@type": "City",
    name: "Sydney",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sydney Chauffeur Services",
    itemListElement: sydneyServices.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Australia Taxi Service - Sydney Chauffeur Service",
  image: `${siteUrl}/sydney.webp`,
  url: `${siteUrl}/sydney-chauffeur-service`,
  telephone: "+61480289196",
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "Sydney",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Sydney Chauffeur Service",
      item: `${siteUrl}/sydney-chauffeur-service`,
    },
  ],
};

export default function SydneyChauffeurServicePage() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <ServiceHero
        title="Sydney Chauffeur Service"
        description="Luxury airport transfers, corporate travel and private chauffeurs across Sydney — professional drivers, premium vehicles and fixed pricing, available 24/7."
        primaryCta="Request A Quote"
        secondaryCta="Call Now"
        secondaryHref="tel:+61480289196"
        image="/sydney.webp"
        imageAlt="Sydney Opera House and Harbour Bridge skyline"
        breadcrumbItems={[
          { label: "Sydney Chauffeur Service", href: "/sydney-chauffeur-service" },
        ]}
      />

      <ContentBlock
        eyebrow="Getting Started"
        title="Sydney's Premium Chauffeur Service"
        tone="white"
        paragraphs={[
          "Our Sydney chauffeur service pairs professional, licensed drivers with a premium vehicle fleet, arranged in advance for a fixed price. Whether you're landing at Kingsford Smith for a business trip, heading to a wedding in Bondi, or need a reliable driver for a full day of meetings across the CBD, everything is confirmed before you travel — the vehicle, the driver and the fare.",
          "Sydney is a city that rewards local knowledge. Harbour crossings via the Bridge or the Tunnel, the notorious congestion on the M4 and M5, and events at Accor Stadium or the SCG can all add unpredictable time to a trip if you don't know the city well. Our Sydney chauffeurs drive these roads every day, so your journey accounts for the route that actually works, not just the shortest one on a map.",
          "This service suits a wide range of travellers: executives who need to arrive composed and on schedule, couples and families visiting for a holiday, wedding parties who can't afford a late start, and Sydneysiders who simply prefer a more comfortable way to move around their own city.",
        ]}
      />

      <Features
        eyebrow="Our Advantage"
        title="Why Choose Our Sydney Chauffeur Service"
        items={whyChooseFeatures}
      />

      <ServiceOfferings
        eyebrow="What We Offer"
        title="Chauffeur Services In Sydney"
        items={sydneyServices}
        tone="white"
      />

      <ServiceOfferings
        eyebrow="Where We Operate"
        title="Sydney Areas We Serve"
        items={sydneyAreas}
        tone="ivory"
      />

      <AirportsGrid
        eyebrow="Airport Transfers"
        title="Sydney Airport"
        description="Flight-tracked chauffeur transfers to and from Sydney Airport, with meet and greet service included at arrivals."
        items={sydneyAirports}
        tone="white"
      />

      <RouteCards
        eyebrow="Frequently Travelled"
        title="Popular Sydney Routes"
        intro="These airport-to-city routes account for the majority of our Sydney bookings, each with an estimated travel time so you can plan your pickup with confidence."
        routes={sydneyRoutes}
      />

      <FleetShowcase
        eyebrow="Our Fleet"
        title="Luxury Fleet"
        intro="Every vehicle in our Sydney fleet is selected for comfort and presentation, with generous luggage capacity and premium interiors, then cleaned and inspected between every trip."
        vehicles={fleetVehicles}
        tone="white"
      />

      <ContentBlock
        eyebrow="The Comparison"
        title="Why Book A Chauffeur Instead Of A Taxi?"
        tone="ivory"
        paragraphs={[
          "Against a traditional Sydney taxi, the main difference is certainty. A taxi fare is metered and can shift with traffic and route choice, and availability at a busy rank isn't guaranteed. A chauffeur is booked in advance, arrives on time, and charges the fixed price you were quoted, regardless of how the harbour crossings run.",
          "Ride-sharing apps offer convenience, but the experience varies trip to trip — different drivers, different vehicles, and pricing that can spike during events, peak hour or bad weather. A chauffeur service pairs you with a vetted, professional driver and a consistent standard of vehicle every time, with pricing that doesn't move with demand.",
          "Public transport is often the cheapest option, but it asks the most of the traveller — navigating trains and ferries with luggage, working out connections in an unfamiliar part of the city, and building in extra time for delays. A chauffeur transfer trades that effort for a direct, private journey from your door to your exact destination.",
        ]}
        highlights={[
          "Comfort — a private, quiet cabin for the whole journey",
          "Privacy — no shared rides or unexpected stops",
          "Reliability — flight-tracked pickups, every time",
          "Luxury — a premium, immaculately presented vehicle",
          "Professional service — trained, uniformed chauffeurs",
        ]}
      />

      <BookingSteps
        eyebrow="Simple Process"
        title="Booking Process"
        intro="Booking a Sydney chauffeur takes a few minutes. Share your trip details, receive a fixed-price quote, confirm your booking, and enjoy the journey."
        steps={bookingSteps}
      />

      <Testimonials
        eyebrow="Testimonials"
        title="What Our Sydney Customers Say"
        testimonials={testimonials}
        tone="ivory"
      />

      <ServiceFAQ
        eyebrow="Questions & Answers"
        title="Frequently Asked Questions"
        faqs={faqs}
        image="/faq.jpg"
        imageAlt="Packed suitcase ready for travel"
      />

      <ServiceCTA
        title="Book Your Sydney Chauffeur Today"
        description="Get a fixed-price quote and travel in comfort with a professional Sydney chauffeur."
        tone="gold"
      />
    </main>
  );
}
