import { describe, expect, it } from 'vitest'
import { buildPositionOptions } from './position'
import type { PositionSettings } from './position'

const baseSettings: PositionSettings = {
  strategy: 'absolute',
  placement: 'bottom',
  distance: 0,
  skidding: 0,
  boundary: undefined,
  overflowPadding: 0,
  arrowPadding: 0,
  preventOverflow: false,
  shift: false,
  shiftCrossAxis: false,
  flip: false,
  arrowOverflow: false,
  autoSize: false,
  autoBoundaryMaxSize: false,
}

function build (settings: Partial<PositionSettings> = {}, innerNode = document.createElement('div')) {
  const options = buildPositionOptions({ ...baseSettings, ...settings }, document.createElement('div'), innerNode)
  return {
    options,
    names: options.middleware.map(m => m && m.name),
  }
}

describe('buildPositionOptions', () => {
  it('always includes the arrow middleware and the requested strategy', () => {
    const { options, names } = build()
    expect(names).toEqual(['arrow'])
    expect(options.strategy).toBe('absolute')
    expect(options.placement).toBe('bottom')
  })

  it('adds offset when distance or skidding is set', () => {
    expect(build({ distance: 8 }).names).toContain('offset')
    expect(build({ skidding: 4 }).names).toContain('offset')
  })

  it('uses autoPlacement instead of a fixed placement for auto placements', () => {
    const { options, names } = build({ placement: 'auto-start' })
    expect(names).toContain('autoPlacement')
    expect(options.placement).toBeUndefined()
  })

  it('only applies shift and flip when preventOverflow is enabled', () => {
    expect(build({ shift: true, flip: true }).names).toEqual(['arrow'])

    const { names } = build({ preventOverflow: true, shift: true, flip: true })
    expect(names).toContain('shift')
    expect(names).toContain('flip')
  })

  it('never flips auto placements', () => {
    const { names } = build({ placement: 'auto', preventOverflow: true, flip: true })
    expect(names).not.toContain('flip')
  })

  it('adds the arrowOverflow middleware when enabled', () => {
    expect(build({ arrowOverflow: true }).names).toContain('arrowOverflow')
  })

  it('sizes the inner node from the reference and skips the second pass', () => {
    const innerNode = document.createElement('div')
    const { options } = build({ autoSize: 'min' }, innerNode)
    const autoSize = options.middleware.find(m => m && m.name === 'autoSize')
    if (!autoSize) { throw new Error('autoSize middleware missing') }

    // partial middleware state: autoSize only reads rects/placement/middlewareData
    const state = {
      rects: { reference: { width: 120, height: 40 } },
      placement: 'bottom-start',
      middlewareData: {},
    } as unknown as Parameters<typeof autoSize.fn>[0]

    const result = autoSize.fn(state)
    expect(innerNode.style.minWidth).toBe('120px')
    expect(result).toMatchObject({ data: { skip: true }, reset: { rects: true } })

    state.middlewareData = { autoSize: { skip: true } }
    expect(autoSize.fn(state)).toEqual({})
  })

  it('resets max size constraints so boundary max size can re-apply', () => {
    const innerNode = document.createElement('div')
    innerNode.style.maxWidth = '500px'
    innerNode.style.maxHeight = '300px'

    const { names } = build({ autoBoundaryMaxSize: true }, innerNode)
    expect(names).toContain('size')
    expect(innerNode.style.maxWidth).toBe('')
    expect(innerNode.style.maxHeight).toBe('')
  })
})
