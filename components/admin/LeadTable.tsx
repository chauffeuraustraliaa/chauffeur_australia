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
import type { LeadListItem } from "@/lib/types";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function LeadTable({
  leads,
  compact = false,
}: {
  leads: LeadListItem[];
  compact?: boolean;
}) {
  if (leads.length === 0) {
    return (
      <div className="flex flex-col items-center gap-1 rounded-lg border border-dashed py-12 text-center text-sm text-muted-foreground">
        <p className="font-medium text-foreground">No leads found</p>
        <p>New enquiries from the website will appear here.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Lead ID</TableHead>
            <TableHead>Customer</TableHead>
            {!compact && <TableHead>Email</TableHead>}
            {!compact && <TableHead>Phone</TableHead>}
            <TableHead>Pickup</TableHead>
            {!compact && <TableHead>Drop-off</TableHead>}
            <TableHead>Service</TableHead>
            <TableHead>Travel Date</TableHead>
            {!compact && <TableHead>Passengers</TableHead>}
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell className="font-mono text-xs">
                <Link
                  href={`/admin/leads/${lead.id}`}
                  className="font-semibold text-brand-navy hover:underline dark:text-primary"
                >
                  {lead.id.slice(0, 8)}
                </Link>
              </TableCell>
              <TableCell className="font-medium">{lead.fullName}</TableCell>
              {!compact && <TableCell>{lead.email}</TableCell>}
              {!compact && <TableCell>{lead.phone}</TableCell>}
              <TableCell className="max-w-[160px] truncate">
                {lead.pickupLocation}
              </TableCell>
              {!compact && (
                <TableCell className="max-w-[160px] truncate">
                  {lead.dropoffLocation ?? "—"}
                </TableCell>
              )}
              <TableCell>{lead.service.name}</TableCell>
              <TableCell>{formatDate(lead.date)}</TableCell>
              {!compact && <TableCell>{lead.passengers}</TableCell>}
              <TableCell>
                <StatusBadge status={lead.status} />
              </TableCell>
              <TableCell className="text-muted-foreground">
                {formatDate(lead.createdAt)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
