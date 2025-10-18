import { test, expect } from '@playwright/test';

test('CF-001| Verify homepage loads correctly', async ({ page }) => {
  await page.goto('https://jommakan.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(JomMakan);
});