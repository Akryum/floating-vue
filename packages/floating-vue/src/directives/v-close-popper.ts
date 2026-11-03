function addListeners (el) {
  el.addEventListener('mousedown', addEventProps)
  el.addEventListener('click', addEventProps)
  el.addEventListener('touchstart', onTouchStart, { passive: true })
}

function removeListeners (el) {
  el.removeEventListener('mousedown', addEventProps)
  el.removeEventListener('click', addEventProps)
  el.removeEventListener('touchstart', onTouchStart)
  resetTouch(el)
  delete el.$_vclosepopover_touch
}

function resetTouch (el) {
  el.$_vclosepopover_touch = false
  delete el.$_vclosepopover_touchPoint
  el.removeEventListener('touchend', onTouchEnd)
  el.removeEventListener('touchcancel', onTouchCancel)
}

function addEventProps (event) {
  const el = event.currentTarget
  event.closePopover = !el.$_vclosepopover_touch
  event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all
}

function onTouchStart (event) {
  if (event.changedTouches.length === 1) {
    const el = event.currentTarget
    el.$_vclosepopover_touch = true
    const touch = event.changedTouches[0]
    el.$_vclosepopover_touchPoint = {
      screenX: touch.screenX,
      screenY: touch.screenY,
    }
    el.addEventListener('touchend', onTouchEnd)
    el.addEventListener('touchcancel', onTouchCancel)
  }
}

function onTouchEnd (event) {
  const el = event.currentTarget

  if (event.changedTouches.length === 1) {
    const touch = event.changedTouches[0]
    const firstTouch = el.$_vclosepopover_touchPoint

    event.closePopover = !!firstTouch && (
      Math.abs(touch.screenY - firstTouch.screenY) < 20 &&
      Math.abs(touch.screenX - firstTouch.screenX) < 20
    )

    event.closeAllPopover =
      el.$_closePopoverModifiers &&
      !!el.$_closePopoverModifiers.all
  }

  resetTouch(el)
}

function onTouchCancel (event) {
  const el = event.currentTarget
  resetTouch(el)
}

export const vClosePopper = {
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
    delete el.$_closePopoverModifiers
  },
}
