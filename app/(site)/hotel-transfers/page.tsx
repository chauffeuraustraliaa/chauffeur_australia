import {
  Anchor,
  Banknote,
  Bed,
  Briefcase,
  Building2,
  Car,
  CarFront,
  Clock,
  ConciergeBell,
  Crown,
  Landmark,
  PlaneLanding,
  PlaneTakeoff,
  ShieldCheck,
  Sparkles,
  Ticket,
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

const pageTitle = "Hotel Transfers Australia | Luxury Hotel Chauffeur Service";
const pageDescription =
  "Book private hotel transfers across Australia. Professional chauffeurs, luxury vehicles and fixed prices for airport-to-hotel and hotel-to-hotel travel.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "Hotel Transfers Australia",
    "Hotel Chauffeur Service",
    "Luxury Hotel Transfers",
    "Airport to Hotel Transfers",
    "Hotel Pickup Service",
    "Private Hotel Transfers",
  ],
  alternates: {
    canonical: "/hotel-transfers",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/hotel-transfers",
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
    icon: ConciergeBell,
    title: "Hotel Pickup Coordination",
    description:
      "Chauffeurs coordinate directly with hotel lobbies and concierge desks for a smooth pickup.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Professional Chauffeurs",
    description:
      "Licensed, experienced drivers trained to prioritise comfort, discretion and safety.",
  },
  {
    number: "03",
    icon: Car,
    title: "Luxury Vehicles",
    description:
      "Travel in a premium, immaculately presented vehicle for every hotel transfer.",
  },
  {
    number: "04",
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Early check-outs, late check-ins or last-minute plans — we're available around the clock.",
  },
  {
    number: "05",
    icon: Banknote,
    title: "Fixed Pricing",
    description:
      "One upfront price agreed before you travel, with no surge charges or hidden fees.",
  },
  {
    number: "06",
    icon: Sparkles,
    title: "A Polished Arrival",
    description:
      "A well-presented vehicle and chauffeur waiting to make every hotel arrival feel considered.",
  },
];

const serviceDetails = [
  {
    icon: PlaneLanding,
    title: "Airport to Hotel",
    description:
      "Your chauffeur tracks your flight and meets you at arrivals, taking you directly to your hotel so check-in is the only thing left to do after a long trip.",
  },
  {
    icon: PlaneTakeoff,
    title: "Hotel to Airport",
    description:
      "A punctual pickup from your hotel lobby, timed around your flight and check-in requirements, with help loading luggage kerbside so departure day starts without any rush.",
  },
  {
    icon: Anchor,
    title: "Hotel to Cruise Terminal",
    description:
      "Direct transfers between your hotel and the cruise terminal, timed around boarding windows so you're not rushing on embarkation day, with room for cruise-sized luggage.",
  },
  {
    icon: Ticket,
    title: "Hotel to Events",
    description:
      "Private transfers to concerts, conferences, weddings and shows, with a return pickup arranged for whenever the event finishes, so you're not left organising a ride home late at night.",
  },
  {
    icon: Briefcase,
    title: "Hotel to Business Meetings",
    description:
      "A quiet, professional vehicle from your hotel to meetings across the city, with waiting time available for multi-stop business days and a chauffeur who plans around your schedule.",
  },
  {
    icon: Landmark,
    title: "Hotel to Tourist Attractions",
    description:
      "Transfers to landmarks, galleries and lookouts without working out public transport from an unfamiliar hotel base, with the option to plan an efficient loop between several stops.",
  },
];

const hotelCategories = [
  {
    icon: Building2,
    name: "CBD & Business Hotels",
    description:
      "City-centre hotels close to corporate districts, convention centres and major transport links, where a punctual pickup matters most.",
  },
  {
    icon: Bed,
    name: "Boutique & Design Hotels",
    description:
      "Smaller, design-led properties where a considered arrival matters as much as the stay, and where chauffeurs are used to quieter, less signposted entrances.",
  },
  {
    icon: Anchor,
    name: "Resort & Beachfront Hotels",
    description:
      "Coastal and resort properties, with transfers suited to longer distances, holiday luggage and groups travelling together.",
  },
  {
    icon: PlaneLanding,
    name: "Airport Hotels",
    description:
      "Fast, short transfers for hotels near major airports, ideal for overnight stopovers and early-morning departures.",
  },
];

const cities = [
  {
    name: "Melbourne",
    code: "MEL",
    description:
      "Hotel transfers across the CBD, Southbank and Docklands hotel precincts.",
  },
  {
    name: "Sydney",
    code: "SYD",
    description:
      "Coverage across CBD, Darling Harbour and Bondi hotel districts.",
  },
  {
    name: "Brisbane",
    code: "BNE",
    description: "Transfers across the CBD, South Bank and airport hotel precincts.",
  },
  {
    name: "Perth",
    code: "PER",
    description: "Hotel transfers across the CBD and Perth waterfront precincts.",
  },
  {
    name: "Adelaide",
    code: "ADL",
    description: "CBD and Adelaide Hills hotel transfers for business and leisure.",
  },
  {
    name: "Canberra",
    code: "CBR",
    description: "Transfers suited to government and diplomatic hotel districts.",
  },
  {
    name: "Gold Coast",
    code: "OOL",
    description: "Beachfront and resort hotel transfers along the Gold Coast strip.",
  },
];

const fleetVehicles = [
  {
    icon: Car,
    name: "Executive Sedans",
    description:
      "Sleek, comfortable sedans suited to solo travellers and couples moving between hotels and appointments.",
  },
  {
    icon: CarFront,
    name: "Luxury SUVs",
    description:
      "Extra space for luggage and passengers, well suited to families or longer resort transfers.",
  },
  {
    icon: Briefcase,
    name: "Business Vehicles",
    description:
      "Quiet, well-equipped cabins fitted out for calls and preparation before a meeting.",
  },
  {
    icon: Crown,
    name: "VIP Vehicles",
    description:
      "A dedicated top-tier vehicle and chauffeur for guests who expect a discreet, premium arrival.",
  },
];

const bookingSteps = [
  {
    number: "01",
    title: "Request Quote",
    description:
      "Share your hotel, pickup point and travel time for a fixed-price quote.",
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
      "Your chauffeur meets you at the hotel lobby or arrivals, ready on time.",
  },
  {
    number: "04",
    title: "Enjoy Your Journey",
    description: "Relax in a premium vehicle on the way to your destination.",
  },
];

const routes = [
  { route: "Melbourne Airport → CBD Hotels", duration: "35 min" },
  { route: "Sydney Airport → Darling Harbour Hotels", duration: "25 min" },
  { route: "Brisbane Hotels → Gold Coast Resorts", duration: "55 min" },
  { route: "Perth Hotels → Fremantle", duration: "30 min" },
];

const testimonials = [
  {
    name: "Business Traveller, Melbourne",
    quote:
      "Driver was waiting in the lobby exactly on time, every single day of my stay. Made a hectic work trip much easier.",
  },
  {
    name: "Couple Celebrating in Sydney",
    quote:
      "Booked a transfer from our hotel to dinner and back. Felt like part of the occasion rather than just a ride.",
  },
  {
    name: "Family Cruise Departure, Brisbane",
    quote:
      "Hotel to the cruise terminal with all our luggage handled without a hitch. One less thing to worry about on embarkation morning.",
  },
];

const faqs = [
  {
    question: "Can you pick me up directly from my hotel lobby?",
    answer:
      "Yes, your chauffeur will coordinate with the hotel and meet you in the lobby or at the main entrance at your requested time, and can liaise with the concierge desk if needed.",
  },
  {
    question: "Do you offer airport to hotel transfers?",
    answer:
      "Yes, we track your flight and take you directly from arrivals to your hotel, adjusting your pickup time automatically if your flight is delayed, so check-in is the only thing left to do.",
  },
  {
    question: "Can you transfer me between two hotels?",
    answer:
      "Yes, hotel-to-hotel transfers can be booked the same way as any other city or airport transfer, with the same fixed price and professional chauffeur.",
  },
  {
    question: "Do you provide transfers to cruise terminals?",
    answer:
      "Yes, we offer hotel to cruise terminal transfers timed around your ship's boarding window, with room for cruise-sized luggage.",
  },
  {
    question: "How much does a hotel transfer cost?",
    answer:
      "Pricing is a fixed, obligation-free quote based on your route, vehicle type and passenger numbers, agreed before you travel.",
  },
  {
    question: "Which cities do you offer hotel transfers in?",
    answer:
      "We provide hotel transfers in Melbourne, Sydney, Brisbane, Perth, Adelaide, Canberra and the Gold Coast.",
  },
  {
    question: "Can I book a return transfer for later in my stay?",
    answer:
      "Yes, you can book your hotel pickup and drop-off together, or arrange each leg separately for different days later in your stay.",
  },
  {
    question: "Do you provide transfers to events and conferences?",
    answer:
      "Yes, we offer hotel to event transfers with a return pickup arranged for whenever your event finishes.",
  },
  {
    question: "Can I book a larger vehicle for my family or group?",
    answer:
      "Yes, we offer larger vehicles suited to families and groups travelling together with extra luggage.",
  },
  {
    question: "How far in advance should I book a hotel transfer?",
    answer:
      "We recommend booking at least a few hours ahead, though we also accommodate last-minute requests where possible, including same-day changes during your stay.",
  },
  {
    question: "Are your chauffeurs licensed and insured?",
    answer:
      "Every chauffeur is licensed in line with state passenger transport regulations, and every trip is covered by comprehensive passenger insurance.",
  },
  {
    question: "Is the price fixed even if my hotel check-out runs late?",
    answer:
      "Yes, your fare is fixed at the time of quote. If your pickup time needs to shift, contact us and we'll do our best to accommodate it.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Hotel Transfers",
  name: "Hotel Transfers Australia",
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
    name: "Hotel Transfer Services",
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
      name: "Hotel Transfers",
      item: `${siteUrl}/hotel-transfers`,
    },
  ],
};

export default function HotelTransfersPage() {
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
        title="Private Hotel Transfers With A Professional Chauffeur"
        description="Travel comfortably to and from your hotel with a professional chauffeur, booked door-to-door for airport arrivals, departures and everything in between."
        primaryCta="Get Instant Quote"
        secondaryCta="Book Your Chauffeur"
        image="/hero.jpg"
        imageAlt="Luxury chauffeur vehicle outside an Australian hotel"
        breadcrumbItems={[{ label: "Hotel Transfers", href: "/hotel-transfers" }]}
      />

      <ContentBlock
        eyebrow="Getting Started"
        title="Understanding Hotel Transfers"
        tone="white"
        paragraphs={[
          "A hotel transfer is a pre-booked, door-to-door journey to or from your hotel in a premium vehicle with a professional chauffeur. Whether you're arriving from the airport, heading to a meeting, or moving on to your next stop, your pickup point, vehicle and price are all confirmed before you travel.",
          "Hotels sit at the centre of most trips, which makes the transfer to and from them worth getting right. A late or unreliable pickup can throw off a flight connection, a meeting or an event, while a smooth one sets the tone for the rest of the stay — arriving relaxed rather than stressed about parking or finding a ride.",
          "Unlike hailing a taxi from a hotel rank or waiting on a rideshare app outside a busy lobby, a hotel transfer is arranged in advance with a chauffeur who knows exactly where and when to meet you, coordinating with the hotel's entrance and concierge where needed.",
          "The service suits business travellers moving between a hotel and meetings, holidaymakers heading to and from the airport, guests attending a wedding or event, and anyone who would rather their hotel stay begin and end with a comfortable, considered journey.",
          "It also works well across a stay rather than just at the start and end of it. Many guests book their airport pickup, one or two transfers during their stay and their airport drop-off all at once, so the whole trip is arranged before they've even left home.",
        ]}
      />

      <ContentBlock
        eyebrow="Our Advantage"
        title="Why Choose Our Hotel Transfer Service"
        tone="ivory"
        paragraphs={[
          "Every hotel transfer is handled by a professional chauffeur who coordinates directly with the hotel lobby or concierge desk, so pickups run smoothly even at busy entrances or unfamiliar properties. Vehicles are premium and well-presented, matched to the trip and the number of passengers travelling.",
          "Hotel stays don't run on a fixed schedule, which is why our service is available 24/7 — an early airport transfer, a late check-in or a same-day change of plans is treated the same as any other booking, with a chauffeur ready when you need one.",
          "Pricing is agreed before you travel, with no meter running and no surge pricing if your flight is delayed or your meeting runs long. If your plans shift during your stay, our support team can help adjust pickup times or add an extra leg to your booking.",
          "It's also a service that scales with the trip: a single airport pickup, a return journey booked for later in the stay, or a full itinerary covering meetings, dinners and departures can all be arranged through the same booking process.",
        ]}
      />

      <Features
        eyebrow="What Sets Us Apart"
        title="Hotel Transfers Built Around Your Stay"
        items={whyChooseFeatures}
      />

      <ServiceDetailList
        eyebrow="What We Offer"
        title="Hotel Transfer Options"
        intro="A hotel is rarely the final destination — it's the starting point for the rest of the trip. Our hotel transfer service covers the full range of journeys that begin or end at your hotel door, each handled with the same fixed-price, professionally chauffeured standard."
        items={serviceDetails}
      />

      <FleetShowcase
        eyebrow="Where We Pick Up"
        title="Luxury Hotels We Frequently Serve"
        intro="Rather than a fixed list of properties, our chauffeurs are experienced across the hotel precincts travellers use most — from city business hotels to beachfront resorts — and know the entrances, drop-off points and check-in timing that suit each type of property."
        vehicles={hotelCategories}
        tone="ivory"
      />

      <AirportsGrid
        eyebrow="Where We Operate"
        title="Major Cities We Cover"
        description="Private hotel transfers across Australia's major cities, with chauffeurs who know each city's hotel precincts, airport routes and the fastest way between them at any time of day."
        items={cities}
        tone="white"
      />

      <FleetShowcase
        eyebrow="Our Fleet"
        title="Vehicle Options"
        intro="Every vehicle in our fleet is selected for comfort and presentation, then cleaned and inspected between trips so it's ready to the same standard for every guest. The right vehicle is matched to the trip, whether that's a discreet sedan or a larger vehicle for family luggage."
        vehicles={fleetVehicles}
      />

      <BookingSteps
        eyebrow="Simple Process"
        title="Booking Process"
        intro="Booking a hotel transfer takes a few minutes. Share your hotel, pickup point and travel time, receive a fixed-price quote, confirm your booking, and your chauffeur takes care of the rest — arriving on time, wherever your stay takes you next. Multiple transfers across a single stay can be arranged in one booking."
        steps={bookingSteps}
      />

      <RouteCards
        eyebrow="Frequently Travelled"
        title="Popular Hotel Transfer Routes"
        intro="Certain airport-to-hotel and hotel-to-destination routes account for the majority of our bookings. Below are a handful of the most requested transfers, each with an estimated travel time so you can plan your pickup with confidence, whichever city you're staying in."
        routes={routes}
      />

      <ContentBlock
        eyebrow="Transparent Pricing"
        title="Pricing Information"
        tone="white"
        paragraphs={[
          "Every quote is calculated before you travel, based on your pickup and drop-off locations, the vehicle type you need and the number of passengers travelling. Submit your trip details through our booking form and you'll receive a fixed price to review before confirming anything.",
          "A handful of factors influence the quote: distance and route, vehicle category (sedan, SUV or larger group vehicle), the time of day, and whether the trip is a straightforward hotel transfer or includes multiple stops. All of this is factored in upfront, not added afterwards.",
          "We operate on a fixed-price philosophy: the fare you're quoted is the fare you pay. There are no metered surprises, no surge pricing during busy periods, and no hidden extras for luggage, waiting time within the allowance, or standard tolls along the way.",
          "If you're booking several transfers across a stay, each leg is quoted separately so you always know the cost of that specific trip, rather than paying a bundled rate that doesn't reflect what was actually used.",
        ]}
      />

      <ContentBlock
        eyebrow="Peace Of Mind"
        title="Professional Chauffeurs"
        tone="ivory"
        paragraphs={[
          "Every chauffeur on our platform is licensed in accordance with state passenger transport regulations and selected for both driving experience and customer service. Vehicles are regularly serviced and inspected to maintain a consistent standard of safety and presentation across the fleet.",
          "Each trip is covered by comprehensive passenger liability insurance, and chauffeurs are trained to prioritise passenger safety and discretion at every stage of the journey — from a smooth pickup at a busy hotel entrance to secure loading of luggage and personal items.",
          "Beyond the vehicle and the licence, hospitality matters just as much: chauffeurs are trained in hotel etiquette, discretion and clear communication, so every transfer feels like a considered extension of the stay rather than an afterthought.",
          "That standard is applied consistently, whether it's a single airport pickup or a chauffeur booked across an entire stay — the same professionalism, presentation and punctuality every time you step into the vehicle.",
        ]}
        highlights={[
          "Licensed, experienced professional chauffeurs",
          "Regular vehicle servicing and inspections",
          "Comprehensive passenger liability insurance",
          "Trained in hotel etiquette and discretion",
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
        title="Book Your Hotel Transfer Today"
        description="Get a fixed-price quote and travel in comfort with a professional chauffeur."
      />
    </main>
  );
}
