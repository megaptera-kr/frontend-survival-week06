import { test, expect } from '@playwright/test';

test('Filter Restaurants', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Kiosk week 6' })).toBeVisible();

  const searchInput = page.getByLabel('search');

  await searchInput.fill('메가반점');

  await expect(page.getByText('짜장면')).toBeVisible();

  await searchInput.fill('아무거나');

  await expect(page.getByText('짜장면')).toBeHidden();

  await searchInput.fill(' ');

  const radioBtn = page.getByRole('radio', { name: '한식' });

  await radioBtn.click();

  await expect(page.getByText('메리김밥')).toBeVisible();

  await expect(page.getByText('메가반점')).toBeHidden();
});

test('Cart', async ({ page }) => {
  await page.goto('/');

  const addBtn = await page.waitForSelector('button[aria-label="짜장면 추가"]');

  await addBtn.click();
  await addBtn.click();

  await expect(page.getByText('총 주문 개수: 2개')).toBeVisible();
  await expect(page.getByText('총 주문 금액: 16,000원')).toBeVisible();

  const increaseBtn = page.locator('button[aria-label="짜장면 개수 증가"]');

  await increaseBtn.click();

  await expect(page.getByText('총 주문 개수: 3개')).toBeVisible();
  await expect(page.getByText('총 주문 금액: 24,000원')).toBeVisible();

  const decreaseBtn = page.locator('button[aria-label="짜장면 개수 감소"]');

  await decreaseBtn.click();
  await decreaseBtn.click();

  await expect(page.getByText('총 주문 개수: 1개')).toBeVisible();
  await expect(page.getByText('총 주문 금액: 8,000원')).toBeVisible();

  await decreaseBtn.click();

  await expect(page.getByText('총 주문 개수: 0개')).toBeVisible();
  await expect(page.getByText('총 주문 금액: 0원')).toBeVisible();

  await addBtn.click();

  const clearBtn = page.getByRole('button', { name: '비우기' });

  await clearBtn.click();

  await expect(page.getByText('총 주문 개수: 0개')).toBeVisible();
  await expect(page.getByText('총 주문 금액: 0원')).toBeVisible();

  await addBtn.click();

  const orderBtn = page.getByRole('button', { name: '주문하기' });

  await orderBtn.click();

  await expect(page.getByText('총 주문 개수: 0개')).toBeVisible();
  await expect(page.getByText('총 주문 금액: 0원')).toBeVisible();
});
