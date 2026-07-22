import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { LeadTable } from "@/components/admin/LeadTable";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = { title: "Customer Details | Admin" };
export const dynamic = "force-dynamic";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-AU", { dateStyle: "medium" }).format(date);
}

export default async function CustomerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const customer = await prisma.customer.findUnique({
    where: { id },
    include: {
      leads: {
        orderBy: { createdAt: "desc" },
        include: { customer: true, service: true, quote: true, booking: true },
      },
      bookings: true,
    },
  });

  if (!customer) {
    notFound();
  }

  const lifetimeValue = customer.leads.reduce((sum, lead) => {
    if (lead.quote?.status === "ACCEPTED") {
      return sum + Number(lead.quote.totalPrice);
    }
    return sum;
  }, 0);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Button
          render={<Link href="/admin/customers" />}
          nativeButton={false}
          variant="ghost"
          size="sm"
          className="mb-2 -ml-2"
        >
          <ArrowLeft className="size-4" />
          Back to Customers
        </Button>
        <h1 className="text-2xl font-bold tracking-tight">{customer.name}</h1>
        <p className="text-sm text-muted-foreground">
          Customer since {formatDate(customer.createdAt)}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">Email</CardTitle>
          </CardHeader>
          <CardContent className="truncate text-sm font-semibold">{customer.email}</CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">Phone</CardTitle>
          </CardHeader>
          <CardContent className="text-sm font-semibold">{customer.phone}</CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Total Bookings
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">{customer.bookings.length}</CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Lifetime Value
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            ${lifetimeValue.toLocaleString("en-AU")}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Enquiry History</CardTitle>
        </CardHeader>
        <CardContent>
          <LeadTable leads={customer.leads} />
        </CardContent>
      </Card>

      {customer.bookings.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Bookings</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {customer.bookings.map((booking) => (
              <div
                key={booking.id}
                className="flex items-center justify-between rounded-lg border px-4 py-2 text-sm"
              >
                <Link
                  href={`/admin/leads/${booking.leadId}`}
                  className="font-mono font-semibold text-brand-navy hover:underline dark:text-primary"
                >
                  {booking.bookingNumber}
                </Link>
                <span>{formatDate(booking.travelDate)}</span>
                <StatusBadge status={booking.status} />
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
