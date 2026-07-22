import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  NEW: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",
  PENDING_REVIEW:
    "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
  QUOTE_SENT:
    "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-400",
  ACCEPTED:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",
  CONFIRMED:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",
  REJECTED: "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400",
  CANCELLED: "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400",
  DRAFT: "bg-gray-100 text-gray-700 dark:bg-gray-500/15 dark:text-gray-400",
  SENT: "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-400",
  EXPIRED: "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400",
  COMPLETED:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",
};

const statusLabels: Record<string, string> = {
  NEW: "New",
  PENDING_REVIEW: "Pending Review",
  QUOTE_SENT: "Quote Sent",
  ACCEPTED: "Accepted",
  CONFIRMED: "Confirmed",
  REJECTED: "Rejected",
  CANCELLED: "Cancelled",
  DRAFT: "Draft",
  SENT: "Sent",
  EXPIRED: "Expired",
  COMPLETED: "Completed",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <Badge
      variant="secondary"
      className={cn("border-transparent font-medium", statusStyles[status])}
    >
      {statusLabels[status] ?? status}
    </Badge>
  );
}
