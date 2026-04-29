import { expect, test } from '@playwright/test'
import {
  expectNoShownPopper,
  expectPopperWithText,
  shownPoppers,
} from './support/popper'

/**
 * Drives the v-tooltip directive demos at /directive/*.
 * Each test exercises a single trigger flavor (hover, html, async,
 * reactive content, manual, programmatic) and asserts the popper
 * surface visible to a real user.
 */

test.describe('v-tooltip directive', () => {
  test('demo1 — shows static tooltip on hover, hides on unhover', async ({ page }) => {
    await page.goto('/directive/demo1')

    const target = page.getByTestId('tooltip-target').first()
    await target.hover()

    await expectPopperWithText(page, 'Hello!')

    // Move pointer somewhere neutral to release the hover trigger.
    await page.mouse.move(0, 0)
    await page.locator('h1').hover()

    await expectNoShownPopper(page)
  })

  test('demo2 — renders HTML content when html: true', async ({ page }) => {
    await page.goto('/directive/demo2')

    await page.getByTestId('tooltip-html-target').hover()

    const popper = await expectPopperWithText(page, /Hey/)
    await expect(popper.locator('b')).toHaveText('Hey')
    await expect(popper.locator('i')).toHaveText('you')
  })

  test('demo3 — shows loading state then resolved async content', async ({ page }) => {
    await page.goto('/directive/demo3')

    await page.getByTestId('tooltip-async-target').hover()

    // Loading state from `loadingContent` (html string).
    await expectPopperWithText(page, /Loading\.\.\. Please wait/)

    // Resolved content lands within ~1s of the Promise (3s grace).
    await expectPopperWithText(
      page,
      /I was loaded from a server/,
      { timeout: 3_000 },
    )
  })

  test('demo4 — tooltip content is reactive to bound input', async ({ page }) => {
    await page.goto('/directive/demo4')

    const input = page.getByTestId('tooltip-reactive-input')
    const target = page.getByTestId('tooltip-reactive-target')

    await input.fill('caveman type fire')
    await target.hover()
    await expectPopperWithText(page, 'caveman type fire')

    await page.mouse.move(0, 0)
    await page.locator('h1').hover()
    await expectNoShownPopper(page)

    await input.fill('updated text')
    await target.hover()
    await expectPopperWithText(page, 'updated text')
  })

  test('demo5 — manual trigger shows/hides via v-model', async ({ page }) => {
    await page.goto('/directive/demo5')

    const toggle = page.getByTestId('tooltip-manual-toggle')

    // Initial state: shown ref is true → tooltip should already be visible.
    await expectPopperWithText(page, 'Manual trigger')

    await toggle.uncheck()
    await expectNoShownPopper(page)

    await toggle.check()
    await expectPopperWithText(page, 'Manual trigger')
  })

  test('createTooltip — programmatic show then auto-hide', async ({ page }) => {
    await page.goto('/directive/create-tooltip')

    await page.getByTestId('copy-button').click()

    // Tooltip displays "Copied!" immediately after click.
    await expectPopperWithText(page, 'Copied!')

    // Auto-hides after ~600ms; transition adds another ~400ms.
    await expect(shownPoppers(page)).toHaveCount(0, { timeout: 3_000 })
  })
})
