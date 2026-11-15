"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fades [data-reveal] elements up as they scroll into view.
 *
 * Elements already on screen when the page loads are shown straight away, so
 * nothing above the fold flickers. Runs again after each client-side
 * navigation. Visitors who prefer reduced motion get everything shown at once.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"),
    );
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const fold = window.innerHeight * 0.9;
    for (const element of elements) {
      if (element.getBoundingClientRect().top < fold) element.classList.add("is-visible");
    }
    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    for (const element of elements) {
      if (!element.classList.contains("is-visible")) observer.observe(element);
    }
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
