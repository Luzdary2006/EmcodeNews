import { expect, test } from "@playwright/test";

test.describe("home", () => {
  test("shows the issue and links to every section", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /The digital toolkit for university life/i,
      }),
    ).toBeVisible();

    for (const name of [
      "Study & Learning",
      "Communication & Collaboration",
      "Tips & Recommendations",
    ]) {
      await expect(
        page.getByRole("link", { name }).first(),
      ).toBeVisible();
    }
  });

  test("catalog link reaches the full toolkit", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /Browse all 12 tools/i }).click();

    await expect(page).toHaveURL(/\/tools$/);
    await expect(
      page.getByRole("heading", { level: 1, name: /Everything in the issue/i }),
    ).toBeVisible();
  });
});

test.describe("tool catalog", () => {
  test("searches by name and syncs the URL", async ({ page }) => {
    await page.goto("/tools");

    await page.getByLabel("Search the toolkit").fill("figma");

    const grid = page.getByRole("link", { name: /Figma/ });
    await expect(grid).toBeVisible();
    await expect(
      page.getByText(/Showing 1 of 12 tools/),
    ).toBeVisible();
    await expect(page).toHaveURL(/q=figma/);
  });

  test("filters by category", async ({ page }) => {
    await page.goto("/tools?category=productivity-organization");

    await expect(
      page.getByText(/Showing 5 of 12 tools/),
    ).toBeVisible();

    await page.getByRole("button", { name: /^All tools/ }).click();
    await expect(page.getByText(/Showing 12 of 12 tools/)).toBeVisible();
  });

  test("empty state can be reset", async ({ page }) => {
    await page.goto("/tools?q=zzzzzz");

    await expect(page.getByText(/No tools match that search/i)).toBeVisible();

    await page
      .getByRole("button", { name: /Clear search and filters/i })
      .click();

    await expect(page.getByText(/Showing 12 of 12 tools/)).toBeVisible();
  });
});

test.describe("tool profile", () => {
  test("renders the profile and an external official link", async ({ page }) => {
    await page.goto("/tools/obsidian");

    await expect(
      page.getByRole("heading", { level: 1, name: "Obsidian" }),
    ).toBeVisible();

    const official = page
      .getByRole("link", { name: /Official website/i })
      .first();
    await expect(official).toHaveAttribute("href", "https://obsidian.md");
    await expect(official).toHaveAttribute("target", "_blank");
    await expect(official).toHaveAttribute("rel", /noopener/);
  });
});

test.describe("navigation", () => {
  test("mobile menu opens, traps focus, and closes with Escape", async ({
    page,
  }, testInfo) => {
    test.skip(testInfo.project.name !== "mobile", "mobile-only interaction");

    await page.goto("/");
    await page.getByRole("button", { name: /Open navigation menu/i }).click();

    const menu = page.getByRole("navigation", { name: "Mobile primary" });
    await expect(menu).toBeVisible();
    await expect(
      page
        .locator("#mobile-menu")
        .getByRole("button", { name: /Close navigation menu/i }),
    ).toBeFocused();

    await page.keyboard.press("Escape");
    await expect(menu).toBeHidden();
    await expect(
      page.getByRole("button", { name: /Open navigation menu/i }),
    ).toBeFocused();
  });

  test("unknown tool slug shows the not-found page", async ({ page }) => {
    await page.goto("/tools/does-not-exist");

    await expect(
      page.getByRole("heading", { level: 1, name: /not in the issue/i }),
    ).toBeVisible();

    // The streamed route returns a 200 with a noindex directive rather than a
    // bare 404 status, so crawlers do not index the soft 404.
    await expect(page.locator('meta[name="robots"]').first()).toHaveAttribute(
      "content",
      /noindex/,
    );
  });
});
