import {
  Banknote,
  Calendar,
  Car,
  CarFront,
  Clock,
  Crown,
  Gauge,
  PlaneLanding,
  Route,
  ShieldCheck,
  ShoppingBag,
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
const pageTitle = "Private Chauffeur Australia | Personal Chauffeur Hire";
const pageDescription =
  "Book a private chauffeur by the hour, day or trip across Australia. Professional drivers, luxury vehicles and fixed prices for personal travel.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "Private Chauffeur Australia",
    "Personal Chauffeur Service",
    "Private Driver Hire",
    "Hourly Chauffeur Service",
    "As-Directed Chauffeur",
    "Private Car Service Australia",
  ],
  alternates: { canonical: "/private-chauffeur" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/private-chauffeur",
    siteName: "Australia Taxi Service",
    title: pageTitle,
    description: pageDescription,
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription },
};

const whyChooseFeatures = [
  { number: "01", icon: Clock, title: "Personal & Flexible", description: "Book by the hour, the day or a single trip, arranged entirely around your plans." },
  { number: "02", icon: ShieldCheck, title: "Professional Chauffeurs", description: "Licensed, experienced drivers trained to prioritise your comfort and privacy." },
  { number: "03", icon: Car, title: "Luxury Vehicles", description: "Travel in a premium, immaculately presented vehicle for every trip." },
  { number: "04", icon: Gauge, title: "As-Directed Hire", description: "Your chauffeur waits and adapts as your day changes, not locked to a single fixed route." },
  { number: "05", icon: Banknote, title: "Fixed Pricing", description: "One upfront price agreed before you travel, whatever the hire type." },
  { number: "06", icon: Sparkles, title: "A Considered Arrival", description: "A well-presented vehicle and chauffeur for whatever the occasion calls for." },
];

const serviceDetails = [
  { icon: Clock, title: "Hourly Hire", description: "A chauffeur and vehicle on call for a set number of hours, ideal for a morning of errands, a series of meetings or an evening out with multiple stops." },
  { icon: Calendar, title: "Full-Day Hire", description: "A dedicated chauffeur for the whole day, suited to busy itineraries, out-of-town trips or simply not wanting to think about transport at all." },
  { icon: PlaneLanding, title: "Airport & Travel Days", description: "Private transfers on travel days, from the first pickup to the final drop-off, with flight tracking built in." },
  { icon: ShoppingBag, title: "Shopping & Personal Errands", description: "Your chauffeur waits and helps load bags between stops, whether that's one boutique or several errands across the day." },
  { icon: Sparkles, title: "Special Occasions", description: "A polished, private vehicle for birthdays, anniversaries, proposals or any day that calls for a bit more occasion." },
  { icon: Route, title: "Multi-Stop Itineraries", description: "A single booking covering several destinations in one day, planned around your schedule rather than a fixed route." },
];

const cities = [
  { name: "Melbourne", code: "MEL", description: "Private chauffeur hire across Melbourne and surrounding suburbs." },
  { name: "Sydney", code: "SYD", description: "Personal chauffeur service across Sydney's CBD, Eastern Suburbs and North Shore." },
  { name: "Brisbane", code: "BNE", description: "Private hire across Brisbane, South Bank and the Gold Coast on request." },
  { name: "Perth", code: "PER", description: "Chauffeur hire across Perth's metro area, from the CBD to Fremantle." },
  { name: "Adelaide", code: "ADL", description: "Private chauffeur hire across Adelaide and the Adelaide Hills." },
  { name: "Canberra", code: "CBR", description: "Personal chauffeur service around the Parliamentary Triangle and beyond." },
  { name: "Gold Coast", code: "OOL", description: "Private hire along the Gold Coast strip and hinterland." },
];

const fleetVehicles = [
  { icon: Car, name: "Executive Sedans", description: "Sleek, comfortable sedans suited to solo travellers and couples." },
  { icon: CarFront, name: "Luxury SUVs", description: "Extra space and a commanding ride for families or longer days out." },
  { icon: Users, name: "Group Vehicles", description: "Larger vehicles that keep bigger groups travelling together." },
  { icon: Crown, name: "VIP Vehicles", description: "A dedicated top-tier vehicle and chauffeur for a discreet, premium experience." },
];

const bookingSteps = [
  { number: "01", title: "Request Quote", description: "Share your hire type, pickup and plans for a fixed-price quote." },
  { number: "02", title: "Confirm Booking", description: "Confirm your hire and receive your chauffeur and vehicle details." },
  { number: "03", title: "Meet Chauffeur", description: "Your chauffeur arrives ready to depart, on time." },
  { number: "04", title: "Enjoy Your Day", description: "Relax and let your chauffeur handle the driving and the route." },
];

const routes = [
  { route: "Melbourne CBD → South Yarra", duration: "15 min" },
  { route: "Sydney CBD → Bondi Beach", duration: "25 min" },
  { route: "Brisbane CBD → South Bank", duration: "10 min" },
  { route: "Perth CBD → Fremantle", duration: "30 min" },
];

const testimonials = [
  { name: "Private Client, Melbourne", quote: "Booked a chauffeur for the whole day for a family visit — errands, lunch, then the airport. So much easier than juggling separate rides." },
  { name: "Anniversary Booking, Sydney", quote: "Hired a chauffeur for our anniversary evening. The whole night felt more special not having to think about parking or driving." },
  { name: "Regular Hourly Client, Brisbane", quote: "I book hourly hire most weeks for meetings across the city. Same standard every time, and the pricing never changes on me." },
];

const faqs = [
  { question: "What is as-directed chauffeur hire?", answer: "As-directed hire means your chauffeur and vehicle are booked for a set period and follow your plans as the day unfolds, rather than a single fixed route." },
  { question: "Can I book a chauffeur for just a few hours?", answer: "Yes, hourly hire is available for shorter bookings such as meetings, errands or an evening out." },
  { question: "Can I book a chauffeur for a full day?", answer: "Yes, full-day hire is available for busy itineraries or when you'd simply rather not manage transport yourself." },
  { question: "How is private chauffeur hire priced?", answer: "Pricing is a fixed, obligation-free quote based on the hire type, duration and vehicle, agreed before you travel." },
  { question: "Which cities do you offer private chauffeur hire in?", answer: "We offer private chauffeur hire in Melbourne, Sydney, Brisbane, Perth, Adelaide, Canberra and the Gold Coast." },
  { question: "Can my chauffeur wait while I run errands?", answer: "Yes, waiting time can be included in your booking so your chauffeur is ready whenever you're done." },
  { question: "Can I book a private chauffeur for a special occasion?", answer: "Yes, private hire suits birthdays, anniversaries, proposals and any occasion that calls for a polished, private vehicle." },
  { question: "Is a private chauffeur different from a taxi or rideshare?", answer: "Yes, a private chauffeur is booked in advance for a set period with a fixed price, rather than a single metered or on-demand trip." },
  { question: "Can I request the same chauffeur for regular bookings?", answer: "Where possible, we'll assign the same chauffeur for clients who book regularly." },
  { question: "Can I book a larger vehicle for a group?", answer: "Yes, we offer larger vehicles suited to groups and families travelling together." },
  { question: "Are your chauffeurs licensed and insured?", answer: "Every chauffeur is licensed in line with state passenger transport regulations, and every trip is covered by comprehensive passenger insurance." },
  { question: "How far in advance should I book private chauffeur hire?", answer: "We recommend booking ahead where possible, though we also accommodate short-notice requests depending on availability." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Private Chauffeur",
  name: "Private Chauffeur Australia",
  description: pageDescription,
  provider: { "@type": "LocalBusiness", name: "Australia Taxi Service" },
  areaServed: { "@type": "Country", name: "Australia" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Private Chauffeur Services",
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
    { "@type": "ListItem", position: 2, name: "Private Chauffeur", item: `${siteUrl}/private-chauffeur` },
  ],
};

export default function PrivateChauffeurPage() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />

      <ServiceHero
        title="Private Chauffeur Hire For Every Occasion"
        description="Book a professional private chauffeur by the hour, the day or for a single trip — flexible, personal transport across Australia's major cities."
        primaryCta="Get Instant Quote"
        secondaryCta="Book Your Chauffeur"
        image="/hero.jpg"
        imageAlt="Luxury private chauffeur vehicle in an Australian city"
        breadcrumbItems={[{ label: "Private Chauffeur", href: "/private-chauffeur" }]}
      />

      <ContentBlock
        eyebrow="Getting Started"
        title="Understanding Private Chauffeur Hire"
        tone="white"
        paragraphs={[
          "Private chauffeur hire is a pre-booked, personal transport arrangement — a professional driver and premium vehicle set aside for you, whether that's a single trip, a few hours or a full day. Unlike a one-off ride, the vehicle and chauffeur are yours for the length of the booking.",
          "It differs from a standard transfer in its flexibility. Rather than one pickup and one drop-off, an as-directed booking can follow your day as it unfolds — waiting between stops, adjusting for a meeting that runs long, or covering several destinations in one arrangement.",
          "This kind of hire suits occasions where a single fixed trip doesn't quite fit: a day of errands and appointments, a special occasion where you'd rather not think about parking, or simply wanting the same reliable chauffeur and vehicle for the whole day rather than several separate bookings.",
          "Private chauffeur hire is used by people managing a busy personal schedule, visitors wanting a flexible way to see a city, and anyone marking an occasion — a birthday, an anniversary, a proposal — who wants the journey to feel considered, not incidental.",
          "It can be booked as a one-off for a single event or arranged regularly for clients who prefer a consistent chauffeur and vehicle for their ongoing personal travel.",
        ]}
      />

      <ContentBlock
        eyebrow="Our Advantage"
        title="Why Choose Our Private Chauffeur Service"
        tone="ivory"
        paragraphs={[
          "Every private booking is handled by a professional chauffeur who adapts to your plans rather than a fixed itinerary — waiting while you run an errand, adjusting timing on the day, or simply being ready whenever you need to move on to the next stop.",
          "Vehicles are premium and well-presented, matched to the occasion, whether that's a quiet solo trip or a larger vehicle for family or friends travelling together. Because personal plans don't run on a fixed schedule, our service is available 24/7.",
          "Pricing is agreed before you travel, with no meter running during waiting time and no surge pricing if your day runs long. If your plans change part-way through a booking, our support team can help adjust the arrangement.",
          "It's also consistent: the same standard of chauffeur, vehicle and presentation whether it's your first booking or a regular hourly arrangement you rely on every week.",
        ]}
      />

      <Features
        eyebrow="What Sets Us Apart"
        title="Private Hire Built Around You"
        items={whyChooseFeatures}
      />

      <ServiceDetailList
        eyebrow="What We Offer"
        title="Private Chauffeur Hire Options"
        intro="Personal travel covers a wide range of needs, which is why private hire is built around several distinct arrangements rather than a single fixed booking type."
        items={serviceDetails}
      />

      <AirportsGrid
        eyebrow="Where We Operate"
        title="Cities We Serve"
        description="Private chauffeur hire across Australia's major cities, with chauffeurs who know each city's streets and can adapt to your day as it unfolds."
        items={cities}
      />

      <FleetShowcase
        eyebrow="Our Fleet"
        title="Vehicle Options"
        intro="Every vehicle in our fleet is selected for comfort and presentation, then cleaned and inspected between trips so it's ready to the same standard for every hire."
        vehicles={fleetVehicles}
        tone="white"
      />

      <ContentBlock
        eyebrow="The Comparison"
        title="Private Chauffeur vs Taxis, Rideshare & Rentals"
        tone="ivory"
        paragraphs={[
          "Against a taxi or rideshare booked trip by trip, private hire offers continuity — the same chauffeur and vehicle across an entire day, rather than arranging and waiting for a new ride at every stop.",
          "Against a self-drive rental car, the difference is simply not having to drive, park or navigate. Your chauffeur handles the route, the parking and the traffic, so the day is spent on whatever the trip is actually for.",
          "Pricing is also more predictable. A metered fare or a rental's fuel, parking and toll costs can add up unpredictably across a day; a private hire booking is agreed upfront for the full arrangement.",
        ]}
        highlights={[
          "Continuity — one chauffeur and vehicle for the whole booking",
          "No parking or navigation to manage",
          "Predictable, upfront pricing",
          "Flexible — adapts to your day as it changes",
        ]}
      />

      <BookingSteps
        eyebrow="Simple Process"
        title="Booking Process"
        intro="Booking private chauffeur hire takes a few minutes. Share your hire type, pickup and plans, receive a fixed-price quote, confirm your booking, and your chauffeur takes care of the rest for the length of your hire."
        steps={bookingSteps}
      />

      <RouteCards
        eyebrow="Frequently Travelled"
        title="Popular Private Hire Routes"
        intro="While private hire is often booked for a full day rather than a single route, certain destinations come up often across bookings. Below are a few examples with estimated travel times."
        routes={routes}
      />

      <ContentBlock
        eyebrow="Transparent Pricing"
        title="Pricing Information"
        tone="white"
        paragraphs={[
          "Every quote is calculated before you travel, based on the hire type — a single trip, hourly hire or a full day — along with vehicle type and passenger numbers. Submit your details through our booking form for a fixed price to review before confirming.",
          "A handful of factors influence the quote: duration, vehicle category, the time of day and whether the booking involves multiple stops or extended waiting time. All of this is factored in upfront, not added afterwards.",
          "We operate on a fixed-price philosophy: the fare you're quoted is the fare you pay, whether your day runs exactly to plan or shifts along the way, provided it stays within the agreed booking.",
        ]}
      />

      <ContentBlock
        eyebrow="Peace Of Mind"
        title="Professional Chauffeurs"
        tone="ivory"
        paragraphs={[
          "Every chauffeur on our platform is licensed in accordance with state passenger transport regulations and selected for both driving experience and customer service. Vehicles are regularly serviced and inspected to maintain a consistent standard of safety and presentation.",
          "Each trip is covered by comprehensive passenger liability insurance, and chauffeurs are trained to prioritise passenger safety and privacy at every stage of a booking, whatever the occasion.",
          "Chauffeurs are also trained to read the day and adapt without fuss — patient during a long wait, discreet during a personal or business call, and professional regardless of how the plans shift.",
        ]}
        highlights={[
          "Licensed, experienced professional chauffeurs",
          "Regular vehicle servicing and inspections",
          "Comprehensive passenger liability insurance",
          "Trained to adapt to changing plans",
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
        title="Book Your Private Chauffeur Today"
        description="Get a fixed-price quote and travel in comfort with a professional chauffeur."
      />
    </main>
  );
}
