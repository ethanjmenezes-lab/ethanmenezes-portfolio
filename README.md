# Ethan Menezes — personal portfolio

A Next.js 16 / React 19 portfolio inspired by an NV7 showcase PC, with purple and blue lighting, interactive hardware navigation, and responsive portfolio sections. The PC and project artwork use CSS: no WebGL, external images, or graphics engine downloads. Geist fonts are bundled through the official `geist` package, so builds do not fetch Google Fonts.

## Run locally

Use Node.js 24 LTS and npm (the project was verified with Node 24).

```bash
npm ci
npm run dev
```

Open http://localhost:3000. To verify the production build:

```bash
npm run lint
npm run build
npm start
```

No API keys or environment variables are required.

## Customize

Start in **`data/portfolio.ts`**. It contains the name, introduction, biography, interests, project entries, skill categories, experience, contact URLs, and résumé configuration.

- **Projects:** replace all three sample projects. Set `placeholder: false` after replacing sample copy, stacks, and intended impact with your actual work and results. Optional `github` and `demo` fields accept full HTTPS URLs. The `visual` field selects `neural`, `orbit`, or `wave` artwork.
- **Skills:** replace the example entries with verified skills, then set `skillsAreExamples: false`.
- **Experience:** replace or remove sample entries; set `placeholder: false` and use an actual date or period in `label`.
- **Contact:** set `contact.email` to a plain email address and `contact.github` / `contact.linkedin` to full profile URLs. Empty values appear as unavailable text, not dead links.
- **Résumé:** add your actual PDF as **`public/resume.pdf`** and set `resume.url` to `"/resume.pdf"`. Until then, the download button is disabled. Update the qualifications summary alongside your résumé.
- **Appearance:** edit **`app/globals.css`** for colors, spacing, PC geometry, animation, and breakpoints.
- **Layout:** edit `app/page.tsx` for section composition, `components/pc-scene.tsx` for hardware, and `components/portfolio-sections.tsx` for cards and reusable sections.
- **Branding:** `app/layout.tsx` contains metadata; `app/icon.svg` is the favicon; `app/opengraph-image.tsx` generates the share image locally at build time.
- **Domain:** optionally set `siteUrl` to your full custom-domain URL. Otherwise, metadata uses Vercel's automatic deployment hostname (and localhost during local development).

Keep `AGENTS.md`: it contains guidance for this installed Next.js version.

## Project structure

```text
app/
  globals.css             Theme, responsive layouts, CSS hardware and artwork
  icon.svg                Custom EM favicon
  layout.tsx              Local fonts and metadata
  opengraph-image.tsx      Generated social-preview image
  page.tsx                Server-rendered portfolio sections
components/
  navigation.tsx          Desktop navigation and native mobile menu
  pc-scene.tsx            Interactive PC and hardware links
  portfolio-sections.tsx  Reusable sections, project cards, skills, experience
data/portfolio.ts         Editable portfolio content
public/                   Add resume.pdf here
```

## Deploy on Vercel

1. Replace the placeholder content before sharing the site with recruiters.
2. Commit the project, including `package-lock.json`, and push it to your Git provider.
3. In Vercel, create a project and import that repository.
4. Use the **Next.js** framework preset and the repository root as the root directory. Keep the default install/build/output settings; the build command is `npm run build`.
5. Select Node.js 24.x in project settings if needed. No environment variables are necessary.
6. Deploy, then check the generated URL, social preview, contact links, and résumé download. Add a custom domain in the project settings when ready.

Vercel supports Next.js without custom hosting configuration. See [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs). This repository is prepared for deployment; it has not been published automatically.

## Accessibility and behavior

Hardware links use normal section anchors and remain functional without JavaScript. Conventional navigation and a visible hardware legend provide alternatives to the scene. The native mobile menu also works without JavaScript. Decorative artwork is hidden from assistive technology. Pointer tilt runs only for mouse input with hover support; reduced-motion preferences disable tilt, fan rotation, smooth scrolling, and transitions. Missing links remain non-interactive.

Before publishing changes, run lint/build, check a desktop and mobile viewport, tab through navigation, and test each configured external link and résumé download.
