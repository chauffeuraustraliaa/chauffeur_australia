import {
  Banknote,
  Briefcase,
  CalendarCheck,
  Car,
  CarFront,
  Clock,
  Crown,
  FileCheck,
  Globe,
  Handshake,
  Lock,
  PlaneLanding,
  Presentation,
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
const pageTitle = "Corporate Chauffeur Australia | Business Chauffeur Service";
const pageDescription =
  "Book professional corporate chauffeur services across Australia. Reliable executive transport, staff transfers and fixed pricing for business travel.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "Corporate Chauffeur Australia",
    "Business Chauffeur Service",
    "Executive Car Service",
    "Corporate Travel Solutions",
    "Staff Transport Australia",
    "Corporate Transfers",
  ],
  alternates: { canonical: "/corporate-chauffeur" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/corporate-chauffeur",
    siteName: "Australia Taxi Service",
    title: pageTitle,
    description: pageDescription,
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription },
};

const whyChooseFeatures = [
  {
    number: "01",
    icon: Clock,
    title: "Punctual Pickups",
    description:
      "Chauffeurs plan around traffic and schedules, so meetings and flights are never put at risk.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Professional Chauffeurs",
    description:
      "Licensed, experienced drivers trained to represent your business well at every pickup.",
  },
  {
    number: "03",
    icon: Lock,
    title: "Discreet & Confidential",
    description:
      "A quiet, private cabin for calls and conversations that stay between you and your team.",
  },
  {
    number: "04",
    icon: Briefcase,
    title: "Corporate Accounts",
    description:
      "Streamlined booking and invoicing for businesses that travel regularly.",
  },
  {
    number: "05",
    icon: Banknote,
    title: "Fixed Pricing",
    description:
      "Transparent, budget-friendly pricing agreed upfront, with no surprises on the invoice.",
  },
  {
    number: "06",
    icon: Globe,
    title: "Nationwide Coverage",
    description:
      "Consistent service across every major Australian city your business operates in.",
  },
];

const serviceDetails = [
  {
    icon: Handshake,
    title: "Client Pickups",
    description:
      "Make the right first impression by having visiting clients met at the airport or their hotel by a professional chauffeur, rather than left to find their own way.",
  },
  {
    icon: Presentation,
    title: "Conferences & Roadshows",
    description:
      "Coordinated transport for multi-stop conference days or roadshows, with vehicles and timing planned around the full itinerary, not just a single leg.",
  },
  {
    icon: Users,
    title: "Staff Shuttle Services",
    description:
      "Regular transport between offices, sites or events for teams, booked as a standing arrangement or on an as-needed basis.",
  },
  {
    icon: PlaneLanding,
    title: "Executive Airport Transfers",
    description:
      "Flight-tracked airport pickups and drop-offs for executives, timed to get them to the next meeting composed and on schedule.",
  },
  {
    icon: FileCheck,
    title: "Corporate Accounts & Invoicing",
    description:
      "Set up a corporate account for centralised billing, recurring bookings and simplified expense reporting across your team.",
  },
  {
    icon: CalendarCheck,
    title: "Multi-Day & Ongoing Bookings",
    description:
      "A chauffeur booked for a full visit, conference or ongoing engagement, providing consistent transport for the whole duration.",
  },
];

const cities = [
  { name: "Melbourne", code: "MEL", description: "Corporate transfers across the CBD and major business precincts." },
  { name: "Sydney", code: "SYD", description: "Coverage across the CBD, North Sydney and Parramatta business districts." },
  { name: "Brisbane", code: "BNE", description: "Transfers across the CBD and South Bank corporate precincts." },
  { name: "Perth", code: "PER", description: "Corporate transfers across the CBD and West Perth business district." },
  { name: "Adelaide", code: "ADL", description: "CBD transfers for business travellers and visiting clients." },
  { name: "Canberra", code: "CBR", description: "Transfers suited to government, diplomatic and corporate travel." },
  { name: "Gold Coast", code: "OOL", description: "Business transfers along the Gold Coast corporate corridor." },
];

const fleetVehicles = [
  { icon: Car, name: "Executive Sedans", description: "Sleek, comfortable sedans suited to solo executives and client pickups." },
  { icon: CarFront, name: "Luxury SUVs", description: "Extra space and presence, well suited to visiting executives or small teams." },
  { icon: Users, name: "Corporate Vans", description: "Larger vehicles for staff shuttles and group conference transport." },
  { icon: Crown, name: "VIP Vehicles", description: "A dedicated top-tier vehicle for board members and high-profile visitors." },
];

const bookingSteps = [
  { number: "01", title: "Request Quote", description: "Share your trip or account details for a fixed-price quote." },
  { number: "02", title: "Confirm Booking", description: "Confirm your transfer and receive chauffeur and vehicle details." },
  { number: "03", title: "Meet Chauffeur", description: "Your chauffeur arrives on time, ready to depart." },
  { number: "04", title: "Enjoy Your Journey", description: "Relax or prepare for your meeting in a premium vehicle." },
];

const routes = [
  { route: "Melbourne CBD → Melbourne Airport", duration: "35 min" },
  { route: "Sydney CBD → North Sydney", duration: "15 min" },
  { route: "Brisbane CBD → Gold Coast", duration: "55 min" },
  { route: "Canberra CBD → Canberra Airport", duration: "15 min" },
];

const testimonials = [
  {
    name: "Operations Manager, Sydney",
    quote:
      "We moved our whole client visit program to corporate accounts with them. Invoicing is simple and every driver has been excellent.",
  },
  {
    name: "Executive Assistant, Melbourne",
    quote:
      "Booking transport for visiting executives used to be a hassle. Now it's one email and it's handled, every time.",
  },
  {
    name: "Conference Organiser, Brisbane",
    quote:
      "Coordinated transfers for forty delegates across a two-day conference without a single scheduling issue.",
  },
];

const faqs = [
  { question: "Do you offer corporate accounts?", answer: "Yes, we offer corporate accounts with centralised billing, recurring bookings and simplified invoicing for businesses that travel regularly." },
  { question: "Can you manage transport for a whole conference or event?", answer: "Yes, we coordinate multi-stop transport for conferences and roadshows, planning vehicles and timing around the full itinerary." },
  { question: "Do you provide staff shuttle services?", answer: "Yes, we offer regular staff transport between offices or sites, either as a standing arrangement or booked as needed." },
  { question: "How much does corporate chauffeur service cost?", answer: "Pricing is a fixed, obligation-free quote based on your route, vehicle type and booking frequency, with account rates available for regular use." },
  { question: "Can you pick up visiting clients from the airport?", answer: "Yes, we offer flight-tracked airport pickups for visiting clients and executives, with a name board and assistance with luggage." },
  { question: "Which cities do you provide corporate chauffeur services in?", answer: "We operate in Melbourne, Sydney, Brisbane, Perth, Adelaide, Canberra and the Gold Coast." },
  { question: "Can we book a chauffeur for multiple days?", answer: "Yes, chauffeurs can be booked for a full visit, conference or ongoing engagement for consistent transport throughout." },
  { question: "Is the service confidential for sensitive business travel?", answer: "Yes, chauffeurs are trained in discretion and professionalism, and cabins are private for calls and conversations." },
  { question: "Can I book vehicles for a larger executive team?", answer: "Yes, we offer larger vehicles suited to teams and small groups travelling together." },
  { question: "How far in advance should we book corporate transport?", answer: "We recommend booking as early as possible for events and conferences, though we also accommodate short-notice requests." },
  { question: "Are your chauffeurs licensed and insured?", answer: "Every chauffeur is licensed in line with state passenger transport regulations, and every trip is covered by comprehensive passenger insurance." },
  { question: "Can we set up recurring bookings for regular staff transport?", answer: "Yes, recurring bookings can be arranged as part of a corporate account for consistent, ongoing staff or client transport." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corporate Chauffeur",
  name: "Corporate Chauffeur Australia",
  description: pageDescription,
  provider: { "@type": "LocalBusiness", name: "Australia Taxi Service" },
  areaServed: { "@type": "Country", name: "Australia" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Corporate Chauffeur Services",
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
    { "@type": "ListItem", position: 2, name: "Corporate Chauffeur", item: `${siteUrl}/corporate-chauffeur` },
  ],
};

export default function CorporateChauffeurPage() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />

      <ServiceHero
        title="Professional Corporate Chauffeur Services For Business Travel"
        description="Reliable, on-time chauffeur transport for executives, staff and clients, booked door-to-door with fixed pricing and professional drivers."
        primaryCta="Get Instant Quote"
        secondaryCta="Set Up A Corporate Account"
        image="/hero.jpg"
        imageAlt="Corporate chauffeur vehicle outside an Australian office building"
        breadcrumbItems={[{ label: "Corporate Chauffeur", href: "/corporate-chauffeur" }]}
      />

      <ContentBlock
        eyebrow="Getting Started"
        title="Understanding Corporate Chauffeur Services"
        tone="white"
        paragraphs={[
          "A corporate chauffeur service is a pre-booked, professional transport arrangement for businesses — covering everything from a single executive airport pickup to ongoing staff transport and multi-day conference logistics. Vehicles, chauffeurs and pricing are confirmed in advance, so travel is one less thing for a business to manage.",
          "For companies that travel regularly, transport is more than a convenience — it reflects on the business. A visiting client left waiting for a rideshare, or an executive arriving flustered from a delayed connection, sets a different tone than a chauffeur who was tracking the flight and ready at arrivals.",
          "Corporate chauffeur services differ from ad hoc taxis or rideshares in the consistency they offer: the same standard of vehicle and professionalism whether it's a one-off client visit or a recurring booking across a whole team, with centralised billing available for businesses that need it.",
          "The service suits companies hosting visiting clients or executives, teams needing regular transport between offices or sites, event and conference organisers coordinating multiple attendees, and any business that wants transport handled reliably without managing it internally.",
          "It also scales with the business. A single executive transfer and a fortnight of coordinated conference logistics both run through the same booking process, so growing transport needs don't mean a more complicated arrangement.",
        ]}
      />

      <ContentBlock
        eyebrow="Our Advantage"
        title="Why Choose Our Corporate Chauffeur Service"
        tone="ivory"
        paragraphs={[
          "Every corporate transfer is handled by a professional, discreet chauffeur trained to represent your business well — punctual, well-presented and comfortable managing everything from a quiet solo trip to a multi-stop conference day.",
          "Corporate accounts simplify the admin side of business travel: centralised invoicing, recurring bookings and a single point of contact for a team's transport needs, rather than expense claims and individual bookings for every trip.",
          "Because business schedules shift, our service is available 24/7 and can accommodate short-notice changes — an early flight, an extended meeting or an unplanned client visit is handled the same as any standard booking.",
          "Pricing is transparent and agreed upfront, which makes budgeting and expense reporting straightforward for finance teams, without the variability of metered fares or surge pricing during busy periods.",
        ]}
      />

      <Features
        eyebrow="What Sets Us Apart"
        title="Corporate Transport Built Around Your Business"
        items={whyChooseFeatures}
      />

      <ServiceDetailList
        eyebrow="What We Offer"
        title="Corporate Transfer Services"
        intro="Business travel covers a wide range of needs, from a single client pickup to ongoing staff transport. Our corporate service is built around the full range of these occasions."
        items={serviceDetails}
      />

      <AirportsGrid
        eyebrow="Where We Operate"
        title="Major Business Hubs We Serve"
        description="Corporate chauffeur services across Australia's major business districts, with chauffeurs who know each city's CBD, transport links and traffic patterns."
        items={cities}
      />

      <FleetShowcase
        eyebrow="Our Fleet"
        title="Vehicle Options"
        intro="Every vehicle in our fleet is selected for comfort and presentation, then cleaned and inspected between trips, matched to the trip whether that's one executive or a full team."
        vehicles={fleetVehicles}
        tone="white"
      />

      <ContentBlock
        eyebrow="The Comparison"
        title="Corporate Chauffeurs vs Standard Transport"
        tone="ivory"
        paragraphs={[
          "Against booking individual taxis or rideshares for each trip, a corporate chauffeur arrangement offers consistency — the same standard of vehicle and professionalism across every booking, rather than a different experience each time depending on who happens to be available.",
          "It also removes a layer of administrative work. Rather than staff submitting expense claims for individual rides, a corporate account consolidates billing into a single, itemised invoice, making transport costs easy to track and report.",
          "For client-facing travel especially, the difference is presentation. A chauffeur waiting with a name board reflects better on a business than a client hunting for their rideshare outside a busy terminal, and that first impression carries into the meeting that follows.",
        ]}
        highlights={[
          "Consistency — the same standard on every booking",
          "Simplified billing — one account, one invoice",
          "Presentation — a professional first impression for clients",
          "Flexibility — scales from one trip to a whole event",
        ]}
      />

      <BookingSteps
        eyebrow="Simple Process"
        title="Booking Process"
        intro="Booking corporate chauffeur services takes a few minutes, whether it's a single trip or setting up an ongoing account. Share your details, receive a fixed-price quote, confirm your booking, and your chauffeur takes care of the rest."
        steps={bookingSteps}
      />

      <RouteCards
        eyebrow="Frequently Travelled"
        title="Popular Corporate Routes"
        intro="Certain CBD and business-district routes account for the majority of our corporate bookings. Below are a handful of the most requested transfers, each with an estimated travel time."
        routes={routes}
      />

      <ContentBlock
        eyebrow="Transparent Pricing"
        title="Pricing Information"
        tone="white"
        paragraphs={[
          "Every quote is calculated before you travel, based on your route, vehicle type and passenger numbers. Corporate accounts can also access agreed rates for regular bookings, making transport costs predictable across a billing period.",
          "A handful of factors influence the quote: distance and route, vehicle category, the time of day, and whether the booking is a single trip or part of a recurring arrangement. All of this is factored in upfront, not added afterwards.",
          "We operate on a fixed-price philosophy: the fare you're quoted is the fare you pay, with consolidated invoicing available for corporate accounts so costs are easy to track and report internally.",
        ]}
      />

      <ContentBlock
        eyebrow="Peace Of Mind"
        title="Professional Standards"
        tone="ivory"
        paragraphs={[
          "Every chauffeur on our platform is licensed in accordance with state passenger transport regulations and selected for both driving experience and professional presentation. Vehicles are regularly serviced and inspected to maintain a consistent standard across the fleet.",
          "Each trip is covered by comprehensive passenger liability insurance, and chauffeurs are trained in discretion and confidentiality — appropriate for board members, client meetings and any trip where privacy matters.",
          "Beyond the vehicle and the licence, chauffeurs are trained to represent the businesses they transport well: punctual, professionally presented, and comfortable adapting to a packed corporate schedule.",
        ]}
        highlights={[
          "Licensed, experienced professional chauffeurs",
          "Regular vehicle servicing and inspections",
          "Comprehensive passenger liability insurance",
          "Trained in discretion and confidentiality",
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
        title="Set Up Your Corporate Chauffeur Account Today"
        description="Get a fixed-price quote and simplify business travel with a professional chauffeur."
      />
    </main>
  );
}
