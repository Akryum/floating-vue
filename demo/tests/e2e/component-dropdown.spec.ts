import { expect, test } from '@playwright/test'

test('opens a dropdown on click and closes it with v-close-popper', async ({ page }) => {
  await page.goto('/component/demo1')

  const popper = page.locator('.v-popper__popper--shown')
  await expect(popper).toHaveCount(0)

  await page.locator('#dropdown-btn').click()
  await expect(popper).toBeVisible()
  await expect(popper).toContainText('Hello from v-tooltip + Vue 3')

  await popper.getByRole('button', { name: 'Close', exact: true }).first().click()
  await expect(page.locator('.v-popper__popper--shown')).toHaveCount(0)
})

test('auto-hides the dropdown when clicking outside', async ({ page }) => {
  await page.goto('/component/demo1')

  await page.locator('#dropdown-btn').click()
  await expect(page.locator('.v-popper__popper--shown')).toBeVisible()

  await page.locator('#noop-btn').click()
  await expect(page.locator('.v-popper__popper--shown')).toHaveCount(0)
})

test('manual dropdown is controlled by the checkbox and honours placement', async ({ page }) => {
  await page.goto('/component/demo2')

  const popper = page.locator('.v-popper__popper--shown')
  await expect(popper).toHaveCount(0)

  await page.getByRole('checkbox').check()
  await expect(popper).toContainText('Manual dropdown')
  await expect(popper).toHaveAttribute('data-popper-placement', 'bottom')

  await page.getByRole('combobox').selectOption('top')
  await expect(popper).toHaveAttribute('data-popper-placement', 'top')

  await page.getByRole('checkbox').uncheck()
  await expect(page.locator('.v-popper__popper--shown')).toHaveCount(0)
})

test('opens nested submenus on hover', async ({ page }) => {
  await page.goto('/component/submenu1')

  await page.getByRole('button', { name: 'Hover me' }).hover()
  const menu = page.locator('.v-popper__popper--shown').first()
  await expect(menu).toContainText('Sub menus:')

  await menu.getByRole('button', { name: 'Sub menu >' }).first().hover()
  await expect(page.getByText('Option 1 >')).toBeVisible()
})
