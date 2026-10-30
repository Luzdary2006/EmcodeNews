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
            kicker="Inside the issue"
            title="Three ways in"
            description="Start where the semester is loudest. Every section has a short introduction, the tools that fit, and a practical way to use them."
          />
        </div>

        <div className="mt-10 border-b border-line">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={section.href}
              className="group grid grid-cols-[auto_1fr] items-start gap-5 border-t border-line py-8 transition-colors hover:bg-surface/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:gap-8 sm:py-10"
            >
              <span className="pt-2 font-display text-sm text-muted">
                {section.number}
              </span>
              <div>
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-muted">
                  {section.kicker}
                </p>
                <h3 className="mt-2 font-display text-3xl leading-[1.02] tracking-[-0.03em] text-ink sm:text-5xl">
                  {section.name}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
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
