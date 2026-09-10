import { expect, test } from '@playwright/test'

test('home page renders the demo navigation', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: 'Tooltip demo' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Directive simple' })).toBeVisible()
})

test('navigates to a demo through the nav bar', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('link', { name: 'Dropdown 1' }).click()

  await expect(page).toHaveURL(/\/component\/demo1$/)
  await expect(page.getByRole('heading', { name: 'Dropdown demo' })).toBeVisible()
})
