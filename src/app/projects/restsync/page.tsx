import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  Callout,
  CaseSection,
  CaseStudyHeader,
  Figure,
  FigurePair,
  List,
  PendingNote,
  type Shot,
  Strong,
  SubHeading,
} from "@/components/case-study/CaseStudy";
import { ProjectImage } from "@/components/ProjectImage";
import { SiteHeader } from "@/components/SiteHeader";
import { projects } from "@/lib/content";
import { delay } from "@/lib/motion";

export const metadata: Metadata = {
  title: "RestSync case study",
  description:
    "A web-based funeral service booking and management system for local Philippine funeral homes, with conflict-free chapel scheduling, live add-on inventory and itemized billing.",
};

/*
  RestSync case study.
  Sources: the RestSync capstone project proposal, and the code in
  github.com/SaaaamAbje/restsync (checked November 2026).
  What is built: a front-end prototype of the client and admin portals in
  HTML, CSS and JavaScript, running on sample data in the browser. The Node.js
  backend, database and staff/client evaluation are planned, not built.
  Screenshots are real captures of that prototype.
*/

const restsync = projects.find((project) => project.slug === "restsync")!;

const DIR = "/projects/restsync";
const shot = (file: string, width: number, height: number, alt: string, caption: string): Shot => ({
  src: `${DIR}/${file}`,
  width,
  height,
  alt,
  caption,
});

const screens = {
  customize: shot(
    "client-customize.png", 2880, 1800,
    "Add-on customizer: a list of add-ons with live stock labels and quantity steppers, beside a running arrangement estimate",
    "Add-on customizer. Each add-on shows live stock, out-of-stock items are disabled, and the estimate updates as you choose.",
  ),
  schedule: shot(
    "client-schedule.png", 2880, 1800,
    "Scheduling screen: a September 2026 calendar, three chapels with availability, and service start times marked available or fully booked",
    "Scheduling. Families pick a date, chapel and start time; choosing a booked chapel or time slot shows a conflict warning instead of booking it.",
  ),
  family: shot(
    "client-family.png", 2880, 1180,
    "Family collaboration screen: invited relatives with their roles and approval status, and a notes thread",
    "Family collaboration. Local and overseas relatives are invited to review the arrangement and leave notes.",
  ),
  billing: shot(
    "client-billing.png", 2880, 1800,
    "Official billing statement with itemized package and add-on lines, settlement policy, subtotal and total",
    "Itemized billing statement, generated from the selected package and add-ons.",
  ),
  signoff: shot(
    "client-signoff.png", 2880, 1042,
    "Digital sign-off screen: arrangement terms with a consent checkbox, and a signature panel with typed and drawn options",
    "Remote sign-off. Families agree to the terms and sign by typing or drawing their signature.",
  ),
  tracking: shot(
    "client-tracking.png", 2880, 1712,
    "Live tracking screen: a vertical list of arrangement milestones with times and locations, and the current stage highlighted",
    "Live tracking of the arrangement, stage by stage, from intake to interment.",
  ),
  dashboard: shot(
    "admin-dashboard.png", 2880, 1800,
    "Director operations dashboard: chapel occupancy, active arrangements, pending actions and monthly revenue, with today's vigils and alerts",
    "Admin dashboard: occupancy, active arrangements, items needing action, and today's vigils.",
  ),
  calendar: shot(
    "admin-calendar.png", 2880, 1438,
    "Master calendar: chapels and the hearse fleet as rows, days as columns, with bookings and a sanitization buffer block",
    "Multi-chapel and fleet calendar, including the sanitization buffer between vigils.",
  ),
  inventory: shot(
    "admin-inventory.png", 2880, 1800,
    "Inventory table of caskets, florals, fleet and equipment with unit prices, stock, allocations, status and stock adjusters",
    "Inventory management with stock adjusters and low-stock status.",
  ),
  dossier: shot(
    "admin-dossier.png", 2880, 1800,
    "Arrangement dossier: specifications, assigned staff, a legal clearance checklist, and the mortuary care log",
    "Arrangement dossier with the legal documents checklist and the director's care log.",
  ),
};

const relatedSystems = [
  {
    name: "Villacrusis Online Funeral Services (2021)",
    has: "Casket and package browsing, online payment",
    gap: "Single provider, small test sample, dated stack",
  },
  {
    name: "St. Peter Celerian Molave Funeral MIS (2024)",
    has: "Coffin catalog, dynamic pricing, inventory",
    gap: "No real-time staff or vehicle tracking",
  },
  {
    name: "GrievEase (2025)",
    has: "Inter-branch POS, AI chatbot, demand analytics",
    gap: "No booking or scheduling module",
  },
  {
    name: "Karpe et al. Funeral Management System (2026)",
    has: "Scheduling, hearse and personnel assignment, payment tracking",
    gap: "No inventory reordering, no inter-branch POS",
  },
];

export default function RestSyncCaseStudy() {
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
          title="RestSync"
          subtitle="An Integrated Funeral Operations and Client Intake Management System for Local Funeral Homes, Using Automated Scheduling"
          meta={[
            { label: "Project Type", value: "System Development · Capstone Project · Web Application" },
            { label: "Institution", value: "De La Salle Lipa, College of Information Technology and Engineering" },
            { label: "Platform", value: "Web: client portal and admin portal" },
            { label: "Role", value: "Sole proponent" },
            { label: "Tools", value: "HTML5, CSS3, JavaScript (ES6+), HTML5 Canvas API" },
            { label: "Year", value: "2026" },
            { label: "Status", value: "Working front-end prototype" },
          ]}
        />

        <div className="animate-intro mx-auto max-w-5xl px-6 pb-16 sm:pb-20" style={delay(360)}>
          <ProjectImage project={restsync} sizes="(min-width: 1024px) 976px, 100vw" preload />
        </div>

        <CaseSection id="overview" number="01" title="Overview">
          <p>
            RestSync is a web-based funeral service booking and management system for local
            Philippine funeral homes. It brings chapel scheduling, package customization, add-on
            inventory and itemized billing into one platform.
          </p>
          <p>
            It has two sides: a <Strong>client portal</Strong> where families, including relatives
            abroad, can arrange a service remotely, and an <Strong>admin portal</Strong> where
            parlor staff manage chapels, inventory, cases and billing.
          </p>
          <p>
            I proposed it as my capstone project and built the prototype of both portals on my own.
          </p>
        </CaseSection>

        <CaseSection id="problem" number="02" title="The Problem">
          <p>
            Many small and medium-sized funeral parlors in the Philippines still run on paper:
            manual logbooks, paper forms and phone calls, partly because enterprise software costs
            too much. The proposal identified three problems that follow from this:
          </p>
          <List
            items={[
              <>
                <Strong>Families decide from a distance.</Strong> Out-of-town decision-makers rely on
                repeated phone calls to book consultations and choose packages, which delays
                decisions and rushes arrangements.
              </>,
              <>
                <Strong>Add-ons are tracked on paper.</Strong> Customizations recorded on forms lead
                to inaccurate add-on inventory, items missing during viewings, delayed chapel setups
                and inaccurate billing.
              </>,
              <>
                <Strong>Chapels are booked in logbooks.</Strong> Manual reservations risk
                double-booking, overlapping viewing schedules and poor visibility of real-time
                availability.
              </>,
            ]}
          />
          <p>
            For grieving families, these errors turn into delays, distress and confusion over costs
            at an already difficult time.
          </p>
          <Callout label="Goal">
            Design and develop a web-based funeral management platform that centralizes chapel
            scheduling, automates add-on inventory tracking, and gives out-of-town families a
            transparent way to book remotely.
          </Callout>
        </CaseSection>

        <CaseSection id="research" number="03" title="Review of Existing Systems">
          <p>
            I reviewed 14 existing systems and studies across five themes: web-based funeral
            booking systems, mobile and enterprise platforms, culturally specific funeral apps,
            cemetery records systems, and policy and adoption research.
          </p>
          <SubHeading>Closest existing systems</SubHeading>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[34rem] border-collapse text-left text-base">
              <thead>
                <tr className="border-b border-ink text-sm text-ink">
                  <th scope="col" className="py-3 pr-4 font-semibold">System</th>
                  <th scope="col" className="py-3 pr-4 font-semibold">What it does</th>
                  <th scope="col" className="py-3 font-semibold">What it lacks</th>
                </tr>
              </thead>
              <tbody>
                {relatedSystems.map((row) => (
                  <tr key={row.name} className="border-b border-line align-top">
                    <th scope="row" className="py-3 pr-4 font-normal text-ink">{row.name}</th>
                    <td className="py-3 pr-4">{row.has}</td>
                    <td className="py-3">{row.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Callout label="The gap">
            No reviewed system combines real-time, conflict-free scheduling with automated, itemized
            billing and remote sign-off in one system built for a local Philippine funeral parlor.
          </Callout>
        </CaseSection>

        <CaseSection id="objectives" number="04" title="Objectives">
          <List
            ordered
            items={[
              "A centralized scheduling system with conflict detection, resource allocation tracking and role-based user management.",
              "An interactive package customization module with automated inventory syncing, to prevent missing viewing items and billing errors.",
              "A web platform with a product catalog, transparent package pricing and centralized scheduling, so out-of-town decision-makers can arrange services remotely.",
            ]}
          />
        </CaseSection>

        <CaseSection id="architecture" number="05" title="How It Works">
          <p>
            Two user groups, families and parlor staff, each get their own portal. In the full
            design, both feed into a central engine that enforces the business rules: a
            conflict-free 2-hour buffer between bookings, real-time inventory, and automatic 12%
            BIR VAT. Every arrangement then moves through seven tracked stages, from mortuary care
            to interment.
          </p>
          <Figure
            wide
            shot={shot(
              "operational-diagram.png", 1141, 736,
              "Operational diagram: Client and Family users go to the Client Web Portal and Digital Sign-Off Module; Parlor Staff go to the Admin Management Portal and Dossier and Logistics Manager; both connect to the RestSync Central Engine and Database, which feeds 7-Stage Live Tracking and Fulfillment",
              "Operational diagram from the proposal. The central engine and database (Node.js) are planned; the current prototype runs in the browser.",
            )}
          />
        </CaseSection>

        <CaseSection id="client-portal" number="06" title="Client Portal">
          <p>
            Families move through the arrangement step by step: choose a package, add extras,
            schedule, invite relatives, review the bill and sign.
          </p>
          <Figure wide shot={screens.customize} />
          <Figure wide shot={screens.schedule} />
          <FigurePair shots={[screens.billing, screens.signoff]} />
          <FigurePair shots={[screens.family, screens.tracking]} />
          <p>
            The 30% initial deposit is calculated automatically, prices are shown VAT-inclusive at
            the 12% BIR rate, and the signature pad uses the HTML5 Canvas API so families can sign
            with a mouse or by touch.
          </p>
        </CaseSection>

        <CaseSection id="admin-portal" number="07" title="Admin Portal">
          <p>
            Parlor staff get one place to run daily operations: what is happening today, which
            chapels and vehicles are free, what is running low, and where each case stands.
          </p>
          <Figure wide shot={screens.dashboard} />
          <Figure wide shot={screens.calendar} />
          <FigurePair shots={[screens.inventory, screens.dossier]} />
        </CaseSection>

        <CaseSection id="scope" number="08" title="Scope">
          <p>To keep the project focused, the proposal leaves out:</p>
          <List
            items={[
              "Multi-branch chain operations",
              "Third-party payment gateways (credit card or e-wallet)",
              "Automated death certificate filing with civil registrars",
              "RFID or barcode hardware, vehicle GPS tracking and embalming chemical tracking",
              "A native iOS or Android app; RestSync runs in a standard web browser",
            ]}
          />
        </CaseSection>

        <CaseSection id="status" number="09" title="Status and Next Steps">
          <p>
            <Strong>Built:</Strong> a working front-end prototype of both portals, covering the
            full client flow and the main admin screens. It runs on sample data in the browser, so
            changes are not saved between visits.
          </p>
          <p>
            <Strong>Next, as planned in the proposal:</Strong>
          </p>
          <List
            items={[
              "A Node.js backend and database, so bookings, stock and billing are stored and shared between the two portals.",
              "Evaluation with funeral parlor staff and client families.",
            ]}
          />
          <PendingNote>[Add evaluation results once the system has been tested with staff and families.]</PendingNote>
          <PendingNote>[Add a link to the live prototype, if it is deployed.]</PendingNote>
        </CaseSection>

        <CaseSection id="reflection" number="10" title="Reflection">
          <PendingNote>
            [Add what you learned building RestSync on your own: for example, designing for a
            sensitive context, structuring a large single-page app, or deciding what to leave out of
            scope.]
          </PendingNote>
        </CaseSection>

        <section aria-labelledby="takeaway-heading" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
            <h2 id="takeaway-heading" className="text-sm font-medium text-accent">
              Project Takeaway
            </h2>
            <p className="mt-4 max-w-3xl font-serif text-2xl leading-snug text-ink sm:text-3xl">
              RestSync is designed to bring a funeral home&rsquo;s scheduling, inventory and billing
              into one system, so families can arrange a service remotely and staff no longer
              reconcile bookings and add-ons by hand.
            </p>

            <div className="mt-16 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/projects/omcr"
                className="group inline-flex min-h-11 items-center gap-2 text-base text-muted transition-colors duration-200 hover:text-ink"
              >
                Next Project: <span className="font-medium text-ink">OMCR Document Request System</span>
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
