import {
  ArrowRight,
  ArrowUpRight,
  Banknote,
  Briefcase,
  Building2,
  CarTaxiFront,
  CheckCircle2,
  Clock,
  Crown,
  Heart,
  MapPin,
  Minus,
  PhoneCall,
  PlaneTakeoff,
  Plus,
  Quote,
  Route,
  ShieldCheck,
  Ship,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { CityCard } from "@/components/city-card";
import { HeroImageCarousel } from "@/components/hero-image-carousel";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

const trustPoints = [
  { icon: ShieldCheck, label: "Professional Drivers" },
  { icon: Banknote, label: "Fixed Prices" },
  { icon: PlaneTakeoff, label: "Flight Monitoring" },
  { icon: Clock, label: "24/7 Support" },
  { icon: CarTaxiFront, label: "Comfortable Vehicles" },
];

const services = [
  {
    icon: PlaneTakeoff,
    title: "Airport Transfers",
    description: "Reliable airport pickup and drop-off, stress-free.",
    href: "/airport-transfers",
  },
  {
    icon: Building2,
    title: "City Transfers",
    description: "Private, door-to-door transfers around the city.",
    href: "/city-transfers",
  },
  {
    icon: MapPin,
    title: "Hotel Transfers",
    description: "Easy transfers between airports, hotels and destinations.",
    href: "/hotel-transfers",
  },
  {
    icon: Briefcase,
    title: "Corporate Chauffeur",
    description: "Business travel, staff and client transport.",
    href: "/corporate-chauffeur",
  },
  {
    icon: CarTaxiFront,
    title: "Private Chauffeur",
    description: "Personal chauffeur hire by the hour or day.",
    href: "/private-chauffeur",
  },
  {
    icon: Crown,
    title: "Executive Transfers",
    description: "VIP transfers for business leaders.",
    href: "/executive-transfers",
  },
  {
    icon: Heart,
    title: "Wedding Chauffeur",
    description: "Luxury transport for your wedding day.",
    href: "/wedding-chauffeur",
  },
  {
    icon: Users,
    title: "Event Chauffeur",
    description: "Transfers for concerts, galas and events.",
    href: "/event-chauffeur",
  },
  {
    icon: Ship,
    title: "Cruise Transfers",
    description: "Transfers to and from cruise terminals.",
    href: "/cruise-transfers",
  },
  {
    icon: Route,
    title: "Long Distance Transfers",
    description: "Interstate and regional chauffeur transfers.",
    href: "/long-distance-transfers",
  },
];

const cities = [
  {
    name: "Melbourne",
    state: "VIC",
    tags: ["Airport Transfers", "Corporate Travel", "Hotel Transfers"],
    image: "/melbourne.jpeg",
    large: true,
    href: "/melbourne-chauffeur-service",
  },
  {
    name: "Sydney",
    state: "NSW",
    tags: ["Airport Transfers", "Corporate Travel", "Harbour Transfers"],
    image: "/sydney.webp",
    href: "/sydney-chauffeur-service",
  },
  {
    name: "Brisbane",
    state: "QLD",
    tags: ["Airport Transfers", "Corporate Travel", "Event Transfers"],
    image: "/brisbane.jpg",
    href: "/brisbane-chauffeur-service",
  },
  {
    name: "Perth",
    state: "WA",
    tags: ["Airport Transfers", "Hotel Transfers", "Private Chauffeur"],
    image: "/perth.avif",
    href: "/perth-chauffeur-service",
  },
  {
    name: "Adelaide",
    state: "SA",
    tags: ["Airport Transfers", "Corporate Travel", "Wine Region Tours"],
    image: "/adelaide.webp",
    href: "/adelaide-chauffeur-service",
  },
];

const whyChooseUs = [
  {
    number: "01",
    icon: Clock,
    title: "Reliable Pickup",
    description: "Drivers track your flight and arrive right on time.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Professional Drivers",
    description: "Licensed, experienced and vetted for your safety.",
  },
  {
    number: "03",
    icon: Banknote,
    title: "Transparent Pricing",
    description: "One fixed price, agreed upfront with no surprises.",
  },
  {
    number: "04",
    icon: CarTaxiFront,
    title: "Comfortable Vehicles",
    description: "A well-maintained, modern fleet for every trip.",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Easy Booking Process",
    description: "Request, confirm and travel in just a few minutes.",
  },
];

const steps = [
  {
    title: "1. Submit Your Booking Request",
    description:
      "Tell us your pickup location, destination and travel time in a few clicks.",
  },
  {
    title: "2. Receive Your Quote",
    description:
      "We'll send you a fixed, obligation-free price for your transfer.",
  },
  {
    title: "3. Confirm Your Transfer",
    description: "Confirm your booking and receive your driver details.",
  },
  {
    title: "4. Enjoy Your Journey",
    description:
      "Sit back and relax with a professional driver handling the rest.",
  },
];

const popularRoutes = [
  { route: "Melbourne Airport To Melbourne CBD", duration: "35 min" },
  { route: "Sydney Airport To City Centre", duration: "30 min" },
  { route: "Brisbane Airport To Hotels", duration: "40 min" },
  { route: "Perth Airport Transfers", duration: "25 min" },
];

const testimonials = [
  {
    name: "Traveller from Melbourne",
    quote:
      "Driver was waiting when we landed and the price matched the quote exactly. Made a long trip much easier.",
  },
  {
    name: "Corporate client, Sydney",
    quote:
      "We book transfers for visiting staff every month. Always on time and the vehicles are spotless.",
  },
  {
    name: "Family travelling to Brisbane",
    quote:
      "Booking was simple and the driver helped with our luggage and kids' car seats without any fuss.",
  },
];

const faqs = [
  {
    question: "How can I book an airport transfer in Australia?",
    answer:
      "Submit your trip details through our booking request form and our team will confirm your driver, vehicle and pickup time.",
  },
  {
    question: "Do you provide fixed price taxi transfers?",
    answer:
      "Yes. Every quote is a fixed price agreed before your trip, with no hidden fees or surprise meter charges.",
  },
  {
    question: "Which Australian cities do you cover?",
    answer:
      "We connect passengers with transfer providers across Melbourne, Sydney, Brisbane, Perth, Adelaide and surrounding areas.",
  },
  {
    question: "Are your drivers professional and licensed?",
    answer:
      "All drivers are fully licensed, experienced professionals who prioritise safety and reliability.",
  },
  {
    question: "How much does an airport taxi cost in Australia?",
    answer:
      "Pricing depends on your route, vehicle type and distance. You'll always receive a fixed, obligation-free quote before booking.",
  },
  {
    question: "Do you provide airport pickup services?",
    answer:
      "Yes, we offer door-to-door airport pickups with flight monitoring so your driver adjusts to delays automatically.",
  },
  {
    question: "Can I book transfers for groups?",
    answer:
      "Yes, we offer a range of vehicles suited to solo travellers, families and larger groups.",
  },
  {
    question: "Do you operate 24 hours?",
    answer:
      "Yes, our transfer service and customer support are available 24/7, every day of the year.",
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Australia Taxi Service",
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  priceRange: "$$",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Airport & Private Taxi Transfers",
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
    name: "Transfer Services",
    itemListElement: services.map((service) => ({
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

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
        }}
      />
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

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-brand-navy-deep text-white">
        <div aria-hidden className="absolute inset-0">
          <HeroImageCarousel
            images={[
              { src: "/hero.jpg", alt: "Premium chauffeur vehicle" },
              { src: "/chauffeur1.jpeg", alt: "Luxury vehicle headlight and wheel detail at dusk" },
              { src: "/chauffeur2.webp", alt: "Chauffeur opening the door of a luxury vehicle" },
              { src: "/chauffeur3.jpg", alt: "Chauffeur welcoming a passenger into a luxury vehicle" },
            ]}
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,15,23,0.95)_15%,rgba(7,15,23,0.75)_50%,rgba(7,15,23,0.4)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/90 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-[1280px] px-6 pt-32 pb-20 lg:pt-24">
          <Reveal>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-gold/30 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-brand-gold-light uppercase">
              <span className="flex text-brand-gold" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3 fill-current" />
                ))}
              </span>
              Premium Chauffeur Service
            </span>
            <h1 className="font-heading mt-5 max-w-2xl text-[36px] leading-[1.08] font-bold tracking-tight uppercase sm:text-[48px] lg:text-[64px]">
              Reliable Airport &amp;{" "}
              <span className="text-brand-gold">Private</span> Taxi Transfers
            </h1>
            <p className="mt-6 max-w-xl text-[18px] leading-8 text-white/70">
              Book comfortable and affordable airport transfers with
              professional drivers. We provide reliable transportation
              solutions across Australia&apos;s major cities.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button
                render={<a href="/get-a-quote" />}
                nativeButton={false}
                size="lg"
                className="h-13 rounded-full bg-brand-gold px-8 text-base font-semibold text-brand-navy-deep hover:bg-brand-gold-hover"
              >
                Book Your Transfer
              </Button>
              <Button
                render={<a href="/get-a-quote" />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="h-13 rounded-full border-white/30 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
              >
                Get Instant Quote
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <Reveal>
            <h2 className="font-heading text-center text-[28px] font-bold tracking-tight text-brand-ink uppercase sm:text-[32px]">
              Australia&apos;s Trusted Private Transfer Service
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {trustPoints.map((point) => (
                <li
                  key={point.label}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-brand-cream px-4 py-6 text-center transition-colors duration-300 hover:border-brand-gold"
                >
                  <point.icon className="size-7 text-brand-gold" aria-hidden />
                  <span className="text-sm font-medium text-brand-ink">
                    {point.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto w-full max-w-[1280px] px-6 py-[120px]">
        <Reveal>
          <span className="block text-center text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
            What We Offer
          </span>
          <h2 className="font-heading mt-3 text-center text-[32px] font-bold tracking-tight text-brand-ink uppercase sm:text-[42px]">
            Our Taxi &amp; Transfer Services in Australia
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex flex-col gap-3 rounded-2xl border-2 border-brand-navy bg-brand-navy p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-gold hover:shadow-xl"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-brand-gold transition-colors duration-300 group-hover:bg-brand-gold group-hover:text-brand-navy-deep">
                  <service.icon className="size-5" aria-hidden />
                </div>
                <h3 className="font-heading text-base leading-tight font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-xs leading-5 text-white/60">
                  {service.description}
                </p>
                <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-white/85 transition-colors group-hover:text-brand-gold">
                  Learn More
                  <ArrowRight
                    className="size-3.5 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* City coverage */}
      <section id="cities" className="bg-brand-cream py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6">
          <Reveal>
            <span className="block text-center text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
              Where We Operate
            </span>
            <h2 className="font-heading mt-3 text-center text-[32px] font-bold tracking-tight text-brand-ink uppercase sm:text-[42px]">
              Premium Chauffeur Services Across Australia&apos;s Major Cities
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[18px] text-muted-foreground">
              Discover luxury airport transfers, corporate travel and private
              chauffeur services available in Australia&apos;s most popular
              destinations.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-14 flex flex-col gap-6">
              <CityCard city={cities[0]} seed={3} />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {cities.slice(1).map((city, index) => (
                  <CityCard key={city.name} city={city} seed={index * 17 + 20} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section id="why-us" className="bg-brand-navy-deep py-[120px] text-white">
        <div className="mx-auto max-w-[1280px] px-6">
          <Reveal>
            <span className="block text-center text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
              Our Advantage
            </span>
            <h2 className="font-heading mt-3 text-center text-[32px] font-bold tracking-tight uppercase sm:text-[42px]">
              Why Choose Our Australian Taxi Service?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {whyChooseUs.map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[20px] border border-white/10 p-6 transition-colors duration-300 hover:border-brand-gold/50"
                >
                  <span className="font-heading absolute -top-3 -right-1 text-6xl font-bold text-white/5">
                    {item.number}
                  </span>
                  <item.icon
                    className="relative size-8 text-brand-gold"
                    aria-hidden
                  />
                  <h3 className="font-heading relative mt-4 text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-6 text-white/60">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-white py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6">
          <Reveal>
            <span className="block text-center text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
              Simple Process
            </span>
            <h2 className="font-heading mt-3 text-center text-[32px] font-bold tracking-tight text-brand-ink uppercase sm:text-[42px]">
              How To Book Your Taxi Transfer
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ol className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div
                aria-hidden
                className="absolute top-7 right-0 left-0 hidden h-px bg-border lg:block"
              />
              {steps.map((step) => (
                <li key={step.title} className="group relative flex flex-col">
                  <div className="relative z-10 flex size-14 items-center justify-center rounded-full bg-brand-navy text-brand-gold shadow-md transition-transform duration-300 group-hover:scale-110">
                    <span className="font-heading text-xl font-bold">
                      {step.title.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-heading mt-5 text-lg font-semibold text-brand-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Popular routes */}
      <section id="routes" className="bg-brand-cream py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6">
          <Reveal>
            <span className="block text-center text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
              Frequently Travelled
            </span>
            <h2 className="font-heading mt-3 text-center text-[32px] font-bold tracking-tight text-brand-ink uppercase sm:text-[42px]">
              Popular Airport Transfer Routes
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {popularRoutes.map(({ route, duration }) => {
                const [origin, destination] = route.split(" To ");
                return (
                  <div
                    key={route}
                    className="group flex items-center justify-between gap-4 rounded-[20px] border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold hover:shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-navy/5 text-brand-navy group-hover:bg-brand-gold/10 group-hover:text-brand-gold">
                        <PlaneTakeoff className="size-5" aria-hidden />
                      </div>
                      <div>
                        <p className="font-heading text-base font-semibold text-brand-ink">
                          {origin}
                        </p>
                        {destination && (
                          <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                            <ArrowRight className="size-3.5" aria-hidden />
                            {destination}
                          </p>
                        )}
                        <p className="mt-1 text-xs font-medium text-brand-gold-hover">
                          ~{duration} travel time
                        </p>
                      </div>
                    </div>
                    <Button
                      render={<a href="/get-a-quote" />}
                      nativeButton={false}
                      variant="outline"
                      size="sm"
                      className="rounded-full border-brand-navy/20 text-brand-navy hover:border-brand-gold hover:bg-brand-gold/10 hover:text-brand-navy"
                    >
                      Get Quote
                    </Button>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-white py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6">
          <Reveal>
            <span className="block text-center text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
              Testimonials
            </span>
            <h2 className="font-heading mt-3 text-center text-[32px] font-bold tracking-tight text-brand-ink uppercase sm:text-[42px]">
              What Our Customers Say
            </h2>
            <div className="mt-4 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
              <div className="flex text-brand-gold" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <span>Rated by travellers on Google Reviews</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {testimonials.map((testimonial) => {
                const initials = testimonial.name
                  .split(" ")
                  .map((word) => word[0])
                  .slice(0, 2)
                  .join("")
                  .toUpperCase();
                return (
                  <figure
                    key={testimonial.name}
                    className="flex flex-col gap-5 rounded-[20px] border border-border bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-xl"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex size-11 items-center justify-center rounded-full bg-brand-navy text-sm font-semibold text-brand-gold">
                          {initials}
                        </div>
                        <figcaption className="text-sm font-semibold text-brand-ink">
                          {testimonial.name}
                        </figcaption>
                      </div>
                      <Quote
                        className="size-6 shrink-0 text-brand-gold/40"
                        aria-hidden
                      />
                    </div>
                    <div className="flex text-brand-gold" aria-hidden>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-3.5 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-sm leading-6 text-muted-foreground">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  </figure>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-[120px]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 lg:grid-cols-[3fr_2fr] lg:items-center">
          <div>
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
                Questions &amp; Answers
              </span>
              <h2 className="font-heading mt-3 max-w-md text-[32px] font-bold tracking-tight text-brand-ink uppercase sm:text-[42px]">
                Frequently Asked Questions
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-col">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group border-b border-dashed border-border py-4 first:pt-0"
                  >
                    <summary className="flex cursor-pointer list-none items-center gap-3 text-base font-semibold text-brand-navy">
                      <span className="relative flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-cream text-brand-navy transition-colors duration-300 group-open:bg-brand-gold group-open:text-brand-navy-deep">
                        <Plus className="size-3.5 group-open:hidden" aria-hidden />
                        <Minus
                          className="hidden size-3.5 group-open:block"
                          aria-hidden
                        />
                      </span>
                      <h3 className="font-heading text-base">{faq.question}</h3>
                    </summary>
                    <p className="mt-2 pl-9 text-sm leading-6 text-muted-foreground">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                href="/get-a-quote"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.15em] text-brand-gold-hover uppercase transition-colors hover:text-brand-gold"
              >
                Still Have Questions?
                <ArrowRight className="size-3.5" aria-hidden />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <Image
              src="/faq.jpg"
              alt="Packed suitcase ready for travel"
              width={420}
              height={420}
              className="mx-auto w-full max-w-sm object-contain mix-blend-multiply"
            />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="quote"
        className="relative overflow-hidden bg-brand-gold py-16 text-brand-navy-deep sm:py-20"
      >
        <div aria-hidden className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,white,transparent_75%),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(160deg,var(--brand-gold-light)_0%,var(--brand-gold)_60%)]" />
        </div>
        <Reveal className="relative mx-auto flex max-w-2xl flex-col items-center gap-4 px-6 text-center">
          <div className="flex size-11 items-center justify-center rounded-full bg-brand-navy-deep/10 text-brand-navy-deep">
            <PhoneCall className="size-5" aria-hidden />
          </div>
          <h2 className="font-heading text-[28px] font-bold tracking-tight uppercase sm:text-[36px]">
            Ready To Book Your Australia Transfer?
          </h2>
          <p className="text-[16px] text-brand-navy-deep/80 sm:text-[18px]">
            Get a reliable taxi quote today and travel comfortably with
            professional drivers.
          </p>
          <Button
            render={<a href="/get-a-quote" />}
            nativeButton={false}
            size="lg"
            className="h-13 mt-2 rounded-full bg-brand-navy-deep px-8 text-base font-semibold text-white hover:bg-brand-navy"
          >
            Request A Quote
          </Button>
        </Reveal>
      </section>
    </div>
  );
}
