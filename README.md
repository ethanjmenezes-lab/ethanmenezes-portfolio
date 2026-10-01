# Ethan Menezes — personal portfolio

A Next.js 16 / React 19 portfolio inspired by Ethan’s PC setup. Featured projects lead to statically generated case studies, followed by CS50 foundations, a learning-interest panel, concise leadership experience, hardware specifications, and contact information.

The PC is CSS, not WebGL. Geist fonts are bundled locally. No database, external API, API keys, or environment variables are required.

## Local development

Use Node.js 24 and npm:

```bash
npm ci
npm run dev
```

Open http://localhost:3000. For a production preview:

```bash
npm run lint
npm run format:check
npm run build
npm start
```

With the production server running in another terminal, `npm run test:smoke` checks the homepage, case studies, metadata, internal anchor targets, résumé, image asset, and unknown-project 404. An optional URL argument selects another local port: `npm run test:smoke -- http://localhost:3001`.

## Editing content

**`data/portfolio.ts` is the content source.** It contains the introduction, biography, contact links, projects, CS50 entries, skills, exploration groups, experience, honors, and hardware specifications.

### Featured projects and case studies

Each `Project` includes a stable `slug`, problem, personal contributions, technical/product details, takeaways, metrics with a source note, and optional media and external links. Adding an entry generates `/projects/<slug>` at build time through the shared template in `app/projects/[slug]/page.tsx`.

Current routes:

- `/projects/team-velo`
- `/projects/satprep1600`

Keep individual work separate from team results. Do not update reported metrics to look like live analytics. SATPrep1600’s metrics are a résumé snapshot supplied in October 2026. Team Velo’s placement and prize are team results.

- `visual: "review-flow"` uses the labeled conceptual workflow diagram.
- Optional `media` accepts a local asset path, accurate alt text, caption, and intrinsic dimensions. SATPrep1600 uses a screenshot of its public homepage captured in October 2026, stored in `public/projects/satprep1600.jpg`.
- `stackLabel` distinguishes known technologies from a product-focus list where the implementation stack has not been supplied.
- Optional `github`, `demo`, and `channel` fields accept full URLs. Missing links are omitted entirely.
- Update `takeaways` with personal reflections when available; the current text describes supported engineering/product principles.

No project repository URLs or LinkedIn profile were supplied. Add them when available. The GitHub profile was verified against the repository’s owner. The SATPrep1600 product and channel links were checked against its public homepage.

### Résumé and contact

`public/resume.pdf` is an unchanged copy of the supplied Fidelity Software Engineering résumé. Replace it with your updated public résumé while keeping the same filename, or update `resume.url` accordingly. The PDF itself includes its original contact details; page content uses the supplied Gmail address and does not repeat the phone number.

Set `contact.linkedin` to a verified full URL to show it on the homepage. Do not use `#` or placeholder destinations. The GitHub and email values can be edited in the same object.

### Learning, experience, and hardware

- `exploration` describes learning interests, not research accomplishments or completed experiments. Update it manually as your direction develops.
- Keep `skills` grounded in coursework/projects and separate from `Currently Learning`.
- Use `experience` and `honors` for short evidence of initiative; the PDF holds the full résumé.
- Edit `hardware` to keep the setup specifications current. Scene geometry and hardware labels live in `components/pc-scene.tsx`.

## Structure and design

```text
app/
  globals.css                 Theme, responsive layouts, PC and project visuals
  layout.tsx                  Local fonts and site metadata
  page.tsx                    Homepage
  projects/[slug]/page.tsx    Shared static case-study template and metadata
  not-found.tsx               Unknown-page fallback
  icon.svg                    EM favicon
  opengraph-image.tsx          Build-time social image
components/
  navigation.tsx              Cross-page navigation and native mobile menu
  pc-scene.tsx                Interactive PC
  project-visual.tsx          Screenshot and conceptual workflow rendering
  portfolio-sections.tsx      Shared cards, sections, metrics, and footer
data/portfolio.ts             Editable content and project types
public/
  resume.pdf                  Downloadable résumé
  projects/satprep1600.jpg     Real public-product screenshot
scripts/check-production.mjs  HTTP production smoke checks
```

`app/globals.css` controls colors, typography, spacing, and breakpoints. Keep `AGENTS.md`; it contains guidance for the installed Next.js version. Run `npm run format` after editing.

## Deploy to Vercel

1. Commit the project and `package-lock.json`, then push to your Git provider.
2. Create a Vercel project and import the repository.
3. Select the **Next.js** framework preset, repository root, and Node.js 24.x. Keep the default install/output settings and `npm run build` as the build command.
4. No environment variables are required. Deploy and test both case-study URLs, the résumé download, and the social preview.
5. Add a custom domain if desired. Set `siteUrl` in the data file to that full URL; otherwise metadata uses Vercel’s automatic deployment hostname.

See [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs). Updating this project does not automatically publish it.

## Accessibility and verification

The homepage and case studies render as HTML. Standard navigation, hardware anchors, the native mobile menu, and résumé download work without JavaScript. Only pointer tilt needs client JavaScript. Reduced-motion preferences disable tilt, fan animation, smooth scrolling, and transitions. Unknown project slugs return 404.

Before publishing, run lint, formatting, build, and smoke checks. Inspect desktop, tablet, and 320–390px widths; use the keyboard to open the mobile menu and follow case-study links; verify focus outlines, cross-page navigation, image alt text, and all configured external destinations.
