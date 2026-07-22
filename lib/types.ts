import type { Prisma } from "@/lib/generated/prisma/client";

export type LeadListItem = Prisma.LeadGetPayload<{
  include: {
    customer: true;
    service: true;
    quote: true;
    booking: true;
  };
}>;

export type CustomerListItem = Prisma.CustomerGetPayload<{
  include: {
    _count: { select: { leads: true; bookings: true } };
  };
}>;

export type BookingListItem = Prisma.BookingGetPayload<{
  include: {
    customer: true;
    lead: { include: { service: true } };
  };
}>;

export type QuoteListItem = Prisma.QuoteGetPayload<{
  include: {
    lead: { include: { customer: true; service: true } };
  };
}>;
