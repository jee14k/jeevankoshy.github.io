import { test, expect } from '@playwright/test';

test('Contact form has required fields', async ({ page }) => {
  await page.goto('http://localhost:5500/index.html');

  await expect(page.locator('#contact-form input[placeholder="Your Name"]')).toBeVisible();
  await expect(page.locator('#contact-form input[placeholder="Your Email"]')).toBeVisible();
  await expect(page.locator('#contact-form textarea[placeholder="Your Message"]')).toBeVisible();
});

test('Contact form shows toast after submission (simulate)', async ({ page }) => {
  await page.goto('http://localhost:5500/index.html');

  await page.fill('#contact-form input[placeholder="Your Name"]', 'Test User');
  await page.fill('#contact-form input[placeholder="Your Email"]', 'test@example.com');
  await page.fill('#contact-form textarea[placeholder="Your Message"]', 'Hello there!');

  await page.click('#contact-form button[type="submit"]');

  // Toast should appear — this might depend on JS logic, emailjs, etc.
  await expect(page.locator('#formToastBody')).toHaveText(/Message sent successfully/i);
});
