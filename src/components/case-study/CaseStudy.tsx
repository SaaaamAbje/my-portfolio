import Image from "next/image";
import type { ReactNode } from "react";
import { delay } from "@/lib/motion";

/*
  Building blocks for long-form case study pages.
  Text sits in a narrow reading column (max-w-2xl); images can go wider.
*/

type MetaItem = { label: string; value: string };

export function CaseStudyHeader({
  title,
  subtitle,
  meta,
  mark,
}: {
  title: string;
  subtitle: string;
  meta: MetaItem[];
  /** The project's own logo mark (square, transparent), shown beside the title. */
  mark?: string;
}) {
  return (
    <header className="mx-auto max-w-5xl px-6 pb-16 pt-16 sm:pb-20 sm:pt-24">
      <p className="animate-intro text-sm text-muted">Case study</p>
      <div className="animate-intro mt-4 flex items-center gap-4 sm:gap-6">
        {mark && (
          // Decorative: the title next to it already names the project.
          <Image src={mark} alt="" width={256} height={256} preload className="h-12 w-12 shrink-0 sm:h-16 sm:w-16" />
        )}
        <h1 className="text-5xl leading-none text-ink sm:text-7xl">{title}</h1>
      </div>
      <p className="animate-intro mt-6 max-w-3xl font-serif text-2xl leading-snug text-ink sm:text-3xl" style={delay(120)}>
        {subtitle}
      </p>

      <dl style={delay(240)} className="animate-intro mt-14 grid gap-x-10 gap-y-6 border-t border-line pt-8 text-base sm:grid-cols-2 lg:grid-cols-4">
        {meta.map((item) => (
          <div key={item.label}>
            <dt className="text-sm text-muted">{item.label}</dt>
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
        <div data-reveal="" className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm tabular-nums text-muted">{number}</p>
          <h2 id={headingId} className="mt-2 text-2xl text-ink sm:text-3xl">
            {title}
          </h2>
        </div>
        <div data-reveal="" style={delay(120)} className="max-w-2xl space-y-6 text-lg leading-relaxed text-muted">
          {children}
        </div>
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

export type Shot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

/*
  Real screenshots. "wide" figures break out of the reading column to the full
  page width on large screens, so interface text stays legible. Clicking an
  image opens it at full size in a new tab.
*/
const WIDE = "lg:-ml-[17rem] lg:w-[61rem]";

function ShotImage({ shot, sizes }: { shot: Shot; sizes: string }) {
  return (
    <a
      href={shot.src}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden border border-line"
      aria-label={`Open full-size image: ${shot.alt}`}
    >
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        sizes={sizes}
        className="h-auto w-full transition-transform duration-500 ease-out-soft group-hover:scale-[1.01]"
      />
    </a>
  );
}

/** One screenshot with a caption. */
export function Figure({ shot, wide = false }: { shot: Shot; wide?: boolean }) {
  return (
    <figure className={wide ? WIDE : undefined}>
      <ShotImage shot={shot} sizes={wide ? "(min-width: 1024px) 976px, 100vw" : "(min-width: 1024px) 672px, 100vw"} />
      <figcaption className="mt-3 text-sm text-muted">{shot.caption}</figcaption>
    </figure>
  );
}

/** Two screenshots side by side (stacked on small screens), full page width. */
export function FigurePair({ shots }: { shots: [Shot, Shot] }) {
  return (
    <div className={`grid gap-6 sm:grid-cols-2 ${WIDE}`}>
      {shots.map((shot) => (
        <figure key={shot.src}>
          <ShotImage shot={shot} sizes="(min-width: 1024px) 476px, (min-width: 640px) 50vw, 100vw" />
          <figcaption className="mt-3 text-sm text-muted">{shot.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
