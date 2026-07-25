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
  PlaneTakeoff,
  Ship,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.australiataxiservice.com.au";
const pageTitle = "Melbourne Airport Transfers | Luxury Chauffeur Pickups & Drop-Offs";
const pageDescription =
  "Book premium Melbourne Airport transfers with flight monitoring, meet and greet service and fixed pricing. Luxury chauffeur pickups and drop-offs at every terminal, 24/7.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "Melbourne Airport Transfers",
    "Melbourne Airport Chauffeur",
    "Tullamarine Airport Transfers",
    "Melbourne Airport Pickup",
    "Melbourne Airport Drop Off",
    "Luxury Airport Transfers Melbourne",
  ],
  alternates: {
    canonical: "/melbourne-airport-transfers",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/melbourne-airport-transfers",
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
    icon: PlaneLanding,
    title: "Flight Monitoring",
    description: "We track your flight number in real time, adjusting your pickup automatically for delays.",
  },
  {
    number: "02",
    icon: Handshake,
    title: "Meet & Greet",
    description: "Your chauffeur waits at arrivals with a name board, ready to help with luggage.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Professional Chauffeurs",
    description: "Licensed, uniformed drivers who know every Tullamarine terminal and access road.",
  },
  {
    number: "04",
    icon: Car,
    title: "Luxury Vehicles",
    description: "A premium, immaculately presented vehicle for every airport transfer.",
  },
  {
    number: "05",
    icon: Banknote,
    title: "Fixed Pricing",
    description: "One upfront price agreed before you travel, with no surge charges.",
  },
  {
    number: "06",
    icon: Clock,
    title: "24/7 Availability",
    description: "Early morning departures or late-night arrivals — we're always on call.",
  },
];

const melbourneAreas = [
  { icon: Building2, title: "Melbourne CBD", description: "Direct airport transfers into the CBD grid." },
  { icon: MapPin, title: "Southbank", description: "Airport pickups and drop-offs to Southbank and Crown." },
  { icon: MapPin, title: "Docklands", description: "Transfers to Docklands' waterfront apartments and offices." },
  { icon: MapPin, title: "St Kilda", description: "Airport transfers to St Kilda's beachside hotels and homes." },
  { icon: MapPin, title: "South Yarra", description: "Airport pickups to South Yarra and Chapel Street." },
];

const fleetVehicles = [
  { icon: Car, name: "Executive Sedan", description: "A sleek, comfortable sedan suited to solo travellers and couples." },
  { icon: CarFront, name: "Luxury SUV", description: "Extra space for luggage and passengers, with a commanding ride." },
  { icon: Users, name: "People Mover", description: "Generous seating and luggage capacity for larger groups and families." },
  { icon: Crown, name: "Luxury Vehicle", description: "Our flagship fleet option for VIP airport arrivals and departures." },
];

const bookingSteps = [
  { number: "01", title: "Request Quote", description: "Share your flight and pickup details for a fixed price." },
  { number: "02", title: "Receive Fixed Price", description: "Get an upfront, obligation-free quote before you confirm." },
  { number: "03", title: "Confirm Booking", description: "Confirm your transfer and receive your chauffeur details." },
  { number: "04", title: "Enjoy Your Journey", description: "Your chauffeur meets you at arrivals, tracking your flight." },
];

const routes = [
  { route: "Melbourne Airport → Melbourne CBD", duration: "25-30 min" },
  { route: "Melbourne Airport → Southbank", duration: "30 min" },
  { route: "Melbourne Airport → St Kilda", duration: "40 min" },
  { route: "Melbourne Airport → Docklands", duration: "25 min" },
];

const testimonials = [
  {
    name: "Business Traveller, Tullamarine",
    quote: "Flight was delayed nearly an hour and the chauffeur was still there tracking us. Didn't have to lift a finger.",
  },
  {
    name: "Family Arriving Into Melbourne",
    quote: "Spacious vehicle, driver helped with every bag, and no waiting around at arrivals. Perfect start to the trip.",
  },
  {
    name: "Executive Client, CBD",
    quote: "Immaculate vehicle and a genuinely professional chauffeur. This is how airport transfers should be.",
  },
];

const faqs = [
  {
    question: "How much does a Melbourne Airport transfer cost?",
    answer: "Pricing is a fixed, obligation-free quote based on your route, vehicle type and passenger numbers, agreed before you travel.",
  },
  {
    question: "Do you monitor flights for airport pickups?",
    answer: "Yes, we track your flight number in real time so your chauffeur adjusts your pickup time automatically for early arrivals or delays.",
  },
  {
    question: "Which terminals do you service at Melbourne Airport?",
    answer: "We provide pickups and drop-offs at all four terminals at Tullamarine, domestic and international.",
  },
  {
    question: "Do you offer a meet and greet service?",
    answer: "Yes, your chauffeur will meet you at arrivals with a name board and assist with your luggage.",
  },
  {
    question: "How far is Melbourne Airport from the CBD?",
    answer: "Melbourne Airport is around 23km from the CBD, with a typical chauffeur transfer taking 25-30 minutes outside peak traffic.",
  },
  {
    question: "Can I book a return airport transfer?",
    answer: "Yes, you can book your pickup and drop-off together, or arrange each leg separately.",
  },
  {
    question: "What happens if my flight is delayed?",
    answer: "Your chauffeur monitors your flight and adjusts the pickup time automatically at no extra cost.",
  },
  {
    question: "Do you provide child seats for family transfers?",
    answer: "Yes, child and booster seats are available on request when you book.",
  },
  {
    question: "Can I book a chauffeur for a large group?",
    answer: "Yes, we offer larger luxury vehicles suited to groups and families with additional luggage.",
  },
  {
    question: "How far in advance should I book my airport transfer?",
    answer: "We recommend booking at least 24 hours ahead, though we also accommodate last-minute requests where possible.",
  },
  {
    question: "Are your chauffeurs licensed and insured?",
    answer: "Every chauffeur is licensed under Victorian passenger transport regulations, and every trip is covered by comprehensive passenger insurance.",
  },
  {
    question: "Can I request a specific vehicle type?",
    answer: "Yes, you can request an executive sedan, luxury SUV, people mover or our flagship luxury vehicle when you book.",
  },
];

const relatedServices = [
  { icon: Crown, title: "Melbourne Chauffeur Service", description: "The full range of premium chauffeur services across Melbourne.", href: "/melbourne-chauffeur-service" },
  { icon: Building2, title: "Melbourne City Transfers", description: "Door-to-door transfers around the CBD and inner suburbs.", href: "/melbourne-city-transfers" },
  { icon: MapPin, title: "Melbourne Hotel Transfers", description: "Seamless transfers between hotels, the airport and the city.", href: "/melbourne-hotel-transfers" },
  { icon: Briefcase, title: "Melbourne Corporate Chauffeur", description: "Reliable business travel for executives and visiting clients.", href: "/melbourne-corporate-chauffeur" },
  { icon: Heart, title: "Melbourne Wedding Chauffeur", description: "Elegant, on-time transport for your wedding day.", href: "/melbourne-wedding-chauffeur" },
  { icon: Ship, title: "Melbourne Cruise Transfers", description: "Transfers to and from Station Pier and Port Melbourne.", href: "/melbourne-cruise-transfers" },
  { icon: Navigation, title: "Airport → CBD", description: "Dedicated route page with pricing and travel time.", href: "/melbourne-airport-to-cbd" },
  { icon: Navigation, title: "Airport → Southbank", description: "Dedicated route page with pricing and travel time.", href: "/melbourne-airport-to-southbank" },
  { icon: Navigation, title: "Airport → St Kilda", description: "Dedicated route page with pricing and travel time.", href: "/melbourne-airport-to-st-kilda" },
  { icon: Navigation, title: "Airport → Docklands", description: "Dedicated route page with pricing and travel time.", href: "/melbourne-airport-to-docklands" },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Melbourne Airport Transfers",
  name: "Melbourne Airport Transfers",
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
  ],
};

export default function MelbourneAirportTransfersPage() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />

      <ServiceHero
        title="Melbourne Airport Transfers"
        description="Flight-tracked chauffeur pickups and drop-offs at every Melbourne Airport terminal — professional drivers, luxury vehicles and fixed pricing, available 24/7."
        primaryCta="Request A Quote"
        secondaryCta="Call Now"
        secondaryHref="tel:+61480289196"
        image="/melbourne.jpeg"
        imageAlt="Melbourne city skyline at dusk"
        breadcrumbItems={[
          { label: "Melbourne Chauffeur Service", href: "/melbourne-chauffeur-service" },
          { label: "Melbourne Airport Transfers", href: "/melbourne-airport-transfers" },
        ]}
      />

      <ContentBlock
        eyebrow="Getting Started"
        title="Melbourne Airport Transfers, Done Properly"
        tone="white"
        paragraphs={[
          "A Melbourne Airport transfer with Chauffeur Australia is a pre-booked, door-to-door journey in a premium vehicle with a professional driver, arranged for a fixed price before you fly. Whether you're landing at Tullamarine for business, arriving for a holiday, or heading to a departing flight, your vehicle, driver and fare are all confirmed in advance.",
          "Tullamarine's four terminals can be confusing for anyone unfamiliar with the airport, and traffic on the Tullamarine Freeway varies sharply with the time of day. Our chauffeurs know the terminal layout, the fastest routes at any hour, and how to time a pickup so waiting time is never a problem for you or a cost blowout for your fare.",
          "This service suits business travellers who need to arrive composed, families juggling luggage and children, and anyone who prefers a private, comfortable transfer over a taxi rank queue or a shared ride-share trip.",
        ]}
      />

      <Features eyebrow="Our Advantage" title="Why Choose Chauffeur Australia" items={whyChooseFeatures} />

      <ContentBlock
        eyebrow="The Benefits"
        title="Benefits Of A Chauffeured Airport Transfer"
        tone="white"
        paragraphs={[
          "Unlike a taxi rank or a ride-share app, a chauffeured Melbourne Airport transfer is booked and priced before you travel. There's no queuing at the terminal, no metered surprises, and no uncertainty about who's picking you up or in what kind of vehicle.",
          "Flight delays are common, especially on international routes, and a chauffeur service is built around this reality. Your pickup time adjusts automatically to your actual arrival, not the scheduled one, so a late flight never leaves you stranded or costs you extra.",
        ]}
        highlights={[
          "Fixed pricing agreed before you fly",
          "Flight-tracked pickup timing",
          "Meet and greet at every terminal",
          "A private, comfortable cabin for the whole journey",
        ]}
      />

      <ServiceOfferings
        eyebrow="Where We Operate"
        title="Areas We Cover From The Airport"
        items={melbourneAreas}
        tone="ivory"
      />

      <FleetShowcase
        eyebrow="Vehicle Options"
        title="Choose Your Vehicle"
        intro="Every vehicle is selected for comfort and presentation, with generous luggage capacity for your Melbourne Airport transfer."
        vehicles={fleetVehicles}
        tone="white"
      />

      <RouteCards
        eyebrow="Frequently Travelled"
        title="Popular Airport Routes"
        intro="These are the most requested Melbourne Airport transfers, each with an estimated travel time so you can plan your pickup with confidence."
        routes={routes}
      />

      <BookingSteps
        eyebrow="Simple Process"
        title="Booking Process"
        intro="Booking a Melbourne Airport transfer takes a few minutes — share your flight details, receive a fixed price, confirm your booking, and your chauffeur takes care of the rest."
        steps={bookingSteps}
      />

      <Testimonials eyebrow="Testimonials" title="What Our Customers Say" testimonials={testimonials} tone="ivory" />

      <ServiceFAQ
        eyebrow="Questions & Answers"
        title="Frequently Asked Questions"
        faqs={faqs}
      />

      <ServiceOfferings
        eyebrow="Explore More"
        title="Related Services"
        items={relatedServices}
        tone="ivory"
      />

      <ServiceCTA
        title="Book Your Melbourne Airport Transfer Today"
        description="Get a fixed-price quote and travel in comfort with a professional Melbourne chauffeur."
        tone="gold"
      />
    </main>
  );
}
