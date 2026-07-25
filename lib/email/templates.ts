import { ctaButton, detailRow, detailTable, escapeHtml, renderEmailLayout } from "@/lib/email/layout";
import { SITE_URL } from "@/lib/email/resend";

const journeyTypeLabels: Record<string, string> = {
  ONE_WAY: "One Way",
  RETURN: "Return",
  HOURLY: "Hourly Hire",
};

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-AU", { dateStyle: "medium" }).format(date);
}

export type LeadEmailData = {
  leadId: string;
  fullName: string;
  email: string;
  phone: string;
  serviceName: string;
  journeyType: "ONE_WAY" | "RETURN" | "HOURLY";
  pickupLocation: string;
  dropoffLocation: string | null;
  date: Date;
  time: string;
  returnDate: Date | null;
  returnTime: string | null;
  endTime: string | null;
  passengers: number;
  luggage: number;
  flightNumber: string | null;
  specialRequests: string | null;
};

function journeyDetailRows(data: LeadEmailData) {
  const rows = [
    detailRow("Service", escapeHtml(data.serviceName)),
    detailRow("Journey Type", journeyTypeLabels[data.journeyType]),
    detailRow("Pickup Location", escapeHtml(data.pickupLocation)),
  ];
  if (data.dropoffLocation) {
    rows.push(detailRow("Drop-off Location", escapeHtml(data.dropoffLocation)));
  }
  rows.push(detailRow("Travel Date", formatDate(data.date)));
  rows.push(detailRow("Time", escapeHtml(data.time)));
  if (data.returnDate) {
    rows.push(detailRow("Return Date", formatDate(data.returnDate)));
  }
  if (data.returnTime) {
    rows.push(detailRow("Return Time", escapeHtml(data.returnTime)));
  }
  if (data.endTime) {
    rows.push(detailRow("End Time", escapeHtml(data.endTime)));
  }
  rows.push(detailRow("Passengers", String(data.passengers)));
  rows.push(detailRow("Luggage", String(data.luggage)));
  if (data.flightNumber) {
    rows.push(detailRow("Flight Number", escapeHtml(data.flightNumber)));
  }
  return rows.join("");
}

export function customerLeadReceivedEmail(data: LeadEmailData) {
  const subject = "We've received your quote request — Chauffeur Australia";
  const bodyHtml = `
    <p>Hi ${escapeHtml(data.fullName)},</p>
    <p>Thank you for requesting a quote with Chauffeur Australia. Your request has been received and our team is preparing your quote — we'll be in touch shortly with pricing and confirmation.</p>
    ${detailTable(journeyDetailRows(data))}
    ${
      data.specialRequests
        ? `<p style="margin:16px 0 0 0;"><strong>Special requests:</strong> ${escapeHtml(data.specialRequests)}</p>`
        : ""
    }
    <p style="margin-top:20px;">If any of these details are incorrect or your plans change, just reply to this email and we'll update your request.</p>
    <p style="margin-top:24px;">Thank you for choosing Chauffeur Australia.</p>
  `;
  const html = renderEmailLayout({
    previewText: "Your quote request has been received.",
    heading: "Your Quote Request Has Been Received",
    bodyHtml,
  });
  return { subject, html };
}

export function adminNewLeadEmail(data: LeadEmailData) {
  const subject = `New quote request from ${data.fullName}`;
  const bodyHtml = `
    <p>A new quote request has arrived through the website.</p>
    ${detailTable(
      [
        detailRow("Customer", escapeHtml(data.fullName)),
        detailRow("Email", escapeHtml(data.email)),
        detailRow("Phone", escapeHtml(data.phone)),
      ].join("") + journeyDetailRows(data)
    )}
    ${
      data.specialRequests
        ? `<p style="margin:16px 0 0 0;"><strong>Special requests:</strong> ${escapeHtml(data.specialRequests)}</p>`
        : ""
    }
    ${ctaButton("View Lead in Admin Panel", `${SITE_URL}/admin/leads/${data.leadId}`)}
  `;
  const html = renderEmailLayout({
    previewText: `New lead from ${data.fullName}`,
    heading: "New Lead Received",
    bodyHtml,
  });
  return { subject, html };
}

export type QuoteEmailData = {
  fullName: string;
  serviceName: string;
  journeyType: "ONE_WAY" | "RETURN" | "HOURLY";
  pickupLocation: string;
  dropoffLocation: string | null;
  date: Date;
  time: string;
  totalPrice: number;
  currency: string;
  notes: string | null;
};

export function customerQuoteSentEmail(data: QuoteEmailData) {
  const subject = "Your quote from Chauffeur Australia";
  const bodyHtml = `
    <p>Hi ${escapeHtml(data.fullName)},</p>
    <p>Thank you for your patience — here's your quote for the journey you requested:</p>
    ${detailTable(
      [
        detailRow("Service", escapeHtml(data.serviceName)),
        detailRow("Journey Type", journeyTypeLabels[data.journeyType]),
        detailRow("Pickup Location", escapeHtml(data.pickupLocation)),
        ...(data.dropoffLocation ? [detailRow("Drop-off Location", escapeHtml(data.dropoffLocation))] : []),
        detailRow("Travel Date", formatDate(data.date)),
        detailRow("Time", escapeHtml(data.time)),
        detailRow(
          "Quoted Price",
          `<span style="color:#d4af37;font-size:16px;">${escapeHtml(data.currency)} ${data.totalPrice.toFixed(2)}</span>`
        ),
      ].join("")
    )}
    ${
      data.notes
        ? `<p style="margin:16px 0 0 0;"><strong>Notes:</strong> ${escapeHtml(data.notes)}</p>`
        : ""
    }
    <p style="margin-top:20px;">To accept this quote and confirm your booking, simply reply to this email and our team will finalise everything for you.</p>
    <p style="margin-top:24px;">We look forward to driving you.</p>
  `;
  const html = renderEmailLayout({
    previewText: `Your quote: ${data.currency} ${data.totalPrice.toFixed(2)}`,
    heading: "Your Quote Is Ready",
    bodyHtml,
  });
  return { subject, html };
}

export type BookingEmailData = {
  fullName: string;
  bookingNumber: string;
  serviceName: string;
  journeyType: "ONE_WAY" | "RETURN" | "HOURLY";
  pickupLocation: string;
  dropoffLocation: string | null;
  travelDate: Date;
  time: string;
  totalPrice: number;
  currency: string;
};

export function customerBookingConfirmedEmail(data: BookingEmailData) {
  const subject = `Your booking is confirmed — ${data.bookingNumber}`;
  const bodyHtml = `
    <p>Hi ${escapeHtml(data.fullName)},</p>
    <p>Great news — your booking with Chauffeur Australia is now confirmed. Here are your journey details:</p>
    ${detailTable(
      [
        detailRow("Booking Number", `<span style="font-family:monospace;">${escapeHtml(data.bookingNumber)}</span>`),
        detailRow("Service", escapeHtml(data.serviceName)),
        detailRow("Journey Type", journeyTypeLabels[data.journeyType]),
        detailRow("Pickup Location", escapeHtml(data.pickupLocation)),
        ...(data.dropoffLocation ? [detailRow("Drop-off Location", escapeHtml(data.dropoffLocation))] : []),
        detailRow("Travel Date", formatDate(data.travelDate)),
        detailRow("Time", escapeHtml(data.time)),
        detailRow("Total Price", `${escapeHtml(data.currency)} ${data.totalPrice.toFixed(2)}`),
      ].join("")
    )}
    <p style="margin-top:20px;">Your driver will be in touch ahead of your journey. If you need to make any changes, simply reply to this email.</p>
    <p style="margin-top:24px;">We look forward to driving you.</p>
  `;
  const html = renderEmailLayout({
    previewText: `Your booking ${data.bookingNumber} is confirmed.`,
    heading: "Your Booking Is Confirmed",
    bodyHtml,
  });
  return { subject, html };
}
