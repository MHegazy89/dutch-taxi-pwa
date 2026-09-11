import { test, expect } from '@playwright/test';

test.describe('CBR Mock Exam E2E Flow', () => {
  test('should navigate to mock exam, start, answer questions and view results', async ({ page }) => {
    await page.goto('/mock');

    // Check pre-exam screen
    await expect(page.locator('text=Officieel CBR Proefexamen (TVT)')).toBeVisible();
    await expect(page.locator('text=40 vragen')).toBeVisible();

    // Start exam
    await page.click('button:has-text("Start CBR Proefexamen")');

    // Verify in-exam elements
    await expect(page.locator('text=Vraag 1 / 40')).toBeVisible();

    // Select option A
    const firstOption = page.locator('button:has-text("A")').first();
    await firstOption.click();

    // Confirm and advance
    await page.click('button:has-text("Antwoord Bevestigen & Volgende")');
    await expect(page.locator('text=Vraag 2 / 40')).toBeVisible();
  });
});
