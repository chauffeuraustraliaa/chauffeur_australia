import { z } from "zod";

export { serviceTypeOptions, passengerOptions } from "@/lib/booking-schema";

export const contactFormSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().min(8, "Enter a valid phone number"),
  serviceType: z.string().min(1, "Select a service type"),
  pickupLocation: z.string().trim().optional(),
  dropoffLocation: z.string().trim().optional(),
  travelDate: z.string().trim().optional(),
  travelTime: z.string().trim().optional(),
  passengers: z.string().trim().optional(),
  message: z.string().trim().min(10, "Tell us a little about your enquiry"),
  privacyAgreed: z
    .boolean()
    .refine((value) => value === true, "You must agree to the Privacy Policy"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactFormDefaultValues: ContactFormValues = {
  fullName: "",
  email: "",
  phone: "",
  serviceType: "airport",
  pickupLocation: "",
  dropoffLocation: "",
  travelDate: "",
  travelTime: "",
  passengers: "",
  message: "",
  privacyAgreed: false,
};
