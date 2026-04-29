import { expect, type Locator, type Page } from '@playwright/test'

/**
 * Shared selectors for floating-vue's runtime DOM.
 *
 * The library renders poppers in a portal under <body>, so they cannot
 * be located via the trigger's DOM subtree. These helpers give specs a
 * single place to express "the popper currently shown".
 */

/** Class applied to the root popper element when visible. */
export const POPPER_SHOWN = '.v-popper__popper--shown'

/** Class applied to the root popper element when hidden. */
export const POPPER_HIDDEN = '.v-popper__popper--hidden'

/** Any popper root, regardless of visibility. */
export const POPPER_ROOT = '.v-popper__popper'

/**
 * Returns a Locator matching every shown popper on the page.
 * Use `.first()` / `.last()` / `.nth()` when multiple are open (submenus).
 */
export function shownPoppers (page: Page): Locator {
  return page.locator(POPPER_SHOWN)
}

/**
 * Resolves once at least one shown popper containing the given text is
 * visible. Asserts via Playwright's auto-retrying expect.
 */
export async function expectPopperWithText (
  page: Page,
  text: string | RegExp,
  options: { timeout?: number } = {},
): Promise<Locator> {
  const popper = page
    .locator(POPPER_SHOWN)
    .filter({ hasText: text })
    .first()
  await expect(popper).toBeVisible({ timeout: options.timeout })
  return popper
}

/**
 * Resolves once no popper on the page is in the shown state.
 */
export async function expectNoShownPopper (
  page: Page,
  options: { timeout?: number } = {},
): Promise<void> {
  await expect(page.locator(POPPER_SHOWN)).toHaveCount(0, options)
}
