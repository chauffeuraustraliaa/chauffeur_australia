import {
  Banknote,
  Briefcase,
  Building2,
  Camera,
  Car,
  CarFront,
  Church,
  Clock,
  Crown,
  Flower2,
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
import { siteUrl } from "@/lib/site-config";

const pageTitle = "Wedding Chauffeur Melbourne | Luxury Bridal Car Hire";
const pageDescription =
  "Book a wedding chauffeur in Melbourne for the bride, groom and guests. Luxury vehicles, on-time service and photography-ready cars for your wedding day, available 24/7.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "Wedding Chauffeur Melbourne",
    "Melbourne Wedding Car Hire",
    "Bridal Car Melbourne",
    "Wedding Transport Melbourne",
    "Luxury Wedding Chauffeur",
    "Melbourne Wedding Vehicles",
  ],
  alternates: { canonical: "/melbourne-wedding-chauffeur" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/melbourne-wedding-chauffeur",
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
  { number: "01", icon: ShieldCheck, title: "Professional Chauffeurs", description: "Punctual, dressed drivers who understand a wedding day's tight schedule." },
  { number: "02", icon: Car, title: "Luxury Vehicles", description: "Immaculately presented cars, ready for photographs from every angle." },
  { number: "03", icon: Banknote, title: "Fixed Pricing", description: "One upfront price for your wedding day, agreed well in advance." },
  { number: "04", icon: Clock, title: "On-Time Guarantee", description: "Chauffeurs arrive early and plan around ceremony and reception timing." },
  { number: "05", icon: Handshake, title: "Coordinated Timing", description: "We work with your planner or venue to fit around the day's schedule." },
  { number: "06", icon: ShieldCheck, title: "Licensed Drivers", description: "Every chauffeur is licensed under Victorian passenger transport regulations." },
];

const weddingBenefits = [
  { icon: Heart, title: "Bride & Groom", description: "A dedicated luxury vehicle and chauffeur for the wedding party's big moments." },
  { icon: Crown, title: "Luxury Vehicles", description: "A premium fleet selected for presentation and comfort on the day." },
  { icon: Church, title: "Wedding Venues", description: "Transfers between ceremony and reception venues across Melbourne." },
  { icon: Camera, title: "Photography Locations", description: "Stops at your chosen photo locations, worked into the day's timeline." },
  { icon: Users, title: "Guest Transport", description: "Group transfers for wedding guests between hotels and the venue." },
];

const melbourneAreas = [
  { icon: Flower2, title: "Melbourne Botanic Gardens", description: "A popular photography stop, easily worked into your day's route." },
  { icon: Building2, title: "Melbourne CBD", description: "City venues and rooftop receptions across the CBD." },
  { icon: MapPin, title: "Yarra Valley", description: "Vineyard weddings and receptions in the Yarra Valley." },
  { icon: MapPin, title: "Mornington Peninsula", description: "Coastal ceremony and reception venues around the Peninsula." },
];

const fleetVehicles = [
  { icon: Car, name: "Executive Sedan", description: "An elegant sedan suited to the bride, groom or wedding party." },
  { icon: CarFront, name: "Luxury SUV", description: "A commanding, photogenic vehicle with room for a wedding dress." },
  { icon: Users, name: "People Mover", description: "Comfortable transport for bridesmaids, groomsmen or family groups." },
  { icon: Crown, name: "Luxury Vehicle", description: "Our flagship vehicle, presented to the highest standard for your day." },
];

const bookingSteps = [
  { number: "01", title: "Request Quote", description: "Share your wedding date, venues and vehicle preferences." },
  { number: "02", title: "Receive Fixed Price", description: "Get an upfront quote for your entire wedding day transport." },
  { number: "03", title: "Confirm Booking", description: "Lock in your chauffeur, vehicle and timeline well ahead of the day." },
  { number: "04", title: "Enjoy Your Journey", description: "Relax and let your chauffeur manage the timing on the day." },
];

const routes = [
  { route: "Bridal Home → Ceremony Venue", duration: "Varies by suburb" },
  { route: "Ceremony Venue → Photo Location", duration: "Varies by suburb" },
  { route: "Photo Location → Reception Venue", duration: "Varies by suburb" },
  { route: "Reception Venue → Hotel", duration: "Varies by suburb" },
];

const testimonials = [
  { name: "Bride, South Yarra Wedding", quote: "The car was immaculate and the driver worked perfectly around our photographer's schedule. Zero stress." },
  { name: "Groom, Yarra Valley Wedding", quote: "Picked us up early, waited patiently through photos, and had us at the reception right on time." },
  { name: "Wedding Planner, Melbourne", quote: "I recommend this chauffeur service to every couple I work with. Always punctual, always presented perfectly." },
];

const faqs = [
  { question: "How much does a wedding chauffeur cost in Melbourne?", answer: "Pricing is a fixed, obligation-free quote based on your wedding date, vehicle choice and the number of stops on the day." },
  { question: "Can the chauffeur wait during the ceremony and photos?", answer: "Yes, waiting time is built into your wedding day booking so the car and driver are ready whenever you need them." },
  { question: "Do you provide transport for the whole wedding party?", answer: "Yes, we offer people movers and multiple vehicles for bridesmaids, groomsmen and family transport." },
  { question: "Can I choose specific photo locations for the route?", answer: "Yes, share your planned photo locations and we'll work them into your day's timeline." },
  { question: "How far in advance should I book a wedding chauffeur?", answer: "We recommend booking as early as possible, ideally several months ahead, to secure your preferred vehicle and date." },
  { question: "Do you service weddings outside Melbourne, like the Yarra Valley?", answer: "Yes, we cover Yarra Valley, Mornington Peninsula and other popular Victorian wedding regions." },
  { question: "Can I request a specific vehicle colour or style?", answer: "Yes, let us know your preference and we'll match you with a suitable vehicle from our fleet." },
  { question: "Is the price fixed even if the day runs long?", answer: "We build reasonable waiting time into your quote upfront, so unexpected minor delays are already accounted for." },
  { question: "Are Melbourne wedding chauffeurs licensed and insured?", answer: "Every chauffeur is licensed under Victorian passenger transport regulations, and every trip is covered by comprehensive passenger insurance." },
  { question: "Can I book transport for guests as well as the bridal party?", answer: "Yes, we can arrange separate guest transfers between hotels and the venue alongside your bridal car." },
];

const relatedServices = [
  { icon: Crown, title: "Melbourne Chauffeur Service", description: "The full range of premium chauffeur services across Melbourne.", href: "/melbourne-chauffeur-service" },
  { icon: PlaneLanding, title: "Melbourne Airport Transfers", description: "Flight-tracked pickups and drop-offs at Melbourne Airport.", href: "/melbourne-airport-transfers" },
  { icon: Building2, title: "Melbourne City Transfers", description: "Door-to-door transfers around the CBD and inner suburbs.", href: "/melbourne-city-transfers" },
  { icon: MapPin, title: "Melbourne Hotel Transfers", description: "Seamless transfers between hotels, the airport and the city.", href: "/melbourne-hotel-transfers" },
  { icon: Briefcase, title: "Melbourne Corporate Chauffeur", description: "Reliable business travel for executives and visiting clients.", href: "/melbourne-corporate-chauffeur" },
  { icon: Ship, title: "Melbourne Cruise Transfers", description: "Transfers to and from Station Pier and Port Melbourne.", href: "/melbourne-cruise-transfers" },
  { icon: Navigation, title: "Airport → CBD", description: "Dedicated route page with pricing and travel time.", href: "/melbourne-airport-to-cbd" },
  { icon: Navigation, title: "Airport → Southbank", description: "Dedicated route page with pricing and travel time.", href: "/melbourne-airport-to-southbank" },
  { icon: Navigation, title: "Airport → St Kilda", description: "Dedicated route page with pricing and travel time.", href: "/melbourne-airport-to-st-kilda" },
  { icon: Navigation, title: "Airport → Docklands", description: "Dedicated route page with pricing and travel time.", href: "/melbourne-airport-to-docklands" },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Wedding Chauffeur Melbourne",
  name: "Wedding Chauffeur Melbourne",
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
    { "@type": "ListItem", position: 3, name: "Wedding Chauffeur Melbourne", item: `${siteUrl}/melbourne-wedding-chauffeur` },
  ],
};

export default function MelbourneWeddingChauffeurPage() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />

      <ServiceHero
        title="Wedding Chauffeur Melbourne"
        description="Elegant, on-time chauffeur transport for your Melbourne wedding day — luxury vehicles for the bride, groom and guests, presented to perfection."
        primaryCta="Request A Quote"
        secondaryCta="Call Now"
        secondaryHref="tel:+61480289196"
        image="/melbourne.jpeg"
        imageAlt="Melbourne city skyline at dusk"
        breadcrumbItems={[
          { label: "Melbourne Chauffeur Service", href: "/melbourne-chauffeur-service" },
          { label: "Wedding Chauffeur Melbourne", href: "/melbourne-wedding-chauffeur" },
        ]}
      />

      <ContentBlock
        eyebrow="Getting Started"
        title="Your Wedding Day, Perfectly Timed"
        tone="white"
        paragraphs={[
          "A wedding day runs on a tight, unforgiving schedule, and transport is one detail that simply can't go wrong. Our Melbourne wedding chauffeur service is built around your exact timeline — ceremony, photos, reception and beyond — with a presented vehicle and a driver who treats the day with the care it deserves.",
          "From a city ceremony in the CBD to a vineyard reception in the Yarra Valley, our chauffeurs plan the route and timing in advance, building in time for photos and the inevitable small delays that come with any wedding day.",
          "This service suits couples who want one less thing to worry about on their wedding day, wedding planners coordinating multiple moving parts, and wedding parties who want their transport to look as good as everything else on the day.",
        ]}
      />

      <Features eyebrow="Our Advantage" title="Why Choose Chauffeur Australia" items={whyChooseFeatures} />

      <ServiceOfferings
        eyebrow="The Benefits"
        title="Built For Your Wedding Day"
        items={weddingBenefits}
        tone="white"
      />

      <ServiceOfferings
        eyebrow="Popular Locations"
        title="Melbourne Wedding Venues We Serve"
        items={melbourneAreas}
        tone="ivory"
      />

      <FleetShowcase
        eyebrow="Vehicle Options"
        title="Choose Your Wedding Vehicle"
        intro="Every vehicle is presented to the highest standard, ready for photographs and a comfortable ride on the day."
        vehicles={fleetVehicles}
        tone="white"
      />

      <RouteCards
        eyebrow="A Typical Wedding Day"
        title="Popular Wedding Day Routes"
        intro="Every wedding is different, but most Melbourne wedding days follow a similar shape — here's how the transfers typically flow."
        routes={routes}
      />

      <BookingSteps
        eyebrow="Simple Process"
        title="Booking Process"
        intro="Booking your Melbourne wedding chauffeur takes just a few minutes — share your date and venues, receive a fixed price, confirm your booking, and enjoy the day."
        steps={bookingSteps}
      />

      <Testimonials eyebrow="Testimonials" title="What Our Couples Say" testimonials={testimonials} tone="ivory" />

      <ServiceFAQ eyebrow="Questions & Answers" title="Frequently Asked Questions" faqs={faqs} />

      <ServiceOfferings
        eyebrow="Explore More"
        title="Related Services"
        items={relatedServices}
        tone="ivory"
      />

      <ServiceCTA
        title="Book Your Melbourne Wedding Chauffeur Today"
        description="Get a fixed-price quote and secure your wedding day transport with a professional Melbourne chauffeur."
        tone="gold"
      />
    </main>
  );
}
