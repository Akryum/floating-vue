import { afterEach, describe, expect, test } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { config } from '../config'
import Dropdown from './Dropdown'
import Tooltip from './Tooltip'

interface ExposedPopperMethods {
  show: (options?: { skipDelay?: boolean }) => void
  hide: (options?: { skipDelay?: boolean }) => void
}

let wrapper: VueWrapper | null = null
const initialArrowSize = config.arrowSize

/**
 * Waits for Vue updates plus the two requestAnimationFrame turns used by popper transitions.
 */
async function waitForPopperUpdates () {
  await Promise.resolve()
  await new Promise(resolve => setTimeout(resolve, 0))
  await new Promise(resolve => requestAnimationFrame(resolve))
  await new Promise(resolve => requestAnimationFrame(resolve))
  await Promise.resolve()
}

/**
 * Returns the current floating popper element appended to document.body.
 */
function getPopperElement (): HTMLElement | null {
  return document.body.querySelector('.v-popper__popper')
}

/**
 * Returns exposed methods from the mounted popper wrapper.
 */
function getWrapperMethods (): ExposedPopperMethods {
  return wrapper?.vm as unknown as ExposedPopperMethods
}

/**
 * Shows the mounted popper without waiting for configured delays.
 */
function showWrapper () {
  getWrapperMethods().show({ skipDelay: true })
}

/**
 * Hides the mounted popper without waiting for configured delays.
 */
function hideWrapper () {
  getWrapperMethods().hide({ skipDelay: true })
}

afterEach(() => {
  wrapper?.unmount()
  wrapper = null
  config.arrowSize = initialArrowSize
  document.body.innerHTML = ''
  document.body.className = ''
})

describe('Popper wrapper components', () => {
  test('shows and hides through exposed methods', async () => {
    wrapper = mount(Dropdown, {
      attachTo: document.body,
      props: {
        triggers: [],
        delay: 0,
        disposeTimeout: null,
        noAutoFocus: true,
      },
      slots: {
        default: '<button>Reference</button>',
        popper: '<div>Floating content</div>',
      },
    })

    showWrapper()
    await waitForPopperUpdates()

    expect(wrapper.emitted('show')).toHaveLength(1)
    expect(wrapper.emitted('update:shown')?.[0]).toEqual([true])
    expect(getPopperElement()?.classList.contains('v-popper__popper--shown')).toBe(true)

    hideWrapper()
    await waitForPopperUpdates()

    expect(wrapper.emitted('hide')).toHaveLength(1)
    expect(wrapper.emitted('update:shown')?.[1]).toEqual([false])
    expect(getPopperElement()?.classList.contains('v-popper__popper--hidden')).toBe(true)
  })

  test('syncs with the shown prop', async () => {
    wrapper = mount(Dropdown, {
      attachTo: document.body,
      props: {
        shown: false,
        triggers: [],
        delay: 0,
        disposeTimeout: null,
        noAutoFocus: true,
      },
      slots: {
        default: '<button>Reference</button>',
        popper: '<div>Floating content</div>',
      },
    })

    await wrapper.setProps({ shown: true })
    await waitForPopperUpdates()

    expect(getPopperElement()?.classList.contains('v-popper__popper--shown')).toBe(true)

    await wrapper.setProps({ shown: false })
    await waitForPopperUpdates()

    expect(getPopperElement()?.classList.contains('v-popper__popper--hidden')).toBe(true)
  })

  test('uses click triggers by default on dropdowns', async () => {
    wrapper = mount(Dropdown, {
      attachTo: document.body,
      props: {
        delay: 0,
        disposeTimeout: null,
        noAutoFocus: true,
      },
      slots: {
        default: '<button>Reference</button>',
        popper: '<div>Floating content</div>',
      },
    })

    await wrapper.find('button').trigger('click')
    await waitForPopperUpdates()

    expect(wrapper.emitted('show')).toHaveLength(1)
    expect(getPopperElement()?.classList.contains('v-popper__popper--shown')).toBe(true)
  })

  test('renders tooltip component popper content', async () => {
    wrapper = mount(Tooltip, {
      attachTo: document.body,
      props: {
        triggers: [],
        delay: 0,
        disposeTimeout: null,
        noAutoFocus: true,
      },
      slots: {
        default: '<button>Reference</button>',
        popper: '<span>Tooltip content</span>',
      },
    })

    showWrapper()
    await waitForPopperUpdates()

    expect(getPopperElement()?.textContent).toContain('Tooltip content')
  })

  test('exposes shown state and imperative handles via the default slot', async () => {
    const captured: {
      shown: boolean | null
      show: ((options?: { skipDelay?: boolean }) => void) | null
      hide: (() => void) | null
    } = {
      shown: null,
      show: null,
      hide: null,
    }

    wrapper = mount(Dropdown, {
      attachTo: document.body,
      props: {
        triggers: [],
        delay: 0,
        disposeTimeout: null,
        noAutoFocus: true,
      },
      slots: {
        default: (slotProps: { shown: boolean, show: (options?: { skipDelay?: boolean }) => void, hide: () => void }) => {
          captured.shown = slotProps.shown
          captured.show = slotProps.show
          captured.hide = slotProps.hide
          return '<button>Reference</button>'
        },
        popper: '<div>Floating content</div>',
      },
    })

    expect(captured.shown).toBe(false)
    expect(typeof captured.show).toBe('function')
    expect(typeof captured.hide).toBe('function')

    captured.show?.({ skipDelay: true })
    await waitForPopperUpdates()
    expect(captured.shown).toBe(true)

    captured.hide?.()
    await waitForPopperUpdates()
    expect(captured.shown).toBe(false)
  })

  test('reacts to shown prop toggling without remounting', async () => {
    wrapper = mount(Dropdown, {
      attachTo: document.body,
      props: {
        shown: false,
        triggers: [],
        delay: 0,
        disposeTimeout: null,
        noAutoFocus: true,
      },
      slots: {
        default: '<button>Reference</button>',
        popper: '<div>Floating content</div>',
      },
    })

    await wrapper.setProps({ shown: true })
    await waitForPopperUpdates()
    const firstNode = getPopperElement()
    expect(firstNode?.classList.contains('v-popper__popper--shown')).toBe(true)

    await wrapper.setProps({ shown: false })
    await waitForPopperUpdates()
    await wrapper.setProps({ shown: true })
    await waitForPopperUpdates()

    const secondNode = getPopperElement()
    expect(secondNode?.classList.contains('v-popper__popper--shown')).toBe(true)
  })

  test('applies the preset ariaRole to the popper element', async () => {
    wrapper = mount(Tooltip, {
      attachTo: document.body,
      props: {
        triggers: [],
        delay: 0,
        disposeTimeout: null,
        noAutoFocus: true,
      },
      slots: {
        default: '<button>Reference</button>',
        popper: '<span>Tooltip content</span>',
      },
    })

    showWrapper()
    await waitForPopperUpdates()
    expect(getPopperElement()?.getAttribute('role')).toBe('tooltip')
  })

  test('uses dialog role and aria-modal for dropdowns', async () => {
    wrapper = mount(Dropdown, {
      attachTo: document.body,
      props: {
        triggers: [],
        delay: 0,
        disposeTimeout: null,
        noAutoFocus: true,
      },
      slots: {
        default: '<button>Reference</button>',
        popper: '<div>Floating content</div>',
      },
    })

    showWrapper()
    await waitForPopperUpdates()
    const node = getPopperElement()
    expect(node?.getAttribute('role')).toBe('dialog')
    expect(node?.getAttribute('aria-modal')).toBe('true')
  })

  test('omits role attribute when ariaRole prop is null', async () => {
    wrapper = mount(Dropdown, {
      attachTo: document.body,
      props: {
        ariaRole: null,
        triggers: [],
        delay: 0,
        disposeTimeout: null,
        noAutoFocus: true,
      },
      slots: {
        default: '<button>Reference</button>',
        popper: '<div>Floating content</div>',
      },
    })

    showWrapper()
    await waitForPopperUpdates()
    expect(getPopperElement()?.hasAttribute('role')).toBe(false)
  })

  test('returns focus to the trigger when restoreFocus is true', async () => {
    const trigger = document.createElement('button')
    trigger.id = 'trigger'
    document.body.appendChild(trigger)
    trigger.focus()

    wrapper = mount(Dropdown, {
      attachTo: document.body,
      props: {
        restoreFocus: true,
        triggers: [],
        delay: 0,
        disposeTimeout: null,
        noAutoFocus: true,
      },
      slots: {
        default: '<button>Reference</button>',
        popper: '<div>Floating content</div>',
      },
    })

    showWrapper()
    await waitForPopperUpdates()

    hideWrapper()
    await waitForPopperUpdates()

    expect(document.activeElement).toBe(trigger)
    trigger.remove()
  })

  test('forwards apply-show and apply-hide events to consumers', async () => {
    wrapper = mount(Dropdown, {
      attachTo: document.body,
      props: {
        triggers: [],
        delay: 0,
        disposeTimeout: null,
        noAutoFocus: true,
      },
      slots: {
        default: '<button>Reference</button>',
        popper: '<div>Floating content</div>',
      },
    })

    showWrapper()
    await waitForPopperUpdates()
    expect(wrapper.emitted('apply-show')).toBeTruthy()

    hideWrapper()
    await waitForPopperUpdates()
    expect(wrapper.emitted('apply-hide')).toBeTruthy()
  })

  test('applies numeric arrowSize as a CSS variable on the popper element', async () => {
    wrapper = mount(Dropdown, {
      attachTo: document.body,
      props: {
        arrowSize: 14,
        triggers: [],
        delay: 0,
        disposeTimeout: null,
        noAutoFocus: true,
      },
      slots: {
        default: '<button>Reference</button>',
        popper: '<div>Floating content</div>',
      },
    })

    showWrapper()
    await waitForPopperUpdates()

    expect(getPopperElement()?.style.getPropertyValue('--v-popper-arrow-size')).toBe('14px')
    expect(getPopperElement()?.style.getPropertyValue('--v-popper-arrow-inner-size')).toBe('9.8px')
    expect(getPopperElement()?.style.getPropertyValue('--v-popper-arrow-outer-size')).toBe('8.4px')
  })

  test('scales arrow CSS variables for authored CSS length arrowSize strings', async () => {
    wrapper = mount(Dropdown, {
      attachTo: document.body,
      props: {
        arrowSize: '0.75rem',
        triggers: [],
        delay: 0,
        disposeTimeout: null,
        noAutoFocus: true,
      },
      slots: {
        default: '<button>Reference</button>',
        popper: '<div>Floating content</div>',
      },
    })

    showWrapper()
    await waitForPopperUpdates()

    expect(getPopperElement()?.style.getPropertyValue('--v-popper-arrow-size')).toBe('0.75rem')
    expect(getPopperElement()?.style.getPropertyValue('--v-popper-arrow-inner-size')).toBe('0.525rem')
    expect(getPopperElement()?.style.getPropertyValue('--v-popper-arrow-outer-size')).toBe('0.45rem')
    expect(getPopperElement()?.style.getPropertyValue('--v-popper-arrow-inner-horizontal-offset')).toBe('-0.15rem')
  })

  test('scales arrow CSS variables for custom property arrowSize strings', async () => {
    wrapper = mount(Dropdown, {
      attachTo: document.body,
      props: {
        arrowSize: 'var(--floating-arrow-size)',
        triggers: [],
        delay: 0,
        disposeTimeout: null,
        noAutoFocus: true,
      },
      slots: {
        default: '<button>Reference</button>',
        popper: '<div>Floating content</div>',
      },
    })

    showWrapper()
    await waitForPopperUpdates()

    expect(getPopperElement()?.style.getPropertyValue('--v-popper-arrow-size')).toBe('var(--floating-arrow-size)')
    expect(getPopperElement()?.style.getPropertyValue('--v-popper-arrow-inner-size')).toBe('calc(var(--floating-arrow-size) * 0.7)')
    expect(getPopperElement()?.style.getPropertyValue('--v-popper-arrow-inner-horizontal-offset')).toBe('calc(var(--floating-arrow-size) * -0.2)')
  })

  test('uses configured arrowSize as the default CSS variable value', async () => {
    config.arrowSize = 16

    wrapper = mount(Dropdown, {
      attachTo: document.body,
      props: {
        triggers: [],
        delay: 0,
        disposeTimeout: null,
        noAutoFocus: true,
      },
      slots: {
        default: '<button>Reference</button>',
        popper: '<div>Floating content</div>',
      },
    })

    showWrapper()
    await waitForPopperUpdates()

    expect(getPopperElement()?.style.getPropertyValue('--v-popper-arrow-size')).toBe('16px')
  })

  test('does not set an inline arrow size when arrowSize is omitted', async () => {
    wrapper = mount(Dropdown, {
      attachTo: document.body,
      props: {
        triggers: [],
        delay: 0,
        disposeTimeout: null,
        noAutoFocus: true,
      },
      slots: {
        default: '<button>Reference</button>',
        popper: '<div>Floating content</div>',
      },
    })

    showWrapper()
    await waitForPopperUpdates()

    expect(getPopperElement()?.style.getPropertyValue('--v-popper-arrow-size')).toBe('')
  })
})
