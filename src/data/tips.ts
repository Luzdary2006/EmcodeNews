import type { NeedRecommendation, Tip, ToolStack } from "@/types/content";

export const tips: Tip[] = [
  {
    id: "plan-the-week",
    number: "01",
    topic: "Planning",
    title: "Plan the week, not the day",
    summary:
      "A weekly review gives you a map. A daily list only gives you a direction.",
    body: "At the start of each week, list your deadlines and commitments. Then choose the three outcomes that matter most.",
  },
  {
    id: "one-home-per-course",
    number: "02",
    topic: "Organization",
    title: "Give every course one home",
    summary:
      "If a file could live in three places, it will eventually live in none of them.",
    body: "Decide where each course lives before the semester gets busy: one folder, one note, or one project page. Put the syllabus, readings, notes, and assignments there. When you need something, you should not have to remember which app you used in week three.",
  },
  {
    id: "focused-blocks",
    number: "03",
    topic: "Focus",
    title: "Study in focused blocks",
    summary:
      "Fifty minutes of single-task work beats three hours of interrupted browsing.",
    body: "Choose one task, close distractions, and work for fifty minutes. When the timer rings, take a real break before your next block.",
  },
  {
    id: "notes-you-can-reuse",
    number: "04",
    topic: "Notes",
    title: "Write notes you can reuse",
    summary:
      "A transcript records a lecture. A summary prepares you for the exam.",
    body: "After each lecture, write five lines in your own words: the main idea, one example, one question, and two links to earlier material.",
  },
  {
    id: "weekly-reset",
    number: "05",
    topic: "Planning",
    title: "Close the loop with a weekly reset",
    summary:
      "Twenty minutes on Friday saves an hour of panic on Monday.",
    body: "Empty your inbox, move loose notes into the right course, check next week's deadlines, and choose your first task for Monday. A reset is not about perfection. It is about making sure nothing important is hiding in a browser tab you forgot to close.",
  },
  {
    id: "protect-attention",
    number: "06",
    topic: "Focus",
    title: "Protect your attention by default",
    summary:
      "Willpower is a poor notification filter.",
    body: "Turn off non-essential notifications during study blocks, keep the phone out of reach, and use one browser window for the task at hand. If a group chat is essential, mute it for the length of the block and tell the team when you will be back.",
  },
];

export const needs: NeedRecommendation[] = [
  {
    need: "Taking notes in lectures",
    why: "Capture quickly, then connect the lecture to the rest of the course.",
    toolSlugs: ["obsidian", "notion"],
  },
  {
    need: "Learning to code",
    why: "Practice with structured lessons, then keep your work in version control.",
    toolSlugs: ["freecodecamp", "codedex", "github"],
  },
  {
    need: "Running a group project",
    why: "A shared folder, a conversation space, and one place for deadlines.",
    toolSlugs: ["google-drive", "discord", "clickup"],
  },
  {
    need: "Designing a prototype",
    why: "Move from a rough idea to a clickable design with feedback attached.",
    toolSlugs: ["figma", "google-drive"],
  },
  {
    need: "Meeting remotely",
    why: "One dependable option for scheduled calls and one for instant links.",
    toolSlugs: ["google-meet", "jitsi-meet"],
  },
];

export const stacks: ToolStack[] = [
  {
    name: "The lecture-to-revision stack",
    audience: "Individual",
    description:
      "Capture the lecture in Obsidian, then use NotebookLM to interrogate the readings behind it. One app stores your thinking; the other tests it.",
    toolSlugs: ["obsidian", "notebooklm"],
    workflow: [
      "Write a short lecture note in Obsidian and link it to the course index.",
      "Upload the week's readings to NotebookLM and ask for the main arguments.",
      "Add the answers you trust back into the lecture note as revision prompts.",
    ],
  },
  {
    name: "The coding starter stack",
    audience: "Individual",
    description:
      "Use freeCodeCamp for a structured curriculum, Codédex for short daily practice, and GitHub to keep every project you finish.",
    toolSlugs: ["freecodecamp", "codedex", "github"],
    workflow: [
      "Follow freeCodeCamp for the core path and its certification projects.",
      "Use Codédex when you only have fifteen minutes between classes.",
      "Push each project to GitHub with a README that explains what you learned.",
    ],
  },
  {
    name: "The group project stack",
    audience: "Team",
    description:
      "Google Drive holds the files, Discord holds the conversation, and ClickUp holds the plan. Each tool has one job, so nobody has to guess where to look.",
    toolSlugs: ["google-drive", "discord", "clickup"],
    workflow: [
      "Create one shared Drive folder with subfolders for research, drafts, and final files.",
      "Set up a Discord server with channels for announcements, questions, and off-topic chat.",
      "Break the deliverable into ClickUp tasks with an owner and a due date.",
    ],
  },
  {
    name: "The design sprint stack",
    audience: "Team",
    description:
      "Figma is the working surface, Drive is the archive, and Google Meet is the room where decisions get made. Good for a course project with a visual deliverable.",
    toolSlugs: ["figma", "google-drive", "google-meet"],
    workflow: [
      "Run the first whiteboard session in Figma and leave comments on each direction.",
      "Meet in Google Meet to choose one direction and assign the next screens.",
      "Export the final files and the decision notes into the shared Drive folder.",
    ],
  },
];
