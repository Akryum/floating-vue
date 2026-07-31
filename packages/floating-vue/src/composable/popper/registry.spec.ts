import { afterEach, describe, expect, test } from 'vitest'
import {
  getHidingPopper,
  getShownPoppers,
  hideAllPoppers,
  recomputeAllPoppers,
  registerShownPopper,
  setHidingPopper,
  unregisterShownPopper,
} from './registry'
import type { PopperApi } from './types'

let nextId = 0

/**
 * Builds a minimal PopperApi shape with the methods registry.ts touches.
 */
function buildPopper (preset = 'tooltip'): PopperApi & { hideCalls: number, recomputeCalls: number } {
  const popper = {
    props: { preset },
    state: { randomId: `popper_${nextId++}` },
    hideCalls: 0,
    recomputeCalls: 0,
    hide () { this.hideCalls++ },
    recompute () { this.recomputeCalls++; return Promise.resolve() },
  }
  return popper as unknown as PopperApi & { hideCalls: number, recomputeCalls: number }
}

afterEach(() => {
  // Drain registry between tests so leftover entries can't bleed across.
  for (const popper of getShownPoppers()) {
    unregisterShownPopper(popper)
  }
  setHidingPopper(null)
  document.body.className = ''
})

describe('registerShownPopper / unregisterShownPopper', () => {
  test('adds the popper to the shown collection', () => {
    const popper = buildPopper()
    registerShownPopper(popper)
    expect(getShownPoppers()).toContain(popper)
  })

  test('returns a defensive copy of the shown collection', () => {
    const popper = buildPopper()
    registerShownPopper(popper)
    const copy = getShownPoppers()
    copy.length = 0
    expect(getShownPoppers()).toContain(popper)
  })

  test('adds body class on first registration', () => {
    const popper = buildPopper()
    registerShownPopper(popper)
    expect(document.body.classList.contains('v-popper--some-open')).toBe(true)
  })

  test('adds preset-scoped body class', () => {
    const popper = buildPopper('tooltip')
    registerShownPopper(popper)
    expect(document.body.classList.contains('v-popper--some-open--tooltip')).toBe(true)
  })

  test('adds parent preset classes for extended preset', () => {
    const popper = buildPopper('menu')
    registerShownPopper(popper)
    expect(document.body.classList.contains('v-popper--some-open--menu')).toBe(true)
    expect(document.body.classList.contains('v-popper--some-open--dropdown')).toBe(true)
  })

  test('removes body class once last popper closes', () => {
    const popper = buildPopper()
    registerShownPopper(popper)
    unregisterShownPopper(popper)
    expect(document.body.classList.contains('v-popper--some-open')).toBe(false)
    expect(document.body.classList.contains('v-popper--some-open--tooltip')).toBe(false)
  })

  test('keeps body class while another popper of same preset is still open', () => {
    const a = buildPopper('tooltip')
    const b = buildPopper('tooltip')
    registerShownPopper(a)
    registerShownPopper(b)

    unregisterShownPopper(a)
    expect(document.body.classList.contains('v-popper--some-open')).toBe(true)
    expect(document.body.classList.contains('v-popper--some-open--tooltip')).toBe(true)

    unregisterShownPopper(b)
    expect(document.body.classList.contains('v-popper--some-open')).toBe(false)
  })
})

describe('hidingPopper accessor', () => {
  test('round-trips through set/get', () => {
    const popper = buildPopper()
    setHidingPopper(popper)
    expect(getHidingPopper()).toBe(popper)
    setHidingPopper(null)
    expect(getHidingPopper()).toBeNull()
  })
})

describe('recomputeAllPoppers / hideAllPoppers', () => {
  test('recomputeAllPoppers fans out to every shown popper', () => {
    const a = buildPopper()
    const b = buildPopper()
    registerShownPopper(a)
    registerShownPopper(b)

    recomputeAllPoppers()
    expect(a.recomputeCalls).toBe(1)
    expect(b.recomputeCalls).toBe(1)
  })

  test('hideAllPoppers fans out to every shown popper', () => {
    const a = buildPopper()
    const b = buildPopper()
    registerShownPopper(a)
    registerShownPopper(b)

    hideAllPoppers()
    expect(a.hideCalls).toBe(1)
    expect(b.hideCalls).toBe(1)
  })
})
