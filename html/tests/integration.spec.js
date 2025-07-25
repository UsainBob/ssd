const { test, expect } = require('@playwright/test');

test('safe input redirects to result page', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await page.fill('#searchInput', 'safe test');
  await page.click('button[type="submit"]');
  await expect(page.url()).toMatch(/\/$|\/index\.html$/);
});

test('malicious input stays on home page', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await page.fill('#searchInput', '<script>alert(1)</script>');
  await page.click('button[type="submit"]');
  await expect(page.url()).toMatch(/\/$|\/index\.html$/);
});
