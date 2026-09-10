import { afterEach, describe, expect, test } from 'vitest'
import { mount, type VueWrapper } from '@vue/test-utils'
import Dropdown from './Dropdown'
import Popper from './Popper'
import { config } from '../config'
import { createTooltip, destroyTooltip } from '../directives/v-tooltip'
import { controlledPopperProps, getExposedMethods, getPopperElement, waitForPopperUpdates } from '../../tests/unit/popper-helpers'

const PRESET_ONE = 'spec-reactive-one'
const PRESET_TWO = 'spec-reactive-two'
let wrapper: VueWrapper | null = null
let target: HTMLElement | null = null

/**
 * Opens a mounted wrapper without waiting for user-triggered delays.
 */
function showWrapper () {
  getExposedMethods(wrapper?.vm).show({ skipDelay: true })
}

/**
 * Installs two named dropdown presets with visibly distinct ARIA roles.
 */
function registerPresets () {
  config.presets[PRESET_ONE] = { $extend: 'dropdown', ariaRole: 'listbox' }
  config.presets[PRESET_TWO] = { $extend: 'dropdown', ariaRole: 'grid' }
}

afterEach(() => {
  wrapper?.unmount()
  wrapper = null
  if (target) destroyTooltip(target)
  target = null
  delete config.presets[PRESET_ONE]
  delete config.presets[PRESET_TWO]
  document.body.replaceChildren()
  document.body.className = ''
})

describe('reactive preset compatibility', () => {
  test('switches deprecated theme classes and registry buckets while shown', async () => {
    registerPresets()
    wrapper = mount(Dropdown, {
      attachTo: document.body,
      props: {
        ...controlledPopperProps,
        theme: PRESET_ONE,
      },
      slots: {
        default: '<button>Reference</button>',
        popper: '<div>Floating content</div>',
      },
    })

    showWrapper()
    await waitForPopperUpdates()

    const reference = wrapper.find('.v-popper')
    expect(reference.classes()).toContain(`v-popper--preset-${PRESET_ONE}`)
    expect(getPopperElement()?.classList).toContain(`v-popper--preset-${PRESET_ONE}`)
    expect(document.body.classList).toContain(`v-popper--some-open--${PRESET_ONE}`)

    await wrapper.setProps({ theme: PRESET_TWO })
    await waitForPopperUpdates()

    expect(reference.classes()).not.toContain(`v-popper--preset-${PRESET_ONE}`)
    expect(reference.classes()).toContain(`v-popper--preset-${PRESET_TWO}`)
    expect(getPopperElement()?.classList).not.toContain(`v-popper--preset-${PRESET_ONE}`)
    expect(getPopperElement()?.classList).toContain(`v-popper--preset-${PRESET_TWO}`)
    expect(document.body.classList).not.toContain(`v-popper--some-open--${PRESET_ONE}`)
    expect(document.body.classList).toContain(`v-popper--some-open--${PRESET_TWO}`)
  })

  test('keeps preset authoritative over a deprecated theme', async () => {
    registerPresets()
    wrapper = mount(Dropdown, {
      attachTo: document.body,
      props: {
        ...controlledPopperProps,
        preset: PRESET_TWO,
        theme: PRESET_ONE,
      },
      slots: {
        default: '<button>Reference</button>',
        popper: '<div>Floating content</div>',
      },
    })

    showWrapper()
    await waitForPopperUpdates()

    expect(getPopperElement()?.classList).toContain(`v-popper--preset-${PRESET_TWO}`)
    expect(getPopperElement()?.getAttribute('role')).toBe('grid')
    expect(document.body.classList).toContain(`v-popper--some-open--${PRESET_TWO}`)
    expect(document.body.classList).not.toContain(`v-popper--some-open--${PRESET_ONE}`)

    await wrapper.setProps({ theme: 'tooltip' })
    await waitForPopperUpdates()

    expect(getPopperElement()?.classList).toContain(`v-popper--preset-${PRESET_TWO}`)
    expect(getPopperElement()?.classList).not.toContain('v-popper--preset-tooltip')
    expect(getPopperElement()?.getAttribute('role')).toBe('grid')
    expect(document.body.classList).toContain(`v-popper--some-open--${PRESET_TWO}`)
    expect(document.body.classList).not.toContain('v-popper--some-open--tooltip')
  })

  test('updates v-tooltip directive options to their effective preset and role', async () => {
    registerPresets()
    target = document.createElement('button')
    document.body.append(target)
    const tooltip = createTooltip(target, {
      ...controlledPopperProps,
      content: 'Reactive tooltip',
      theme: PRESET_ONE,
    }, {})

    tooltip.show()
    await waitForPopperUpdates()

    expect(getPopperElement()?.classList).toContain(`v-popper--preset-${PRESET_ONE}`)
    expect(getPopperElement()?.getAttribute('role')).toBe('listbox')

    tooltip.options.value = {
      ...tooltip.options.value,
      theme: PRESET_TWO,
    }
    await waitForPopperUpdates()

    expect(getPopperElement()?.classList).not.toContain(`v-popper--preset-${PRESET_ONE}`)
    expect(getPopperElement()?.classList).toContain(`v-popper--preset-${PRESET_TWO}`)
    expect(getPopperElement()?.getAttribute('role')).toBe('grid')
  })

  test('resolves a low-level Popper theme when its value changes while shown', async () => {
    registerPresets()
    const reference = document.createElement('button')
    const popperNode = document.createElement('div')
    document.body.append(reference, popperNode)
    wrapper = mount(Popper, {
      attachTo: document.body,
      props: {
        ...controlledPopperProps,
        theme: PRESET_ONE,
        targetNodes: () => [reference],
        popperNode: () => popperNode,
      },
    })

    showWrapper()
    await waitForPopperUpdates()
    expect(document.body.classList).toContain(`v-popper--some-open--${PRESET_ONE}`)

    await wrapper.setProps({ theme: PRESET_TWO })
    await waitForPopperUpdates()

    expect(document.body.classList).not.toContain(`v-popper--some-open--${PRESET_ONE}`)
    expect(document.body.classList).toContain(`v-popper--some-open--${PRESET_TWO}`)
  })

  test('cleans previous registry buckets after explicit preset changes', async () => {
    registerPresets()
    wrapper = mount(Dropdown, {
      attachTo: document.body,
      props: {
        ...controlledPopperProps,
        preset: PRESET_ONE,
      },
      slots: {
        default: '<button>Reference</button>',
        popper: '<div>Floating content</div>',
      },
    })

    showWrapper()
    await waitForPopperUpdates()
    await wrapper.setProps({ preset: PRESET_TWO })
    await waitForPopperUpdates()

    getExposedMethods(wrapper.vm).hide({ skipDelay: true })
    await waitForPopperUpdates()

    expect(document.body.classList).not.toContain(`v-popper--some-open--${PRESET_ONE}`)
    expect(document.body.classList).not.toContain(`v-popper--some-open--${PRESET_TWO}`)
  })
})
