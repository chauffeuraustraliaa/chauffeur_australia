import type { Prisma } from "@/lib/generated/prisma/client";

export type LeadListItem = Prisma.LeadGetPayload<{
  include: {
    customer: true;
    service: true;
    quote: true;
    booking: true;
  };
}>;

// Client Components can't receive Prisma's Decimal instances (only plain
// serializable values cross the Server -> Client boundary), so quote money
// fields are converted to numbers before being passed to LeadActions.
export type SerializedQuote = Omit<
  NonNullable<LeadListItem["quote"]>,
  "driverCost" | "markup" | "totalPrice"
> & {
  driverCost: number;
  markup: number;
  totalPrice: number;
};

export type SerializedLead = Omit<LeadListItem, "quote"> & {
  quote: SerializedQuote | null;
};

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
