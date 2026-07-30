import {
  Banknote,
  Briefcase,
  Building2,
  Car,
  CarFront,
  Clock,
  Crown,
  Eye,
  Handshake,
  Lock,
  PlaneLanding,
  ShieldCheck,
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

const pageTitle = "Executive Transfers Australia | VIP Chauffeur Service";
const pageDescription =
  "Book premium executive transfers across Australia. Discreet chauffeurs, top-tier vehicles and fixed pricing for business leaders and VIP travellers.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "Executive Transfers Australia",
    "Executive Car Service",
    "VIP Chauffeur Service",
    "Executive Airport Transfers",
    "Premium Business Transport",
    "Executive Travel Australia",
  ],
  alternates: { canonical: "/executive-transfers" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/executive-transfers",
    siteName: "Australia Taxi Service",
    title: pageTitle,
    description: pageDescription,
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription },
};

const whyChooseFeatures = [
  { number: "01", icon: Crown, title: "VIP-Level Service", description: "A dedicated chauffeur and vehicle standard suited to senior executives and high-profile guests." },
  { number: "02", icon: ShieldCheck, title: "Professional Chauffeurs", description: "Experienced drivers trained to prioritise punctuality, discretion and presentation." },
  { number: "03", icon: Car, title: "Top-Tier Vehicles", description: "A premium fleet, immaculately presented, matched to the level of the trip." },
  { number: "04", icon: Lock, title: "Discretion & Privacy", description: "A quiet, private cabin for calls, briefings and conversations that stay confidential." },
  { number: "05", icon: Banknote, title: "Fixed Pricing", description: "Transparent, agreed pricing with no surprises, suited to corporate budgeting." },
  { number: "06", icon: Clock, title: "24/7 Availability", description: "Early boardroom starts, late roadshows or last-minute changes handled around the clock." },
];

const serviceDetails = [
  { icon: PlaneLanding, title: "Executive Airport Transfers", description: "Flight-tracked pickups and departures for executives, timed to get them to their next commitment composed and on schedule." },
  { icon: Briefcase, title: "Board Meeting Transfers", description: "Punctual, discreet transport to and from board meetings, with a quiet cabin suited to a final briefing on the way." },
  { icon: Users, title: "Roadshow & Multi-City Travel", description: "Coordinated transfers across a multi-city roadshow, planned around a full itinerary rather than a single leg." },
  { icon: Handshake, title: "VIP Guest Transfers", description: "A polished arrival for visiting VIPs, investors or high-profile guests, met personally by a dedicated chauffeur." },
  { icon: Building2, title: "Executive Hotel Transfers", description: "Seamless transfers between hotels and meetings for executives on multi-day business trips." },
  { icon: Eye, title: "Dedicated Chauffeur Bookings", description: "A single chauffeur assigned for the duration of a visit or engagement, for consistency and familiarity." },
];

const cities = [
  { name: "Melbourne", code: "MEL", description: "Executive transfers across Melbourne's CBD and corporate precincts." },
  { name: "Sydney", code: "SYD", description: "VIP transfers across Sydney's CBD, North Sydney and Eastern Suburbs." },
  { name: "Brisbane", code: "BNE", description: "Executive transfers across Brisbane's CBD and South Bank precincts." },
  { name: "Perth", code: "PER", description: "Executive transfers across Perth's CBD and West Perth business district." },
  { name: "Adelaide", code: "ADL", description: "VIP and executive transfers across Adelaide's CBD." },
  { name: "Canberra", code: "CBR", description: "Discreet transfers suited to government and diplomatic travel." },
  { name: "Gold Coast", code: "OOL", description: "Executive transfers along the Gold Coast business corridor." },
];

const fleetVehicles = [
  { icon: Car, name: "Executive Sedans", description: "Sleek, discreet sedans suited to solo executive travel." },
  { icon: CarFront, name: "Luxury SUVs", description: "Extra presence and space for senior executives or small groups." },
  { icon: Crown, name: "VIP Vehicles", description: "A dedicated top-tier vehicle for board members and high-profile guests." },
  { icon: Users, name: "Multi-Vehicle Convoys", description: "Coordinated multi-vehicle transport for larger executive delegations." },
];

const bookingSteps = [
  { number: "01", title: "Request Quote", description: "Share your trip or itinerary details for a fixed-price quote." },
  { number: "02", title: "Confirm Booking", description: "Confirm your transfer and receive your chauffeur and vehicle details." },
  { number: "03", title: "Meet Chauffeur", description: "Your dedicated chauffeur arrives ready to depart, on time." },
  { number: "04", title: "Enjoy Your Journey", description: "Prepare or relax in a premium, private vehicle." },
];

const routes = [
  { route: "Melbourne Airport → Melbourne CBD", duration: "35 min" },
  { route: "Sydney CBD → North Sydney", duration: "15 min" },
  { route: "Brisbane CBD → Gold Coast", duration: "55 min" },
  { route: "Canberra CBD → Parliament House", duration: "10 min" },
];

const testimonials = [
  { name: "Chief Executive, Sydney", quote: "I've used the same chauffeur for board meetings across three cities now. The consistency and discretion are exactly what I need." },
  { name: "Executive Assistant, Melbourne", quote: "Booking VIP transfers for visiting board members is completely handled now. Every pickup has been on time and professionally done." },
  { name: "Investor Relations Lead, Brisbane", quote: "We used dedicated chauffeurs for our investor roadshow across four cities. Seamless from start to finish." },
];

const faqs = [
  { question: "What makes executive transfers different from standard transfers?", answer: "Executive transfers add a higher standard of vehicle, a dedicated chauffeur where required, and additional discretion suited to senior business travel." },
  { question: "Can you provide a dedicated chauffeur for a multi-day visit?", answer: "Yes, a single chauffeur can be assigned for the duration of a visit or engagement for consistency." },
  { question: "Do you offer roadshow and multi-city coordination?", answer: "Yes, we coordinate transfers across multi-city roadshows, planning vehicles and timing around the full itinerary." },
  { question: "How much do executive transfers cost?", answer: "Pricing is a fixed, obligation-free quote based on your route, vehicle type and any dedicated chauffeur requirements." },
  { question: "Is the service confidential for sensitive meetings?", answer: "Yes, chauffeurs are trained in discretion and confidentiality, and cabins are private for calls and briefings." },
  { question: "Which cities do you provide executive transfers in?", answer: "We operate in Melbourne, Sydney, Brisbane, Perth, Adelaide, Canberra and the Gold Coast." },
  { question: "Can you arrange transport for a multi-vehicle delegation?", answer: "Yes, we coordinate multi-vehicle convoys for larger executive delegations travelling together." },
  { question: "Can you pick up VIP guests from the airport?", answer: "Yes, we offer flight-tracked VIP airport pickups with a personal meet and greet." },
  { question: "Is the price fixed regardless of meeting delays?", answer: "Yes, your fare is agreed before you travel. If a meeting runs long, contact us and we'll adjust the pickup time." },
  { question: "How far in advance should we book executive transfers?", answer: "We recommend booking as early as possible for roadshows or multi-day visits, though short-notice requests are also accommodated." },
  { question: "Are your chauffeurs licensed and insured?", answer: "Every chauffeur is licensed in line with state passenger transport regulations, and every trip is covered by comprehensive passenger insurance." },
  { question: "Can I request the same chauffeur for every trip during my visit?", answer: "Yes, where possible we assign the same chauffeur across a visit for familiarity and consistency." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Executive Transfers",
  name: "Executive Transfers Australia",
  description: pageDescription,
  provider: { "@type": "LocalBusiness", name: "Australia Taxi Service" },
  areaServed: { "@type": "Country", name: "Australia" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Executive Transfer Services",
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
    { "@type": "ListItem", position: 2, name: "Executive Transfers", item: `${siteUrl}/executive-transfers` },
  ],
};

export default function ExecutiveTransfersPage() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />

      <ServiceHero
        title="Executive Transfers For Business Leaders & VIP Travellers"
        description="Premium, discreet chauffeur transfers for executives and VIP travellers, booked door-to-door with fixed pricing and a dedicated professional driver."
        primaryCta="Get Instant Quote"
        secondaryCta="Book Your Chauffeur"
        image="/hero.jpg"
        imageAlt="Executive chauffeur vehicle outside an Australian corporate building"
        breadcrumbItems={[{ label: "Executive Transfers", href: "/executive-transfers" }]}
      />

      <ContentBlock
        eyebrow="Getting Started"
        title="Understanding Executive Transfers"
        tone="white"
        paragraphs={[
          "An executive transfer is a premium, pre-booked chauffeur service built for senior business travel — a higher standard of vehicle, a dedicated chauffeur where required, and an added layer of discretion suited to board members, executives and VIP guests.",
          "It sits above a standard business transfer in both presentation and consistency. Where a general corporate booking might use whichever driver and vehicle is available, executive transfers can be arranged with a single dedicated chauffeur across a visit, and a vehicle standard that reflects the seniority of the traveller.",
          "Discretion is central to the service. Executives often use travel time for confidential calls or last-minute briefings, and chauffeurs are trained to provide a quiet, private cabin and to handle any sensitive itinerary details with appropriate confidentiality.",
          "The service suits chief executives and senior leadership, board members attending meetings across multiple cities, visiting VIP guests and investors, and any high-profile traveller who needs transport that matches the standard of the occasion.",
          "It can be arranged for a single high-stakes meeting or across an extended visit or roadshow, with the same chauffeur and vehicle standard maintained throughout.",
        ]}
      />

      <ContentBlock
        eyebrow="Our Advantage"
        title="Why Choose Our Executive Transfer Service"
        tone="ivory"
        paragraphs={[
          "Every executive transfer is handled by a professional chauffeur selected for discretion, punctuality and presentation — comfortable managing a single high-stakes pickup or a multi-city roadshow with the same level of care.",
          "Vehicles are drawn from our top-tier fleet, immaculately presented and matched to the seniority of the trip, with VIP and multi-vehicle convoy options available for delegations or high-profile guests.",
          "Because executive schedules shift without much notice, our service is available 24/7 and can accommodate short-notice changes, an early boardroom start, or a meeting that runs long.",
          "Pricing is transparent and agreed upfront, suited to corporate budgeting and expense reporting, without the unpredictability of metered fares during a demanding travel schedule.",
        ]}
      />

      <Features
        eyebrow="What Sets Us Apart"
        title="Executive Transport Built For Business Leaders"
        items={whyChooseFeatures}
      />

      <ServiceDetailList
        eyebrow="What We Offer"
        title="Executive Transfer Services"
        intro="Senior business travel covers a wide range of occasions, from a single airport pickup to a coordinated multi-city roadshow. Our executive service is built around this full range."
        items={serviceDetails}
      />

      <AirportsGrid
        eyebrow="Where We Operate"
        title="Major Cities We Cover"
        description="Executive transfers across Australia's major business hubs, with chauffeurs experienced in senior corporate and VIP travel."
        items={cities}
      />

      <FleetShowcase
        eyebrow="Our Fleet"
        title="Vehicle Options"
        intro="Every vehicle in our top-tier fleet is selected for comfort and presentation, then cleaned and inspected between trips, matched to the seniority of the trip."
        vehicles={fleetVehicles}
        tone="white"
      />

      <ContentBlock
        eyebrow="The Comparison"
        title="Executive Transfers vs Standard Corporate Travel"
        tone="ivory"
        paragraphs={[
          "Against a general corporate booking, executive transfers add a consistently higher standard — a dedicated chauffeur where required, a top-tier vehicle, and an added layer of discretion suited to sensitive meetings and confidential calls.",
          "Against arranging transport ad hoc through taxis or rideshares, executive transfers offer the reliability senior travel demands: no uncertainty over vehicle standard, no risk of being left waiting at a busy terminal, and a chauffeur who is expecting you.",
          "For visiting VIPs and investors specifically, the difference is presentation. A dedicated chauffeur meeting a guest personally reflects a different level of care than a generic pickup, and that impression carries into the meeting or event that follows.",
        ]}
        highlights={[
          "Discretion — confidential, private travel time",
          "Consistency — the same chauffeur across a visit",
          "Presentation — a polished arrival for VIP guests",
          "Reliability — no uncertainty during a demanding schedule",
        ]}
      />

      <BookingSteps
        eyebrow="Simple Process"
        title="Booking Process"
        intro="Booking executive transfers takes a few minutes, whether it's a single meeting or a multi-city roadshow. Share your itinerary, receive a fixed-price quote, confirm your booking, and your chauffeur takes care of the rest."
        steps={bookingSteps}
      />

      <RouteCards
        eyebrow="Frequently Travelled"
        title="Popular Executive Routes"
        intro="Certain CBD, airport and government-precinct routes account for the majority of our executive bookings. Below are a handful of the most requested transfers."
        routes={routes}
      />

      <ContentBlock
        eyebrow="Transparent Pricing"
        title="Pricing Information"
        tone="white"
        paragraphs={[
          "Every quote is calculated before you travel, based on your route, vehicle category and any dedicated chauffeur or convoy requirements. Submit your itinerary through our booking form for a fixed price to review before confirming.",
          "A handful of factors influence the quote: distance and route, vehicle tier, the time of day, and whether the booking involves a single trip or an extended, multi-day engagement with a dedicated chauffeur.",
          "We operate on a fixed-price philosophy: the fare you're quoted is the fare you pay, with clear, itemised invoicing available for corporate expense reporting.",
        ]}
      />

      <ContentBlock
        eyebrow="Peace Of Mind"
        title="Professional Standards"
        tone="ivory"
        paragraphs={[
          "Every chauffeur on our platform is licensed in accordance with state passenger transport regulations and selected for driving experience, presentation and discretion suited to senior business travel. Vehicles are regularly serviced and inspected to a consistently high standard.",
          "Each trip is covered by comprehensive passenger liability insurance, and chauffeurs are trained to handle confidential itineraries and conversations appropriately, from a discreet pickup to a private cabin throughout the journey.",
          "Beyond the vehicle and the licence, chauffeurs assigned to executive bookings are selected specifically for their ability to represent a business or individual well in high-stakes, high-visibility situations.",
        ]}
        highlights={[
          "Licensed, experienced professional chauffeurs",
          "Regular vehicle servicing and inspections",
          "Comprehensive passenger liability insurance",
          "Selected for discretion and presentation",
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
        title="Book Your Executive Transfer Today"
        description="Get a fixed-price quote and travel with a dedicated, professional chauffeur."
      />
    </main>
  );
}
