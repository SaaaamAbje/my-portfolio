import type { ReactNode } from "react";

/*
  Building blocks for long-form case study pages.
  Text sits in a narrow reading column (max-w-2xl); images can go wider.
*/

type MetaItem = { label: string; value: string };

export function CaseStudyHeader({
  title,
  subtitle,
  meta,
}: {
  title: string;
  subtitle: string;
  meta: MetaItem[];
}) {
  return (
    <header className="mx-auto max-w-5xl px-6 pb-16 pt-16 sm:pb-20 sm:pt-24">
      <p className="text-sm text-muted">Case study</p>
      <h1 className="mt-4 text-5xl leading-none text-ink sm:text-7xl">{title}</h1>
      <p className="mt-6 max-w-3xl font-serif text-2xl leading-snug text-ink sm:text-3xl">{subtitle}</p>

      <dl className="mt-14 grid gap-x-10 gap-y-6 border-t border-line pt-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
        {meta.map((item) => (
          <div key={item.label}>
            <dt className="text-muted">{item.label}</dt>
            <dd className="mt-1 text-ink">{item.value}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}

/** A numbered case study section: number and heading on the left on wide screens, body on the right. */
export function CaseSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-line">
      <div className="mx-auto grid max-w-5xl gap-6 px-6 py-16 sm:py-20 lg:grid-cols-[14rem_1fr] lg:gap-12">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm tabular-nums text-muted">{number}</p>
          <h2 id={headingId} className="mt-2 text-2xl text-ink sm:text-3xl">
            {title}
          </h2>
        </div>
        <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-muted">{children}</div>
      </div>
    </section>
  );
}

/** Sub-heading inside a section. */
export function SubHeading({ children }: { children: ReactNode }) {
  return <h3 className="pt-4 font-sans text-base font-semibold tracking-normal text-ink">{children}</h3>;
}

/** Bulleted list styled for the reading column. */
export function List({ items, ordered = false }: { items: ReactNode[]; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={`space-y-2 pl-6 ${ordered ? "list-decimal" : "list-disc"} marker:text-muted`}>
      {items.map((item, index) => (
        <li key={index} className="pl-1">
          {item}
        </li>
      ))}
    </Tag>
  );
}

/** Highlighted statement, e.g. the design challenge. */
export function Callout({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-l-2 border-accent py-1 pl-6">
      <p className="text-sm font-medium text-accent">{label}</p>
      <p className="mt-2 font-serif text-2xl leading-snug text-ink">{children}</p>
    </div>
  );
}

/** Content the author still has to supply. Visibly a to-do, never presented as finished work. */
export function PendingNote({ children }: { children: ReactNode }) {
  return <p className="border border-dashed border-line px-4 py-3 text-base text-muted">{children}</p>;
}

/** Strong inline text in the body colour. */
export function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}
