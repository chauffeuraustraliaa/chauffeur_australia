"use client";

import { Bell, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Topbar({
  adminName,
  adminEmail,
}: {
  adminName: string;
  adminEmail: string;
}) {
  const { theme, setTheme } = useTheme();
  const initials = adminName
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b border-brand-gold/20 bg-background px-6 shadow-sm">
      <div className="relative w-full max-w-sm">
        <Search
          className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          placeholder="Search leads, customers..."
          className="h-9 pl-8 focus-visible:border-brand-gold focus-visible:ring-brand-gold/30"
        />
      </div>

      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
          className="hover:bg-brand-gold/10 hover:text-brand-gold-hover"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="size-4 dark:hidden" aria-hidden />
          <Moon className="hidden size-4 dark:block" aria-hidden />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Notifications"
          className="hover:bg-brand-gold/10 hover:text-brand-gold-hover"
        >
          <Bell className="size-4" aria-hidden />
        </Button>
        <div className="ml-2 flex items-center gap-2.5">
          <Avatar className="size-8 ring-2 ring-brand-gold/40">
            <AvatarFallback className="bg-brand-navy text-xs text-white">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="hidden text-left sm:block">
            <p className="text-sm leading-tight font-medium">{adminName}</p>
            <p className="text-xs leading-tight text-muted-foreground">
              {adminEmail}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
