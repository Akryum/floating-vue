import type { StyleValue } from 'vue'

export type PopperStyleClass = string | string[] | Record<string, boolean> | PopperStyleClass[]

export type PopperStyleObject = StyleValue

export type PopperStyle = {
  class?: PopperStyleClass
  style?: StyleValue
}

/**
 * Classes applied depending on the state of the popper.
 */
export interface PopperDynamicStyles {
  base?: PopperStyle
  /**
   * Class applied to the popper when it's shown.
   */
  shown?: PopperStyle
  /**
   * Class applied to the popper when it's shown during one frame for transitions.
   */
  showFrom?: PopperStyle
  /**
   * Class applied to the popper when it's shown after one frame for transitions.
   */
  showTo?: PopperStyle
  /**
   * Class applied to the popper when it's hidden.
   */
  hidden?: PopperStyle
  /**
   * Class applied to the popper when it's hidden during one frame for transitions.
   */
  hideFrom?: PopperStyle
  /**
   * Class applied to the popper when it's hidden after one frame for transitions.
   */
  hideTo?: PopperStyle
  /**
   * Class applied to the popper when no transition should be applied.
   */
  skipTransition?: PopperStyle
  /**
   * Class applied to the popper when floating positioning is disabled.
   */
  noPositioning?: PopperStyle
}
