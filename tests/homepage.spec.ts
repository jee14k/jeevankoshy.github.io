import { test, expect } from '@playwright/test';

test('Home page loads with key content', async ({ page }) => {
  await page.goto('https://jeevankoshy.me');

  await expect(page.locator('text=Hi, I\'m Jeevan Koshy')).toBeVisible();
  await expect(page.locator('text=View My Work')).toBeVisible();
  await expect(page.locator('img[alt="Jeevan Koshy"]')).toBeVisible();
});
