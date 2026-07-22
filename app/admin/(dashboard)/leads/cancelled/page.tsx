import type { Metadata } from "next";

import { LeadTable } from "@/components/admin/LeadTable";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = { title: "Cancelled Leads | Admin" };
export const dynamic = "force-dynamic";

export default async function CancelledLeadsPage() {
  const leads = await prisma.lead.findMany({
    where: { status: "CANCELLED" },
    orderBy: { updatedAt: "desc" },
    include: { customer: true, service: true, quote: true, booking: true },
  });

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Cancelled Leads</h1>
        <p className="text-sm text-muted-foreground">
          Leads that were cancelled, rejected, or expired before becoming a booking.
        </p>
      </div>

      <LeadTable leads={leads} />
    </div>
  );
}
