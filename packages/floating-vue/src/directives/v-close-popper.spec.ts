import { afterEach, describe, expect, test } from '@peeky/test'
import vClosePopper from './v-close-popper'
import type { DirectiveBinding } from 'vue'
import type { PopperEvent } from '../composable/popper/types'

/**
 * Tracks elements mounted during a test so we can clean them up afterward.
 */
const mounted: HTMLElement[] = []

afterEach(() => {
  while (mounted.length) {
    const el = mounted.pop()
    if (!el) continue
    if (typeof vClosePopper.beforeUnmount === 'function') {
      vClosePopper.beforeUnmount(el, {} as DirectiveBinding<unknown>, null as never, null)
    }
    el.remove()
  }
})

/**
 * Mounts a directive-attached element and returns it for interaction.
 */
function mountWithDirective (binding: Partial<DirectiveBinding<unknown>> = {}): HTMLElement {
  const el = document.createElement('button')
  document.body.appendChild(el)
  mounted.push(el)
  const fullBinding = {
    value: undefined,
    oldValue: undefined,
    arg: undefined,
    modifiers: {},
    instance: null,
    dir: vClosePopper,
    ...binding,
  } as DirectiveBinding<unknown>
  if (typeof vClosePopper.beforeMount === 'function') {
    vClosePopper.beforeMount(el, fullBinding, null as never, null)
  }
  return el
}

describe('v-close-popper directive', () => {
  test('marks click events with closePopover when no touch came first', () => {
    const el = mountWithDirective()
    const event = new MouseEvent('click', { bubbles: true })
    el.dispatchEvent(event)
    expect((event as PopperEvent).closePopover).toBe(true)
  })

  test('marks mousedown events with closePopover', () => {
    const el = mountWithDirective()
    const event = new MouseEvent('mousedown', { bubbles: true })
    el.dispatchEvent(event)
    expect((event as PopperEvent).closePopover).toBe(true)
  })

  test('sets closeAllPopover when the .all modifier is present', () => {
    const el = mountWithDirective({ modifiers: { all: true } })
    const event = new MouseEvent('click', { bubbles: true })
    el.dispatchEvent(event)
    expect((event as PopperEvent).closeAllPopover).toBe(true)
  })

  test('does not set closeAllPopover without the .all modifier', () => {
    const el = mountWithDirective()
    const event = new MouseEvent('click', { bubbles: true })
    el.dispatchEvent(event)
    expect((event as PopperEvent).closeAllPopover).toBe(false)
  })

  test('skips listeners when binding value is explicitly false', () => {
    const el = mountWithDirective({ value: false })
    const event = new MouseEvent('click', { bubbles: true })
    el.dispatchEvent(event)
    expect((event as PopperEvent).closePopover).toBeUndefined()
  })

  test('removes listeners after beforeUnmount', () => {
    const el = mountWithDirective()
    if (typeof vClosePopper.beforeUnmount === 'function') {
      vClosePopper.beforeUnmount(el, {} as DirectiveBinding<unknown>, null as never, null)
    }
    const event = new MouseEvent('click', { bubbles: true })
    el.dispatchEvent(event)
    expect((event as PopperEvent).closePopover).toBeUndefined()
  })

  test('updated() rebinds listeners when value transitions from false to true', () => {
    const el = mountWithDirective({ value: false })

    if (typeof vClosePopper.updated === 'function') {
      vClosePopper.updated(el, {
        value: true,
        oldValue: false,
        arg: undefined,
        modifiers: {},
        instance: null,
        dir: vClosePopper,
      } as DirectiveBinding<unknown>, null as never, null as never)
    }

    const event = new MouseEvent('click', { bubbles: true })
    el.dispatchEvent(event)
    expect((event as PopperEvent).closePopover).toBe(true)
  })

  test('updated() removes listeners when value transitions from true to false', () => {
    const el = mountWithDirective({ value: true })

    if (typeof vClosePopper.updated === 'function') {
      vClosePopper.updated(el, {
        value: false,
        oldValue: true,
        arg: undefined,
        modifiers: {},
        instance: null,
        dir: vClosePopper,
      } as DirectiveBinding<unknown>, null as never, null as never)
    }

    const event = new MouseEvent('click', { bubbles: true })
    el.dispatchEvent(event)
    expect((event as PopperEvent).closePopover).toBeUndefined()
  })
})
