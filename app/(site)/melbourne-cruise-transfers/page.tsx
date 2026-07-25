import {
  Anchor,
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
import { RouteCards } from "@/components/services/RouteCards";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOfferings } from "@/components/services/ServiceOfferings";
import { Testimonials } from "@/components/services/Testimonials";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.australiataxiservice.com.au";
const pageTitle = "Melbourne Cruise Transfers | Station Pier & Port Melbourne Chauffeur";
const pageDescription =
  "Book premium Melbourne cruise transfers to and from Station Pier, Port Melbourne. Airport, hotel and city transfers to your cruise, with fixed pricing and 24/7 availability.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "Melbourne Cruise Transfers",
    "Station Pier Transfers",
    "Port Melbourne Cruise Chauffeur",
    "Melbourne Cruise Terminal Transfers",
    "Cruise Transfers Melbourne",
    "Airport To Cruise Melbourne",
  ],
  alternates: { canonical: "/melbourne-cruise-transfers" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/melbourne-cruise-transfers",
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
  { number: "01", icon: ShieldCheck, title: "Professional Chauffeurs", description: "Drivers experienced with Station Pier's drop-off zones and cruise timing." },
  { number: "02", icon: Car, title: "Luxury Vehicles", description: "A premium vehicle with room for cruise luggage and carry-ons." },
  { number: "03", icon: Banknote, title: "Fixed Pricing", description: "One upfront price agreed before you travel, with no surge charges." },
  { number: "04", icon: Clock, title: "24/7 Availability", description: "Early boarding times or late disembarkation — we're always available." },
  { number: "05", icon: Handshake, title: "Luggage Assistance", description: "Chauffeurs help load and unload cruise luggage at every stop." },
  { number: "06", icon: ShieldCheck, title: "Licensed Drivers", description: "Every chauffeur is licensed under Victorian passenger transport regulations." },
];

const cruiseBenefits = [
  { icon: Anchor, title: "Port Melbourne", description: "Direct transfers to and from the Port Melbourne cruise precinct." },
  { icon: Ship, title: "Station Pier", description: "Timed drop-offs and pickups at Station Pier's terminal entrance." },
  { icon: PlaneLanding, title: "Airport To Cruise", description: "Flight-tracked transfers straight from Melbourne Airport to your ship." },
  { icon: Building2, title: "Hotel To Cruise", description: "Seamless transfers from your Melbourne hotel to boarding." },
  { icon: Navigation, title: "Cruise To Airport", description: "Timed pickups after disembarkation for your onward flight." },
];

const melbourneAreas = [
  { icon: MapPin, title: "Port Melbourne", description: "Local pickups and drop-offs around the Station Pier precinct." },
  { icon: Building2, title: "Melbourne CBD", description: "Transfers between city hotels and the cruise terminal." },
  { icon: MapPin, title: "St Kilda", description: "Cruise transfers to and from St Kilda's hotels and homes." },
  { icon: MapPin, title: "Southbank", description: "Transfers from Southbank hotels straight to boarding." },
];

const fleetVehicles = [
  { icon: Car, name: "Executive Sedan", description: "A comfortable sedan suited to couples travelling to their cruise." },
  { icon: CarFront, name: "Luxury SUV", description: "Extra space for cruise luggage and passengers." },
  { icon: Users, name: "People Mover", description: "Generous capacity for families and larger cruise parties." },
  { icon: Crown, name: "Luxury Vehicle", description: "Our flagship option for a premium start or end to your cruise." },
];

const bookingSteps = [
  { number: "01", title: "Request Quote", description: "Share your cruise departure or arrival details for a fixed price." },
  { number: "02", title: "Receive Fixed Price", description: "Get an upfront, obligation-free quote before you confirm." },
  { number: "03", title: "Confirm Booking", description: "Confirm your transfer and receive your chauffeur details." },
  { number: "04", title: "Enjoy Your Journey", description: "Relax in a premium vehicle to or from Station Pier." },
];

const routes = [
  { route: "Melbourne Airport → Station Pier", duration: "30-35 min" },
  { route: "Melbourne CBD → Station Pier", duration: "15 min" },
  { route: "St Kilda → Station Pier", duration: "15 min" },
  { route: "Southbank → Station Pier", duration: "15 min" },
];

const testimonials = [
  { name: "Cruise Passenger, Station Pier", quote: "Chauffeur helped with all our luggage and had us at the terminal with plenty of time to spare." },
  { name: "Family Boarding At Port Melbourne", quote: "Booked an airport-to-cruise transfer and it was seamless — one driver, no stress, straight onto the ship." },
  { name: "Couple Returning From A Cruise", quote: "Driver was waiting right at disembarkation and got us to our flight with time to spare." },
];

const faqs = [
  { question: "How much does a Melbourne cruise transfer cost?", answer: "Pricing is a fixed, obligation-free quote based on your route, vehicle type and passenger numbers, agreed before you travel." },
  { question: "Do you provide transfers to Station Pier?", answer: "Yes, we provide transfers to and from Station Pier and the Port Melbourne cruise precinct." },
  { question: "Can I book a transfer straight from the airport to my cruise?", answer: "Yes, we offer flight-tracked transfers direct from Melbourne Airport to Station Pier." },
  { question: "Do you help with cruise luggage?", answer: "Yes, chauffeurs assist with loading and unloading luggage at every stop." },
  { question: "Can you pick me up from the cruise terminal after disembarkation?", answer: "Yes, we offer timed pickups from Station Pier after your cruise, including transfers to the airport or your hotel." },
  { question: "How early should I arrive for cruise boarding?", answer: "We plan your pickup time around your cruise line's recommended boarding window, with buffer time included." },
  { question: "Can I book a group transfer for multiple cabins?", answer: "Yes, we offer larger vehicles suited to families and groups travelling together." },
  { question: "Do you service other cruise terminals near Melbourne?", answer: "Our primary cruise terminal is Station Pier in Port Melbourne; contact us for other departure points." },
  { question: "Are Melbourne cruise chauffeurs licensed and insured?", answer: "Every chauffeur is licensed under Victorian passenger transport regulations, and every trip is covered by comprehensive passenger insurance." },
  { question: "How far in advance should I book a cruise transfer?", answer: "We recommend booking as soon as your cruise dates are confirmed, especially around peak cruise season." },
];

const relatedServices = [
  { icon: Crown, title: "Melbourne Chauffeur Service", description: "The full range of premium chauffeur services across Melbourne.", href: "/melbourne-chauffeur-service" },
  { icon: PlaneLanding, title: "Melbourne Airport Transfers", description: "Flight-tracked pickups and drop-offs at Melbourne Airport.", href: "/melbourne-airport-transfers" },
  { icon: Building2, title: "Melbourne City Transfers", description: "Door-to-door transfers around the CBD and inner suburbs.", href: "/melbourne-city-transfers" },
  { icon: MapPin, title: "Melbourne Hotel Transfers", description: "Seamless transfers between hotels, the airport and the city.", href: "/melbourne-hotel-transfers" },
  { icon: Briefcase, title: "Melbourne Corporate Chauffeur", description: "Reliable business travel for executives and visiting clients.", href: "/melbourne-corporate-chauffeur" },
  { icon: Heart, title: "Melbourne Wedding Chauffeur", description: "Elegant, on-time transport for your wedding day.", href: "/melbourne-wedding-chauffeur" },
  { icon: Navigation, title: "Airport → CBD", description: "Dedicated route page with pricing and travel time.", href: "/melbourne-airport-to-cbd" },
  { icon: Navigation, title: "Airport → Southbank", description: "Dedicated route page with pricing and travel time.", href: "/melbourne-airport-to-southbank" },
  { icon: Navigation, title: "Airport → St Kilda", description: "Dedicated route page with pricing and travel time.", href: "/melbourne-airport-to-st-kilda" },
  { icon: Navigation, title: "Airport → Docklands", description: "Dedicated route page with pricing and travel time.", href: "/melbourne-airport-to-docklands" },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Melbourne Cruise Transfers",
  name: "Melbourne Cruise Transfers",
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
    { "@type": "ListItem", position: 3, name: "Melbourne Cruise Transfers", item: `${siteUrl}/melbourne-cruise-transfers` },
  ],
};

export default function MelbourneCruiseTransfersPage() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />

      <ServiceHero
        title="Melbourne Cruise Transfers"
        description="Chauffeur transfers to and from Station Pier and Port Melbourne — airport, hotel and city pickups timed around your cruise, available 24/7."
        primaryCta="Request A Quote"
        secondaryCta="Call Now"
        secondaryHref="tel:+61480289196"
        image="/melbourne.jpeg"
        imageAlt="Melbourne city skyline at dusk"
        breadcrumbItems={[
          { label: "Melbourne Chauffeur Service", href: "/melbourne-chauffeur-service" },
          { label: "Melbourne Cruise Transfers", href: "/melbourne-cruise-transfers" },
        ]}
      />

      <ContentBlock
        eyebrow="Getting Started"
        title="Cruise Transfers Without The Stress"
        tone="white"
        paragraphs={[
          "A Melbourne cruise transfer takes the uncertainty out of the start and end of your cruise. Whether you're heading straight from the airport to Station Pier, or from your hotel to boarding, your chauffeur times the pickup around your cruise line's schedule and helps with luggage the whole way.",
          "Station Pier's drop-off zones can get busy on major departure days, and our chauffeurs know how to navigate the Port Melbourne precinct efficiently, getting you to the terminal with time to spare rather than rushing at the last minute.",
          "This service suits cruise passengers flying in for their departure, Melbourne locals heading to Station Pier, and anyone disembarking who needs a smooth, private transfer to their hotel or onward flight.",
        ]}
      />

      <Features eyebrow="Our Advantage" title="Why Choose Chauffeur Australia" items={whyChooseFeatures} />

      <ServiceOfferings
        eyebrow="The Benefits"
        title="Every Leg Of Your Cruise Journey"
        items={cruiseBenefits}
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
        intro="Every vehicle offers generous luggage capacity, ready for the start or end of your cruise."
        vehicles={fleetVehicles}
        tone="white"
      />

      <RouteCards
        eyebrow="Frequently Travelled"
        title="Popular Cruise Routes"
        intro="Some of the most requested transfers to and from Station Pier, each with an estimated travel time."
        routes={routes}
      />

      <BookingSteps
        eyebrow="Simple Process"
        title="Booking Process"
        intro="Booking a Melbourne cruise transfer takes a few minutes — share your cruise details, receive a fixed price, confirm your booking, and enjoy the journey."
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
        title="Book Your Melbourne Cruise Transfer Today"
        description="Get a fixed-price quote and travel in comfort with a professional Melbourne chauffeur."
        tone="gold"
      />
    </main>
  );
}
