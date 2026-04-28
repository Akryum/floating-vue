import type { DirectiveBinding, ObjectDirective } from 'vue'
import { supportsPassive } from '../util/env'
import type { PopperEvent } from '../composable/popper/types'

/**
 * Element instance augmented with directive-private state.
 */
type ClosePopperEl = HTMLElement & {
  $_closePopoverModifiers?: Record<string, boolean>
  $_vclosepopover_touch?: boolean
  $_vclosepopover_touchPoint?: Touch
}

function addListeners (el: ClosePopperEl) {
  el.addEventListener('mousedown', addEventProps)
  el.addEventListener('click', addEventProps)
  el.addEventListener('touchstart', onTouchStart, supportsPassive
    ? {
      passive: true,
    }
    : false)
}

function removeListeners (el: ClosePopperEl) {
  el.removeEventListener('mousedown', addEventProps)
  el.removeEventListener('click', addEventProps)
  el.removeEventListener('touchstart', onTouchStart)
  el.removeEventListener('touchend', onTouchEnd)
  el.removeEventListener('touchcancel', onTouchCancel)
}

function addEventProps (event: Event) {
  const el = event.currentTarget as ClosePopperEl
  const popperEvent = event as PopperEvent
  popperEvent.closePopover = !el.$_vclosepopover_touch
  popperEvent.closeAllPopover = !!el.$_closePopoverModifiers?.all
}

function onTouchStart (event: TouchEvent) {
  if (event.changedTouches.length === 1) {
    const el = event.currentTarget as ClosePopperEl
    el.$_vclosepopover_touch = true
    const touch = event.changedTouches[0]
    el.$_vclosepopover_touchPoint = touch
    el.addEventListener('touchend', onTouchEnd)
    el.addEventListener('touchcancel', onTouchCancel)
  }
}

function onTouchEnd (event: TouchEvent) {
  const el = event.currentTarget as ClosePopperEl
  el.$_vclosepopover_touch = false
  if (event.changedTouches.length === 1) {
    const touch = event.changedTouches[0]
    const firstTouch = el.$_vclosepopover_touchPoint
    const popperEvent = event as unknown as PopperEvent
    popperEvent.closePopover = !!firstTouch && (
      Math.abs(touch.screenY - firstTouch.screenY) < 20 &&
      Math.abs(touch.screenX - firstTouch.screenX) < 20
    )
    popperEvent.closeAllPopover = !!el.$_closePopoverModifiers?.all
  }
}

function onTouchCancel (event: TouchEvent) {
  const el = event.currentTarget as ClosePopperEl
  el.$_vclosepopover_touch = false
}

const vClosePopper: ObjectDirective<ClosePopperEl, unknown> = {
  beforeMount (el: ClosePopperEl, { value, modifiers }: DirectiveBinding<unknown>) {
    el.$_closePopoverModifiers = modifiers as Record<string, boolean>
    if (typeof value === 'undefined' || value) {
      addListeners(el)
    }
  },
  updated (el: ClosePopperEl, { value, oldValue, modifiers }: DirectiveBinding<unknown>) {
    el.$_closePopoverModifiers = modifiers as Record<string, boolean>
    if (value !== oldValue) {
      if (typeof value === 'undefined' || value) {
        addListeners(el)
      } else {
        removeListeners(el)
      }
    }
  },
  beforeUnmount (el: ClosePopperEl) {
    removeListeners(el)
  },
}

export default vClosePopper
