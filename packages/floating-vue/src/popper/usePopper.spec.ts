import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, h, nextTick } from 'vue'
import { Tooltip } from '../index'

function bounds (left: number, top: number, width: number, height: number): DOMRect {
  return {
    x: left,
    y: top,
    left,
    top,
    width,
    height,
    right: left + width,
    bottom: top + height,
    toJSON: () => '',
  }
}

function moveMouse (x: number, y: number) {
  window.dispatchEvent(new MouseEvent('mousemove', { clientX: x, clientY: y }))
}

describe('usePopper hide while aiming', () => {
  const unmounts: Array<() => void> = []

  afterEach(() => {
    unmounts.splice(0).forEach(unmount => unmount())
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  // Regression for #1081: a root popper used to bail out of `hide()` with no timer to retry it.
  it('still hides a root popper the mouse leaves while heading toward it', async () => {
    // The popper node stays detached until shown, so place both nodes by class.
    vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(function (this: Element) {
      return this.classList.contains('v-popper__popper') ? bounds(200, 0, 100, 100) : bounds(0, 0, 100, 100)
    })
    const onHide = vi.fn()
    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp({
      render: () => h(Tooltip, { popperTriggers: ['hover'], onHide }, {
        default: () => h('button', 'Trigger'),
        popper: () => h('p', 'Popper content'),
      }),
    })
    app.mount(container)
    unmounts.push(() => app.unmount())
    await nextTick()

    const trigger = container.querySelector('button')!
    moveMouse(50, 50)
    moveMouse(60, 50)
    trigger.dispatchEvent(new MouseEvent('mouseleave'))

    expect(onHide).toHaveBeenCalledTimes(1)
  })
})
