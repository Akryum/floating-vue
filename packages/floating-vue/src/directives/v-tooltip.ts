import { App, createApp, h, Ref, ref } from 'vue'
import TooltipDirective from '../components/TooltipDirective.vue'
import { getDefaultConfig } from '../config'
import { placements } from '../util/popper'

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

interface Directive {
  id: number
  options: Ref<any>
  shown: Ref<boolean>
}

let directiveApp: App
let directives: Ref<Directive[]>
let uid = 0

function ensureDirectiveApp () {
  if (directiveApp) return

  directives = ref([])

  directiveApp = createApp({
    name: 'VTooltipDirectiveApp',
    setup () {
      return {
        directives,
      }
    },
    render () {
      return this.directives.map((directive) => {
        return h(TooltipDirective, {
          ...directive.options,
          shown: directive.shown || directive.options.shown,
          key: directive.id,
        })
      })
    },
    devtools: {
      hide: true,
    },
  })

  const mountTarget = document.createElement('div')
  document.body.appendChild(mountTarget)
  directiveApp.mount(mountTarget)
}

export function createTooltip (el, value, modifiers) {
  ensureDirectiveApp()
  const options = ref(getOptions(el, value, modifiers))
  const shown = ref(false)

  const item = {
    id: uid++,
    options,
    shown,
  }
  directives.value.push(item)

  // Class on target
  if (el.classList) {
    el.classList.add(TARGET_CLASS)
  }

  const result = el.$_popper = {
    options,
    item,
    show () {
      shown.value = true
    },
    hide () {
      shown.value = false
    },
  }

  return result
}

export function destroyTooltip (el) {
  if (el.$_popper) {
    const index = directives.value.indexOf(el.$_popper.item)
    if (index !== -1) directives.value.splice(index, 1)

    delete el.$_popper
    delete el.$_popperOldShown
    delete el.$_popperMountTarget
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
    let directive
    if (el.$_popper) {
      directive = el.$_popper
      directive.options.value = options
    } else {
      directive = createTooltip(el, value, modifiers)
    }

    // Manual show
    if (typeof value.shown !== 'undefined' && value.shown !== el.$_popperOldShown) {
      el.$_popperOldShown = value.shown
      value.shown ? directive.show() : directive.hide()
    }
  }
}

export default {
  beforeMount: bind,
  updated: bind,
  beforeUnmount (el) {
    destroyTooltip(el)
  },
}
