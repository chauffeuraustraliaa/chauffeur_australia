import { CarTaxiFront } from "lucide-react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { LoginForm } from "@/components/admin/LoginForm";
import { auth } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Admin Login | Chauffeur Australia",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  const session = await auth();
  if (session?.user) {
    redirect("/admin");
  }

  return (
    <main className="admin-shell flex min-h-screen items-center justify-center bg-brand-navy-deep px-6 py-16">
      <div className="w-full max-w-sm rounded-[20px] bg-white p-8 shadow-2xl">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-navy/5 text-brand-navy">
            <CarTaxiFront className="size-6" aria-hidden />
          </div>
          <h1 className="font-heading text-xl font-bold tracking-tight text-brand-ink uppercase">
            Admin Login
          </h1>
          <p className="text-sm text-muted-foreground">
            Sign in to manage leads, quotes and bookings.
          </p>
        </div>

        <div className="mt-6">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
