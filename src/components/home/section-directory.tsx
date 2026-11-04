import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { sections } from "@/data/sections";
import { withBase } from "@/lib/with-base";

const sectionImages = {
  "study-learning": {
    src: "/logos/takeNotes.png",
    alt: "Estudiante tomando apuntes mientras estudia.",
  },
  "communication-collaboration": {
    src: "/logos/communication.png",
    alt: "Estudiante comunicándose desde su computadora.",
  },
  "tips-recommendations": {
    src: "/logos/tips.png",
    alt: "Consejos y recomendaciones para estudiantes.",
  },
} as const;

export function SectionDirectory() {
  return (
    <section aria-labelledby="sections-heading" className="pb-16 md:pb-24">
      <Container>
        <div id="sections-heading">
          <SectionHeading
            kicker="Find your starting point"
            title="Choose your focus"
            description="Explore focused guides to studying, collaborating, and building useful habits."
          />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={section.href}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface text-left transition-colors hover:border-accent/50 hover:bg-surface/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-paper">
                <Image
                  src={withBase(sectionImages[section.id].src)}
                  alt={sectionImages[section.id].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <span className="font-display text-sm text-accent">
                  {section.number}
                </span>
                <div className="mt-6 text-left">
                  <p className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-accent-dark">
                    {section.kicker}
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-[1.02] tracking-[-0.03em] text-ink">
                    {section.name}
                  </h3>
                  <p className="mt-4 text-left text-sm leading-relaxed text-muted">
                    {section.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
