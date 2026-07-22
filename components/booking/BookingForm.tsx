"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Luggage,
  Mail,
  MapPin,
  Navigation,
  Phone,
  User,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { StepIndicator } from "@/components/booking/StepIndicator";
import {
  bookingFormDefaultValues,
  bookingFormSchema,
  bookingSteps,
  journeyTypeOptions,
  luggageOptions,
  passengerOptions,
  serviceTypeOptions,
  type BookingFormValues,
} from "@/lib/booking-schema";
import { submitBookingRequest } from "@/lib/submit-booking";

const selectClassName =
  "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm";

export function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: bookingFormDefaultValues,
    mode: "onBlur",
  });

  const totalSteps = bookingSteps.length;
  const values = form.watch();

  async function goNext() {
    const step = bookingSteps[currentStep - 1];
    if (step.fields.length > 0) {
      const valid = await form.trigger(
        step.fields as unknown as (keyof BookingFormValues)[]
      );
      if (!valid) return;
    }
    setCurrentStep((s) => Math.min(s + 1, totalSteps));
  }

  function goBack() {
    setCurrentStep((s) => Math.max(s - 1, 1));
  }

  async function onSubmit(data: BookingFormValues) {
    setSubmitState("loading");
    try {
      const result = await submitBookingRequest(data);
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

  function startOver() {
    form.reset(bookingFormDefaultValues);
    setCurrentStep(1);
    setSubmitState("idle");
  }

  if (submitState === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-6 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold">
          <CheckCircle2 className="size-7" aria-hidden />
        </div>
        <h2 className="font-heading text-xl font-bold text-brand-ink uppercase">
          Quote Request Received
        </h2>
        <p className="max-w-sm text-sm leading-6 text-muted-foreground">
          Thanks, {values.fullName.split(" ")[0] || "there"}. Reference{" "}
          <strong className="text-brand-ink">{referenceId}</strong>. Our team
          will be in touch shortly with your fixed-price quote.
        </p>
        <Button
          onClick={startOver}
          variant="outline"
          className="mt-2 rounded-full"
        >
          Request Another Quote
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <div className="mb-6">
        <StepIndicator steps={bookingSteps} currentStep={currentStep} />
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        {currentStep === 1 && (
          <FormField
            control={form.control}
            name="journeyType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Journey Type</FormLabel>
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="grid grid-cols-1 gap-4 sm:grid-cols-3"
                >
                  {journeyTypeOptions.map((option) => (
                    <label
                      key={option.value}
                      className="group relative flex cursor-pointer flex-col items-center gap-2 rounded-2xl border-2 border-border bg-white p-5 text-center transition-colors has-[[data-checked]]:border-brand-gold has-[[data-checked]]:bg-brand-gold/5"
                    >
                      <RadioGroupItem
                        value={option.value}
                        aria-label={option.label}
                        className="sr-only"
                      />
                      <option.icon
                        className="size-6 text-brand-navy"
                        aria-hidden
                      />
                      <span className="text-sm font-semibold text-brand-ink">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </RadioGroup>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {currentStep === 2 && (
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="pickupLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-brand-gold" aria-hidden />
                    Pickup Location
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Airport, hotel or address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {values.journeyType !== "hourly" && (
              <FormField
                control={form.control}
                name="dropoffLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1.5">
                      <Navigation className="size-3.5 text-brand-gold" aria-hidden />
                      Drop-off Location
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Where are you headed?" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1.5">
                      <CalendarDays className="size-3.5 text-brand-gold" aria-hidden />
                      Date
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
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {values.journeyType === "hourly"
                        ? "Start Time"
                        : values.journeyType === "return"
                          ? "Outbound Time"
                          : "Pickup Time"}
                    </FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {values.journeyType === "hourly" && (
              <FormField
                control={form.control}
                name="endTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {values.journeyType === "return" && (
              <div className="rounded-xl border border-dashed border-border p-4">
                <span className="text-xs font-semibold tracking-[0.15em] text-brand-gold uppercase">
                  Return Journey
                </span>
                <div className="mt-3 grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="returnDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1.5">
                          <CalendarDays className="size-3.5 text-brand-gold" aria-hidden />
                          Return Date
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
                    name="returnTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Return Time</FormLabel>
                        <FormControl>
                          <Input type="time" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
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
              <FormField
                control={form.control}
                name="luggage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1.5">
                      <Luggage className="size-3.5 text-brand-gold" aria-hidden />
                      Luggage
                    </FormLabel>
                    <FormControl>
                      <select className={selectClassName} {...field}>
                        {luggageOptions.map((count) => (
                          <option key={count} value={count}>
                            {count} {count === "1" ? "Bag" : "Bags"}
                          </option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Type</FormLabel>
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="grid grid-cols-2 gap-3 sm:grid-cols-4"
                >
                  {serviceTypeOptions.map((option) => (
                    <label
                      key={option.value}
                      className="group relative flex cursor-pointer flex-col items-center gap-2 rounded-2xl border-2 border-border bg-white p-4 text-center transition-colors has-[[data-checked]]:border-brand-gold has-[[data-checked]]:bg-brand-gold/5"
                    >
                      <RadioGroupItem
                        value={option.value}
                        aria-label={option.label}
                        className="sr-only"
                      />
                      <option.icon
                        className="size-5 text-brand-navy"
                        aria-hidden
                      />
                      <span className="text-xs font-semibold text-brand-ink">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </RadioGroup>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {currentStep === 4 && (
          <div className="flex flex-col gap-4">
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1.5">
                      <Mail className="size-3.5 text-brand-gold" aria-hidden />
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="jane@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1.5">
                      <Phone className="size-3.5 text-brand-gold" aria-hidden />
                      Phone
                    </FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="0400 000 000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="specialRequests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Requests (optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Child seats, extra stops, accessibility needs..."
                      rows={3}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        {currentStep === 5 && (
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border bg-brand-cream p-5">
              <dl className="flex flex-col gap-2.5 text-sm">
                <ReviewRow
                  label="Journey"
                  value={
                    journeyTypeOptions.find((o) => o.value === values.journeyType)
                      ?.label
                  }
                />
                <ReviewRow label="Pickup" value={values.pickupLocation} />
                {values.journeyType !== "hourly" && (
                  <ReviewRow label="Drop-off" value={values.dropoffLocation} />
                )}
                <ReviewRow
                  label={
                    values.journeyType === "hourly"
                      ? "Date & Start Time"
                      : values.journeyType === "return"
                        ? "Outbound Date & Time"
                        : "Date & Time"
                  }
                  value={
                    values.date && values.time
                      ? `${values.date} at ${values.time}`
                      : undefined
                  }
                />
                {values.journeyType === "hourly" && (
                  <ReviewRow label="End Time" value={values.endTime} />
                )}
                {values.journeyType === "return" && (
                  <ReviewRow
                    label="Return Date & Time"
                    value={
                      values.returnDate && values.returnTime
                        ? `${values.returnDate} at ${values.returnTime}`
                        : undefined
                    }
                  />
                )}
                <ReviewRow
                  label="Passengers / Luggage"
                  value={`${values.passengers} / ${values.luggage}`}
                />
                <ReviewRow
                  label="Service"
                  value={
                    serviceTypeOptions.find((o) => o.value === values.serviceType)
                      ?.label
                  }
                />
                <ReviewRow label="Name" value={values.fullName} />
                <ReviewRow label="Email" value={values.email} />
                <ReviewRow label="Phone" value={values.phone} />
                {values.specialRequests && (
                  <ReviewRow
                    label="Special Requests"
                    value={values.specialRequests}
                  />
                )}
              </dl>
            </div>

            {submitState === "error" && (
              <div className="flex items-start gap-2.5 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
                <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden />
                {errorMessage}
              </div>
            )}
          </div>
        )}

        <div className="mt-8 flex items-center justify-between gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={goBack}
            disabled={currentStep === 1 || submitState === "loading"}
            className="gap-1.5 rounded-full"
          >
            <ChevronLeft className="size-4" aria-hidden />
            Back
          </Button>

          {currentStep < totalSteps ? (
            <Button
              type="button"
              onClick={goNext}
              className="gap-1.5 rounded-full bg-brand-gold text-brand-navy-deep hover:bg-brand-gold-hover"
            >
              Next
              <ChevronRight className="size-4" aria-hidden />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={submitState === "loading"}
              className="gap-1.5 rounded-full bg-brand-gold text-brand-navy-deep hover:bg-brand-gold-hover"
            >
              {submitState === "loading" ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden />
                  Submitting...
                </>
              ) : (
                "Submit Quote Request"
              )}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}

function ReviewRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex justify-between gap-4">
      <dt className="shrink-0 text-muted-foreground">{label}</dt>
      <dd className="text-right font-medium text-brand-ink">{value}</dd>
    </div>
  );
}
