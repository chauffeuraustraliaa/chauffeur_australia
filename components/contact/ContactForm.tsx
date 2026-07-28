"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Navigation,
  Phone,
  User,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  contactFormDefaultValues,
  contactFormSchema,
  passengerOptions,
  serviceTypeOptions,
  type ContactFormValues,
} from "@/lib/contact-schema";
import { submitContactEnquiry } from "@/lib/submit-contact";

const selectClassName =
  "h-9 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactFormDefaultValues,
    mode: "onBlur",
  });

  async function onSubmit(data: ContactFormValues) {
    setSubmitState("loading");
    try {
      const result = await submitContactEnquiry(data);
      setReferenceId(result.referenceId);
      setSubmitState("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
      setSubmitState("error");
    }
  }

  function clearForm() {
    form.reset(contactFormDefaultValues);
    setSubmitState("idle");
    setErrorMessage("");
  }

  if (submitState === "success") {
    const firstName = form.getValues("fullName").split(" ")[0] || "there";
    return (
      <div className="flex flex-col items-center gap-4 rounded-[24px] border border-border bg-white p-10 text-center shadow-sm">
        <div className="flex size-14 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold">
          <CheckCircle2 className="size-7" aria-hidden />
        </div>
        <h3 className="font-heading text-xl font-bold text-brand-ink uppercase">
          Enquiry Sent
        </h3>
        <p className="max-w-sm text-sm leading-6 text-muted-foreground">
          Thanks, {firstName}. Reference{" "}
          <strong className="text-brand-ink">{referenceId}</strong>. Our team
          will be in touch shortly to help with your enquiry.
        </p>
        <Button onClick={clearForm} variant="outline" className="mt-2 rounded-full">
          Send Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className="rounded-[24px] border border-border bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-1.5">
                    <User className="size-3.5 text-brand-gold" aria-hidden />
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Smith" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-1.5">
                    <Mail className="size-3.5 text-brand-gold" aria-hidden />
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="jane@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-1.5">
                    <Phone className="size-3.5 text-brand-gold" aria-hidden />
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="0400 000 000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Type</FormLabel>
                  <FormControl>
                    <select className={selectClassName} {...field}>
                      {serviceTypeOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="pickupLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-brand-gold" aria-hidden />
                    Pickup Location (optional)
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Airport, hotel or address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dropoffLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-1.5">
                    <Navigation className="size-3.5 text-brand-gold" aria-hidden />
                    Drop-off Location (optional)
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Where are you headed?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <FormField
              control={form.control}
              name="travelDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-1.5">
                    <CalendarDays className="size-3.5 text-brand-gold" aria-hidden />
                    Travel Date (optional)
                  </FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="travelTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Travel Time (optional)</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passengers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-1.5">
                    <Users className="size-3.5 text-brand-gold" aria-hidden />
                    Passengers
                  </FormLabel>
                  <FormControl>
                    <select className={selectClassName} {...field}>
                      <option value="">Not sure yet</option>
                      {passengerOptions.map((count) => (
                        <option key={count} value={count}>
                          {count} {count === "1" ? "Passenger" : "Passengers"}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-1.5">
                  <MessageSquare className="size-3.5 text-brand-gold" aria-hidden />
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your trip, event or enquiry..."
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="privacyAgreed"
            render={({ field }) => (
              <FormItem>
                <label className="flex items-start gap-2.5">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="mt-0.5"
                    />
                  </FormControl>
                  <span className="text-sm leading-6 text-muted-foreground">
                    I agree to the{" "}
                    <Link
                      href="/privacy-policy"
                      className="font-medium text-brand-navy underline underline-offset-2 hover:text-brand-gold-hover"
                    >
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                <FormMessage />
              </FormItem>
            )}
          />

          {submitState === "error" && (
            <div className="flex items-start gap-2.5 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
              <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden />
              {errorMessage}
            </div>
          )}

          <div className="mt-2 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={clearForm}
              disabled={submitState === "loading"}
              className="rounded-full"
            >
              Clear Form
            </Button>
            <Button
              type="submit"
              disabled={submitState === "loading"}
              className="gap-1.5 rounded-full bg-brand-gold text-brand-navy-deep hover:bg-brand-gold-hover"
            >
              {submitState === "loading" ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden />
                  Sending...
                </>
              ) : (
                "Send Enquiry"
              )}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
