import { describe, expect, it } from 'vitest'
import * as VTooltip from './v-tooltip'

describe('getPlacement', () => {
  it('object notation', () => {
    const value = {
      placement: 'bottom',
    }
    const modifiers = {}
    const result = VTooltip.getPlacement(value, modifiers)
    expect(result).toBe('bottom')
  })

  it('modifier', () => {
    const value = {}
    const modifiers = {
      'top-end': true,
    }
    const result = VTooltip.getPlacement(value, modifiers)
    expect(result).toBe('top-end')
  })

  it('invalid modifier', () => {
    const value = {}
    const modifiers = {
      'left-middle': true,
    }
    const result = VTooltip.getPlacement(value, modifiers)
    expect(result).toBe('top')
  })
})

describe('createTooltip', () => {
  it('uses the default placement when modifiers are omitted', () => {
    const el = document.createElement('button')
    try {
      const tooltip = VTooltip.createTooltip(el, 'Tooltip')
      expect(tooltip.options.value.placement).toBe('top')
      expect(el.classList.contains('v-popper--has-tooltip')).toBe(true)
    } finally {
      VTooltip.destroyTooltip(el)
    }
  })

  it('still accepts placement modifiers', () => {
    const el = document.createElement('button')
    try {
      const tooltip = VTooltip.createTooltip(el, 'Tooltip', { bottom: true })
      expect(tooltip.options.value.placement).toBe('bottom')
    } finally {
      VTooltip.destroyTooltip(el)
    }
  })
})
