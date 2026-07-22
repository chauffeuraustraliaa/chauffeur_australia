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

export const metadata: Metadata = { title: "Quotations | Admin" };
export const dynamic = "force-dynamic";

function formatDateTime(date: Date) {
  return new Intl.DateTimeFormat("en-AU", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export default async function AdminQuotesPage() {
  const quotes = await prisma.quote.findMany({
    orderBy: { updatedAt: "desc" },
    include: { lead: { include: { customer: true, service: true } } },
  });

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Quotations</h1>
        <p className="text-sm text-muted-foreground">
          All quotes created for leads, from draft through to acceptance.
        </p>
      </div>

      {quotes.length === 0 ? (
        <div className="flex flex-col items-center gap-1 rounded-lg border border-dashed py-12 text-center text-sm text-muted-foreground">
          <p className="font-medium text-foreground">No quotes yet</p>
          <p>Create a quote from a lead&apos;s details page.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Driver Cost</TableHead>
                <TableHead>Markup</TableHead>
                <TableHead>Total Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quotes.map((quote) => (
                <TableRow key={quote.id}>
                  <TableCell className="font-medium">
                    <Link
                      href={`/admin/leads/${quote.leadId}`}
                      className="text-brand-navy hover:underline dark:text-primary"
                    >
                      {quote.lead.customer.name}
                    </Link>
                  </TableCell>
                  <TableCell>{quote.lead.service.name}</TableCell>
                  <TableCell>
                    {quote.currency} {quote.driverCost.toString()}
                  </TableCell>
                  <TableCell>
                    {quote.currency} {quote.markup.toString()}
                  </TableCell>
                  <TableCell className="font-medium">
                    {quote.currency} {quote.totalPrice.toString()}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={quote.status} />
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {formatDateTime(quote.updatedAt)}
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
