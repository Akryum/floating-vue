// Back-compat surface kept for users upgrading from floating-vue 5.
// Delete this file together with the aliases it pins.

import { afterEach, describe, expect, test, vi } from 'vitest'
import { createApp, h } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { config, getPresetClasses } from './config'
import Dropdown from './components/Dropdown'
import PopperMethods from './components/PopperMethods'
import ThemeClass from './components/ThemeClass'
import { install } from './index'
import { controlledPopperProps, getExposedMethods, getPopperElement, waitForPopperUpdates } from '../tests/unit/popper-helpers'

let wrapper: VueWrapper | null = null

afterEach(() => {
  wrapper?.unmount()
  wrapper = null
  delete config.presets['spec-legacy']
  document.body.innerHTML = ''
  document.body.className = ''
  vi.restoreAllMocks()
})

describe('`themes` config alias', () => {
  test('reads through to presets', () => {
    expect(config.themes).toBe(config.presets)
  })

  test('writing a theme registers a preset', () => {
    const themes = config.themes ?? {}
    themes['spec-legacy'] = { $extend: 'tooltip', placement: 'left' }
    expect(config.presets['spec-legacy']).toEqual({ $extend: 'tooltip', placement: 'left' })
  })

  test('the plugin option merges into presets and warns', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    install(createApp({}), { themes: { 'spec-legacy': { $extend: 'tooltip' } } })

    expect(config.presets['spec-legacy']).toEqual({ $extend: 'tooltip' })
    // Built-in presets must survive the merge.
    expect(config.presets.tooltip).toBeDefined()
    expect(warn).toHaveBeenCalledWith('[floating-vue] `themes` option is deprecated. Use `presets` instead.')
  })
})

describe('`v-popper--theme-*` CSS classes', () => {
  test('are emitted alongside the preset classes, including inherited ones', () => {
    expect(getPresetClasses('menu')).toEqual([
      'v-popper--preset-menu',
      'v-popper--theme-menu',
      'v-popper--preset-dropdown',
      'v-popper--theme-dropdown',
    ])
  })
})

describe('Options API mixins', () => {
  test('PopperMethods forwards show and hide to the popper ref', async () => {
    const Host = {
      mixins: [PopperMethods],
      render () {
        return h(Dropdown, { ref: 'popper', ...controlledPopperProps }, {
          default: () => h('button', 'Reference'),
          popper: () => h('div', 'Floating content'),
        })
      },
    }

    wrapper = mount(Host, { attachTo: document.body })
    const methods = getExposedMethods(wrapper.vm)

    methods.show({ skipDelay: true })
    await waitForPopperUpdates()
    expect(getPopperElement()?.getAttribute('aria-hidden')).toBe('false')

    methods.hide({ skipDelay: true })
    await waitForPopperUpdates()
    expect(getPopperElement()?.getAttribute('aria-hidden')).toBe('true')
  })

  test('ThemeClass resolves the named prop, then the preset prop', () => {
    const Host = {
      mixins: [ThemeClass()],
      props: { theme: { type: String, default: undefined }, preset: { type: String, default: undefined } },
      render: () => h('div'),
    }

    const read = (props: Record<string, string>) => {
      const vm = mount(Host, { props }).vm as unknown as { themeClass: string[] }
      return vm.themeClass
    }

    expect(read({ theme: 'tooltip' })).toContain('v-popper--theme-tooltip')
    expect(read({ preset: 'tooltip' })).toContain('v-popper--theme-tooltip')
  })
})
