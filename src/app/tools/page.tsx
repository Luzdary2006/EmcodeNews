import type { Metadata } from "next";
import { ToolCatalog } from "@/components/tools/tool-catalog";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/external-link";
import { categories } from "@/data/categories";
import { site } from "@/data/site";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "All tools",
  description:
    "Browse every tool in Emcode News. Search by name or keyword and filter by Study & Learning, Communication & Collaboration, or Productivity & Organization.",
  alternates: {
    canonical: "/tools",
  },
};

export default function ToolsPage() {
  return (
    <>
      <header className="border-b border-line">
        <Container className="py-10 md:py-14">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "All tools" }]}
          />

          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.66rem] font-medium uppercase tracking-[0.22em] text-muted">
                <span>The catalog</span>
                <span>{tools.length} tools</span>
              </p>
              <h1 className="mt-4 text-balance font-display text-[clamp(2.7rem,7vw,5.4rem)] font-light leading-[0.94] tracking-[-0.04em] text-ink">
                Everything in the issue
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-pretty text-base leading-relaxed text-ink-soft">
                Search by name or task, then narrow the list by category. Every
                profile includes who it is for, what it costs, and where to find
                it.
              </p>
              <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                <span>{categories.length} categories</span>
                <span>Updated {site.updated}</span>
              </p>
            </div>
          </div>
        </Container>
      </header>

      <section aria-labelledby="catalog-heading" className="py-10 md:py-14">
        <Container>
          <h2 id="catalog-heading" className="sr-only">
            Search and filter tools
          </h2>
          <ToolCatalog tools={tools} />
        </Container>
      </section>
    </>
  );
}
