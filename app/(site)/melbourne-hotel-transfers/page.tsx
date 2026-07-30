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
import { siteUrl } from "@/lib/site-config";

const pageTitle = "Melbourne Hotel Transfers | Luxury Chauffeur To & From Your Hotel";
const pageDescription =
  "Book premium Melbourne hotel transfers between the airport, your hotel, restaurants and cruise terminals. Professional chauffeurs, luxury vehicles and fixed pricing, 24/7.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "Melbourne Hotel Transfers",
    "Melbourne Hotel Chauffeur",
    "Hotel To Airport Melbourne",
    "Crown Towers Transfers",
    "Melbourne Hotel Pickup",
    "Luxury Hotel Transfers Melbourne",
  ],
  alternates: { canonical: "/melbourne-hotel-transfers" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/melbourne-hotel-transfers",
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
  { number: "01", icon: ShieldCheck, title: "Professional Chauffeurs", description: "Licensed drivers experienced with Melbourne's major hotel entrances and loading zones." },
  { number: "02", icon: Car, title: "Luxury Vehicles", description: "A premium, immaculately presented vehicle for every hotel transfer." },
  { number: "03", icon: Banknote, title: "Fixed Pricing", description: "One upfront price agreed before you travel, with no surge charges." },
  { number: "04", icon: Clock, title: "24/7 Availability", description: "Early checkouts or late arrivals — we're available around the clock." },
  { number: "05", icon: Handshake, title: "Concierge Coordination", description: "We liaise directly with hotel front desks where needed for a smooth pickup." },
  { number: "06", icon: ShieldCheck, title: "Licensed Drivers", description: "Every chauffeur is licensed under Victorian passenger transport regulations." },
];

const hotelBenefits = [
  { icon: PlaneLanding, title: "Airport To Hotel", description: "Flight-tracked pickup straight to your hotel's front entrance." },
  { icon: Building2, title: "Hotel To Airport", description: "Timed around your flight so you reach check-in with time to spare." },
  { icon: Utensils, title: "Hotel To Restaurants", description: "Dropped at the door for dinner reservations, picked up when you're ready." },
  { icon: Ship, title: "Hotel To Cruise Terminal", description: "Direct transfers to Station Pier for your cruise departure." },
  { icon: MapPin, title: "Hotel To Attractions", description: "Private transfers to Melbourne's galleries, sport and entertainment venues." },
];

const hotelsServed = [
  { icon: Crown, title: "Crown Towers", description: "Priority pickups and drop-offs at Crown's Southbank entrance." },
  { icon: Crown, title: "Grand Hyatt Melbourne", description: "Transfers to and from the Grand Hyatt on Collins Street." },
  { icon: Crown, title: "The Langham Melbourne", description: "Riverside pickups for guests staying at The Langham." },
  { icon: Crown, title: "Sofitel Melbourne", description: "Transfers to Sofitel's Collins Street tower entrance." },
  { icon: Crown, title: "Park Hyatt Melbourne", description: "Discreet pickups for guests near the Fitzroy Gardens." },
];

const fleetVehicles = [
  { icon: Car, name: "Executive Sedan", description: "A sleek, comfortable sedan suited to solo travellers and couples." },
  { icon: CarFront, name: "Luxury SUV", description: "Extra space for luggage and passengers, with a commanding ride." },
  { icon: Users, name: "People Mover", description: "Generous seating and luggage capacity for larger groups and families." },
  { icon: Crown, name: "Luxury Vehicle", description: "Our flagship fleet option for a five-star hotel arrival." },
];

const bookingSteps = [
  { number: "01", title: "Request Quote", description: "Share your hotel and pickup details for a fixed-price quote." },
  { number: "02", title: "Receive Fixed Price", description: "Get an upfront, obligation-free quote before you confirm." },
  { number: "03", title: "Confirm Booking", description: "Confirm your transfer and receive your chauffeur details." },
  { number: "04", title: "Enjoy Your Journey", description: "Your chauffeur meets you at the hotel entrance or arrivals." },
];

const routes = [
  { route: "Melbourne Airport → Crown Towers", duration: "30 min" },
  { route: "Melbourne Airport → Grand Hyatt Melbourne", duration: "25-30 min" },
  { route: "Melbourne Airport → The Langham Melbourne", duration: "30 min" },
  { route: "Melbourne Airport → Park Hyatt Melbourne", duration: "25 min" },
];

const testimonials = [
  { name: "Guest, Crown Towers", quote: "Chauffeur was waiting at arrivals and had us at the hotel entrance in half an hour. Effortless." },
  { name: "Guest, Grand Hyatt Melbourne", quote: "Booked transfers for our whole stay — airport, dinners and back to the airport. Same standard every time." },
  { name: "Guest, The Langham Melbourne", quote: "Driver coordinated with the concierge and had the car waiting right on time. Very smooth." },
];

const faqs = [
  { question: "How much do Melbourne hotel transfers cost?", answer: "Pricing is a fixed, obligation-free quote based on your route, vehicle type and passenger numbers, agreed before you travel." },
  { question: "Do you provide transfers to Crown Towers and other major hotels?", answer: "Yes, we regularly transfer guests to and from Crown Towers, Grand Hyatt, The Langham, Sofitel and Park Hyatt Melbourne." },
  { question: "Can you pick me up from my hotel for the airport?", answer: "Yes, we time your hotel pickup around your flight so you reach check-in with time to spare." },
  { question: "Do you transfer guests to restaurants or attractions?", answer: "Yes, our hotel transfer service covers restaurants, attractions and cruise terminal drop-offs." },
  { question: "Can I book transfers for my entire hotel stay?", answer: "Yes, many guests book a chauffeur for their whole stay, covering the airport, dining and departure." },
  { question: "Do you coordinate with hotel concierge staff?", answer: "Yes, we liaise directly with hotel front desks where needed for a smooth pickup." },
  { question: "Which Melbourne hotels do you service?", answer: "We service all major Melbourne hotels, including Crown Towers, Grand Hyatt, The Langham, Sofitel and Park Hyatt." },
  { question: "Can I book a return hotel transfer?", answer: "Yes, you can book your pickup and drop-off together, or arrange each leg separately." },
  { question: "Are Melbourne hotel chauffeurs licensed and insured?", answer: "Every chauffeur is licensed under Victorian passenger transport regulations, and every trip is covered by comprehensive passenger insurance." },
  { question: "How far in advance should I book a hotel transfer?", answer: "We recommend booking at least 24 hours ahead, though we also accommodate last-minute requests where availability allows." },
];

const relatedServices = [
  { icon: Crown, title: "Melbourne Chauffeur Service", description: "The full range of premium chauffeur services across Melbourne.", href: "/melbourne-chauffeur-service" },
  { icon: PlaneLanding, title: "Melbourne Airport Transfers", description: "Flight-tracked pickups and drop-offs at Melbourne Airport.", href: "/melbourne-airport-transfers" },
  { icon: Building2, title: "Melbourne City Transfers", description: "Door-to-door transfers around the CBD and inner suburbs.", href: "/melbourne-city-transfers" },
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
  serviceType: "Melbourne Hotel Transfers",
  name: "Melbourne Hotel Transfers",
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
    { "@type": "ListItem", position: 3, name: "Melbourne Hotel Transfers", item: `${siteUrl}/melbourne-hotel-transfers` },
  ],
};

export default function MelbourneHotelTransfersPage() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />

      <ServiceHero
        title="Melbourne Hotel Transfers"
        description="Seamless chauffeur transfers between Melbourne's leading hotels, the airport, restaurants and cruise terminals — professional drivers and fixed pricing, 24/7."
        primaryCta="Request A Quote"
        secondaryCta="Call Now"
        secondaryHref="tel:+61480289196"
        image="/melbourne.jpeg"
        imageAlt="Melbourne city skyline at dusk"
        breadcrumbItems={[
          { label: "Melbourne Chauffeur Service", href: "/melbourne-chauffeur-service" },
          { label: "Melbourne Hotel Transfers", href: "/melbourne-hotel-transfers" },
        ]}
      />

      <ContentBlock
        eyebrow="Getting Started"
        title="Hotel Transfers Done The Right Way"
        tone="white"
        paragraphs={[
          "A Melbourne hotel transfer covers every leg of your stay — from the airport to check-in, hotel to restaurant, or hotel straight to a departing cruise. Each trip is booked in advance for a fixed price, with a chauffeur who arrives at the hotel entrance, not a shared pickup zone down the street.",
          "Melbourne's five-star hotels each have their own entrance and loading arrangements, and our chauffeurs know them well — from Crown Towers' Southbank forecourt to the Park Hyatt's quieter Fitzroy Gardens approach. Where needed, we coordinate directly with the concierge so your pickup is seamless.",
          "This service suits guests who want every transfer during their stay handled to the same standard: one driver, one point of contact, and a fixed price agreed in advance regardless of traffic or time of day.",
        ]}
      />

      <Features eyebrow="Our Advantage" title="Why Choose Chauffeur Australia" items={whyChooseFeatures} />

      <ServiceOfferings
        eyebrow="The Benefits"
        title="Every Leg Of Your Stay Covered"
        items={hotelBenefits}
        tone="white"
      />

      <ServiceOfferings
        eyebrow="Hotels We Serve"
        title="Melbourne's Leading Hotels"
        items={hotelsServed}
        tone="ivory"
      />

      <FleetShowcase
        eyebrow="Vehicle Options"
        title="Choose Your Vehicle"
        intro="Every vehicle is selected for comfort and presentation, suited to arriving in style at any Melbourne hotel."
        vehicles={fleetVehicles}
        tone="white"
      />

      <RouteCards
        eyebrow="Frequently Travelled"
        title="Popular Hotel Routes"
        intro="Some of our most requested airport-to-hotel transfers, each with an estimated travel time."
        routes={routes}
      />

      <BookingSteps
        eyebrow="Simple Process"
        title="Booking Process"
        intro="Booking a Melbourne hotel transfer takes a few minutes — share your details, receive a fixed price, confirm your booking, and enjoy the journey."
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
        title="Book Your Melbourne Hotel Transfer Today"
        description="Get a fixed-price quote and travel in comfort with a professional Melbourne chauffeur."
        tone="gold"
      />
    </main>
  );
}
