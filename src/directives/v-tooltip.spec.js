import * as VTooltip from './v-tooltip'

jest.mock('../lib/tooltip')

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
      'top-middle': true,
    }
    const result = VTooltip.getPlacement(value, modifiers)
    expect(typeof result).toBe('undefined')
  })
})

describe('getContent', () => {
  test('string', () => {
    const value = 'foo'
    const result = VTooltip.getContent(value)
    expect(result).toBe('foo')
  })

  test('object', () => {
    const value = { content: 'foo' }
    const result = VTooltip.getContent(value)
    expect(result).toBe('foo')
  })

  test('false', () => {
    const value = false
    const result = VTooltip.getContent(value)
    expect(result).toBe(false)
  })

  test('null', () => {
    const value = null
    const result = VTooltip.getContent(value)
    expect(result).toBe(false)
  })

  test('false content attribute', () => {
    const value = { content: false }
    const result = VTooltip.getContent(value)
    expect(result).toBe(false)
  })

  test('no content attribute', () => {
    const value = {}
    const result = VTooltip.getContent(value)
    expect(typeof result).toBe('undefined')
  })
})
