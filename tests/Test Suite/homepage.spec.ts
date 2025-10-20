import { test, expect } from '@playwright/test';

test('CF-001| Verify homepage loads correctly', async ({ page }) => {
  await page.goto('https://jommakan.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('JomMakan! - Makan Apa Hari Ni?');
});

test  ("CF-002| Verify the Logo Is Present", async ({ page }) => {  
  await page.goto('https://jommakan.app/');
  await expect(page).toHaveTitle('JomMakan! - Makan Apa Hari Ni?');

    // Expect a title "to contain" a substring.
  const Header1 = page.locator('h1');
  await expect(Header1).toBeVisible();
  await expect(Header1).toHaveText('JomMakan!')
});

test  ("CF-003| Verify the hero header content text is present", async ({ page }) => {  
  await page.goto('https://jommakan.app/');
  await expect(page).toHaveTitle('JomMakan! - Makan Apa Hari Ni?');

    // Expect a title "to contain" a substring.
  const Header2 = page.locator('h2');
  await expect(Header2).toBeVisible();
  await expect(Header2).toHaveText('Makan Apa Hari Ni?')

  // Verify subtitle texts using text content (works even if class changes)
  await expect(page.getByText('Tak payah pening nak fikir makan apa.')).toBeVisible();
  await expect(page.getByText('Biar kami randomkan — sarapan, lunch, atau dinner.')).toBeVisible();

});

test  ("CF-004| Verify the 'Dapur Time' button is present and visible", async ({ page }) => {  
  await page.goto('https://jommakan.app/');

  const Btn_DapurTime = page.getByRole('button', { name: 'Dapur Time' })
  await expect(Btn_DapurTime).toBeVisible({ timeout: 10000 });
  await expect(Btn_DapurTime).toHaveText('Dapur Time');

});

