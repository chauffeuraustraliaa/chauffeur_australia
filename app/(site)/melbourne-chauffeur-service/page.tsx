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
  Navigation,
  PlaneLanding,
  ShieldCheck,
  Ship,
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

const pageTitle = "Melbourne Chauffeur Service | Luxury Airport Transfers & Private Drivers";
const pageDescription =
  "Book premium chauffeur services in Melbourne. Luxury airport transfers, corporate travel, hotel transfers, event transportation and private chauffeurs available 24/7.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "Melbourne Chauffeur Service",
    "Melbourne Airport Transfers",
    "Private Chauffeur Melbourne",
    "Luxury Chauffeur Melbourne",
    "Corporate Chauffeur Melbourne",
    "Melbourne Private Driver",
    "Airport Transfers Melbourne",
  ],
  alternates: {
    canonical: "/melbourne-chauffeur-service",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/melbourne-chauffeur-service",
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
  {
    number: "01",
    icon: ShieldCheck,
    title: "Professional Chauffeurs",
    description:
      "Licensed, uniformed drivers who know Melbourne's streets, shortcuts and peak-hour patterns.",
  },
  {
    number: "02",
    icon: Car,
    title: "Luxury Vehicles",
    description:
      "Travel across Melbourne in a premium, immaculately presented vehicle for every journey.",
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
      "Early flights into Tullamarine or a late finish in the CBD — we're available around the clock.",
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
      "We monitor your flight in real time, so your Melbourne Airport pickup adjusts automatically.",
  },
  {
    number: "07",
    icon: ShieldCheck,
    title: "Licensed Drivers",
    description:
      "Every chauffeur is licensed under Victorian passenger transport regulations and fully insured.",
  },
];

const melbourneServices = [
  {
    icon: PlaneLanding,
    title: "Airport Transfers",
    description: "Flight-tracked pickups and drop-offs at Melbourne and Avalon airports.",
    href: "/melbourne-airport-transfers",
  },
  {
    icon: Building2,
    title: "City Transfers",
    description: "Door-to-door transfers around the CBD, Southbank and inner suburbs.",
    href: "/melbourne-city-transfers",
  },
  {
    icon: MapPin,
    title: "Hotel Transfers",
    description: "Seamless transfers between Melbourne hotels, the airport and the city.",
    href: "/melbourne-hotel-transfers",
  },
  {
    icon: Briefcase,
    title: "Corporate Chauffeur",
    description: "Reliable business travel for Melbourne executives and visiting clients.",
    href: "/melbourne-corporate-chauffeur",
  },
  {
    icon: Crown,
    title: "Executive Travel",
    description: "VIP vehicles and discreet service for high-profile Melbourne travel.",
    href: "/executive-transfers",
  },
  {
    icon: Heart,
    title: "Wedding Chauffeur",
    description: "Elegant, on-time transport for your wedding day across Melbourne.",
    href: "/melbourne-wedding-chauffeur",
  },
  {
    icon: Ship,
    title: "Cruise Transfers",
    description: "Transfers to and from Station Pier and Port Melbourne.",
    href: "/melbourne-cruise-transfers",
  },
  {
    icon: Users,
    title: "Event Transfers",
    description: "Group transfers for Melbourne concerts, galas and major events.",
    href: "/event-chauffeur",
  },
  {
    icon: CarTaxiFront,
    title: "Private Driver",
    description: "Personal chauffeur hire by the hour or day, anywhere in Melbourne.",
    href: "/private-chauffeur",
  },
];

const melbourneRouteGuides = [
  {
    icon: Navigation,
    title: "Airport → CBD",
    description: "Distance, travel time and fixed pricing for this route.",
    href: "/melbourne-airport-to-cbd",
  },
  {
    icon: Navigation,
    title: "Airport → Southbank",
    description: "Distance, travel time and fixed pricing for this route.",
    href: "/melbourne-airport-to-southbank",
  },
  {
    icon: Navigation,
    title: "Airport → St Kilda",
    description: "Distance, travel time and fixed pricing for this route.",
    href: "/melbourne-airport-to-st-kilda",
  },
  {
    icon: Navigation,
    title: "Airport → Docklands",
    description: "Distance, travel time and fixed pricing for this route.",
    href: "/melbourne-airport-to-docklands",
  },
];

const melbourneAreas = [
  {
    icon: Building2,
    title: "Melbourne CBD",
    description: "Fast, reliable pickups across the grid, from Collins Street to Bourke Street.",
  },
  {
    icon: MapPin,
    title: "Southbank",
    description: "Chauffeurs on call for Crown Towers, the arts precinct and the Yarra riverfront.",
  },
  {
    icon: MapPin,
    title: "Docklands",
    description: "Transfers to and from Docklands' waterfront apartments, offices and stadium events.",
  },
  {
    icon: MapPin,
    title: "St Kilda",
    description: "Beachside pickups along Fitzroy Street and the Esplanade, day or night.",
  },
  {
    icon: MapPin,
    title: "Richmond",
    description: "Convenient transfers near the MCG, Bridge Road and Swan Street precincts.",
  },
  {
    icon: MapPin,
    title: "Carlton",
    description: "Chauffeur availability around Lygon Street, the university and Royal Parade.",
  },
  {
    icon: MapPin,
    title: "South Yarra",
    description: "Premium transfers for Chapel Street shopping, dining and residential pickups.",
  },
  {
    icon: MapPin,
    title: "Brighton",
    description: "Bayside transfers along Church Street and the Brighton foreshore.",
  },
  {
    icon: MapPin,
    title: "Toorak",
    description: "Discreet, premium chauffeur service throughout Melbourne's Toorak Village area.",
  },
  {
    icon: MapPin,
    title: "Essendon",
    description: "Quick access to and from Essendon Fields, Keilor Road and the inner north-west.",
  },
];

const melbourneAirports = [
  {
    name: "Melbourne Airport",
    code: "MEL",
    description:
      "Transfers to and from all four terminals at Tullamarine, with chauffeurs tracking your flight and familiar with peak-hour patterns on the Tullamarine Freeway.",
  },
  {
    name: "Avalon Airport",
    code: "AVV",
    description:
      "Reliable pickups and drop-offs at Avalon, around 55km south-west of the CBD, timed around Jetstar's domestic schedule.",
  },
];

const melbourneRoutes = [
  { route: "Melbourne Airport → Melbourne CBD", duration: "25-30 min" },
  { route: "Melbourne Airport → Southbank", duration: "30 min" },
  { route: "Melbourne Airport → St Kilda", duration: "40 min" },
  { route: "Melbourne Airport → Crown Towers", duration: "30 min" },
  { route: "Melbourne Airport → Docklands", duration: "25 min" },
  { route: "Melbourne Airport → Brighton", duration: "45 min" },
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
    description: "Share your Melbourne pickup details for a fixed-price quote.",
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
    description: "Relax in a premium vehicle on the way to your Melbourne destination.",
  },
];

const testimonials = [
  {
    name: "Business Traveller, Melbourne CBD",
    quote:
      "Landed at Tullamarine to a delayed bag and the chauffeur was still there waiting. Smooth ride straight into Collins Street.",
  },
  {
    name: "Visitor Staying in Southbank",
    quote:
      "Booked a chauffeur for the week for meetings across the city. Same driver, same fixed prices, zero stress.",
  },
  {
    name: "Wedding Party, South Yarra",
    quote:
      "Immaculate car, punctual to the minute, and genuinely helpful on a hectic day. Couldn't have asked for more.",
  },
];

const faqs = [
  {
    question: "How much does a chauffeur service cost in Melbourne?",
    answer:
      "Pricing is a fixed, obligation-free quote based on your route, vehicle type and passenger numbers, agreed before you travel — there are no metered surprises.",
  },
  {
    question: "Do you provide airport transfers in Melbourne?",
    answer:
      "Yes, we provide flight-tracked chauffeur transfers to and from both Melbourne Airport (Tullamarine) and Avalon Airport.",
  },
  {
    question: "Can I book a corporate chauffeur in Melbourne?",
    answer:
      "Yes, we offer corporate accounts, recurring bookings and invoicing on request for Melbourne businesses and visiting executives.",
  },
  {
    question: "Do you monitor flights for Melbourne Airport pickups?",
    answer:
      "Yes, we track your flight number in real time so your chauffeur adjusts your pickup time automatically for early arrivals or delays.",
  },
  {
    question: "Can I book a chauffeur by the hour in Melbourne?",
    answer:
      "Yes, our private driver service is available by the hour or by the day for meetings, shopping trips or a full day around Melbourne.",
  },
  {
    question: "Which Melbourne suburbs do you service?",
    answer:
      "We cover the CBD, Southbank, Docklands, St Kilda, Richmond, Carlton, South Yarra, Brighton, Toorak, Essendon and greater Melbourne.",
  },
  {
    question: "How far is Melbourne Airport from the CBD?",
    answer:
      "Melbourne Airport is around 23km from the CBD, with a typical chauffeur transfer taking 25-30 minutes outside peak traffic.",
  },
  {
    question: "Can I book a return airport transfer?",
    answer:
      "Yes, you can book your Melbourne Airport pickup and drop-off together, or arrange each leg separately.",
  },
  {
    question: "Do you provide chauffeurs for weddings and events in Melbourne?",
    answer:
      "Yes, we provide elegant, punctual wedding chauffeur services and group transfers for events across Melbourne.",
  },
  {
    question: "Are Melbourne chauffeurs licensed and insured?",
    answer:
      "Every chauffeur is licensed under Victorian passenger transport regulations, and every trip is covered by comprehensive passenger insurance.",
  },
  {
    question: "How far in advance should I book a Melbourne chauffeur?",
    answer:
      "We recommend booking at least 24 hours ahead, though we also accommodate last-minute requests where availability allows.",
  },
  {
    question: "Can I request a specific vehicle for my Melbourne transfer?",
    answer:
      "Yes, you can request an executive sedan, luxury SUV or a larger people mover when you submit your booking.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Melbourne Chauffeur Service",
  name: "Melbourne Chauffeur Service",
  description: pageDescription,
  provider: {
    "@type": "LocalBusiness",
    name: "Australia Taxi Service",
    areaServed: {
      "@type": "City",
      name: "Melbourne",
    },
  },
  areaServed: {
    "@type": "City",
    name: "Melbourne",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Melbourne Chauffeur Services",
    itemListElement: melbourneServices.map((service) => ({
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
  name: "Australia Taxi Service - Melbourne Chauffeur Service",
  image: `${siteUrl}/melbourne.jpeg`,
  url: `${siteUrl}/melbourne-chauffeur-service`,
  telephone: "+61480289196",
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "Melbourne",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
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
      name: "Melbourne Chauffeur Service",
      item: `${siteUrl}/melbourne-chauffeur-service`,
    },
  ],
};

export default function MelbourneChauffeurServicePage() {
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
        title="Melbourne Chauffeur Service"
        description="Luxury airport transfers, corporate travel and private chauffeurs across Melbourne — professional drivers, premium vehicles and fixed pricing, available 24/7."
        primaryCta="Request A Quote"
        secondaryCta="Call Now"
        secondaryHref="tel:+61480289196"
        image="/melbourne.jpeg"
        imageAlt="Melbourne city skyline at dusk"
        breadcrumbItems={[
          { label: "Melbourne Chauffeur Service", href: "/melbourne-chauffeur-service" },
        ]}
      />

      <ContentBlock
        eyebrow="Getting Started"
        title="Melbourne's Premium Chauffeur Service"
        tone="white"
        paragraphs={[
          "Our Melbourne chauffeur service pairs professional, licensed drivers with a premium vehicle fleet, arranged in advance for a fixed price. Whether you're landing at Tullamarine for a business trip, heading to a wedding in South Yarra, or need a reliable driver for a full day of meetings across the CBD, everything is confirmed before you travel — the vehicle, the driver and the fare.",
          "Melbourne is a city that rewards local knowledge. Peak-hour traffic on the Tullamarine Freeway, the CBD's tram-heavy grid, and events at the MCG or Marvel Stadium can all add unpredictable time to a trip if you don't know the city well. Our Melbourne chauffeurs drive these roads every day, so your journey accounts for the route that actually works, not just the shortest one on a map.",
          "This service suits a wide range of travellers: executives who need to arrive composed and on schedule, couples and families visiting for a holiday, wedding parties who can't afford a late start, and Melbourne locals who simply prefer a more comfortable way to move around their own city.",
        ]}
      />

      <Features
        eyebrow="Our Advantage"
        title="Why Choose Our Melbourne Chauffeur Service"
        items={whyChooseFeatures}
      />

      <ServiceOfferings
        eyebrow="What We Offer"
        title="Chauffeur Services In Melbourne"
        items={melbourneServices}
        tone="white"
      />

      <ServiceOfferings
        eyebrow="Where We Operate"
        title="Melbourne Areas We Serve"
        items={melbourneAreas}
        tone="ivory"
      />

      <AirportsGrid
        eyebrow="Airport Transfers"
        title="Melbourne Airports"
        description="Flight-tracked chauffeur transfers to and from both of Melbourne's airports, with meet and greet service included at arrivals."
        items={melbourneAirports}
        tone="white"
      />

      <RouteCards
        eyebrow="Frequently Travelled"
        title="Popular Melbourne Routes"
        intro="These airport-to-city routes account for the majority of our Melbourne bookings, each with an estimated travel time so you can plan your pickup with confidence."
        routes={melbourneRoutes}
      />

      <FleetShowcase
        eyebrow="Our Fleet"
        title="Luxury Fleet"
        intro="Every vehicle in our Melbourne fleet is selected for comfort and presentation, with generous luggage capacity and premium interiors, then cleaned and inspected between every trip."
        vehicles={fleetVehicles}
        tone="white"
      />

      <ContentBlock
        eyebrow="The Comparison"
        title="Why Book A Chauffeur Instead Of A Taxi?"
        tone="ivory"
        paragraphs={[
          "Against a traditional Melbourne taxi, the main difference is certainty. A taxi fare is metered and can shift with traffic and route choice, and availability at a busy rank or during a Melbourne downpour isn't guaranteed. A chauffeur is booked in advance, arrives on time, and charges the fixed price you were quoted, regardless of how the traffic runs.",
          "Ride-sharing apps offer convenience, but the experience varies trip to trip — different drivers, different vehicles, and pricing that can spike during events, peak hour or bad weather. A chauffeur service pairs you with a vetted, professional driver and a consistent standard of vehicle every time, with pricing that doesn't move with demand.",
          "Public transport is often the cheapest option, but it asks the most of the traveller — navigating trams and trains with luggage, working out connections in an unfamiliar part of the city, and building in extra time for delays. A chauffeur transfer trades that effort for a direct, private journey from your door to your exact destination.",
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
        intro="Booking a Melbourne chauffeur takes a few minutes. Share your trip details, receive a fixed-price quote, confirm your booking, and enjoy the journey."
        steps={bookingSteps}
      />

      <Testimonials
        eyebrow="Testimonials"
        title="What Our Melbourne Customers Say"
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

      <ServiceOfferings
        eyebrow="Plan Your Trip"
        title="Explore Popular Melbourne Routes"
        items={melbourneRouteGuides}
        tone="ivory"
      />

      <ServiceCTA
        title="Book Your Melbourne Chauffeur Today"
        description="Get a fixed-price quote and travel in comfort with a professional Melbourne chauffeur."
        tone="gold"
      />
    </main>
  );
}
