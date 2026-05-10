import { test, expect } from '@playwright/test';

test.describe('Fluxo inicial (pt-BR por defeito)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('mostra a tela inicial em português', async ({ page }) => {
    await expect(page.locator('text=Chegue ao seu corpo.')).toBeVisible();
    await expect(page.locator('button:has-text("Iniciar ritual")')).toBeVisible();
  });

  test('avança para o ritual matinal', async ({ page }) => {
    await page.click('button:has-text("Iniciar ritual")');
    await expect(page.locator('text=Respire.')).toBeVisible();
  });

  test('alterna idioma para inglês', async ({ page }) => {
    await page.getByRole('button', { name: 'EN' }).click();
    await expect(page.locator('text=Arrive in your body.')).toBeVisible();
    await expect(page.locator('button:has-text("Begin ritual")')).toBeVisible();
  });
});

test.describe('Persistência de idioma', () => {
  test('recarrega com inglês quando dasein_locale=en', async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem('dasein_locale', 'en');
    });
    await page.goto('http://localhost:5173');
    await expect(page.locator('text=Arrive in your body.')).toBeVisible();
  });
});
