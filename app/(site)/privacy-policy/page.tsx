import {
  Archive,
  Baby,
  BarChart3,
  Calendar,
  Cookie,
  CreditCard,
  Database,
  FileText,
  Globe,
  Clock,
  Headset,
  Lock,
  Mail,
  Phone,
  RefreshCw,
  Scale,
  Settings,
  Share2,
} from "lucide-react";
import type { Metadata } from "next";

import { LegalHero } from "@/components/legal/LegalHero";
import { PolicySection } from "@/components/legal/PolicySection";
import { TableOfContents } from "@/components/legal/TableOfContents";
import { Reveal } from "@/components/reveal";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { siteUrl } from "@/lib/site-config";

const pageTitle = "Privacy Policy | Chauffeur Australia";
const pageDescription =
  "Read Chauffeur Australia's Privacy Policy to understand how we collect, use, store and protect your personal information.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/privacy-policy",
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
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use-information", label: "How We Use Information" },
  { id: "cookies-tracking", label: "Cookies & Tracking Technologies" },
  { id: "payment-information", label: "Payment Information" },
  { id: "booking-information", label: "Booking Information" },
  { id: "third-party-services", label: "Third-Party Services" },
  { id: "google-analytics", label: "Google Analytics" },
  { id: "communication-preferences", label: "Communication Preferences" },
  { id: "data-retention", label: "Data Retention" },
  { id: "security", label: "Security" },
  { id: "your-rights", label: "Your Rights" },
  { id: "childrens-privacy", label: "Children's Privacy" },
  { id: "international-transfers", label: "International Data Transfers" },
  { id: "changes-to-policy", label: "Changes To This Policy" },
  { id: "contact-information", label: "Contact Information" },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${siteUrl}/privacy-policy` },
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <LegalHero
        title="Privacy Policy"
        subtitle="Your privacy matters to us. Learn how Chauffeur Australia collects, uses and protects your information."
        breadcrumbItems={[{ label: "Privacy Policy", href: "/privacy-policy" }]}
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
              <PolicySection id="introduction" icon={FileText} title="Introduction">
                <p>
                  This Privacy Policy explains how Australia Taxi Service, trading as
                  Chauffeur Australia (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;),
                  collects, uses, discloses and protects personal information when you
                  visit our website or book a chauffeur transfer through our platform.
                </p>
                <p>
                  We are committed to handling personal information in line with the
                  Australian Privacy Principles under the Privacy Act 1988 (Cth). By
                  using our website or booking a transfer with us, you agree to the
                  collection and use of information as described in this policy.
                </p>
                <p>
                  This policy applies to all visitors to our website and to anyone who
                  submits a booking request, whether travelling for business, leisure,
                  or any of the specific occasions our chauffeur services cover, such as
                  airport transfers, weddings or corporate travel.
                </p>
              </PolicySection>

              <PolicySection id="information-we-collect" icon={Database} title="Information We Collect">
                <p>
                  We collect information you provide directly, such as your name, email
                  address, phone number, pickup and drop-off locations, flight or travel
                  details, and any special requests included with a booking.
                </p>
                <p>
                  We also collect limited technical information automatically when you
                  use our website, including your IP address, browser type, device
                  information and general usage data, to help us operate and improve our
                  services.
                </p>
                <p>
                  Where relevant to a specific service, we may also collect additional
                  details you choose to provide, such as flight numbers for airport
                  pickups, cruise line and terminal details, or venue information for
                  wedding and event bookings.
                </p>
                <p>
                  We do not typically collect sensitive information, such as health or
                  medical details, unless you choose to share it with us to arrange
                  appropriate accessibility support for a booking.
                </p>
              </PolicySection>

              <PolicySection id="how-we-use-information" icon={Settings} title="How We Use Information">
                <p>
                  We use your information to process and confirm bookings, coordinate
                  chauffeurs and vehicles, provide customer support, send booking
                  confirmations and updates, and maintain the security and functionality
                  of our website.
                </p>
                <p>
                  We may also use information, with your consent where required, to
                  improve our services, understand how our website is used, and
                  occasionally communicate offers or updates relevant to our services.
                </p>
                <p>
                  Information is also used internally to resolve customer support
                  enquiries, investigate and address complaints, and maintain accurate
                  records of past and upcoming trips across our platform.
                </p>
              </PolicySection>

              <PolicySection id="cookies-tracking" icon={Cookie} title="Cookies & Tracking Technologies">
                <p>
                  Our website uses cookies and similar tracking technologies to remember
                  your preferences, understand how visitors use our site, and support
                  core website functionality such as completing a booking form.
                </p>
                <p>
                  You can control or disable cookies through your browser settings.
                  Disabling cookies may affect certain features of our website, such as
                  retaining your booking details between steps.
                </p>
                <p>
                  Some cookies are essential to the operation of our booking form and
                  cannot be disabled without affecting your ability to complete a
                  booking, while others, such as analytics cookies, are optional.
                </p>
                <p>
                  We do not currently respond to browser &ldquo;Do Not Track&rdquo;
                  signals, as there is no consistent industry standard for how these
                  signals should be interpreted.
                </p>
              </PolicySection>

              <PolicySection id="payment-information" icon={CreditCard} title="Payment Information">
                <p>
                  Where payment is required, transactions are processed through a secure,
                  independent payment provider. We do not store complete card numbers or
                  card security codes on our own systems.
                </p>
                <p>
                  Limited payment metadata, such as a transaction reference or the last
                  digits of a card, may be retained for booking records, receipts and
                  dispute handling.
                </p>
                <p>
                  Our payment provider maintains its own security and compliance
                  standards for handling card data, and any payment details you enter
                  are transmitted directly to that provider rather than stored on our
                  servers.
                </p>
              </PolicySection>

              <PolicySection id="booking-information" icon={Calendar} title="Booking Information">
                <p>
                  Booking information — including pickup and drop-off addresses, travel
                  dates and times, passenger numbers and any vehicle or driver
                  preferences — is shared with the chauffeur and vehicle assigned to your
                  trip so your transfer can be carried out as booked.
                </p>
                <p>
                  We retain booking records to manage current and future trips, respond
                  to enquiries about past bookings, and meet our own record-keeping
                  obligations.
                </p>
                <p>
                  If your booking involves multiple legs or a return journey, we may
                  link those bookings together in our records so your trip is managed
                  consistently from start to finish.
                </p>
              </PolicySection>

              <PolicySection id="third-party-services" icon={Share2} title="Third-Party Services">
                <p>
                  We work with trusted third parties to operate our service, including
                  payment processors, mapping and routing providers, and affiliated
                  chauffeur and vehicle operators who fulfil bookings on our platform.
                </p>
                <p>
                  These providers only receive the information necessary to perform
                  their function and are expected to handle it in line with applicable
                  privacy laws. We do not sell personal information to third parties.
                </p>
                <p>
                  Where a booking is fulfilled by an affiliated chauffeur or operator
                  rather than directly by us, relevant trip details are shared with them
                  solely for the purpose of carrying out your transfer.
                </p>
                <p>
                  We periodically review the third parties we work with to help ensure
                  they maintain appropriate standards for handling any personal
                  information shared with them on our behalf.
                </p>
              </PolicySection>

              <PolicySection id="google-analytics" icon={BarChart3} title="Google Analytics">
                <p>
                  We use Google Analytics to understand how visitors interact with our
                  website, including which pages are viewed and how visitors navigate
                  between them. This helps us improve our content and booking experience.
                </p>
                <p>
                  Google Analytics uses cookies to collect this information in an
                  aggregated, largely anonymised form. You can opt out of Google
                  Analytics tracking using your browser settings or available browser
                  extensions.
                </p>
                <p>
                  Data collected through Google Analytics is subject to Google&rsquo;s own
                  privacy practices, and we encourage you to review Google&rsquo;s privacy
                  policy for further detail on how that data is handled.
                </p>
                <p>
                  We use analytics data in aggregate to identify which pages and services
                  are most useful to visitors, rather than to identify individual users.
                </p>
              </PolicySection>

              <PolicySection id="communication-preferences" icon={Mail} title="Communication Preferences">
                <p>
                  We send transactional communications, such as booking confirmations
                  and driver details, as a necessary part of providing our service. These
                  cannot be opted out of while you have an active booking.
                </p>
                <p>
                  Where we send marketing or promotional communications, you can opt out
                  at any time using the unsubscribe link included in those messages, or
                  by contacting us directly.
                </p>
                <p>
                  Opting out of marketing communications will not affect your ability to
                  make bookings or receive essential trip-related updates for any
                  current or future reservations.
                </p>
              </PolicySection>

              <PolicySection id="data-retention" icon={Archive} title="Data Retention">
                <p>
                  We retain personal information for as long as necessary to fulfil the
                  purposes described in this policy, including ongoing bookings,
                  customer support, legal and accounting obligations, and dispute
                  resolution.
                </p>
                <p>
                  When information is no longer required, we take reasonable steps to
                  securely delete or de-identify it in line with our data retention
                  practices.
                </p>
                <p>
                  Retention periods may vary depending on the type of information and
                  any applicable legal or regulatory requirements, such as financial
                  record-keeping obligations relating to processed payments.
                </p>
                <p>
                  If you close your account or ask us to stop contacting you, we will
                  retain a minimal record of that request so we can honour it going
                  forward.
                </p>
              </PolicySection>

              <PolicySection id="security" icon={Lock} title="Security">
                <p>
                  We use reasonable technical and organisational measures to protect
                  personal information from misuse, interference, loss, and unauthorised
                  access, modification or disclosure.
                </p>
                <p>
                  While we take security seriously, no method of transmission over the
                  internet or electronic storage is completely secure, and we cannot
                  guarantee absolute security of information you provide to us.
                </p>
                <p>
                  Access to personal information within our systems is limited to staff
                  and contractors who need it to perform their role, such as processing
                  bookings or providing customer support.
                </p>
                <p>
                  If we become aware of a data breach that is likely to result in
                  serious harm, we will take steps to notify affected individuals and
                  relevant authorities in accordance with our legal obligations.
                </p>
              </PolicySection>

              <PolicySection id="your-rights" icon={Scale} title="Your Rights">
                <p>
                  You have the right to request access to the personal information we
                  hold about you, and to request that inaccurate or outdated information
                  be corrected.
                </p>
                <p>
                  You may also request deletion of your personal information, subject to
                  our legal and record-keeping obligations. If you believe we have
                  mishandled your personal information, you may lodge a complaint with
                  us directly, or with the Office of the Australian Information
                  Commissioner (OAIC).
                </p>
                <p>
                  To exercise any of these rights, contact us using the details in the
                  Contact Information section below. We will respond to reasonable
                  requests within a reasonable timeframe.
                </p>
                <p>
                  We may need to verify your identity before actioning certain requests,
                  to make sure personal information is only accessed, corrected or
                  deleted by the person it belongs to.
                </p>
              </PolicySection>

              <PolicySection id="childrens-privacy" icon={Baby} title="Children's Privacy">
                <p>
                  Our services are intended for use by adults booking transport on their
                  own behalf or for family members travelling with them. We do not
                  knowingly collect personal information directly from children.
                </p>
                <p>
                  If you believe a child has provided us with personal information
                  without appropriate parental or guardian involvement, please contact
                  us so we can address it.
                </p>
                <p>
                  Where a booking includes children as passengers, only the information
                  necessary to arrange appropriate transport, such as child or booster
                  seat requirements, is collected as part of that booking.
                </p>
              </PolicySection>

              <PolicySection id="international-transfers" icon={Globe} title="International Data Transfers">
                <p>
                  Some of the third-party providers we use to operate our website and
                  services, such as cloud hosting and analytics providers, may store or
                  process information outside Australia.
                </p>
                <p>
                  Where this occurs, we take reasonable steps to ensure those providers
                  maintain a standard of data protection consistent with the Australian
                  Privacy Principles.
                </p>
                <p>
                  We do not directly transfer personal information overseas outside of
                  the ordinary operation of these third-party service providers used to
                  run our website and booking systems.
                </p>
                <p>
                  If you have questions about where your information is stored or
                  processed, you are welcome to contact us for more detail on the
                  specific providers involved.
                </p>
              </PolicySection>

              <PolicySection id="changes-to-policy" icon={RefreshCw} title="Changes To This Policy">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes
                  in our practices, technology, legal requirements or other operational
                  reasons.
                </p>
                <p>
                  Any changes will be published on this page with an updated &ldquo;Last
                  Updated&rdquo; date. We encourage you to review this policy
                  periodically.
                </p>
                <p>
                  Continued use of our website or services after an update to this
                  policy constitutes acceptance of the revised terms described in it.
                </p>
              </PolicySection>

              <PolicySection id="contact-information" icon={Phone} title="Contact Information">
                <p>
                  If you have any questions about this Privacy Policy or how your
                  personal information is handled, please get in touch using the contact
                  details below.
                </p>
                <p>
                  We aim to respond to all privacy-related enquiries promptly and are
                  happy to explain any part of this policy in more detail if needed.
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
                Privacy Enquiries
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-brand-gold" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-brand-ink">Email</p>
                    <p className="text-sm text-muted-foreground">
                      privacy@australiataxiservice.com.au
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Headset className="mt-0.5 size-5 shrink-0 text-brand-gold" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-brand-ink">Support</p>
                    <p className="text-sm text-muted-foreground">
                      support@australiataxiservice.com.au
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-brand-gold" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-brand-ink">Business Hours</p>
                    <p className="text-sm text-muted-foreground">
                      24/7 booking support. Privacy enquiries answered Mon–Fri, 9am–5pm AEST.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceCTA
        title="Need More Information?"
        description="Our team is available to answer any questions about how your information is handled."
        buttonLabel="Contact Our Team"
        buttonHref="#contact-card"
      />
    </main>
  );
}
