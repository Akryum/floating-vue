import Tooltip from 'tooltip.js'

import { addClasses } from './utils'

export let state = {
	enabled: true,
}

const positions = [
	'top',
	'top-start',
	'top-end',
	'right',
	'right-start',
	'right-end',
	'bottom',
	'bottom-start',
	'bottom-end',
	'left',
	'left-start',
	'left-end',
]

export const defaultOptions = {
	// Default tooltip placement relative to target element
	defaultPlacement: 'top',
	// Default CSS classes applied to the tooltip element
	defaultClass: 'vue-tooltip-theme',
	// Default HTML template of the tooltip element
	// It must include `tooltip` & `tooltip-inner` CSS classes
	defaultTemplate: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
	// Delay (ms)
	defaultDelay: 0,
	// Default events that trigger the tooltip
	defaultTrigger: 'hover focus',
	// Default position offset (px)
	defaultOffset: 0,
	// Default container where the tooltip will be appended
	defaultContainer: 'body',
	defaultBoundariesElement: undefined,
	defaultPopperOptions: {},
	autoHide: true,
	// Auto destroy tooltip DOM nodes (ms)
	disposeTimeout: 5000,
}

function getOptions (options) {
	const result = {
		placement: options.placement || directive.options.defaultPlacement,
		delay: options.delay || directive.options.defaultDelay,
		template: options.template || directive.options.defaultTemplate,
		trigger: options.trigger || directive.options.defaultTrigger,
		offset: options.offset || directive.options.defaultOffset,
		container: options.container || directive.options.defaultContainer,
		boundariesElement: options.boundariesElement || directive.options.defaultBoundariesElement,
		popperOptions: {
			...(options.popperOptions || directive.options.defaultPopperOptions),
		},
	}

	if (options.offset) {
		const typeofOffset = typeof options.offset
		let offset = options.offset

		// One value -> switch
		if (typeofOffset === 'number' || (typeofOffset === 'string' && offset.indexOf(',') === -1)) {
			offset = `0, ${offset}`
		}

		if (!result.popperOptions.modifiers) {
			result.popperOptions.modifiers = {}
		}
		result.popperOptions.modifiers.offset = {
			offset,
		}
	}

	return result
}

function getPlacement(value, modifiers) {
  var placement = value.placement
  for (var i = 0; i < positions.length; i++) {
    var pos = positions[i]
    if (modifiers[pos]) {
      placement = pos
    }
  }
  return placement
}

class SuperTooltip extends Tooltip {
	setClasses (classes) {
		this._classes = classes
	}

	setContent (content) {
		this.options.title = content
		if (this._tooltipNode) {
			const el = this._tooltipNode.querySelector(this.innerSelector)

			if (el) {
				if (!content) {
					el.innerHTML = ''
				} else {
					el.innerHTML = content
				}

				this.popperInstance.update()
			}
		}
	}

	setOptions (options) {
		let classesUpdated = false
		const classes = (options && options.classes) || directive.options.defaultClass
		if (this._classes !== classes) {
			this.setClasses(classes)
			classesUpdated = true
		}

		options = getOptions(options)

		let needPopperUpdate = false
		let needRestart = false

		if (
			this.options.offset !== options.offset ||
						this.options.placement !== options.placement
		) {
			needPopperUpdate = true
		}

		if (
			this.options.template !== options.template ||
			this.options.trigger !== options.trigger ||
			this.options.container !== options.container ||
			classesUpdated
		) {
			needRestart = true
		}

		for (const key in options) {
			this.options[key] = options[key]
		}

		if (this._tooltipNode) {
			if (needRestart) {
				const isOpen = this._isOpen

				this.dispose()

				const events = typeof this.options.trigger === 'string'
					? options.trigger
						.split(' ')
						.filter(
							trigger => ['click', 'hover', 'focus'].indexOf(trigger) !== -1
						)
					: []
				this._setEventListeners(this.reference, events, this.options)

				if (isOpen) {
					this.show()
				}
			} else if (needPopperUpdate) {
				this.popperInstance.update()
			}
		}
	}

	_create (...args) {
		const result = super._create(...args)

		if (defaultOptions.autoHide && this.options.trigger.indexOf('hover') !== -1) {
			result.addEventListener('mouseenter', this.hide)
			result.addEventListener('click', this.hide)
		}

		return result
	}

	_dispose () {
		if (this._tooltipNode) {
			this._tooltipNode.removeEventListener('mouseenter', this.hide)
			this._tooltipNode.removeEventListener('click', this.hide)
		}

		this._events.forEach(({ func, event }) => {
			this.reference.removeEventListener(event, func)
		})
		this._events = []
		return super._dispose()
	}

	_show (reference, options, ...args) {
		if (options && typeof options.container === 'string') {
			const container = document.querySelector(options.container)
			if (!container) return
		}

		options = Object.assign({}, options)
		delete options.offset

		let updateClasses = true
		if (this._tooltipNode) {
			addClasses(this._tooltipNode, this._classes)
			updateClasses = false
		}

		const result = super._show(reference, options, ...args)

		if (updateClasses && this._tooltipNode) {
			addClasses(this._tooltipNode, this._classes)
		}

		// Fix position
		setTimeout(() => {
			if (this.popperInstance) {
				this.popperInstance.update()
			}
		}, 0)

		clearTimeout(this._disposeTimer)

		return result
	}

	_hide (...args) {
		const result = super._hide(...args)

		clearTimeout(this._disposeTimer)
		this._disposeTimer = setTimeout(() => {
			if (this._tooltipNode) {
				this._tooltipNode.removeEventListener('mouseenter', this.hide)
				this._tooltipNode.removeEventListener('click', this.hide)
				this._tooltipNode.parentNode.removeChild(this._tooltipNode)
				this._tooltipNode = null
			}
		}, directive.options.disposeTimeout || defaultOptions.disposeTimeout)

		return result
	}
}

function getContent (value) {
	const type = typeof value
	if (type === 'string') {
		return value
	} else if (value && type === 'object') {
		return value.content
	} else {
		return false
	}
}

function createTooltip (el, value, modifiers) {
	const content = getContent(value)
	let classes = value.classes || directive.options.defaultClass
	const opts = {
		title: content,
		html: true,
		...getOptions({
			...value,
			placement: getPlacement(value, modifiers),
		}),
	}
	const tooltip = el._tooltip = new SuperTooltip(el, opts)
	tooltip.setClasses(classes)
	tooltip._vueEl = el
}

function destroyTooltip (el) {
	if (el._tooltip) {
		el._tooltip.dispose()
		delete el._tooltip
	}
}

const directive = {
	options: defaultOptions,
	bind (el, { value, modifiers }) {
		const content = getContent(value)
		destroyTooltip(el)
		if (content && state.enabled) {
			createTooltip(el, value, modifiers)
		}
	},
	update (el, { value, oldValue, modifiers }) {
		const content = getContent(value)
		if (!content || !state.enabled) {
			destroyTooltip(el)
		} else if (el._tooltip) {
			const tooltip = el._tooltip
			// Content
			tooltip.setContent(content)
			// Options
			tooltip.setOptions({
				...value,
				placement: getPlacement(value, modifiers),
			})
		} else {
			createTooltip(el, value, modifiers)
		}
	},
	unbind (el) {
		destroyTooltip(el)
	},
}

export default directive
