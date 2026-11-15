import type { CSSProperties } from "react";

/** Inline style that staggers .animate-intro and [data-reveal] elements. */
export function delay(ms: number): CSSProperties {
  return { "--delay": `${ms}ms` } as CSSProperties;
}

/** Stagger step between items in a list, in milliseconds. */
export const STAGGER = 80;
