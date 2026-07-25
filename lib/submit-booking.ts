import type { BookingFormValues } from "@/lib/booking-schema";
import { submitPublicLead } from "@/lib/actions/public-lead-actions";

export class BookingSubmissionError extends Error {}

const journeyTypeMap: Record<BookingFormValues["journeyType"], "ONE_WAY" | "RETURN" | "HOURLY"> = {
  "one-way": "ONE_WAY",
  return: "RETURN",
  hourly: "HOURLY",
};

/**
 * Submits a booking/quote request from the public Get A Quote form.
 * Creates (or matches) a Customer and a Lead record via Prisma, which then
 * appears in the admin CRM's Leads module.
 */
export async function submitBookingRequest(
  values: BookingFormValues
): Promise<{ referenceId: string }> {
  try {
    const result = await submitPublicLead({
      journeyType: journeyTypeMap[values.journeyType],
      pickupLocation: values.pickupLocation,
      dropoffLocation: values.dropoffLocation,
      date: values.date,
      time: values.time,
      returnDate: values.returnDate,
      returnTime: values.returnTime,
      endTime: values.endTime,
      passengers: Number(values.passengers),
      luggage: Number(values.luggage),
      flightNumber: values.flightNumber,
      serviceSlug: values.serviceType,
      fullName: values.fullName,
      email: values.email,
      phone: values.phone,
      specialRequests: values.specialRequests,
    });
    return result;
  } catch {
    throw new BookingSubmissionError(
      "We couldn't submit your request. Please check your details and try again."
    );
  }
}
