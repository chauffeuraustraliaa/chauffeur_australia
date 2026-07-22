"use client";

import {
  Ban,
  Car,
  FileText,
  LayoutDashboard,
  LogOut,
  Settings,
  Ticket,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { logoutAction } from "@/lib/actions/settings-actions";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Leads", href: "/admin/leads", icon: FileText },
  { label: "Quotations", href: "/admin/quotes", icon: Ticket },
  { label: "Confirmed Bookings", href: "/admin/bookings", icon: Car },
  { label: "Cancelled Leads", href: "/admin/leads/cancelled", icon: Ban },
  { label: "Customers", href: "/admin/customers", icon: Users },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col bg-brand-navy text-white shadow-xl">
      <div className="flex items-center gap-2.5 px-5 py-5">
        <div className="flex size-9 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold">
          <Car className="size-5" aria-hidden />
        </div>
        <span className="font-heading text-sm font-bold tracking-tight text-white uppercase">
          Chauffeur Australia
        </span>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-3 pt-2">
        {navItems.map((item) => {
          const isActive =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-brand-gold text-brand-navy-deep shadow-md shadow-black/20"
                  : "text-white/70 hover:bg-white/10 hover:text-brand-gold"
              )}
            >
              <item.icon className="size-4 shrink-0" aria-hidden />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <form action={logoutAction} className="border-t border-white/10 px-3 py-3">
        <button
          type="submit"
          className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-brand-gold"
        >
          <LogOut className="size-4 shrink-0" aria-hidden />
          Logout
        </button>
      </form>
    </aside>
  );
}
