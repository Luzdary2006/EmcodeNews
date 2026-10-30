# Emcode News

A digital magazine microsite about the tools that make university life work. Twelve tools, three sections, three filter categories, and a set of study habits — written for students and published as a static Next.js site.

Live sections:

- **Home** — hero, featured picks, editorial principles, section directory.
- **Study & Learning** — Obsidian, Notion, NotebookLM, Codédex, freeCodeCamp.
- **Communication & Collaboration** — Discord, Jitsi Meet, Google Meet, GitHub, Figma, Google Drive.
- **Tips & Recommendations** — six habits, needs-based recommendations, four tool stacks, ClickUp spotlight.
- **All tools** — searchable, filterable catalog with URL-synced state.
- **Tool profiles** — one static page per tool with pricing, benefits, use cases, and related tools.

## Stack

- Next.js 16 (App Router, Cache Components, Partial Prefetching)
- React 19 + TypeScript
- Tailwind CSS v4
- Playwright end-to-end tests and axe accessibility checks
- Deployed on Vercel

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

### Scripts

| Script              | What it does                                       |
| ------------------- | -------------------------------------------------- |
| `npm run dev`       | Start the development server                       |
| `npm run build`     | Production build (also type-checks)                |
| `npm run start`     | Serve the production build                         |
| `npm run lint`      | ESLint                                             |
| `npm run typecheck` | TypeScript, no emit                                |
| `npm run test:e2e`  | Playwright tests (desktop + mobile projects)       |

Playwright starts `npm run dev` automatically and reuses an existing server on port 3000. Install the browser once with `npx playwright install chromium`.

## Project structure

```txt
src/
  app/
    page.tsx                        Home
    study-learning/page.tsx         Section 01
    communication-collaboration/    Section 02
    tips-recommendations/page.tsx   Section 03
    tools/page.tsx                  Catalog
    tools/[slug]/page.tsx           Tool profile
    not-found.tsx                   Custom 404
    sitemap.ts, robots.ts           SEO files
    opengraph-image.tsx             Generated social image
    icon.svg                        Favicon
  components/
    home/ sections/ tips/ tools/    Page-level components
    layout/                         Header, footer, wordmark
    ui/                             Buttons, headings, icons, links
  data/
    tools.ts                        12 tool records + helpers
    tips.ts                         Habits, needs, stacks
    categories.ts                   3 filter categories
    sections.ts                     3 editorial sections
    site.ts                         Name, issue, URL, nav
  lib/                              Search, styles, classnames
  types/content.ts                  Shared content types
public/logos/                       Local brand SVGs
tests/e2e/                          Playwright specs
```

## Editing content

Content is typed and kept out of JSX. Most updates only touch `src/data/`.

### Add or change a tool

Edit `src/data/tools.ts`. Each record follows `Tool` in `src/types/content.ts`:

```ts
{
  slug: "obsidian",                 // URL: /tools/obsidian
  name: "Obsidian",
  logo: "/logos/obsidian.svg",      // file in public/logos
  categories: ["study-learning"],   // filter categories (1 or more)
  section: "study-learning",        // editorial placement
  tagline: "…",                     // one line, used on cards and metadata
  description: "…",                 // profile intro
  mainFunction: "…",                // "What it does"
  benefits: ["…"],                  // "Why students use it"
  academicUseCases: ["…"],          // three cards under "In practice"
  pricing: {
    model: "free" | "freemium" | "paid",
    note: "What the free plan includes and what paid tiers add.",
    verifiedAt: "YYYY-MM-DD",
  },
  officialUrl: "https://…",         // official site, opens in a new tab
  featured: true,                   // shows on the home page
  keywords: ["…"],                  // search terms
}
```

`section` is the editorial home of a tool; `categories` control catalog filters. They are intentionally separate — ClickUp lives in Tips & Recommendations but filters as Productivity & Organization.

Adding a tool automatically creates its static page (via `generateStaticParams`), adds it to the sitemap, the home logo strip, the catalog, and search.

### Logos

Logos are bundled locally in `public/logos/` so the site has no third-party image requests. Most come from [Simple Icons](https://simpleicons.org/). Codédex is not in Simple Icons, so `codedex.svg` is a custom placeholder mark — replace it with an official asset if brand permission allows.

### Habits, recommendations, stacks

Edit `src/data/tips.ts`:

- `tips` — habit cards used on Tips and Study pages.
- `needs` — "start from the problem" recommendations, referencing tool slugs.
- `stacks` — multi-tool workflows with numbered steps.

### Issue metadata

`src/data/site.ts` holds the magazine name, issue label, issue date, update date, copyright year, canonical URL, and primary navigation. Change `issueDate`, `updated`, `updatedISO`, and `copyrightYear` together when publishing a new issue.

## Editorial rules

- **Pricing is verified before publishing.** Every tool records `pricing.note` and `pricing.verifiedAt`. Re-check the official pricing page and update both fields; the UI repeats the verification date.
- **Official links only.** External links point at the vendor's site and open in a new tab with `rel="noopener noreferrer"`.
- **No paid placement.** Nothing in the catalog is sponsored or ranked by payment.
- **English only.** All visible copy is English.

## Accessibility

The site targets WCAG 2.1 AA. Current checks cover:

- Skip link, landmark structure, one `h1` per page.
- Visible focus styles and keyboard-operable mobile menu (Escape closes and restores focus).
- Text contrast on cream, ink, cobalt, and section accents.
- Search results announced with `aria-live`; filter buttons expose `aria-pressed`.
- Scrollable comparison table is focusable.
- No horizontal overflow at 390 px, 834 px, and 1280 px.

Run the audits:

```bash
npm run test:e2e
```

`tests/e2e/accessibility.spec.ts` runs axe on every route in both viewports and fails on any WCAG A/AA violation.

## Deployment

1. Push the repository to GitHub.
2. Import it in Vercel. The framework preset is detected automatically.
3. Set `NEXT_PUBLIC_SITE_URL` to the production origin (for example `https://emcodenews.vercel.app`). It is used for canonical URLs, Open Graph metadata, the sitemap, and `robots.txt`.
4. Deploy.

Without the environment variable, the site falls back to `https://emcodenews.vercel.app`. Update `src/data/site.ts` if the final domain differs.

## Search and filters

Search and category filters run entirely on the client against the bundled tool records — no search service, no API route. State is mirrored in the URL (`/tools?q=notes&category=study-learning`) so results can be shared and restored on reload. The catalog page is prerendered with the full list; URL values are applied after hydration.
