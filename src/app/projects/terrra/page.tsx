import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  Callout,
  CaseSection,
  CaseStudyHeader,
  List,
  PendingNote,
  Strong,
  SubHeading,
} from "@/components/case-study/CaseStudy";
import { BrandSheet } from "@/components/case-study/BrandSheet";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ProjectImage } from "@/components/ProjectImage";
import { SiteHeader } from "@/components/SiteHeader";
import { projects } from "@/lib/content";
import { delay } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Terrra case study",
  description:
    "Designing a community-based waste management and environmental awareness application for Barangay Mataas na Lupa, Lipa City, Batangas.",
};

/*
  Terrra case study. Bracketed text and image placeholders are still to be
  filled in. Replace each ImagePlaceholder with a real image when screenshots
  are ready.
*/

const terrra = projects.find((project) => project.slug === "terrra")!;

const findings = [
  { indicator: "Awareness of waste management", mean: "3.02", interpretation: "High" },
  { indicator: "Concern about health impacts", mean: "3.65", interpretation: "Very High" },
  { indicator: "Concern about environmental pollution", mean: "3.48", interpretation: "Very High" },
  { indicator: "Household waste segregation", mean: "3.23", interpretation: "High" },
  { indicator: "Participation in community clean-ups", mean: "2.32", interpretation: "Low" },
  { indicator: "Overall acceptability of Terrra", mean: "3.93", interpretation: "Very High" },
];

const showcaseScreens = [
  "Home Screen",
  "[Add another completed screen]",
  "Educational Resources",
  "Community Leaderboards",
  "Communitree",
  "Other completed screens from your actual design",
];

export default function TerrraCaseStudy() {
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
          title="Terrra"
          mark="/projects/terrra/mark.png"
          subtitle="Designing a Community-Based Waste Management and Environmental Awareness Application"
          meta={[
            { label: "Project Type", value: "UI/UX Design · Academic Research · Mobile Application Concept · Senior High School Capstone" },
            { label: "Project Location", value: "Barangay Mataas na Lupa, Lipa City, Batangas" },
            { label: "Platform", value: "Mobile Application" },
            { label: "Role", value: "UI/UX Designer" },
            { label: "Tools", value: "[Figma / Other Tools Used]" },
            { label: "Project Duration", value: "Academic Year 2023–2024" },
            { label: "Team", value: "Group of 9 (SHS capstone)" },
          ]}
        />

        <div className="animate-intro mx-auto max-w-5xl px-6 pb-16 sm:pb-20" style={delay(360)}>
          <ProjectImage project={terrra} sizes="(min-width: 1024px) 976px, 100vw" preload />
        </div>

        <CaseSection id="overview" number="01" title="Project Overview">
          <p>
            Terrra is a proposed community-based waste management and environmental education
            application designed to encourage responsible waste disposal, improve waste segregation
            practices, and strengthen community participation in environmental initiatives.
          </p>
          <p>
            The project explores how digital technology can help residents become more informed
            about waste management while providing accessible ways to participate in community-based
            environmental activities.
          </p>
          <p>
            Through research and proposed digital solutions, Terrra aims to make environmental
            awareness more engaging, accessible, and community-oriented.
          </p>
        </CaseSection>

        <CaseSection id="problem" number="02" title="The Problem">
          <p>
            Improper waste disposal remains a concern in local communities. In Barangay Mataas na
            Lupa, Lipa City, the research identified several challenges related to waste management
            and environmental participation.
          </p>
          <p>These include:</p>
          <List
            items={[
              "Limited availability of designated waste disposal and segregation facilities.",
              "Inconsistent garbage collection and communication.",
              "Improper disposal of household and street-generated waste.",
              "Limited participation in community clean-up activities.",
              "A need for more accessible environmental education and awareness initiatives.",
            ]}
          />
          <p>
            Although residents demonstrated awareness of environmental concerns, participation in
            collective activities remained relatively low.
          </p>
          <Callout label="The design challenge">
            How might we use a digital platform to make waste management information more accessible
            and encourage residents to take a more active role in maintaining a cleaner community?
          </Callout>
        </CaseSection>

        <CaseSection id="research" number="03" title="Research and Discovery">
          <p>
            The project used a <Strong>Concurrent Convergent Parallel Mixed-Methods Approach</Strong>{" "}
            to understand residents&rsquo; awareness, attitudes, and perceptions regarding waste
            management and the proposed application.
          </p>
          <p>Research activities included:</p>
          <List
            items={[
              "Surveys conducted with 30 purposively selected residents.",
              "In-person interviews with five selected participants.",
              "On-site observations within the research locale.",
              "A four-point Likert scale questionnaire administered through Google Forms.",
            ]}
          />
          <p>
            The research examined residents&rsquo; existing waste management practices,
            environmental awareness, and acceptance of Terrra as a potential digital solution.
          </p>

          <SubHeading>Key Research Findings</SubHeading>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[28rem] border-collapse text-left text-base">
              <thead>
                <tr className="border-b border-ink text-sm text-ink">
                  <th scope="col" className="py-3 pr-4 font-semibold">Research Indicator</th>
                  <th scope="col" className="py-3 pr-4 text-right font-semibold">Mean</th>
                  <th scope="col" className="py-3 font-semibold">Interpretation</th>
                </tr>
              </thead>
              <tbody>
                {findings.map((row) => (
                  <tr key={row.indicator} className="border-b border-line">
                    <th scope="row" className="py-3 pr-4 font-normal text-ink">{row.indicator}</th>
                    <td className="py-3 pr-4 text-right tabular-nums text-ink">{row.mean}</td>
                    <td className="py-3">{row.interpretation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SubHeading>What the Findings Suggested</SubHeading>
          <p>
            The findings revealed an opportunity to bridge the gap between environmental awareness
            and active community participation.
          </p>
          <p>
            Residents expressed strong concern about environmental and health issues, while
            participation in community clean-up activities received a comparatively low mean score.
          </p>
          <p>
            This helped establish the direction for Terrra: provide information, encourage
            participation, and make environmental initiatives more visible and accessible.
          </p>
        </CaseSection>

        <CaseSection id="opportunity" number="04" title="Design Opportunity">
          <p>
            Based on the research findings, the project explored several opportunities for a
            community-centered application.
          </p>
          <dl className="space-y-6">
            {[
              ["Make information accessible.", "Provide educational resources that help residents understand proper waste segregation, recycling, and composting."],
              ["Improve communication.", "Explore ways to keep residents informed about garbage collection and environmental initiatives."],
              ["Encourage participation.", "Introduce community-oriented features that can motivate residents to take part in environmental activities."],
              ["Build community awareness.", "Create a digital space where environmental initiatives and contributions can become more visible."],
            ].map(([term, text]) => (
              <div key={term} className="border-t border-line pt-4">
                <dt className="font-semibold text-ink">{term}</dt>
                <dd className="mt-1">{text}</dd>
              </div>
            ))}
          </dl>
        </CaseSection>

        <CaseSection id="solution" number="05" title="The Proposed Solution">
          <p>
            Terrra brings together environmental education, community engagement, and waste
            management information in one proposed mobile application.
          </p>
          <p>The following are the key features explored in the project:</p>

          <SubHeading>Garbage Truck Tracker (design in progress)</SubHeading>
          <p>
            A proposed tracking feature that would help residents monitor garbage collection
            activities and stay informed about collection schedules.
          </p>
          <SubHeading>Educational Resources</SubHeading>
          <p>
            A learning section containing information about proper waste segregation, recycling, and
            composting to support better household waste management practices.
          </p>
          <SubHeading>Community Leaderboards</SubHeading>
          <p>
            A proposed engagement feature that recognizes community participation and encourages
            residents to become more involved in environmental initiatives.
          </p>
          <SubHeading>Communitree</SubHeading>
          <p>
            A community-oriented concept that represents collective environmental contributions and
            encourages residents to take part in building a cleaner environment.
          </p>
          <PendingNote>
            [Note to self: These features are described as proposed. Only call one implemented once
            it is in the final Figma design or a working prototype. The Garbage Truck Tracker design
            is still in progress: when it is finished, add its screen to section 10 in place of
            &ldquo;Add another completed screen&rdquo;, and remove &ldquo;(design in
            progress)&rdquo; from its heading. Remove this note before sharing the portfolio.]
          </PendingNote>

        </CaseSection>

        <CaseSection id="information-architecture" number="06" title="Information Architecture">
          <p>
            Terrra&rsquo;s proposed information structure organizes its content around three
            primary purposes:
          </p>
          <List
            ordered
            items={[
              <><Strong>Information</Strong>: Helping residents access environmental education and waste management updates.</>,
              <><Strong>Participation</Strong>: Encouraging involvement in community initiatives and activities.</>,
              <><Strong>Engagement</Strong>: Making environmental contributions more visible through community-oriented features.</>,
            ]}
          />
          <ImagePlaceholder
            label="Terrra sitemap or information architecture diagram"
            note="[Insert your actual sitemap or information architecture diagram here.]"
            aspect="aspect-[16/10]"
          />
        </CaseSection>

        <CaseSection id="user-flow" number="07" title="User Flow">
          <p>
            The proposed experience is centered on helping residents access useful information and
            participate in environmental activities.
          </p>
          <p>A general user journey may include:</p>
          <List
            ordered
            items={[
              "Open the Terrra application.",
              "Navigate through the available features.",
              "Access educational resources or waste collection information.",
              "Explore community initiatives and participation features.",
              "Stay informed about environmental activities.",
            ]}
          />
          <ImagePlaceholder
            label="Terrra user flow diagram"
            note="[Insert your actual user flow diagram here.]"
            aspect="aspect-[16/10]"
          />
        </CaseSection>

        <CaseSection id="process" number="08" title="Wireframing and Design Process">
          <p>
            The design process translates the project&rsquo;s research direction into a structured
            mobile application experience.
          </p>
          <p>
            It involves organizing information, exploring screen layouts, and developing the
            proposed features into a consistent interface.
          </p>

          <SubHeading>Low-Fidelity Wireframes</SubHeading>
          <ImagePlaceholder label="Terrra low-fidelity wireframes" note="[Insert sketches or low-fidelity wireframes.]" aspect="aspect-[16/10]" />

          <SubHeading>High-Fidelity Designs</SubHeading>
          <ImagePlaceholder label="Terrra high-fidelity designs" note="[Insert final Figma screens and interface designs.]" aspect="aspect-[16/10]" />

          <SubHeading>Design Iterations</SubHeading>
          <ImagePlaceholder
            label="Terrra design iterations"
            note="[Insert screenshots showing important changes made during the design process.]"
            aspect="aspect-[16/10]"
          />
        </CaseSection>

        <CaseSection id="visual-design" number="09" title="Visual Design">
          <p>
            The visual direction of Terrra should communicate environmental awareness,
            accessibility, and community involvement.
          </p>

          {/*
            Colours were sampled from the logo file and an app screenshot.
            Confirm the exact values against the Figma file.
          */}
          <BrandSheet
            logo={{
              src: "/projects/terrra/logo.png",
              alt: "Terrra logo: a blue globe wrapped in a green ribbon, beside the Terrra wordmark in green",
              width: 1195,
              height: 490,
            }}
            colors={[
              { name: "Terrra Green", hex: "#008625", usage: "Wordmark and globe ribbon" },
              { name: "Globe Blue", hex: "#8AB1FF", usage: "Globe in the logo mark" },
              { name: "App Olive", hex: "#718355", usage: "App home screen background" },
            ]}
            typefaces={[
              { role: "Wordmark", name: "[Add typeface]" },
              { role: "App headings", name: "[Add typeface]" },
              { role: "App body", name: "[Add typeface]" },
            ]}
            inUse={{
              src: "/projects/terrra/app-home.png",
              alt: "Top of the Terrra app home screen: the logo with the tagline “Terrra where change begins.” on an olive green background",
              width: 358,
              height: 210,
              caption: "Home screen header with the logo and tagline.",
            }}
          />
          <PendingNote>
            [Still to show: iconography, buttons and interactive components, navigation patterns,
            cards and content layouts, and mobile interface screens.]
          </PendingNote>
          <ImagePlaceholder
            label="Terrra design system and UI components"
            note="[Insert your actual design system and UI component screenshots here.]"
            aspect="aspect-[16/10]"
          />
        </CaseSection>

        <CaseSection id="final-interface" number="10" title="Final Interface Showcase">
          <p>
            This section presents the final proposed interface and demonstrates how the main
            features are organized within the mobile application.
          </p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
            {showcaseScreens.map((screen) => (
              <li key={screen}>
                <ImagePlaceholder label={`Terrra ${screen}`} note="[Insert full-size mobile screen mockup]" aspect="aspect-[9/19]" />
                <p className="mt-3 text-base text-ink">{screen}</p>
              </li>
            ))}
          </ul>
        </CaseSection>

        <CaseSection id="evaluation" number="11" title="Research Evaluation">
          <p>
            The research showed a very high overall acceptability rating for Terrra, with a mean of
            3.93.
          </p>
          <p>
            The study also found a moderate positive correlation between environmental awareness and
            application acceptability (Pearson r = 0.631, p &lt; 0.001).
          </p>
          <p>
            These results indicate positive perceptions of the proposed application among the
            research participants. However, they should not be interpreted as proof of actual
            long-term behavioral change or the effectiveness of a fully deployed application.
          </p>
        </CaseSection>

        <CaseSection id="reflection" number="12" title="Reflection and Learnings">
          <p>
            Working on Terrra provided an opportunity to explore how research findings can guide the
            development of a digital product concept.
          </p>
          <p>
            One of the key takeaways was the importance of understanding the actual needs and
            challenges of a community before proposing digital solutions.
          </p>
          <p>
            The research also highlighted that awareness alone does not necessarily translate into
            participation. This reinforced the importance of designing experiences that do not
            simply provide information but also explore ways to encourage meaningful community
            involvement.
          </p>
          <p>
            Through this project, I gained a better understanding of the relationship between user
            research, problem identification, information organization, and interface design.
          </p>
          <p>
            <Strong>My Contributions:</Strong> [Describe the research, UX planning, wireframing, UI
            design, prototyping, or documentation you personally handled.]
          </p>
        </CaseSection>

        <section aria-labelledby="takeaway-heading" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
            <h2 id="takeaway-heading" className="text-sm font-medium text-accent">
              Project Takeaway
            </h2>
            <p className="mt-4 max-w-3xl font-serif text-2xl leading-snug text-ink sm:text-3xl">
              Terrra explores how a mobile application can support environmental awareness and
              community participation by bringing waste management information and proposed
              engagement features into one accessible platform.
            </p>

            <div className="mt-16 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/projects/restsync"
                className="group inline-flex min-h-11 items-center gap-2 text-base text-muted transition-colors duration-200 hover:text-ink"
              >
                Next Project: <span className="font-medium text-ink">RestSync</span>
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
