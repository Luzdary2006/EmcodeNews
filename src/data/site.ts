export const site = {
  name: "Emcode News",
  shortName: "Emcode",
  description:
    "A digital magazine about the tools that make university life work. Reviews, comparisons, and study stacks for students.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://emcodenews.vercel.app",
  issue: "Issue 01",
  issueDate: "October 2026",
  updated: "October 29, 2026",
  updatedISO: "2026-10-29",
  copyrightYear: 2026,
  locale: "en_US",
  author: "Emcode News editorial team",
  nav: [
    { label: "Home", href: "/" },
    { label: "Study & Learning", href: "/study-learning" },
    {
      label: "Communication & Collaboration",
      href: "/communication-collaboration",
    },
    { label: "Tips & Recommendations", href: "/tips-recommendations" },
  ],
} as const;
