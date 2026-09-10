import {
  arrow,
  autoPlacement,
  computePosition,
  flip,
  offset,
  shift,
  size,
} from '@floating-ui/dom'
import type { Placement } from '../util/popper'

export type ComputePositionConfig = Parameters<typeof computePosition>[2]

type Middleware = ComputePositionConfig['middleware'][number]

export interface PositionSettings {
  strategy: 'absolute' | 'fixed'
  placement: Placement
  distance: number
  skidding: number
  boundary: Element | undefined
  overflowPadding: number
  arrowPadding: number
  preventOverflow: boolean
  shift: boolean
  shiftCrossAxis: boolean
  flip: boolean
  arrowOverflow: boolean
  /** `false` disables auto size; `true` sets width/height directly */
  autoSize: boolean | 'min' | 'max'
  autoBoundaryMaxSize: boolean
}

export function buildPositionOptions (settings: PositionSettings, arrowNode: HTMLElement, innerNode: HTMLElement): ComputePositionConfig {
  const options: ComputePositionConfig = {
    strategy: settings.strategy,
    middleware: [],
  }

  // Offset
  if (settings.distance || settings.skidding) {
    options.middleware.push(offset({
      mainAxis: settings.distance,
      crossAxis: settings.skidding,
    }))
  }

  // Placement
  const isPlacementAuto = settings.placement.startsWith('auto')
  if (isPlacementAuto) {
    options.middleware.push(autoPlacement({
      // historical passthrough: '' means no alignment at runtime
      alignment: (settings.placement.split('-')[1] ?? '') as 'start' | 'end',
    }))
  } else {
    // non-auto placements match floating-ui's Placement
    options.placement = settings.placement as ComputePositionConfig['placement']
  }

  if (settings.preventOverflow) {
    // Shift
    if (settings.shift) {
      options.middleware.push(shift({
        padding: settings.overflowPadding,
        boundary: settings.boundary,
        crossAxis: settings.shiftCrossAxis,
      }))
    }

    // Flip
    if (!isPlacementAuto && settings.flip) {
      options.middleware.push(flip({
        padding: settings.overflowPadding,
        boundary: settings.boundary,
      }))
    }
  }

  // Arrow
  options.middleware.push(arrow({
    element: arrowNode,
    padding: settings.arrowPadding,
  }))

  // Arrow overflow
  if (settings.arrowOverflow) {
    options.middleware.push(arrowOverflowMiddleware())
  }

  // Auto min size for the popper inner
  if (settings.autoSize) {
    options.middleware.push(autoSizeMiddleware(settings.autoSize, innerNode))
  }

  // Auto max size for the popper inner
  if (settings.autoBoundaryMaxSize) {
    // Reset size so the bestFit strategy can apply
    innerNode.style.maxWidth = ''
    innerNode.style.maxHeight = ''

    options.middleware.push(size({
      boundary: settings.boundary,
      padding: settings.overflowPadding,
      apply: ({ availableWidth, availableHeight }) => {
        // Apply and re-compute
        innerNode.style.maxWidth = availableWidth != null ? `${availableWidth}px` : ''
        innerNode.style.maxHeight = availableHeight != null ? `${availableHeight}px` : ''
      },
    }))
  }

  return options
}

function arrowOverflowMiddleware (): Middleware {
  return {
    name: 'arrowOverflow',
    fn: ({ placement, rects, middlewareData }) => {
      let overflow: boolean
      const { centerOffset } = middlewareData.arrow
      if (placement.startsWith('top') || placement.startsWith('bottom')) {
        overflow = Math.abs(centerOffset) > rects.reference.width / 2
      } else {
        overflow = Math.abs(centerOffset) > rects.reference.height / 2
      }
      return {
        data: {
          overflow,
        },
      }
    },
  }
}

function autoSizeMiddleware (autoSize: true | 'min' | 'max', innerNode: HTMLElement): Middleware {
  return {
    name: 'autoSize',
    fn: ({ rects, placement, middlewareData }) => {
      if (middlewareData.autoSize?.skip) {
        return {}
      }
      let width: number | undefined
      let height: number | undefined
      if (placement.startsWith('top') || placement.startsWith('bottom')) {
        width = rects.reference.width
      } else {
        height = rects.reference.height
      }
      // Apply and re-compute
      innerNode.style[autoSize === 'min' ? 'minWidth' : autoSize === 'max' ? 'maxWidth' : 'width'] = width != null ? `${width}px` : ''
      innerNode.style[autoSize === 'min' ? 'minHeight' : autoSize === 'max' ? 'maxHeight' : 'height'] = height != null ? `${height}px` : ''
      return {
        data: {
          skip: true,
        },
        reset: {
          rects: true,
        },
      }
    },
  }
}
