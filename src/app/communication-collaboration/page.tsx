import type { Metadata } from "next";
import { SectionCta } from "@/components/sections/section-cta";
import { SectionIntro } from "@/components/sections/section-intro";
import { ToolGrid } from "@/components/tools/tool-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getSection } from "@/data/sections";
import { getToolsBySection } from "@/data/tools";

export const metadata: Metadata = {
  title: "Communication & Collaboration",
  description:
    "Compare Discord, Jitsi Meet, Google Meet, GitHub, Figma, and Google Drive — the tools that keep university group work moving.",
  alternates: {
    canonical: "/communication-collaboration",
  },
};

const comparison = [
  {
    label: "Account needed",
    jitsi: "No",
    meet: "Google account",
  },
  {
    label: "Best for",
    jitsi: "Quick, ad-hoc calls",
    meet: "Scheduled classes and advising",
  },
  {
    label: "Standout feature",
    jitsi: "Anyone with the link can join",
    meet: "Calendar, Drive, and recording integration",
  },
  {
    label: "Pricing",
    jitsi: "Free public service",
    meet: "Free tier, paid plans for longer calls",
  },
];

const groupNeeds = [
  {
    need: "A room",
    body: "One place for announcements, questions, and quick decisions. Discord channels keep the conversation from scattering across group chats.",
  },
  {
    need: "A file",
    body: "One shared folder with a predictable structure. Google Drive gives every teammate the same version of the document.",
  },
  {
    need: "A plan",
    body: "One list of deliverables with an owner and a date. GitHub issues or ClickUp tasks make progress visible.",
  },
];

export default function CommunicationPage() {
  const section = getSection("communication-collaboration");
  const sectionTools = getToolsBySection("communication-collaboration");

  return (
    <>
      <SectionIntro section={section} toolCount={sectionTools.length} />

      <section aria-labelledby="comm-tools-heading" className="py-14 md:py-20">
        <Container>
          <div id="comm-tools-heading">
            <SectionHeading
              kicker="The toolkit"
              title="Six tools for a team that has to ship"
              description="Communication, meetings, files, design, and code. Most group projects need three of these at once, which is why the combinations matter more than any single app."
            />
          </div>
          <ToolGrid tools={sectionTools} className="mt-10" />
        </Container>
      </section>

      <section className="border-y border-line bg-surface/60">
        <Container className="py-14 md:py-16">
          <SectionHeading
            kicker="Meetings"
            title="Jitsi Meet or Google Meet?"
            description="Both get a group into a video call. The difference is how the meeting starts and what happens to the recording afterwards."
          />

          <div
            role="region"
            aria-label="Jitsi Meet and Google Meet comparison"
            tabIndex={0}
            className="mt-8 overflow-x-auto rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
              <caption className="sr-only">
                Comparison of Jitsi Meet and Google Meet by account
                requirements, best use, standout feature, and pricing.
              </caption>
              <thead>
                <tr className="border-y border-ink/20">
                  <th
                    scope="col"
                    className="w-1/4 py-4 pr-4 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-muted"
                  >
                    Consideration
                  </th>
                  <th
                    scope="col"
                    className="w-[37.5%] py-4 pr-4 font-display text-xl font-normal tracking-[-0.01em] text-ink"
                  >
                    Jitsi Meet
                  </th>
                  <th
                    scope="col"
                    className="w-[37.5%] py-4 font-display text-xl font-normal tracking-[-0.01em] text-ink"
                  >
                    Google Meet
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-b border-line">
                    <th
                      scope="row"
                      className="py-4 pr-4 align-top text-xs font-medium text-muted"
                    >
                      {row.label}
                    </th>
                    <td className="py-4 pr-4 align-top text-ink-soft">
                      {row.jitsi}
                    </td>
                    <td className="py-4 align-top text-ink-soft">
                      {row.meet}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
            A practical rule: use Google Meet when the meeting is on the
            calendar and needs a record. Use Jitsi when you need a room in the
            next thirty seconds and cannot assume everyone has an account.
          </p>
        </Container>
      </section>

      <section aria-labelledby="group-needs-heading" className="py-14 md:py-20">
        <Container>
          <div id="group-needs-heading">
            <SectionHeading
              kicker="Group work"
              title="Three things every team needs"
              description="Assign one tool to each job. When a team knows where to look, the meetings get shorter."
            />
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
            {groupNeeds.map((item, index) => (
              <div key={item.need} className="border-t border-ink/15 pt-5">
                <p className="font-display text-sm text-muted">
                  0{index + 1}
                </p>
                <h3 className="mt-2 font-display text-3xl tracking-[-0.02em] text-ink">
                  {item.need}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <SectionCta
        title="Turn the tools into a workflow"
        description="The group project stack — Drive, Discord, and ClickUp — is laid out step by step in Tips & Recommendations, alongside the habits that keep it running."
        secondaryHref="/study-learning"
        secondaryLabel="Back to Study & Learning"
      />
    </>
  );
}
