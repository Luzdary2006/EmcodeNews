import type { Tool } from "@/types/content";

export const tools: Tool[] = [
  {
    slug: "obsidian",
    name: "Obsidian",
    logo: "/logos/obsidian.svg",
    categories: ["study-learning"],
    section: "study-learning",
    tagline: "A private, linked second brain for everything you learn.",
    description:
      "Obsidian stores your notes as plain Markdown files on your own device. You can connect ideas with links, map a course with a visual graph, and keep every lecture, reading, and project note in a folder you actually own.",
    mainFunction:
      "Local-first note-taking with bidirectional links and a graph view.",
    benefits: [
      "Notes stay readable for years because they are plain Markdown files you own.",
      "Linking lecture notes to readings and assignments makes revision faster.",
      "Offline access is reliable in classrooms, libraries, and on the bus.",
      "A large plugin ecosystem adds flashcards, PDF annotation, and task tracking.",
    ],
    academicUseCases: [
      "Write one note per lecture and link it to a course index note.",
      "Turn readings into literature notes that connect to essay outlines.",
      "Build a revision map that shows how topics depend on each other.",
    ],
    pricing: {
      model: "free",
      note: "Free for personal use. A commercial licence is required for work use.",
      verifiedAt: "2026-10-29",
    },
    officialUrl: "https://obsidian.md",
    featured: true,
    keywords: [
      "notes",
      "note taking",
      "markdown",
      "knowledge base",
      "second brain",
      "linking",
      "offline",
      "revision",
      "study",
    ],
  },
  {
    slug: "notion",
    name: "Notion",
    logo: "/logos/notion.svg",
    categories: ["study-learning", "productivity-organization"],
    section: "study-learning",
    tagline: "Notes, databases, and project plans in one connected workspace.",
    description:
      "Notion combines documents, tables, and kanban boards, so a course syllabus, a reading list, and a group project can live in the same place. Templates make it quick to start, and sharing controls let you decide who sees each page.",
    mainFunction:
      "An all-in-one workspace for notes, databases, and project planning.",
    benefits: [
      "One workspace replaces scattered documents, spreadsheets, and task lists.",
      "Databases can sort assignments by due date, course, or status.",
      "Shared pages keep group work transparent without long email threads.",
      "Templates reduce setup time for common academic workflows.",
    ],
    academicUseCases: [
      "Track every assignment in a database with due dates and course tags.",
      "Build a shared project hub with meeting notes and a task board.",
      "Keep a semester dashboard with links to each course page.",
    ],
    pricing: {
      model: "freemium",
      note: "Free plan for individuals. The Plus plan is free for students and educators; paid plans add guests, history, and larger uploads.",
      verifiedAt: "2026-10-29",
    },
    officialUrl: "https://www.notion.com",
    featured: false,
    keywords: [
      "notes",
      "workspace",
      "database",
      "kanban",
      "tasks",
      "project planning",
      "templates",
      "organization",
    ],
  },
  {
    slug: "notebooklm",
    name: "NotebookLM",
    logo: "/logos/notebooklm.svg",
    categories: ["study-learning"],
    section: "study-learning",
    tagline: "Turn your sources into a study guide you can question.",
    description:
      "NotebookLM works from the documents you upload, not the open web. Add lecture slides, PDFs, and articles, then ask questions, generate summaries, or create an audio overview that walks through the material.",
    mainFunction:
      "Source-grounded research and study assistance powered by your own documents.",
    benefits: [
      "Answers cite the passages they come from, which makes fact-checking easier.",
      "Long readings become structured summaries and study questions.",
      "Audio overviews turn dead time into revision time.",
      "Working from your own sources reduces the risk of invented facts.",
    ],
    academicUseCases: [
      "Upload a week of readings and ask for the main arguments and tensions.",
      "Generate practice questions before an exam and check them against the source.",
      "Create a briefing document for a group project from shared research.",
    ],
    pricing: {
      model: "freemium",
      note: "Free with a Google account. Higher usage limits come with paid Google AI plans.",
      verifiedAt: "2026-10-29",
    },
    officialUrl: "https://notebooklm.google.com",
    featured: true,
    keywords: [
      "research",
      "reading",
      "summary",
      "summaries",
      "pdf",
      "sources",
      "study guide",
      "flashcards",
      "audio",
    ],
  },
  {
    slug: "codedex",
    name: "Codédex",
    logo: "/logos/codedex.svg",
    categories: ["study-learning"],
    section: "study-learning",
    tagline: "Learn to code through short, game-like courses.",
    description:
      "Codédex teaches programming with bite-sized lessons, projects, and a progress system that feels more like a game than a textbook. Courses cover Python, JavaScript, HTML, CSS, and more, with a friendly on-ramp for beginners.",
    mainFunction:
      "Interactive, beginner-friendly coding courses with projects and progress tracking.",
    benefits: [
      "Short lessons fit between classes and make starting less intimidating.",
      "Projects produce portfolio pieces instead of throwaway exercises.",
      "The playful structure helps beginners keep a daily practice.",
      "Multiple languages let you explore before committing to a specialty.",
    ],
    academicUseCases: [
      "Use it as a warm-up before a programming fundamentals course.",
      "Complete a project to support a portfolio or internship application.",
      "Review syntax in short sessions during exam week.",
    ],
    pricing: {
      model: "freemium",
      note: "Free lessons. A paid membership unlocks the full course catalogue.",
      verifiedAt: "2026-10-29",
    },
    officialUrl: "https://www.codedex.io",
    featured: false,
    keywords: [
      "programming",
      "coding",
      "python",
      "javascript",
      "html",
      "css",
      "beginner",
      "practice",
      "projects",
    ],
  },
  {
    slug: "freecodecamp",
    name: "freeCodeCamp",
    logo: "/logos/freecodecamp.svg",
    categories: ["study-learning"],
    section: "study-learning",
    tagline: "A free, certification-based curriculum for web development.",
    description:
      "freeCodeCamp offers a structured path through HTML, CSS, JavaScript, data structures, and back-end development. Each certification combines lessons, workshops, and projects, and the whole curriculum is free.",
    mainFunction:
      "Free, project-based web development curriculum with certifications.",
    benefits: [
      "No paywall: lessons, projects, and certifications are free.",
      "The curriculum follows a clear order, which helps self-taught learners.",
      "Projects give you concrete work to show in a portfolio.",
      "A large community and forum answer questions at every level.",
    ],
    academicUseCases: [
      "Supplement a web development course with extra practice.",
      "Build the required projects for a certificate during semester breaks.",
      "Use the responsive design section to prepare for a front-end assignment.",
    ],
    pricing: {
      model: "free",
      note: "Entirely free and supported by donations.",
      verifiedAt: "2026-10-29",
    },
    officialUrl: "https://www.freecodecamp.org",
    featured: false,
    keywords: [
      "programming",
      "coding",
      "web development",
      "javascript",
      "html",
      "css",
      "certification",
      "free",
      "practice",
    ],
  },
  {
    slug: "discord",
    name: "Discord",
    logo: "/logos/discord.svg",
    categories: ["communication-collaboration"],
    section: "communication-collaboration",
    tagline: "A shared space for your class, club, or study group.",
    description:
      "A real-time chat app with text, voice, and video channels. Teams can use it to hold quick check-in meetings, discuss ideas instantly, and organize conversations by topic.",
    mainFunction:
      "Organized text, voice, and video communication for groups.",
    benefits: [
      "Channels keep resources and conversations easy to find.",
      "Voice rooms allow spontaneous study sessions without scheduling a call.",
      "Screen sharing works well for peer tutoring and code reviews.",
      "Roles and permissions help large cohorts stay organized.",
    ],
    academicUseCases: [
      "Create a server per course with channels for notes, questions, and deadlines.",
      "Host a voice study room during exam week.",
      "Share screens to debug a group project together.",
    ],
    pricing: {
      model: "freemium",
      note: "Free to use. Discord Nitro is an optional personal upgrade.",
      verifiedAt: "2026-10-29",
    },
    officialUrl: "https://discord.com",
    featured: true,
    keywords: [
      "chat",
      "messaging",
      "voice",
      "video",
      "community",
      "study group",
      "channels",
      "screen sharing",
    ],
  },
  {
    slug: "jitsi-meet",
    name: "Jitsi Meet",
    logo: "/logos/jitsi.svg",
    categories: ["communication-collaboration"],
    section: "communication-collaboration",
    tagline: "Instant video meetings with no account required.",
    description:
      "Jitsi Meet opens a meeting room in the browser and lets you share a link. Guests do not need to install anything or create an account, which makes it a practical fallback when other platforms fail.",
    mainFunction:
      "Browser-based video conferencing with link-only access.",
    benefits: [
      "No account or installation is needed for guests.",
      "Screen sharing, chat, and recording are built in.",
      "The open-source model allows schools to self-host for privacy.",
      "A plain link is often the fastest way to get everyone into a call.",
    ],
    academicUseCases: [
      "Run a quick group meeting when a platform invitation fails.",
      "Host office hours with a link posted in the course channel.",
      "Record a rehearsal presentation and review it with your team.",
    ],
    pricing: {
      model: "free",
      note: "Free on the public service. Self-hosting is available at no licence cost.",
      verifiedAt: "2026-10-29",
    },
    officialUrl: "https://meet.jit.si",
    featured: false,
    keywords: [
      "video call",
      "meetings",
      "conference",
      "screen sharing",
      "no account",
      "open source",
      "remote",
    ],
  },
  {
    slug: "google-meet",
    name: "Google Meet",
    logo: "/logos/googlemeet.svg",
    categories: ["communication-collaboration"],
    section: "communication-collaboration",
    tagline: "Reliable video calls inside the Google ecosystem.",
    description:
      "Google Meet integrates with Calendar, Gmail, and Drive, so meetings appear where your schedule already lives. It is a dependable choice for classes, advising sessions, and team check-ins.",
    mainFunction:
      "Video conferencing integrated with Google Workspace.",
    benefits: [
      "Calendar integration creates a meeting link in a few clicks.",
      "Captions and screen sharing support lectures and presentations.",
      "Recording and live streaming are available on eligible plans.",
      "Most students already have access through a university account.",
    ],
    academicUseCases: [
      "Schedule a group project check-in directly from Google Calendar.",
      "Record a lecture or presentation for classmates who missed it.",
      "Meet with an advisor without installing extra software.",
    ],
    pricing: {
      model: "freemium",
      note: "Free with a Google account. Longer group calls and recordings require paid plans.",
      verifiedAt: "2026-10-29",
    },
    officialUrl: "https://meet.google.com",
    featured: false,
    keywords: [
      "video call",
      "meetings",
      "google",
      "calendar",
      "class",
      "remote",
      "captions",
      "screen sharing",
    ],
  },
  {
    slug: "github",
    name: "GitHub",
    logo: "/logos/github.svg",
    categories: ["communication-collaboration", "productivity-organization"],
    section: "communication-collaboration",
    tagline: "Version control and collaboration for code projects.",
    description:
      "A platform built for saving, tracking, and sharing code. In group projects, it helps team members work on the same software without overwriting each other's work or losing previous versions.",
    mainFunction:
      "Cloud hosting and collaboration tools for Git repositories.",
    benefits: [
      "Version history makes it safe to experiment and easy to recover.",
      "Pull requests create a clear review trail for group code.",
      "Issues and project boards turn requirements into trackable work.",
      "A public profile demonstrates real project experience to employers.",
    ],
    academicUseCases: [
      "Host a group programming assignment and review each other's branches.",
      "Track bugs and tasks with issues and a project board.",
      "Publish a course project as a portfolio repository with a README.",
    ],
    pricing: {
      model: "freemium",
      note: "Free for individuals, including unlimited public and private repositories. Paid plans add advanced team and enterprise features.",
      verifiedAt: "2026-10-29",
    },
    officialUrl: "https://github.com",
    featured: true,
    keywords: [
      "code",
      "git",
      "version control",
      "pull request",
      "collaboration",
      "programming",
      "portfolio",
      "projects",
    ],
  },
  {
    slug: "figma",
    name: "Figma",
    logo: "/logos/figma.svg",
    categories: ["communication-collaboration", "productivity-organization"],
    section: "communication-collaboration",
    tagline: "Design, prototype, and critique together in the browser.",
    description:
      "A collaborative online design tool where everyone can design together live. It’s ideal for creating visual wireframes, prototypes, and user interfaces while getting instant feedback from teammates.",
    mainFunction:
      "Collaborative interface design and prototyping in the browser.",
    benefits: [
      "Real-time collaboration removes the export-and-email loop.",
      "Comments keep feedback attached to the exact element.",
      "Prototypes make interaction ideas testable before development.",
      "The free education plan gives students access to professional features.",
    ],
    academicUseCases: [
      "Design a mobile app prototype for a human-computer interaction course.",
      "Run a group whiteboard session to map a project before coding.",
      "Collect visual feedback from teammates directly on the design.",
    ],
    pricing: {
      model: "freemium",
      note: "Free Starter plan with limited file history. Students can apply for a free education plan.",
      verifiedAt: "2026-10-29",
    },
    officialUrl: "https://www.figma.com",
    featured: true,
    keywords: [
      "design",
      "prototype",
      "ui",
      "ux",
      "wireframe",
      "whiteboard",
      "collaboration",
      "feedback",
    ],
  },
  {
    slug: "google-drive",
    name: "Google Drive",
    logo: "/logos/googledrive.svg",
    categories: ["communication-collaboration", "productivity-organization"],
    section: "communication-collaboration",
    tagline: "Shared files and documents your whole team can edit.",
    description:
      "A cloud storage service for creating and sharing documents, spreadsheets, and presentations. It lets the whole team write, edit, and organize project files together in one place.",
    mainFunction:
      "Cloud storage and real-time document collaboration.",
    benefits: [
      "Real-time editing avoids version conflicts in group documents.",
      "Link sharing makes distribution simple across devices.",
      "Comment and suggestion modes support peer review.",
      "Version history shows who changed what and when.",
    ],
    academicUseCases: [
      "Write a group report in Docs with tracked suggestions.",
      "Keep a shared folder of readings and lecture slides.",
      "Build a presentation in Slides and rehearse comments asynchronously.",
    ],
    pricing: {
      model: "freemium",
      note: "15 GB free with a Google account, shared across Drive, Gmail, and Photos. Paid storage tiers add more space.",
      verifiedAt: "2026-10-29",
    },
    officialUrl: "https://drive.google.com",
    featured: false,
    keywords: [
      "storage",
      "files",
      "documents",
      "docs",
      "sheets",
      "slides",
      "sharing",
      "collaboration",
      "google",
    ],
  },
  {
    slug: "clickup",
    name: "ClickUp",
    logo: "/logos/clickup.svg",
    categories: ["productivity-organization"],
    section: "tips-recommendations",
    tagline: "Plan assignments, deadlines, and team projects in one place.",
    description:
      "ClickUp combines tasks, lists, boards, calendars, and documents in a single workspace. For students, the useful part is the ability to see every deadline across courses and break a large project into manageable steps.",
    mainFunction:
      "Task and project management with multiple views and automations.",
    benefits: [
      "Multiple views let you switch between a deadline list and a board.",
      "Subtasks break large assignments into concrete next actions.",
      "Calendars pull deadlines into one weekly picture.",
      "The free plan covers individual students and small teams.",
    ],
    academicUseCases: [
      "Create one list per course and sort all assignments by due date.",
      "Break a final project into research, draft, review, and submit tasks.",
      "Share a team space with owners and due dates for each deliverable.",
    ],
    pricing: {
      model: "freemium",
      note: "Free Forever plan for individuals and small teams. Paid plans add automation and capacity.",
      verifiedAt: "2026-10-29",
    },
    officialUrl: "https://clickup.com",
    featured: true,
    keywords: [
      "tasks",
      "project management",
      "deadlines",
      "planning",
      "calendar",
      "productivity",
      "organization",
      "teamwork",
    ],
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getToolsBySection(section: Tool["section"]): Tool[] {
  return tools.filter((tool) => tool.section === section);
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((tool) => tool.featured);
}

export function getToolsByCategory(category: Tool["categories"][number]): Tool[] {
  return tools.filter((tool) => tool.categories.includes(category));
}

export function getRelatedTools(tool: Tool, limit = 3): Tool[] {
  return tools
    .filter(
      (candidate) =>
        candidate.slug !== tool.slug &&
        candidate.categories.some((category) =>
          tool.categories.includes(category),
        ),
    )
    .slice(0, limit);
}

export function getToolsBySlugs(slugs: string[]): Tool[] {
  return slugs
    .map((slug) => getToolBySlug(slug))
    .filter((tool): tool is Tool => Boolean(tool));
}
