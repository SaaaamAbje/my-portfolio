import { about } from "@/lib/content";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" label="About" title="A bit about me">
      <div className="grid gap-12 md:grid-cols-[3fr_2fr] md:gap-16">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <dl className="divide-y divide-line border-y border-line text-sm">
          {about.facts.map((fact) => (
            <div key={fact.label} className="py-4">
              <dt className="text-muted">{fact.label}</dt>
              <dd className="mt-1 text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
