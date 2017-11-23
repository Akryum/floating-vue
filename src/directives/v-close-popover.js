import { supportsPassive } from '../utils'

function addListeners (el) {
	el.addEventListener('click', onClick)
	el.addEventListener('touchstart', onTouchStart, supportsPassive ? {
		passive: true,
	} : false)
}

function removeListeners (el) {
	el.removeEventListener('click', onClick)
	el.removeEventListener('touchstart', onTouchStart)
	el.removeEventListener('touchend', onTouchEnd)
	el.removeEventListener('touchcancel', onTouchCancel)
}

function onClick (event) {
	const el = event.currentTarget
	event.closePopover = !el.$_vclosepopover_touch
}

function onTouchStart (event) {
	if (event.changedTouches.length === 1) {
		const el = event.currentTarget
		el.$_vclosepopover_touch = true
		const touch = event.changedTouches[0]
		el.$_vclosepopover_touchPoint = touch
		el.addEventListener('touchend', onTouchEnd)
		el.addEventListener('touchcancel', onTouchCancel)
	}
}

function onTouchEnd (event) {
	const el = event.currentTarget
	el.$_vclosepopover_touch = false
	if (event.changedTouches.length === 1) {
		const touch = event.changedTouches[0]
		const firstTouch = el.$_vclosepopover_touchPoint
		event.closePopover = (
			Math.abs(touch.screenY - firstTouch.screenY) < 20 &&
			Math.abs(touch.screenX - firstTouch.screenX) < 20
		)
	}
}

function onTouchCancel (event) {
	const el = event.currentTarget
	el.$_vclosepopover_touch = false
}

export default {
	bind (el, { value }) {
		if (typeof value === 'undefined' || value) {
			addListeners(el)
		}
	},
	update (el, { value, oldValue }) {
		if (value !== oldValue) {
			if (typeof value === 'undefined' || value) {
				addListeners(el)
			} else {
				removeListeners(el)
			}
		}
	},
	unbind (el) {
		removeListeners(el)
	},
}
