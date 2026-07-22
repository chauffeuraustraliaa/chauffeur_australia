import type { Metadata } from "next";
import Link from "next/link";

import { LeadTable } from "@/components/admin/LeadTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { prisma } from "@/lib/prisma";
import type { Prisma } from "@/lib/generated/prisma/client";

export const metadata: Metadata = { title: "Leads | Admin" };
export const dynamic = "force-dynamic";

const PAGE_SIZE = 20;

const statusOptions = [
  { value: "", label: "All Statuses" },
  { value: "NEW", label: "New" },
  { value: "PENDING_REVIEW", label: "Pending Review" },
  { value: "QUOTE_SENT", label: "Quote Sent" },
  { value: "ACCEPTED", label: "Accepted" },
  { value: "CONFIRMED", label: "Confirmed" },
  { value: "REJECTED", label: "Rejected" },
];

export default async function AdminLeadsPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
    status?: string;
    sort?: string;
    page?: string;
  }>;
}) {
  const params = await searchParams;
  const q = params.q?.trim() ?? "";
  const status = params.status ?? "";
  const sort = params.sort === "date" ? "date" : "createdAt";
  const page = Math.max(1, Number(params.page) || 1);

  const where: Prisma.LeadWhereInput = {
    status: { not: "CANCELLED" },
    ...(status ? { status: status as Prisma.EnumLeadStatusFilter["equals"] } : {}),
    ...(q
      ? {
          OR: [
            { fullName: { contains: q, mode: "insensitive" } },
            { email: { contains: q, mode: "insensitive" } },
            { phone: { contains: q, mode: "insensitive" } },
          ],
        }
      : {}),
  };

  const [leads, total] = await Promise.all([
    prisma.lead.findMany({
      where,
      orderBy: { [sort]: "desc" },
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
      include: { customer: true, service: true, quote: true, booking: true },
    }),
    prisma.lead.count({ where }),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  function buildHref(next: Record<string, string | number | undefined>) {
    const merged = { q, status, sort, page: String(page), ...next };
    const search = new URLSearchParams();
    Object.entries(merged).forEach(([key, value]) => {
      if (value) search.set(key, String(value));
    });
    const qs = search.toString();
    return qs ? `/admin/leads?${qs}` : "/admin/leads";
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Leads</h1>
        <p className="text-sm text-muted-foreground">
          Every enquiry submitted through the Get A Quote form.
        </p>
      </div>

      <form
        action="/admin/leads"
        method="GET"
        className="flex flex-col gap-3 sm:flex-row sm:items-center"
      >
        <Input
          name="q"
          defaultValue={q}
          placeholder="Search by name, email or phone"
          className="sm:max-w-xs"
        />
        <select
          name="status"
          defaultValue={status}
          className="h-8 rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring"
        >
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Button type="submit" variant="outline" size="sm">
          Filter
        </Button>
        <div className="flex gap-2 text-sm sm:ml-auto">
          <Link
            href={buildHref({ sort: "createdAt", page: 1 })}
            className={
              sort === "createdAt" ? "font-semibold text-brand-navy" : "text-muted-foreground"
            }
          >
            Sort: Newest
          </Link>
          <Link
            href={buildHref({ sort: "date", page: 1 })}
            className={
              sort === "date" ? "font-semibold text-brand-navy" : "text-muted-foreground"
            }
          >
            Sort: Travel Date
          </Link>
        </div>
      </form>

      <LeadTable leads={leads} />

      {totalPages > 1 && (
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            Page {page} of {totalPages} ({total} leads)
          </span>
          <div className="flex gap-2">
            <Button
              render={<Link href={buildHref({ page: Math.max(1, page - 1) })} />}
              nativeButton={false}
              variant="outline"
              size="sm"
              disabled={page <= 1}
            >
              Previous
            </Button>
            <Button
              render={<Link href={buildHref({ page: Math.min(totalPages, page + 1) })} />}
              nativeButton={false}
              variant="outline"
              size="sm"
              disabled={page >= totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
