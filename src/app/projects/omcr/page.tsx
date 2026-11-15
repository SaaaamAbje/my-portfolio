import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import {
  CaseSection,
  CaseStudyHeader,
  Figure,
  List,
  type Shot,
  Strong,
} from "@/components/case-study/CaseStudy";
import { ProjectImage } from "@/components/ProjectImage";
import { SiteHeader } from "@/components/SiteHeader";
import { projects } from "@/lib/content";
import { delay } from "@/lib/motion";

export const metadata: Metadata = {
  title: "OMCR Document Request System case study",
  description:
    "A bilingual web system for the Office of the Municipal Civil Registrar in Rosario, Batangas: online document requests, appointments and status tracking, with a secure staff dashboard.",
};

/*
  OMCR Document Request System case study. All facts come from Sam's project
  brief (November 2026). Keep the status line accurate: the office has not
  yet confirmed regular use. The admin login screenshot is left out until
  permission to show the staff photo is confirmed.
*/

const omcr = projects.find((project) => project.slug === "omcr-document-request-system")!;
const REPO = "https://github.com/SaaaamAbje/OMCR-Document-Request-System";

const shot = (file: string, alt: string, caption: string): Shot => ({
  src: `/projects/omcr/${file}`,
  width: 1400,
  height: 840,
  alt,
  caption,
});

const screens = {
  request: shot(
    "request.png",
    "Submit a Document Request form with personal information fields, beside panels listing available documents, office hours and filing fees",
    "Request form. Residents enter their details and choose a document; the side panels list available documents, office hours and fees.",
  ),
  appointment: shot(
    "appointment.png",
    "Book an Appointment screen: a November 2026 calendar with past dates and Sundays greyed out, an appointment summary and visit reminders",
    "Appointment booking. Past dates and Sundays are blocked, and the summary updates as a date and time are chosen.",
  ),
  track: shot(
    "track.png",
    "Track Your Request screen: a field for the OMCR control number with a Search button, beside an empty request processing timeline",
    "Request tracking. Residents enter their OMCR control number to see where their request is.",
  ),
};

export default function OmcrCaseStudy() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <div className="mx-auto max-w-5xl px-6 pt-8">
          <Link
            href="/#projects"
            className="group inline-flex min-h-11 items-center gap-2 text-base text-muted transition-colors duration-200 hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true" />
            All projects
          </Link>
        </div>

        <CaseStudyHeader
          title="OMCR Document Request System"
          subtitle="Online civil registry requests, appointments and tracking for the Office of the Municipal Civil Registrar, Rosario, Batangas"
          meta={[
            { label: "Project Type", value: "System Development · Web Application" },
            { label: "For", value: "Office of the Municipal Civil Registrar (OMCR), Rosario, Batangas" },
            { label: "Platform", value: "Web: public portal and staff dashboard" },
            { label: "Role", value: "Solo developer, with AI-assisted development (Claude)" },
            { label: "Tools", value: "HTML, CSS, JavaScript, Supabase, Vercel" },
            { label: "Duration", value: "June–November 2026" },
            { label: "Status", value: "Deployed; regular use not yet confirmed by the office" },
          ]}
        />

        <div className="animate-intro mx-auto max-w-5xl px-6 pb-16 sm:pb-20" style={delay(360)}>
          <ProjectImage project={omcr} sizes="(min-width: 1024px) 976px, 100vw" preload />
          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex min-h-11 items-center gap-1 text-base font-medium text-ink transition-colors duration-200 hover:text-accent"
          >
            View the code on GitHub
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        <CaseSection id="problem" number="01" title="Problem">
          <p>
            Residents of Rosario had to visit the Office of the Municipal Civil Registrar in person
            just to file a request for civil registry documents. After filing, they had no way to
            check its status, and staff had no single place to track request volume or progress.
          </p>
        </CaseSection>

        <CaseSection id="solution" number="02" title="Solution">
          <p>I built a web system with two interfaces:</p>
          <List
            items={[
              <>
                <Strong>Public portal:</Strong> residents submit requests, book appointments, track
                status with a control number and cancel pending requests, in English or Filipino.
              </>,
              <>
                <Strong>Staff dashboard:</Strong> office staff manage requests, view analytics and
                review an audit trail in one secure place.
              </>,
            ]}
          />
          <p>
            The system is deployed on Vercel with a Supabase backend. The office has not yet
            confirmed regular use.
          </p>
        </CaseSection>

        <CaseSection id="role" number="03" title="My Role">
          <p>I worked solo, using Claude for AI-assisted development. My work covered:</p>
          <List
            items={[
              "Defining the requirements and deciding which features mattered most for Philippine residents",
              "Testing every iteration",
              "Configuring Supabase and Vercel",
              <>
                Managing the repository with a branch convention (<code className="text-base">feat/</code>,{" "}
                <code className="text-base">fix/</code>, <code className="text-base">refactor/</code>,{" "}
                <code className="text-base">chore/</code>, <code className="text-base">docs/</code>)
              </>,
              "Writing the documentation: a README, changelog, contributing guide, user manual, technical reference, operations and monitoring guide, and a non-technical summary for the office",
            ]}
          />
        </CaseSection>

        <CaseSection id="stack" number="04" title="Tech Stack">
          <dl className="divide-y divide-line border-y border-line">
            {[
              ["Front end", "Vanilla HTML, CSS and JavaScript, with no framework and no build step"],
              ["Back end", "Supabase: Postgres, Row Level Security, Storage, Auth, Realtime, and Edge Functions in Deno/TypeScript"],
              ["Hosting", "Vercel static hosting with security headers"],
              ["Languages", "A custom translation layer of about 120 English and Filipino keys"],
            ].map(([term, text]) => (
              <div key={term} className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6">
                <dt className="text-sm font-medium text-ink sm:pt-1">{term}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
        </CaseSection>

        <CaseSection id="features" number="05" title="Key Features">
          <Figure wide shot={screens.request} />
          <List
            items={[
              "A request form with government ID and selfie upload. Images are compressed in the browser to a maximum of 720px at JPEG quality 0.75.",
              "Printable request and appointment slips, and automatic confirmation and status emails in both languages.",
              "Residents can cancel their own Pending request, giving a reason.",
            ]}
          />
          <Figure wide shot={screens.appointment} />
          <List
            items={[
              "An appointment calendar with live availability: 8 slots a day, up to 3 bookings per slot, and Sundays and past dates blocked.",
              "A re-check just before booking, so two people can't take the last place at the same moment.",
            ]}
          />
          <Figure wide shot={screens.track} />
          <List
            items={[
              "Tracking by control number (OMCR-XXXXXXXX). The format leaves out 0, O, 1 and I, which are easily confused.",
            ]}
          />
          <p>
            <Strong>Staff dashboard:</Strong>
          </p>
          <List
            items={[
              "Live search and filtering, with inline status updates: Pending, Processing, Ready for Pickup, Completed, Cancelled and Absent",
              "Real-time sync across devices",
              "Walk-in request entry at the counter, and staff notes on each request",
              "Identity photo review in a lightbox",
              "Analytics with custom canvas bar and pie charts, and CSV export",
              "An appointment calendar where “mark absent” frees the slot automatically",
              "An audit log of who changed what and when, including appointment events",
            ]}
          />
        </CaseSection>

        <CaseSection id="security" number="06" title="Security Decisions">
          <List
            items={[
              <>
                <Strong>Database rules (Row Level Security):</Strong> anonymous visitors can only
                submit a request, look one up by its exact control number, and cancel their own
                pending request. Only signed-in staff can list or edit records.
              </>,
              <>
                <Strong>Identity photos:</Strong> stored in a private bucket. Staff see them through
                signed links that expire after 600 seconds.
              </>,
              <>
                <Strong>Staff accounts:</Strong> each staff member has their own Supabase Auth
                account, replacing an early shared password. Sessions time out after 30 idle minutes,
                with a warning at 25, and logging out ends the session on the server.
              </>,
              <>
                <Strong>Rate limiting:</Strong> combines a browser fingerprint with a Postgres
                function. If that check itself fails, requests are still let through, so an outage
                doesn&rsquo;t lock out legitimate residents.
              </>,
              <>
                <Strong>Input sanitization and a Content Security Policy</Strong> add further
                protection.
              </>,
            ]}
          />
        </CaseSection>

        <CaseSection id="challenges" number="07" title="Challenges and What I Learned">
          <List
            items={[
              <>
                <Strong>Moving from browser storage to a cloud backend</Strong> while keeping both apps
                working taught me to migrate in small, testable steps.
              </>,
              <>
                <Strong>A login card was hiding its background photo.</Strong> The cause turned out to
                be <code className="text-base">backdrop-filter</code> on the card, not the overlay,
                which reminded me to confirm a cause before changing code.
              </>,
              <>
                <Strong>An audit-log foreign key would have silently failed for appointment
                records.</Strong> I now check that logging works for every type of record.
              </>,
              <>
                <Strong>I postponed moving to React, Vite and TypeScript</Strong> and wrote down why,
                so the working system could ship first.
              </>,
            ]}
          />
        </CaseSection>

        <CaseSection id="next-steps" number="08" title="Next Steps">
          <List
            items={[
              "SMS notifications through Semaphore, for residents without email",
              "Split the two large single-file apps into separate CSS and JavaScript modules",
              "Migrate to React, Vite, Tailwind and TypeScript",
              "Move email sending to Resend for production volume",
            ]}
          />
        </CaseSection>

        <section aria-labelledby="takeaway-heading" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
            <h2 id="takeaway-heading" className="text-sm font-medium text-accent">
              Project Takeaway
            </h2>
            <p className="mt-4 max-w-3xl font-serif text-2xl leading-snug text-ink sm:text-3xl">
              The OMCR Document Request System moves civil registry requests online for Rosario
              residents, while keeping their identity documents private and giving staff one place
              to manage and audit every request.
            </p>

            <div className="mt-16 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/projects/terrra"
                className="group inline-flex min-h-11 items-center gap-2 text-base text-muted transition-colors duration-200 hover:text-ink"
              >
                Next Project: <span className="font-medium text-ink">Terrra</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link
                href="/#projects"
                className="group inline-flex min-h-11 items-center gap-2 text-base font-medium text-ink transition-colors duration-200 hover:text-accent"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true" />
                Back to all projects
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
