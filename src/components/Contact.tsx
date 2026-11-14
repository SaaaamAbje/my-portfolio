import { ArrowUpRight, Mail } from "lucide-react";
import { contact, isPlaceholder, site } from "@/lib/content";
import { Section } from "./Section";

export function Contact() {
  const emailReady = !isPlaceholder(contact.email);

  return (
    <Section id="contact" label="Contact" title={contact.heading} layout="split">
      <p className="max-w-2xl text-lg leading-relaxed text-muted">{contact.text}</p>

      <div className="mt-10">
        {emailReady ? (
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-3 font-serif text-2xl text-accent underline underline-offset-4 sm:text-3xl"
          >
            <Mail className="h-6 w-6" aria-hidden="true" />
            {contact.email}
          </a>
        ) : (
          <p className="inline-flex items-center gap-3 font-serif text-2xl text-ink sm:text-3xl">
            <Mail className="h-6 w-6" aria-hidden="true" />
            {contact.email}
          </p>
        )}
      </div>

      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
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
                className="inline-flex items-center gap-1 font-medium text-ink hover:text-accent"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </li>
        ))}
      </ul>

      <p className="mt-24 border-t border-line pt-6 text-xs text-muted">
        Designed and built by {site.name}.
      </p>
    </Section>
  );
}
