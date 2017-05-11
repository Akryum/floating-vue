import Tooltip from 'tooltip.js'

import { addClasses, removeClasses, replaceClasses } from './utils'

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
  defaultPlacement: 'top',
  defaultClass: 'vue-tooltip-theme',
  defaultTemplate: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  defaultDelay: 0,
  defaultTrigger: 'hover focus',
  defaultOffset: 0,
  defaultContainer: 'body',
}

function getOptions (options) {
  return {
    placement: options.placement || directive.options.defaultPlacement,
    delay: options.delay || directive.options.defaultDelay,
    template: options.template || directive.options.defaultTemplate,
    trigger: options.trigger || directive.options.defaultTrigger,
    offset: options.offset || directive.options.defaultOffset,
    container: options.container || directive.options.defaultContainer,
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

  _dispose () {
    this._events.forEach(({ func, event }) => {
      this.reference.removeEventListener(event, func)
    })
    this._events = []
    super._dispose()
  }

  _show (...args) {
    super._show(...args)

    if (this._pendingClasses) {
      this.setClasses(this._pendingClasses)
      this._pendingClasses = null
    }

    // Fix position
    setTimeout(() => {
      this.popperInstance.update()
    }, 0)
  }
}

function createTooltip (el, value, modifiers) {
  const content = value.content || value
  let classes = value.classes || directive.options.defaultClass

  const tooltip = el._tooltip = new SuperTooltip(el, {
    title: content,
    html: true,
    ...getOptions({
      ...value,
      placement: getPlacement(value, modifiers),
    }),
  })
  tooltip.setClasses(classes)
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
    const content = value && value.content || value
    destroyTooltip(el)
    if (content) {
      createTooltip(el, value, modifiers)
    }
  },
  update (el, { value, oldValue, modifiers }) {
    const content = value && value.content || value
    if (!content) {
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
