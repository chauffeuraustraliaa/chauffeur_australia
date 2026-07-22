import type { Metadata } from "next";

import { SettingsForm } from "@/components/admin/SettingsForm";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = { title: "Settings | Admin" };
export const dynamic = "force-dynamic";

export default async function AdminSettingsPage() {
  const session = await auth();

  const [admin, settings] = await Promise.all([
    prisma.admin.findUniqueOrThrow({ where: { id: session!.user!.id } }),
    prisma.setting.upsert({
      where: { id: "singleton" },
      update: {},
      create: { id: "singleton" },
    }),
  ]);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-sm text-muted-foreground">
          Manage your admin profile, password and company information.
        </p>
      </div>

      <SettingsForm
        admin={{ name: admin.name, email: admin.email }}
        settings={{
          companyName: settings.companyName,
          supportEmail: settings.supportEmail,
          logoUrl: settings.logoUrl,
          currency: settings.currency,
          timezone: settings.timezone,
        }}
      />
    </div>
  );
}
