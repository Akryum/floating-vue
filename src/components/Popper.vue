<script>
import Popper from 'popper.js'
import { supportsPassive } from '../util/support'
import { getDefaultConfig } from '../config'
import { placement } from '../const'

let isIOS = false
if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
  isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
}

const openPoppers = []

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

    triggerNode: {
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
      validator: value => placement.includes(value),
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
      type: String,
      default () {
        return getDefaultConfig(this.theme, 'trigger')
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

    hideOnTargetClick: {
      type: Boolean,
      default () {
        return getDefaultConfig(this.theme, 'hideOnTargetClick')
      },
    },

    openGroup: {
      type: String,
      default: null,
    },
  },

  data () {
    return {
      isOpen: false,
    }
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
        const container = this.$_findContainer(this.container, this.$_triggerNode)
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

    this.$_isDisposed = false
    this.$_mounted = false
    this.$_events = []
    this.$_preventOpen = false
  },

  mounted () {
    // Nodes
    this.$_triggerNode = this.triggerNode()
    this.$_popperNode = this.popperNode()

    swapAttrs(this.$_triggerNode, 'title', 'data-original-title')

    this.$_detachPopperNode()
    this.$_init()

    if (this.open) {
      this.show()
    }
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
        this.$_scheduleShow(event)
        this.$emit('show')
      }
      this.$emit('update:open', true)
      this.$_beingShowed = true
      requestAnimationFrame(() => {
        this.$_beingShowed = false
      })
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
          this.$_detachPopperNode()
        }
      }
      this.$_mounted = false
      this.popperInstance = null
      this.isOpen = false

      swapAttrs(this.$_triggerNode, 'data-original-title', 'title')

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

    $_show () {
      clearTimeout(this.$_disposeTimer)

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

      if (!this.$_mounted) {
        const container = this.$_findContainer(this.container, this.$_triggerNode)
        if (!container) {
          console.warn('No container for popover', this)
          return
        }
        container.appendChild(this.$_popperNode)
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

        this.popperInstance = new Popper(this.$_triggerNode, this.$_popperNode, popperOptions)

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

    $_hide () {
      // Already hidden
      if (!this.isOpen) {
        return
      }

      const index = openPoppers.indexOf(this)
      if (index !== -1) {
        openPoppers.splice(index, 1)
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
            this.$_mounted = false
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
          this.hidden = false
        }
        this.$_events.push({ event, func })
        this.$_triggerNode.addEventListener(event, func)
      })

      // schedule hide tooltip
      oppositeEvents.forEach(event => {
        const func = event => {
          if (event.usedByTooltip) {
            return
          }
          this.hide({ event: event })
          this.hidden = true
        }
        this.$_events.push({ event, func })
        this.$_triggerNode.addEventListener(event, func)
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
      const relatedreference = event.relatedreference || event.toElement || event.relatedTarget

      const callback = event2 => {
        const relatedreference2 = event2.relatedreference || event2.toElement || event2.relatedTarget

        // Remove event listener after call
        this.$_popperNode.removeEventListener(event.type, callback)

        // If the new reference is not the reference element
        if (!this.$_triggerNode.contains(relatedreference2)) {
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

    $_removeEventListeners () {
      this.$_events.forEach(({ func, event }) => {
        this.$_triggerNode.removeEventListener(event, func)
      })
      this.$_events = []
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
  if (typeof value !== 'undefined') {
    node.removeAttribute(attrFrom)
    node.setAttribute(attrTo, value)
  }
}
</script>
