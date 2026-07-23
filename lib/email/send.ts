import { EMAIL_FROM, resend } from "@/lib/email/resend";
import {
  adminNewLeadEmail,
  customerBookingConfirmedEmail,
  customerLeadReceivedEmail,
  customerQuoteSentEmail,
  type BookingEmailData,
  type LeadEmailData,
  type QuoteEmailData,
} from "@/lib/email/templates";

// Email sending never blocks or fails the underlying lead/booking flow —
// a Resend outage or misconfiguration shouldn't stop a customer's request
// from being saved. Errors are logged, not thrown.

export async function sendLeadEmails(data: LeadEmailData, adminNotifyEmail: string) {
  const customer = customerLeadReceivedEmail(data);
  const admin = adminNewLeadEmail(data);

  const results = await Promise.allSettled([
    resend.emails.send({
      from: EMAIL_FROM,
      to: data.email,
      subject: customer.subject,
      html: customer.html,
    }),
    resend.emails.send({
      from: EMAIL_FROM,
      to: adminNotifyEmail,
      subject: admin.subject,
      html: admin.html,
    }),
  ]);

  for (const result of results) {
    if (result.status === "rejected") {
      console.error("[email] Failed to send lead notification:", result.reason);
    }
  }
}

export async function sendQuoteEmail(to: string, data: QuoteEmailData) {
  const { subject, html } = customerQuoteSentEmail(data);

  try {
    await resend.emails.send({ from: EMAIL_FROM, to, subject, html });
  } catch (error) {
    console.error("[email] Failed to send quote email:", error);
  }
}

export async function sendBookingConfirmedEmail(to: string, data: BookingEmailData) {
  const { subject, html } = customerBookingConfirmedEmail(data);

  try {
    await resend.emails.send({ from: EMAIL_FROM, to, subject, html });
  } catch (error) {
    console.error("[email] Failed to send booking confirmation:", error);
  }
}
