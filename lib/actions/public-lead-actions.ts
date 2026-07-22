"use server";

import { prisma } from "@/lib/prisma";
import { publicLeadSchema, type PublicLeadValues } from "@/lib/validation";

export async function submitPublicLead(
  input: PublicLeadValues
): Promise<{ referenceId: string }> {
  const data = publicLeadSchema.parse(input);

  const service = await prisma.service.findUnique({
    where: { slug: data.serviceSlug },
  });

  if (!service) {
    throw new Error("We couldn't match that service. Please try again.");
  }

  const customer = await prisma.customer.upsert({
    where: { email: data.email.toLowerCase().trim() },
    update: {
      name: data.fullName,
      phone: data.phone,
    },
    create: {
      name: data.fullName,
      email: data.email.toLowerCase().trim(),
      phone: data.phone,
    },
  });

  const lead = await prisma.lead.create({
    data: {
      customerId: customer.id,
      fullName: data.fullName,
      email: data.email.toLowerCase().trim(),
      phone: data.phone,
      journeyType: data.journeyType,
      pickupLocation: data.pickupLocation,
      dropoffLocation: data.dropoffLocation || null,
      date: new Date(data.date),
      time: data.time,
      returnDate: data.returnDate ? new Date(data.returnDate) : null,
      returnTime: data.returnTime || null,
      endTime: data.endTime || null,
      passengers: data.passengers,
      luggage: data.luggage,
      serviceId: service.id,
      specialRequests: data.specialRequests || null,
      status: "NEW",
    },
  });

  return { referenceId: lead.id };
}
