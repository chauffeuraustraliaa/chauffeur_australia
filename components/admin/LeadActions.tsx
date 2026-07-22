"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import {
  acceptQuote,
  rejectQuote,
  saveQuote,
  sendQuote,
} from "@/lib/actions/quote-actions";
import { cancelLead, deleteLead, updateLeadStatus } from "@/lib/actions/lead-actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { LeadListItem } from "@/lib/types";

const cancellationReasons = [
  { value: "CANCELLED_BY_ADMIN", label: "Cancelled by Admin" },
  { value: "CANCELLED_BY_CUSTOMER", label: "Cancelled by Customer" },
  { value: "NO_RESPONSE", label: "No Response" },
  { value: "EXPIRED_QUOTE", label: "Expired Quote" },
];

export function LeadActions({ lead }: { lead: LeadListItem }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [cancelOpen, setCancelOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [reason, setReason] = useState(cancellationReasons[0].value);

  const [driverCost, setDriverCost] = useState(
    lead.quote ? lead.quote.driverCost.toString() : "",
  );
  const [markup, setMarkup] = useState(lead.quote ? lead.quote.markup.toString() : "");
  const [currency, setCurrency] = useState(lead.quote?.currency ?? "AUD");
  const [notes, setNotes] = useState(lead.quote?.notes ?? "");

  const total =
    (Number(driverCost) || 0) + (Number(markup) || 0);

  function run(action: () => Promise<void>, successMessage: string) {
    startTransition(async () => {
      try {
        await action();
        toast.success(successMessage);
        router.refresh();
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Something went wrong");
      }
    });
  }

  function handleSaveQuote(andSend: boolean) {
    startTransition(async () => {
      try {
        await saveQuote({
          leadId: lead.id,
          driverCost: Number(driverCost),
          markup: Number(markup),
          currency,
          notes: notes || undefined,
        });
        if (andSend) {
          await sendQuote(lead.id);
        }
        toast.success(andSend ? "Quote sent to customer" : "Quote saved as draft");
        setQuoteOpen(false);
        router.refresh();
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Failed to save quote");
      }
    });
  }

  function handleDelete() {
    startTransition(async () => {
      try {
        await deleteLead(lead.id);
        toast.success("Lead deleted");
        router.push("/admin/leads");
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Failed to delete lead");
      }
    });
  }

  const canConfirmBooking = lead.quote?.status === "SENT" && !lead.booking;
  const isCancelled = lead.status === "CANCELLED";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Dialog open={quoteOpen} onOpenChange={setQuoteOpen}>
        <DialogTrigger render={<Button size="sm" disabled={isPending} />}>
          {lead.quote ? "Edit Quote" : "Create Quote"}
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{lead.quote ? "Edit Quote" : "Create Quote"}</DialogTitle>
            <DialogDescription>
              Set the driver cost and markup for {lead.fullName}&apos;s journey.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="driverCost">Driver Cost</Label>
                <Input
                  id="driverCost"
                  type="number"
                  min="0"
                  step="0.01"
                  value={driverCost}
                  onChange={(e) => setDriverCost(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="markup">Markup</Label>
                <Input
                  id="markup"
                  type="number"
                  min="0"
                  step="0.01"
                  value={markup}
                  onChange={(e) => setMarkup(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="currency">Currency</Label>
              <Select value={currency} onValueChange={(value) => value && setCurrency(value)}>
                <SelectTrigger id="currency" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AUD">AUD</SelectItem>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="GBP">GBP</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Optional notes for this quote"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Total price:{" "}
              <span className="font-semibold text-foreground">
                {currency} {total.toFixed(2)}
              </span>
            </p>
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
            <Button
              variant="outline"
              disabled={isPending || !driverCost}
              onClick={() => handleSaveQuote(false)}
            >
              Save Draft
            </Button>
            <Button disabled={isPending || !driverCost} onClick={() => handleSaveQuote(true)}>
              {isPending && <Loader2 className="size-4 animate-spin" />}
              Save & Send
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {lead.quote?.status === "SENT" && (
        <Button
          size="sm"
          variant="outline"
          disabled={isPending}
          onClick={() => run(() => rejectQuote(lead.id), "Quote rejected")}
        >
          Reject Quote
        </Button>
      )}

      <Button
        size="sm"
        variant="outline"
        disabled={isPending || !canConfirmBooking}
        onClick={() => run(() => acceptQuote(lead.id), "Booking confirmed")}
      >
        Confirm Booking
      </Button>

      <Button
        size="sm"
        variant="outline"
        disabled={isPending || isCancelled}
        onClick={() => run(() => updateLeadStatus(lead.id, "PENDING_REVIEW"), "Marked as pending")}
      >
        Mark Pending
      </Button>

      <Dialog open={cancelOpen} onOpenChange={setCancelOpen}>
        <DialogTrigger render={<Button size="sm" variant="outline" disabled={isPending || isCancelled} />}>
          Cancel Lead
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Cancel this lead?</DialogTitle>
            <DialogDescription>
              Choose a reason. This will move the lead to Cancelled Leads.
            </DialogDescription>
          </DialogHeader>
          <Select value={reason} onValueChange={(value) => value && setReason(value)}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {cancellationReasons.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>Back</DialogClose>
            <Button
              variant="destructive"
              disabled={isPending}
              onClick={() =>
                startTransition(async () => {
                  try {
                    await cancelLead(lead.id, reason);
                    toast.success("Lead cancelled");
                    setCancelOpen(false);
                    router.refresh();
                  } catch (error) {
                    toast.error(error instanceof Error ? error.message : "Failed to cancel lead");
                  }
                })
              }
            >
              Cancel Lead
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogTrigger render={<Button size="sm" variant="destructive" disabled={isPending} />}>
          Delete Lead
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Delete this lead permanently?</DialogTitle>
            <DialogDescription>
              This will remove the lead and any associated quote or booking. This action cannot
              be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>Back</DialogClose>
            <Button variant="destructive" disabled={isPending} onClick={handleDelete}>
              {isPending && <Loader2 className="size-4 animate-spin" />}
              Delete Permanently
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
