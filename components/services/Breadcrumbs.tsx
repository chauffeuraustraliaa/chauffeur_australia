import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

export function Breadcrumbs({
  items,
  variant = "light",
}: {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <nav
      aria-label="Breadcrumb"
      className={
        isDark
          ? ""
          : "border-b border-border bg-brand-cream"
      }
    >
      <ol
        className={`flex flex-wrap items-center gap-1.5 text-xs font-medium ${
          isDark
            ? "text-white/60"
            : "mx-auto max-w-[1280px] px-6 py-3 text-muted-foreground"
        }`}
      >
        <li className="flex items-center gap-1.5">
          <Link
            href="/"
            className={`flex items-center gap-1 transition-colors ${
              isDark ? "hover:text-brand-gold" : "hover:text-brand-gold-hover"
            }`}
          >
            <Home className="size-3.5" aria-hidden />
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1.5">
            <ChevronRight
              className={`size-3.5 ${isDark ? "text-white/30" : "text-border"}`}
              aria-hidden
            />
            {index === items.length - 1 ? (
              <span
                aria-current="page"
                className={isDark ? "text-white" : "text-brand-ink"}
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className={`transition-colors ${
                  isDark
                    ? "hover:text-brand-gold"
                    : "hover:text-brand-gold-hover"
                }`}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
