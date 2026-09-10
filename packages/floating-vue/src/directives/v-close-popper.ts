import type { DirectiveBinding, ObjectDirective } from 'vue'
import type { PopperEvent } from '../popper/context'

export interface ClosePopperElement extends HTMLElement {
  $_closePopoverModifiers?: DirectiveBinding['modifiers']
  $_vclosepopover_touch?: boolean
  $_vclosepopover_touchPoint?: Touch
}

function addListeners (el: ClosePopperElement) {
  el.addEventListener('mousedown', addEventProps)
  el.addEventListener('click', addEventProps)
  el.addEventListener('touchstart', onTouchStart, { passive: true })
}

function removeListeners (el: ClosePopperElement) {
  el.removeEventListener('mousedown', addEventProps)
  el.removeEventListener('click', addEventProps)
  el.removeEventListener('touchstart', onTouchStart)
  el.removeEventListener('touchend', onTouchEnd)
  el.removeEventListener('touchcancel', onTouchCancel)
}

function addEventProps (event: Event) {
  const el = event.currentTarget as ClosePopperElement
  ;(event as PopperEvent).closePopover = !el.$_vclosepopover_touch
  ;(event as PopperEvent).closeAllPopover = !!el.$_closePopoverModifiers?.all
}

function onTouchStart (event: TouchEvent) {
  if (event.changedTouches.length === 1) {
    const el = event.currentTarget as ClosePopperElement
    el.$_vclosepopover_touch = true
    const touch = event.changedTouches[0]
    el.$_vclosepopover_touchPoint = touch
    el.addEventListener('touchend', onTouchEnd)
    el.addEventListener('touchcancel', onTouchCancel)
  }
}

function onTouchEnd (event: TouchEvent) {
  const el = event.currentTarget as ClosePopperElement
  el.$_vclosepopover_touch = false
  if (event.changedTouches.length === 1) {
    const touch = event.changedTouches[0]
    const firstTouch = el.$_vclosepopover_touchPoint
    ;(event as PopperEvent).closePopover = !!firstTouch && (
      Math.abs(touch.screenY - firstTouch.screenY) < 20 &&
      Math.abs(touch.screenX - firstTouch.screenX) < 20
    )
    ;(event as PopperEvent).closeAllPopover = !!el.$_closePopoverModifiers?.all
  }
}

function onTouchCancel (event: TouchEvent) {
  const el = event.currentTarget as ClosePopperElement
  el.$_vclosepopover_touch = false
}

export const vClosePopper: ObjectDirective<ClosePopperElement> = {
  beforeMount (el, { value, modifiers }) {
    el.$_closePopoverModifiers = modifiers
    if (typeof value === 'undefined' || value) {
      addListeners(el)
    }
  },
  updated (el, { value, oldValue, modifiers }) {
    el.$_closePopoverModifiers = modifiers
    if (value !== oldValue) {
      if (typeof value === 'undefined' || value) {
        addListeners(el)
      } else {
        removeListeners(el)
      }
    }
  },
  beforeUnmount (el) {
    removeListeners(el)
  },
}
