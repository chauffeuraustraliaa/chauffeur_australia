import {
  BarChart3,
  Ban,
  Car,
  CircleDollarSign,
  FileClock,
  FileText,
} from "lucide-react";
import type { Metadata } from "next";

import { DashboardCards, type StatCard } from "@/components/admin/DashboardCards";
import { LeadTable } from "@/components/admin/LeadTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = { title: "Dashboard | Admin" };
export const dynamic = "force-dynamic";

async function getDashboardData() {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const [
    totalLeads,
    todaysLeads,
    pendingQuotes,
    confirmedBookings,
    cancelledLeads,
    latestLeads,
    acceptedQuotesThisMonth,
  ] = await Promise.all([
    prisma.lead.count(),
    prisma.lead.count({ where: { createdAt: { gte: startOfToday } } }),
    prisma.quote.count({ where: { status: { in: ["DRAFT", "SENT"] } } }),
    prisma.booking.count({ where: { status: "CONFIRMED" } }),
    prisma.lead.count({ where: { status: "CANCELLED" } }),
    prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
      include: { customer: true, service: true, quote: true, booking: true },
    }),
    prisma.quote.aggregate({
      where: {
        status: "ACCEPTED",
        updatedAt: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        },
      },
      _sum: { totalPrice: true },
    }),
  ]);

  return {
    totalLeads,
    todaysLeads,
    pendingQuotes,
    confirmedBookings,
    cancelledLeads,
    latestLeads,
    monthlyRevenue: acceptedQuotesThisMonth._sum.totalPrice?.toNumber() ?? 0,
  };
}

export default async function AdminDashboardPage() {
  const data = await getDashboardData();

  const stats: StatCard[] = [
    { label: "Total Leads", value: String(data.totalLeads), icon: FileText },
    { label: "Today's Leads", value: String(data.todaysLeads), icon: FileClock },
    { label: "Pending Quotes", value: String(data.pendingQuotes), icon: FileClock },
    { label: "Confirmed Bookings", value: String(data.confirmedBookings), icon: Car },
    { label: "Cancelled Leads", value: String(data.cancelledLeads), icon: Ban },
    {
      label: "Monthly Revenue",
      value: `$${data.monthlyRevenue.toLocaleString("en-AU")}`,
      icon: CircleDollarSign,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          An overview of leads, quotes and bookings across the business.
        </p>
      </div>

      <DashboardCards stats={stats} />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Latest Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <LeadTable leads={data.latestLeads} compact />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="size-4 text-brand-gold" aria-hidden />
              Bookings Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex h-48 items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
              Chart placeholder — connect a charting library once you have
              enough booking history to visualise.
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          {data.latestLeads.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No activity yet. New leads and status changes will show up
              here.
            </p>
          ) : (
            <ul className="flex flex-col gap-3 text-sm">
              {data.latestLeads.map((lead) => (
                <li key={lead.id} className="flex items-center justify-between gap-4">
                  <span>
                    <span className="font-medium">{lead.fullName}</span>{" "}
                    submitted a {lead.service.name.toLowerCase()} enquiry
                  </span>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {new Intl.DateTimeFormat("en-AU", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    }).format(lead.createdAt)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
