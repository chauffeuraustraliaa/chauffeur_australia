import type { LucideIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type StatCard = {
  label: string;
  value: string;
  icon: LucideIcon;
};

export function DashboardCards({ stats }: { stats: StatCard[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {stats.map((stat) => (
        <Card
          key={stat.label}
          className="transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-navy/10"
        >
          <CardHeader className="flex flex-row items-center justify-between gap-2 pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              {stat.label}
            </CardTitle>
            <div className="flex size-8 items-center justify-center rounded-lg bg-brand-gold/15 text-brand-gold">
              <stat.icon className="size-4" aria-hidden />
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-heading text-2xl font-bold tracking-tight text-brand-navy dark:text-white">
              {stat.value}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
