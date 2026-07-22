import {
  Banknote,
  CalendarCheck,
  Car,
  CarFront,
  Clock,
  Gem,
  Handshake,
  Heart,
  MapPin,
  Route,
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
const pageTitle = "Wedding Chauffeur Australia | Luxury Wedding Car Hire";
const pageDescription =
  "Book a luxury wedding chauffeur across Australia. Professional drivers, elegant vehicles and fixed prices for bridal parties, guests and getaway cars.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "Wedding Chauffeur Australia",
    "Wedding Car Hire",
    "Bridal Car Service",
    "Wedding Transport Australia",
    "Luxury Wedding Cars",
    "Wedding Day Chauffeur",
  ],
  alternates: { canonical: "/wedding-chauffeur" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/wedding-chauffeur",
    siteName: "Australia Taxi Service",
    title: pageTitle,
    description: pageDescription,
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription },
};

const whyChooseFeatures = [
  { number: "01", icon: Clock, title: "Wedding Day Reliability", description: "Chauffeurs plan around your exact timeline, so the day runs smoothly from start to finish." },
  { number: "02", icon: ShieldCheck, title: "Professional Chauffeurs", description: "Experienced, well-presented drivers trained to be part of the day without getting in the way of it." },
  { number: "03", icon: Car, title: "Luxury Vehicles", description: "Elegant, immaculately presented vehicles suited to wedding photography and arrivals." },
  { number: "04", icon: CalendarCheck, title: "Flexible Wedding Packages", description: "Bookings built around your ceremony, reception and getaway, not a single fixed trip." },
  { number: "05", icon: Banknote, title: "Fixed Pricing", description: "One upfront price agreed before the day, with no surprises once the celebrations begin." },
  { number: "06", icon: Handshake, title: "On-The-Day Coordination", description: "Chauffeurs who coordinate with your planner or venue to keep timing on track." },
];

const serviceDetails = [
  { icon: Gem, title: "Bridal Party Transport", description: "A polished, unhurried journey for the bride and bridal party from getting-ready to the ceremony, timed around hair, makeup and photography." },
  { icon: Users, title: "Groom & Groomsmen Transfers", description: "Punctual transport for the groom and groomsmen, so the wedding party arrives together and on schedule." },
  { icon: MapPin, title: "Guest Shuttle Service", description: "Coordinated shuttles for guests between accommodation, the ceremony and the reception, especially useful for destination or regional weddings." },
  { icon: Route, title: "Ceremony to Reception Transfers", description: "A seamless transfer between venues, timed to fit neatly between the ceremony ending and reception photos or entrances." },
  { icon: Heart, title: "Getaway Car", description: "A decorated, photograph-ready send-off vehicle for the couple's exit, with the driver briefed on the exact departure moment." },
  { icon: CarFront, title: "Multi-Vehicle Wedding Convoys", description: "Coordinated multiple vehicles for larger bridal parties or family groups, arriving together in sequence." },
];

const cities = [
  { name: "Melbourne", code: "MEL", description: "Wedding transfers across Melbourne's ceremony and reception venues." },
  { name: "Sydney", code: "SYD", description: "Coverage across Sydney's harbourside and Hills District wedding venues." },
  { name: "Brisbane", code: "BNE", description: "Wedding transfers across Brisbane, South Bank and Gold Coast venues." },
  { name: "Perth", code: "PER", description: "Coverage across Perth's CBD, riverside and Swan Valley wedding venues." },
  { name: "Adelaide", code: "ADL", description: "Wedding transfers across Adelaide and the Adelaide Hills wine region." },
  { name: "Canberra", code: "CBR", description: "Wedding transfers across Canberra's lakeside and heritage venues." },
  { name: "Gold Coast", code: "OOL", description: "Beachfront and hinterland wedding transfers along the Gold Coast." },
];

const fleetVehicles = [
  { icon: Car, name: "Luxury Sedans", description: "Elegant, immaculately presented sedans suited to bridal party transport and photography." },
  { icon: CarFront, name: "Luxury SUVs", description: "Extra space and presence for larger bridal parties or family groups." },
  { icon: Users, name: "Guest Shuttle Vehicles", description: "Comfortable, larger vehicles for coordinated guest transport between venues." },
  { icon: Heart, name: "Decorated Getaway Cars", description: "A polished send-off vehicle, ready for the couple's exit and photographs." },
];

const bookingSteps = [
  { number: "01", title: "Request Quote", description: "Share your wedding date, venues and timeline for a fixed-price quote." },
  { number: "02", title: "Confirm Booking", description: "Confirm your wedding package and receive your chauffeur and vehicle details." },
  { number: "03", title: "Meet Chauffeur", description: "Your chauffeur arrives ahead of schedule, ready for the day." },
  { number: "04", title: "Enjoy Your Day", description: "Relax and let your chauffeur manage the timing and the driving." },
];

const routes = [
  { route: "Melbourne CBD → Yarra Valley", duration: "60 min" },
  { route: "Sydney CBD → Hills District", duration: "50 min" },
  { route: "Brisbane CBD → Mount Tamborine", duration: "50 min" },
  { route: "Adelaide CBD → Adelaide Hills", duration: "35 min" },
];

const testimonials = [
  { name: "Bride, Melbourne", quote: "Our chauffeur was so calm and organised, it took a huge amount of stress off the day. The car looked beautiful in every photo." },
  { name: "Groom, Sydney", quote: "Booked transport for the whole bridal party and groomsmen. Everyone arrived together, right on time, without me having to manage a thing." },
  { name: "Wedding Planner, Brisbane", quote: "I recommend them to every couple now. They coordinate directly with me on timing, which makes my job so much easier." },
];

const faqs = [
  { question: "Can you coordinate transport around our full wedding day timeline?", answer: "Yes, we build wedding bookings around your ceremony, reception and getaway timing rather than a single fixed trip." },
  { question: "Do you provide transport for the whole bridal party?", answer: "Yes, we offer bridal party transport as well as separate transfers for the groom and groomsmen." },
  { question: "Can you shuttle guests between venues?", answer: "Yes, we offer coordinated guest shuttle services between accommodation, the ceremony and the reception." },
  { question: "Do you offer a decorated getaway car?", answer: "Yes, we can arrange a decorated, photograph-ready vehicle for the couple's send-off." },
  { question: "How much does wedding chauffeur service cost?", answer: "Pricing is a fixed, obligation-free quote based on your venues, timeline and number of vehicles required." },
  { question: "Which cities do you provide wedding transport in?", answer: "We provide wedding chauffeur services in Melbourne, Sydney, Brisbane, Perth, Adelaide, Canberra and the Gold Coast, including nearby wine regions and hinterland venues." },
  { question: "Can you coordinate with our wedding planner or venue?", answer: "Yes, chauffeurs can coordinate directly with your planner or venue to keep transport timing on track." },
  { question: "Can we book multiple vehicles for a larger wedding party?", answer: "Yes, we coordinate multi-vehicle convoys for larger bridal parties or family groups." },
  { question: "How far in advance should we book wedding transport?", answer: "We recommend booking as early as possible once your date and venues are confirmed, given wedding dates book out ahead of time." },
  { question: "Is the price fixed even if the day runs behind schedule?", answer: "Your fare is agreed before the day. If timing shifts, let your chauffeur or our team know and we'll do our best to accommodate it." },
  { question: "Are your chauffeurs experienced with wedding day timing?", answer: "Yes, our chauffeurs are experienced with the pacing of wedding days, including allowing time for photography stops." },
  { question: "Are your chauffeurs licensed and insured?", answer: "Every chauffeur is licensed in line with state passenger transport regulations, and every trip is covered by comprehensive passenger insurance." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Wedding Chauffeur",
  name: "Wedding Chauffeur Australia",
  description: pageDescription,
  provider: { "@type": "LocalBusiness", name: "Australia Taxi Service" },
  areaServed: { "@type": "Country", name: "Australia" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wedding Chauffeur Services",
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
    { "@type": "ListItem", position: 2, name: "Wedding Chauffeur", item: `${siteUrl}/wedding-chauffeur` },
  ],
};

export default function WeddingChauffeurPage() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />

      <ServiceHero
        title="Luxury Wedding Chauffeur Services For Your Big Day"
        description="Arrive in style with a professional wedding chauffeur, luxury vehicle and a fixed-price booking designed around your wedding day timeline."
        primaryCta="Get Instant Quote"
        secondaryCta="Enquire About Your Wedding"
        image="/hero.jpg"
        imageAlt="Luxury wedding chauffeur vehicle in Australia"
        breadcrumbItems={[{ label: "Wedding Chauffeur", href: "/wedding-chauffeur" }]}
      />

      <ContentBlock
        eyebrow="Getting Started"
        title="Understanding Wedding Chauffeur Services"
        tone="white"
        paragraphs={[
          "A wedding chauffeur service is a pre-booked, professional transport arrangement built around your wedding day timeline — covering everything from bridal party transport to guest shuttles and a decorated getaway car, rather than a single point-to-point trip.",
          "Weddings run on a tight, carefully planned schedule, which makes transport one of the details worth getting right. A late bridal car can push back photography, ceremony timing or the reception entrance, while a smooth, well-timed arrival lets everyone else on the day focus on the celebration.",
          "Unlike a standard taxi or rideshare, a wedding chauffeur is booked around your specific timeline, coordinating with your ceremony and reception venues, your planner if you have one, and any photography stops built into the day.",
          "The service suits couples wanting a stress-free, well-timed wedding day, wedding planners coordinating transport as part of the broader schedule, and any wedding party wanting to arrive — and leave — in a way that matches the occasion.",
          "It can be booked for a single leg, such as the getaway car, or as a full package covering the bridal party, groomsmen, guest shuttles and the send-off, all arranged through the one booking.",
        ]}
      />

      <ContentBlock
        eyebrow="Our Advantage"
        title="Why Choose Our Wedding Chauffeur Service"
        tone="ivory"
        paragraphs={[
          "Every wedding transfer is handled by a professional chauffeur experienced with the pacing of a wedding day — allowing time for photography, coordinating with venues, and staying calm and unobtrusive throughout.",
          "Vehicles are elegant and immaculately presented, suited to wedding photography, with decorated getaway car options available for the couple's exit. Packages are built around your full timeline rather than a single fixed trip.",
          "Because every wedding day is different, our service is flexible — chauffeurs coordinate directly with your planner or venue where needed, and pricing is agreed upfront so there are no surprises once the celebrations begin.",
          "The same standard applies across the whole day, from the first bridal party pickup to the final getaway car, so the experience feels considered and consistent from start to finish.",
        ]}
      />

      <Features
        eyebrow="What Sets Us Apart"
        title="Wedding Transport Built Around Your Day"
        items={whyChooseFeatures}
      />

      <ServiceDetailList
        eyebrow="What We Offer"
        title="Wedding Transfer Services"
        intro="A wedding day involves more than one journey, which is why our wedding chauffeur service is built around the full range of transport a wedding day needs."
        items={serviceDetails}
      />

      <AirportsGrid
        eyebrow="Where We Operate"
        title="Cities We Serve"
        description="Luxury wedding chauffeur services across Australia's major cities and popular wedding regions, with chauffeurs experienced in venue timing and photography stops."
        items={cities}
      />

      <FleetShowcase
        eyebrow="Our Fleet"
        title="Vehicle Options"
        intro="Every vehicle in our fleet is selected for comfort and presentation, then cleaned and inspected before your wedding day so it's ready to be part of the photographs."
        vehicles={fleetVehicles}
        tone="white"
      />

      <ContentBlock
        eyebrow="The Comparison"
        title="Wedding Chauffeurs vs Self-Drive & Rideshare"
        tone="ivory"
        paragraphs={[
          "Against self-driving or asking a friend or family member to drive, a wedding chauffeur removes the risk entirely — no one in the bridal party needs to worry about parking, navigation or being ready to drive on the day.",
          "Against booking a rideshare or taxi for each leg, a wedding chauffeur service is planned around your full timeline in advance, with a vehicle and driver who know exactly where to be and when, rather than being arranged on the day.",
          "For photography specifically, a dedicated wedding vehicle and chauffeur means the car itself can be part of the day's images, timed and positioned appropriately, rather than an incidental ride hailed at the last minute.",
        ]}
        highlights={[
          "No one in the bridal party needs to drive",
          "Timing planned around your full day",
          "A vehicle suited to wedding photography",
          "One coordinated booking, not several separate rides",
        ]}
      />

      <BookingSteps
        eyebrow="Simple Process"
        title="Booking Process"
        intro="Booking wedding chauffeur services takes a few minutes. Share your date, venues and timeline, receive a fixed-price quote, confirm your package, and your chauffeur takes care of the rest on the day."
        steps={bookingSteps}
      />

      <RouteCards
        eyebrow="Frequently Travelled"
        title="Popular Wedding Routes"
        intro="Certain CBD-to-venue and wine region routes account for many of our wedding bookings. Below are a handful of examples with estimated travel times."
        routes={routes}
      />

      <ContentBlock
        eyebrow="Transparent Pricing"
        title="Pricing Information"
        tone="white"
        paragraphs={[
          "Every quote is calculated ahead of your wedding day, based on your venues, timeline, number of vehicles and any additional services such as guest shuttles or a decorated getaway car. Submit your details for a fixed price to review before confirming.",
          "A handful of factors influence the quote: distance between venues, the number of vehicles required, vehicle category, and whether the booking covers a single leg or the full wedding day.",
          "We operate on a fixed-price philosophy: the price you're quoted is the price you pay, agreed well ahead of the day so it's one less thing to think about while you're planning everything else.",
        ]}
      />

      <ContentBlock
        eyebrow="Peace Of Mind"
        title="Professional Chauffeurs"
        tone="ivory"
        paragraphs={[
          "Every chauffeur on our platform is licensed in accordance with state passenger transport regulations and selected for both driving experience and presentation. Vehicles are regularly serviced and inspected to a high standard ahead of every wedding booking.",
          "Each trip is covered by comprehensive passenger liability insurance, and chauffeurs are trained to be a calm, reliable presence on the day — punctual, unobtrusive and ready to adjust if the schedule shifts slightly.",
          "Beyond the vehicle and the licence, chauffeurs are trained in the particular pacing of wedding days, from allowing time for photography to coordinating discreetly with planners and venue staff.",
        ]}
        highlights={[
          "Licensed, experienced professional chauffeurs",
          "Regular vehicle servicing and inspections",
          "Comprehensive passenger liability insurance",
          "Experienced with wedding day timing and coordination",
        ]}
      />

      <Testimonials
        eyebrow="Testimonials"
        title="What Our Couples Say"
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
        title="Enquire About Your Wedding Transport Today"
        description="Get a fixed-price quote and let a professional chauffeur handle the driving on your big day."
      />
    </main>
  );
}
