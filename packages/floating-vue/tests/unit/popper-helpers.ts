/**
 * Shared helpers for specs that mount a real popper and wait for it to settle.
 */

interface ExposedPopperMethods {
  show: (options?: { skipDelay?: boolean }) => void
  hide: (options?: { skipDelay?: boolean }) => void
}

/**
 * Waits for Vue updates plus the two requestAnimationFrame turns used by popper transitions.
 */
export async function waitForPopperUpdates () {
  await Promise.resolve()
  await new Promise(resolve => setTimeout(resolve, 0))
  await new Promise(resolve => requestAnimationFrame(resolve))
  await new Promise(resolve => requestAnimationFrame(resolve))
  await Promise.resolve()
}

/**
 * Returns the current floating popper element appended to document.body.
 */
export function getPopperElement (): HTMLElement | null {
  return document.body.querySelector('.v-popper__popper')
}

/**
 * Returns the popper methods exposed by a mounted wrapper component.
 */
export function getExposedMethods (vm: unknown): ExposedPopperMethods {
  return vm as ExposedPopperMethods
}

/**
 * Props that keep a mounted popper fully under test control: no automatic
 * triggers, no delays, no deferred teardown, no focus stealing.
 */
export const controlledPopperProps = {
  triggers: [],
  delay: 0,
  disposeTimeout: null,
  noAutoFocus: true,
}
