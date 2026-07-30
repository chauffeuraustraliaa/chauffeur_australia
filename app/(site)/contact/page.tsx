import {
  Banknote,
  Car,
  Clock,
  ShieldCheck,
  Timer,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

import { ContentBlock } from "@/components/services/ContentBlock";
import { Features } from "@/components/services/Features";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { CityCoverage } from "@/components/contact/CityCoverage";
import { FAQ } from "@/components/contact/FAQ";
import { GoogleMap } from "@/components/contact/GoogleMap";
import { ServiceLinks } from "@/components/contact/ServiceLinks";
import { Reveal } from "@/components/reveal";
import { siteUrl } from "@/lib/site-config";

const pageTitle = "Contact Chauffeur Australia | Get a Quote for Premium Chauffeur Services";
const pageDescription =
  "Contact Chauffeur Australia for luxury airport transfers, corporate travel, hotel transfers and private chauffeur services across Australia. Request your personalised quote today.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "Contact Chauffeur Australia",
    "Get Chauffeur Quote Australia",
    "Airport Transfer Contact",
    "Private Chauffeur Contact",
    "Luxury Chauffeur Australia",
  ],
  alternates: { canonical: "/contact" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/contact",
    siteName: "Australia Taxi Service",
    title: pageTitle,
    description: pageDescription,
    images: [{ url: "/chauffeur2.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/chauffeur2.webp"],
  },
};

const whyContactFeatures = [
  {
    number: "01",
    icon: Timer,
    title: "Fast Response",
    description: "Most enquiries receive a fixed-price quote within 30 minutes.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Professional Team",
    description: "A dedicated team ready to help plan your chauffeur booking.",
  },
  {
    number: "03",
    icon: Banknote,
    title: "Transparent Pricing",
    description: "Fixed, obligation-free quotes with no hidden fees or surge pricing.",
  },
  {
    number: "04",
    icon: Clock,
    title: "24/7 Support",
    description: "Our team and chauffeurs are available around the clock.",
  },
  {
    number: "05",
    icon: Car,
    title: "Luxury Vehicles",
    description: "A premium, immaculately presented fleet for every journey.",
  },
  {
    number: "06",
    icon: Users,
    title: "Experienced Chauffeurs",
    description: "Licensed, professional drivers who prioritise your comfort.",
  },
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Chauffeur Australia",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+61480289196",
    email: "bookings@chauffeuraustralia.com",
    contactType: "customer service",
    areaServed: "AU",
    availableLanguage: ["English"],
  },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: pageTitle,
  description: pageDescription,
  url: `${siteUrl}/contact`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${siteUrl}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <ContactHero breadcrumbItems={[{ label: "Contact", href: "/contact" }]} />

      <ContactInfo />

      <ContentBlock
        eyebrow="Get In Touch"
        title="How To Contact Chauffeur Australia"
        tone="ivory"
        paragraphs={[
          "Whether you need a fixed-price quote for an airport transfer, want to set up a corporate account, or simply have a question about our service areas, our team is on hand to help. The fastest way to reach us is by phone — we're available 24 hours a day, every day of the year, for both new enquiries and support with an existing booking.",
          "If your enquiry isn't urgent, the contact form below is the easiest way to get in touch. Fill in as much detail as you have — pickup and drop-off locations, travel date and time, and passenger numbers all help us prepare an accurate quote — but don't worry if you don't have every detail yet. A short message describing what you need is enough to get the conversation started, and our team will follow up to fill in the gaps.",
          "For anything urgent, such as a same-day booking or an issue with a chauffeur already on the way to you, calling us directly is always the quickest path to a resolution. Our emergency support line covers active bookings around the clock, so you're never without help once a chauffeur is confirmed.",
        ]}
      />

      <section className="bg-white py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6">
          <Reveal>
            <span className="block text-center text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
              Send An Enquiry
            </span>
            <h2 className="font-heading mt-3 text-center text-[32px] font-bold tracking-tight text-brand-ink uppercase sm:text-[42px]">
              Request A Quote Or Ask A Question
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[18px] text-muted-foreground">
              Complete the form below and our team will get back to you with a
              fixed-price quote or an answer to your question.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mx-auto mt-14 max-w-3xl">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceLinks />

      <Features
        eyebrow="Our Advantage"
        title="Why Contact Chauffeur Australia"
        items={whyContactFeatures}
      />

      <CityCoverage />

      <ContentBlock
        eyebrow="What Happens Next"
        title="What To Expect After You Enquire"
        tone="white"
        paragraphs={[
          "Once you submit the contact form or call our team, your enquiry is logged immediately and reviewed by a member of our booking team. For trip-specific requests, we prepare a fixed-price quote based on your route, vehicle preference and passenger numbers, and send it to you by email for review — there's no obligation to accept, and no payment is taken until you confirm.",
          "General questions, such as those about service areas, vehicle types or corporate accounts, are usually answered directly by our team without needing a formal quote first. If you're not sure whether your enquiry needs a quote or just an answer, don't worry — simply describe what you need in the message field and we'll take it from there.",
        ]}
      />

      <FAQ />

      <GoogleMap />

      <ContactCTA />
    </main>
  );
}
