import { afterEach, describe, expect, test } from '@peeky/test'
import { mount, VueWrapper } from '@vue/test-utils'
import Dropdown from './Dropdown'
import Tooltip from './Tooltip'

let wrapper: VueWrapper<any> | null = null

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

afterEach(() => {
  wrapper?.unmount()
  wrapper = null
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

    ;(wrapper.vm as any).show({ skipDelay: true })
    await waitForPopperUpdates()

    expect(wrapper.emitted('show')).toHaveLength(1)
    expect(wrapper.emitted('update:shown')?.[0]).toEqual([true])
    expect(getPopperElement()?.classList.contains('v-popper__popper--shown')).toBe(true)

    ;(wrapper.vm as any).hide({ skipDelay: true })
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

    ;(wrapper.vm as any).show({ skipDelay: true })
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

    ;(wrapper.vm as any).show({ skipDelay: true })
    await waitForPopperUpdates()
    expect(wrapper.emitted('apply-show')).toBeTruthy()

    ;(wrapper.vm as any).hide({ skipDelay: true })
    await waitForPopperUpdates()
    expect(wrapper.emitted('apply-hide')).toBeTruthy()
  })
})
