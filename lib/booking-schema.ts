import {
  Anchor,
  ArrowLeftRight,
  ArrowRight,
  Briefcase,
  Building2,
  Car,
  Clock,
  Heart,
  Navigation,
  PlaneLanding,
  Ticket,
  type LucideIcon,
} from "lucide-react";
import { z } from "zod";

export const journeyTypeOptions: {
  value: string;
  label: string;
  icon: LucideIcon;
}[] = [
  { value: "one-way", label: "One Way", icon: ArrowRight },
  { value: "return", label: "Return", icon: ArrowLeftRight },
  { value: "hourly", label: "Hourly Hire", icon: Clock },
];

export const serviceTypeOptions: {
  value: string;
  label: string;
  icon: LucideIcon;
}[] = [
  { value: "airport", label: "Airport Transfer", icon: PlaneLanding },
  { value: "hotel", label: "Hotel Transfer", icon: Building2 },
  { value: "city", label: "City Transfer", icon: Navigation },
  { value: "corporate", label: "Corporate", icon: Briefcase },
  { value: "wedding", label: "Wedding", icon: Heart },
  { value: "cruise", label: "Cruise", icon: Anchor },
  { value: "event", label: "Event", icon: Ticket },
  { value: "private", label: "Private Chauffeur", icon: Car },
];

export const passengerOptions = Array.from({ length: 8 }, (_, i) => `${i + 1}`);
export const luggageOptions = Array.from({ length: 9 }, (_, i) => `${i}`);

const journeyTypeValues = journeyTypeOptions.map((option) => option.value) as [
  string,
  ...string[],
];
const serviceTypeValues = serviceTypeOptions.map((option) => option.value) as [
  string,
  ...string[],
];

export const bookingFormSchema = z
  .object({
    journeyType: z.enum(journeyTypeValues, {
      message: "Select a journey type",
    }),
    pickupLocation: z
      .string()
      .trim()
      .min(2, "Enter a pickup location"),
    dropoffLocation: z.string().trim().optional(),
    date: z.string().min(1, "Select a date"),
    time: z.string().min(1, "Select a time"),
    returnDate: z.string().trim().optional(),
    returnTime: z.string().trim().optional(),
    endTime: z.string().trim().optional(),
    passengers: z.string().min(1, "Select passenger count"),
    luggage: z.string().min(1, "Select luggage count"),
    flightNumber: z.string().trim().optional(),
    serviceType: z.enum(serviceTypeValues, {
      message: "Select a service type",
    }),
    fullName: z.string().trim().min(2, "Enter your full name"),
    email: z.string().trim().email("Enter a valid email address"),
    phone: z.string().trim().min(8, "Enter a valid phone number"),
    specialRequests: z.string().trim().optional(),
  })
  .superRefine((data, ctx) => {
    if (
      data.journeyType !== "hourly" &&
      (!data.dropoffLocation || data.dropoffLocation.length < 2)
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["dropoffLocation"],
        message: "Enter a drop-off location",
      });
    }

    if (data.journeyType === "return") {
      if (!data.returnDate) {
        ctx.addIssue({
          code: "custom",
          path: ["returnDate"],
          message: "Select a return date",
        });
      }
      if (!data.returnTime) {
        ctx.addIssue({
          code: "custom",
          path: ["returnTime"],
          message: "Select a return time",
        });
      }
    }

    if (data.journeyType === "hourly" && !data.endTime) {
      ctx.addIssue({
        code: "custom",
        path: ["endTime"],
        message: "Select an end time",
      });
    }

    if (data.serviceType === "airport" && !data.flightNumber) {
      ctx.addIssue({
        code: "custom",
        path: ["flightNumber"],
        message: "Enter your flight number",
      });
    }
  });

export type BookingFormValues = z.infer<typeof bookingFormSchema>;

export const bookingFormDefaultValues: BookingFormValues = {
  journeyType: "one-way",
  pickupLocation: "",
  dropoffLocation: "",
  date: "",
  time: "",
  returnDate: "",
  returnTime: "",
  endTime: "",
  passengers: "1",
  luggage: "1",
  flightNumber: "",
  serviceType: "airport",
  fullName: "",
  email: "",
  phone: "",
  specialRequests: "",
};

export const bookingSteps = [
  { id: 1, title: "Service Type", fields: ["serviceType"] as const },
  { id: 2, title: "Journey Type", fields: ["journeyType"] as const },
  {
    id: 3,
    title: "Trip Details",
    fields: [
      "pickupLocation",
      "dropoffLocation",
      "date",
      "time",
      "returnDate",
      "returnTime",
      "endTime",
      "passengers",
      "luggage",
      "flightNumber",
    ] as const,
  },
  {
    id: 4,
    title: "Your Details",
    fields: ["fullName", "email", "phone", "specialRequests"] as const,
  },
  { id: 5, title: "Review & Submit", fields: [] as const },
] as const;
