import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/content";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" label="Selected work" title="Projects">
      <ol className="space-y-20 sm:space-y-28">
        {projects.map((project, index) => {
          const reversed = index % 2 === 1;
          return (
            <li key={project.slug} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
              <div className={reversed ? "md:order-last" : undefined}>
                <ImagePlaceholder label={project.title} />
              </div>

              <div>
                <p className="text-sm text-muted">
                  <span className="tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                  <span aria-hidden="true"> · </span>
                  {project.category}
                </p>
                <h3 className="mt-3 text-2xl text-ink sm:text-3xl">
                  {project.caseStudy ? (
                    <Link href={project.caseStudy} className="hover:text-accent">
                      {project.title}
                    </Link>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="mt-4 leading-relaxed text-muted">{project.summary}</p>

                <dl className="mt-6 space-y-2 border-t border-line pt-6 text-sm">
                  <div className="flex gap-4">
                    <dt className="w-16 shrink-0 text-muted">Role</dt>
                    <dd className="text-ink">{project.role}</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="w-16 shrink-0 text-muted">Tools</dt>
                    <dd className="text-ink">{project.tools}</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="w-16 shrink-0 text-muted">Year</dt>
                    <dd className="text-ink">{project.year}</dd>
                  </div>
                </dl>

                {project.caseStudy ? (
                  <Link
                    href={project.caseStudy}
                    className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
                  >
                    Read the case study
                    <span className="sr-only">: {project.title}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ) : (
                  <p className="mt-6 text-sm text-muted">Case study coming soon</p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
