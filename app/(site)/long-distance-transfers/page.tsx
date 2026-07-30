import {
  Banknote,
  Car,
  CarFront,
  Clock,
  Gauge,
  MapPin,
  MapPinned,
  Navigation,
  PlaneLanding,
  Route,
  ShieldCheck,
  Signpost,
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
import { ServiceDetailList } from "@/components/services/ServiceDetailList";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Testimonials } from "@/components/services/Testimonials";
import { siteUrl } from "@/lib/site-config";

const pageTitle = "Long Distance Transfers Australia | Interstate Chauffeur Service";
const pageDescription =
  "Book long distance and interstate chauffeur transfers across Australia. Professional drivers, comfortable vehicles and fixed prices for city-to-city travel.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "Long Distance Transfers Australia",
    "Interstate Chauffeur Service",
    "Regional Transfers Australia",
    "Long Distance Chauffeur",
    "City to City Transfers",
    "Country Transfers Australia",
  ],
  alternates: { canonical: "/long-distance-transfers" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/long-distance-transfers",
    siteName: "Australia Taxi Service",
    title: pageTitle,
    description: pageDescription,
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription },
};

const whyChooseFeatures = [
  { number: "01", icon: Gauge, title: "Comfortable Long Journeys", description: "Premium vehicles suited to longer trips, not just short city hops." },
  { number: "02", icon: ShieldCheck, title: "Professional Chauffeurs", description: "Experienced drivers comfortable with extended interstate and regional routes." },
  { number: "03", icon: MapPin, title: "Rest Stop Flexibility", description: "Breaks built into longer journeys, planned around your preferences." },
  { number: "04", icon: Banknote, title: "Fixed Pricing", description: "One upfront price for the whole journey, agreed before you travel." },
  { number: "05", icon: Navigation, title: "Door-to-Door Convenience", description: "One vehicle from your exact starting point to your exact destination." },
  { number: "06", icon: Clock, title: "24/7 Availability", description: "Early departures or late arrivals handled the same as any other booking." },
];

const serviceDetails = [
  { icon: Route, title: "City to City Transfers", description: "Direct, comfortable transfers between major Australian cities, in one vehicle with one chauffeur for the entire journey." },
  { icon: Signpost, title: "Regional & Country Transfers", description: "Transfers to regional towns, wine regions and country destinations beyond the usual metro coverage area." },
  { icon: PlaneLanding, title: "Airport to Regional Destinations", description: "A direct transfer from the airport straight to a regional destination, avoiding a connecting flight or additional transport leg." },
  { icon: MapPinned, title: "Multi-Stop Road Trips", description: "A single booking covering several destinations along a route, with your chauffeur managing the driving and the stops." },
  { icon: Route, title: "Return Journey Bookings", description: "Your outbound and return long-distance trip booked together, with the same chauffeur and vehicle standard both ways where possible." },
  { icon: Users, title: "Group Long Distance Transport", description: "Larger vehicles for groups travelling the same long-distance route together, rather than splitting across multiple cars." },
];

const cities = [
  { name: "Melbourne", code: "MEL", description: "Long-distance transfers connecting Melbourne with regional Victoria and interstate destinations." },
  { name: "Sydney", code: "SYD", description: "Interstate and regional transfers connecting Sydney with the Southern Highlands, Hunter Valley and beyond." },
  { name: "Canberra", code: "CBR", description: "Transfers connecting Canberra with Sydney, the South Coast and regional New South Wales." },
  { name: "Brisbane", code: "BNE", description: "Long-distance transfers connecting Brisbane with the Gold Coast, Sunshine Coast and regional Queensland." },
  { name: "Adelaide", code: "ADL", description: "Transfers connecting Adelaide with the Barossa Valley, Adelaide Hills and regional South Australia." },
  { name: "Gold Coast", code: "OOL", description: "Long-distance transfers connecting the Gold Coast with Brisbane and northern New South Wales." },
];

const fleetVehicles = [
  { icon: Car, name: "Executive Sedans", description: "Comfortable sedans suited to solo travellers or couples on longer journeys." },
  { icon: CarFront, name: "Luxury SUVs", description: "Extra space and comfort for families or longer trips with more luggage." },
  { icon: Users, name: "Group Vehicles", description: "Larger vehicles that keep groups together for the same long-distance journey." },
  { icon: Gauge, name: "Premium Long-Distance Vehicles", description: "Vehicles selected specifically for comfort over extended travel time." },
];

const bookingSteps = [
  { number: "01", title: "Request Quote", description: "Share your route, distance and travel date for a fixed-price quote." },
  { number: "02", title: "Confirm Booking", description: "Confirm your journey and receive your chauffeur and vehicle details." },
  { number: "03", title: "Meet Chauffeur", description: "Your chauffeur arrives on time, ready for the journey ahead." },
  { number: "04", title: "Enjoy Your Journey", description: "Relax in a comfortable vehicle for the full distance." },
];

const routes = [
  { route: "Melbourne → Geelong", duration: "60 min" },
  { route: "Sydney → Southern Highlands", duration: "90 min" },
  { route: "Canberra → Sydney", duration: "3 hr" },
  { route: "Adelaide → Barossa Valley", duration: "60 min" },
];

const testimonials = [
  { name: "Regional Traveller, Victoria", quote: "Booked a transfer from Melbourne down to a family event in Geelong. Far more comfortable than driving myself after a long week." },
  { name: "Wine Region Visitor, Adelaide", quote: "Used them for a return trip to the Barossa Valley. Same chauffeur both ways, and the price didn't change from the original quote." },
  { name: "Business Traveller, Canberra", quote: "Needed to get to Sydney for a meeting without flying. The chauffeur made it a genuinely productive few hours instead of a stressful drive." },
];

const faqs = [
  { question: "How far can I book a long distance chauffeur transfer?", answer: "We cover interstate and regional transfers well beyond standard metro coverage — get in touch with your route for a fixed-price quote." },
  { question: "Can I book rest stops during a long journey?", answer: "Yes, breaks can be planned into longer journeys based on your preferences." },
  { question: "Do you offer transfers to regional and country areas?", answer: "Yes, we provide transfers to regional towns, wine regions and country destinations beyond the major cities." },
  { question: "How much does a long distance transfer cost?", answer: "Pricing is a fixed, obligation-free quote based on your route, distance and vehicle type, agreed before you travel." },
  { question: "Can I book a return long distance journey?", answer: "Yes, your outbound and return journey can be booked together, with the same chauffeur and vehicle standard where possible." },
  { question: "Can you transfer us directly from the airport to a regional destination?", answer: "Yes, we offer direct airport to regional destination transfers, avoiding an extra connecting flight or transport leg." },
  { question: "Can I book a multi-stop road trip?", answer: "Yes, a single booking can cover several destinations along a route, with your chauffeur managing the driving throughout." },
  { question: "Can a group travel together on a long distance transfer?", answer: "Yes, we offer larger vehicles suited to groups travelling the same long-distance route together." },
  { question: "Is the price fixed for the whole journey?", answer: "Yes, your fare is agreed upfront for the full distance, regardless of traffic or road conditions along the way." },
  { question: "How far in advance should I book a long distance transfer?", answer: "We recommend booking as early as possible for longer or regional journeys, though we also accommodate shorter-notice requests where possible." },
  { question: "Are your chauffeurs experienced with long-distance driving?", answer: "Yes, chauffeurs assigned to long-distance bookings are experienced and comfortable with extended interstate and regional routes." },
  { question: "Are your chauffeurs licensed and insured?", answer: "Every chauffeur is licensed in line with state passenger transport regulations, and every trip is covered by comprehensive passenger insurance." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Long Distance Transfers",
  name: "Long Distance Transfers Australia",
  description: pageDescription,
  provider: { "@type": "LocalBusiness", name: "Australia Taxi Service" },
  areaServed: { "@type": "Country", name: "Australia" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Long Distance Transfer Services",
    itemListElement: serviceDetails.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.title, description: service.description },
    })),
  },
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
    { "@type": "ListItem", position: 2, name: "Long Distance Transfers", item: `${siteUrl}/long-distance-transfers` },
  ],
};

export default function LongDistanceTransfersPage() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />

      <ServiceHero
        title="Long Distance & Interstate Chauffeur Transfers"
        description="Comfortable, reliable long-distance chauffeur transfers between cities and regional destinations across Australia, with fixed pricing and professional drivers."
        primaryCta="Get Instant Quote"
        secondaryCta="Book Your Chauffeur"
        image="/hero.jpg"
        imageAlt="Luxury chauffeur vehicle on an Australian regional highway"
        breadcrumbItems={[{ label: "Long Distance Transfers", href: "/long-distance-transfers" }]}
      />

      <ContentBlock
        eyebrow="Getting Started"
        title="Understanding Long Distance Transfers"
        tone="white"
        paragraphs={[
          "A long distance transfer is a pre-booked, professional chauffeur journey that goes beyond a standard city trip — connecting cities, regions and interstate destinations in one vehicle, with one chauffeur, rather than a series of separate short trips or a self-driven journey.",
          "For longer journeys, comfort and reliability matter more, not less. A long drive is more tiring to do yourself, more expensive to piece together through short taxi hops, and less predictable if you're relying on regional public transport connections.",
          "Unlike a standard transfer, long distance bookings are planned around the whole journey — rest stops where needed, an experienced chauffeur comfortable with extended driving, and a vehicle suited to spending real time in rather than a short hop across town.",
          "The service suits travellers heading to regional events or family occasions, business travellers making an interstate trip without flying, visitors wanting to see wine regions or coastal towns beyond the city, and anyone who would rather not drive themselves for several hours.",
          "It can be booked one-way, as a return journey with the same chauffeur, or as a multi-stop road trip covering several destinations along the way.",
        ]}
      />

      <ContentBlock
        eyebrow="Our Advantage"
        title="Why Choose Our Long Distance Service"
        tone="ivory"
        paragraphs={[
          "Every long distance transfer is handled by a professional chauffeur experienced and comfortable with extended interstate and regional driving, not just short city trips, so the journey stays smooth and unhurried from start to finish.",
          "Vehicles are selected for comfort over distance, and rest stops can be planned into the journey based on your preferences, rather than a rigid non-stop drive.",
          "Because long journeys often mean early starts or late arrivals, our service is available 24/7, and door-to-door pickup means one vehicle covers the entire distance rather than juggling connections.",
          "Pricing is agreed before you travel for the whole journey, so there's no uncertainty about cost building up over the course of a longer trip.",
        ]}
      />

      <Features
        eyebrow="What Sets Us Apart"
        title="Long Distance Transport Built For The Journey"
        items={whyChooseFeatures}
      />

      <ServiceDetailList
        eyebrow="What We Offer"
        title="Long Distance Transfer Services"
        intro="Long distance travel covers a wide range of journeys, which is why our service is built around the full range of city-to-city, regional and multi-stop trips."
        items={serviceDetails}
      />

      <AirportsGrid
        eyebrow="Where We Operate"
        title="Cities We Connect"
        description="Long distance and interstate chauffeur transfers connecting Australia's major cities with regional and country destinations."
        items={cities}
      />

      <FleetShowcase
        eyebrow="Our Fleet"
        title="Vehicle Options"
        intro="Every vehicle in our fleet is selected for comfort and presentation, then cleaned and inspected between trips, with options suited specifically to extended long-distance travel."
        vehicles={fleetVehicles}
        tone="white"
      />

      <ContentBlock
        eyebrow="The Comparison"
        title="Long Distance Chauffeurs vs Self-Driving & Flying"
        tone="ivory"
        paragraphs={[
          "Against driving yourself, a long distance chauffeur removes the fatigue of a long drive entirely — no navigating unfamiliar roads or managing tiredness on a multi-hour trip, and no need to arrange parking at the other end.",
          "Against flying for shorter interstate distances, a chauffeured road journey skips airport check-in, security and boarding time, often making the door-to-door time comparable while offering a more direct, private journey.",
          "For regional and multi-stop trips specifically, a chauffeur offers flexibility that flying and self-driving both lack — stops can be added, timing can flex, and the itinerary can be planned around what you actually want to see or do along the way.",
        ]}
        highlights={[
          "No fatigue from driving long distances yourself",
          "Skips airport check-in and security time",
          "Flexible stops and multi-destination itineraries",
          "Fixed pricing for the whole journey",
        ]}
      />

      <BookingSteps
        eyebrow="Simple Process"
        title="Booking Process"
        intro="Booking a long distance transfer takes a few minutes. Share your route, distance and travel date, receive a fixed-price quote, confirm your booking, and your chauffeur takes care of the driving for the whole journey."
        steps={bookingSteps}
      />

      <RouteCards
        eyebrow="Frequently Travelled"
        title="Popular Long Distance Routes"
        intro="Certain city-to-region and interstate routes account for many of our long distance bookings. Below are a handful of examples with estimated travel times."
        routes={routes}
      />

      <ContentBlock
        eyebrow="Transparent Pricing"
        title="Pricing Information"
        tone="white"
        paragraphs={[
          "Every quote is calculated before you travel, based on your route, distance, vehicle type and any planned stops along the way. Submit your trip details through our booking form for a fixed price to review before confirming.",
          "A handful of factors influence the quote: total distance, vehicle category, whether the journey is one-way or a return booking, and any additional stops built into the itinerary.",
          "We operate on a fixed-price philosophy: the fare you're quoted for the full journey is the fare you pay, regardless of traffic, road conditions or how long the trip actually takes on the day.",
        ]}
      />

      <ContentBlock
        eyebrow="Peace Of Mind"
        title="Professional Chauffeurs"
        tone="ivory"
        paragraphs={[
          "Every chauffeur on our platform is licensed in accordance with state passenger transport regulations and selected for both driving experience and comfort with extended journeys. Vehicles are regularly serviced and inspected to a high standard before longer trips.",
          "Each trip is covered by comprehensive passenger liability insurance, and chauffeurs are trained to manage long-distance driving safely, including appropriate rest breaks on longer routes.",
          "Beyond the vehicle and the licence, chauffeurs assigned to long distance bookings are experienced with regional roads and interstate routes, not just city driving.",
        ]}
        highlights={[
          "Licensed, experienced professional chauffeurs",
          "Regular vehicle servicing and inspections",
          "Comprehensive passenger liability insurance",
          "Experienced with regional and interstate routes",
        ]}
      />

      <Testimonials
        eyebrow="Testimonials"
        title="What Our Customers Say"
        testimonials={testimonials}
      />

      <ServiceFAQ
        eyebrow="Questions & Answers"
        title="Frequently Asked Questions"
        faqs={faqs}
        image="/faq.jpg"
        imageAlt="Packed suitcase ready for travel"
        tone="ivory"
      />

      <ServiceCTA
        title="Book Your Long Distance Transfer Today"
        description="Get a fixed-price quote and travel in comfort with a professional chauffeur."
      />
    </main>
  );
}
