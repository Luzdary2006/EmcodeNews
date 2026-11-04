import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/external-link";
import { Container } from "@/components/ui/container";
import { site } from "@/data/site";
import { withBase } from "@/lib/with-base";
import type { Section } from "@/types/content";

const sectionArtwork = {
  "study-learning": {
    src: "/logos/takeNotes.png",
    alt: "Student taking notes while studying.",
  },
  "communication-collaboration": {
    src: "/logos/communication.png",
    alt: "Student communicating from a laptop.",
  },
  "tips-recommendations": {
    src: "/logos/tips.png",
    alt: "Tips and recommendations for students.",
  },
} as const;

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

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.66rem] font-medium uppercase tracking-[0.22em] text-muted">
              <span>Section {section.number}</span>
              <span>{section.kicker}</span>
            </p>
            <h1 className="mt-4 text-balance font-display text-[clamp(2.7rem,7vw,5.4rem)] font-light leading-[0.94] tracking-[-0.04em] text-ink">
              {section.tagline}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-soft">
              {section.description}
            </p>
            <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.62rem] uppercase tracking-[0.18em] text-muted">
              {facts.map((fact) => (
                <span key={fact}>{fact}</span>
              ))}
              <span>Updated {site.updated}</span>
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-surface lg:col-span-5">
            <Image
              src={withBase(sectionArtwork[section.id].src)}
              alt={sectionArtwork[section.id].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
