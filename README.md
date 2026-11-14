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

## Adding project images

Every project thumbnail uses one style:

- **UI/UX projects:** 2–3 real screens from the Figma file, side by side on a plain light
  background. Use the same background colour for every project.
- **Development projects:** text only for now. If images are added later, use real browser
  screenshots.
- **Size:** export at **1600×1000 px (16:10)**, PNG or JPG.
- **Avoid:** stock device mockups, tilted 3D phones, and any screen that is not from the real
  design.

To add one:

1. Save it as `public/projects/<slug>/cover.png`, for example `public/projects/terrra/cover.png`.
2. In `src/lib/content.ts`, add an `image` to that project, with alt text that says what the
   screens show:

   ```ts
   image: { src: "/projects/terrra/cover.png", alt: "Terrra home, truck tracker and learning screens" },
   ```

The homepage thumbnail and the case study cover both use this image. Until it is set, a grey
placeholder is shown.

## Structure

```
src/app/layout.tsx        fonts (Newsreader, Inter), metadata
src/app/globals.css       design tokens (colors, fonts) and base styles
src/app/page.tsx          homepage: header, hero, projects, about, skills, contact
src/components/           one component per section, plus Section, ProjectImage, ImagePlaceholder
src/components/case-study/ building blocks for case study pages
src/app/projects/terrra/  Terrra case study
src/lib/content.ts        all homepage text and project data
```
