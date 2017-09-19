import Tooltip from 'tooltip.js'

import { addClasses, removeClasses, replaceClasses } from './utils'

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
  return {
    placement: options.placement || directive.options.defaultPlacement,
    delay: options.delay || directive.options.defaultDelay,
    template: options.template || directive.options.defaultTemplate,
    trigger: options.trigger || directive.options.defaultTrigger,
    offset: options.offset || directive.options.defaultOffset,
    container: options.container || directive.options.defaultContainer,
    boundariesElement: options.boundariesElement || directive.options.defaultBoundariesElement,
    popperOptions: options.popperOptions || directive.options.defaultPopperOptions,
  }
}

function getPlacement (value, modifiers) {
  let placement = value.placement
  for (const pos of positions) {
    if (modifiers[pos]) {
      placement = pos
    }
  }
  return placement
}

class SuperTooltip extends Tooltip {
  setClasses (classes) {
    const el = this._tooltipNode

    if (el) {
      const oldClasses = this._oldClasses
      if (classes) {
        if (oldClasses) {
          replaceClasses(el, classes, oldClasses)
        } else {
          addClasses(el, classes)
        }
      } else if (oldClasses) {
        removeClasses(el, oldClasses)
      }
      this._oldClasses = classes
    } else {
      this._pendingClasses = classes
    }

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
      this.options.container !== options.container
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

        this.setClasses(this._classes)

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

  _show (reference, options) {
    if (options && typeof options.container === 'string') {
      const container = document.querySelector(options.container)
      if (!container) return
    }

    const result = super._show(reference, options)

    if (this._pendingClasses) {
      this.setClasses(this._pendingClasses)
      this._pendingClasses = null
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
    }, defaultOptions.disposeTimeout)

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
      // CSS Classes
      tooltip.setClasses((value && value.classes) || directive.options.defaultClass)
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
