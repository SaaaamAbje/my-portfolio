import { skillGroups } from "@/lib/content";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" label="Skills and tools" title="What I work with">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.title} className="border-t border-ink pt-4">
            <h3 className="font-sans text-sm font-semibold tracking-normal text-ink">{group.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {group.items.map((item, index) => (
                <li key={`${group.title}-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
