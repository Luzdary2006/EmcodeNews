import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const pages = [
  { path: "/", name: "home" },
  { path: "/tools", name: "catalog" },
  { path: "/study-learning", name: "study" },
  { path: "/communication-collaboration", name: "communication" },
  { path: "/tips-recommendations", name: "tips" },
  { path: "/tools/obsidian", name: "tool profile" },
  { path: "/missing-page", name: "not found" },
];

for (const target of pages) {
  test(`${target.name} has no detectable accessibility violations`, async ({
    page,
  }) => {
    await page.goto(target.path);

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(
      results.violations.map((violation) => ({
        id: violation.id,
        impact: violation.impact,
        nodes: violation.nodes.map((node) => node.target.join(" ")),
      })),
    ).toEqual([]);
  });
}

test("no horizontal overflow at mobile, tablet, and desktop widths", async ({
  page,
}) => {
  for (const width of [390, 834, 1280]) {
    await page.setViewportSize({ width, height: 900 });

    for (const target of pages) {
      await page.goto(target.path);

      const overflow = await page.evaluate(
        () =>
          document.documentElement.scrollWidth -
          document.documentElement.clientWidth,
      );

      expect(
        overflow,
        `${target.path} overflows by ${overflow}px at ${width}px`,
      ).toBeLessThanOrEqual(1);
    }
  }
});
