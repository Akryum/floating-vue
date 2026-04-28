import { afterEach, describe, expect, test } from '@peeky/test'
import {
  getFocusableElements,
  installFocusTrap,
  installMenuKeyboardNav,
  pickRestoreTarget,
} from './focus'

const cleanups: Array<() => void> = []
const mounted: HTMLElement[] = []

afterEach(() => {
  while (cleanups.length) {
    const cleanup = cleanups.pop()
    cleanup?.()
  }
  while (mounted.length) {
    mounted.pop()?.remove()
  }
})

/**
 * Mounts a container in the document body so focus operations behave realistically.
 */
function mount (html: string): HTMLElement {
  const root = document.createElement('div')
  root.innerHTML = html
  document.body.appendChild(root)
  mounted.push(root)
  return root
}

/**
 * Throws if the selector misses, so tests fail loudly with a clear message.
 */
function find (root: ParentNode, selector: string): HTMLElement {
  const el = root.querySelector<HTMLElement>(selector)
  if (!el) throw new Error(`focus.spec: selector ${selector} found nothing`)
  return el
}

/**
 * Dispatches a real keyboard event so installed listeners run.
 */
function dispatchKey (target: Element, key: string, init: KeyboardEventInit = {}): KeyboardEvent {
  const event = new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true, ...init })
  target.dispatchEvent(event)
  return event
}

describe('getFocusableElements', () => {
  test('finds buttons, anchors with href, inputs, and explicit tabindex', () => {
    const root = mount(`
      <button id="b">a</button>
      <a id="link" href="#">l</a>
      <a id="dead">no href</a>
      <input id="i" />
      <input id="hidden" type="hidden" />
      <div id="t" tabindex="0">tabbable</div>
      <div id="skip" tabindex="-1">skip</div>
    `)

    const ids = getFocusableElements(root).map(el => el.id)
    expect(new Set(ids)).toEqual(new Set(['b', 'link', 'i', 't']))
  })

  test('skips disabled form controls', () => {
    const root = mount(`
      <button id="ok">a</button>
      <button id="bad" disabled>b</button>
      <input id="ok-input" />
      <input id="bad-input" disabled />
    `)
    expect(new Set(getFocusableElements(root).map(el => el.id))).toEqual(new Set(['ok', 'ok-input']))
  })
})

describe('installFocusTrap', () => {
  test('cycles to the first focusable on Tab from the last', () => {
    const root = mount('<button id="first">first</button><button id="second">second</button>')
    cleanups.push(installFocusTrap(root))
    const first = find(root, '#first')
    const second = find(root, '#second')

    second.focus()
    const event = dispatchKey(second, 'Tab')

    expect(event.defaultPrevented).toBe(true)
    expect(document.activeElement).toBe(first)
  })

  test('cycles to the last focusable on Shift+Tab from the first', () => {
    const root = mount('<button id="first">first</button><button id="second">second</button>')
    cleanups.push(installFocusTrap(root))
    const first = find(root, '#first')
    const second = find(root, '#second')

    first.focus()
    dispatchKey(first, 'Tab', { shiftKey: true })

    expect(document.activeElement).toBe(second)
  })

  test('does not interfere with Tab in the middle of the focus order', () => {
    const root = mount('<button id="first">first</button><button id="middle">middle</button><button id="last">last</button>')
    cleanups.push(installFocusTrap(root))
    const middle = find(root, '#middle')

    middle.focus()
    const event = dispatchKey(middle, 'Tab')
    expect(event.defaultPrevented).toBe(false)
  })

  test('cleanup function removes the keydown listener', () => {
    const root = mount('<button id="first">first</button><button id="second">second</button>')
    const cleanup = installFocusTrap(root)
    cleanup()

    const second = find(root, '#second')
    second.focus()
    const event = dispatchKey(second, 'Tab')
    expect(event.defaultPrevented).toBe(false)
  })

  test('ignores keys other than Tab', () => {
    const root = mount('<button id="first">first</button>')
    cleanups.push(installFocusTrap(root))
    const first = find(root, '#first')
    first.focus()
    const event = dispatchKey(first, 'Enter')
    expect(event.defaultPrevented).toBe(false)
  })
})

describe('installMenuKeyboardNav', () => {
  test('ArrowDown moves focus to the next menuitem and wraps', () => {
    const root = mount(`
      <div role="menuitem" tabindex="0" id="one">one</div>
      <div role="menuitem" tabindex="0" id="two">two</div>
      <div role="menuitem" tabindex="0" id="three">three</div>
    `)
    cleanups.push(installMenuKeyboardNav(root))
    const items = root.querySelectorAll<HTMLElement>('[role=menuitem]')

    items[0].focus()
    dispatchKey(items[0], 'ArrowDown')
    expect(document.activeElement).toBe(items[1])

    items[items.length - 1].focus()
    dispatchKey(items[items.length - 1], 'ArrowDown')
    expect(document.activeElement).toBe(items[0])
  })

  test('ArrowUp moves focus to the previous menuitem and wraps', () => {
    const root = mount(`
      <div role="menuitem" tabindex="0" id="one">one</div>
      <div role="menuitem" tabindex="0" id="two">two</div>
    `)
    cleanups.push(installMenuKeyboardNav(root))
    const items = root.querySelectorAll<HTMLElement>('[role=menuitem]')

    items[1].focus()
    dispatchKey(items[1], 'ArrowUp')
    expect(document.activeElement).toBe(items[0])

    items[0].focus()
    dispatchKey(items[0], 'ArrowUp')
    expect(document.activeElement).toBe(items[1])
  })

  test('Home and End jump to the first and last items', () => {
    const root = mount(`
      <div role="menuitem" tabindex="0" id="one">one</div>
      <div role="menuitem" tabindex="0" id="two">two</div>
      <div role="menuitem" tabindex="0" id="three">three</div>
    `)
    cleanups.push(installMenuKeyboardNav(root))
    const items = root.querySelectorAll<HTMLElement>('[role=menuitem]')

    items[1].focus()
    dispatchKey(items[1], 'Home')
    expect(document.activeElement).toBe(items[0])

    dispatchKey(items[0], 'End')
    expect(document.activeElement).toBe(items[2])
  })

  test('does nothing when no menuitems are present', () => {
    const root = mount('<button>plain</button>')
    cleanups.push(installMenuKeyboardNav(root))
    const event = dispatchKey(root, 'ArrowDown')
    expect(event.defaultPrevented).toBe(false)
  })

  test('cleanup removes the listener', () => {
    const root = mount('<div role="menuitem" tabindex="0" id="one">one</div><div role="menuitem" tabindex="0" id="two">two</div>')
    const cleanup = installMenuKeyboardNav(root)
    cleanup()

    const items = root.querySelectorAll<HTMLElement>('[role=menuitem]')
    items[0].focus()
    dispatchKey(items[0], 'ArrowDown')
    expect(document.activeElement).toBe(items[0])
  })
})

describe('pickRestoreTarget', () => {
  test('returns null when previousFocus is null', () => {
    expect(pickRestoreTarget(null)).toBeNull()
  })

  test('returns null when previousFocus is detached from the document', () => {
    const detached = document.createElement('button')
    expect(pickRestoreTarget(detached)).toBeNull()
  })

  test('returns the element when it is still connected and focusable', () => {
    const root = mount('<button id="restore">restore</button>')
    const button = find(root, '#restore')
    expect(pickRestoreTarget(button)).toBe(button)
  })
})
