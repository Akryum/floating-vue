import Tooltip from './tooltip'
import { addClasses, removeClasses } from './utils'

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
	// Default CSS classes applied to the target element of the tooltip
	defaultTargetClass: 'has-tooltip',
	// Default HTML template of the tooltip element
	// It must include `tooltip-arrow` & `tooltip-inner` CSS classes (can be configured, see below)
	defaultTemplate: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
	// Selector used to get the arrow element in the tooltip template
	defaultArrowSelector: '.tooltip-arrow, .tooltip__arrow',
	// Selector used to get the inner content element in the tooltip template
	defaultInnerSelector: '.tooltip-inner, .tooltip__inner',
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
	// Hide on mouseover tooltip
	autoHide: true,
	// Auto destroy tooltip DOM nodes (ms)
	disposeTimeout: 5000,
	// Options for popover
	popover: {
		defaultPlacement: 'bottom',
		defaultClass: 'vue-popover-theme',
		defaultBaseClass: 'tooltip popover',
		defaultInnerClass: 'tooltip-inner popover-inner',
		defaultArrowClass: 'tooltip-arrow popover-arrow',
		defaultDelay: 0,
		defaultTrigger: 'click',
		defaultOffset: 0,
		defaultContainer: 'body',
		defaultBoundariesElement: undefined,
		defaultPopperOptions: {},
		// Hides if clicked outside of popover
		defaultAutoHide: true,
		// Update popper on content resize
		defaultHandleResize: true,
	},
}

export function getOptions (options) {
	const result = {
		placement: typeof options.placement !== 'undefined' ? options.placement : directive.options.defaultPlacement,
		delay: typeof options.delay !== 'undefined' ? options.delay : directive.options.defaultDelay,
		template: typeof options.template !== 'undefined' ? options.template : directive.options.defaultTemplate,
		arrowSelector: typeof options.arrowSelector !== 'undefined' ? options.arrowSelector : directive.options.defaultArrowSelector,
		innerSelector: typeof options.innerSelector !== 'undefined' ? options.innerSelector : directive.options.defaultInnerSelector,
		trigger: typeof options.trigger !== 'undefined' ? options.trigger : directive.options.defaultTrigger,
		offset: typeof options.offset !== 'undefined' ? options.offset : directive.options.defaultOffset,
		container: typeof options.container !== 'undefined' ? options.container : directive.options.defaultContainer,
		boundariesElement: typeof options.boundariesElement !== 'undefined' ? options.boundariesElement : directive.options.defaultBoundariesElement,
		popperOptions: {
			...(typeof options.popperOptions !== 'undefined' ? options.popperOptions : directive.options.defaultPopperOptions),
		},
	}

	if (result.offset) {
		const typeofOffset = typeof result.offset
		let offset = result.offset

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

export function getPlacement (value, modifiers) {
	var placement = value.placement
	for (var i = 0; i < positions.length; i++) {
		var pos = positions[i]
		if (modifiers[pos]) {
			placement = pos
		}
	}
	return placement
}

export function getContent (value) {
	const type = typeof value
	if (type === 'string') {
		return value
	} else if (value && type === 'object') {
		return value.content
	} else {
		return false
	}
}

export function createTooltip (el, value, modifiers) {
	const content = getContent(value)
	let classes = typeof value.classes !== 'undefined' ? value.classes : directive.options.defaultClass
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

	// Class on target
	const targetClasses = typeof value.targetClasses !== 'undefined' ? value.targetClasses : directive.options.defaultTargetClass
	el._tooltipTargetClasses = targetClasses
	addClasses(el, targetClasses)
}

export function destroyTooltip (el) {
	if (el._tooltip) {
		el._tooltip.dispose()
		delete el._tooltip
	}

	if (el._tooltipTargetClasses) {
		removeClasses(el, el._tooltipTargetClasses)
		delete el._tooltipTargetClasses
	}
}

export function bind (el, { value, oldValue, modifiers }) {
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
