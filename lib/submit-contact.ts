import type { ContactFormValues } from "@/lib/contact-schema";
import { submitPublicLead } from "@/lib/actions/public-lead-actions";

export class ContactSubmissionError extends Error {}

function todayIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

/**
 * Submits a Contact page enquiry through the same Lead pipeline used by the
 * Get A Quote form, so every enquiry lands in the same admin CRM Leads list
 * and triggers the same customer/admin notification emails. The contact
 * form leaves trip details optional, so sensible fallbacks are used for the
 * fields the underlying Lead record requires.
 */
export async function submitContactEnquiry(
  values: ContactFormValues
): Promise<{ referenceId: string }> {
  try {
    const result = await submitPublicLead({
      journeyType: "ONE_WAY",
      pickupLocation: values.pickupLocation?.trim() || "Not specified",
      dropoffLocation: values.dropoffLocation?.trim() || "Not specified",
      date: values.travelDate?.trim() || todayIsoDate(),
      time: values.travelTime?.trim() || "09:00",
      passengers: values.passengers ? Number(values.passengers) : 1,
      luggage: 0,
      flightNumber:
        values.serviceType === "airport" ? "To be confirmed" : undefined,
      serviceSlug: values.serviceType,
      fullName: values.fullName,
      email: values.email,
      phone: values.phone,
      specialRequests: values.message,
    });
    return result;
  } catch {
    throw new ContactSubmissionError(
      "We couldn't send your enquiry. Please check your details and try again."
    );
  }
}
