import { Check } from "lucide-react";

export function StepIndicator({
  steps,
  currentStep,
}: {
  steps: readonly { id: number; title: string }[];
  currentStep: number;
}) {
  return (
    <ol className="flex items-center gap-1.5">
      {steps.map((step) => {
        const isComplete = step.id < currentStep;
        const isCurrent = step.id === currentStep;
        return (
          <li key={step.id} className="flex flex-1 flex-col items-center gap-1.5">
            <span
              className={`flex size-7 items-center justify-center rounded-full text-xs font-semibold transition-colors duration-300 ${
                isComplete
                  ? "bg-brand-gold text-brand-navy-deep"
                  : isCurrent
                    ? "bg-brand-navy text-white"
                    : "bg-brand-cream text-muted-foreground"
              }`}
            >
              {isComplete ? <Check className="size-3.5" aria-hidden /> : step.id}
            </span>
            <span
              className={`hidden text-center text-[11px] leading-tight font-medium sm:block ${
                isCurrent ? "text-brand-ink" : "text-muted-foreground"
              }`}
            >
              {step.title}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
