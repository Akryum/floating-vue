import Tooltip from './tooltip'

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

export function getOptions (options) {
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

function getPlacement (value, modifiers) {
	var placement = value.placement
	for (var i = 0; i < positions.length; i++) {
		var pos = positions[i]
		if (modifiers[pos]) {
			placement = pos
		}
	}
	return placement
}

function getContent (value) {
	const type = typeof value
	if (type === 'string') {
		return value
	} else if (value && value instanceof HTMLElement) {
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
	const tooltip = el._tooltip = new Tooltip(el, opts)
	tooltip.setClasses(classes)
	tooltip._vueEl = el
}

function destroyTooltip (el) {
	if (el._tooltip) {
		el._tooltip.dispose()
		delete el._tooltip
	}
}

function bind (el, { value, oldValue, modifiers }) {
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
}

export const directive = {
	options: defaultOptions,
	bind,
	update: bind,
	unbind (el) {
		destroyTooltip(el)
	},
}

export default directive
