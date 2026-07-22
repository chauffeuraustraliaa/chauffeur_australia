"use server";

import { revalidatePath } from "next/cache";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { cancellationReasonSchema, leadStatusSchema } from "@/lib/validation";

async function requireAdmin() {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Not authenticated");
  }
  return session;
}

export async function updateLeadStatus(leadId: string, status: string) {
  await requireAdmin();
  const parsed = leadStatusSchema.parse(status);

  await prisma.lead.update({
    where: { id: leadId },
    data: { status: parsed, cancellationReason: null },
  });

  revalidatePath("/admin/leads");
  revalidatePath(`/admin/leads/${leadId}`);
  revalidatePath("/admin");
}

export async function cancelLead(leadId: string, reason: string) {
  await requireAdmin();
  const parsedReason = cancellationReasonSchema.parse(reason);

  await prisma.lead.update({
    where: { id: leadId },
    data: { status: "CANCELLED", cancellationReason: parsedReason },
  });

  revalidatePath("/admin/leads");
  revalidatePath(`/admin/leads/${leadId}`);
  revalidatePath("/admin");
}

export async function deleteLead(leadId: string) {
  await requireAdmin();

  await prisma.$transaction(async (tx) => {
    await tx.booking.deleteMany({ where: { leadId } });
    await tx.quote.deleteMany({ where: { leadId } });
    await tx.lead.delete({ where: { id: leadId } });
  });

  revalidatePath("/admin/leads");
  revalidatePath("/admin");
}
