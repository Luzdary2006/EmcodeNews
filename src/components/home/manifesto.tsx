import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function Manifesto() {
  return (
    <section className="bg-ink text-paper">
      <Container className="grid gap-10 py-16 md:py-20 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-paper/90">
            The editorial line
          </p>
          <p className="mt-5 text-balance font-display text-[clamp(2rem,4.6vw,3.6rem)] font-light leading-[1.08] tracking-[-0.03em]">
            A tool is not a system. The system is the small routine you repeat
            when nobody is watching.
          </p>
        </div>
        <div className="lg:col-span-4 lg:flex lg:justify-end">
          <ButtonLink
            href="/tips-recommendations"
            variant="light"
            className="focus-visible:outline-paper"
          >
            Read the tips
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
