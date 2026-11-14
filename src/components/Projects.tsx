import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects, type Project } from "@/lib/content";
import { ProjectImage } from "./ProjectImage";
import { Section } from "./Section";

/*
  UI/UX projects are featured: large image, alternating sides.
  Development projects follow as a compact, text-led list.
*/
const featured = projects.filter((project) => project.category === "UI/UX");
const development = projects.filter((project) => project.category !== "UI/UX");

function ProjectTitle({ project }: { project: Project }) {
  return project.caseStudy ? (
    <Link href={project.caseStudy} className="hover:text-accent">
      {project.title}
    </Link>
  ) : (
    project.title
  );
}

function CaseStudyLink({ project }: { project: Project }) {
  if (!project.caseStudy) {
    return <p className="mt-6 text-base text-muted">Case study coming soon</p>;
  }
  return (
    <Link
      href={project.caseStudy}
      className="mt-6 inline-flex min-h-11 items-center gap-2 text-base font-medium text-accent underline-offset-4 hover:underline"
    >
      Read the case study
      <span className="sr-only">: {project.title}</span>
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

export function Projects() {
  return (
    <Section id="projects" label="Selected work" title="Projects">
      <h3 className="font-sans text-sm font-semibold tracking-normal text-ink">UI/UX design</h3>
      <ol className="mt-10 space-y-20 sm:space-y-28">
        {featured.map((project, index) => {
          const reversed = index % 2 === 1;
          return (
            <li key={project.slug} className="grid items-center gap-8 md:grid-cols-[3fr_2fr] md:gap-14">
              <div className={reversed ? "md:order-last" : undefined}>
                <ProjectImage
                  project={project}
                  sizes="(min-width: 1024px) 585px, (min-width: 768px) 60vw, 100vw"
                />
              </div>

              <div>
                <p className="text-sm text-muted">
                  <span className="tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                  <span aria-hidden="true"> · </span>
                  {project.category}
                </p>
                <h4 className="mt-3 font-serif text-3xl font-medium text-ink sm:text-4xl">
                  <ProjectTitle project={project} />
                </h4>
                <p className="mt-4 text-lg leading-relaxed text-muted">{project.summary}</p>

                <dl className="mt-6 space-y-2 border-t border-line pt-6 text-base">
                  {[
                    ["Role", project.role],
                    ["Tools", project.tools],
                    ["Year", project.year],
                  ].map(([label, value]) => (
                    <div key={label} className="flex gap-4">
                      <dt className="w-16 shrink-0 pt-0.5 text-sm text-muted">{label}</dt>
                      <dd className="text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>

                <CaseStudyLink project={project} />
              </div>
            </li>
          );
        })}
      </ol>

      <h3 className="mt-24 font-sans text-sm font-semibold tracking-normal text-ink sm:mt-32">
        Development work
      </h3>
      <ul className="mt-6 border-t border-ink">
        {development.map((project) => (
          <li
            key={project.slug}
            className="grid gap-2 border-b border-line py-6 md:grid-cols-[16rem_1fr_9rem] md:items-baseline md:gap-8"
          >
            <div>
              <h4 className="font-serif text-xl font-medium text-ink">
                <ProjectTitle project={project} />
              </h4>
              <p className="mt-1 text-sm text-muted">{project.category}</p>
            </div>
            <p className="leading-relaxed text-muted">{project.summary}</p>
            <p className="text-base text-muted md:text-right">
              <span className="sr-only">Year: </span>
              {project.year}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
