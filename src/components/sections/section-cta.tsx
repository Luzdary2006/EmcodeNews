import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

interface SectionCtaProps {
  title?: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function SectionCta({
  title = "Keep exploring",
  description,
  primaryHref = "/tools",
  primaryLabel = "Browse the full toolkit",
  secondaryHref = "/tips-recommendations",
  secondaryLabel = "Read the tips",
}: SectionCtaProps) {
  return (
    <section className="bg-ink text-paper">
      <Container className="flex flex-col gap-8 py-14 md:flex-row md:items-end md:justify-between md:py-16">
        <div className="max-w-xl">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-paper/70">
            Next
          </p>
          <h2 className="mt-3 font-display text-4xl leading-[1.02] tracking-[-0.03em] sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-paper/60">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <ButtonLink
            href={primaryHref}
            variant="light"
            className="focus-visible:outline-paper"
          >
            {primaryLabel}
          </ButtonLink>
          <ButtonLink
            href={secondaryHref}
            variant="ghost"
            className="text-paper decoration-paper/30 hover:decoration-paper focus-visible:outline-paper"
          >
            {secondaryLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
