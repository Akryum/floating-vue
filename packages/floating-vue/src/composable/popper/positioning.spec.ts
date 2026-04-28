import { describe, expect, test } from '@peeky/test'
import { createComputePositionOptions } from './positioning'
import type { PopperApi, PopperProps } from './types'

/**
 * Returns the props baseline used in tests; individual cases override only what they need.
 */
function buildProps (overrides: Partial<PopperProps> = {}): PopperProps {
  return {
    theme: 'tooltip',
    targetNodes: () => [],
    popperNode: () => null,
    shown: false,
    disabled: false,
    positioningDisabled: false,
    placement: 'top',
    delay: 0,
    distance: 0,
    skidding: 0,
    triggers: [],
    popperTriggers: [],
    container: 'body',
    strategy: 'absolute',
    autoHide: false,
    handleResize: false,
    instantMove: false,
    eagerMount: false,
    computeTransformOrigin: false,
    autoSize: false,
    autoBoundaryMaxSize: false,
    preventOverflow: true,
    overflowPadding: 0,
    arrowPadding: 0,
    arrowOverflow: false,
    flip: true,
    shift: true,
    shiftCrossAxis: false,
    noAutoFocus: false,
    disposeTimeout: null,
    ...overrides,
  } as PopperProps
}

/**
 * Builds a minimal PopperApi shape sufficient for positioning unit tests.
 */
function buildApi (overrides: Partial<PopperProps> = {}, runtimeOverrides: Partial<PopperApi['runtime']['nodes']> = {}): PopperApi {
  return {
    props: buildProps(overrides),
    runtime: {
      nodes: {
        referenceNode: null,
        targetNodes: [],
        popperNode: null,
        innerNode: null,
        arrowNode: null,
        ...runtimeOverrides,
      },
    },
  } as unknown as PopperApi
}

/**
 * Returns the names of every middleware on the resolved compute config.
 */
function middlewareNames (api: PopperApi): string[] {
  const config = createComputePositionOptions(api)
  const result: string[] = []
  for (const m of config.middleware ?? []) {
    if (!m || typeof m !== 'object') continue
    const name = (m as { name?: unknown }).name
    if (typeof name === 'string') {
      result.push(name)
    }
  }
  return result
}

describe('createComputePositionOptions', () => {
  test('passes strategy through unchanged', () => {
    const config = createComputePositionOptions(buildApi({ strategy: 'fixed' }))
    expect(config.strategy).toBe('fixed')
  })

  test('passes non-auto placement through to floating-ui', () => {
    const config = createComputePositionOptions(buildApi({ placement: 'right-end' }))
    expect(config.placement).toBe('right-end')
  })

  test('omits placement and adds autoPlacement middleware for auto-* placements', () => {
    const config = createComputePositionOptions(buildApi({ placement: 'auto-end' }))
    expect(config.placement).toBeUndefined()
    expect(middlewareNames(buildApi({ placement: 'auto-end' }))).toContain('autoPlacement')
  })

  test('skips offset middleware when distance and skidding are zero', () => {
    expect(middlewareNames(buildApi())).not.toContain('offset')
  })

  test('adds offset middleware when distance is non-zero', () => {
    expect(middlewareNames(buildApi({ distance: 8 }))).toContain('offset')
  })

  test('adds offset middleware when skidding is non-zero', () => {
    expect(middlewareNames(buildApi({ skidding: 4 }))).toContain('offset')
  })

  test('adds shift middleware when preventOverflow and shift are true', () => {
    expect(middlewareNames(buildApi({ preventOverflow: true, shift: true }))).toContain('shift')
  })

  test('omits shift middleware when shift is false', () => {
    expect(middlewareNames(buildApi({ preventOverflow: true, shift: false }))).not.toContain('shift')
  })

  test('omits shift and flip when preventOverflow is false', () => {
    const names = middlewareNames(buildApi({ preventOverflow: false, shift: true, flip: true }))
    expect(names).not.toContain('shift')
    expect(names).not.toContain('flip')
  })

  test('adds flip middleware for non-auto placements only', () => {
    expect(middlewareNames(buildApi({ placement: 'top', flip: true }))).toContain('flip')
    expect(middlewareNames(buildApi({ placement: 'auto', flip: true }))).not.toContain('flip')
  })

  test('omits arrow middleware when no arrow node is registered', () => {
    expect(middlewareNames(buildApi())).not.toContain('arrow')
  })

  test('adds arrow middleware when arrow node is registered', () => {
    const names = middlewareNames(buildApi({}, { arrowNode: document.createElement('div') }))
    expect(names).toContain('arrow')
  })

  test('adds arrowOverflow custom middleware only when arrowOverflow prop is true', () => {
    const namesWithoutOverflow = middlewareNames(buildApi({ arrowOverflow: false }, { arrowNode: document.createElement('div') }))
    expect(namesWithoutOverflow).not.toContain('arrowOverflow')

    const namesWithOverflow = middlewareNames(buildApi({ arrowOverflow: true }, { arrowNode: document.createElement('div') }))
    expect(namesWithOverflow).toContain('arrowOverflow')
  })

  test('adds autoSize middleware when autoSize prop is set and inner node exists', () => {
    const inner = document.createElement('div')
    const names = middlewareNames(buildApi({ autoSize: 'min' }, { innerNode: inner }))
    expect(names).toContain('autoSize')
  })

  test('skips autoSize middleware without an inner node', () => {
    const names = middlewareNames(buildApi({ autoSize: 'min' }))
    expect(names).not.toContain('autoSize')
  })

  test('adds size middleware when autoBoundaryMaxSize is true with an inner node', () => {
    const inner = document.createElement('div')
    const names = middlewareNames(buildApi({ autoBoundaryMaxSize: true }, { innerNode: inner }))
    expect(names).toContain('size')
  })

  test('preserves middleware ordering: offset → shift → flip → arrow → autoSize → size', () => {
    const inner = document.createElement('div')
    const arrowNode = document.createElement('div')
    const names = middlewareNames(buildApi({
      distance: 8,
      preventOverflow: true,
      shift: true,
      flip: true,
      arrowOverflow: false,
      autoSize: 'max',
      autoBoundaryMaxSize: true,
    }, { innerNode: inner, arrowNode }))

    expect(names).toEqual(['offset', 'shift', 'flip', 'arrow', 'autoSize', 'size'])
  })
})
