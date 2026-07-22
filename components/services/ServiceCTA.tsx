import { PhoneCall } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

const toneStyles = {
  gold: {
    section: "bg-brand-gold text-brand-navy-deep",
    overlay:
      "bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,white,transparent_75%),transparent_60%)]",
    gradient: "bg-[linear-gradient(160deg,var(--brand-gold-light)_0%,var(--brand-gold)_60%)]",
    iconWrap: "bg-brand-navy-deep/10 text-brand-navy-deep",
    description: "text-brand-navy-deep/80",
    button: "bg-brand-navy-deep text-white hover:bg-brand-navy",
  },
  navy: {
    section: "bg-brand-navy-deep text-white",
    overlay:
      "bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--brand-gold),transparent_88%),transparent_60%)]",
    gradient: "bg-[linear-gradient(160deg,var(--brand-navy)_0%,var(--brand-navy-deep)_100%)]",
    iconWrap: "bg-brand-gold/15 text-brand-gold",
    description: "text-white/70",
    button: "bg-brand-gold text-brand-navy-deep hover:bg-brand-gold-hover",
  },
} as const;

export function ServiceCTA({
  title,
  description,
  buttonLabel = "Request A Quote",
  buttonHref = "#quote-form",
  tone = "gold",
}: {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
  tone?: keyof typeof toneStyles;
}) {
  const styles = toneStyles[tone];

  return (
    <section
      id="quote"
      className={`relative overflow-hidden py-16 sm:py-20 ${styles.section}`}
    >
      <div aria-hidden className="absolute inset-0">
        <div className={`absolute inset-0 ${styles.overlay}`} />
        <div className={`absolute inset-0 ${styles.gradient}`} />
      </div>
      <Reveal className="relative mx-auto flex max-w-2xl flex-col items-center gap-4 px-6 text-center">
        <div className={`flex size-11 items-center justify-center rounded-full ${styles.iconWrap}`}>
          <PhoneCall className="size-5" aria-hidden />
        </div>
        <h2 className="font-heading text-[28px] font-bold tracking-tight uppercase sm:text-[36px]">
          {title}
        </h2>
        <p className={`text-[16px] sm:text-[18px] ${styles.description}`}>
          {description}
        </p>
        <Button
          render={<a href={buttonHref} />}
          nativeButton={false}
          size="lg"
          className={`h-13 mt-2 rounded-full px-8 text-base font-semibold ${styles.button}`}
        >
          {buttonLabel}
        </Button>
      </Reveal>
    </section>
  );
}
