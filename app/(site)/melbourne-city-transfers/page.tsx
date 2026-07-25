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
  Moon,
  Navigation,
  PlaneLanding,
  ShieldCheck,
  ShoppingBag,
  Ship,
  Users,
  Utensils,
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
const pageTitle = "Melbourne City Transfers | Luxury Chauffeur Around The CBD";
const pageDescription =
  "Book premium Melbourne city transfers for meetings, shopping, restaurants, sightseeing and events. Professional chauffeurs, luxury vehicles and fixed pricing, available 24/7.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "Melbourne City Transfers",
    "Melbourne Chauffeur CBD",
    "City Transfers Melbourne",
    "Melbourne Private Driver",
    "Melbourne Night Transfers",
    "Luxury City Transfers Melbourne",
  ],
  alternates: { canonical: "/melbourne-city-transfers" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/melbourne-city-transfers",
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
  { number: "01", icon: ShieldCheck, title: "Professional Chauffeurs", description: "Licensed drivers who know the CBD grid, trams and one-way streets." },
  { number: "02", icon: Car, title: "Luxury Vehicles", description: "A premium, immaculately presented vehicle for every city trip." },
  { number: "03", icon: Banknote, title: "Fixed Pricing", description: "One upfront price agreed before you travel, with no surge charges." },
  { number: "04", icon: Clock, title: "24/7 Availability", description: "Daytime meetings or late-night transfers — we're always available." },
  { number: "05", icon: Handshake, title: "Door-To-Door Service", description: "Direct pickup and drop-off, no walking to a rank or a pickup zone." },
  { number: "06", icon: ShieldCheck, title: "Licensed Drivers", description: "Every chauffeur is licensed under Victorian passenger transport regulations." },
];

const cityBenefits = [
  { icon: Briefcase, title: "Business Meetings", description: "Arrive composed with a quiet cabin to prepare between meetings." },
  { icon: ShoppingBag, title: "Shopping Trips", description: "Door-to-door transfers with room for bags between Bourke Street and Chapel Street." },
  { icon: Utensils, title: "Restaurants & Dining", description: "No parking search — dropped right at the door for dinner reservations." },
  { icon: MapPin, title: "Sightseeing", description: "A private driver for a half or full day exploring Melbourne's sights." },
  { icon: Users, title: "Events", description: "Reliable transfers to concerts, galas and major CBD events." },
  { icon: Moon, title: "Night Transfers", description: "Safe, comfortable transfers home after a late night in the city." },
];

const melbourneAreas = [
  { icon: Building2, title: "Melbourne CBD", description: "Fast pickups across the grid, from Collins Street to Bourke Street." },
  { icon: MapPin, title: "Southbank", description: "Transfers to Crown Towers, the arts precinct and the Yarra riverfront." },
  { icon: MapPin, title: "Docklands", description: "Waterfront apartment, office and stadium event transfers." },
  { icon: MapPin, title: "South Yarra", description: "Chapel Street shopping, dining and residential pickups." },
  { icon: MapPin, title: "Carlton", description: "Transfers around Lygon Street and the university precinct." },
];

const fleetVehicles = [
  { icon: Car, name: "Executive Sedan", description: "A sleek, comfortable sedan suited to solo travellers and couples." },
  { icon: CarFront, name: "Luxury SUV", description: "Extra space for luggage and passengers, with a commanding ride." },
  { icon: Users, name: "People Mover", description: "Generous seating and luggage capacity for larger groups and families." },
  { icon: Crown, name: "Luxury Vehicle", description: "Our flagship fleet option for a special occasion around the city." },
];

const bookingSteps = [
  { number: "01", title: "Request Quote", description: "Share your Melbourne pickup and drop-off details." },
  { number: "02", title: "Receive Fixed Price", description: "Get an upfront, obligation-free quote before you confirm." },
  { number: "03", title: "Confirm Booking", description: "Confirm your transfer and receive your chauffeur details." },
  { number: "04", title: "Enjoy Your Journey", description: "Relax in a premium vehicle around Melbourne." },
];

const routes = [
  { route: "Melbourne CBD → Southbank", duration: "10 min" },
  { route: "Melbourne CBD → South Yarra", duration: "15 min" },
  { route: "Melbourne CBD → St Kilda", duration: "20 min" },
  { route: "Melbourne CBD → Docklands", duration: "10 min" },
];

const testimonials = [
  { name: "Shopper, Chapel Street", quote: "Booked a chauffeur for a full day of shopping. Bags in the boot, no walking, no stress." },
  { name: "Diner, Southbank", quote: "Dropped right at the restaurant door and picked up after dessert. Exactly what we wanted." },
  { name: "Concertgoer, Docklands", quote: "No parking search after the show, just a driver waiting exactly where we asked." },
];

const faqs = [
  { question: "How much do Melbourne city transfers cost?", answer: "Pricing is a fixed, obligation-free quote based on your route, vehicle type and passenger numbers, agreed before you travel." },
  { question: "Can I book a chauffeur for shopping or dining in Melbourne?", answer: "Yes, our city transfer service covers shopping trips, restaurant transfers and sightseeing around Melbourne." },
  { question: "Do you offer late-night city transfers?", answer: "Yes, we operate 24/7, including late-night transfers home after events or dinner." },
  { question: "Can I book a chauffeur for a full day around the city?", answer: "Yes, our private driver service is available by the hour or by the day for city trips." },
  { question: "Which Melbourne areas do city transfers cover?", answer: "We cover the CBD, Southbank, Docklands, South Yarra, Carlton and greater inner Melbourne." },
  { question: "Can I book a return city transfer?", answer: "Yes, you can book your pickup and drop-off together, or arrange each leg separately." },
  { question: "Do you provide chauffeurs for events in the city?", answer: "Yes, we provide group transfers for concerts, galas and major CBD events." },
  { question: "Are Melbourne city chauffeurs licensed and insured?", answer: "Every chauffeur is licensed under Victorian passenger transport regulations, and every trip is covered by comprehensive passenger insurance." },
  { question: "How far in advance should I book a city transfer?", answer: "We recommend booking at least a few hours ahead, though we also accommodate last-minute requests where availability allows." },
  { question: "Can I request a specific vehicle for my city transfer?", answer: "Yes, you can request an executive sedan, luxury SUV, people mover or our flagship luxury vehicle when you book." },
];

const relatedServices = [
  { icon: Crown, title: "Melbourne Chauffeur Service", description: "The full range of premium chauffeur services across Melbourne.", href: "/melbourne-chauffeur-service" },
  { icon: PlaneLanding, title: "Melbourne Airport Transfers", description: "Flight-tracked pickups and drop-offs at Melbourne Airport.", href: "/melbourne-airport-transfers" },
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
  serviceType: "Melbourne City Transfers",
  name: "Melbourne City Transfers",
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
    { "@type": "ListItem", position: 3, name: "Melbourne City Transfers", item: `${siteUrl}/melbourne-city-transfers` },
  ],
};

export default function MelbourneCityTransfersPage() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />

      <ServiceHero
        title="Melbourne City Transfers"
        description="Private, door-to-door chauffeur transfers around Melbourne for meetings, shopping, dining and events — professional drivers and fixed pricing, available 24/7."
        primaryCta="Request A Quote"
        secondaryCta="Call Now"
        secondaryHref="tel:+61480289196"
        image="/melbourne.jpeg"
        imageAlt="Melbourne city skyline at dusk"
        breadcrumbItems={[
          { label: "Melbourne Chauffeur Service", href: "/melbourne-chauffeur-service" },
          { label: "Melbourne City Transfers", href: "/melbourne-city-transfers" },
        ]}
      />

      <ContentBlock
        eyebrow="Getting Started"
        title="Private Transfers Around Melbourne"
        tone="white"
        paragraphs={[
          "A Melbourne city transfer is a private, door-to-door journey around town — no walking to a rank, no ride-share uncertainty, just a chauffeur waiting exactly where and when you need them. It suits a single trip across town or a full day of stops booked as one continuous service.",
          "Melbourne's CBD grid, tram network and one-way streets can slow down anyone unfamiliar with the city, especially around events at Marvel Stadium or the MCG. Our chauffeurs drive these streets daily, so your trip takes the route that actually works at that time of day.",
          "This service suits business travellers moving between meetings, shoppers and diners who'd rather skip the parking search, and anyone who wants a private, comfortable way to get around Melbourne.",
        ]}
      />

      <Features eyebrow="Our Advantage" title="Why Choose Chauffeur Australia" items={whyChooseFeatures} />

      <ServiceOfferings
        eyebrow="The Benefits"
        title="Built For Every City Trip"
        items={cityBenefits}
        tone="white"
      />

      <ServiceOfferings
        eyebrow="Where We Operate"
        title="Melbourne Areas We Serve"
        items={melbourneAreas}
        tone="ivory"
      />

      <FleetShowcase
        eyebrow="Vehicle Options"
        title="Choose Your Vehicle"
        intro="Every vehicle is selected for comfort and presentation, ready for a single city trip or a full day around Melbourne."
        vehicles={fleetVehicles}
        tone="white"
      />

      <RouteCards
        eyebrow="Frequently Travelled"
        title="Popular City Routes"
        intro="Some of the most requested transfers around inner Melbourne, each with an estimated travel time."
        routes={routes}
      />

      <BookingSteps
        eyebrow="Simple Process"
        title="Booking Process"
        intro="Booking a Melbourne city transfer takes a few minutes — share your trip details, receive a fixed price, confirm your booking, and enjoy the journey."
        steps={bookingSteps}
      />

      <Testimonials eyebrow="Testimonials" title="What Our Customers Say" testimonials={testimonials} tone="ivory" />

      <ServiceFAQ eyebrow="Questions & Answers" title="Frequently Asked Questions" faqs={faqs} />

      <ServiceOfferings
        eyebrow="Explore More"
        title="Related Services"
        items={relatedServices}
        tone="ivory"
      />

      <ServiceCTA
        title="Book Your Melbourne City Transfer Today"
        description="Get a fixed-price quote and travel in comfort with a professional Melbourne chauffeur."
        tone="gold"
      />
    </main>
  );
}
