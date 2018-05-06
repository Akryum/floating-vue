<template>
	<div class="v-popover" :class="cssClass">
		<span
			ref="trigger"
			class="trigger"
			style="display: inline-block;"
			:aria-describedby="popoverId"
		>
			<slot />
		</span>

		<div
			ref="popover"
			:id="popoverId"
			:class="[popoverBaseClass, popoverClass, cssClass]"
			:style="{
				visibility: isOpen ? 'visible' : 'hidden',
			}"
			:aria-hidden="isOpen ? 'false' : 'true'"
		>
			<div :class="popoverWrapperClass">
				<div ref="arrow" :class="popoverArrowClass"></div>
				<div
					ref="inner"
					:class="popoverInnerClass"
					style="position: relative;"
				>
					<div>
						<slot name="popover" />
					</div>

					<ResizeObserver v-if="handleResize" @notify="$_handleResize" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { directive } from '../directives/v-tooltip'
import Popper from 'popper.js'
import { ResizeObserver } from 'vue-resize'
import { supportsPassive } from '../utils'

function getDefault (key) {
	const value = directive.options.popover[key]
	if (typeof value === 'undefined') {
		return directive.options[key]
	}
	return value
}

let isIOS = false
if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
	isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
}

const openPopovers = []

export default {
	name: 'VPopover',

	components: {
		ResizeObserver,
	},

	props: {
		open: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		placement: {
			type: String,
			default: () => getDefault('defaultPlacement'),
		},
		delay: {
			type: [String, Number, Object],
			default: () => getDefault('defaultDelay'),
		},
		offset: {
			type: [String, Number],
			default: () => getDefault('defaultOffset'),
		},
		trigger: {
			type: String,
			default: () => getDefault('defaultTrigger'),
		},
		container: {
			type: [String, Object, Element],
			default: () => getDefault('defaultContainer'),
		},
		boundariesElement: {
			type: Element,
			default: () => getDefault('defaultBoundariesElement'),
		},
		popperOptions: {
			type: Object,
			default: () => getDefault('defaultPopperOptions'),
		},
		popoverClass: {
			type: [String, Array],
			default: () => getDefault('defaultClass'),
		},
		popoverBaseClass: {
			type: [String, Array],
			default: () => directive.options.popover.defaultBaseClass,
		},
		popoverInnerClass: {
			type: [String, Array],
			default: () => directive.options.popover.defaultInnerClass,
		},
		popoverWrapperClass: {
			type: [String, Array],
			default: () => directive.options.popover.defaultWrapperClass,
		},
		popoverArrowClass: {
			type: [String, Array],
			default: () => directive.options.popover.defaultArrowClass,
		},
		autoHide: {
			type: Boolean,
			default: () => directive.options.popover.defaultAutoHide,
		},
		handleResize: {
			type: Boolean,
			default: () => directive.options.popover.defaultHandleResize,
		},
		openGroup: {
			type: String,
			default: null,
		},
	},

	data () {
		return {
			isOpen: false,
			id: Math.random().toString(36).substr(2, 10),
		}
	},

	computed: {
		cssClass () {
			return {
				'open': this.isOpen,
			}
		},

		popoverId () {
			return `popover_${this.id}`
		},
	},

	watch: {
		open (val) {
			if (val) {
				this.show()
			} else {
				this.hide()
			}
		},

		disabled (val, oldVal) {
			if (val !== oldVal) {
				if (val) {
					this.hide()
				} else if (this.open) {
					this.show()
				}
			}
		},

		container (val) {
			if (this.isOpen && this.popperInstance) {
				const popoverNode = this.$refs.popover
				const reference = this.$refs.trigger

				const container = this.$_findContainer(this.container, reference)
				if (!container) {
					console.warn('No container for popover', this)
					return
				}

				container.appendChild(popoverNode)
				this.popperInstance.update()
			}
		},

		trigger (val) {
			this.$_removeEventListeners()
			this.$_addEventListeners()
		},

		offset (val) {
			this.$_updatePopper(() => {
				if (val) {
					const offset = this.$_getOffset()

					this.popperInstance.options.modifiers.offset = {
						offset,
					}
				} else {
					this.popperInstance.options.modifiers.offset = undefined
				}
			})
		},

		placement (val) {
			this.$_updatePopper(() => {
				this.popperInstance.options.placement = val
			})
		},

		boundariesElement: '$_restartPopper',

		popperOptions: {
			handler: '$_restartPopper',
			deep: true,
		},
	},

	created () {
		this.$_isDisposed = false
		this.$_mounted = false
		this.$_events = []
		this.$_preventOpen = false
	},

	mounted () {
		const popoverNode = this.$refs.popover
		popoverNode.parentNode && popoverNode.parentNode.removeChild(popoverNode)

		this.$_init()

		if (this.open) {
			this.show()
		}
	},

	beforeDestroy () {
		this.dispose()
	},

	methods: {
		show ({ event, skipDelay = false, force = false } = {}) {
			if (force || !this.disabled) {
				this.$_scheduleShow(event)
				this.$emit('show')
			}
			this.$emit('update:open', true)
		},

		hide ({ event, skipDelay = false } = {}) {
			this.$_scheduleHide(event)

			this.$emit('hide')
			this.$emit('update:open', false)
		},

		dispose () {
			this.$_isDisposed = true
			this.$_removeEventListeners()
			this.hide({ skipDelay: true })
			if (this.popperInstance) {
				this.popperInstance.destroy()

				// destroy tooltipNode if removeOnDestroy is not set, as popperInstance.destroy() already removes the element
				if (!this.popperInstance.options.removeOnDestroy) {
					const popoverNode = this.$refs.popover
					popoverNode.parentNode && popoverNode.parentNode.removeChild(popoverNode)
				}
			}
			this.$_mounted = false

			this.$emit('dispose')
		},

		$_init () {
			if (this.trigger.indexOf('manual') === -1) {
				this.$_addEventListeners()
			}
		},

		$_show () {
			const reference = this.$refs.trigger
			const popoverNode = this.$refs.popover

			clearTimeout(this.$_disposeTimer)

			// Already open
			if (this.isOpen) {
				return
			}

			// Popper is already initialized
			if (this.popperInstance) {
				this.isOpen = true
				this.popperInstance.enableEventListeners()
				this.popperInstance.update()
			}

			if (!this.$_mounted) {
				const container = this.$_findContainer(this.container, reference)
				if (!container) {
					console.warn('No container for popover', this)
					return
				}
				container.appendChild(popoverNode)
				this.$_mounted = true
			}

			if (!this.popperInstance) {
				const popperOptions = {
					...this.popperOptions,
					placement: this.placement,
				}

				popperOptions.modifiers = {
					...popperOptions.modifiers,
					arrow: {
						element: this.$refs.arrow,
					},
				}

				if (this.offset) {
					const offset = this.$_getOffset()

					popperOptions.modifiers.offset = {
						offset,
					}
				}

				if (this.boundariesElement) {
					popperOptions.modifiers.preventOverflow = {
						boundariesElement: this.boundariesElement,
					}
				}

				this.popperInstance = new Popper(reference, popoverNode, popperOptions)

				// Fix position
				requestAnimationFrame(() => {
					if (!this.$_isDisposed && this.popperInstance) {
						this.popperInstance.update()

						// Show the tooltip
						requestAnimationFrame(() => {
							if (!this.$_isDisposed) {
								this.isOpen = true
							} else {
								this.dispose()
							}
						})
					} else {
						this.dispose()
					}
				})
			}

			const openGroup = this.openGroup
			if (openGroup) {
				let popover
				for (let i = 0; i < openPopovers.length; i++) {
					popover = openPopovers[i]
					if (popover.openGroup !== openGroup) {
						popover.hide()
						popover.$emit('close-group')
					}
				}
			}

			openPopovers.push(this)
		},

		$_hide () {
			// Already hidden
			if (!this.isOpen) {
				return
			}

			const index = openPopovers.indexOf(this)
			if (index !== -1) {
				openPopovers.splice(index, 1)
			}

			this.isOpen = false
			if (this.popperInstance) {
				this.popperInstance.disableEventListeners()
			}

			clearTimeout(this.$_disposeTimer)
			const disposeTime = directive.options.popover.disposeTimeout || directive.options.disposeTimeout
			if (disposeTime !== null) {
				this.$_disposeTimer = setTimeout(() => {
					const popoverNode = this.$refs.popover
					if (popoverNode) {
						// Don't remove popper instance, just the HTML element
						popoverNode.parentNode && popoverNode.parentNode.removeChild(popoverNode)
						this.$_mounted = false
					}
				}, disposeTime)
			}
		},

		$_findContainer (container, reference) {
			// if container is a query, get the relative element
			if (typeof container === 'string') {
				container = window.document.querySelector(container)
			} else if (container === false) {
				// if container is `false`, set it to reference parent
				container = reference.parentNode
			}
			return container
		},

		$_getOffset () {
			const typeofOffset = typeof this.offset
			let offset = this.offset

			// One value -> switch
			if (typeofOffset === 'number' || (typeofOffset === 'string' && offset.indexOf(',') === -1)) {
				offset = `0, ${offset}`
			}

			return offset
		},

		$_addEventListeners () {
			const reference = this.$refs.trigger
			const directEvents = []
			const oppositeEvents = []

			const events = typeof this.trigger === 'string'
				? this.trigger
					.split(' ')
					.filter(
						trigger => ['click', 'hover', 'focus'].indexOf(trigger) !== -1
					)
				: []

			events.forEach(event => {
				switch (event) {
				case 'hover':
					directEvents.push('mouseenter')
					oppositeEvents.push('mouseleave')
					break
				case 'focus':
					directEvents.push('focus')
					oppositeEvents.push('blur')
					break
				case 'click':
					directEvents.push('click')
					oppositeEvents.push('click')
					break
				}
			})

			// schedule show tooltip
			directEvents.forEach(event => {
				const func = event => {
					if (this.isOpen) {
						return
					}
					event.usedByTooltip = true
					!this.$_preventOpen && this.show({ event: event })
				}
				this.$_events.push({ event, func })
				reference.addEventListener(event, func)
			})

			// schedule hide tooltip
			oppositeEvents.forEach(event => {
				const func = event => {
					if (event.usedByTooltip) {
						return
					}
					this.hide({ event: event })
				}
				this.$_events.push({ event, func })
				reference.addEventListener(event, func)
			})
		},

		$_scheduleShow (event = null, skipDelay = false) {
			clearTimeout(this.$_scheduleTimer)
			if (skipDelay) {
				this.$_show()
			} else {
				// defaults to 0
				const computedDelay = parseInt((this.delay && this.delay.show) || this.delay || 0)
				this.$_scheduleTimer = setTimeout(this.$_show.bind(this), computedDelay)
			}
		},

		$_scheduleHide (event = null, skipDelay = false) {
			clearTimeout(this.$_scheduleTimer)
			if (skipDelay) {
				this.$_hide()
			} else {
				// defaults to 0
				const computedDelay = parseInt((this.delay && this.delay.hide) || this.delay || 0)
				this.$_scheduleTimer = setTimeout(() => {
					if (!this.isOpen) {
						return
					}

					// if we are hiding because of a mouseleave, we must check that the new
					// reference isn't the tooltip, because in this case we don't want to hide it
					if (event && event.type === 'mouseleave') {
						const isSet = this.$_setTooltipNodeEvent(event)

						// if we set the new event, don't hide the tooltip yet
						// the new event will take care to hide it if necessary
						if (isSet) {
							return
						}
					}

					this.$_hide()
				}, computedDelay)
			}
		},

		$_setTooltipNodeEvent (event) {
			const reference = this.$refs.trigger
			const popoverNode = this.$refs.popover

			const relatedreference = event.relatedreference || event.toElement

			const callback = event2 => {
				const relatedreference2 = event2.relatedreference || event2.toElement

				// Remove event listener after call
				popoverNode.removeEventListener(event.type, callback)

				// If the new reference is not the reference element
				if (!reference.contains(relatedreference2)) {
					// Schedule to hide tooltip
					this.hide({ event: event2 })
				}
			}

			if (popoverNode.contains(relatedreference)) {
				// listen to mouseleave on the tooltip element to be able to hide the tooltip
				popoverNode.addEventListener(event.type, callback)
				return true
			}

			return false
		},

		$_removeEventListeners () {
			const reference = this.$refs.trigger
			this.$_events.forEach(({ func, event }) => {
				reference.removeEventListener(event, func)
			})
			this.$_events = []
		},

		$_updatePopper (cb) {
			if (this.isOpen && this.popperInstance) {
				cb()
				this.popperInstance.update()
			}
		},

		$_restartPopper () {
			if (this.popperInstance) {
				const isOpen = this.isOpen
				this.dispose()
				this.$_init()
				if (isOpen) {
					this.show()
				}
			}
		},

		$_handleGlobalClose (event, touch = false) {
			this.hide({ event: event })

			if (event.closePopover) {
				this.$emit('close-directive')
			} else {
				this.$emit('auto-hide')
			}

			if (touch) {
				this.$_preventOpen = true
				setTimeout(() => {
					this.$_preventOpen = false
				}, 300)
			}
		},

		$_handleResize () {
			if (this.isOpen && this.popperInstance) {
				this.popperInstance.update()
				this.$emit('resize')
			}
		},
	},
}

if (typeof document !== 'undefined' && typeof window !== 'undefined') {
	if (isIOS) {
		document.addEventListener('touchend', handleGlobalTouchend, supportsPassive ? {
			passive: true,
		} : false)
	} else {
		window.addEventListener('click', handleGlobalClick)
	}
}

function handleGlobalClick (event) {
	handleGlobalClose(event)
}

function handleGlobalTouchend (event) {
	handleGlobalClose(event, true)
}

function handleGlobalClose (event, touch = false) {
	let popover
	for (let i = 0; i < openPopovers.length; i++) {
		popover = openPopovers[i]
		const contains = popover.$refs.popover.contains(event.target)
		if (event.closeAllPopover || (event.closePopover && contains) || (popover.autoHide && !contains)) {
			popover.$_handleGlobalClose(event, touch)
		}
	}
}
</script>
