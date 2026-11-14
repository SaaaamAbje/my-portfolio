import { about } from "@/lib/content";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" label="About" title="A bit about me" layout="split">
      <div className="max-w-2xl space-y-12">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <dl className="grid border-t border-line text-sm sm:grid-cols-2 sm:gap-x-10">
          {about.facts.map((fact) => (
            <div key={fact.label} className="border-b border-line py-4">
              <dt className="text-muted">{fact.label}</dt>
              <dd className="mt-1 text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
