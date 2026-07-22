import type { Metadata } from "next";
import Link from "next/link";

import { StatusBadge } from "@/components/admin/StatusBadge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = { title: "Confirmed Bookings | Admin" };
export const dynamic = "force-dynamic";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-AU", { dateStyle: "medium" }).format(date);
}

export default async function AdminBookingsPage() {
  const bookings = await prisma.booking.findMany({
    orderBy: { createdAt: "desc" },
    include: { customer: true, lead: { include: { service: true } } },
  });

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Confirmed Bookings</h1>
        <p className="text-sm text-muted-foreground">
          Bookings created automatically once a customer accepts a quote.
        </p>
      </div>

      {bookings.length === 0 ? (
        <div className="flex flex-col items-center gap-1 rounded-lg border border-dashed py-12 text-center text-sm text-muted-foreground">
          <p className="font-medium text-foreground">No confirmed bookings yet</p>
          <p>Accepted quotes will appear here as bookings.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking Number</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Journey</TableHead>
                <TableHead>Travel Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Confirmed On</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-mono text-xs font-semibold">
                    <Link
                      href={`/admin/leads/${booking.leadId}`}
                      className="text-brand-navy hover:underline dark:text-primary"
                    >
                      {booking.bookingNumber}
                    </Link>
                  </TableCell>
                  <TableCell className="font-medium">{booking.customer.name}</TableCell>
                  <TableCell>{booking.lead.service.name}</TableCell>
                  <TableCell>{formatDate(booking.travelDate)}</TableCell>
                  <TableCell>
                    <StatusBadge status={booking.status} />
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {formatDate(booking.createdAt)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
