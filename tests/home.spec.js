const { test, expect } = require('@playwright/test');

test('homepage has title and loads correctly', async ({ page }) => {
  await page.goto('https://jeevankoshy.me/');
  await expect(page).toHaveTitle(/Jeevan Koshy/);
});
