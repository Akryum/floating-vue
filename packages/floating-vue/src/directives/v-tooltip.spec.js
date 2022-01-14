import * as VTooltip from './v-tooltip'

jest.mock('@popperjs/core', () => ({
  placements: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end', 'auto', 'auto-start', 'auto-end'],
}))

describe('getPlacement', () => {
  test('object notation', () => {
    const value = {
      placement: 'bottom',
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
