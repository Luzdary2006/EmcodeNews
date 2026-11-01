import type { Metadata } from "next";
import { SectionCta } from "@/components/sections/section-cta";
import { SectionIntro } from "@/components/sections/section-intro";
import { StackCard } from "@/components/tips/stack-card";
import { TipCard } from "@/components/tips/tip-card";
import { ToolChip } from "@/components/tools/tool-chip";
import { ToolLogo } from "@/components/tools/tool-logo";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { ExternalLink } from "@/components/ui/external-link";
import { CheckIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { getSection } from "@/data/sections";
import { needs, stacks, tips } from "@/data/tips";
import { getToolBySlug, getToolsBySection } from "@/data/tools";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Tips & Recommendations",
  description:
    "Time management habits, needs-based recommendations, and tool stacks for individual study and group projects. Includes a ClickUp spotlight.",
  alternates: {
    canonical: "/tips-recommendations",
  },
};

const mockTasks = [
  { label: "Research outline", date: "Tue", done: true },
  { label: "First draft", date: "Thu", done: true },
  { label: "Slides", date: "Sat", done: false },
  { label: "Submit", date: "Mon", done: false },
];

export default function TipsPage() {
  const section = getSection("tips-recommendations");
  const sectionTools = getToolsBySection("tips-recommendations");
  const clickup = getToolBySlug("clickup");

  return (
    <>
      <SectionIntro
        section={section}
        toolCount={sectionTools.length}
        meta={[
          `${tips.length} habits`,
          `${stacks.length} stacks`,
          `${sectionTools.length} tool`,
        ]}
      />

      <section aria-labelledby="habits-heading" className="py-14 md:py-20">
        <Container>
          <div id="habits-heading">
            <SectionHeading
              kicker="Time & attention"
              title="Six habits worth more than any app"
              description="Short, practical, and deliberately unglamorous. Pick one and run it for two weeks before adding another."
            />
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tips.map((tip) => (
              <TipCard key={tip.id} tip={tip} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface/60">
        <Container className="py-14 md:py-16">
          <SectionHeading
            kicker="Choose by need"
            title="Start from the problem, not the product"
            description="Each recommendation explains why the combination works for the task, not just which apps are popular."
          />

          <div className="mt-8 border-b border-line">
            {needs.map((need, index) => (
              <div
                key={need.need}
                className="grid gap-4 border-t border-line py-6 md:grid-cols-12 md:items-start md:gap-6"
              >
                <span
                  aria-hidden="true"
                  className="font-display text-sm text-muted md:col-span-1"
                >
                  0{index + 1}
                </span>
                <h3 className="font-display text-2xl leading-tight tracking-[-0.02em] text-ink md:col-span-4">
                  {need.need}
                </h3>
                <p className="text-sm leading-relaxed text-muted md:col-span-4">
                  {need.why}
                </p>
                <div className="flex flex-wrap gap-2 md:col-span-3 md:justify-end">
                  {need.toolSlugs.map((slug) => {
                    const tool = getToolBySlug(slug);

                    return tool ? <ToolChip key={slug} tool={tool} /> : null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="stacks-heading" className="py-14 md:py-20">
        <Container>
          <div id="stacks-heading">
            <SectionHeading
              kicker="Stacks that work"
              title="Four combinations, four jobs"
              description="No stack is universal. These are starting points with a clear division of labour — each app has one job, so nothing competes for the same attention."
            />
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {stacks.map((stack) => (
              <StackCard key={stack.name} stack={stack} />
            ))}
          </div>
        </Container>
      </section>

      {clickup ? (
        <section
          aria-labelledby="clickup-heading"
          className="border-t border-line py-14 md:py-20"
        >
          <Container>
            <div className="overflow-hidden rounded-xl border border-line bg-surface">
              <div className="grid lg:grid-cols-12">
                <div className="p-7 lg:col-span-7 lg:p-10">
                  <div className="flex items-center gap-4">
                    <ToolLogo tool={clickup} size={52} />
                    <div>
                      <p className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-muted">
                        Tool spotlight
                      </p>
                      <h2
                        id="clickup-heading"
                        className="mt-1 font-display text-3xl tracking-[-0.03em] text-ink"
                      >
                        {clickup.name}
                      </h2>
                    </div>
                  </div>

                  <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
                    {clickup.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {clickup.benefits.slice(0, 3).map((benefit) => (
                      <li key={benefit} className="flex gap-3 text-sm text-ink-soft">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-ink" />
                        <span className="leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap items-center gap-5">
                    <ButtonLink href={`/tools/${clickup.slug}`}>
                      Read the ClickUp profile
                    </ButtonLink>
                    <ExternalLink href={clickup.officialUrl} className="text-sm">
                      Visit the official site
                    </ExternalLink>
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="border-t border-line bg-paper p-7 lg:col-span-5 lg:border-l lg:border-t-0 lg:p-10"
                >
                  <div className="rounded-lg border border-line bg-surface p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-muted">
                        This week
                      </p>
                      <span className="rounded-md bg-ink px-2 py-0.5 text-[0.6rem] uppercase tracking-wider text-paper">
                        2 / 4
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2.5">
                      {mockTasks.map((task) => (
                        <li
                          key={task.label}
                          className="flex items-center gap-3 rounded-lg border border-line bg-paper px-3 py-2.5"
                        >
                          <span
                            className={
                              task.done
                                ? "flex h-5 w-5 items-center justify-center rounded-md bg-ink text-paper"
                                : "h-5 w-5 rounded-md border border-ink/25"
                            }
                          >
                            {task.done ? (
                              <CheckIcon className="h-3 w-3" />
                            ) : null}
                          </span>
                          <span
                            className={
                              task.done
                                ? "flex-1 text-sm text-muted line-through"
                                : "flex-1 text-sm text-ink"
                            }
                          >
                            {task.label}
                          </span>
                          <span className="text-[0.65rem] uppercase tracking-wider text-muted">
                            {task.date}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-muted">
                    An illustrative board, not a real workspace. The point is
                    the shape: every deliverable has a next action and a date.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <SectionCta
        title="Put the advice to work"
        description="Pick one habit, one tool, and one shared space. That is enough to start. The full catalog lets you compare every option in the issue."
        primaryLabel="Open the catalog"
        secondaryHref="/communication-collaboration"
        secondaryLabel="See collaboration tools"
      />
    </>
  );
}
