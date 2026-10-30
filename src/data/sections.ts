import type { Section, SectionId } from "@/types/content";

export const sections: Section[] = [
  {
    id: "study-learning",
    number: "01",
    name: "Study & Learning",
    shortName: "Study",
    href: "/study-learning",
    kicker: "Read, note, practise",
    tagline: "Read, take notes, and practise with intention.",
    description:
      "The tools in this section help you capture what you learn, connect ideas across courses, and test your understanding before an exam does it for you.",
  },
  {
    id: "communication-collaboration",
    number: "02",
    name: "Communication & Collaboration",
    shortName: "Collaboration",
    href: "/communication-collaboration",
    kicker: "Talk, meet, build",
    tagline: "Talk, meet, and build projects without the chaos.",
    description:
      "Group work fails when the conversation lives in five different places. These tools give a team a shared room, a shared file, and a shared plan.",
  },
  {
    id: "tips-recommendations",
    number: "03",
    name: "Tips & Recommendations",
    shortName: "Tips",
    href: "/tips-recommendations",
    kicker: "Plan, focus, reset",
    tagline: "Build a routine that survives the semester.",
    description:
      "A good tool is only half the answer. This section covers the habits, combinations, and small decisions that keep a digital workspace useful.",
  },
];

export function getSection(id: SectionId): Section {
  const section = sections.find((item) => item.id === id);

  if (!section) {
    throw new Error(`Unknown section: ${id}`);
  }

  return section;
}
