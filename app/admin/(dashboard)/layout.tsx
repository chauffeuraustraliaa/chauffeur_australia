import { redirect } from "next/navigation";

import { Sidebar } from "@/components/admin/Sidebar";
import { ThemeProvider } from "@/components/admin/ThemeProvider";
import { Topbar } from "@/components/admin/Topbar";
import { Toaster } from "@/components/ui/sonner";
import { auth } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/admin/login");
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="admin-shell flex h-screen overflow-hidden bg-background text-foreground">
        <Sidebar />
        <div className="flex flex-1 flex-col overflow-hidden">
          <Topbar
            adminName={session.user.name ?? "Admin"}
            adminEmail={session.user.email ?? ""}
          />
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </div>
      <Toaster position="top-right" />
    </ThemeProvider>
  );
}
