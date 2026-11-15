import { ArrowRight } from "lucide-react";
import { hero, site } from "@/lib/content";
import { delay } from "@/lib/motion";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-5xl px-6 pb-20 pt-20 sm:pb-28 sm:pt-28">
        <h1 id="hero-heading" className="animate-intro max-w-4xl text-5xl leading-[1.05] text-ink sm:text-7xl">
          {site.name}
        </h1>
        <p className="animate-intro mt-6 max-w-2xl font-serif text-2xl leading-snug text-ink sm:text-3xl" style={delay(120)}>
          {hero.tagline}
        </p>
        <p className="animate-intro mt-6 max-w-2xl text-lg leading-relaxed text-muted" style={delay(240)}>
          {hero.intro}
        </p>

        <div className="animate-intro mt-10 flex flex-wrap items-center gap-x-8 gap-y-4" style={delay(360)}>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-accent px-5 py-3 text-base font-medium text-white transition-colors duration-200 hover:bg-ink"
          >
            View projects
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>

        <dl style={delay(480)} className="animate-intro mt-16 grid max-w-2xl gap-6 border-t border-line pt-8 text-base sm:grid-cols-2">
          <div>
            <dt className="text-sm text-muted">Current focus</dt>
            <dd className="mt-1 text-ink">{hero.focus}</dd>
          </div>
          <div>
            <dt className="text-sm text-muted">Availability</dt>
            <dd className="mt-1 text-ink">{hero.availability}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
