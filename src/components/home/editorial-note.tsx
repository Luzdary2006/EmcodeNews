import { Container } from "@/components/ui/container";
import { site } from "@/data/site";

const principles = [
  {
    title: "Reviewed for students",
    body: "Every entry is written around academic use: lectures, revision, group work, and the week before a deadline.",
  },
  {
    title: "Pricing, checked",
    body: `Free plans and paid tiers are verified against official sources on ${site.updated}. Details can change, so confirm before you subscribe.`,
  },
  {
    title: "Not a ranking",
    body: "There is no paid placement here. A tool is included because it does a job well, not because it has a marketing budget.",
  },
];

export function EditorialNote() {
  return (
    <section aria-labelledby="principles-heading" className="border-y border-line">
      <Container className="py-14 md:py-16">
        <h2
          id="principles-heading"
          className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-accent-dark"
        >
          How this magazine works
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
          {principles.map((principle, index) => (
            <div key={principle.title} className="border-t border-accent/35 pt-5">
              <p className="font-display text-lg text-accent">
                0{index + 1}
              </p>
              <h3 className="mt-2 font-display text-2xl tracking-[-0.02em] text-ink">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {principle.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
