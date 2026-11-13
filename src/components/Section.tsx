import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
};

/** Shared section frame: a small label, a serif heading, then content. */
export function Section({ id, label, title, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <p className="text-sm font-medium text-accent">{label}</p>
        <h2 id={headingId} className="mt-3 text-3xl text-ink sm:text-4xl">
          {title}
        </h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
