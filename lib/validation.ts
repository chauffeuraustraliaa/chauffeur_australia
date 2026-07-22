import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email address"),
  password: z.string().min(1, "Enter your password"),
  remember: z.boolean().optional(),
});

export type LoginValues = z.infer<typeof loginSchema>;

export const publicLeadSchema = z
  .object({
    journeyType: z.enum(["ONE_WAY", "RETURN", "HOURLY"]),
    pickupLocation: z.string().trim().min(2),
    dropoffLocation: z.string().trim().optional(),
    date: z.string().min(1),
    time: z.string().min(1),
    returnDate: z.string().trim().optional(),
    returnTime: z.string().trim().optional(),
    endTime: z.string().trim().optional(),
    passengers: z.coerce.number().int().min(1).max(20),
    luggage: z.coerce.number().int().min(0).max(20),
    serviceSlug: z.string().min(1),
    fullName: z.string().trim().min(2),
    email: z.string().trim().email(),
    phone: z.string().trim().min(8),
    specialRequests: z.string().trim().optional(),
  })
  .superRefine((data, ctx) => {
    if (
      data.journeyType !== "HOURLY" &&
      (!data.dropoffLocation || data.dropoffLocation.length < 2)
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["dropoffLocation"],
        message: "Enter a drop-off location",
      });
    }
  });

export type PublicLeadValues = z.infer<typeof publicLeadSchema>;

export const quoteSchema = z.object({
  leadId: z.string().min(1),
  driverCost: z.coerce.number().min(0),
  markup: z.coerce.number().min(0),
  currency: z.string().trim().min(1).default("AUD"),
  notes: z.string().trim().optional(),
});

export type QuoteValues = z.infer<typeof quoteSchema>;

export const leadStatusSchema = z.enum([
  "NEW",
  "PENDING_REVIEW",
  "QUOTE_SENT",
  "ACCEPTED",
  "CONFIRMED",
  "REJECTED",
  "CANCELLED",
]);

export const cancellationReasonSchema = z.enum([
  "CANCELLED_BY_ADMIN",
  "CANCELLED_BY_CUSTOMER",
  "NO_RESPONSE",
  "EXPIRED_QUOTE",
]);

export const adminProfileSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().trim().email(),
});

export type AdminProfileValues = z.infer<typeof adminProfileSchema>;

export const adminPasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Enter your current password"),
    newPassword: z.string().min(8, "New password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Confirm your new password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type AdminPasswordValues = z.infer<typeof adminPasswordSchema>;

export const companySettingsSchema = z.object({
  companyName: z.string().trim().min(2),
  supportEmail: z.string().trim().email(),
  logoUrl: z.string().trim().url().optional().or(z.literal("")),
  currency: z.string().trim().min(1),
  timezone: z.string().trim().min(1),
});

export type CompanySettingsValues = z.infer<typeof companySettingsSchema>;
