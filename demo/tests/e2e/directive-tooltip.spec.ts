import { expect, test } from '@playwright/test'

test('shows a tooltip on hover and hides it on mouse leave', async ({ page }) => {
  await page.goto('/directive/demo1')

  const trigger = page.getByText('Nesciunt alias placeat nihil')
  await expect(page.locator('.v-popper__inner')).toHaveCount(0)

  await trigger.hover()
  const tooltip = page.locator('.v-popper__popper--shown .v-popper__inner')
  await expect(tooltip).toBeVisible()
  await expect(tooltip).toHaveText('Hello!')

  await page.getByRole('heading', { name: 'VTooltip Demo 1' }).hover()
  await expect(page.locator('.v-popper__popper--shown')).toHaveCount(0)
})

test('renders HTML content when the html option is set', async ({ page }) => {
  await page.goto('/directive/demo2')

  await page.getByRole('button', { name: 'Hover me' }).hover()

  const tooltip = page.locator('.v-popper__popper--shown .v-popper__inner')
  await expect(tooltip).toBeVisible()
  await expect(tooltip.locator('b')).toHaveText('Hey')
  await expect(tooltip.locator('i')).toHaveText('you')
})

test('resolves async content, showing the loading state first', async ({ page }) => {
  await page.goto('/directive/demo3')

  await page.getByRole('button', { name: 'Hover me' }).hover()

  const tooltip = page.locator('.v-popper__popper--shown .v-popper__inner')
  await expect(tooltip).toHaveText('Loading... Please wait')
  await expect(tooltip).toHaveText('I was loaded from a server...')
})

test('reflects a reactive model in the tooltip content', async ({ page }) => {
  await page.goto('/directive/demo4')

  await page.getByRole('textbox').fill('Reactive tooltip')
  await page.getByRole('button', { name: 'Hover me' }).hover()

  const tooltip = page.locator('.v-popper__popper--shown .v-popper__inner')
  await expect(tooltip).toHaveText('Reactive tooltip')
})

test('manual trigger is controlled by the checkbox, not hover', async ({ page }) => {
  await page.goto('/directive/demo5')

  const tooltip = page.locator('.v-popper__popper--shown .v-popper__inner')
  await expect(tooltip).toHaveText('Manual trigger')

  await page.getByRole('checkbox').uncheck()
  await expect(page.locator('.v-popper__popper--shown')).toHaveCount(0)

  await page.getByRole('checkbox').check()
  await expect(tooltip).toHaveText('Manual trigger')
})

test('createTooltip shows a transient tooltip on click', async ({ page }) => {
  await page.goto('/directive/create-tooltip')

  await page.getByRole('button', { name: 'Copy' }).click()

  const tooltip = page.locator('.v-popper__popper--shown .v-popper__inner')
  await expect(tooltip).toHaveText('Copied!')
  await expect(page.locator('.v-popper__popper--shown')).toHaveCount(0, { timeout: 5000 })
})
