<script>
import { createPopper, placements } from '@popperjs/core'
import { supportsPassive, isIOS } from '../util/env'
import { applyModifier } from '../util/popper'
import {
  SHOW_EVENT_MAP,
  HIDE_EVENT_MAP,
} from '../util/events'
import { removeFromArray } from '../util/lang'
import { getDefaultConfig } from '../config'

const openPoppers = []
let hidingPopper = null

let Element = function () {}
if (typeof window !== 'undefined') {
  Element = window.Element
}

export default {
  name: 'VPopper',

  props: {
    theme: {
      type: String,
      required: true,
    },

    targetNodes: {
      type: Function,
      required: true,
    },

    referenceNode: {
      type: Function,
      required: true,
    },

    popperNode: {
      type: Function,
      required: true,
    },

    arrowNode: {
      type: Function,
      default: null,
    },

    open: {
      type: Boolean,
      default: false,
    },

    openGroup: {
      type: String,
      default: null,
    },

    disabled: {
      type: Boolean,
      default () {
        return getDefaultConfig(this.theme, 'disabled')
      },
    },

    placement: {
      type: String,
      default () {
        return getDefaultConfig(this.theme, 'placement')
      },
      validator: value => placements.includes(value),
    },

    delay: {
      type: [String, Number, Object],
      default () {
        return getDefaultConfig(this.theme, 'delay')
      },
    },

    offset: {
      type: [Array, Function],
      default () {
        return getDefaultConfig(this.theme, 'offset')
      },
    },

    triggers: {
      type: Array,
      default () {
        return getDefaultConfig(this.theme, 'triggers')
      },
    },

    showTriggers: {
      type: [Array, Function],
      default () {
        return getDefaultConfig(this.theme, 'showTriggers')
      },
    },

    hideTriggers: {
      type: [Array, Function],
      default () {
        return getDefaultConfig(this.theme, 'hideTriggers')
      },
    },

    container: {
      type: [String, Object, Element, Boolean],
      default () {
        return getDefaultConfig(this.theme, 'container')
      },
    },

    boundary: {
      type: [String, Element],
      default () {
        return getDefaultConfig(this.theme, 'boundary')
      },
    },

    strategy: {
      type: String,
      validator: value => ['absolute', 'fixed'].includes(value),
      default () {
        return getDefaultConfig(this.theme, 'strategy')
      },
    },

    modifiers: {
      type: Array,
      default () {
        return getDefaultConfig(this.theme, 'modifiers')
      },
    },

    popperOptions: {
      type: Object,
      default () {
        return getDefaultConfig(this.theme, 'popperOptions')
      },
    },

    autoHide: {
      type: Boolean,
      default () {
        return getDefaultConfig(this.theme, 'autoHide')
      },
    },

    handleResize: {
      type: Boolean,
      default () {
        return getDefaultConfig(this.theme, 'handleResize')
      },
    },

    instantMove: {
      type: Boolean,
      default () {
        return getDefaultConfig(this.theme, 'instantMove')
      },
    },
  },

  data () {
    return {
      isOpen: false,
      isMounted: false,
      skipTransition: false,
    }
  },

  watch: {
    open: '$_autoShowHide',

    disabled (value) {
      if (value) {
        this.dispose()
      } else {
        this.init()
      }
    },

    container () {
      if (this.isOpen && this.popperInstance) {
        this.$_ensureContainer()
        this.popperInstance.update()
      }
    },

    triggers () {
      this.$_removeEventListeners()
      this.$_addEventListeners()
    },

    placement: '$_refreshPopperOptions',
    offset: '$_refreshPopperOptions',
    boundary: '$_refreshPopperOptions',
    strategy: '$_refreshPopperOptions',
    modifiers: '$_refreshPopperOptions',
    popperOptions: {
      handler: '$_refreshPopperOptions',
      deep: true,
    },
  },

  created () {
    this.popperId = `popper_${Math.random().toString(36).substr(2, 10)}`
  },

  mounted () {
    this.init()
  },

  activated () {
    this.$_autoShowHide()
  },

  deactivated () {
    this.hide()
  },

  beforeDestroy () {
    this.dispose()
  },

  methods: {
    show ({ event, skipDelay = false, force = false } = {}) {
      if (force || !this.disabled) {
        this.$_scheduleShow(event, skipDelay)
        this.$emit('show')

        // Prevent hiding with global handler
        this.$_showFrameLocked = true
        requestAnimationFrame(() => {
          this.$_showFrameLocked = false
        })
      }
      this.$emit('update:open', true)
    },

    hide ({ event, skipDelay = false } = {}) {
      this.$_scheduleHide(event, skipDelay)

      this.$emit('hide')
      this.$emit('update:open', false)
    },

    init () {
      this.$_isDisposed = false
      this.isMounted = false
      this.$_events = []
      this.$_preventShow = false

      // Nodes
      this.$_targetNodes = this.targetNodes()
      this.$_popperNode = this.popperNode()

      this.$_swapTargetAttrs('title', 'data-original-title')

      this.$_detachPopperNode()

      if (this.triggers.length) {
        this.$_addEventListeners()
      }

      if (this.open) {
        this.show()
      }
    },

    dispose () {
      this.$_isDisposed = true
      this.$_removeEventListeners()
      this.hide({ skipDelay: true })

      if (this.popperInstance) {
        this.popperInstance.destroy()
        this.$_detachPopperNode()
      }

      this.isMounted = false
      this.popperInstance = null
      this.isOpen = false

      this.$_swapTargetAttrs('data-original-title', 'title')

      this.$emit('dispose')
    },

    onResize () {
      if (this.isOpen && this.popperInstance) {
        this.popperInstance.update()
        this.$emit('resize')
      }
    },

    $_getPopperOptions () {
      const popperOptions = {
        ...this.popperOptions,
        placement: this.placement,
        strategy: this.strategy,
        modifiers: this.modifiers,
      }

      if (!popperOptions.modifiers) {
        popperOptions.modifiers = []
      }

      applyModifier(popperOptions.modifiers, 'arrow', {
        element: (this.arrowNode && this.arrowNode()) || '[data-popper-arrow]',
      })

      if (this.offset) {
        applyModifier(popperOptions.modifiers, 'offset', {
          offset: this.offset,
        })
      }

      if (this.boundary) {
        applyModifier(popperOptions.modifiers, 'preventOverflow', {
          boundary: this.boundary,
        })
      }

      if (!this.isOpen) {
        // Disable event listeners
        applyModifier(popperOptions.modifiers, 'eventListeners', {
          enabled: false,
        })
      }

      return popperOptions
    },

    $_refreshPopperOptions () {
      if (this.popperInstance) {
        this.popperInstance.setOptions(this.$_getPopperOptions())
      }
    },

    $_scheduleShow (event = null, skipDelay = false) {
      this.$_hideInProgress = false
      clearTimeout(this.$_scheduleTimer)

      if (hidingPopper && this.instantMove && hidingPopper.instantMove) {
        hidingPopper.$_applyHide(true)
        this.$_applyShow(true)
        return
      }

      if (skipDelay) {
        this.$_applyShow()
      } else {
        this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay('show'))
      }
    },

    $_scheduleHide (event = null, skipDelay = false) {
      this.$_hideInProgress = true
      clearTimeout(this.$_scheduleTimer)

      if (this.isOpen) {
        hidingPopper = this
      }

      if (skipDelay) {
        this.$_applyHide()
      } else {
        this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay('hide'))
      }
    },

    $_computeDelay (type) {
      const delay = this.delay
      return parseInt((delay && delay[type]) || delay || 0)
    },

    $_applyShow (skipTransition = false) {
      clearTimeout(this.$_disposeTimer)
      clearTimeout(this.$_scheduleTimer)
      this.skipTransition = skipTransition

      // Already open
      if (this.isOpen) {
        return
      }

      if (!this.isMounted) {
        this.$_ensureContainer()
        this.isMounted = true
      }

      if (!this.popperInstance) {
        this.popperInstance = createPopper(this.referenceNode(), this.$_popperNode, this.$_getPopperOptions())
      } else {
        this.popperInstance.update()
      }

      // Allow fade-in animations
      this.isOpen = false
      requestAnimationFrame(() => {
        if (this.$_hideInProgress) return

        this.isOpen = true

        // Enable event listeners
        this.$_refreshPopperOptions()

        this.$_applyAttrsToTarget({
          'aria-describedby': this.popperId,
        })

        const openGroup = this.openGroup
        if (openGroup) {
          let popover
          for (let i = 0; i < openPoppers.length; i++) {
            popover = openPoppers[i]
            if (popover.openGroup !== openGroup) {
              popover.hide()
              popover.$emit('close-group')
            }
          }
        }

        openPoppers.push(this)

        this.$emit('apply-show')
      })
    },

    $_applyHide (skipTransition = false) {
      clearTimeout(this.$_scheduleTimer)

      // Already hidden
      if (!this.isOpen) {
        return
      }

      this.skipTransition = skipTransition
      removeFromArray(openPoppers, this)

      if (hidingPopper === this) {
        hidingPopper = null
      }

      this.isOpen = false

      if (this.popperInstance) {
        // Disable event listeners
        this.$_refreshPopperOptions()
      }

      this.$_applyAttrsToTarget({
        'aria-describedby': undefined,
      })

      clearTimeout(this.$_disposeTimer)
      const disposeTime = getDefaultConfig(this.theme, 'disposeTimeout')
      if (disposeTime !== null) {
        this.$_disposeTimer = setTimeout(() => {
          if (this.$_popperNode) {
            // Don't remove popper instance, just the HTML element
            this.$_detachPopperNode()
            this.isMounted = false
          }
        }, disposeTime)
      }

      this.$emit('apply-hide')
    },

    $_autoShowHide () {
      if (this.open) {
        this.show()
      } else {
        this.hide()
      }
    },

    $_ensureContainer () {
      let container = this.container
      // if container is a query, get the relative element
      if (typeof container === 'string') {
        container = window.document.querySelector(container)
      } else if (container === false) {
        // if container is `false`, set it to reference parent
        container = this.$_targetNodes[0].parentNode
      }

      if (!container) {
        throw new Error('No container for popover: ' + this.container)
      }

      container.appendChild(this.$_popperNode)
    },

    $_addEventListeners () {
      const commonTriggers = this.triggers

      const addEvents = (eventMap, customTrigger, handler) => {
        let triggers = commonTriggers

        if (customTrigger != null) {
          triggers = typeof customTrigger === 'function' ? customTrigger(triggers) : customTrigger
        }

        triggers.forEach(trigger => {
          const eventType = eventMap[trigger]
          if (eventType) {
            this.$_events.push({ eventType, handler })
            this.$_targetNodes.forEach(node => node.addEventListener(eventType, handler))
          }
        })
      }

      // Add trigger show events
      addEvents(
        SHOW_EVENT_MAP,
        this.showTriggers,
        // Handle show
        event => {
          if (this.isOpen) {
            return
          }
          event.usedByTooltip = true
          // Prevent open on mobile touch in global close
          !this.$_preventShow && this.show({ event })
        },
      )

      // Add trigger hide events
      addEvents(
        HIDE_EVENT_MAP,
        this.hideTriggers,
        // Handle hide
        event => {
          if (event.usedByTooltip) {
            return
          }
          this.hide({ event })
        },
      )
    },

    $_removeEventListeners () {
      this.$_events.forEach(({ eventType, handler }) => {
        this.$_targetNodes.forEach(node => node.removeEventListener(eventType, handler))
      })
      this.$_events = []
    },

    $_handleGlobalClose (event, touch = false) {
      if (this.$_showFrameLocked) return

      this.hide({ event: event })

      if (event.closePopover) {
        this.$emit('close-directive')
      } else {
        this.$emit('auto-hide')
      }

      if (touch) {
        this.$_preventShow = true
        setTimeout(() => {
          this.$_preventShow = false
        }, 300)
      }
    },

    $_detachPopperNode () {
      this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode)
    },

    $_swapTargetAttrs (attrFrom, attrTo) {
      for (const el of this.$_targetNodes) {
        const value = el.getAttribute(attrFrom)
        if (value) {
          el.removeAttribute(attrFrom)
          el.setAttribute(attrTo, value)
        }
      }
    },

    $_applyAttrsToTarget (attrs) {
      for (const el of this.$_targetNodes) {
        for (const n in attrs) {
          const value = attrs[n]
          if (value == null) {
            el.removeAttribute(n)
          } else {
            el.setAttribute(n, value)
          }
        }
      }
    },
  },

  render (h) {
    return this.$scopedSlots.default(this)[0]
  },
}

if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  if (isIOS) {
    document.addEventListener('touchend', handleGlobalTouchend, supportsPassive
      ? {
          passive: true,
          capture: true,
        }
      : true)
  } else {
    window.addEventListener('click', handleGlobalClick, true)
  }
}

function handleGlobalClick (event) {
  handleGlobalClose(event)
}

function handleGlobalTouchend (event) {
  handleGlobalClose(event, true)
}

function handleGlobalClose (event, touch = false) {
  // Delay so that close directive has time to set values
  for (let i = 0; i < openPoppers.length; i++) {
    const popper = openPoppers[i]
    const popperContent = popper.popperNode()
    const contains = popperContent.contains(event.target)
    requestAnimationFrame(() => {
      if (event.closeAllPopover || (event.closePopover && contains) || (popper.autoHide && !contains)) {
        popper.$_handleGlobalClose(event, touch)
      }
    })
  }
}
</script>
