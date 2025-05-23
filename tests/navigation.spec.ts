import { test, expect } from '@playwright/test';

test('Navbar links navigate to sections', async ({ page }) => {
  await page.goto('https://jeevankoshy.me');

  const sections = ['about', 'experience', 'projects', 'education', 'contact'];
  for (const section of sections) {
    await page.click(`nav >> text=${section.charAt(0).toUpperCase() + section.slice(1)}`);
    const target = await page.locator(`#${section}`);
    await expect(target).toBeVisible();
  }
});
