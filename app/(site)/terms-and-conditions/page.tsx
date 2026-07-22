import {
  AlertTriangle,
  BookOpen,
  Calendar,
  Car,
  Clock,
  Copyright,
  CreditCard,
  Globe,
  Headset,
  Info,
  Landmark,
  Lock,
  Luggage,
  Mail,
  PlaneLanding,
  RefreshCw,
  RotateCcw,
  Scale,
  ShieldAlert,
  ShieldCheck,
  UserCheck,
  UserX,
  XCircle,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { LegalHero } from "@/components/legal/LegalHero";
import { PolicySection } from "@/components/legal/PolicySection";
import { TableOfContents } from "@/components/legal/TableOfContents";
import { Reveal } from "@/components/reveal";
import { ServiceCTA } from "@/components/services/ServiceCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.australiataxiservice.com.au";
const pageTitle = "Terms & Conditions | Chauffeur Australia";
const pageDescription =
  "Read Chauffeur Australia's booking terms, cancellation policy, payment terms and customer responsibilities.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/terms-and-conditions" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/terms-and-conditions",
    siteName: "Australia Taxi Service",
    title: pageTitle,
    description: pageDescription,
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription },
};

const effectiveDate = "1 January 2026";
const lastUpdated = "22 July 2026";

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "definitions", label: "Definitions" },
  { id: "booking-terms", label: "Booking Terms" },
  { id: "payment-terms", label: "Payment Terms" },
  { id: "quotes-pricing", label: "Quotes & Pricing" },
  { id: "vehicle-availability", label: "Vehicle Availability" },
  { id: "customer-responsibilities", label: "Customer Responsibilities" },
  { id: "passenger-conduct", label: "Passenger Conduct" },
  { id: "luggage-policy", label: "Luggage Policy" },
  { id: "airport-waiting-time", label: "Airport Waiting Time" },
  { id: "flight-delays", label: "Flight Delays" },
  { id: "cancellations", label: "Cancellations" },
  { id: "refund-policy", label: "Refund Policy" },
  { id: "no-shows", label: "No Shows" },
  { id: "driver-responsibilities", label: "Driver Responsibilities" },
  { id: "force-majeure", label: "Force Majeure" },
  { id: "limitation-of-liability", label: "Limitation Of Liability" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "website-usage", label: "Website Usage" },
  { id: "privacy-reference", label: "Privacy Reference" },
  { id: "changes-to-terms", label: "Changes To Terms" },
  { id: "governing-law", label: "Governing Law" },
  { id: "contact-details", label: "Contact Details" },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Terms & Conditions",
      item: `${siteUrl}/terms-and-conditions`,
    },
  ],
};

export default function TermsAndConditionsPage() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <LegalHero
        title="Terms & Conditions"
        subtitle="Please read these terms carefully. They set out the booking, payment and service conditions that apply whenever you book a chauffeur transfer with us."
        breadcrumbItems={[{ label: "Terms & Conditions", href: "/terms-and-conditions" }]}
      />

      <section className="bg-brand-cream py-6">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-8">
          <span>
            <strong className="font-semibold text-brand-ink">Effective Date:</strong>{" "}
            {effectiveDate}
          </span>
          <span>
            <strong className="font-semibold text-brand-ink">Last Updated:</strong>{" "}
            {lastUpdated}
          </span>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 lg:grid-cols-[280px_1fr]">
          <Reveal>
            <TableOfContents items={tocItems} />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6">
              <PolicySection id="introduction" icon={BookOpen} title="Introduction">
                <p>
                  These Terms &amp; Conditions govern your use of the Chauffeur
                  Australia website and any booking made with Australia Taxi Service,
                  trading as Chauffeur Australia (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
                  &ldquo;our&rdquo;). By visiting our website or submitting a booking,
                  you agree to be bound by these terms.
                </p>
                <p>
                  If you do not agree with any part of these terms, please do not use
                  our website or submit a booking. These terms apply to all bookings
                  made directly through our website, by phone, or through a corporate
                  account.
                </p>
                <p>
                  These terms should be read alongside our Privacy Policy, which
                  explains how we collect, use and protect personal information
                  provided as part of a booking.
                </p>
              </PolicySection>

              <PolicySection id="definitions" icon={Info} title="Definitions">
                <p>
                  <strong className="text-brand-ink">&ldquo;Customer&rdquo;</strong> or
                  &ldquo;you&rdquo; means the person making or named on a booking.{" "}
                  <strong className="text-brand-ink">&ldquo;Chauffeur&rdquo;</strong> or
                  &ldquo;driver&rdquo; means the professional driver assigned to carry
                  out a booking.
                </p>
                <p>
                  <strong className="text-brand-ink">&ldquo;Booking&rdquo;</strong>{" "}
                  means a confirmed request for a chauffeur transfer, including the
                  agreed pickup, destination, vehicle type and fare.{" "}
                  <strong className="text-brand-ink">&ldquo;Vehicle&rdquo;</strong>{" "}
                  means the car or other vehicle allocated to carry out a booking.
                </p>
                <p>
                  <strong className="text-brand-ink">&ldquo;Platform&rdquo;</strong>{" "}
                  means our website and any related booking systems used to arrange,
                  confirm or manage a transfer.
                </p>
              </PolicySection>

              <PolicySection id="booking-terms" icon={Calendar} title="Booking Terms">
                <p>
                  A booking is only confirmed once you receive confirmation from us,
                  either by email or through our booking platform. A submitted request
                  is not a confirmed booking until this confirmation is issued.
                </p>
                <p>
                  You are responsible for providing accurate pickup, destination,
                  timing, passenger and luggage details at the time of booking.
                  Inaccurate information may affect vehicle allocation, pricing or the
                  chauffeur&rsquo;s ability to complete the trip as expected.
                </p>
                <p>
                  Changes to a confirmed booking, such as a change of date, time or
                  destination, should be requested as early as possible and are subject
                  to availability and, where applicable, a revised quote.
                </p>
                <p>
                  We will confirm any change to your booking in writing before it is
                  treated as final, so both parties have a clear record of the updated
                  arrangement.
                </p>
              </PolicySection>

              <PolicySection id="payment-terms" icon={CreditCard} title="Payment Terms">
                <p>
                  Payment is due in accordance with the method agreed at the time of
                  booking, which may include payment in advance, payment on the day, or
                  invoicing under an approved corporate account.
                </p>
                <p>
                  Card payments are processed through a secure, independent payment
                  provider. By providing payment details, you authorise us to charge
                  the agreed fare, along with any additional charges properly incurred
                  under these terms, such as extended waiting time.
                </p>
                <p>
                  Corporate account customers are billed in accordance with the payment
                  terms agreed when the account was established.
                </p>
                <p>
                  If a payment is declined or cannot be processed, we may contact you to
                  arrange an alternative payment method before your booking can be
                  confirmed.
                </p>
              </PolicySection>

              <PolicySection id="quotes-pricing" icon={Landmark} title="Quotes & Pricing">
                <p>
                  Quotes are based on the pickup location, destination, vehicle type,
                  passenger numbers and timing provided at the time of booking. Quotes
                  are fixed once confirmed, provided the details of the trip do not
                  change materially.
                </p>
                <p>
                  If actual trip details differ materially from what was booked — such
                  as an additional stop, a different destination, or a larger vehicle
                  becoming necessary — we reserve the right to issue a revised quote
                  reflecting the updated trip.
                </p>
                <p>
                  All prices are shown in Australian dollars and are inclusive of
                  applicable taxes unless stated otherwise.
                </p>
                <p>
                  We do not apply surge or demand-based pricing after a quote has been
                  confirmed, even during busy periods, public holidays or major events.
                </p>
              </PolicySection>

              <PolicySection id="vehicle-availability" icon={Car} title="Vehicle Availability">
                <p>
                  Vehicles are allocated based on availability at the time of your
                  booking. While we make reasonable efforts to provide the specific
                  vehicle type requested, availability cannot always be guaranteed.
                </p>
                <p>
                  Where your requested vehicle type is unavailable, we may substitute a
                  comparable or superior vehicle at no additional cost, or contact you
                  to discuss alternative arrangements.
                </p>
              </PolicySection>

              <PolicySection id="customer-responsibilities" icon={UserCheck} title="Customer Responsibilities">
                <p>
                  You are responsible for being ready at the agreed pickup location at
                  the confirmed time, and for providing accurate contact details so
                  your chauffeur can reach you if needed.
                </p>
                <p>
                  You must ensure that any special requirements — such as child seats,
                  additional luggage space or accessibility needs — are communicated at
                  the time of booking so appropriate arrangements can be made.
                </p>
                <p>
                  You are responsible for complying with reasonable safety instructions
                  given by your chauffeur during the course of a trip.
                </p>
                <p>
                  You are also responsible for any loss or damage to the vehicle caused
                  by you or a passenger travelling with you, beyond normal wear
                  associated with the trip.
                </p>
              </PolicySection>

              <PolicySection id="passenger-conduct" icon={ShieldAlert} title="Passenger Conduct">
                <p>
                  Passengers are expected to behave respectfully towards chauffeurs and
                  to comply with reasonable safety requirements, including wearing seat
                  belts where fitted.
                </p>
                <p>
                  We reserve the right to refuse or terminate a trip, without refund,
                  where a passenger&rsquo;s behaviour is abusive, unsafe, illegal, or
                  puts the chauffeur, vehicle or other passengers at risk.
                </p>
                <p>
                  Smoking is not permitted in any vehicle. Consumption of alcohol
                  brought onto the vehicle is at the chauffeur&rsquo;s discretion and
                  subject to any applicable local regulations.
                </p>
              </PolicySection>

              <PolicySection id="luggage-policy" icon={Luggage} title="Luggage Policy">
                <p>
                  Each vehicle type has a reasonable luggage allowance based on its
                  size. If you expect to travel with more luggage than a standard
                  sedan or SUV can accommodate, please advise us at the time of booking
                  so a suitably sized vehicle can be arranged.
                </p>
                <p>
                  We are not liable for items left behind in a vehicle, though we will
                  make reasonable efforts to help reunite you with any belongings
                  reported to us as soon as possible after your trip.
                </p>
                <p>
                  Fragile, valuable or irreplaceable items should be carried and
                  monitored personally rather than left unattended in luggage during a
                  trip.
                </p>
              </PolicySection>

              <PolicySection id="airport-waiting-time" icon={Clock} title="Airport Waiting Time">
                <p>
                  A standard waiting time allowance is included with airport pickup
                  bookings to account for disembarkation, baggage claim and customs,
                  typically longer for international arrivals than domestic ones.
                </p>
                <p>
                  Waiting time beyond the included allowance may be charged at a
                  standard additional rate, which will be communicated at the time of
                  booking or upon request.
                </p>
              </PolicySection>

              <PolicySection id="flight-delays" icon={PlaneLanding} title="Flight Delays">
                <p>
                  Where you have provided your flight details, we track your flight and
                  automatically adjust your pickup time in the event of an early
                  arrival or a delay, at no additional charge for reasonable delays.
                </p>
                <p>
                  Significant delays or schedule changes may occasionally require us to
                  reassign your booking to a different available chauffeur to ensure
                  your pickup is still met.
                </p>
              </PolicySection>

              <PolicySection id="cancellations" icon={XCircle} title="Cancellations">
                <p>
                  Bookings may be cancelled free of charge up until a reasonable period
                  before the scheduled pickup time, as communicated at the time of
                  booking or in your booking confirmation.
                </p>
                <p>
                  Cancellations made after this period, or within a shorter window
                  before pickup, may incur a cancellation fee to reflect the vehicle
                  and chauffeur time reserved for your trip.
                </p>
                <p>
                  Cancellations can be made by contacting us using the details in this
                  policy or through the contact information provided in your booking
                  confirmation.
                </p>
                <p>
                  If you need to cancel only part of a multi-leg or return booking, let
                  us know which leg is affected so the remaining trips can continue as
                  planned.
                </p>
              </PolicySection>

              <PolicySection id="refund-policy" icon={RotateCcw} title="Refund Policy">
                <p>
                  Where a trip cannot be completed due to an error or failure on our
                  part, such as a chauffeur not arriving as booked, you are entitled to
                  a full refund of the fare paid for that trip.
                </p>
                <p>
                  Refunds for eligible cancellations are processed back to the original
                  payment method within a reasonable timeframe. Fees properly charged
                  under our cancellation or no-show policy are not refundable.
                </p>
                <p>
                  If you believe a charge was applied incorrectly, contact us with your
                  booking reference and we will review the trip details before
                  confirming any refund.
                </p>
              </PolicySection>

              <PolicySection id="no-shows" icon={UserX} title="No Shows">
                <p>
                  A booking is treated as a no-show if the passenger is not present at
                  the agreed pickup location within the applicable waiting time and
                  cannot be reached using the contact details provided.
                </p>
                <p>
                  A no-show fee, up to the full value of the booked fare, may apply
                  where a chauffeur has attended the pickup location as booked and the
                  passenger does not arrive.
                </p>
                <p>
                  Where a flight, delay or genuine miscommunication contributed to a
                  missed pickup, contact us as soon as possible so we can review the
                  circumstances.
                </p>
              </PolicySection>

              <PolicySection id="driver-responsibilities" icon={ShieldCheck} title="Driver Responsibilities">
                <p>
                  Chauffeurs are required to hold the appropriate licences under state
                  passenger transport regulations, to maintain their vehicle to a
                  professional standard, and to conduct themselves professionally
                  throughout every trip.
                </p>
                <p>
                  Chauffeurs are expected to drive safely and in accordance with road
                  rules, to assist with luggage where reasonably practicable, and to
                  communicate promptly if a pickup is delayed for any reason.
                </p>
                <p>
                  Any concerns about a chauffeur&rsquo;s conduct on a specific trip
                  should be reported to us so the matter can be reviewed appropriately.
                </p>
              </PolicySection>

              <PolicySection id="force-majeure" icon={AlertTriangle} title="Force Majeure">
                <p>
                  We are not liable for delays, cancellations or failures to perform a
                  booking caused by events beyond our reasonable control, including
                  extreme weather, natural disasters, road closures, traffic incidents,
                  civil unrest or government restrictions.
                </p>
                <p>
                  Where such an event affects a booking, we will make reasonable
                  efforts to notify you and to rearrange or refund the booking where
                  appropriate.
                </p>
              </PolicySection>

              <PolicySection id="limitation-of-liability" icon={Scale} title="Limitation Of Liability">
                <p>
                  To the maximum extent permitted by law, our liability for any claim
                  arising from a booking is limited to the value of the fare paid for
                  that booking. We are not liable for indirect or consequential loss,
                  such as missed connections or lost business opportunities.
                </p>
                <p>
                  Nothing in these terms excludes, restricts or modifies any consumer
                  guarantee or right that cannot lawfully be excluded under the
                  Australian Consumer Law.
                </p>
                <p>
                  This limitation applies to the fullest extent permitted by law and
                  does not affect any rights you may have that are not capable of being
                  excluded by agreement.
                </p>
              </PolicySection>

              <PolicySection id="intellectual-property" icon={Copyright} title="Intellectual Property">
                <p>
                  All content on our website, including text, graphics, logos and
                  branding, is owned by or licensed to us and is protected by
                  applicable intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute or create derivative works from any
                  part of our website without our prior written permission.
                </p>
              </PolicySection>

              <PolicySection id="website-usage" icon={Globe} title="Website Usage">
                <p>
                  You agree to use our website only for lawful purposes and in a
                  manner that does not infringe the rights of, or restrict the use and
                  enjoyment of the site by, any third party.
                </p>
                <p>
                  You must not attempt to gain unauthorised access to our systems,
                  interfere with the operation of our website, or use automated tools
                  to extract data from our platform without permission.
                </p>
                <p>
                  We reserve the right to suspend or restrict access to our website or
                  booking platform for any user who breaches these terms.
                </p>
                <p>
                  Any content you submit through our website, such as booking notes or
                  enquiries, must not be unlawful, defamatory or infringe the rights of
                  any third party.
                </p>
              </PolicySection>

              <PolicySection id="privacy-reference" icon={Lock} title="Privacy Reference">
                <p>
                  Our collection, use and handling of personal information provided as
                  part of a booking or through use of our website is described in our{" "}
                  <Link href="/privacy-policy" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-gold-hover">
                    Privacy Policy
                  </Link>
                  , which forms part of these terms by reference.
                </p>
              </PolicySection>

              <PolicySection id="changes-to-terms" icon={RefreshCw} title="Changes To Terms">
                <p>
                  We may update these Terms &amp; Conditions from time to time to
                  reflect changes in our services, operational requirements or
                  applicable law. Updates will be published on this page with a revised
                  &ldquo;Last Updated&rdquo; date.
                </p>
                <p>
                  Continued use of our website or services after any update
                  constitutes acceptance of the revised terms. Bookings already
                  confirmed remain subject to the terms in effect at the time of
                  booking.
                </p>
              </PolicySection>

              <PolicySection id="governing-law" icon={Landmark} title="Governing Law">
                <p>
                  These terms are governed by the laws of Australia and the state or
                  territory in which the relevant booking is primarily carried out. Any
                  disputes arising from these terms are subject to the non-exclusive
                  jurisdiction of the courts of that state or territory.
                </p>
              </PolicySection>

              <PolicySection id="contact-details" icon={Mail} title="Contact Details">
                <p>
                  If you have any questions about these Terms &amp; Conditions, or need
                  help understanding how they apply to a specific booking, please get
                  in touch using the contact details below.
                </p>
              </PolicySection>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact-card" className="bg-brand-cream py-16 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-[20px] border border-border bg-white p-8 shadow-[0_8px_16px_-8px_rgba(11,42,58,0.15),0_30px_60px_-24px_rgba(11,42,58,0.35)] sm:p-10">
              <span className="text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
                Get In Touch
              </span>
              <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-brand-ink uppercase">
                Terms Enquiries
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-brand-gold" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-brand-ink">Email</p>
                    <p className="text-sm text-muted-foreground">
                      support@australiataxiservice.com.au
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Headset className="mt-0.5 size-5 shrink-0 text-brand-gold" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-brand-ink">Support</p>
                    <p className="text-sm text-muted-foreground">
                      Available for booking and account queries
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-brand-gold" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-brand-ink">Business Hours</p>
                    <p className="text-sm text-muted-foreground">
                      24/7 booking support. Terms enquiries answered Mon–Fri, 9am–5pm AEST.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceCTA
        title="Need Help Understanding Our Terms?"
        description="Our support team is available to answer any questions about our booking terms and policies."
        buttonLabel="Contact Support"
        buttonHref="#contact-card"
      />
    </main>
  );
}
