/*
  All homepage copy lives here. Anything in [square brackets] is a placeholder
  to replace with real information. Do not add results, dates, clients or
  technologies that are not true.
*/

export const site = {
  name: "[Your Name]",
  role: "UI/UX Designer and Frontend Developer",
  school: "BSIT, De La Salle Lipa",
  title: "[Your Name] | UI/UX Design and Frontend Development",
  description:
    "Portfolio of [Your Name], a third-year BSIT student at De La Salle Lipa focused on UI/UX design and frontend development.",
};

export const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export const hero = {
  eyebrow: "Third-year BSIT student, De La Salle Lipa",
  heading: "I design and build clear, usable interfaces.",
  intro:
    "I'm [Your Name], looking for a UI/UX design or frontend development internship. [Add one or two sentences about what you care about in your work.]",
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
};

export const projects: Project[] = [
  {
    slug: "terrra",
    title: "Terrra",
    category: "UI/UX",
    summary: "[Add a one-sentence summary of the problem and what you designed.]",
    role: "[Add your role]",
    tools: "[Add tools used]",
    year: "[Add year]",
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
    slug: "omcr-document-request-system",
    title: "OMCR Document Request System",
    category: "System Development",
    summary: "[Add a one-sentence summary of what the system does and who uses it.]",
    role: "[Add your role]",
    tools: "[Add technologies used]",
    year: "[Add year]",
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
  email: "[Add email address]",
  links: [
    { label: "LinkedIn", href: "[Add LinkedIn URL]" },
    { label: "GitHub", href: "[Add GitHub URL]" },
    { label: "Résumé (PDF)", href: "[Add résumé link]" },
  ],
};

/** True when a value is still a [bracketed] placeholder. */
export function isPlaceholder(value: string) {
  return value.trim().startsWith("[");
}
