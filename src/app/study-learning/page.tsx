import type { Metadata } from "next";
import { SectionCta } from "@/components/sections/section-cta";
import { SectionIntro } from "@/components/sections/section-intro";
import { TipCard } from "@/components/tips/tip-card";
import { ToolChip } from "@/components/tools/tool-chip";
import { ToolGrid } from "@/components/tools/tool-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getSection } from "@/data/sections";
import { tips } from "@/data/tips";
import { getToolBySlug, getToolsBySection } from "@/data/tools";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Study & Learning",
  description:
    "Note-taking, research, and coding practice tools for university students: Obsidian, Notion, NotebookLM, Codédex, and freeCodeCamp.",
  alternates: {
    canonical: "/study-learning",
  },
};

const routineTipIds = [
  "plan-the-week",
  "focused-blocks",
  "notes-you-can-reuse",
];

const taskRoutes = [
  {
    task: "Capture a lecture",
    toolSlugs: ["obsidian", "notion"],
  },
  {
    task: "Understand a long reading",
    toolSlugs: ["notebooklm"],
  },
  {
    task: "Practice programming",
    toolSlugs: ["freecodecamp", "codedex"],
  },
];

export default function StudyLearningPage() {
  const section = getSection("study-learning");
  const sectionTools = getToolsBySection("study-learning");
  const routineTips = routineTipIds
    .map((id) => tips.find((tip) => tip.id === id))
    .filter((tip): tip is (typeof tips)[number] => Boolean(tip));

  return (
    <>
      <SectionIntro section={section} toolCount={sectionTools.length} />

      <section aria-labelledby="study-tools-heading" className="py-14 md:py-20">
        <Container>
          <div id="study-tools-heading">
            <SectionHeading
              kicker="The toolkit"
              title="Five tools for the work of learning"
              description="Two note-taking systems, one research assistant, and two places to practice code. They overlap on purpose: the right choice depends on whether you are capturing, understanding, or practicing."
            />
          </div>
          <ToolGrid tools={sectionTools} className="mt-10" />
        </Container>
      </section>

      <section className="border-y border-line bg-surface/60">
        <Container className="py-14 md:py-16">
          <SectionHeading
            kicker="Pick by task"
            title="What are you trying to do?"
            description="A quick route from the task in front of you to a tool that fits."
          />
          <div className="mt-8 border-b border-line">
            {taskRoutes.map((route) => (
              <div
                key={route.task}
                className="flex flex-col gap-3 border-t border-line py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <p className="font-display text-xl tracking-[-0.01em] text-ink">
                  {route.task}
                </p>
                <div className="flex flex-wrap gap-2">
                  {route.toolSlugs.map((slug) => {
                    const tool = getToolBySlug(slug);

                    return tool ? <ToolChip key={slug} tool={tool} /> : null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="routine-heading" className="py-14 md:py-20">
        <Container>
          <div id="routine-heading">
            <SectionHeading
              kicker="A routine that sticks"
              title="Before you install anything"
              description="Tools do not create habits. These three habits make the tools worth keeping."
            />
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {routineTips.map((tip) => (
              <TipCard key={tip.id} tip={tip} />
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-line bg-surface p-6 md:p-8">
            <p className="max-w-3xl text-pretty font-display text-2xl leading-snug tracking-[-0.01em] text-ink">
              The pattern: capture in one place, compress it in your own words,
              and test yourself later. Obsidian and NotebookLM support that
              pattern. They do not replace it.
            </p>
          </div>
        </Container>
      </section>

      <SectionCta
        title="Build the rest of the semester"
        description="Study tools work better when the group project has a shared room and the week has a plan. Continue with collaboration or jump straight to the habits."
      />
    </>
  );
}
