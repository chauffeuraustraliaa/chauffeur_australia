import type { LucideIcon } from "lucide-react";
import { Minus, Plus } from "lucide-react";

export function PolicySection({
  id,
  icon: Icon,
  title,
  children,
}: {
  id: string;
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details
      id={id}
      open
      className="group scroll-mt-28 rounded-[20px] border border-border bg-white p-6 shadow-[0_8px_16px_-8px_rgba(11,42,58,0.1)] sm:p-8"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <span className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-brand-navy/5 text-brand-navy">
            <Icon className="size-5" aria-hidden />
          </span>
          <h2 className="font-heading text-xl font-semibold text-brand-ink sm:text-2xl">
            {title}
          </h2>
        </span>
        <span className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-cream text-brand-navy transition-colors duration-300 group-open:bg-brand-gold group-open:text-brand-navy-deep">
          <Plus className="size-4 group-open:hidden" aria-hidden />
          <Minus className="hidden size-4 group-open:block" aria-hidden />
        </span>
      </summary>
      <div className="mt-4 flex flex-col gap-3 pl-13 text-sm leading-7 text-muted-foreground">
        {children}
      </div>
    </details>
  );
}
