import { test, expect } from '@playwright/test';

test.describe('Fluxo inicial', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('mostra a tela inicial corretamente', async ({ page }) => {
    await expect(page.locator('text=Chegue ao seu corpo.')).toBeVisible();
    await expect(page.locator('button:has-text("Iniciar ritual")')).toBeVisible();
  });

  test('avança para o ritual matinal', async ({ page }) => {
    await page.click('button:has-text("Iniciar ritual")');
    await expect(page.locator('text=Respire.')).toBeVisible();
  });
});
