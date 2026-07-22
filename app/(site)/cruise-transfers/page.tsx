import {
  Anchor,
  Banknote,
  Building2,
  Car,
  CarFront,
  Clock,
  Luggage,
  PlaneLanding,
  PlaneTakeoff,
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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.australiataxiservice.com.au";
const pageTitle = "Cruise Transfers Australia | Private Cruise Port Chauffeur";
const pageDescription =
  "Book private cruise port transfers across Australia. Professional chauffeurs, luggage assistance and fixed prices to and from every major cruise terminal.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "Cruise Transfers Australia",
    "Cruise Port Transfers",
    "Cruise Terminal Chauffeur",
    "Airport to Cruise Terminal",
    "Cruise Ship Transfers",
    "Private Cruise Transport",
  ],
  alternates: { canonical: "/cruise-transfers" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/cruise-transfers",
    siteName: "Australia Taxi Service",
    title: pageTitle,
    description: pageDescription,
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription },
};

const whyChooseFeatures = [
  { number: "01", icon: Clock, title: "Boarding Time Reliability", description: "Chauffeurs time your arrival around your ship's boarding window, not a rough estimate." },
  { number: "02", icon: ShieldCheck, title: "Professional Chauffeurs", description: "Experienced drivers trained to prioritise punctuality on embarkation day." },
  { number: "03", icon: Luggage, title: "Luggage Assistance", description: "Help loading and unloading cruise-sized luggage at every pickup and drop-off." },
  { number: "04", icon: Car, title: "Luxury & Group Vehicles", description: "From a single sedan to larger vehicles for family or group cruise parties." },
  { number: "05", icon: Banknote, title: "Fixed Pricing", description: "One upfront price agreed before you travel, regardless of terminal traffic." },
  { number: "06", icon: Anchor, title: "Terminal Familiarity", description: "Chauffeurs who know each terminal's drop-off points and peak embarkation times." },
];

const serviceDetails = [
  { icon: Anchor, title: "Hotel to Cruise Terminal", description: "A direct transfer from your hotel to the cruise terminal, timed around your ship's boarding window so embarkation day starts without any rush." },
  { icon: PlaneLanding, title: "Airport to Cruise Terminal", description: "Your chauffeur tracks your flight and takes you straight from arrivals to the terminal, ideal for cruisers flying in on embarkation day." },
  { icon: Building2, title: "Cruise Terminal to Hotel", description: "A comfortable transfer from the terminal to your hotel at the end of your cruise, with help unloading luggage on arrival." },
  { icon: PlaneTakeoff, title: "Cruise Terminal to Airport", description: "A punctual pickup from the terminal after disembarkation, timed around your flight so you're not rushing straight off the ship." },
  { icon: Users, title: "Group & Family Cruise Transfers", description: "Spacious vehicles for families and groups travelling together, with room for cruise-sized luggage and everyone in one vehicle." },
  { icon: Luggage, title: "Multi-Passenger Luggage Transfers", description: "Extra assistance and vehicle space for larger parties travelling with substantial luggage for an extended cruise." },
];

const cities = [
  { name: "Sydney", code: "SYD", description: "Transfers to Sydney's Overseas Passenger Terminal and White Bay Cruise Terminal." },
  { name: "Melbourne", code: "MEL", description: "Transfers to Station Pier and Melbourne's cruise terminal precincts." },
  { name: "Brisbane", code: "BNE", description: "Transfers to the Brisbane International Cruise Terminal at Luggage Point." },
  { name: "Fremantle", code: "PER", description: "Transfers to Fremantle's cruise terminal, serving the Perth metro area." },
  { name: "Adelaide", code: "ADL", description: "Transfers to Adelaide's Outer Harbor cruise terminal." },
  { name: "Cairns", code: "CNS", description: "Transfers to the Cairns cruise terminal for Great Barrier Reef and Pacific departures." },
];

const fleetVehicles = [
  { icon: Car, name: "Executive Sedans", description: "Comfortable sedans suited to solo cruisers or couples travelling light." },
  { icon: CarFront, name: "Luxury SUVs", description: "Extra luggage space, well suited to longer cruises or couples with more bags." },
  { icon: Users, name: "Group Vehicles", description: "Larger vehicles for families and groups travelling together with cruise luggage." },
  { icon: Luggage, name: "Extra Luggage Vehicles", description: "Additional vehicle space for larger parties with substantial luggage." },
];

const bookingSteps = [
  { number: "01", title: "Request Quote", description: "Share your cruise line, terminal and boarding time for a fixed-price quote." },
  { number: "02", title: "Confirm Booking", description: "Confirm your transfer and receive your chauffeur and vehicle details." },
  { number: "03", title: "Meet Chauffeur", description: "Your chauffeur arrives ready, timed around your boarding window." },
  { number: "04", title: "Enjoy Your Journey", description: "Relax in a premium vehicle on the way to or from the terminal." },
];

const routes = [
  { route: "Sydney CBD → Overseas Passenger Terminal", duration: "10 min" },
  { route: "Melbourne CBD → Station Pier", duration: "15 min" },
  { route: "Brisbane Airport → Cruise Terminal", duration: "35 min" },
  { route: "Perth CBD → Fremantle Terminal", duration: "30 min" },
];

const testimonials = [
  { name: "Cruise Passenger, Sydney", quote: "Driver had all our cruise luggage loaded in minutes and got us to the terminal well ahead of boarding. Couldn't have been smoother." },
  { name: "Family Cruise, Brisbane", quote: "Booked a transfer from the airport straight to the terminal for our family of five. One vehicle, no stress, right on time." },
  { name: "Returning Cruiser, Melbourne", quote: "Used them for the pickup after our cruise too. Driver was waiting as we came off the ship with all our bags." },
];

const faqs = [
  { question: "Do you time transfers around my ship's boarding window?", answer: "Yes, we plan your pickup around your cruise line's boarding time so you arrive with plenty of time to embark." },
  { question: "Can you help with cruise-sized luggage?", answer: "Yes, chauffeurs assist with loading and unloading luggage at every pickup and drop-off." },
  { question: "Do you offer airport to cruise terminal transfers?", answer: "Yes, we track your flight and take you directly from arrivals to the cruise terminal." },
  { question: "Can you pick us up from the terminal after our cruise?", answer: "Yes, we offer terminal to hotel and terminal to airport transfers for disembarkation day." },
  { question: "How much does a cruise transfer cost?", answer: "Pricing is a fixed, obligation-free quote based on your route, vehicle type and passenger numbers, agreed before you travel." },
  { question: "Which cruise terminals do you service?", answer: "We provide transfers to cruise terminals in Sydney, Melbourne, Brisbane, Fremantle, Adelaide and Cairns." },
  { question: "Can you transfer a larger family or group?", answer: "Yes, we offer larger vehicles suited to families and groups travelling together with cruise luggage." },
  { question: "What if our flight lands close to boarding time?", answer: "Your chauffeur tracks your flight and adjusts the pickup automatically, aiming to get you to the terminal as efficiently as possible." },
  { question: "Can I book a return transfer for after my cruise?", answer: "Yes, you can book your terminal pickup and drop-off together, or arrange each leg separately." },
  { question: "How far in advance should I book a cruise transfer?", answer: "We recommend booking as soon as your cruise dates are confirmed, especially during peak cruise season." },
  { question: "Are your chauffeurs licensed and insured?", answer: "Every chauffeur is licensed in line with state passenger transport regulations, and every trip is covered by comprehensive passenger insurance." },
  { question: "Is the price fixed even if terminal traffic is heavy on embarkation day?", answer: "Yes, your fare is agreed before you travel and does not change due to terminal traffic or congestion." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Cruise Transfers",
  name: "Cruise Transfers Australia",
  description: pageDescription,
  provider: { "@type": "LocalBusiness", name: "Australia Taxi Service" },
  areaServed: { "@type": "Country", name: "Australia" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cruise Transfer Services",
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
    { "@type": "ListItem", position: 2, name: "Cruise Transfers", item: `${siteUrl}/cruise-transfers` },
  ],
};

export default function CruiseTransfersPage() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />

      <ServiceHero
        title="Private Cruise Port Transfers Across Australia"
        description="Reliable chauffeur transfers to and from Australia's cruise terminals, booked door-to-door with fixed pricing and help with luggage."
        primaryCta="Get Instant Quote"
        secondaryCta="Book Your Chauffeur"
        image="/hero.jpg"
        imageAlt="Luxury chauffeur vehicle near an Australian cruise terminal"
        breadcrumbItems={[{ label: "Cruise Transfers", href: "/cruise-transfers" }]}
      />

      <ContentBlock
        eyebrow="Getting Started"
        title="Understanding Cruise Port Transfers"
        tone="white"
        paragraphs={[
          "A cruise port transfer is a pre-booked, door-to-door journey to or from a cruise terminal in a premium vehicle with a professional chauffeur, timed around your ship's boarding window or disembarkation time rather than a generic pickup slot.",
          "Embarkation and disembarkation days come with their own pressures — cruise-sized luggage, boarding windows that matter, and terminals that can get busy right as thousands of passengers arrive or leave at once. A cruise transfer is arranged specifically around those pressures.",
          "Unlike a standard taxi or rideshare, a cruise transfer chauffeur understands boarding windows and terminal drop-off points, and can adjust your pickup time if a connecting flight runs early or late on embarkation day.",
          "The service suits cruisers flying in on the day of departure, those staying at a hotel before boarding, families and groups travelling with substantial luggage, and returning cruisers who want a smooth transfer straight off the ship.",
          "It can be booked for a single leg — just the drop-off or just the pickup — or as a return arrangement covering both embarkation and disembarkation day.",
        ]}
      />

      <ContentBlock
        eyebrow="Our Advantage"
        title="Why Choose Our Cruise Transfer Service"
        tone="ivory"
        paragraphs={[
          "Every cruise transfer is handled by a professional chauffeur who plans your pickup around your ship's actual boarding window, not a rough estimate, so embarkation day starts without any unnecessary rush.",
          "Vehicles are matched to your luggage and party size, with extra space available for family groups or longer cruises with more bags, and chauffeurs assist with loading and unloading at every stop.",
          "Because cruise schedules involve flights, hotels and boarding windows all lining up, our service is available 24/7 and can adjust your pickup if a connecting flight changes on the day.",
          "Pricing is agreed before you travel, with no surge pricing during the busy embarkation and disembarkation windows when terminal traffic is at its heaviest.",
        ]}
      />

      <Features
        eyebrow="What Sets Us Apart"
        title="Cruise Transfers Built Around Boarding Day"
        items={whyChooseFeatures}
      />

      <ServiceDetailList
        eyebrow="What We Offer"
        title="Cruise Transfer Services"
        intro="Cruise travel involves more than one leg, which is why our cruise transfer service covers the full journey to and from the terminal, however your trip is arranged."
        items={serviceDetails}
      />

      <AirportsGrid
        eyebrow="Where We Operate"
        title="Cruise Terminals We Serve"
        description="Private cruise port transfers to and from Australia's major cruise terminals, with chauffeurs who know each terminal's layout and peak embarkation times."
        items={cities}
      />

      <FleetShowcase
        eyebrow="Our Fleet"
        title="Vehicle Options"
        intro="Every vehicle in our fleet is selected for comfort and luggage space, then cleaned and inspected between trips so it's ready for embarkation or disembarkation day."
        vehicles={fleetVehicles}
        tone="white"
      />

      <ContentBlock
        eyebrow="The Comparison"
        title="Cruise Transfers vs Taxis & Rideshare"
        tone="ivory"
        paragraphs={[
          "Against a standard taxi or rideshare, a cruise transfer is planned specifically around your boarding window, with a chauffeur who understands why arriving on time matters more on embarkation day than it might for an ordinary trip.",
          "Terminal precincts can also be difficult for on-demand rides during peak embarkation and disembarkation periods, with thousands of passengers arriving or leaving within a short window. A pre-booked chauffeur avoids competing for a ride in that crowd.",
          "For luggage specifically, cruise trips often involve more bags than a typical taxi comfortably handles. Our vehicles and chauffeurs are set up for exactly that, with assistance included as standard.",
        ]}
        highlights={[
          "Timed around your ship's actual boarding window",
          "No competing for a ride during peak terminal periods",
          "Assistance with cruise-sized luggage",
          "Fixed pricing, even during busy embarkation days",
        ]}
      />

      <BookingSteps
        eyebrow="Simple Process"
        title="Booking Process"
        intro="Booking a cruise transfer takes a few minutes. Share your cruise line, terminal and boarding time, receive a fixed-price quote, confirm your booking, and your chauffeur takes care of the rest on embarkation or disembarkation day."
        steps={bookingSteps}
      />

      <RouteCards
        eyebrow="Frequently Travelled"
        title="Popular Cruise Transfer Routes"
        intro="Certain CBD-to-terminal and airport-to-terminal routes account for the majority of our cruise bookings. Below are a handful of the most requested transfers."
        routes={routes}
      />

      <ContentBlock
        eyebrow="Transparent Pricing"
        title="Pricing Information"
        tone="white"
        paragraphs={[
          "Every quote is calculated before you travel, based on your route, vehicle type and passenger and luggage numbers. Submit your cruise and trip details through our booking form for a fixed price to review before confirming.",
          "A handful of factors influence the quote: distance and route, vehicle category, the amount of luggage, and whether your booking is a single leg or a return covering both embarkation and disembarkation.",
          "We operate on a fixed-price philosophy: the fare you're quoted is the fare you pay, even during the busiest embarkation and disembarkation periods at the terminal.",
        ]}
      />

      <ContentBlock
        eyebrow="Peace Of Mind"
        title="Professional Chauffeurs"
        tone="ivory"
        paragraphs={[
          "Every chauffeur on our platform is licensed in accordance with state passenger transport regulations and selected for both driving experience and customer service. Vehicles are regularly serviced and inspected to a consistent standard.",
          "Each trip is covered by comprehensive passenger liability insurance, and chauffeurs are trained to prioritise passenger safety at every stage, from a safe pickup at a busy terminal to secure loading of cruise luggage.",
          "Beyond the vehicle and the licence, chauffeurs are familiar with terminal layouts and typical embarkation-day congestion, so pickups and drop-offs run smoothly even during peak periods.",
        ]}
        highlights={[
          "Licensed, experienced professional chauffeurs",
          "Regular vehicle servicing and inspections",
          "Comprehensive passenger liability insurance",
          "Familiar with terminal layouts and boarding windows",
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
        title="Book Your Cruise Transfer Today"
        description="Get a fixed-price quote and start or finish your cruise with a professional chauffeur."
      />
    </main>
  );
}
