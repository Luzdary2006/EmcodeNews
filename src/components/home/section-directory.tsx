import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { sections } from "@/data/sections";

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
              className="group flex h-full flex-col rounded-xl border border-line bg-surface p-6 text-left transition-colors hover:border-accent/50 hover:bg-surface/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:p-7"
            >
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
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
