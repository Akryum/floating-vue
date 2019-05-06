import Vue from 'vue'
import Popper from 'popper.js'
import TooltipDirective from '../components/TooltipDirective.vue'
import { getDefaultConfig } from '../config'

const TARGET_CLASS = `v-popper--has-tooltip`

/**
 * Support placement as directive modifier
 */
export function getPlacement (options, modifiers) {
  var result = options.placement
  if (!result && modifiers) {
    for (const pos of Popper.placements) {
      if (modifiers[pos]) {
        result = pos
      }
    }
  }
  if (!result) {
    result = getDefaultConfig(options.theme || 'tooltip', 'placement')
  }
  return result
}

export function getOptions (el, value, modifiers) {
  let options
  const type = typeof value
  if (type === 'string') {
    options = { content: value }
  } else if (value && type === 'object') {
    options = value
  } else {
    options = { content: false }
  }
  options.placement = getPlacement(options, modifiers)
  options.targetNode = () => el
  return options
}

export function createTooltip (el, value, modifiers) {
  const options = getOptions(el, value, modifiers)

  const tooltipApp = el.$_popper = new Vue({
    data: {
      options,
    },
    render (h) {
      const options = this.options
      return h(TooltipDirective, {
        attrs: {
          ...options,
          // Delete props from attrs to prevent Vue from
          // mutating `this.options` when removing props
          // from `$attrs` automatically
          theme: undefined,
          contentHtml: undefined,
          content: undefined,
          loadingContent: undefined,
        },
        props: options,
        ref: 'tooltip',
      })
    },
  })
  const mountTarget = document.createElement('div')
  document.body.appendChild(mountTarget)
  tooltipApp.$mount(mountTarget)

  // Class on target
  if (el.classList) {
    el.classList.add(TARGET_CLASS)
  }

  return tooltipApp
}

export function destroyTooltip (el) {
  if (el.$_popper) {
    el.$_popper.$destroy()
    delete el.$_popper
    delete el.$_popperOldOpen
  }

  if (el.classList) {
    el.classList.remove(TARGET_CLASS)
  }
}

export function bind (el, { value, oldValue, modifiers }) {
  const options = getOptions(el, value, modifiers)
  if (!options.content || getDefaultConfig(options.theme || 'tooltip', 'disabled')) {
    destroyTooltip(el)
  } else {
    let tooltipApp
    if (el.$_popper) {
      tooltipApp = el.$_popper
      tooltipApp.options = options
    } else {
      tooltipApp = createTooltip(el, value, modifiers)
    }

    // Manual show
    if (typeof value.open !== 'undefined' && value.open !== el.$_popperOldOpen) {
      el.$_popperOldOpen = value.open
      value.open ? tooltipApp.$refs.tooltip.show() : tooltipApp.$refs.tooltip.hide()
    }
  }
}

export default {
  bind,
  update: bind,
  unbind (el) {
    destroyTooltip(el)
  },
}
