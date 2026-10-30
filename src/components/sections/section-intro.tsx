import { Breadcrumbs } from "@/components/ui/external-link";
import { Container } from "@/components/ui/container";
import { site } from "@/data/site";
import type { Section } from "@/types/content";

interface SectionIntroProps {
  section: Section;
  toolCount: number;
  meta?: string[];
}

export function SectionIntro({ section, toolCount, meta }: SectionIntroProps) {
  const facts = meta ?? [`${toolCount} tools`];

  return (
    <header className="border-b border-line">
      <Container className="py-10 md:py-14">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: section.name },
          ]}
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.66rem] font-medium uppercase tracking-[0.22em] text-muted">
              <span>Section {section.number}</span>
              <span>{section.kicker}</span>
            </p>
            <h1 className="mt-4 text-balance font-display text-[clamp(2.7rem,7vw,5.4rem)] font-light leading-[0.94] tracking-[-0.04em] text-ink">
              {section.tagline}
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-pretty text-base leading-relaxed text-ink-soft">
              {section.description}
            </p>
            <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.62rem] uppercase tracking-[0.18em] text-muted">
              {facts.map((fact) => (
                <span key={fact}>{fact}</span>
              ))}
              <span>Updated {site.updated}</span>
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
}
