import { describe, expect, it } from 'vitest'
import { vClosePopper } from './v-close-popper'

function fixture () {
  const button = document.createElement('button')
  const child = document.createElement('span')
  button.append(child)
  vClosePopper.beforeMount(button, { value: true, modifiers: { all: true } })
  return { button, child }
}
function touchEvent (target: HTMLElement, type: string, x = 100, y = 200) {
  const event = new Event(type, { bubbles: true }) as Event & { closePopover?: boolean, closeAllPopover?: boolean }
  Object.defineProperty(event, 'changedTouches', { value: [{ target, screenX: x, screenY: y }] })
  target.dispatchEvent(event)
  return event
}

describe('close-popper touch lifecycle', () => {
  it('stores touch coordinates without keeping a reference to the touched DOM child', () => {
    const { button, child } = fixture()
    touchEvent(child, 'touchstart')
    child.remove()
    expect((button as any).$_vclosepopover_touchPoint).toEqual({ screenX: 100, screenY: 200 })
    expect((button as any).$_vclosepopover_touchPoint).not.toHaveProperty('target')
    vClosePopper.beforeUnmount(button)
  })

  it('recognizes a tap, applies .all, and clears the completed gesture', () => {
    const { button, child } = fixture()
    touchEvent(child, 'touchstart')
    const event = touchEvent(child, 'touchend', 105, 205)
    expect(event.closePopover).toBe(true)
    expect(event.closeAllPopover).toBe(true)
    expect((button as any).$_vclosepopover_touchPoint).toBeUndefined()
    vClosePopper.beforeUnmount(button)
  })

  it('does not treat a swipe as a close tap', () => {
    const { button, child } = fixture()
    touchEvent(child, 'touchstart')
    expect(touchEvent(child, 'touchend', 150, 200).closePopover).toBe(false)
    vClosePopper.beforeUnmount(button)
  })

  it.each(['touchcancel', 'disable', 'unmount'])('clears a pending gesture on %s', (action) => {
    const { button, child } = fixture()
    touchEvent(child, 'touchstart')
    if (action === 'touchcancel') { touchEvent(child, 'touchcancel') }
    if (action === 'disable') { vClosePopper.updated(button, { value: false, oldValue: true, modifiers: {} }) }
    if (action === 'unmount') { vClosePopper.beforeUnmount(button) }
    expect((button as any).$_vclosepopover_touchPoint).toBeUndefined()
    // A late touchend must not invoke an obsolete handler.
    expect(touchEvent(child, 'touchend').closePopover).toBeUndefined()
    vClosePopper.beforeUnmount(button)
  })
})
