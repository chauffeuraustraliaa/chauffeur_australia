import { ServiceFAQ } from "@/components/services/ServiceFAQ";

const faqs = [
  {
    question: "How quickly will I receive a quote?",
    answer:
      "Most enquiries receive a fixed-price quote within 30 minutes during business hours, and we aim to respond to after-hours enquiries as soon as possible.",
  },
  {
    question: "Can I book a chauffeur for today?",
    answer:
      "Yes, we accommodate same-day and last-minute bookings where a chauffeur is available. Call us directly for the fastest response on urgent requests.",
  },
  {
    question: "Do you provide airport pickups?",
    answer:
      "Yes, we provide flight-tracked airport pickups and drop-offs at every major Australian airport, with meet and greet service included.",
  },
  {
    question: "Do you operate 24/7?",
    answer:
      "Yes, our chauffeur service and customer support are both available 24 hours a day, every day of the year.",
  },
  {
    question: "Which cities do you cover?",
    answer:
      "We operate in Melbourne, Sydney, Brisbane, Perth, Adelaide, Canberra, the Gold Coast and surrounding regions across Australia.",
  },
  {
    question: "How do I pay?",
    answer:
      "We accept major credit and debit cards, with invoicing available for corporate accounts. Payment details are confirmed when your booking is finalised.",
  },
  {
    question: "Can I modify my booking?",
    answer:
      "Yes, contact our team as early as possible and we'll do our best to accommodate changes to your pickup time, location or vehicle.",
  },
  {
    question: "Do you provide child seats?",
    answer:
      "Yes, child and booster seats are available on request — just mention this in your enquiry or booking so we can arrange it in advance.",
  },
  {
    question: "Is the price I'm quoted the price I pay?",
    answer:
      "Yes. Every quote is fixed and agreed before you travel, with no surge pricing or metered surprises.",
  },
  {
    question: "Can I contact you for a corporate account?",
    answer:
      "Yes, use the contact form or call us directly to set up a corporate account with recurring bookings and simplified invoicing.",
  },
];

export function FAQ() {
  return (
    <ServiceFAQ
      eyebrow="Questions & Answers"
      title="Frequently Asked Questions"
      faqs={faqs}
      tone="ivory"
    />
  );
}
