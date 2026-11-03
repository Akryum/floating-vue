import { describe, expect, it } from 'vitest'
import { nextTick, reactive } from 'vue'
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

describe('getOptions', () => {
  it('does not store DOM closures in caller-owned options', () => {
    const element = document.createElement('button')
    const value = { content: 'Tooltip' }

    const options = VTooltip.getOptions(element, value, {})

    expect(value).toEqual({ content: 'Tooltip', placement: 'top' })
    expect(value).not.toHaveProperty('targetNodes')
    expect(value).not.toHaveProperty('referenceNode')
    expect(options).toBe(value)
    expect(options.content).toBe('Tooltip')
  })

  it('keeps separate targets when two directives share an options object', async () => {
    const first = document.createElement('button')
    const second = document.createElement('button')
    first.title = 'First title'
    second.title = 'Second title'
    document.body.append(first, second)
    const value = { content: 'Shared tooltip', triggers: [] }
    try {
      VTooltip.createTooltip(first, value, {})
      VTooltip.createTooltip(second, value, {})
      await nextTick()
      expect(first.getAttribute('data-original-title')).toBe('First title')
      expect(second.getAttribute('data-original-title')).toBe('Second title')
      expect(value).not.toHaveProperty('targetNodes')
      expect(value).not.toHaveProperty('referenceNode')
    } finally {
      VTooltip.destroyTooltip(first)
      VTooltip.destroyTooltip(second)
      await nextTick()
      first.remove()
      second.remove()
    }
  })

  it('preserves live reactive option values without adding DOM closures to them', () => {
    const element = document.createElement('button')
    const value = reactive({ content: 'Before', placement: 'top' })
    const options = VTooltip.getOptions(element, value, {})

    value.content = 'After'
    value.placement = 'bottom'

    expect(options.content).toBe('After')
    expect(options.placement).toBe('bottom')
    expect(Object.keys(value)).toEqual(['content', 'placement'])
  })
})
