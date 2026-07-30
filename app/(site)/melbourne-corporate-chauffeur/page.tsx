import {
  Banknote,
  Briefcase,
  Building2,
  Car,
  CarFront,
  Clock,
  Crown,
  FileText,
  Handshake,
  Heart,
  MapPin,
  Navigation,
  PlaneLanding,
  Presentation,
  ShieldCheck,
  Ship,
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
import { siteUrl } from "@/lib/site-config";

const pageTitle = "Corporate Chauffeur Melbourne | Business Travel & Executive Transfers";
const pageDescription =
  "Book a corporate chauffeur in Melbourne for executives, meetings, conferences and roadshows. Professional drivers, corporate accounts and fixed pricing, available 24/7.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "Corporate Chauffeur Melbourne",
    "Melbourne Business Chauffeur",
    "Executive Transfers Melbourne",
    "Melbourne Corporate Travel",
    "Melbourne Roadshow Transfers",
    "Corporate Accounts Melbourne",
  ],
  alternates: { canonical: "/melbourne-corporate-chauffeur" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/melbourne-corporate-chauffeur",
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
  { number: "01", icon: ShieldCheck, title: "Professional Chauffeurs", description: "Discreet, punctual drivers experienced with corporate schedules." },
  { number: "02", icon: Car, title: "Luxury Vehicles", description: "A premium, quiet cabin suited to calls and preparation on the move." },
  { number: "03", icon: Banknote, title: "Fixed Pricing", description: "Transparent, agreed pricing with invoicing available for accounts." },
  { number: "04", icon: Clock, title: "24/7 Availability", description: "Early flights, late meetings or multi-day roadshows — always available." },
  { number: "05", icon: FileText, title: "Corporate Accounts", description: "Recurring bookings and monthly invoicing for teams that travel often." },
  { number: "06", icon: ShieldCheck, title: "Licensed Drivers", description: "Every chauffeur is licensed under Victorian passenger transport regulations." },
];

const corporateBenefits = [
  { icon: Briefcase, title: "Business Executives", description: "Punctual, discreet transfers for executives who need to arrive composed." },
  { icon: Presentation, title: "Meetings", description: "Door-to-door transfers between back-to-back meetings across the CBD." },
  { icon: Users, title: "Conferences", description: "Group transfers for delegates attending Melbourne conferences and summits." },
  { icon: Navigation, title: "Roadshows", description: "Multi-stop, multi-day transport for teams running a Melbourne roadshow." },
  { icon: PlaneLanding, title: "Airport Transfers", description: "Flight-tracked pickups for visiting executives and travelling staff." },
  { icon: FileText, title: "Corporate Accounts", description: "Set up an account for recurring bookings and simplified invoicing." },
];

const melbourneAreas = [
  { icon: Building2, title: "Melbourne CBD", description: "Transfers across the business district, from Collins Street to Docklands." },
  { icon: MapPin, title: "Southbank", description: "Corporate transfers to Southbank's offices and conference venues." },
  { icon: MapPin, title: "Docklands", description: "Transfers to Docklands' corporate offices and event spaces." },
  { icon: MapPin, title: "South Yarra", description: "Business transfers to South Yarra's corporate and hospitality precinct." },
];

const fleetVehicles = [
  { icon: Car, name: "Executive Sedan", description: "A quiet, comfortable sedan suited to individual executive travel." },
  { icon: CarFront, name: "Luxury SUV", description: "Extra space for laptops, luggage and colleagues travelling together." },
  { icon: Users, name: "People Mover", description: "Ideal for transporting a full team or conference delegation together." },
  { icon: Crown, name: "Luxury Vehicle", description: "Our flagship option for VIP clients and senior executives." },
];

const bookingSteps = [
  { number: "01", title: "Request Quote", description: "Share your itinerary or set up a recurring corporate account." },
  { number: "02", title: "Receive Fixed Price", description: "Get an upfront, obligation-free quote or account pricing." },
  { number: "03", title: "Confirm Booking", description: "Confirm your transfer or ongoing schedule with your account manager." },
  { number: "04", title: "Enjoy Your Journey", description: "Your chauffeur handles the driving while you focus on business." },
];

const routes = [
  { route: "Melbourne Airport → Melbourne CBD", duration: "25-30 min" },
  { route: "Melbourne CBD → Southbank", duration: "10 min" },
  { route: "Melbourne CBD → Docklands", duration: "10 min" },
  { route: "Melbourne CBD → South Yarra", duration: "15 min" },
];

const testimonials = [
  { name: "Finance Executive, Melbourne CBD", quote: "Set up a corporate account and every transfer since has been faultless. Invoicing is simple too." },
  { name: "Conference Organiser, Southbank", quote: "Coordinated transfers for 20 delegates across two days without a single delay." },
  { name: "Sales Director, Visiting Melbourne", quote: "Used the roadshow service across three cities — Melbourne's team was the most polished." },
];

const faqs = [
  { question: "How much does a corporate chauffeur cost in Melbourne?", answer: "Pricing is a fixed, obligation-free quote based on your route, vehicle type and passenger numbers, with corporate account pricing available." },
  { question: "Do you offer corporate accounts?", answer: "Yes, we offer corporate accounts with recurring bookings and monthly invoicing for businesses that travel regularly." },
  { question: "Can you manage transfers for a full conference or roadshow?", answer: "Yes, we coordinate multi-stop, multi-day transfers for conferences, roadshows and delegate groups." },
  { question: "Do you provide airport transfers for visiting executives?", answer: "Yes, we provide flight-tracked airport pickups for executives and clients visiting Melbourne." },
  { question: "Can I book a chauffeur for a full day of meetings?", answer: "Yes, our corporate chauffeur service is available by the hour or by the day for back-to-back meetings." },
  { question: "Which Melbourne business districts do you cover?", answer: "We cover the CBD, Southbank, Docklands, South Yarra and greater Melbourne." },
  { question: "Can I request the same chauffeur for repeat bookings?", answer: "Yes, where possible we match corporate accounts with the same chauffeur for consistency." },
  { question: "Are your corporate chauffeurs licensed and insured?", answer: "Every chauffeur is licensed under Victorian passenger transport regulations, and every trip is covered by comprehensive passenger insurance." },
  { question: "How do I set up a corporate account?", answer: "Contact us with your business details and travel requirements, and we'll set up an account with agreed pricing and invoicing." },
  { question: "Can I request a specific vehicle for corporate travel?", answer: "Yes, you can request an executive sedan, luxury SUV, people mover or our flagship luxury vehicle for your booking." },
];

const relatedServices = [
  { icon: Crown, title: "Melbourne Chauffeur Service", description: "The full range of premium chauffeur services across Melbourne.", href: "/melbourne-chauffeur-service" },
  { icon: PlaneLanding, title: "Melbourne Airport Transfers", description: "Flight-tracked pickups and drop-offs at Melbourne Airport.", href: "/melbourne-airport-transfers" },
  { icon: Building2, title: "Melbourne City Transfers", description: "Door-to-door transfers around the CBD and inner suburbs.", href: "/melbourne-city-transfers" },
  { icon: MapPin, title: "Melbourne Hotel Transfers", description: "Seamless transfers between hotels, the airport and the city.", href: "/melbourne-hotel-transfers" },
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
  serviceType: "Corporate Chauffeur Melbourne",
  name: "Corporate Chauffeur Melbourne",
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
    { "@type": "ListItem", position: 3, name: "Corporate Chauffeur Melbourne", item: `${siteUrl}/melbourne-corporate-chauffeur` },
  ],
};

export default function MelbourneCorporateChauffeurPage() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />

      <ServiceHero
        title="Corporate Chauffeur Melbourne"
        description="Reliable, professional chauffeur transport for Melbourne executives, meetings, conferences and roadshows — corporate accounts and fixed pricing, available 24/7."
        primaryCta="Request A Quote"
        secondaryCta="Call Now"
        secondaryHref="tel:+61480289196"
        image="/melbourne.jpeg"
        imageAlt="Melbourne city skyline at dusk"
        breadcrumbItems={[
          { label: "Melbourne Chauffeur Service", href: "/melbourne-chauffeur-service" },
          { label: "Corporate Chauffeur Melbourne", href: "/melbourne-corporate-chauffeur" },
        ]}
      />

      <ContentBlock
        eyebrow="Getting Started"
        title="Corporate Travel Built Around Your Schedule"
        tone="white"
        paragraphs={[
          "A corporate chauffeur in Melbourne means one less thing to manage on a business trip. Your vehicle, driver and pricing are confirmed in advance, so you can move between meetings, the airport and events without worrying about parking, traffic or last-minute bookings.",
          "For businesses that travel often, a corporate account simplifies things further — recurring bookings, consistent vehicle standards, and monthly invoicing instead of individual receipts. It's a service built for finance teams as much as the executives who use it.",
          "This service suits visiting executives, sales teams running a roadshow, conference organisers coordinating delegates, and any Melbourne business that wants transport handled to a consistent, professional standard.",
        ]}
      />

      <Features eyebrow="Our Advantage" title="Why Choose Chauffeur Australia" items={whyChooseFeatures} />

      <ServiceOfferings
        eyebrow="The Benefits"
        title="Built For Corporate Travel"
        items={corporateBenefits}
        tone="white"
      />

      <ServiceOfferings
        eyebrow="Where We Operate"
        title="Melbourne Business Districts We Serve"
        items={melbourneAreas}
        tone="ivory"
      />

      <FleetShowcase
        eyebrow="Vehicle Options"
        title="Choose Your Vehicle"
        intro="Every vehicle is selected for comfort and presentation, suited to executive travel and team transport alike."
        vehicles={fleetVehicles}
        tone="white"
      />

      <RouteCards
        eyebrow="Frequently Travelled"
        title="Popular Corporate Routes"
        intro="Some of the most requested corporate transfers around Melbourne, each with an estimated travel time."
        routes={routes}
      />

      <BookingSteps
        eyebrow="Simple Process"
        title="Booking Process"
        intro="Booking a corporate chauffeur takes a few minutes — share your itinerary or set up an account, receive a fixed price, confirm your booking, and let us handle the driving."
        steps={bookingSteps}
      />

      <Testimonials eyebrow="Testimonials" title="What Our Corporate Clients Say" testimonials={testimonials} tone="ivory" />

      <ServiceFAQ eyebrow="Questions & Answers" title="Frequently Asked Questions" faqs={faqs} />

      <ServiceOfferings
        eyebrow="Explore More"
        title="Related Services"
        items={relatedServices}
        tone="ivory"
      />

      <ServiceCTA
        title="Book Your Melbourne Corporate Chauffeur Today"
        description="Get a fixed-price quote or set up a corporate account with a professional Melbourne chauffeur service."
        tone="gold"
      />
    </main>
  );
}
