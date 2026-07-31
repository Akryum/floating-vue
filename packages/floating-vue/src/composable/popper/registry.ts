import { config, getAllParentPresets } from '../../config'
import { isIOS, supportsPassive } from '../../util/env'
import { removeFromArray } from '../../util/lang'
import type { PopperApi, PopperEvent } from './types'

const shownPoppers: PopperApi[] = []
const shownPoppersByPreset: Record<string, PopperApi[]> = {}
let globalHandlersInstalled = false
let hidingPopper: PopperApi | null = null

/**
 * Returns the popper currently hiding for instant-move behavior.
 */
export function getHidingPopper () {
  return hidingPopper
}

/**
 * Updates the popper currently hiding for instant-move behavior.
 */
export function setHidingPopper (popper: PopperApi | null) {
  hidingPopper = popper
}

/**
 * Returns a copy of visible poppers for group and global operations.
 */
export function getShownPoppers () {
  return [...shownPoppers]
}

/**
 * Registers one popper as shown and updates body preset classes.
 */
export function registerShownPopper (popper: PopperApi) {
  shownPoppers.push(popper)
  document.body.classList.add('v-popper--some-open')

  for (const preset of getAllParentPresets(popper.props.preset)) {
    getShownPoppersByPreset(preset).push(popper)
    document.body.classList.add(`v-popper--some-open--${preset}`)
  }
}

/**
 * Removes one popper from the shown registry and body preset classes.
 */
export function unregisterShownPopper (popper: PopperApi) {
  removeFromArray(shownPoppers, popper)
  if (shownPoppers.length === 0) {
    document.body.classList.remove('v-popper--some-open')
  }

  for (const preset of getAllParentPresets(popper.props.preset)) {
    const list = getShownPoppersByPreset(preset)
    removeFromArray(list, popper)
    if (list.length === 0) {
      document.body.classList.remove(`v-popper--some-open--${preset}`)
    }
  }
}

/**
 * Installs global pointer and resize listeners once per browser session.
 */
export function ensureGlobalPopperHandlers () {
  if (globalHandlersInstalled || typeof document === 'undefined' || typeof window === 'undefined') return
  globalHandlersInstalled = true

  if (isIOS) {
    const options = supportsPassive
      ? {
        passive: true,
        capture: true,
      }
      : true
    document.addEventListener('touchstart', event => handleGlobalPointerDown(event as PopperEvent, true), options)
    document.addEventListener('touchend', event => handleGlobalPointerUp(event as PopperEvent, true), options)
  } else {
    window.addEventListener('mousedown', event => handleGlobalPointerDown(event as PopperEvent, false), true)
    window.addEventListener('click', event => handleGlobalPointerUp(event as PopperEvent, false), true)
  }
  window.addEventListener('resize', recomputeAllPoppers)
}

/**
 * Recomputes all visible poppers.
 */
export function recomputeAllPoppers () {
  for (let i = 0; i < shownPoppers.length; i++) {
    shownPoppers[i].recompute()
  }
}

/**
 * Hides all visible poppers.
 */
export function hideAllPoppers () {
  for (let i = 0; i < shownPoppers.length; i++) {
    shownPoppers[i].hide()
  }
}

/**
 * Handles the pointer down half of global auto-hide.
 */
function handleGlobalPointerDown (event: PopperEvent, touch: boolean) {
  if (config.autoHideOnMousedown) {
    handleGlobalClose(event, touch)
  } else {
    for (let i = 0; i < shownPoppers.length; i++) {
      const popper = shownPoppers[i]
      try {
        popper.state.mouseDownContains = getPopperNode(popper)?.contains(event.target as Node) ?? false
      } catch (e) {
        // noop
      }
    }
  }
}

/**
 * Handles the pointer up half of global auto-hide.
 */
function handleGlobalPointerUp (event: PopperEvent, touch: boolean) {
  if (!config.autoHideOnMousedown) {
    handleGlobalClose(event, touch)
  }
}

/**
 * Applies global close rules from deepest popper to root.
 */
function handleGlobalClose (event: PopperEvent, touch: boolean) {
  const preventClose: Record<string, true> = {}

  for (let i = shownPoppers.length - 1; i >= 0; i--) {
    const popper = shownPoppers[i]
    try {
      const contains = popper.state.containsGlobalTarget =
        popper.state.mouseDownContains ||
        (getPopperNode(popper)?.contains(event.target as Node) ?? false)
      popper.state.pendingHide = false

      requestAnimationFrame(() => {
        popper.state.pendingHide = false
        if (preventClose[popper.state.randomId]) return

        if (shouldAutoHide(popper, contains, event)) {
          handlePopperGlobalClose(popper, event, touch)

          if (!event.closeAllPopover && event.closePopover && contains) {
            let parent = popper.parentPopper
            while (parent) {
              preventClose[parent.state.randomId] = true
              parent = parent.parentPopper
            }
            return
          }

          let parent = popper.parentPopper
          while (parent) {
            if (shouldAutoHide(parent, parent.state.containsGlobalTarget, event)) {
              handlePopperGlobalClose(parent, event, touch)
            } else {
              break
            }
            parent = parent.parentPopper
          }
        }
      })
    } catch (e) {
      // noop
    }
  }
}

/**
 * Hides one popper from the global close handler and emits close metadata.
 */
function handlePopperGlobalClose (popper: PopperApi, event: PopperEvent, touch: boolean) {
  if (popper.runtime.showFrameLocked) return

  popper.hide({ event })
  if (event.closePopover) {
    popper.emit('close-directive')
  } else {
    popper.emit('auto-hide')
  }

  if (touch) {
    popper.runtime.preventShow = true
    setTimeout(() => {
      popper.runtime.preventShow = false
    }, 300)
  }
}

/**
 * Evaluates whether a popper should close for a global pointer event.
 */
function shouldAutoHide (popper: PopperApi, contains: boolean, event: PopperEvent): boolean {
  return Boolean(event.closeAllPopover || (event.closePopover && contains) || (getAutoHideResult(popper, event) && !contains))
}

/**
 * Reads boolean auto-hide result and stores functional outcomes for slots.
 */
function getAutoHideResult (popper: PopperApi, event: Event) {
  if (typeof popper.props.autoHide === 'function') {
    const result = popper.props.autoHide(event)
    popper.state.lastAutoHide = result
    return result
  }
  return popper.props.autoHide
}

/**
 * Returns shown registry bucket for one preset.
 */
function getShownPoppersByPreset (preset: string) {
  let list = shownPoppersByPreset[preset]
  if (!list) {
    list = shownPoppersByPreset[preset] = []
  }
  return list
}

/**
 * Returns current popper DOM node.
 */
function getPopperNode (popper: PopperApi) {
  return popper.runtime.nodes.popperNode ?? popper.props.popperNode()
}
