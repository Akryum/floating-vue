import type { StyleValue } from 'vue'
import type { Placement, Strategy } from '@floating-ui/dom'
import type { Trigger } from './trigger.js'

export type PopperStyleClass = string | string[] | Record<string, boolean> | PopperStyleClass[]

export type PopperStyleObject = StyleValue

export type PopperStyle = {
  class?: PopperStyleClass
  style?: StyleValue
}

/**
 * Classes applied depending on the state of the popper
 */
export interface PopperDynamicStyles {
  base?: PopperStyle
  /**
   * Class applied to the popper when it's shown
   */
  shown?: PopperStyle
  /**
   * Class applied to the popper when it's shown during one frame for transitions
   */
  showFrom?: PopperStyle
  /**
   * Class applied to the popper when it's shown after one frame for transitions
   */
  showTo?: PopperStyle
  /**
   * Class applied to the popper when it's hidden
   */
  hidden?: PopperStyle
  /**
   * Class applied to the popper when it's hidden during one frame for transitions
   */
  hideFrom?: PopperStyle
  /**
   * Class applied to the popper when it's hidden after one frame for transitions
   */
  hideTo?: PopperStyle
  /**
   * Class applied to the popper when no transition should be applied (`instantMove` is in effect)
   */
  skipTransition?: PopperStyle
  /**
   * Class applied to the popper when floating positioning is disabled (using `positioningDisabled` option)
   */
  noPositioning?: PopperStyle
}

export interface PopperConfig {
  /**
   * Disable popper components
   */
  disabled: boolean

  /**
   * Disable positioning but still show the popper. Useful for an alternate display, for example showing the popper fullscreen on mobile.
   */
  positioningDisabled: boolean

  /**
   * Default placement relative to target element
   */
  placement: Placement

  /**
   * Default position offset along main axis (px)
   */
  distance: number

  /**
   * Default position offset along cross axis (px)
   */
  skidding: number

  /**
   * Default container where the popper will be appended
   * 
   * If `false`, the popper will be appended to the reference element's parent.
   */
  container: string | Element | false

  /**
   * Element used to compute position and size boundaries
   */
  boundary: string | Element | undefined

  /**
   * Default events that trigger the popper
   */
  triggers: Trigger[]

  /**
   * Override default triggers for showing the popper
   */
  showTriggers: Trigger[] | ((defaultTriggers: Trigger[]) => Trigger[])

  /**
   * Override default triggers for hiding the popper
   */
  hideTriggers: Trigger[] | ((defaultTriggers: Trigger[]) => Trigger[])

  /**
   * Triggers on the popper itself
   */
  popperTriggers: Trigger[]

  /**
   * Override triggers on the popper itself for showing the popper
   */
  popperShowTriggers: Trigger[] | ((defaultTriggers: Trigger[]) => Trigger[])

  /**
   * Override triggers on the popper itself for hiding the popper
   */
  popperHideTriggers: Trigger[] | ((defaultTriggers: Trigger[]) => Trigger[])

  /**
   * Delay (ms)
   */
  delay: number | {
    show: number
    hide: number
  }

  /**
   * Positioning strategy
   */
  strategy: Strategy

  /**
   * Prevent overflowing the `boundary` element
   */
  preventOverflow: boolean

  /**
   * Virtual padding added to the `boundary` when computing overflow (in px)
   */
  overflowPadding: number

  /**
   * Flip to the opposite placement if needed
   */
  flip: boolean

  /**
   * Shift on the main axis to prevent the popper from overflowing
   */
  shift: boolean

  /**
   * Shift on the cross axis to prevent the popper from overflowing
   */
  shiftCrossAxis: boolean

  /**
   * By default, compute autohide on 'click'.
   */
  autoHideOnMousedown: boolean

  /**
   * Update popper on content resize
   */
  handleResize: boolean

  /**
   * Auto hide on click outside
   */
  autoHide: boolean

  /**
   * Skip delay & CSS transitions when another popper is shown, so that the popper appear to instanly move to the new position.
   */
  instantMove: boolean

  /**
   * Auto destroy popper DOM nodes (ms)
   */
  disposeTimeout: number

  /**
   * Mount popper content even if it's hidden
   */
  eagerMount: boolean

  /**
   * Set `transform-origin` of the popper (`.v-popper__wrapper`) to the center of the reference element to allow animations around it (for example zooming out of the reference).
   * 
   * @example
   * ```html
   * <template>
   *   <VDropdown compute-transform-origin />
   * </template>
   *
   * <style>
   * .v-popper__wrapper {
   *   transition: transform .15s;
   * }
   *
   * .v-popper__popper.v-popper__popper--hidden .v-popper__wrapper {
   *   transform: scale(.5);
   * }
   * </style>
   * ```
   */
  computeTransformOrigin: boolean

  /**
   * Set the size of the popper depending on the size of the reference element.
   * 
   * 
   * - If the final placement is `top-*` or `bottom-*`, the reference width will be taken into account.
   * - If the final placement is `left-*` or `right-*`, the reference height will be taken into account.
   *
   * Possible values:
   *
   * - `true`: the popper container will be set to the same size as the reference element.
   * - `'min'`: the popper container will be set to the minimum size of the reference element.
   * - `'max'`: the popper container will be set to the maximum size of the reference element.
   */
  autoSize: boolean | 'min' | 'max'

  /**
   * Resize the popper inner container to the available size (using `max-width` and `max-height`). It's very useful for a dropdown that should automatically shrink its size when it reaches the boundary.
   */
  autoBoundaryMaxSize: boolean

  /**
   * Disable the auto focus on the popper DOM node when shown
   */
  noAutoFocus: boolean

  /**
   * Arrow padding (px)
   */
  arrowPadding: number | string

  /**
   * Compute arrow overflow (useful to hide it)
   */
  arrowOverflow: boolean

  /**
   * CSS styles automatically applied by floating-vue
   */
  css: {
    /**
     * Reference element (`.v-popper`)
     */
    reference?: {
      base?: PopperStyle
      /**
       * Class applied to the reference when the popper is shown
       */
      shown?: PopperStyle
    }
    /**
     * Popper root (`.v-popper__popper`)
     */
    popper?: PopperDynamicStyles
    /**
     * Popper backdrop (`.v-popper__backdrop`)
     * 
     * ```css
     * .v-popper__popper > .v-popper__backdrop
     * ```
     */
    backdrop?: PopperDynamicStyles
    /**
     * Popper wrapper (`.v-popper__wrapper`)
     * 
     * ```css
     * .v-popper__popper > .v-popper__wrapper
     * ```
     */
    wrapper?: PopperDynamicStyles
    /**
     * Popper inner wrapper (`.v-popper__inner`)
     * 
     * ```css
     * .v-popper__popper > .v-popper__wrapper > .v-popper__inner
     * ```
     */
    inner?: PopperDynamicStyles
    /**
     * Arrow container (`.v-popper__arrow-container`)
     * 
     * ```css
     * .v-popper__popper > .v-popper__wrapper > .v-popper__arrow-container
     * ```
     */
    arrow?: PopperDynamicStyles
    /**
     * Outer arrow used for arrow border (`.v-popper__arrow-outer`)
     * 
     * ```css
     * .v-popper__popper > .v-popper__wrapper > .v-popper__arrow-container > .v-popper__arrow-outer
     * ```
     */
    arrowOuter?: PopperDynamicStyles
    /**
     * Inner arrow used for arrow fill color (`.v-popper__arrow-inner`)
     * 
     * ```css
     * .v-popper__popper > .v-popper__wrapper > .v-popper__arrow-container > .v-popper__arrow-inner
     * ```
     */
    arrowInner?: PopperDynamicStyles
  }

  /**
   * Enable HTML content in directive
   */
  html: boolean

  /**
   * Displayed when directive content is loading
   */
  loadingContent: string
}
