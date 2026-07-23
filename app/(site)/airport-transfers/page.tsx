import {
  Banknote,
  Briefcase,
  Building2,
  Car,
  CarFront,
  Clock,
  Crown,
  Handshake,
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
import { StatsSection } from "@/components/services/StatsSection";
import { Testimonials } from "@/components/services/Testimonials";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.australiataxiservice.com.au";
const pageTitle = "Airport Chauffeur Transfers Australia | Luxury Airport Transfers";
const pageDescription =
  "Book premium airport chauffeur transfers across Australia. Professional drivers, luxury vehicles, fixed prices and reliable airport pickup services.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "Airport Chauffeur Transfers Australia",
    "Airport Transfers Australia",
    "Luxury Airport Transfers",
    "Private Airport Chauffeur",
    "Airport Pickup Service",
    "Airport Drop Off Service",
    "Professional Chauffeurs Australia",
  ],
  alternates: {
    canonical: "/airport-transfers",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/airport-transfers",
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
    icon: PlaneLanding,
    title: "Flight Tracking",
    description:
      "We monitor your flight in real time so your chauffeur adjusts to delays automatically.",
  },
  {
    number: "02",
    icon: Handshake,
    title: "Meet & Greet Service",
    description:
      "Your chauffeur meets you at arrivals with a name board, ready to assist with luggage.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Professional Chauffeurs",
    description:
      "Licensed, uniformed and experienced drivers who prioritise your comfort and safety.",
  },
  {
    number: "04",
    icon: Car,
    title: "Luxury Vehicles",
    description:
      "Travel in a premium, immaculately presented fleet vehicle for every trip.",
  },
  {
    number: "05",
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Early flights, late arrivals or last-minute changes — we're available around the clock.",
  },
  {
    number: "06",
    icon: Banknote,
    title: "Fixed Pricing",
    description:
      "One upfront price agreed before you travel, with no surge charges or hidden fees.",
  },
];

const serviceDetails = [
  {
    icon: PlaneLanding,
    title: "Airport Pickup",
    description:
      "Your chauffeur tracks your flight and arrives at arrivals ahead of time, name board in hand, ready to help with luggage. Waiting time is built into every pickup booking, so a delayed baggage claim or a slow run through customs never costs you extra.",
  },
  {
    icon: PlaneTakeoff,
    title: "Airport Drop-Off",
    description:
      "We calculate your departure pickup time around your flight, the time of day and typical traffic, so you reach check-in with time to spare rather than rushing through the terminal. Every drop-off includes help loading luggage kerbside.",
  },
  {
    icon: Briefcase,
    title: "Business Travel",
    description:
      "Executive vehicles, quiet cabins and punctual chauffeurs make it easy to take a call, review notes or simply arrive composed. Corporate accounts, recurring bookings and invoicing on request suit teams that travel regularly.",
  },
  {
    icon: Users,
    title: "Family Transfers",
    description:
      "Spacious vehicles carry the whole family plus luggage, prams and beach bags without a squeeze. Child and booster seats are available on request, and chauffeurs are used to helping parents load up quickly at busy terminals.",
  },
  {
    icon: Crown,
    title: "VIP Transfers",
    description:
      "For guests who expect more, our VIP service pairs a top-tier vehicle with a dedicated chauffeur, discreet service and flexible scheduling — well suited to executives, artists and high-profile travellers who value privacy.",
  },
  {
    icon: Building2,
    title: "Hotel Transfers",
    description:
      "Whether you're heading from the airport to check-in or from your hotel back to a departing flight, we coordinate directly with front desks where needed and keep the whole journey door to door.",
  },
  {
    icon: Users,
    title: "Group Transfers",
    description:
      "Larger parties travelling together are matched with a suitably sized vehicle, so nobody is split across separate cars. Ideal for extended families, sports teams or colleagues arriving on the same flight.",
  },
];

const airports = [
  {
    name: "Melbourne Airport",
    code: "MEL",
    description:
      "Transfers to and from every terminal, with chauffeurs familiar with Tullamarine's peak-hour patterns.",
  },
  {
    name: "Sydney Airport",
    code: "SYD",
    description:
      "Domestic and international terminal pickups, including transfers timed around the airport's curfew hours.",
  },
  {
    name: "Brisbane Airport",
    code: "BNE",
    description:
      "Coverage across both terminals for transfers into the CBD, the Gold Coast and the Sunshine Coast.",
  },
  {
    name: "Perth Airport",
    code: "PER",
    description:
      "Reliable pickups for Perth's spread-out terminal layout, with transfers throughout the metro area.",
  },
  {
    name: "Adelaide Airport",
    code: "ADL",
    description:
      "Quick access into the CBD and Adelaide Hills, with chauffeurs tracking domestic and international arrivals.",
  },
  {
    name: "Canberra Airport",
    code: "CBR",
    description:
      "Transfers suited to government and business travellers moving between the airport and Parliamentary Triangle.",
  },
  {
    name: "Gold Coast Airport",
    code: "OOL",
    description:
      "Coverage from Coolangatta into the Gold Coast strip and northern New South Wales border towns.",
  },
];

const fleetVehicles = [
  {
    icon: Car,
    name: "Executive Sedans",
    description:
      "Sleek, comfortable sedans suited to solo travellers, couples and business trips into the city.",
  },
  {
    icon: CarFront,
    name: "Luxury SUVs",
    description:
      "Extra space for luggage and passengers, with a commanding, comfortable ride for families or executives.",
  },
  {
    icon: Briefcase,
    name: "Business Vehicles",
    description:
      "Quiet, well-equipped cabins fitted out for calls, laptops and last-minute preparation on the move.",
  },
  {
    icon: Users,
    name: "Group Transport",
    description:
      "Larger vehicles that keep bigger groups and families travelling together in one comfortable transfer.",
  },
];

const bookingSteps = [
  {
    number: "01",
    title: "Request Quote",
    description:
      "Share your flight details and pickup information for a fixed-price quote.",
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
      "Your chauffeur meets you at arrivals, tracking your flight in real time.",
  },
  {
    number: "04",
    title: "Enjoy Your Journey",
    description: "Relax in a premium vehicle on the way to your destination.",
  },
];

const stats = [
  { value: "10,000+", label: "Successful Transfers" },
  { value: "50+", label: "Professional Chauffeurs" },
  { value: "30+", label: "Luxury Fleet Vehicles" },
  { value: "24/7", label: "Support Available" },
  { value: "100%", label: "Fixed Pricing" },
];

const routes = [
  { route: "Melbourne Airport → Melbourne CBD", duration: "35 min" },
  { route: "Sydney Airport → Sydney CBD", duration: "30 min" },
  { route: "Brisbane Airport → Gold Coast", duration: "55 min" },
  { route: "Perth Airport → Fremantle", duration: "30 min" },
];

const testimonials = [
  {
    name: "Business Traveller, Sydney",
    quote:
      "Flight was delayed nearly an hour and the chauffeur was still there tracking us. Didn't have to lift a finger.",
  },
  {
    name: "Family Visiting Melbourne",
    quote:
      "Spacious vehicle, car seats ready to go, and the driver helped with every bag. Perfect start to the trip.",
  },
  {
    name: "Executive Client, Brisbane",
    quote:
      "Immaculate vehicle and a genuinely professional chauffeur. This is how airport transfers should be.",
  },
];

const faqs = [
  {
    question: "How does flight tracking work for airport pickups?",
    answer:
      "We track your flight number in real time, so your chauffeur adjusts your pickup time automatically if your flight is early or delayed.",
  },
  {
    question: "Do you offer a meet and greet service?",
    answer:
      "Yes, your chauffeur will meet you at arrivals with a name board and assist with your luggage.",
  },
  {
    question: "How much does an airport chauffeur transfer cost?",
    answer:
      "Pricing is a fixed, obligation-free quote based on your route, vehicle type and passenger numbers, agreed before you travel.",
  },
  {
    question: "Which airports do you service?",
    answer:
      "We provide chauffeur transfers to and from Melbourne, Sydney, Brisbane, Perth, Adelaide, Gold Coast and Canberra airports.",
  },
  {
    question: "Can I book a return airport transfer?",
    answer:
      "Yes, you can book your airport pickup and drop-off together, or arrange each leg separately.",
  },
  {
    question: "What happens if my flight is delayed?",
    answer:
      "Your chauffeur monitors your flight and adjusts the pickup time automatically at no extra cost.",
  },
  {
    question: "Do you provide child seats for family transfers?",
    answer:
      "Yes, child and booster seats are available on request when you book.",
  },
  {
    question: "Can I book a chauffeur for a large group?",
    answer:
      "Yes, we offer larger luxury vehicles suited to groups and families with additional luggage.",
  },
  {
    question: "How far in advance should I book my airport transfer?",
    answer:
      "We recommend booking at least 24 hours ahead, though we also accommodate last-minute requests where possible.",
  },
  {
    question: "Is the price I'm quoted the price I pay?",
    answer:
      "Yes. Your fare is fixed at the time of quote and covers your route and waiting time — there are no surge charges or metered surprises.",
  },
  {
    question: "Are your chauffeurs licensed and insured?",
    answer:
      "Every chauffeur is licensed in line with state passenger transport regulations, and every trip is covered by comprehensive passenger insurance.",
  },
  {
    question: "Can I request a specific vehicle type?",
    answer:
      "Yes, you can request an executive sedan, luxury SUV or a larger group vehicle when you submit your booking.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Airport Chauffeur Transfers",
  name: "Airport Chauffeur Transfers Australia",
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
    name: "Airport Chauffeur Services",
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
      name: "Airport Chauffeur Transfers",
      item: `${siteUrl}/airport-transfers`,
    },
  ],
};

export default function AirportTransfersPage() {
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
        title="Luxury Airport Chauffeur Transfers Across Australia"
        description="Travel comfortably with professional chauffeurs offering reliable airport pickup and drop-off services across Australia's major cities."
        primaryCta="Get Instant Quote"
        secondaryCta="Book Your Chauffeur"
        image="/chauffeur3.jpg"
        imageAlt="Chauffeur welcoming a passenger and opening the door of a luxury vehicle"
        breadcrumbItems={[
          { label: "Airport Chauffeur Transfers", href: "/airport-transfers" },
        ]}
      />

      <ContentBlock
        eyebrow="Getting Started"
        title="Understanding Airport Chauffeur Transfers"
        tone="white"
        paragraphs={[
          "An airport chauffeur transfer is a pre-booked, door-to-door journey in a premium vehicle with a professional driver, arranged in advance for a fixed price. Unlike a ride you hail on arrival, everything is confirmed before you fly — your vehicle, your driver and your fare — so the only thing left to do on the day is walk out to arrivals.",
          "Travellers choose a chauffeur service for the certainty it brings. Public transport means navigating unfamiliar train lines or bus timetables with luggage in tow, working out fares in a new city, and hoping the connections line up with your flight time. A chauffeur removes all of that: one vehicle, one driver, one route, from the terminal to your door.",
          "It's also a different experience to a standard taxi. Rank taxis run on a metered fare that can vary with traffic and route, and availability at the airport can be unpredictable at busy times. A chauffeur transfer is booked ahead, priced upfront, and timed around your actual flight — including delays — so there's no queuing and no surprises on the fare.",
          "The service suits a wide range of travellers: business professionals who need to arrive composed and on schedule, families juggling luggage and young children, tourists unfamiliar with a new city, older travellers who value extra assistance, and anyone who simply prefers a more comfortable start or end to their trip.",
        ]}
      />

      <Features
        eyebrow="Our Advantage"
        title="Why Choose Our Airport Transfers"
        items={whyChooseFeatures}
      />

      <ServiceDetailList
        eyebrow="What We Offer"
        title="Airport Transfer Services"
        intro="Every airport journey is different, which is why our airport transfer service is built around several distinct trip types rather than a single one-size-fits-all pickup."
        items={serviceDetails}
      />

      <AirportsGrid
        eyebrow="Where We Operate"
        title="Airports We Serve"
        description="Professional chauffeur transfers to and from every major airport across Australia, with drivers who know each terminal's layout and peak-hour patterns."
        items={airports}
      />

      <ContentBlock
        eyebrow="The Comparison"
        title="Benefits Of Choosing A Chauffeur"
        tone="white"
        paragraphs={[
          "Against a traditional taxi, the main difference is certainty. A taxi fare is metered and can shift with traffic and route choice, and availability at a busy airport rank isn't guaranteed. A chauffeur is booked in advance, arrives on time, and charges the fixed price you were quoted — regardless of how the traffic runs.",
          "Ride-sharing apps offer convenience, but the experience varies trip to trip: different drivers, different vehicles, and pricing that can spike during busy periods or bad weather. A chauffeur service pairs you with a vetted, professional driver and a consistent standard of vehicle every time, with pricing that doesn't move with demand.",
          "Public transport is often the cheapest option, but it asks the most of the traveller — navigating stations with luggage, working out connections in an unfamiliar city, and building in extra time for delays. A chauffeur transfer trades that effort for a direct, private journey from the terminal to your exact destination.",
        ]}
        highlights={[
          "Comfort — a private, quiet cabin for the whole journey",
          "Reliability — flight-tracked pickups, every time",
          "Privacy — no shared rides or unexpected stops",
          "Professionalism — trained, uniformed chauffeurs",
          "Punctuality — timed around your actual flight, not a fixed schedule",
        ]}
      />

      <FleetShowcase
        eyebrow="Our Fleet"
        title="Luxury Vehicle Fleet"
        intro="Every vehicle in our fleet is selected for comfort and presentation, then cleaned and inspected between trips so it's ready to the same standard for every passenger."
        vehicles={fleetVehicles}
      />

      <BookingSteps
        eyebrow="Simple Process"
        title="Booking Process"
        intro="Booking an airport chauffeur transfer takes a few minutes. Share your flight and trip details, receive a fixed-price quote, confirm your booking, and your chauffeur takes care of the rest — tracking your flight and meeting you at arrivals on the day."
        steps={bookingSteps}
      />

      <RouteCards
        eyebrow="Frequently Travelled"
        title="Popular Airport Routes"
        intro="Some airport-to-city routes account for the majority of our bookings. Below are a handful of the most requested transfers, each with an estimated travel time so you can plan your pickup with confidence."
        routes={routes}
      />

      <ContentBlock
        eyebrow="Transparent Pricing"
        title="Pricing Information"
        tone="white"
        paragraphs={[
          "Every quote is calculated before you travel, based on your pickup and drop-off locations, the vehicle type you need and the number of passengers travelling. Submit your trip details through our booking form and you'll receive a fixed price to review before confirming anything.",
          "A handful of factors influence the quote: distance and route, vehicle category (sedan, SUV or larger group vehicle), the time of day, and whether the trip falls during standard hours or requires an early-morning or late-night pickup. All of this is factored in upfront, not added afterwards.",
          "We operate on a fixed-price philosophy: the fare you're quoted is the fare you pay. There are no metered surprises, no surge pricing during busy periods, and no hidden extras for luggage, waiting time within the allowance, or standard airport tolls.",
        ]}
      />

      <ContentBlock
        eyebrow="Peace Of Mind"
        title="Safety & Professional Standards"
        tone="ivory"
        paragraphs={[
          "Every chauffeur on our platform is licensed in accordance with state passenger transport regulations and selected for both driving experience and customer service. Vehicles are regularly serviced and inspected to maintain a consistent standard of safety and presentation across the fleet.",
          "Each trip is covered by comprehensive passenger liability insurance, and chauffeurs are trained to prioritise passenger safety at every stage of the journey — from a safe, legal pickup at a busy terminal kerb to secure loading of luggage and child seats where required.",
          "Beyond the vehicle and the licence, professionalism matters just as much: chauffeurs are trained in customer etiquette, discretion and communication, so your journey feels considered from the moment you're greeted at arrivals to the moment you're dropped at your door.",
        ]}
        highlights={[
          "Licensed, experienced professional chauffeurs",
          "Regular vehicle servicing and inspections",
          "Comprehensive passenger liability insurance",
          "Trained in passenger safety and etiquette",
        ]}
      />

      <Testimonials
        eyebrow="Testimonials"
        title="What Our Customers Say"
        testimonials={testimonials}
      />

      <StatsSection
        eyebrow="Trusted Nationwide"
        title="Why Chauffeur Australia"
        stats={stats}
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
        title="Book Your Airport Chauffeur Today"
        description="Get a fixed-price quote and travel in comfort with a professional chauffeur."
      />
    </main>
  );
}
