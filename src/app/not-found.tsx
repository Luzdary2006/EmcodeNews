import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { sections } from "@/data/sections";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="border-b border-line">
      <Container className="py-20 md:py-28">
        <p className="flex items-center gap-3 text-[0.66rem] font-medium uppercase tracking-[0.22em] text-muted">
          <span>404</span>
          <span>Off the syllabus</span>
        </p>
        <h1 className="mt-5 max-w-3xl text-balance font-display text-[clamp(2.8rem,7vw,5.5rem)] font-light leading-[0.94] tracking-[-0.04em] text-ink">
          This page is not in the issue.
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
          The link may be outdated, or the tool may have moved. Everything
          published in Emcode News is reachable from the catalog or one of the
          three sections.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="/tools">Open the catalog</ButtonLink>
          <ButtonLink href="/" variant="outline">
            Back to the homepage
          </ButtonLink>
        </div>

        <div className="mt-14 border-t border-line pt-8">
          <h2 className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-muted">
            Browse the sections
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {sections.map((section) => (
              <li key={section.id}>
                <ButtonLink
                  href={section.href}
                  variant="outline"
                  className="w-full"
                >
                  <span className="truncate">{section.shortName}</span>
                </ButtonLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
