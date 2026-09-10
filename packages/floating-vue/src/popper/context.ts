import { config, getAllParentThemes } from '../config'
import { isIOS } from '../util/env'
import { removeFromArray } from '../util/lang'

export interface PopperEvent extends Event {
  usedByTooltip?: boolean
  closeAllPopover?: boolean
  closePopover?: boolean
}

/**
 * The internal contract between a popper (created by `usePopper`) and the
 * shared global context. Also provided to child poppers for nesting logic.
 */
export interface PopperController {
  readonly randomId: string
  readonly theme: string
  readonly showGroup: string | null
  readonly autoHide: boolean | ((event: Event) => boolean)
  readonly instantMove: boolean
  readonly parentPopper: PopperController | null
  lockedChild: PopperController | null
  lockedChildTimer: ReturnType<typeof setTimeout> | null
  readonly shownChildren: Set<string>
  pendingHide: boolean
  mouseDownContains: boolean
  containsGlobalTarget: boolean
  lastAutoHide: boolean
  popperNode: () => HTMLElement
  hide: (options?: { event?: Event, skipDelay?: boolean }) => void
  applyHide: (skipTransition?: boolean) => void
  computePosition: () => void
  handleGlobalClose: (event: PopperEvent, touch: boolean) => void
  emitCloseGroup: () => void
}

export interface PopperContext {
  readonly shownPoppers: PopperController[]
  hidingPopper: PopperController | null
  markShown: (popper: PopperController) => void
  markHidden: (popper: PopperController) => void
}

interface ActiveContext extends PopperContext {
  dispose: () => void
}

let context: ActiveContext | null = null
let popperCount = 0

/**
 * Lazily create the global context (state + document/window listeners).
 * Refcounted: each initialized popper acquires it and must release it on
 * dispose; the last release tears everything down.
 */
export function acquirePopperContext (): PopperContext {
  popperCount++
  if (!context) {
    context = createPopperContext()
  }
  return context
}

export function releasePopperContext () {
  popperCount--
  if (popperCount === 0 && context) {
    context.dispose()
    context = null
  }
}

export function hideAllPoppers () {
  if (!context) { return }
  const { shownPoppers } = context
  for (let i = 0; i < shownPoppers.length; i++) {
    shownPoppers[i].hide()
  }
}

export function recomputeAllPoppers () {
  if (!context) { return }
  const { shownPoppers } = context
  for (let i = 0; i < shownPoppers.length; i++) {
    shownPoppers[i].computePosition()
  }
}

function createPopperContext (): ActiveContext {
  const shownPoppers: PopperController[] = []
  const shownPoppersByTheme: Record<string, PopperController[]> = {}

  function getShownPoppersByTheme (theme: string) {
    let list = shownPoppersByTheme[theme]
    if (!list) {
      list = shownPoppersByTheme[theme] = []
    }
    return list
  }

  function handleGlobalPointerDown (event: PopperEvent, touch: boolean) {
    if (config.autoHideOnMousedown) {
      handleGlobalClose(event, touch)
    } else {
      // Compute contains only
      for (let i = 0; i < shownPoppers.length; i++) {
        const popper = shownPoppers[i]
        try {
          popper.mouseDownContains = popper.popperNode().contains(event.target as Node)
        } catch {
          // noop
        }
      }
    }
  }

  function handleGlobalPointerUp (event: PopperEvent, touch: boolean) {
    if (!config.autoHideOnMousedown) {
      handleGlobalClose(event, touch)
    }
  }

  function handleGlobalClose (event: PopperEvent, touch: boolean) {
    const preventClose: Record<string, true> = {}

    for (let i = shownPoppers.length - 1; i >= 0; i--) {
      const popper = shownPoppers[i]
      try {
        const childrenContains = Array.from(popper.shownChildren).some(id => {
          const child = shownPoppers.find(p => p.randomId === id)
          return child && child.popperNode().contains(event.target as Node)
        })

        const contains = popper.containsGlobalTarget = popper.mouseDownContains || popper.popperNode().contains(event.target as Node) || childrenContains
        popper.pendingHide = false

        // Delay so that close directive has time to set values (closeAllPopover, closePopover)
        requestAnimationFrame(() => {
          popper.pendingHide = false
          if (preventClose[popper.randomId]) { return }

          if (shouldAutoHide(popper, contains, event)) {
            popper.handleGlobalClose(event, touch)

            // Only close child popper
            if (!event.closeAllPopover && event.closePopover && contains) {
              let parent = popper.parentPopper
              while (parent) {
                preventClose[parent.randomId] = true
                parent = parent.parentPopper
              }
              return
            }

            // Auto hide parents
            let parent = popper.parentPopper
            while (parent) {
              if (shouldAutoHide(parent, parent.containsGlobalTarget, event)) {
                parent.handleGlobalClose(event, touch)
              } else {
                break
              }
              parent = parent.parentPopper
            }
          }
        })
      } catch {
        // noop
      }
    }
  }

  const onMouseDown = (event: MouseEvent) => handleGlobalPointerDown(event, false)
  const onClick = (event: MouseEvent) => handleGlobalPointerUp(event, false)
  const onTouchStart = (event: TouchEvent) => handleGlobalPointerDown(event, true)
  const onTouchEnd = (event: TouchEvent) => handleGlobalPointerUp(event, true)

  if (isIOS) {
    const options = {
      passive: true,
      capture: true,
    }
    document.addEventListener('touchstart', onTouchStart, options)
    document.addEventListener('touchend', onTouchEnd, options)
  } else {
    window.addEventListener('mousedown', onMouseDown, true)
    window.addEventListener('click', onClick, true)
  }
  window.addEventListener('resize', recomputeAllPoppers)

  const ctx: ActiveContext = {
    shownPoppers,
    hidingPopper: null,

    markShown (popper) {
      const showGroup = popper.showGroup
      if (showGroup) {
        for (let i = 0; i < shownPoppers.length; i++) {
          const popover = shownPoppers[i]
          if (popover.showGroup !== showGroup) {
            popover.hide()
            popover.emitCloseGroup()
          }
        }
      }

      shownPoppers.push(popper)
      document.body.classList.add('v-popper--some-open')
      for (const theme of getAllParentThemes(popper.theme)) {
        getShownPoppersByTheme(theme).push(popper)
        document.body.classList.add(`v-popper--some-open--${theme}`)
      }
    },

    markHidden (popper) {
      removeFromArray(shownPoppers, popper)
      if (shownPoppers.length === 0) {
        document.body.classList.remove('v-popper--some-open')
      }
      for (const theme of getAllParentThemes(popper.theme)) {
        const list = getShownPoppersByTheme(theme)
        removeFromArray(list, popper)
        if (list.length === 0) {
          document.body.classList.remove(`v-popper--some-open--${theme}`)
        }
      }

      if (ctx.hidingPopper === popper) {
        ctx.hidingPopper = null
      }
    },

    dispose () {
      if (isIOS) {
        document.removeEventListener('touchstart', onTouchStart, { capture: true })
        document.removeEventListener('touchend', onTouchEnd, { capture: true })
      } else {
        window.removeEventListener('mousedown', onMouseDown, true)
        window.removeEventListener('click', onClick, true)
      }
      window.removeEventListener('resize', recomputeAllPoppers)
    },
  }

  return ctx
}

function shouldAutoHide (popper: PopperController, contains: boolean, event: PopperEvent): boolean {
  return event.closeAllPopover || (event.closePopover && contains) || (getAutoHideResult(popper, event) && !contains)
}

function getAutoHideResult (popper: PopperController, event: Event) {
  if (typeof popper.autoHide === 'function') {
    const result = popper.autoHide(event)
    popper.lastAutoHide = result
    return result
  }
  return popper.autoHide
}
