export type TocItem = {
  id: string;
  label: string;
};

export function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <nav
      aria-label="Table of contents"
      className="top-28 rounded-[20px] border border-border bg-white p-6 shadow-[0_8px_16px_-8px_rgba(11,42,58,0.1)] lg:sticky"
    >
      <span className="text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
        On This Page
      </span>
      <ol className="mt-4 flex flex-col gap-1 text-sm">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex items-baseline gap-2 rounded-lg px-2 py-1.5 text-brand-ink/80 transition-colors hover:bg-brand-cream hover:text-brand-navy"
            >
              <span className="text-xs text-brand-gold-hover">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
