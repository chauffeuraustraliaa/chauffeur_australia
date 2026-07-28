import {
  Briefcase,
  Building2,
  Heart,
  PlaneLanding,
  type LucideIcon,
} from "lucide-react";

import { ServiceOfferings } from "@/components/services/ServiceOfferings";

const quickBookingItems: {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: PlaneLanding,
    title: "Need An Airport Transfer?",
    description: "Flight-tracked pickups and drop-offs at every major airport.",
    href: "/airport-transfers",
  },
  {
    icon: Briefcase,
    title: "Need A Corporate Chauffeur?",
    description: "Reliable business travel with corporate accounts available.",
    href: "/corporate-chauffeur",
  },
  {
    icon: Building2,
    title: "Need Hotel Transfers?",
    description: "Seamless transfers between hotels, the airport and the city.",
    href: "/hotel-transfers",
  },
  {
    icon: Heart,
    title: "Wedding Chauffeur?",
    description: "Elegant, on-time transport for your wedding day.",
    href: "/wedding-chauffeur",
  },
];

export function ServiceLinks() {
  return (
    <ServiceOfferings
      eyebrow="Quick Booking"
      title="Looking For A Specific Service?"
      items={quickBookingItems}
      tone="ivory"
      columns={4}
    />
  );
}
