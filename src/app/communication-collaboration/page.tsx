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
    "Explore GitHub, Discord, Figma, and Google Drive — four tools that help university teams communicate and collaborate.",
  alternates: {
    canonical: "/communication-collaboration",
  },
};

const toolRoles = [
  {
    name: "GitHub",
    body: "A platform built for saving, tracking, and sharing code. It helps team members work on the same software without overwriting each other's work or losing previous versions.",
  },
  {
    name: "Discord",
    body: "A real-time chat app with text, voice, and video channels. Teams can use it for quick check-in meetings, instant discussions, and conversations organized by topic.",
  },
  {
    name: "Figma",
    body: "A collaborative online design tool where everyone can design together live. It is ideal for visual wireframes, prototypes, and user interfaces with instant feedback from teammates.",
  },
  {
    name: "Google Drive",
    body: "A cloud storage service for creating and sharing documents, spreadsheets, and presentations. The whole team can write, edit, and organize project files together in one place.",
  },
];

export default function CommunicationPage() {
  const section = getSection("communication-collaboration");
  const sectionTools = getToolsBySection("communication-collaboration").filter(
    (tool) =>
      ["github", "discord", "figma", "google-drive"].includes(tool.slug),
  );

  return (
    <>
      <SectionIntro section={section} toolCount={sectionTools.length} />

      <section aria-labelledby="comm-tools-heading" className="py-14 md:py-20">
        <Container>
          <div id="comm-tools-heading">
            <SectionHeading
              kicker="The toolkit"
              title="Four tools for better collaboration"
              description="Numerous tools are available to enhance collaboration and communication. Here are four key options for keeping a group project connected and organized."
            />
          </div>
          <ToolGrid tools={sectionTools} className="mt-10" link={false} />
        </Container>
      </section>

      <section className="border-y border-line bg-surface/60">
        <Container className="py-14 md:py-16">
          <SectionHeading
            kicker="Choose the right workspace"
            title="Give every part of the project a home"
            description="The best tool depends on what the team needs to do. Each option supports a different part of the group workflow."
          />

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {toolRoles.map((tool, index) => (
              <article key={tool.name} className="border-t border-ink/15 pt-5">
                <p className="font-display text-sm text-muted">
                  0{index + 1}
                </p>
                <h3 className="mt-2 font-display text-3xl tracking-[-0.02em] text-ink">
                  {tool.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {tool.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <SectionCta
        title="Build a smoother group workflow"
        description="With the right tool for each task, your team can communicate clearly, share progress, and keep every project file organized."
        secondaryHref="/study-learning"
        secondaryLabel="Back to Study & Learning"
      />
    </>
  );
}
