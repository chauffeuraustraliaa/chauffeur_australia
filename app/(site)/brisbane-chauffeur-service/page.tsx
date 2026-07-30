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

const pageTitle = "Brisbane Chauffeur Service | Luxury Airport Transfers & Private Drivers";
const pageDescription =
  "Book premium chauffeur services in Brisbane. Luxury airport transfers, corporate travel, hotel transfers, event transportation and private chauffeurs available 24/7.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "Brisbane Chauffeur Service",
    "Brisbane Airport Transfers",
    "Private Chauffeur Brisbane",
    "Luxury Chauffeur Brisbane",
    "Corporate Chauffeur Brisbane",
    "Brisbane Private Driver",
    "Airport Transfers Brisbane",
  ],
  alternates: {
    canonical: "/brisbane-chauffeur-service",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/brisbane-chauffeur-service",
    siteName: "Australia Taxi Service",
    title: pageTitle,
    description: pageDescription,
    images: [{ url: "/brisbane.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/brisbane.jpg"],
  },
};

const whyChooseFeatures = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Professional Chauffeurs",
    description:
      "Licensed, uniformed drivers who know Brisbane's streets, river crossings and peak-hour patterns.",
  },
  {
    number: "02",
    icon: Car,
    title: "Luxury Vehicles",
    description:
      "Travel across Brisbane in a premium, immaculately presented vehicle for every journey.",
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
      "Early flights into Brisbane Airport or a late finish in the CBD — we're available around the clock.",
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
      "We monitor your flight in real time, so your Brisbane Airport pickup adjusts automatically.",
  },
  {
    number: "07",
    icon: ShieldCheck,
    title: "Licensed Drivers",
    description:
      "Every chauffeur is licensed under Queensland passenger transport regulations and fully insured.",
  },
];

const brisbaneServices = [
  {
    icon: PlaneLanding,
    title: "Airport Transfers",
    description: "Flight-tracked pickups and drop-offs at Brisbane Airport.",
    href: "/airport-transfers",
  },
  {
    icon: Building2,
    title: "City Transfers",
    description: "Door-to-door transfers around the CBD, South Bank and inner suburbs.",
    href: "/city-transfers",
  },
  {
    icon: MapPin,
    title: "Hotel Transfers",
    description: "Seamless transfers between Brisbane hotels, the airport and the city.",
    href: "/hotel-transfers",
  },
  {
    icon: Briefcase,
    title: "Corporate Chauffeur",
    description: "Reliable business travel for Brisbane executives and visiting clients.",
    href: "/corporate-chauffeur",
  },
  {
    icon: Crown,
    title: "Executive Travel",
    description: "VIP vehicles and discreet service for high-profile Brisbane travel.",
    href: "/executive-transfers",
  },
  {
    icon: Heart,
    title: "Wedding Chauffeur",
    description: "Elegant, on-time transport for your wedding day across Brisbane.",
    href: "/wedding-chauffeur",
  },
  {
    icon: Users,
    title: "Event Transfers",
    description: "Group transfers for Brisbane concerts, galas and major events.",
    href: "/event-chauffeur",
  },
  {
    icon: CarTaxiFront,
    title: "Private Driver",
    description: "Personal chauffeur hire by the hour or day, anywhere in Brisbane.",
    href: "/private-chauffeur",
  },
];

const brisbaneAreas = [
  {
    icon: Building2,
    title: "Brisbane CBD",
    description: "Fast, reliable pickups across the CBD, from Queen Street to the riverfront.",
  },
  {
    icon: MapPin,
    title: "South Bank",
    description: "Chauffeurs on call for the parklands, arts precinct and Southbank riverside.",
  },
  {
    icon: MapPin,
    title: "Fortitude Valley",
    description: "Transfers to and from the Valley's dining, nightlife and Chinatown precinct.",
  },
  {
    icon: MapPin,
    title: "New Farm",
    description: "Premium transfers around James Street, the Powerhouse and the riverside park.",
  },
];

const brisbaneAirports = [
  {
    name: "Brisbane Airport",
    code: "BNE",
    description:
      "Transfers to and from both the domestic and international terminals, with chauffeurs tracking your flight and familiar with peak-hour patterns on the Airport Link.",
  },
];

const brisbaneRoutes = [
  { route: "Brisbane Airport → Brisbane CBD", duration: "25 min" },
  { route: "Brisbane Airport → South Bank", duration: "30 min" },
  { route: "Brisbane Airport → Fortitude Valley", duration: "25 min" },
  { route: "Brisbane Airport → New Farm", duration: "25 min" },
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
    description: "Share your Brisbane pickup details for a fixed-price quote.",
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
    description: "Relax in a premium vehicle on the way to your Brisbane destination.",
  },
];

const testimonials = [
  {
    name: "Business Traveller, Brisbane CBD",
    quote:
      "Landed at Brisbane Airport to a delayed bag and the chauffeur was still there waiting. Smooth ride straight into the city.",
  },
  {
    name: "Visitor Staying in South Bank",
    quote:
      "Booked a chauffeur for the week for meetings across the city. Same driver, same fixed prices, zero stress.",
  },
  {
    name: "Wedding Party, New Farm",
    quote:
      "Immaculate car, punctual to the minute, and genuinely helpful on a hectic day. Couldn't have asked for more.",
  },
];

const faqs = [
  {
    question: "How much does a chauffeur service cost in Brisbane?",
    answer:
      "Pricing is a fixed, obligation-free quote based on your route, vehicle type and passenger numbers, agreed before you travel — there are no metered surprises.",
  },
  {
    question: "Do you provide airport transfers in Brisbane?",
    answer:
      "Yes, we provide flight-tracked chauffeur transfers to and from Brisbane Airport.",
  },
  {
    question: "Can I book a corporate chauffeur in Brisbane?",
    answer:
      "Yes, we offer corporate accounts, recurring bookings and invoicing on request for Brisbane businesses and visiting executives.",
  },
  {
    question: "Do you monitor flights for Brisbane Airport pickups?",
    answer:
      "Yes, we track your flight number in real time so your chauffeur adjusts your pickup time automatically for early arrivals or delays.",
  },
  {
    question: "Can I book a chauffeur by the hour in Brisbane?",
    answer:
      "Yes, our private driver service is available by the hour or by the day for meetings, shopping trips or a full day around Brisbane.",
  },
  {
    question: "Which Brisbane suburbs do you service?",
    answer:
      "We cover the CBD, South Bank, Fortitude Valley, New Farm and greater Brisbane.",
  },
  {
    question: "How far is Brisbane Airport from the CBD?",
    answer:
      "Brisbane Airport is around 13km from the CBD, with a typical chauffeur transfer taking around 25 minutes outside peak traffic.",
  },
  {
    question: "Can I book a return airport transfer?",
    answer:
      "Yes, you can book your Brisbane Airport pickup and drop-off together, or arrange each leg separately.",
  },
  {
    question: "Do you provide chauffeurs for weddings and events in Brisbane?",
    answer:
      "Yes, we provide elegant, punctual wedding chauffeur services and group transfers for events across Brisbane.",
  },
  {
    question: "Are Brisbane chauffeurs licensed and insured?",
    answer:
      "Every chauffeur is licensed under Queensland passenger transport regulations, and every trip is covered by comprehensive passenger insurance.",
  },
  {
    question: "How far in advance should I book a Brisbane chauffeur?",
    answer:
      "We recommend booking at least 24 hours ahead, though we also accommodate last-minute requests where availability allows.",
  },
  {
    question: "Can I request a specific vehicle for my Brisbane transfer?",
    answer:
      "Yes, you can request an executive sedan, luxury SUV or a larger people mover when you submit your booking.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Brisbane Chauffeur Service",
  name: "Brisbane Chauffeur Service",
  description: pageDescription,
  provider: {
    "@type": "LocalBusiness",
    name: "Australia Taxi Service",
    areaServed: {
      "@type": "City",
      name: "Brisbane",
    },
  },
  areaServed: {
    "@type": "City",
    name: "Brisbane",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Brisbane Chauffeur Services",
    itemListElement: brisbaneServices.map((service) => ({
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
  name: "Australia Taxi Service - Brisbane Chauffeur Service",
  image: `${siteUrl}/brisbane.jpg`,
  url: `${siteUrl}/brisbane-chauffeur-service`,
  telephone: "+61480289196",
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "Brisbane",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brisbane",
    addressRegion: "QLD",
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
      name: "Brisbane Chauffeur Service",
      item: `${siteUrl}/brisbane-chauffeur-service`,
    },
  ],
};

export default function BrisbaneChauffeurServicePage() {
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
        title="Brisbane Chauffeur Service"
        description="Luxury airport transfers, corporate travel and private chauffeurs across Brisbane — professional drivers, premium vehicles and fixed pricing, available 24/7."
        primaryCta="Request A Quote"
        secondaryCta="Call Now"
        secondaryHref="tel:+61480289196"
        image="/brisbane.jpg"
        imageAlt="Brisbane city skyline along the river"
        breadcrumbItems={[
          { label: "Brisbane Chauffeur Service", href: "/brisbane-chauffeur-service" },
        ]}
      />

      <ContentBlock
        eyebrow="Getting Started"
        title="Brisbane's Premium Chauffeur Service"
        tone="white"
        paragraphs={[
          "Our Brisbane chauffeur service pairs professional, licensed drivers with a premium vehicle fleet, arranged in advance for a fixed price. Whether you're landing at Brisbane Airport for a business trip, heading to a wedding in New Farm, or need a reliable driver for a full day of meetings across the CBD, everything is confirmed before you travel — the vehicle, the driver and the fare.",
          "Brisbane is a city that rewards local knowledge. River crossings via the Story Bridge or the tunnels, the Airport Link's peak-hour flow, and events at Suncorp Stadium or South Bank can all add unpredictable time to a trip if you don't know the city well. Our Brisbane chauffeurs drive these roads every day, so your journey accounts for the route that actually works, not just the shortest one on a map.",
          "This service suits a wide range of travellers: executives who need to arrive composed and on schedule, couples and families visiting for a holiday, wedding parties who can't afford a late start, and Brisbane locals who simply prefer a more comfortable way to move around their own city.",
        ]}
      />

      <Features
        eyebrow="Our Advantage"
        title="Why Choose Our Brisbane Chauffeur Service"
        items={whyChooseFeatures}
      />

      <ServiceOfferings
        eyebrow="What We Offer"
        title="Chauffeur Services In Brisbane"
        items={brisbaneServices}
        tone="white"
      />

      <ServiceOfferings
        eyebrow="Where We Operate"
        title="Brisbane Areas We Serve"
        items={brisbaneAreas}
        tone="ivory"
      />

      <AirportsGrid
        eyebrow="Airport Transfers"
        title="Brisbane Airport"
        description="Flight-tracked chauffeur transfers to and from Brisbane Airport, with meet and greet service included at arrivals."
        items={brisbaneAirports}
        tone="white"
      />

      <RouteCards
        eyebrow="Frequently Travelled"
        title="Popular Brisbane Routes"
        intro="These airport-to-city routes account for the majority of our Brisbane bookings, each with an estimated travel time so you can plan your pickup with confidence."
        routes={brisbaneRoutes}
      />

      <FleetShowcase
        eyebrow="Our Fleet"
        title="Luxury Fleet"
        intro="Every vehicle in our Brisbane fleet is selected for comfort and presentation, with generous luggage capacity and premium interiors, then cleaned and inspected between every trip."
        vehicles={fleetVehicles}
        tone="white"
      />

      <ContentBlock
        eyebrow="The Comparison"
        title="Why Book A Chauffeur Instead Of A Taxi?"
        tone="ivory"
        paragraphs={[
          "Against a traditional Brisbane taxi, the main difference is certainty. A taxi fare is metered and can shift with traffic and route choice, and availability at a busy rank isn't guaranteed. A chauffeur is booked in advance, arrives on time, and charges the fixed price you were quoted, regardless of how the river crossings run.",
          "Ride-sharing apps offer convenience, but the experience varies trip to trip — different drivers, different vehicles, and pricing that can spike during events, peak hour or bad weather. A chauffeur service pairs you with a vetted, professional driver and a consistent standard of vehicle every time, with pricing that doesn't move with demand.",
          "Public transport is often the cheapest option, but it asks the most of the traveller — navigating trains and buses with luggage, working out connections in an unfamiliar part of the city, and building in extra time for delays. A chauffeur transfer trades that effort for a direct, private journey from your door to your exact destination.",
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
        intro="Booking a Brisbane chauffeur takes a few minutes. Share your trip details, receive a fixed-price quote, confirm your booking, and enjoy the journey."
        steps={bookingSteps}
      />

      <Testimonials
        eyebrow="Testimonials"
        title="What Our Brisbane Customers Say"
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
        title="Book Your Brisbane Chauffeur Today"
        description="Get a fixed-price quote and travel in comfort with a professional Brisbane chauffeur."
        tone="gold"
      />
    </main>
  );
}
