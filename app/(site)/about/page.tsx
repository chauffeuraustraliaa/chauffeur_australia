import {
  Anchor,
  Banknote,
  Briefcase,
  Building2,
  Car,
  Eye,
  Handshake,
  Headset,
  Heart,
  Navigation,
  PlaneLanding,
  ShieldCheck,
  Smartphone,
  Target,
  Ticket,
} from "lucide-react";
import type { Metadata } from "next";

import { AirportsGrid } from "@/components/services/AirportsGrid";
import { ContentBlock } from "@/components/services/ContentBlock";
import { Features } from "@/components/services/Features";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOfferings } from "@/components/services/ServiceOfferings";
import { StatsSection } from "@/components/services/StatsSection";
import { Testimonials } from "@/components/services/Testimonials";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.australiataxiservice.com.au";
const pageTitle =
  "About Chauffeur Australia | Premium Chauffeur & Airport Transfer Specialists";
const pageDescription =
  "Learn about Chauffeur Australia, your trusted provider of premium chauffeur services, airport transfers, corporate travel, and private transportation across Australia.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "About Chauffeur Australia",
    "Luxury Chauffeur Australia",
    "Professional Chauffeur Services",
    "Airport Transfer Specialists",
    "Private Chauffeur Company Australia",
  ],
  alternates: { canonical: "/about" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/about",
    siteName: "Australia Taxi Service",
    title: pageTitle,
    description: pageDescription,
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription },
};

const missionItems = [
  {
    number: "01",
    icon: Target,
    title: "Mission",
    description:
      "To provide reliable, luxurious, and stress-free chauffeur services throughout Australia.",
  },
  {
    number: "02",
    icon: Eye,
    title: "Vision",
    description:
      "To become Australia's most trusted chauffeur booking platform.",
  },
  {
    number: "03",
    icon: Heart,
    title: "Values",
    description:
      "Guided by professionalism, reliability, safety, luxury, customer satisfaction and transparency in everything we do.",
  },
];

const whyChooseFeatures = [
  { number: "01", icon: ShieldCheck, title: "Professional Chauffeurs", description: "Licensed, experienced drivers trained to prioritise safety and comfort." },
  { number: "02", icon: Car, title: "Luxury Vehicles", description: "A premium, immaculately presented fleet for every journey." },
  { number: "03", icon: Banknote, title: "Fixed Pricing", description: "Transparent, agreed pricing with no hidden fees or surprises." },
  { number: "04", icon: Headset, title: "24/7 Customer Support", description: "Our team is available around the clock for bookings and questions." },
  { number: "05", icon: PlaneLanding, title: "Flight Monitoring", description: "Airport pickups adjusted automatically for early or delayed flights." },
  { number: "06", icon: Handshake, title: "Meet & Greet Service", description: "Chauffeurs meet you personally with a name board and assist with luggage." },
  { number: "07", icon: Navigation, title: "Nationwide Coverage", description: "Professional chauffeur services across Australia's major cities." },
  { number: "08", icon: Smartphone, title: "Easy Online Booking", description: "A simple booking process with a fixed-price quote in minutes." },
];

const services = [
  { icon: PlaneLanding, title: "Airport Transfers", description: "Reliable flight-tracked pickups and drop-offs across major airports.", href: "/airport-transfers" },
  { icon: Navigation, title: "City Transfers", description: "Private, door-to-door transfers around the city for any occasion.", href: "/city-transfers" },
  { icon: Building2, title: "Hotel Transfers", description: "Seamless transfers to and from hotels across Australia.", href: "/hotel-transfers" },
  { icon: Briefcase, title: "Corporate Chauffeur", description: "Professional transport for business travel and client transfers.", href: "/corporate-chauffeur" },
  { icon: Car, title: "Private Chauffeur Hire", description: "Personal chauffeur hire by the hour, day or single trip.", href: "/private-chauffeur" },
  { icon: Anchor, title: "Cruise Transfers", description: "Private transfers to and from Australia's cruise terminals.", href: "/cruise-transfers" },
  { icon: Heart, title: "Wedding Chauffeur", description: "Luxury wedding transport for your bridal party and getaway car.", href: "/wedding-chauffeur" },
  { icon: Ticket, title: "Event Transfers", description: "Transfers for concerts, galas, sporting events and celebrations.", href: "/event-chauffeur" },
];

const cities = [
  { name: "Melbourne", code: "VIC", description: "Professional chauffeur services across Melbourne and greater Victoria." },
  { name: "Sydney", code: "NSW", description: "Trusted chauffeur transfers across Sydney and New South Wales." },
  { name: "Brisbane", code: "QLD", description: "Chauffeur services across Brisbane and South East Queensland." },
  { name: "Perth", code: "WA", description: "Professional transfers across Perth and Western Australia." },
  { name: "Adelaide", code: "SA", description: "Trusted chauffeur services across Adelaide and South Australia." },
  { name: "Canberra", code: "ACT", description: "Chauffeur transfers across Canberra and the ACT." },
  { name: "Gold Coast", code: "QLD", description: "Chauffeur services along the Gold Coast strip and hinterland." },
  { name: "Hobart", code: "TAS", description: "Professional chauffeur transfers across Hobart and Tasmania." },
  { name: "Darwin", code: "NT", description: "Chauffeur services across Darwin and the Northern Territory." },
];

const stats = [
  { value: "10,000+", label: "Happy Customers" },
  { value: "100+", label: "Professional Chauffeurs" },
  { value: "9", label: "Major Cities Covered" },
  { value: "24/7", label: "Customer Support" },
];

const testimonials = [
  { name: "James R., Melbourne", quote: "Consistently professional service every time I book. The drivers are always on time and the cars are immaculate." },
  { name: "Priya S., Sydney", quote: "I've used Chauffeur Australia for airport transfers and corporate travel. Reliable, comfortable and always fairly priced." },
  { name: "Michael T., Brisbane", quote: "Booked a wedding car through them and the whole experience was seamless from enquiry to the big day itself." },
];

const faqs = [
  { question: "Who is Chauffeur Australia?", answer: "Chauffeur Australia is a premium chauffeur booking platform connecting travellers with professional, licensed chauffeurs across Australia's major cities." },
  { question: "Which cities do you operate in?", answer: "We connect customers with chauffeur services in Melbourne, Sydney, Brisbane, Perth, Adelaide, Canberra, the Gold Coast, Hobart and Darwin." },
  { question: "Do you provide airport transfers?", answer: "Yes, airport transfers are one of our core services, with flight tracking and meet-and-greet included as standard." },
  { question: "Can I book online?", answer: "Yes, you can request a fixed-price quote and book online in a few minutes through any of our service pages." },
  { question: "Are your chauffeurs licensed?", answer: "Yes, every chauffeur is licensed in accordance with state passenger transport regulations and every trip is covered by passenger insurance." },
  { question: "Do you provide business travel services?", answer: "Yes, we offer corporate chauffeur services including client pickups, staff transport and executive transfers." },
  { question: "How is pricing calculated?", answer: "Every quote is fixed and agreed upfront based on your route, vehicle type and passenger numbers, with no hidden fees." },
  { question: "Do you offer services for special occasions?", answer: "Yes, we provide chauffeur services for weddings, events, celebrations and other special occasions." },
  { question: "Is customer support available outside business hours?", answer: "Yes, our support team is available 24/7 for bookings, changes and questions." },
  { question: "Can I request the same chauffeur for future bookings?", answer: "Where possible, we do our best to assign the same chauffeur for clients who book regularly." },
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Australia Taxi Service",
  alternateName: "Chauffeur Australia",
  url: siteUrl,
  description: pageDescription,
  areaServed: { "@type": "Country", name: "Australia" },
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
    { "@type": "ListItem", position: 2, name: "About", item: `${siteUrl}/about` },
  ],
};

export default function AboutPage() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />

      <ServiceHero
        title="About Chauffeur Australia"
        description="Providing premium chauffeur and airport transfer services across Australia's major cities with professionalism, comfort, and reliability."
        primaryCta="Request A Quote"
        secondaryCta="Our Services"
        image="/hero.jpg"
        imageAlt="Professional chauffeur assisting a passenger beside a luxury vehicle"
        breadcrumbItems={[{ label: "About", href: "/about" }]}
      />

      <ContentBlock
        eyebrow="Getting To Know Us"
        title="Our Story"
        tone="white"
        paragraphs={[
          "Chauffeur Australia was created out of a simple frustration: travellers deserved a more consistent, more reliable way to get around than the usual mix of unpredictable taxis and inconsistent rideshare pickups. We set out to bring a genuine premium standard to everyday transport, not just for special occasions but for everyday airport runs, business trips and city travel.",
          "From the beginning, our focus has been on premium transportation done properly. That means professional, licensed chauffeurs rather than whoever happens to be nearby, a fleet of well-presented vehicles rather than a mismatch of whatever's available, and pricing that's agreed upfront rather than left to a meter or a surge algorithm.",
          "Reliability and professionalism sit at the centre of everything we do. A chauffeur booking should mean one thing: your driver is where they said they'd be, when they said they'd be there, in a vehicle that reflects the standard you were promised. We built our platform around making that the rule, not the exception.",
          "We serve both business and leisure travellers, and we've designed our services around the reality that those trips look quite different. A business traveller needs punctuality and discretion for a meeting; a family needs space and patience for luggage and children; a couple celebrating an anniversary wants the evening to feel considered. Our chauffeurs are trained across all of it.",
          "Today, Chauffeur Australia connects customers with trusted, professional chauffeur services across the country's major cities, covering everything from airport pickups and hotel transfers to weddings, corporate travel and long-distance journeys. The goal remains the same as when we started: make premium, reliable transport something every traveller can count on, not just occasionally rely on.",
        ]}
      />

      <Features
        eyebrow="What Drives Us"
        title="Our Mission, Vision & Values"
        items={missionItems}
        tone="ivory"
      />

      <Features
        eyebrow="Our Advantage"
        title="Why Choose Chauffeur Australia"
        items={whyChooseFeatures}
      />

      <ServiceOfferings
        eyebrow="What We Offer"
        title="Our Services"
        items={services}
      />

      <AirportsGrid
        eyebrow="Where We Operate"
        title="Australia-Wide Coverage"
        description="Chauffeur Australia connects customers with trusted, professional chauffeur services across Australia's major cities and destinations."
        items={cities}
      />

      <ContentBlock
        eyebrow="Our Standards"
        title="Our Commitment To Quality"
        tone="white"
        paragraphs={[
          "Every chauffeur and vehicle on our platform is held to the same professional service standard, regardless of which city you're travelling in. That consistency is what separates a chauffeur service from an ordinary ride — the same care, the same presentation, every time.",
          "Vehicle cleanliness and presentation matter to us as much as punctuality does. Vehicles are cleaned and inspected between trips, so the car that arrives for you is held to the same standard as the one in our photos, not a worn-down version of it.",
          "Customer safety is non-negotiable. Chauffeurs are licensed in accordance with state passenger transport regulations, and every trip is covered by comprehensive passenger liability insurance, so you can travel with confidence.",
          "Punctuality, comfortable travel and excellent customer support round out our standard. Chauffeurs plan around traffic and schedules rather than leaving timing to chance, and our support team is available around the clock if anything about a booking needs attention.",
        ]}
        highlights={[
          "Consistent professional service standards nationwide",
          "Vehicles cleaned and inspected between every trip",
          "Licensed chauffeurs and comprehensive passenger insurance",
          "Punctual pickups planned around real traffic and schedules",
          "Comfortable, well-presented vehicles for every trip",
          "Customer support available 24/7",
        ]}
      />

      <StatsSection
        eyebrow="Trusted Nationwide"
        title="Chauffeur Australia In Numbers"
        stats={stats}
        tone="ivory"
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
        title="Experience Premium Chauffeur Services Across Australia"
        description="Book your next journey with trusted professional chauffeurs."
        buttonLabel="Get Instant Quote"
      />
    </main>
  );
}
