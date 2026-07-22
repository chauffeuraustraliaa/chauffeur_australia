import {
  Banknote,
  Briefcase,
  Car,
  CarFront,
  Clock,
  Compass,
  Landmark,
  Navigation,
  ShieldCheck,
  ShoppingBag,
  Ticket,
  UtensilsCrossed,
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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.australiataxiservice.com.au";
const pageTitle = "City Transfers Australia | Private Luxury Chauffeur Service";
const pageDescription =
  "Book private, door-to-door city transfers across Australia. Professional chauffeurs, luxury vehicles and fixed, transparent pricing for every trip.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "City Transfers Australia",
    "Private City Transfers",
    "City Chauffeur Service",
    "Luxury City Transfers",
    "Door-to-Door Transfers",
    "Private Driver Australia",
  ],
  alternates: {
    canonical: "/city-transfers",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/city-transfers",
    siteName: "Australia Taxi Service",
    title: pageTitle,
    description: pageDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

const whyChooseFeatures = [
  {
    number: "01",
    icon: Navigation,
    title: "Door-to-Door Convenience",
    description:
      "One private vehicle for the whole trip, from your exact pickup point to your exact destination.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Professional Chauffeurs",
    description:
      "Licensed, local drivers who know the city and how to navigate it efficiently.",
  },
  {
    number: "03",
    icon: Car,
    title: "Luxury Vehicles",
    description:
      "Travel in a premium, immaculately presented vehicle for every city trip.",
  },
  {
    number: "04",
    icon: Clock,
    title: "On-Demand Availability",
    description:
      "Book ahead for the day or request a transfer at short notice, any time.",
  },
  {
    number: "05",
    icon: Banknote,
    title: "Fixed Pricing",
    description:
      "One upfront price agreed before you travel, regardless of traffic or wait time.",
  },
  {
    number: "06",
    icon: Compass,
    title: "Local Route Knowledge",
    description:
      "Chauffeurs who know the fastest routes, one-way systems and drop-off points cold.",
  },
];

const serviceDetails = [
  {
    icon: Briefcase,
    title: "Business Meetings",
    description:
      "Arrive at meetings composed and on time, in a quiet vehicle suited to a last call or a final read-through of your notes. Waiting time between appointments can be arranged in advance for multi-stop business days.",
  },
  {
    icon: ShoppingBag,
    title: "Shopping Trips",
    description:
      "Skip the parking search and the walk between stores. Your chauffeur waits and helps load bags between destinations, whether that's one boutique strip or several shopping precincts in a single afternoon.",
  },
  {
    icon: Landmark,
    title: "Tourist Attractions",
    description:
      "See a city's landmarks, galleries and lookouts without working out public transport routes or parking. Chauffeurs can plan an efficient loop between attractions or simply wait at each stop.",
  },
  {
    icon: Users,
    title: "Family Travel",
    description:
      "Comfortable, spacious transfers for families getting around the city together, with child and booster seats available on request and room for prams, shopping bags and everything in between.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant Transfers",
    description:
      "Arrive at dinner without circling for parking, and leave without organising a ride home. Ideal for date nights, celebrations and evenings where you'd rather not think about driving.",
  },
  {
    icon: Ticket,
    title: "Entertainment Venues",
    description:
      "Private transfers to concerts, theatre, sporting events and shows, timed around the event schedule so you're not caught in the post-event rush for taxis or rideshares.",
  },
];

const cities = [
  {
    name: "Melbourne",
    code: "MEL",
    description:
      "City-wide transfers across the CBD, inner suburbs and greater Melbourne, with chauffeurs who know the tram routes and one-way streets.",
  },
  {
    name: "Sydney",
    code: "SYD",
    description:
      "Point-to-point transfers across the CBD, Eastern Suburbs, North Shore and beyond, avoiding the guesswork of ferries, trains and toll roads.",
  },
  {
    name: "Brisbane",
    code: "BNE",
    description:
      "Coverage across the CBD, South Bank and surrounding suburbs, with transfers extending to the Gold Coast and Sunshine Coast on request.",
  },
  {
    name: "Perth",
    code: "PER",
    description:
      "Private transfers across Perth's spread-out metro area, from the CBD to Fremantle, the river suburbs and beyond.",
  },
  {
    name: "Adelaide",
    code: "ADL",
    description:
      "City and Adelaide Hills transfers for business, dining and leisure, with drivers familiar with the CBD's grid layout.",
  },
  {
    name: "Canberra",
    code: "CBR",
    description:
      "Transfers suited to government, diplomatic and business travel around the Parliamentary Triangle and surrounding districts.",
  },
  {
    name: "Gold Coast",
    code: "OOL",
    description:
      "City transfers along the Gold Coast strip, from Surfers Paradise to Broadbeach and the hinterland.",
  },
];

const fleetVehicles = [
  {
    icon: Car,
    name: "Executive Sedans",
    description:
      "Sleek, comfortable sedans suited to solo travellers, couples and short business trips around the city.",
  },
  {
    icon: CarFront,
    name: "Luxury SUVs",
    description:
      "Extra space and a commanding ride, well suited to shopping trips, families or a more premium presence.",
  },
  {
    icon: Briefcase,
    name: "Business Vehicles",
    description:
      "Quiet, well-equipped cabins fitted out for calls and preparation between meetings.",
  },
  {
    icon: Users,
    name: "Group Transport",
    description:
      "Larger vehicles that keep bigger groups travelling together for nights out or group outings.",
  },
];

const bookingSteps = [
  {
    number: "01",
    title: "Request Quote",
    description:
      "Share your pickup, destination and travel time for a fixed-price quote.",
  },
  {
    number: "02",
    title: "Confirm Booking",
    description:
      "Confirm your transfer and receive your chauffeur and vehicle details.",
  },
  {
    number: "03",
    title: "Meet Chauffeur",
    description:
      "Your chauffeur arrives at your pickup point ready to depart on time.",
  },
  {
    number: "04",
    title: "Enjoy Your Journey",
    description: "Relax in a premium vehicle on the way to your destination.",
  },
];

const routes = [
  { route: "Melbourne CBD → South Yarra", duration: "15 min" },
  { route: "Sydney CBD → Bondi Beach", duration: "25 min" },
  { route: "Brisbane CBD → South Bank", duration: "10 min" },
  { route: "Perth CBD → Fremantle", duration: "30 min" },
];

const testimonials = [
  {
    name: "Corporate Client, Melbourne",
    quote:
      "I book a chauffeur for every client meeting now. Always on time, always a quiet, comfortable ride to prepare in.",
  },
  {
    name: "Couple Visiting Sydney",
    quote:
      "Used it for dinner and a show — no parking stress, no waiting for a rideshare afterwards. Made the night feel effortless.",
  },
  {
    name: "Family Shopping Trip, Brisbane",
    quote:
      "The driver waited while we shopped and helped load everything in. So much easier than juggling bags on public transport.",
  },
];

const faqs = [
  {
    question: "What counts as a city transfer?",
    answer:
      "A city transfer is any point-to-point trip within a city or its surrounding suburbs — from a business meeting to dinner, shopping or a night out — booked in advance with a professional chauffeur and a fixed price, rather than hailed on the spot.",
  },
  {
    question: "Can I book a chauffeur for multiple stops?",
    answer:
      "Yes, you can arrange multi-stop city transfers with waiting time built in, ideal for shopping trips, business days or sightseeing.",
  },
  {
    question: "How much does a city transfer cost?",
    answer:
      "Pricing is a fixed, obligation-free quote based on your route, vehicle type and any waiting time required, agreed before you travel so there are no surprises when the trip is done.",
  },
  {
    question: "Which cities do you operate in?",
    answer:
      "We provide city transfers in Melbourne, Sydney, Brisbane, Perth, Adelaide, Canberra and the Gold Coast.",
  },
  {
    question: "Can I book a same-day city transfer?",
    answer:
      "Yes, we accommodate same-day and short-notice bookings where a chauffeur is available, alongside advance bookings.",
  },
  {
    question: "Do you offer hourly or full-day bookings?",
    answer:
      "Yes, a chauffeur and vehicle can be booked for a set number of hours or a full day, suited to business days or multi-stop itineraries.",
  },
  {
    question: "Are child seats available for family city transfers?",
    answer:
      "Yes, child and booster seats are available on request when you book.",
  },
  {
    question: "Can I request the same chauffeur for a return trip?",
    answer:
      "Where possible, we'll assign the same chauffeur for return or multi-leg bookings on request.",
  },
  {
    question: "Is the price fixed even if traffic is heavy?",
    answer:
      "Yes. Your fare is agreed before you travel and does not change if the route takes longer due to traffic.",
  },
  {
    question: "Can I book a larger vehicle for a group night out?",
    answer:
      "Yes, we offer larger group vehicles suited to nights out, celebrations and larger travel parties.",
  },
  {
    question: "Are your chauffeurs licensed and insured?",
    answer:
      "Every chauffeur is licensed in line with state passenger transport regulations, and every trip is covered by comprehensive passenger insurance.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking a few hours ahead where possible, though we also accommodate last-minute requests depending on availability.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "City Transfers",
  name: "City Transfers Australia",
  description: pageDescription,
  provider: {
    "@type": "LocalBusiness",
    name: "Australia Taxi Service",
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "City Transfer Services",
    itemListElement: serviceDetails.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
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
      name: "City Transfers",
      item: `${siteUrl}/city-transfers`,
    },
  ],
};

export default function CityTransfersPage() {
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
        title="Private City Transfers With A Professional Chauffeur"
        description="Travel comfortably around Australia's major cities with a professional chauffeur, booked door-to-door for business, shopping, dining and leisure."
        primaryCta="Get Instant Quote"
        secondaryCta="Book Your Chauffeur"
        image="/hero.jpg"
        imageAlt="Luxury chauffeur vehicle in an Australian city"
        breadcrumbItems={[{ label: "City Transfers", href: "/city-transfers" }]}
      />

      <ContentBlock
        eyebrow="Getting Started"
        title="Understanding City Transfers"
        tone="white"
        paragraphs={[
          "A city transfer is a pre-booked, point-to-point journey within a city, taken in a premium vehicle with a professional chauffeur. Rather than hailing a ride on the spot, your pickup, destination, vehicle and price are all confirmed in advance, so the trip itself is one less thing to think about.",
          "Travellers use city transfers for all kinds of trips: getting to a meeting across town, moving between shops on a busy day out, reaching a restaurant or show without worrying about parking, or simply getting home comfortably after an evening out. It's less a single service than a more comfortable way to move around a city generally.",
          "The appeal over public transport is directness — no interchanges, no timetables, no working out which platform or bus stop to use in an unfamiliar part of town. And unlike a rank taxi or a rideshare booked on the day, a chauffeur transfer is arranged ahead of time, at a fixed price, with a driver who is expecting you.",
          "City transfers suit business travellers moving between appointments, shoppers and tourists exploring unfamiliar streets, families out for the day, and anyone heading to dinner, an event or a night out who would rather arrive and leave without thinking about parking or timing a ride home.",
          "Trips can be as short as a ten-minute hop across the CBD or span a full day of appointments, errands and stops, and the same booking model applies either way — you agree the plan and the price upfront, and the chauffeur builds the day around it rather than the other way around.",
        ]}
      />

      <ContentBlock
        eyebrow="Our Advantage"
        title="Why Choose Our City Transfers"
        tone="ivory"
        paragraphs={[
          "Every city transfer is handled by a professional, locally based chauffeur who knows the fastest routes, the one-way systems and the best drop-off points for wherever you're headed — not just the shortest line on a map, but the route that actually works at that time of day.",
          "You'll travel in a premium, well-presented vehicle suited to the trip, whether that's a sedan for a solo meeting or a larger vehicle for a family day out or a group heading to dinner. Because city plans change, bookings can be arranged well ahead of time or requested on short notice.",
          "Pricing is agreed before you travel, with no meter running and no surge pricing if your afternoon runs long or the traffic is heavier than expected. If your plans shift, our support team is on hand to help adjust pickup times or add a stop to your booking.",
          "It's also a service you can rely on to feel the same every time. Where a taxi or rideshare can mean a different driver, vehicle and standard on every trip, a chauffeur booking is consistent — the same level of presentation, punctuality and professionalism whether it's your first transfer or your fiftieth.",
        ]}
      />

      <Features
        eyebrow="What Sets Us Apart"
        title="City Transfers Built Around You"
        items={whyChooseFeatures}
      />

      <ServiceDetailList
        eyebrow="What We Offer"
        title="Types of City Transfer Services"
        intro="City transfers cover a wide range of trips, which is why the service is built around several distinct occasions rather than a single fixed itinerary. Whatever the reason for the trip, the same standard of vehicle, chauffeur and fixed pricing applies."
        items={serviceDetails}
      />

      <AirportsGrid
        eyebrow="Where We Operate"
        title="Cities We Serve"
        description="Private city transfers across Australia's major cities, with chauffeurs who know each city's streets, traffic patterns and best routes."
        items={cities}
      />

      <FleetShowcase
        eyebrow="Our Fleet"
        title="Luxury Vehicle Fleet"
        intro="Every vehicle in our fleet is selected for comfort and presentation, then cleaned and inspected between trips so it's ready to the same standard for every passenger. The right vehicle is matched to the trip — a compact sedan for a quick CBD hop, or a larger SUV when there's a group or extra luggage involved."
        vehicles={fleetVehicles}
        tone="white"
      />

      <ContentBlock
        eyebrow="The Comparison"
        title="Benefits Over Taxis And Ride-Sharing"
        tone="ivory"
        paragraphs={[
          "Against a traditional taxi, the main difference is certainty. A taxi fare is metered and can shift with traffic and route, and availability at busy times of day isn't guaranteed. A chauffeur transfer is booked in advance, arrives on time, and charges the fixed price you were quoted regardless of how the trip runs.",
          "Ride-sharing apps offer convenience, but the experience varies trip to trip — different drivers, different vehicles, and pricing that can spike during peak times, bad weather or big events. A chauffeur service pairs you with a vetted, professional driver and a consistent standard of vehicle every time, at a price that doesn't move with demand.",
          "Public transport is often the cheapest option, but it asks more of the traveller — working out routes and connections, walking between stops, and building in extra time. A city transfer trades that effort for a direct, private journey from your exact pickup point to your exact destination.",
          "For many travellers, the deciding factor is simply time back in the day. Not having to hail, search or wait means a meeting, a shop or a dinner reservation can be planned around the actual schedule, not around how long it might take to find a ride.",
        ]}
        highlights={[
          "Comfort — a private, quiet cabin for the whole trip",
          "Reliability — booked ahead, on time, every time",
          "Privacy — no shared rides or unexpected stops",
          "Professionalism — trained, uniformed chauffeurs",
          "Punctuality — fixed pickup times, not a queue",
        ]}
      />

      <BookingSteps
        eyebrow="Simple Process"
        title="Booking Process"
        intro="Booking a city transfer takes a few minutes. Share your pickup, destination and travel time, receive a fixed-price quote, confirm your booking, and your chauffeur takes care of the rest — arriving on time and ready to go. Multi-stop days and return trips can be arranged in the same booking, so you're not organising each leg separately."
        steps={bookingSteps}
      />

      <RouteCards
        eyebrow="Frequently Travelled"
        title="Popular City Routes"
        intro="Certain city-to-city and CBD-to-suburb routes account for the majority of our bookings. Below are a handful of the most requested transfers, each with an estimated travel time so you can plan your pickup with confidence."
        routes={routes}
      />

      <ContentBlock
        eyebrow="Transparent Pricing"
        title="Pricing Information"
        tone="white"
        paragraphs={[
          "Every quote is calculated before you travel, based on your pickup and drop-off locations, the vehicle type you need and any waiting time between stops. Submit your trip details through our booking form and you'll receive a fixed price to review before confirming anything.",
          "A handful of factors influence the quote: distance and route, vehicle category (sedan, SUV or larger group vehicle), the time of day, and whether your trip includes multiple stops or extended waiting time. All of this is factored in upfront, not added afterwards.",
          "We operate on a fixed-price philosophy: the fare you're quoted is the fare you pay. There are no metered surprises, no surge pricing during busy periods or big events, and no hidden extras for standard waiting time or tolls along the way. If your trip changes on the day — an extra stop, a longer wait — we'll always confirm any adjustment with you before it's added.",
        ]}
      />

      <ContentBlock
        eyebrow="Peace Of Mind"
        title="Safety & Reliability"
        tone="ivory"
        paragraphs={[
          "Every chauffeur on our platform is licensed in accordance with state passenger transport regulations and selected for both driving experience and customer service. Vehicles are regularly serviced and inspected to maintain a consistent standard of safety and presentation across the fleet.",
          "Each trip is covered by comprehensive passenger liability insurance, and chauffeurs are trained to prioritise passenger safety at every stage of the journey — from a safe, legal pickup outside a busy venue to secure loading of shopping, luggage or child seats where required.",
          "Reliability matters as much as safety: chauffeurs plan routes around known traffic patterns and city events, so pickup times hold even when a city is busy, and you're kept informed if anything along the route needs to change.",
          "Every chauffeur is also familiar with the etiquette expected of a premium service — discretion for business travellers, patience for families and older passengers, and a calm, professional manner regardless of how the city or the schedule is behaving that day.",
        ]}
        highlights={[
          "Licensed, experienced professional chauffeurs",
          "Regular vehicle servicing and inspections",
          "Comprehensive passenger liability insurance",
          "Routes planned around traffic and city events",
        ]}
      />

      <Testimonials
        eyebrow="Testimonials"
        title="What Our Customers Say"
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
        title="Book Your City Transfer Today"
        description="Get a fixed-price quote and travel in comfort with a professional chauffeur."
      />
    </main>
  );
}
