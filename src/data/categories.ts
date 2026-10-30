import type { Category, CategoryId } from "@/types/content";

export const categories: Category[] = [
  {
    id: "study-learning",
    name: "Study & Learning",
    shortName: "Study",
    description:
      "Notes, research, and practice platforms that make learning stick.",
    href: "/study-learning",
  },
  {
    id: "communication-collaboration",
    name: "Communication & Collaboration",
    shortName: "Collaboration",
    description:
      "Spaces to talk, meet, share files, and build projects together.",
    href: "/communication-collaboration",
  },
  {
    id: "productivity-organization",
    name: "Productivity & Organization",
    shortName: "Productivity",
    description:
      "Planning systems that keep deadlines and priorities visible.",
    href: "/tools?category=productivity-organization",
  },
];

export const categoryIds = categories.map((category) => category.id);

export function isCategoryId(value: string | null): value is CategoryId {
  return categoryIds.includes(value as CategoryId);
}

export function getCategory(id: CategoryId): Category {
  const category = categories.find((item) => item.id === id);

  if (!category) {
    throw new Error(`Unknown category: ${id}`);
  }

  return category;
}
