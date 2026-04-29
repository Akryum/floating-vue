import { expect, test } from '@playwright/test'
import {
  expectNoShownPopper,
  expectPopperWithText,
  shownPoppers,
} from './support/popper'

/**
 * Drives the nested VMenu / VDropdown demo at /component/submenu1.
 * Verifies hover-driven cascading submenus (VMenu) and click-driven
 * cascading submenus (VDropdown) both open three levels deep and close
 * correctly.
 */

test.describe('Submenu trees', () => {
  test('VMenu opens nested submenus on hover and reveals leaf', async ({ page }) => {
    await page.goto('/component/submenu1')

    await page.getByTestId('menu-root').hover()

    const rootPopper = await expectPopperWithText(page, /Sub menus:/)
    await rootPopper.getByText('Sub menu >').first().hover()

    // Second-level popper exposes the "Option N >" entries.
    const subPopper = await expectPopperWithText(page, /Option 1 >/)
    await subPopper.getByText('Option 1 >').hover()

    await expectPopperWithText(page, 'Hello')
    expect(await shownPoppers(page).count()).toBeGreaterThanOrEqual(3)

    // Move pointer well outside the tree; expect everything to close.
    await page.locator('h1, body').first().hover({ position: { x: 0, y: 0 } })
    await page.mouse.move(0, 0)
    await expectNoShownPopper(page, { timeout: 5_000 })
  })

  test('VDropdown opens nested submenus on click', async ({ page }) => {
    await page.goto('/component/submenu1')

    await page.getByTestId('dropdown-root').click()
    const rootPopper = await expectPopperWithText(page, /Sub menus:/)

    await rootPopper.getByText('Sub menu >').first().click()
    const subPopper = await expectPopperWithText(page, /Option 1 >/)

    await subPopper.getByText('Option 1 >').click()
    await expectPopperWithText(page, 'Hello')
    expect(await shownPoppers(page).count()).toBeGreaterThanOrEqual(3)
  })
})
