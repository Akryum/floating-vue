<script>
import Popper from 'popper.js'
import { supportsPassive } from '../util/support'
import { getDefaultConfig } from '../config'

const SHOW_EVENT_MAP = {
  hover: 'mouseenter',
  focus: 'focus',
  click: 'click',
  touch: 'touchstart',
}

const HIDE_EVENT_MAP = {
  hover: 'mouseleave',
  focus: 'blur',
  click: 'click',
  touch: 'touchend',
}

const EVENTS = Object.keys(SHOW_EVENT_MAP)

let isIOS = false
if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
  isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
}

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

    targetNode: {
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
      validator: value => Popper.placements.includes(value),
    },

    delay: {
      type: [String, Number, Object],
      default () {
        return getDefaultConfig(this.theme, 'delay')
      },
    },

    offset: {
      type: [String, Number],
      default () {
        return getDefaultConfig(this.theme, 'offset')
      },
    },

    trigger: {
      type: [String, Array],
      default () {
        return getDefaultConfig(this.theme, 'trigger')
      },
    },

    triggerShow: {
      type: [String, Array, Function],
      default () {
        return getDefaultConfig(this.theme, 'triggerShow')
      },
    },

    triggerHide: {
      type: [String, Array, Function],
      default () {
        return getDefaultConfig(this.theme, 'triggerHide')
      },
    },

    container: {
      type: [String, Object, Element, Boolean],
      default () {
        return getDefaultConfig(this.theme, 'container')
      },
    },

    boundariesElement: {
      type: [String, Element],
      default () {
        return getDefaultConfig(this.theme, 'boundariesElement')
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

    openGroup: {
      type: String,
      default: null,
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

    container (val) {
      if (this.isOpen && this.popperInstance) {
        const container = this.$_findContainer(this.container, this.$_targetNode)
        if (!container) {
          console.warn('No container for popover', this)
          return
        }

        container.appendChild(this.$_popperNode)
        this.popperInstance.scheduleUpdate()
      }
    },

    trigger (val) {
      this.$_removeEventListeners()
      this.$_addEventListeners()
    },

    placement (val) {
      this.$_updatePopper(() => {
        this.popperInstance.options.placement = val
      })
    },

    offset: '$_restartPopper',

    boundariesElement: '$_restartPopper',

    popperOptions: {
      handler: '$_restartPopper',
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
      }
      this.$emit('update:open', true)
      this.$_beingShowed = true
      requestAnimationFrame(() => {
        this.$_beingShowed = false
      })
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
      this.$_preventOpen = false

      // Nodes
      this.$_targetNode = this.targetNode()
      this.$_popperNode = this.popperNode()

      swapAttrs(this.$_targetNode, 'title', 'data-original-title')

      this.$_detachPopperNode()
      this.$_init()

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

        // destroy tooltipNode if removeOnDestroy is not set, as popperInstance.destroy() already removes the element
        if (!this.popperInstance.options.removeOnDestroy) {
          this.$_detachPopperNode()
        }
      }

      this.isMounted = false
      this.popperInstance = null
      this.isOpen = false

      swapAttrs(this.$_targetNode, 'data-original-title', 'title')

      this.$emit('dispose')
    },

    onResize () {
      if (this.isOpen && this.popperInstance) {
        this.popperInstance.scheduleUpdate()
        this.$emit('resize')
      }
    },

    $_init () {
      if (this.trigger.indexOf('manual') === -1) {
        this.$_addEventListeners()
      }
    },

    $_autoShowHide () {
      if (this.open) {
        this.show()
      } else {
        this.hide()
      }
    },

    $_show (skipTransition = false) {
      clearTimeout(this.$_disposeTimer)
      clearTimeout(this.$_scheduleTimer)
      this.skipTransition = skipTransition

      // Already open
      if (this.isOpen) {
        return
      }

      // Popper is already initialized
      if (this.popperInstance) {
        this.isOpen = true
        this.popperInstance.enableEventListeners()
        this.popperInstance.scheduleUpdate()
      }

      if (!this.isMounted) {
        const container = this.$_findContainer(this.container, this.$_targetNode)
        if (!container) {
          console.warn('No container for popover', this)
          return
        }
        container.appendChild(this.$_popperNode)
        this.isMounted = true
      }

      if (!this.popperInstance) {
        const popperOptions = {
          ...this.popperOptions,
          placement: this.placement,
        }

        popperOptions.modifiers = {
          ...popperOptions.modifiers,
          arrow: {
            ...popperOptions.modifiers && popperOptions.modifiers.arrow,
            element: (this.arrowNode && this.arrowNode()) || '[x-arrow]',
          },
        }

        if (this.offset) {
          const offset = this.$_getOffset()

          popperOptions.modifiers.offset = {
            ...popperOptions.modifiers && popperOptions.modifiers.offset,
            offset,
          }
        }

        if (this.boundariesElement) {
          popperOptions.modifiers.preventOverflow = {
            ...popperOptions.modifiers && popperOptions.modifiers.preventOverflow,
            boundariesElement: this.boundariesElement,
          }
        }

        this.popperInstance = new Popper(this.$_targetNode, this.$_popperNode, popperOptions)

        // Fix position
        requestAnimationFrame(() => {
          if (this.hidden) {
            this.hidden = false
            this.$_hide()
            return
          }

          if (!this.$_isDisposed && this.popperInstance) {
            this.popperInstance.scheduleUpdate()

            // Show the tooltip
            requestAnimationFrame(() => {
              if (this.hidden) {
                this.hidden = false
                this.$_hide()
                return
              }

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
    },

    $_hide (skipTransition = false) {
      clearTimeout(this.$_scheduleTimer)
      this.skipTransition = skipTransition
      removeFromArray(openPoppers, this)

      // Already hidden
      if (!this.isOpen) {
        return
      }

      if (hidingPopper === this) {
        hidingPopper = null
      }

      this.isOpen = false
      if (this.popperInstance) {
        this.popperInstance.disableEventListeners()
      }

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
      const bothEvents = getEvents(this.trigger)

      const addEvents = (customTrigger, eventMap, handler) => {
        let events = bothEvents
        if (customTrigger != null) {
          events = getEvents(typeof customTrigger === 'function' ? customTrigger(events) : customTrigger)
        }

        events.forEach(value => {
          const event = eventMap[value]
          this.$_events.push({ event, handler })
          this.$_targetNode.addEventListener(event, handler)
        })
      }

      // Add trigger show events
      addEvents(
        this.triggerShow,
        SHOW_EVENT_MAP,
        // Handle show
        event => {
          if (this.isOpen) {
            return
          }
          event.usedByTooltip = true
          !this.$_preventOpen && this.show({ event })
          this.hidden = false
        }
      )

      // Add trigger hide events
      addEvents(
        this.triggerHide,
        HIDE_EVENT_MAP,
        // Handle hide
        event => {
          if (event.usedByTooltip) {
            return
          }
          this.hide({ event })
          this.hidden = true
        }
      )
    },

    $_removeEventListeners () {
      this.$_events.forEach(({ event, handler }) => {
        this.$_targetNode.removeEventListener(event, handler)
      })
      this.$_events = []
    },

    $_computeDelay (type) {
      const delay = this.delay
      return parseInt((delay && delay[type]) || delay || 0)
    },

    $_scheduleShow (event = null, skipDelay = false) {
      clearTimeout(this.$_scheduleTimer)

      if (hidingPopper && this.instantMove && hidingPopper.instantMove) {
        hidingPopper.$_hide(true)
        this.$_show(true)
        return
      }

      if (skipDelay) {
        this.$_show()
      } else {
        this.$_scheduleTimer = setTimeout(this.$_show.bind(this), this.$_computeDelay('show'))
      }
    },

    $_scheduleHide (event = null, skipDelay = false) {
      clearTimeout(this.$_scheduleTimer)
      if (this.isOpen) {
        hidingPopper = this
      }
      if (skipDelay) {
        this.$_hide()
      } else {
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
        }, this.$_computeDelay('hide'))
      }
    },

    $_setTooltipNodeEvent (event) {
      const relatedreference = event.relatedreference || event.toElement || event.relatedTarget

      const callback = event2 => {
        const relatedreference2 = event2.relatedreference || event2.toElement || event2.relatedTarget

        // Remove event listener after call
        this.$_popperNode.removeEventListener(event.type, callback)

        // If the new reference is not the reference element
        if (!this.$_targetNode.contains(relatedreference2)) {
          // Schedule to hide tooltip
          this.hide({ event: event2 })
        }
      }

      if (this.$_popperNode.contains(relatedreference)) {
        // listen to mouseleave on the tooltip element to be able to hide the tooltip
        this.$_popperNode.addEventListener(event.type, callback)
        return true
      }

      return false
    },

    $_updatePopper (cb) {
      if (this.popperInstance) {
        cb()
        if (this.isOpen) this.popperInstance.scheduleUpdate()
      }
    },

    $_restartPopper () {
      if (this.popperInstance) {
        const isOpen = this.isOpen
        this.dispose()
        this.$_isDisposed = false
        this.$_init()
        if (isOpen) {
          this.show({ skipDelay: true, force: true })
        }
      }
    },

    $_handleGlobalClose (event, touch = false) {
      if (this.$_beingShowed) return

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

    $_detachPopperNode () {
      this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode)
    },
  },

  render (h) {
    return this.$scopedSlots.default(this)[0]
  },
}

if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  if (isIOS) {
    document.addEventListener('touchend', handleGlobalTouchend, supportsPassive ? {
      passive: true,
      capture: true,
    } : true)
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
    let popper = openPoppers[i]
    const popperContent = popper.popperNode()
    const contains = popperContent.contains(event.target)
    requestAnimationFrame(() => {
      if (event.closeAllPopover || (event.closePopover && contains) || (popper.autoHide && !contains)) {
        popper.$_handleGlobalClose(event, touch)
      }
    })
  }
}

function swapAttrs (node, attrFrom, attrTo) {
  const value = node.getAttribute(attrFrom)
  if (value) {
    node.removeAttribute(attrFrom)
    node.setAttribute(attrTo, value)
  }
}

function getEvents (rawEvents) {
  let events = typeof rawEvents === 'string' ? rawEvents.split(/\s+/g) : rawEvents
  events = events.filter(trigger => EVENTS.indexOf(trigger) !== -1)
  return events
}

function removeFromArray (array, item) {
  const index = array.indexOf(item)
  if (index !== -1) {
    array.splice(index, 1)
  }
}
</script>
