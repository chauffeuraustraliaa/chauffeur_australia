import { Reveal } from "@/components/reveal";

export type StatItem = {
  value: string;
  label: string;
};

const toneStyles = {
  navy: {
    section: "bg-brand-navy text-white",
    description: "text-white/70",
    heading: "text-white",
    card: "border-white/10 bg-white/5 hover:border-brand-gold/50",
    label: "text-white/70",
  },
  ivory: {
    section: "bg-brand-ivory",
    description: "text-muted-foreground",
    heading: "text-brand-ink",
    card: "border-black/5 bg-white hover:border-brand-gold/50",
    label: "text-muted-foreground",
  },
} as const;

export function StatsSection({
  eyebrow,
  title,
  description,
  stats,
  tone = "navy",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  stats: StatItem[];
  tone?: keyof typeof toneStyles;
}) {
  const styles = toneStyles[tone];

  return (
    <section className={`${styles.section} py-16`}>
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <span className="block text-center text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
            {eyebrow}
          </span>
          <h2
            className={`font-heading mt-3 text-center text-[28px] font-bold tracking-tight uppercase sm:text-[32px] ${styles.heading}`}
          >
            {title}
          </h2>
          {description && (
            <p
              className={`mx-auto mt-3 max-w-2xl text-center ${styles.description}`}
            >
              {description}
            </p>
          )}
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center gap-1 rounded-2xl border px-4 py-6 text-center shadow-[0_8px_16px_-8px_rgba(11,42,58,0.15)] transition-colors duration-300 ${styles.card}`}
              >
                <dt className={`font-heading order-2 text-sm font-medium ${styles.label}`}>
                  {stat.label}
                </dt>
                <dd className="font-heading order-1 text-3xl font-bold text-brand-gold">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
