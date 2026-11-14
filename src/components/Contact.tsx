import { ArrowUpRight, Download, Mail } from "lucide-react";
import { contact, isPlaceholder, site } from "@/lib/content";
import { Section } from "./Section";

const buttonClass =
  "inline-flex min-h-12 items-center gap-2 bg-accent px-5 text-base font-medium text-white transition-colors duration-200 hover:bg-ink";

export function Contact() {
  const emailReady = !isPlaceholder(contact.email);
  const resumeReady = !isPlaceholder(contact.resume.href);

  return (
    <Section id="contact" label="Contact" title={contact.heading} layout="split">
      <p className="max-w-2xl text-lg leading-relaxed text-muted">{contact.text}</p>

      {/* 1. Email: the main way to reach you */}
      <div className="mt-10">
        {emailReady ? (
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-3 break-all font-serif text-2xl text-accent underline underline-offset-4 sm:text-3xl"
          >
            <Mail className="h-6 w-6 shrink-0" aria-hidden="true" />
            {contact.email}
          </a>
        ) : (
          <p className="inline-flex items-center gap-3 font-serif text-2xl text-ink sm:text-3xl">
            <Mail className="h-6 w-6 shrink-0" aria-hidden="true" />
            {contact.email}
          </p>
        )}
      </div>

      {/* 2. Résumé: the second most important action on the page */}
      <div className="mt-8">
        {resumeReady ? (
          <a href={contact.resume.href} download className={buttonClass}>
            <Download className="h-4 w-4" aria-hidden="true" />
            {contact.resume.label}
          </a>
        ) : (
          <>
            <span className={`${buttonClass} cursor-not-allowed`} aria-disabled="true">
              <Download className="h-4 w-4" aria-hidden="true" />
              {contact.resume.label}
            </span>
            <p className="mt-2 text-sm text-muted">{contact.resume.href}</p>
          </>
        )}
      </div>

      {/* 3. Profiles: secondary */}
      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-base">
        {contact.links.map((link) => (
          <li key={link.label}>
            {isPlaceholder(link.href) ? (
              <span className="text-muted">
                {link.label} {link.href}
              </span>
            ) : (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 items-center gap-1 font-medium text-ink transition-colors duration-200 hover:text-accent"
              >
                {link.label}
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            )}
          </li>
        ))}
      </ul>

      <p className="mt-24 border-t border-line pt-6 text-sm text-muted">
        Designed and built by {site.name}.
      </p>
    </Section>
  );
}
