"use server";

import { revalidatePath } from "next/cache";

import { auth } from "@/lib/auth";
import { sendBookingConfirmedEmail, sendQuoteEmail } from "@/lib/email/send";
import { prisma } from "@/lib/prisma";
import { quoteSchema } from "@/lib/validation";

async function requireAdmin() {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Not authenticated");
  }
  return session;
}

export async function saveQuote(input: {
  leadId: string;
  driverCost: number;
  markup: number;
  currency: string;
  notes?: string;
}) {
  await requireAdmin();
  const data = quoteSchema.parse(input);
  const totalPrice = data.driverCost + data.markup;

  await prisma.quote.upsert({
    where: { leadId: data.leadId },
    update: {
      driverCost: data.driverCost,
      markup: data.markup,
      totalPrice,
      currency: data.currency,
      notes: data.notes,
    },
    create: {
      leadId: data.leadId,
      driverCost: data.driverCost,
      markup: data.markup,
      totalPrice,
      currency: data.currency,
      notes: data.notes,
      status: "DRAFT",
    },
  });

  revalidatePath(`/admin/leads/${data.leadId}`);
  revalidatePath("/admin/quotes");
}

export async function sendQuote(leadId: string) {
  await requireAdmin();

  const lead = await prisma.lead.findUniqueOrThrow({
    where: { id: leadId },
    include: { service: true, quote: true },
  });

  if (!lead.quote) {
    throw new Error("Create a quote before sending it.");
  }

  await prisma.$transaction([
    prisma.quote.update({
      where: { leadId },
      data: { status: "SENT" },
    }),
    prisma.lead.update({
      where: { id: leadId },
      data: { status: "QUOTE_SENT" },
    }),
  ]);

  await sendQuoteEmail(lead.email, {
    fullName: lead.fullName,
    serviceName: lead.service.name,
    journeyType: lead.journeyType,
    pickupLocation: lead.pickupLocation,
    dropoffLocation: lead.dropoffLocation,
    date: lead.date,
    time: lead.time,
    totalPrice: lead.quote.totalPrice.toNumber(),
    currency: lead.quote.currency,
    notes: lead.quote.notes,
  });

  revalidatePath(`/admin/leads/${leadId}`);
  revalidatePath("/admin/leads");
  revalidatePath("/admin/quotes");
  revalidatePath("/admin");
}

async function generateBookingNumber() {
  const count = await prisma.booking.count();
  return `BK-${String(count + 1).padStart(5, "0")}`;
}

export async function acceptQuote(leadId: string) {
  await requireAdmin();

  const lead = await prisma.lead.findUniqueOrThrow({
    where: { id: leadId },
    include: { service: true, quote: true },
  });
  const bookingNumber = await generateBookingNumber();

  await prisma.$transaction([
    prisma.quote.update({
      where: { leadId },
      data: { status: "ACCEPTED" },
    }),
    prisma.lead.update({
      where: { id: leadId },
      data: { status: "CONFIRMED" },
    }),
    prisma.booking.create({
      data: {
        leadId,
        customerId: lead.customerId,
        bookingNumber,
        travelDate: lead.date,
        status: "CONFIRMED",
      },
    }),
  ]);

  if (lead.quote) {
    await sendBookingConfirmedEmail(lead.email, {
      fullName: lead.fullName,
      bookingNumber,
      serviceName: lead.service.name,
      journeyType: lead.journeyType,
      pickupLocation: lead.pickupLocation,
      dropoffLocation: lead.dropoffLocation,
      travelDate: lead.date,
      time: lead.time,
      totalPrice: lead.quote.totalPrice.toNumber(),
      currency: lead.quote.currency,
    });
  }

  revalidatePath(`/admin/leads/${leadId}`);
  revalidatePath("/admin/leads");
  revalidatePath("/admin/quotes");
  revalidatePath("/admin/bookings");
  revalidatePath("/admin");
}

export async function rejectQuote(leadId: string) {
  await requireAdmin();

  await prisma.$transaction([
    prisma.quote.update({
      where: { leadId },
      data: { status: "REJECTED" },
    }),
    prisma.lead.update({
      where: { id: leadId },
      data: { status: "REJECTED" },
    }),
  ]);

  revalidatePath(`/admin/leads/${leadId}`);
  revalidatePath("/admin/leads");
  revalidatePath("/admin/quotes");
  revalidatePath("/admin");
}
