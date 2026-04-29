import { expect, test } from '@playwright/test'
import {
  expectNoShownPopper,
  expectPopperWithText,
} from './support/popper'

/**
 * Drives the VDropdown demos at /component/demo1 and /component/demo2.
 * Covers click-to-toggle behaviour, v-close-popper directive, manual
 * v-model:shown control, and runtime placement updates.
 */

test.describe('VDropdown component', () => {
  test('demo1 — opens on click, v-close-popper closes', async ({ page }) => {
    await page.goto('/component/demo1')

    const trigger = page.getByTestId('dropdown-trigger')
    await trigger.click()

    const popper = await expectPopperWithText(
      page,
      /Hello from v-tooltip/,
    )

    // v-close-popper button inside the popper closes it.
    await popper.getByTestId('dropdown-close').click()
    await expectNoShownPopper(page)
  })

  test('demo1 — v-close-popper="false" keeps popper open', async ({ page }) => {
    await page.goto('/component/demo1')

    await page.getByTestId('dropdown-trigger').click()
    const popper = await expectPopperWithText(
      page,
      /Hello from v-tooltip/,
    )

    await popper.getByTestId('dropdown-noclose').click()
    // Still visible after the no-close button.
    await expect(popper).toBeVisible()
  })

  test('demo1 — clicking outside closes the dropdown', async ({ page }) => {
    await page.goto('/component/demo1')

    await page.getByTestId('dropdown-trigger').click()
    await expectPopperWithText(page, /Hello from v-tooltip/)

    await page.getByTestId('noop-button').click()
    await expectNoShownPopper(page)
  })

  test('demo2 — manual v-model:shown toggles the popper', async ({ page }) => {
    await page.goto('/component/demo2')

    const toggle = page.getByTestId('dropdown-manual-toggle')
    await toggle.check()

    await expectPopperWithText(page, 'Manual dropdown')

    await toggle.uncheck()
    await expectNoShownPopper(page)
  })

  test('demo2 — placement select updates data-popper-placement', async ({ page }) => {
    await page.goto('/component/demo2')

    await page.getByTestId('dropdown-manual-toggle').check()
    const popper = await expectPopperWithText(page, 'Manual dropdown')

    // Placements floating-ui may flip — assert prefix matches the chosen side.
    for (const placement of ['top', 'right', 'left', 'bottom'] as const) {
      await page.getByTestId('dropdown-placement-select').selectOption(placement)
      await expect(popper).toHaveAttribute(
        'data-popper-placement',
        new RegExp(`^${placement}`),
      )
    }
  })
})
