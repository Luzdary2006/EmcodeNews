import type { CategoryId, Tool } from "@/types/content";

export function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function buildHaystack(tool: Tool): string {
  return normalize(
    [
      tool.name,
      tool.tagline,
      tool.description,
      tool.mainFunction,
      tool.categories.join(" "),
      tool.keywords.join(" "),
    ].join(" "),
  );
}

/**
 * Small, dependency-free search tuned for a dozen items.
 * Name matches rank above keyword matches; every token must match.
 */
export function searchTools(toolList: Tool[], query: string): Tool[] {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return toolList;
  }

  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);

  return toolList
    .map((tool) => {
      const name = normalize(tool.name);
      const haystack = buildHaystack(tool);
      let score = 0;

      for (const token of tokens) {
        if (name === token) {
          score += 100;
        } else if (name.startsWith(token)) {
          score += 50;
        } else if (name.includes(token)) {
          score += 30;
        } else if (haystack.includes(token)) {
          score += 10;
        } else {
          return { tool, score: -1 };
        }
      }

      return { tool, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
    .map((entry) => entry.tool);
}

export function filterToolsByCategory(
  toolList: Tool[],
  category: CategoryId | "all",
): Tool[] {
  if (category === "all") {
    return toolList;
  }

  return toolList.filter((tool) => tool.categories.includes(category));
}
