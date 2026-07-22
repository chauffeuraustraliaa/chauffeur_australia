import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { LeadActions } from "@/components/admin/LeadActions";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = { title: "Lead Details | Admin" };
export const dynamic = "force-dynamic";

function formatDateTime(date: Date) {
  return new Intl.DateTimeFormat("en-AU", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-AU", { dateStyle: "medium" }).format(date);
}

const journeyTypeLabels: Record<string, string> = {
  ONE_WAY: "One Way",
  RETURN: "Return",
  HOURLY: "Hourly Hire",
};

const timeline = [
  { key: "NEW", label: "New Lead" },
  { key: "PENDING_REVIEW", label: "Pending Review" },
  { key: "QUOTE_SENT", label: "Quote Sent" },
  { key: "ACCEPTED", label: "Accepted" },
  { key: "CONFIRMED", label: "Confirmed Booking" },
];

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const lead = await prisma.lead.findUnique({
    where: { id },
    include: { customer: true, service: true, quote: true, booking: true },
  });

  if (!lead) {
    notFound();
  }

  const serializedLead = {
    ...lead,
    quote: lead.quote
      ? {
          ...lead.quote,
          driverCost: lead.quote.driverCost.toNumber(),
          markup: lead.quote.markup.toNumber(),
          totalPrice: lead.quote.totalPrice.toNumber(),
        }
      : null,
  };

  const isTerminal = lead.status === "CANCELLED" || lead.status === "REJECTED";
  const currentStep = timeline.findIndex((step) => step.key === lead.status);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Button
            render={<Link href="/admin/leads" />}
            nativeButton={false}
            variant="ghost"
            size="sm"
            className="mb-2 -ml-2"
          >
            <ArrowLeft className="size-4" />
            Back to Leads
          </Button>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight">{lead.fullName}</h1>
            <StatusBadge status={lead.status} />
          </div>
          <p className="font-mono text-xs text-muted-foreground">Lead ID: {lead.id}</p>
        </div>
        <LeadActions lead={serializedLead} />
      </div>

      {!isTerminal && (
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              {timeline.map((step, index) => (
                <div key={step.key} className="flex flex-1 flex-col items-center gap-2 text-center">
                  <div
                    className={`flex size-8 items-center justify-center rounded-full text-xs font-semibold ${
                      index <= currentStep
                        ? "bg-brand-navy text-white dark:bg-primary dark:text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="text-xs text-muted-foreground">{step.label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Journey Details</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Detail label="Service" value={lead.service.name} />
            <Detail label="Journey Type" value={journeyTypeLabels[lead.journeyType]} />
            <Detail label="Pickup Location" value={lead.pickupLocation} />
            <Detail label="Drop-off Location" value={lead.dropoffLocation ?? "—"} />
            <Detail label="Travel Date" value={formatDate(lead.date)} />
            <Detail label="Time" value={lead.time} />
            {lead.returnDate && <Detail label="Return Date" value={formatDate(lead.returnDate)} />}
            {lead.returnTime && <Detail label="Return Time" value={lead.returnTime} />}
            {lead.endTime && <Detail label="End Time" value={lead.endTime} />}
            <Detail label="Passengers" value={String(lead.passengers)} />
            <Detail label="Luggage" value={String(lead.luggage)} />
            {lead.specialRequests && (
              <div className="sm:col-span-2">
                <Detail label="Special Requests" value={lead.specialRequests} />
              </div>
            )}
            {lead.cancellationReason && (
              <div className="sm:col-span-2">
                <Detail label="Cancellation Reason" value={lead.cancellationReason.replaceAll("_", " ")} />
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Detail label="Name" value={lead.customer.name} />
            <Detail label="Email" value={lead.customer.email} />
            <Detail label="Phone" value={lead.customer.phone} />
            <Separator />
            <Detail label="Enquiry Received" value={formatDateTime(lead.createdAt)} />
          </CardContent>
        </Card>
      </div>

      {lead.quote && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Quote
              <StatusBadge status={lead.quote.status} />
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            <Detail label="Driver Cost" value={`${lead.quote.currency} ${lead.quote.driverCost.toString()}`} />
            <Detail label="Markup" value={`${lead.quote.currency} ${lead.quote.markup.toString()}`} />
            <Detail label="Total Price" value={`${lead.quote.currency} ${lead.quote.totalPrice.toString()}`} />
            <Detail label="Last Updated" value={formatDateTime(lead.quote.updatedAt)} />
            {lead.quote.notes && (
              <div className="sm:col-span-4">
                <Detail label="Notes" value={lead.quote.notes} />
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {lead.booking && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Booking
              <StatusBadge status={lead.booking.status} />
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Detail label="Booking Number" value={lead.booking.bookingNumber} />
            <Detail label="Travel Date" value={formatDate(lead.booking.travelDate)} />
            <Detail label="Confirmed" value={formatDateTime(lead.booking.createdAt)} />
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}
