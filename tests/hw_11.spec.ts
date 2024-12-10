import { test, expect } from "@playwright/test";

test("task1", async ({ page }) => {
  test.setTimeout(10000);
  await page.goto("https://example.com");

  const title = await page.title();
  expect(title).toBe("Example Domain");

  const url = page.url();
  expect(url).toContain("example.com");

  const text = await page.content();
  expect(text).toMatch("This domain is for use in illustrative examples");

  const tag_h1 = page.locator("h1");
  await expect(tag_h1).toHaveText("Example Domain");
});

test("task2", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  const url = page.url();
  expect(url.startsWith("https://playwright.dev")).toBe(true);

  const links = page.locator('a:has-text("Get started")');
  await expect(links).toHaveCount(1);
});

test("task3", async ({ page }) => {
  await page.goto("https://www.google.com");

  await page.locator('button:has-text("Accept all")').click();

  const searchField = page.locator('textarea[name="q"]');
  await searchField.fill("Playwright");
  await page.keyboard.press("Enter");

  await page.waitForSelector("h3");

  const content = await page.content();
  expect(content).toContain("Playwright");
});

test("task4", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  const title = page.locator(".hero__title");
  await expect(title).toContainText("Playwright");
});
