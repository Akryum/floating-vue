import { describe, test, expect } from '@peeky/test'
import * as VTooltip from './v-tooltip'
import type { Placement } from '../util/popper'

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
})
