import {
  arrow,
  autoPlacement,
  computePosition,
  flip,
  offset,
  shift,
  size,
} from '@floating-ui/dom'
import type { PopperApi } from './types'

export type ComputePositionConfig = NonNullable<Parameters<typeof computePosition>[2]>

/**
 * Builds Floating UI middleware from current popper props.
 */
export function createComputePositionOptions (api: PopperApi): ComputePositionConfig {
  const props = api.props
  const options: any = {
    strategy: props.strategy,
    middleware: [],
  }

  if (props.distance || props.skidding) {
    options.middleware.push(offset({
      mainAxis: Number(props.distance),
      crossAxis: Number(props.skidding),
    }))
  }

  const isPlacementAuto = props.placement.startsWith('auto')
  if (isPlacementAuto) {
    options.middleware.push(autoPlacement({
      alignment: props.placement.split('-')[1] ?? '',
    } as Parameters<typeof autoPlacement>[0]))
  } else {
    options.placement = props.placement as any
  }

  if (props.preventOverflow) {
    if (props.shift) {
      options.middleware.push(shift({
        padding: Number(props.overflowPadding),
        boundary: props.boundary as any,
        crossAxis: props.shiftCrossAxis,
      }))
    }

    if (!isPlacementAuto && props.flip) {
      options.middleware.push(flip({
        padding: Number(props.overflowPadding),
        boundary: props.boundary as any,
      }))
    }
  }

  addArrowMiddleware(api, options.middleware)
  addAutoSizeMiddleware(api, options.middleware)
  addBoundarySizeMiddleware(api, options.middleware)

  return options
}

/**
 * Recomputes popper position and updates reactive result data.
 */
export async function computePopperPosition (api: PopperApi) {
  const nodes = api.runtime.nodes
  if (
    api.state.isDisposed ||
    api.props.positioningDisabled ||
    !nodes.referenceNode ||
    !nodes.popperNode
  ) {
    return
  }

  const data = await computePosition(
    nodes.referenceNode,
    nodes.popperNode,
    createComputePositionOptions(api),
  )

  Object.assign(api.state.result, {
    x: data.x,
    y: data.y,
    placement: data.placement,
    strategy: data.strategy,
    arrow: {
      ...data.middlewareData.arrow,
      ...data.middlewareData.arrowOverflow,
    },
  })
}

/**
 * Adds arrow positioning and optional overflow detection.
 */
function addArrowMiddleware (api: PopperApi, middleware: any[]) {
  const arrowNode = api.runtime.nodes.arrowNode
  if (!arrowNode) return

  middleware.push(arrow({
    element: arrowNode,
    padding: Number(api.props.arrowPadding),
  }))

  if (api.props.arrowOverflow) {
    middleware.push({
      name: 'arrowOverflow',
      fn: ({ placement, rects, middlewareData }) => {
        const centerOffset = middlewareData.arrow?.centerOffset ?? 0
        const overflow = placement.startsWith('top') || placement.startsWith('bottom')
          ? Math.abs(centerOffset) > rects.reference.width / 2
          : Math.abs(centerOffset) > rects.reference.height / 2

        return {
          data: {
            overflow,
          },
        }
      },
    })
  }
}

/**
 * Adds middleware that sizes the popper inner element against its reference.
 */
function addAutoSizeMiddleware (api: PopperApi, middleware: any[]) {
  const innerNode = api.runtime.nodes.innerNode
  if (!innerNode || (!api.props.autoMinSize && !api.props.autoSize)) return

  const autoSize = api.props.autoSize || (api.props.autoMinSize ? 'min' : null)
  middleware.push({
    name: 'autoSize',
    fn: ({ rects, placement, middlewareData }) => {
      if (middlewareData.autoSize?.skip) return {}

      let width: number
      let height: number
      if (placement.startsWith('top') || placement.startsWith('bottom')) {
        width = rects.reference.width
      } else {
        height = rects.reference.height
      }

      const widthProp = autoSize === 'min' ? 'minWidth' : autoSize === 'max' ? 'maxWidth' : 'width'
      const heightProp = autoSize === 'min' ? 'minHeight' : autoSize === 'max' ? 'maxHeight' : 'height'
      innerNode.style[widthProp] = width != null ? `${width}px` : null
      innerNode.style[heightProp] = height != null ? `${height}px` : null

      return {
        data: {
          skip: true,
        },
        reset: {
          rects: true,
        },
      }
    },
  })
}

/**
 * Adds middleware that limits popper inner max size to available boundary space.
 */
function addBoundarySizeMiddleware (api: PopperApi, middleware: any[]) {
  const innerNode = api.runtime.nodes.innerNode
  if (!innerNode || (!api.props.autoMaxSize && !api.props.autoBoundaryMaxSize)) return

  innerNode.style.maxWidth = null
  innerNode.style.maxHeight = null

  middleware.push(size({
    boundary: api.props.boundary as any,
    padding: Number(api.props.overflowPadding),
    apply: ({ availableWidth, availableHeight }) => {
      innerNode.style.maxWidth = availableWidth != null ? `${availableWidth}px` : null
      innerNode.style.maxHeight = availableHeight != null ? `${availableHeight}px` : null
    },
  }))
}
