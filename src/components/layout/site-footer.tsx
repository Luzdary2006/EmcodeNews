import Link from "next/link";
import { Container } from "@/components/ui/container";
import { sections } from "@/data/sections";
import { site } from "@/data/site";
import { tools } from "@/data/tools";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-ink text-paper">
      <Container className="py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.22em] text-paper/50">
              <span>{site.issue}</span>
              <span>{site.issueDate}</span>
            </p>
            <p className="mt-5 max-w-sm font-display text-4xl leading-[1.05] tracking-[-0.03em] text-paper">
              Tools that earn their place in your semester.
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/60">
              Emcode News is an independent editorial project about the
              technology behind a calmer, more organized university life.
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-paper/50">
              Sections
            </h2>
            <ul className="mt-5 space-y-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <Link
                    href={section.href}
                    className="text-sm text-paper/80 transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
                  >
                    {section.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-paper/50">
              Browse
            </h2>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/tools"
                  className="text-sm text-paper/80 transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
                >
                  All tools
                </Link>
              </li>
              <li>
                <Link
                  href="/tools?category=study-learning"
                  className="text-sm text-paper/80 transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
                >
                  Study tools
                </Link>
              </li>
              <li>
                <Link
                  href="/tools?category=communication-collaboration"
                  className="text-sm text-paper/80 transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
                >
                  Collaboration tools
                </Link>
              </li>
              <li>
                <Link
                  href="/tools?category=productivity-organization"
                  className="text-sm text-paper/80 transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
                >
                  Productivity tools
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-paper/50">
              The short version
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-paper/60">
              {tools.length} tools reviewed. Three categories. No pay-to-rank.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/20 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.copyrightYear} {site.name}. Written for university
            students.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <p>Pricing verified {site.updated}</p>
            <a
              href="#top"
              className="text-paper/70 underline decoration-paper/30 underline-offset-4 transition-colors hover:text-paper hover:decoration-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
            >
              Back to top
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
