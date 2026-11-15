/*
  All homepage copy lives here. Anything in [square brackets] is a placeholder
  to replace with real information. Do not add results, dates, clients or
  technologies that are not true.
*/

export const site = {
  name: "Sam Gabriel A. Espeleta",
  role: "UI/UX Designer and Frontend Developer",
  school: "BSIT, De La Salle Lipa",
  title: "Sam Gabriel A. Espeleta | UI/UX Design and Frontend Development",
  /** Appended to every sub-page title, e.g. "Terrra case study | Sam Gabriel A. Espeleta". */
  titleTemplate: "%s | Sam Gabriel A. Espeleta",
  description:
    "Portfolio of Sam Gabriel A. Espeleta, a third-year BSIT student at De La Salle Lipa focused on UI/UX design and frontend development.",
};

export const navLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
] as const;

export const hero = {
  tagline:
    "UI/UX designer and frontend developer. Third-year BSIT student at De La Salle Lipa, looking for an internship.",
  intro: "[Add one or two sentences, in your own words, about what you care about in your work.]",
  focus: "[Add current focus]",
  availability: "[Add internship availability, e.g. start month and hours]",
};

export type Project = {
  slug: string;
  title: string;
  category: "UI/UX" | "System Development" | "Web Development";
  summary: string;
  role: string;
  tools: string;
  year: string;
  /** Route of the full case study, once it exists. */
  caseStudy?: string;
  /**
   * Project thumbnail. Export at 1600×1000 (16:10) into public/projects/<slug>/,
   * e.g. { src: "/projects/terrra/cover.png", alt: "Terrra home, tracker and learning screens" }.
   * Describe what the screens show in alt. Until set, a neutral placeholder is shown.
   */
  image?: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    slug: "terrra",
    title: "Terrra",
    category: "UI/UX",
    summary:
      "A proposed community-based waste management and environmental awareness mobile app, shaped by research with residents of Barangay Mataas na Lupa, Lipa City.",
    role: "[Your Role / Specific Contributions]",
    tools: "[Figma / Other Tools Used]",
    year: "2023–2024",
    caseStudy: "/projects/terrra",
  },
  {
    slug: "viore",
    title: "Vioré",
    category: "UI/UX",
    summary: "[Add a one-sentence summary of the problem and what you designed.]",
    role: "[Add your role]",
    tools: "[Add tools used]",
    year: "[Add year]",
  },
  {
    slug: "animowear",
    title: "AnimoWear",
    category: "UI/UX",
    summary: "[Add a one-sentence summary of the problem and what you designed.]",
    role: "[Add your role]",
    tools: "[Add tools used]",
    year: "[Add year]",
  },
  {
    // Sources: RestSync capstone proposal and github.com/SaaaamAbje/restsync.
    // Built as a front-end prototype; the Node.js backend is planned.
    slug: "restsync",
    title: "RestSync",
    category: "System Development",
    summary:
      "A web-based booking and management system for local funeral homes, with conflict-free chapel scheduling, add-on customization with live stock, and itemized billing, across a client portal and an admin portal.",
    role: "Sole proponent",
    tools: "HTML5, CSS3, JavaScript (ES6+), HTML5 Canvas API",
    year: "2026",
    caseStudy: "/projects/restsync",
    image: {
      src: "/projects/restsync/client-schedule.png",
      alt: "RestSync scheduling screen: a calendar, three chapels with availability, and service start times",
    },
  },
  {
    slug: "omcr-document-request-system",
    title: "OMCR Document Request System",
    category: "System Development",
    summary:
      "A bilingual web system for the Office of the Municipal Civil Registrar in Rosario, Batangas. Residents request civil registry documents, book appointments and track status online. Staff manage requests in a secure, real-time dashboard with analytics and an audit log. Built solo from June to November 2026 with vanilla JavaScript and Supabase, and deployed on Vercel.",
    role: "Solo developer (AI-assisted)",
    tools: "HTML, CSS, JavaScript, Supabase, Vercel",
    year: "2026",
    caseStudy: "/projects/omcr",
    image: {
      src: "/projects/omcr/cover.png",
      alt: "OMCR Document Request System: the Submit a Document Request form with personal information fields, beside panels listing available documents and office hours",
    },
  },
  {
    slug: "animoexpress",
    title: "AnimoExpress",
    category: "Web Development",
    summary: "[Add a one-sentence summary of what the site does and who uses it.]",
    role: "[Add your role]",
    tools: "[Add technologies used]",
    year: "[Add year]",
  },
  {
    slug: "dlsl-freedom-wall",
    title: "DLSL Freedom Wall",
    category: "Web Development",
    summary: "[Add a one-sentence summary of what the site does and who uses it.]",
    role: "[Add your role]",
    tools: "[Add technologies used]",
    year: "[Add year]",
  },
];

export const about = {
  paragraphs: [
    "[Add a short paragraph about who you are and how you got into UI/UX design and frontend development.]",
    "[Add a paragraph about how you work: research, wireframing, prototyping, building, testing. Only include what you actually do.]",
  ],
  facts: [
    { label: "Education", value: "BS Information Technology, De La Salle Lipa" },
    { label: "Year level", value: "Third year" },
    { label: "Expected graduation", value: "[Add expected graduation]" },
    { label: "Location", value: "[Add city]" },
  ],
};

export const skillGroups = [
  { title: "Design", items: ["[Add design skill]", "[Add design skill]", "[Add design skill]"] },
  { title: "Frontend", items: ["[Add language or framework]", "[Add language or framework]", "[Add language or framework]"] },
  { title: "Tools", items: ["[Add design or dev tool]", "[Add design or dev tool]", "[Add design or dev tool]"] },
  { title: "Also familiar with", items: ["[Add skill or tool]", "[Add skill or tool]"] },
];

export const contact = {
  heading: "Let's talk about an internship.",
  text: "[Add a sentence about the kind of internship or team you're looking for.]",
  email: "samabjelina@gmail.com",
  /** Put the PDF in public/ (e.g. public/resume.pdf) and set href to "/resume.pdf". */
  resume: { label: "Download résumé (PDF)", href: "[Add résumé PDF]" },
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sam-gabriel-abjelina/" },
    { label: "GitHub", href: "https://github.com/SaaaamAbje" },
  ],
};

/** True when a value is still a [bracketed] placeholder. */
export function isPlaceholder(value: string) {
  return value.trim().startsWith("[");
}
