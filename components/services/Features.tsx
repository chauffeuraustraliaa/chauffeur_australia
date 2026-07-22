import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/reveal";

export type FeatureItem = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const toneStyles = {
  navy: {
    section: "bg-brand-navy-deep text-white",
    card: "border-white/10 hover:border-brand-gold/50",
    ghostNumber: "text-white/5",
    icon: "text-brand-gold",
    title: "text-white",
    description: "text-white/60",
  },
  ivory: {
    section: "bg-brand-ivory",
    card: "border-black/5 bg-white hover:border-brand-gold/50",
    ghostNumber: "text-black/5",
    icon: "text-brand-gold",
    title: "text-brand-ink",
    description: "text-muted-foreground",
  },
  white: {
    section: "bg-white",
    card: "border-border bg-brand-cream hover:border-brand-gold/50",
    ghostNumber: "text-black/5",
    icon: "text-brand-gold",
    title: "text-brand-ink",
    description: "text-muted-foreground",
  },
} as const;

export function Features({
  eyebrow,
  title,
  items,
  tone = "navy",
}: {
  eyebrow: string;
  title: string;
  items: FeatureItem[];
  tone?: keyof typeof toneStyles;
}) {
  const styles = toneStyles[tone];

  return (
    <section className={`${styles.section} py-[120px]`}>
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <span className="block text-center text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
            {eyebrow}
          </span>
          <h2
            className={`font-heading mt-3 text-center text-[32px] font-bold tracking-tight uppercase sm:text-[42px] ${
              tone === "navy" ? "" : "text-brand-ink"
            }`}
          >
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-[20px] border p-6 transition-colors duration-300 ${styles.card}`}
              >
                <span
                  className={`font-heading absolute -top-3 -right-1 text-6xl font-bold ${styles.ghostNumber}`}
                >
                  {item.number}
                </span>
                <item.icon
                  className={`relative size-8 ${styles.icon}`}
                  aria-hidden
                />
                <h3
                  className={`font-heading relative mt-4 text-lg font-semibold ${styles.title}`}
                >
                  {item.title}
                </h3>
                <p className={`relative mt-2 text-sm leading-6 ${styles.description}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
