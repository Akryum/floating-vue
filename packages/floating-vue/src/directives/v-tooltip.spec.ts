import { afterEach, describe, expect, test } from 'vitest'
import * as VTooltip from './v-tooltip'
import { config } from '../config'
import type { Placement } from '../util/popper'

afterEach(() => {
  delete config.presets['spec-left']
  delete config.presets['spec-right']
})

describe('getPlacement', () => {
  test('object notation', () => {
    const value = {
      placement: 'bottom' as Placement,
    }
    const modifiers = {}
    const result = VTooltip.getPlacement(value, modifiers)
    expect(result).toBe('bottom')
  })

  test('modifier', () => {
    const value = {}
    const modifiers = {
      'top-end': true,
    }
    const result = VTooltip.getPlacement(value, modifiers)
    expect(result).toBe('top-end')
  })

  test('invalid modifier', () => {
    const value = {}
    const modifiers = {
      'left-middle': true,
    }
    const result = VTooltip.getPlacement(value, modifiers)
    expect(result).toBe('top')
  })

  test('falls back to the placement of the named preset', () => {
    config.presets['spec-left'] = { $extend: 'tooltip', placement: 'left' }
    expect(VTooltip.getPlacement({ preset: 'spec-left' }, {})).toBe('left')
  })

  test('accepts the deprecated theme alias', () => {
    config.presets['spec-left'] = { $extend: 'tooltip', placement: 'left' }
    expect(VTooltip.getPlacement({ theme: 'spec-left' }, {})).toBe('left')
  })

  test('prefers preset over the deprecated theme alias', () => {
    config.presets['spec-left'] = { $extend: 'tooltip', placement: 'left' }
    config.presets['spec-right'] = { $extend: 'tooltip', placement: 'right' }
    expect(VTooltip.getPlacement({ preset: 'spec-right', theme: 'spec-left' }, {})).toBe('right')
  })
})
