import { Minus, Plus } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/reveal";

export type FAQItem = {
  question: string;
  answer: string;
};

export function ServiceFAQ({
  eyebrow,
  title,
  faqs,
  image,
  imageAlt,
  tone = "white",
}: {
  eyebrow: string;
  title: string;
  faqs: FAQItem[];
  image?: string;
  imageAlt?: string;
  tone?: "white" | "ivory";
}) {
  const sectionBg = tone === "ivory" ? "bg-brand-ivory" : "bg-white";
  const list = (
    <div className="mt-8 flex flex-col">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group border-b border-dashed border-border py-4 first:pt-0"
        >
          <summary className="flex cursor-pointer list-none items-center gap-3 text-base font-semibold text-brand-navy">
            <span className="relative flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-cream text-brand-navy transition-colors duration-300 group-open:bg-brand-gold group-open:text-brand-navy-deep">
              <Plus className="size-3.5 group-open:hidden" aria-hidden />
              <Minus className="hidden size-3.5 group-open:block" aria-hidden />
            </span>
            <h3 className="font-heading text-base">{faq.question}</h3>
          </summary>
          <p className="mt-2 pl-9 text-sm leading-6 text-muted-foreground">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );

  if (image) {
    return (
      <section id="faq" className={`${sectionBg} py-[120px]`}>
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 lg:grid-cols-[3fr_2fr] lg:items-start">
          <div>
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
                {eyebrow}
              </span>
              <h2 className="font-heading mt-3 text-[32px] font-bold tracking-tight text-brand-ink uppercase sm:text-[42px]">
                {title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>{list}</Reveal>
          </div>
          <Reveal delay={0.2}>
            <Image
              src={image}
              alt={imageAlt ?? ""}
              width={420}
              height={420}
              className="mx-auto w-full max-w-sm object-contain mix-blend-multiply lg:mt-16"
            />
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="faq" className="bg-white py-[120px]">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <span className="block text-center text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
            {eyebrow}
          </span>
          <h2 className="font-heading mt-3 text-center text-[32px] font-bold tracking-tight text-brand-ink uppercase sm:text-[42px]">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>{list}</Reveal>
      </div>
    </section>
  );
}
