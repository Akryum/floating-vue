import vtooltip, { defaultOptions, state } from './v-tooltip'
import Popover from './components/Popover.vue'
import merge from 'lodash.merge'

export function install (Vue, options = {}) {
	if (install.installed) return
	install.installed = true

	const finalOptions = {}
	merge(finalOptions, defaultOptions, options)

	plugin.options = finalOptions
	vtooltip.options = finalOptions

	Vue.directive('tooltip', vtooltip)
	Vue.component('v-popover', Popover)
}

export const VTooltip = vtooltip
export const VPopover = Popover

const plugin = {
	install,

	get enabled () {
		return state.enabled
	},

	set enabled (value) {
		state.enabled = value
	},
}

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue
}
if (GlobalVue) {
	GlobalVue.use(plugin)
}

export default plugin
