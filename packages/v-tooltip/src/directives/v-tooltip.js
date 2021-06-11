import { createApp, h } from 'vue'
import { placements } from '@popperjs/core'
import TooltipDirective from '../components/TooltipDirective.vue'
import { getDefaultConfig } from '../config'

const TARGET_CLASS = 'v-popper--has-tooltip'

/**
 * Support placement as directive modifier
 */
export function getPlacement (options, modifiers) {
  let result = options.placement
  if (!result && modifiers) {
    for (const pos of placements) {
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
  options.targetNodes = () => [el]
  options.referenceNode = () => el
  return options
}

export function createTooltip (el, value, modifiers) {
  const options = getOptions(el, value, modifiers)

  const tooltipApp = el.$_popper = createApp({
    name: 'VTooltipDirective',
    data () {
      return {
        options,
      }
    },
    render () {
      return h(TooltipDirective, {
        ...this.options,
        ref: 'tooltip',
      })
    },
  })
  const mountTarget = document.createElement('div')
  document.body.appendChild(mountTarget)
  tooltipApp.mount(mountTarget)

  // Class on target
  if (el.classList) {
    el.classList.add(TARGET_CLASS)
  }

  return tooltipApp
}

export function destroyTooltip (el) {
  if (el.$_popper) {
    el.$_popper.unmount()
    delete el.$_popper
    delete el.$_popperOldShown
  }

  if (el.classList) {
    el.classList.remove(TARGET_CLASS)
  }
}

export function bind (el, { value, modifiers }) {
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
    if (typeof value.shown !== 'undefined' && value.shown !== el.$_popperOldShown) {
      el.$_popperOldShown = value.shown
      value.shown ? tooltipApp.$refs.tooltip.show() : tooltipApp.$refs.tooltip.hide()
    }
  }
}

export default {
  compatConfig: {
    MODE: 3,
  },
  beforeMount: bind,
  updated: bind,
  beforeUnmount (el) {
    destroyTooltip(el)
  },
}
