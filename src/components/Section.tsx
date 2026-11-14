import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  title: string;
  /**
   * "split": label and heading in a narrow left column, content on the right
   * (matches the case study layout). "stacked": heading above full-width content.
   * Both collapse to one column on small screens.
   */
  layout?: "split" | "stacked";
  children: ReactNode;
};

/** Shared section frame: a small label, a serif heading, then content. */
export function Section({ id, label, title, layout = "stacked", children }: SectionProps) {
  const headingId = `${id}-heading`;

  const heading = (
    <div className={layout === "split" ? "lg:sticky lg:top-24 lg:self-start" : undefined}>
      <p className="text-sm font-medium text-accent">{label}</p>
      <h2
        id={headingId}
        className={
          layout === "split"
            ? "mt-3 text-3xl text-ink"
            : "mt-3 text-3xl text-ink sm:text-4xl"
        }
      >
        {title}
      </h2>
    </div>
  );

  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-line">
      {layout === "split" ? (
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 sm:py-28 lg:grid-cols-[14rem_1fr] lg:gap-12">
          {heading}
          <div>{children}</div>
        </div>
      ) : (
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          {heading}
          <div className="mt-12">{children}</div>
        </div>
      )}
    </section>
  );
}
