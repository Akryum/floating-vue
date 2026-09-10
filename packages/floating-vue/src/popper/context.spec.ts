import { afterEach, describe, expect, it } from 'vitest'
import { acquirePopperContext, hideAllPoppers, recomputeAllPoppers, releasePopperContext } from './context'
import type { PopperController } from './context'

function fakeController (overrides: Partial<PopperController> = {}): PopperController {
  return {
    randomId: `test_${Math.random().toString(36).slice(2)}`,
    theme: 'tooltip',
    showGroup: null,
    autoHide: true,
    instantMove: false,
    parentPopper: null,
    lockedChild: null,
    lockedChildTimer: null,
    shownChildren: new Set(),
    pendingHide: false,
    mouseDownContains: false,
    containsGlobalTarget: false,
    lastAutoHide: true,
    popperNode: () => document.createElement('div'),
    hide: () => {},
    applyHide: () => {},
    computePosition: () => {},
    handleGlobalClose: () => {},
    emitCloseGroup: () => {},
    ...overrides,
  }
}

let held = 0

function acquire () {
  held++
  return acquirePopperContext()
}

function release () {
  held--
  releasePopperContext()
}

afterEach(() => {
  while (held > 0) { release() }
  document.body.className = ''
})

describe('popper context', () => {
  it('reuses the same context while at least one popper holds it', () => {
    const first = acquire()
    const second = acquire()
    expect(second).toBe(first)
    release()
    expect(acquire()).toBe(first)
  })

  it('creates a fresh context after the last popper releases it', () => {
    const first = acquire()
    release()
    const second = acquire()
    expect(second).not.toBe(first)
  })

  it('listens to window resize while held and stops after teardown', () => {
    let computations = 0
    const controller = fakeController({ computePosition: () => { computations++ } })

    const context = acquire()
    context.markShown(controller)

    window.dispatchEvent(new Event('resize'))
    expect(computations).toBe(1)

    context.markHidden(controller)
    release()

    window.dispatchEvent(new Event('resize'))
    expect(computations).toBe(1)
  })

  it('toggles body classes while poppers are shown', () => {
    const context = acquire()
    const a = fakeController()
    const b = fakeController()

    context.markShown(a)
    context.markShown(b)
    expect(document.body.classList.contains('v-popper--some-open')).toBe(true)
    expect(document.body.classList.contains('v-popper--some-open--tooltip')).toBe(true)

    context.markHidden(a)
    expect(document.body.classList.contains('v-popper--some-open')).toBe(true)

    context.markHidden(b)
    expect(document.body.classList.contains('v-popper--some-open')).toBe(false)
    expect(document.body.classList.contains('v-popper--some-open--tooltip')).toBe(false)
  })

  it('clears the hiding popper when it is marked hidden', () => {
    const context = acquire()
    const controller = fakeController()
    context.markShown(controller)
    context.hidingPopper = controller

    context.markHidden(controller)
    expect(context.hidingPopper).toBe(null)
  })

  it('hideAllPoppers and recomputeAllPoppers reach every shown popper and no-op without a context', () => {
    // No context yet
    expect(() => hideAllPoppers()).not.toThrow()
    expect(() => recomputeAllPoppers()).not.toThrow()

    let hidden = 0
    let computed = 0
    const controller = fakeController({
      hide: () => { hidden++ },
      computePosition: () => { computed++ },
    })

    const context = acquire()
    context.markShown(controller)

    hideAllPoppers()
    recomputeAllPoppers()
    expect(hidden).toBe(1)
    expect(computed).toBe(1)
  })
})
