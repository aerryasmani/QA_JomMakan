import { test, expect } from '@playwright/test';
import { link } from 'fs';

const BaseURL = 'https://jommakan.app';
const PageTitle = 'JomMakan! - Makan Apa Hari Ni?';


//------- Helper Function for URL ------//
async function VerifyPageTitle(page) {
  await expect(page).toHaveTitle(PageTitle);
}


//------- Helper Function for Buttons ------//
async function VerifyButton(page, buttonName) {
  const button = page.getByRole('button', { name: buttonName });
  await expect(button).toBeVisible();
  await expect(button).toHaveText(buttonName);
  await button.click();
}

async function CloseButton(page) {
  const button = page.getByRole('button', { name: 'Back' });
  await expect(button).toBeVisible();
  await button.click();
}

async function FaqButton(page) {
  const button = page.getByRole('link', { name: 'Soalan Lazim' })

  await expect(button).toBeVisible();
  await expect(button).toHaveText('Soalan Lazim');
  await button.click();
}

async function FaqButton_Back(page) {
  const button = page.getByRole('link', { name: 'Kembali' })

  await expect(button).toBeVisible();
  await expect(button).toHaveText('Kembali');
  await button.click();
}

async function Footer_text(page) {
  const footer = page.getByRole('contentinfo');

  await expect(footer).toBeVisible();
  await expect(footer).toContainText('Project by Aerry & Aizat');
}

async function Footer_Button(page,linkName) {
  const button = page.getByRole('link', { name: linkName });
  await expect(button).toBeVisible();
  await expect(button).toHaveAttribute('href', expectedURL);
}

// Setup
test.beforeEach(async ({ page }) => {
  await page.goto(BaseURL);
});

/*
//------- Test Cases ------//
test('CF-001 | Verify homepage loads correctly', async ({ page }) => {
  await VerifyPageTitle(page);
});

test("CF-002| Verify the Logo Is Present", async ({ page }) => {  
  await expect(page).toHaveTitle(PageTitle);

  const Header1 = page.locator('h1');
  await expect(Header1).toBeVisible();
  await expect(Header1).toHaveText('JomMakan!')
});

test("CF-003| Verify the hero header content text is present", async ({ page }) => {  
  await VerifyPageTitle(page);

  const Header2 = page.locator('h2');
  await expect(Header2).toBeVisible();
  await expect(Header2).toHaveText('Makan Apa Hari Ni?')

  // Verify subtitle texts using text content (works even if class changes)
  await expect(page.getByText('Tak payah pening nak fikir makan apa.')).toBeVisible();
  await expect(page.getByText('Biar kami randomkan — sarapan, lunch, atau dinner.')).toBeVisible();

});

test("CF-004| Verify the 'Dapur Time' button is present and visible", async ({ page }) => {  
  
  await VerifyButton(page, 'Dapur Time')

  const DapurCategory = ['Sarapan', 'Makan Tengahari', 'Makan Malam'];
  for (const category of DapurCategory) {
    const categoryBtn = page.getByRole('button', { name: category });
    await expect(categoryBtn, `Button ${category} should be visible`).toBeVisible();
    await expect(categoryBtn).toHaveText(category);
  }

  await CloseButton(page);

  const Header2 = page.locator('h2');
  await expect(Header2).toHaveText('Makan Apa Hari Ni?');
});

test("CF-005| Verify the 'Tapau' button is present and visible", async ({ page }) => {  
  await VerifyButton(page, 'Tapau')

  const TapauCategory = ['Nasi', 'Mee', 'Roti Wrap', 'Sepinggan', 'Bakar Goreng', 'Ringan'];
  for (const category of TapauCategory) {
    const categoryBtn = page.getByRole('button', { name: category });
    await expect(categoryBtn, `Button ${category} should be visible`).toBeVisible();
    await expect(categoryBtn).toHaveText(category);
  }

  await CloseButton(page);

  const Header2 = page.locator('h2');
  await expect(Header2).toHaveText('Makan Apa Hari Ni?');

});


test("CF-006| Verify the 'Soalan Lazim' button is present and visible", async ({ page }) => {  
  await FaqButton(page, 'Soalan Lazim')
  await expect(page).toHaveURL('https://jommakan.app/soalan-lazim');

  const Header2 = page.locator('h2');
  await expect(Header2).toHaveText('Soalan Lazim');

  await FaqButton_Back(page);
  await expect(Header2).toHaveText('Makan Apa Hari Ni?');
});
*/

test("CF-007| Verify the footer content is present and visible", async ({ page }) => {  
  await Footer_text(page, 'Project by Aerry & Aizat')
  //await Footer_Button(page, 'GitHub', 'https://github.com/aizatsyafiq/JomMakan');
  //Trying to figure out why this is not working
  
});