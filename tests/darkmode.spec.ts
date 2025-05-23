import { test, expect } from '@playwright/test';

test('Dark mode toggle switches theme', async ({ page }) => {
  await page.goto('https://jeevankoshy.me');
  
  await page.click('#darkModeToggle');
  await expect(page.locator('body')).toHaveClass(/dark-mode/);
});
