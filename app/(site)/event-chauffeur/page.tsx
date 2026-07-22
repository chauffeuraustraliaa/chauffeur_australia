import {
  Banknote,
  Car,
  CarFront,
  Clock,
  Crown,
  Flag,
  Music,
  PartyPopper,
  Presentation,
  ShieldCheck,
  Sparkles,
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
const pageTitle = "Event Chauffeur Australia | Private Event Transport Service";
const pageDescription =
  "Book a private event chauffeur across Australia. Professional drivers, luxury and group vehicles and fixed prices for concerts, galas and celebrations.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "Event Chauffeur Australia",
    "Event Transport Service",
    "Corporate Event Transfers",
    "Concert & Show Transfers",
    "Private Event Chauffeur",
    "Group Event Transport",
  ],
  alternates: { canonical: "/event-chauffeur" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/event-chauffeur",
    siteName: "Australia Taxi Service",
    title: pageTitle,
    description: pageDescription,
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription },
};

const whyChooseFeatures = [
  { number: "01", icon: Clock, title: "Event Timing Expertise", description: "Chauffeurs plan around event schedules, doors and the post-event rush." },
  { number: "02", icon: ShieldCheck, title: "Professional Chauffeurs", description: "Experienced drivers trained to prioritise comfort and punctuality." },
  { number: "03", icon: Car, title: "Luxury & Group Vehicles", description: "From a single sedan to a coordinated group fleet, matched to your event." },
  { number: "04", icon: Users, title: "Group Coordination", description: "Multiple vehicles and pickups coordinated as one booking for larger parties." },
  { number: "05", icon: Banknote, title: "Fixed Pricing", description: "One upfront price agreed before the event, even during peak demand periods." },
  { number: "06", icon: Sparkles, title: "A Polished Arrival", description: "A well-presented vehicle and chauffeur for whatever the event calls for." },
];

const serviceDetails = [
  { icon: Music, title: "Concerts & Shows", description: "Private transfers to concerts and theatre, timed around doors and finishing times so you're not caught in the post-show rush for a ride." },
  { icon: PartyPopper, title: "Corporate Events & Galas", description: "Polished arrivals and departures for corporate galas, award nights and functions, with vehicles suited to formal dress and photography." },
  { icon: Flag, title: "Sporting Events", description: "Transfers to major sporting events, timed around gates and typical post-event traffic so you're not stuck in the crowd afterwards." },
  { icon: Sparkles, title: "Private Parties & Celebrations", description: "Private, flexible transport for birthdays, anniversaries and celebrations, with waiting time available across the evening." },
  { icon: Presentation, title: "Conference Transfers", description: "Coordinated transfers for conference attendees between hotels, venues and networking events." },
  { icon: Users, title: "Group Event Transport", description: "Multiple vehicles coordinated as a single booking for larger groups attending the same event together." },
];

const cities = [
  { name: "Melbourne", code: "MEL", description: "Event transfers across Melbourne's stadiums, arenas and function venues." },
  { name: "Sydney", code: "SYD", description: "Coverage across Sydney's major event and entertainment precincts." },
  { name: "Brisbane", code: "BNE", description: "Event transfers across Brisbane and South Bank entertainment venues." },
  { name: "Perth", code: "PER", description: "Coverage across Perth's stadiums, arenas and CBD event venues." },
  { name: "Adelaide", code: "ADL", description: "Event transfers across Adelaide's Entertainment Centre and CBD venues." },
  { name: "Canberra", code: "CBR", description: "Transfers for conferences, functions and major events in Canberra." },
  { name: "Gold Coast", code: "OOL", description: "Event transfers along the Gold Coast entertainment strip." },
];

const fleetVehicles = [
  { icon: Car, name: "Executive Sedans", description: "Sleek, comfortable sedans suited to solo attendees or couples." },
  { icon: CarFront, name: "Luxury SUVs", description: "Extra space and presence for small groups heading to an event together." },
  { icon: Users, name: "Group Shuttle Vehicles", description: "Larger vehicles for coordinated group transport to and from events." },
  { icon: Crown, name: "VIP Vehicles", description: "A dedicated top-tier vehicle for VIP guests and high-profile event attendees." },
];

const bookingSteps = [
  { number: "01", title: "Request Quote", description: "Share your event, venue and timing for a fixed-price quote." },
  { number: "02", title: "Confirm Booking", description: "Confirm your transfer and receive your chauffeur and vehicle details." },
  { number: "03", title: "Meet Chauffeur", description: "Your chauffeur arrives ready to depart, ahead of the event." },
  { number: "04", title: "Enjoy Your Event", description: "Relax knowing your return transfer is already arranged." },
];

const routes = [
  { route: "Melbourne CBD → Marvel Stadium", duration: "15 min" },
  { route: "Sydney CBD → Accor Stadium", duration: "25 min" },
  { route: "Brisbane CBD → Suncorp Stadium", duration: "15 min" },
  { route: "Perth CBD → Optus Stadium", duration: "15 min" },
];

const testimonials = [
  { name: "Concertgoer, Melbourne", quote: "Booked a return transfer for a stadium show and it made the whole night so much easier, especially getting away afterwards." },
  { name: "Event Manager, Sydney", quote: "We use them for every gala now. Coordinating multiple vehicles for guests used to be a headache — now it's one booking." },
  { name: "Corporate Client, Brisbane", quote: "Booked group transport for our whole team to a conference dinner. Everyone arrived together and on time." },
];

const faqs = [
  { question: "Can you time transfers around an event's start and finish?", answer: "Yes, chauffeurs plan pickups and drop-offs around doors, gates and typical post-event timing." },
  { question: "Do you provide group transport for multiple attendees?", answer: "Yes, we coordinate multiple vehicles as a single booking for larger groups attending the same event." },
  { question: "Can you book a return transfer for after the event?", answer: "Yes, return transfers can be booked at the same time as your pickup, so a ride home is already arranged." },
  { question: "How much does event chauffeur service cost?", answer: "Pricing is a fixed, obligation-free quote based on your route, vehicle type and number of vehicles required." },
  { question: "Which cities do you provide event chauffeur services in?", answer: "We operate in Melbourne, Sydney, Brisbane, Perth, Adelaide, Canberra and the Gold Coast." },
  { question: "Can you handle transport for a corporate gala or awards night?", answer: "Yes, we offer polished arrivals and departures suited to corporate galas and formal events." },
  { question: "Is pricing higher during major events?", answer: "No, your fare is fixed at the time of quote regardless of event-day demand." },
  { question: "Can I book a chauffeur for a private celebration?", answer: "Yes, we offer flexible transport for birthdays, anniversaries and private celebrations, with waiting time available." },
  { question: "Can you coordinate transfers for conference attendees?", answer: "Yes, we coordinate transfers between hotels, conference venues and networking events for attendees." },
  { question: "How far in advance should I book event transport?", answer: "We recommend booking ahead of major events where possible, as demand increases closer to the date." },
  { question: "Are your chauffeurs licensed and insured?", answer: "Every chauffeur is licensed in line with state passenger transport regulations, and every trip is covered by comprehensive passenger insurance." },
  { question: "Can I request a larger vehicle for my group?", answer: "Yes, we offer larger vehicles suited to groups travelling to the same event together." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Event Chauffeur",
  name: "Event Chauffeur Australia",
  description: pageDescription,
  provider: { "@type": "LocalBusiness", name: "Australia Taxi Service" },
  areaServed: { "@type": "Country", name: "Australia" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Event Chauffeur Services",
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
    { "@type": "ListItem", position: 2, name: "Event Chauffeur", item: `${siteUrl}/event-chauffeur` },
  ],
};

export default function EventChauffeurPage() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />

      <ServiceHero
        title="Private Event Chauffeur Services Across Australia"
        description="Reliable chauffeur transport for concerts, galas, conferences and private events, booked door-to-door with fixed pricing and professional drivers."
        primaryCta="Get Instant Quote"
        secondaryCta="Book Your Chauffeur"
        image="/hero.jpg"
        imageAlt="Luxury event chauffeur vehicle outside an Australian venue"
        breadcrumbItems={[{ label: "Event Chauffeur", href: "/event-chauffeur" }]}
      />

      <ContentBlock
        eyebrow="Getting Started"
        title="Understanding Event Chauffeur Services"
        tone="white"
        paragraphs={[
          "An event chauffeur service is a pre-booked, professional transport arrangement for concerts, galas, sporting events, conferences and private celebrations — covering the trip to the venue, the trip home, or both, timed around the event itself rather than a generic pickup window.",
          "Events tend to create predictable transport pressure points: a rush of rideshare demand right as a show ends, limited parking near major venues, and unpredictable wait times just when everyone wants to get home. An event chauffeur is arranged in advance specifically to avoid that.",
          "Unlike hailing a ride after a show or game, an event chauffeur transfer is booked ahead of time with your return journey already arranged, so leaving the venue doesn't mean joining a crowd competing for the same handful of rides.",
          "The service suits concertgoers and sports fans wanting an easier night out, corporate teams attending galas, conferences or award nights, groups celebrating together, and event organisers coordinating transport for guests or attendees.",
          "It scales from a single return trip for one person to coordinated multi-vehicle transport for a whole group or guest list, all arranged through the same booking process.",
        ]}
      />

      <ContentBlock
        eyebrow="Our Advantage"
        title="Why Choose Our Event Chauffeur Service"
        tone="ivory"
        paragraphs={[
          "Every event transfer is planned around the event itself — doors, gates, typical finishing times and the post-event rush — so your chauffeur is ready exactly when you need them, not caught in the same crowd trying to leave.",
          "Vehicles range from a single luxury sedan to coordinated group shuttles, matched to your event and party size, with VIP vehicles available for high-profile guests or occasions that call for it.",
          "Because major events create spikes in demand for standard rideshares, our fixed pricing means your fare doesn't change on event night — the price agreed when you book is the price you pay, regardless of surge periods.",
          "Group bookings are coordinated as a single arrangement, so multiple vehicles for a larger party or guest list are managed together rather than as separate, disconnected bookings.",
        ]}
      />

      <Features
        eyebrow="What Sets Us Apart"
        title="Event Transport Built Around The Occasion"
        items={whyChooseFeatures}
      />

      <ServiceDetailList
        eyebrow="What We Offer"
        title="Event Transfer Services"
        intro="Events come in every shape and size, which is why our event chauffeur service is built around the full range of occasions rather than a single fixed trip type."
        items={serviceDetails}
      />

      <AirportsGrid
        eyebrow="Where We Operate"
        title="Cities We Serve"
        description="Private event chauffeur services across Australia's major cities, with chauffeurs experienced in stadium, arena and CBD event traffic."
        items={cities}
      />

      <FleetShowcase
        eyebrow="Our Fleet"
        title="Vehicle Options"
        intro="Every vehicle in our fleet is selected for comfort and presentation, then cleaned and inspected between trips, matched to your event and party size."
        vehicles={fleetVehicles}
        tone="white"
      />

      <ContentBlock
        eyebrow="The Comparison"
        title="Event Chauffeurs vs Rideshare & Public Transport"
        tone="ivory"
        paragraphs={[
          "Against booking a rideshare after an event, the main advantage is avoiding the surge — both in price and in wait time — that hits the moment a venue empties out. A pre-booked chauffeur is arranged well before that crowd forms.",
          "Against public transport, an event chauffeur removes the need to navigate unfamiliar routes or crowded platforms right after a show or game, especially useful late at night or when a venue is some distance from the nearest station.",
          "For groups specifically, coordinating several separate rideshares can mean a party gets split up or delayed. A single event chauffeur booking keeps everyone's transport organised together.",
        ]}
        highlights={[
          "No surge pricing during peak event demand",
          "Return transfer already arranged before you arrive",
          "Vehicles matched to your party size",
          "One coordinated booking for group transport",
        ]}
      />

      <BookingSteps
        eyebrow="Simple Process"
        title="Booking Process"
        intro="Booking event chauffeur services takes a few minutes. Share your event, venue and timing, receive a fixed-price quote, confirm your booking, and your chauffeur takes care of the rest — including your return trip."
        steps={bookingSteps}
      />

      <RouteCards
        eyebrow="Frequently Travelled"
        title="Popular Event Routes"
        intro="Certain CBD-to-stadium and CBD-to-arena routes account for the majority of our event bookings. Below are a handful of the most requested transfers."
        routes={routes}
      />

      <ContentBlock
        eyebrow="Transparent Pricing"
        title="Pricing Information"
        tone="white"
        paragraphs={[
          "Every quote is calculated before your event, based on your route, vehicle type and number of vehicles required. Submit your event details through our booking form for a fixed price to review before confirming.",
          "A handful of factors influence the quote: distance and route, vehicle category, the number of passengers, and whether a return trip is booked alongside your pickup.",
          "We operate on a fixed-price philosophy: the fare you're quoted is the fare you pay, even during high-demand event periods when standard rideshare pricing typically spikes.",
        ]}
      />

      <ContentBlock
        eyebrow="Peace Of Mind"
        title="Professional Chauffeurs"
        tone="ivory"
        paragraphs={[
          "Every chauffeur on our platform is licensed in accordance with state passenger transport regulations and selected for both driving experience and customer service. Vehicles are regularly serviced and inspected to a consistent standard.",
          "Each trip is covered by comprehensive passenger liability insurance, and chauffeurs are trained to navigate the specific traffic and crowd patterns around major venues, so pickups run smoothly even during busy event periods.",
          "Beyond the vehicle and the licence, chauffeurs are experienced with event timing specifically — arriving early, tracking doors or finishing times, and being ready the moment you're ready to leave.",
        ]}
        highlights={[
          "Licensed, experienced professional chauffeurs",
          "Regular vehicle servicing and inspections",
          "Comprehensive passenger liability insurance",
          "Experienced with venue traffic and event timing",
        ]}
      />

      <Testimonials
        eyebrow="Testimonials"
        title="What Our Clients Say"
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
        title="Book Your Event Chauffeur Today"
        description="Get a fixed-price quote and arrive at your next event with a professional chauffeur."
      />
    </main>
  );
}
