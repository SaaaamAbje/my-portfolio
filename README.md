# Portfolio

Personal portfolio site. Next.js (App Router), TypeScript, Tailwind CSS v4, Lucide React.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

All homepage copy is in `src/lib/content.ts`. Text in `[square brackets]` is a placeholder:
replace it with real information. Contact links that are still placeholders render as plain
text, not links.

## Structure

```
src/app/layout.tsx        fonts (Newsreader, Inter), metadata
src/app/globals.css       design tokens (colors, fonts) and base styles
src/app/page.tsx          homepage: header, hero, projects, about, skills, contact
src/components/           one component per section, plus Section and ImagePlaceholder
src/lib/content.ts        all homepage text and project data
```
