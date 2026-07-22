import { CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/reveal";

const toneStyles = {
  white: {
    section: "bg-white",
    card: "bg-white border border-black/5",
    heading: "text-brand-ink",
    body: "text-muted-foreground",
    highlight: "text-brand-ink",
  },
  ivory: {
    section: "bg-brand-ivory",
    card: "bg-white border border-black/5",
    heading: "text-brand-ink",
    body: "text-muted-foreground",
    highlight: "text-brand-ink",
  },
  navy: {
    section: "bg-brand-navy-deep",
    card: "bg-brand-navy border border-white/10",
    heading: "text-white",
    body: "text-white/70",
    highlight: "text-white/80",
  },
} as const;

export function ContentBlock({
  eyebrow,
  title,
  titleAs = "h2",
  paragraphs,
  highlights,
  tone = "white",
  id,
}: {
  eyebrow: string;
  title: string;
  titleAs?: "h2" | "h3";
  paragraphs: string[];
  highlights?: string[];
  tone?: keyof typeof toneStyles;
  id?: string;
}) {
  const Heading = titleAs;
  const styles = toneStyles[tone];

  return (
    <section id={id} className={`${styles.section} py-20`}>
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="text-center">
            <span className="block text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
              {eyebrow}
            </span>
            <Heading
              className={`font-heading mt-3 text-[28px] font-bold tracking-tight uppercase sm:text-[36px] ${styles.heading}`}
            >
              {title}
            </Heading>
          </div>
          <div
            className={`mt-10 rounded-[20px] p-8 shadow-[0_8px_16px_-8px_rgba(11,42,58,0.15),0_30px_60px_-24px_rgba(11,42,58,0.35)] sm:p-10 ${styles.card}`}
          >
            <div className="flex flex-col gap-4">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-[17px] leading-8 ${styles.body}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {highlights && highlights.length > 0 && (
              <ul
                className={`mt-6 grid grid-cols-1 gap-3 border-t pt-6 sm:grid-cols-2 ${
                  tone === "navy" ? "border-white/10" : "border-black/5"
                }`}
              >
                {highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className={`flex items-start gap-2.5 text-sm ${styles.highlight}`}
                  >
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-brand-gold"
                      aria-hidden
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
