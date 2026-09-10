import type { App, DirectiveBinding, ObjectDirective, Ref, UnwrapRef } from 'vue'
import { createApp, h, ref } from 'vue'
import { TooltipDirective } from '../components/TooltipDirective'
import { getDefaultConfig } from '../config'
import type { Placement } from '../util/popper'
import { placements } from '../util/popper'

const TARGET_CLASS = 'v-popper--has-tooltip'

export interface TooltipOptions {
  content?: string | boolean
  placement?: Placement
  theme?: string
  shown?: boolean
  targetNodes?: () => Element[]
  referenceNode?: () => Element
}

export type TooltipValue = string | TooltipOptions

interface TooltipHandle {
  options: Ref<TooltipOptions>
  item: Directive
  show: () => void
  hide: () => void
}

export interface TooltipElement extends HTMLElement {
  $_popper?: TooltipHandle
  $_popperOldShown?: boolean
  $_popperMountTarget?: HTMLElement
}

type Modifiers = DirectiveBinding['modifiers']

/**
 * Support placement as directive modifier
 */
export function getPlacement (options: { placement?: Placement | string, theme?: string }, modifiers?: Modifiers): Placement {
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
  return result as Placement
}

export function getOptions (el: Element, value: TooltipValue, modifiers?: Modifiers): TooltipOptions {
  let options: TooltipOptions
  const type = typeof value
  if (type === 'string') {
    options = { content: value as string }
  } else if (value && type === 'object') {
    options = value as TooltipOptions
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
  options: Ref<TooltipOptions>
  shown: Ref<boolean>
}

let directiveApp: App
let directives: Ref<Directive[]>
let uid = 0

function ensureDirectiveApp () {
  if (directiveApp) { return }

  directives = ref([])

  directiveApp = createApp({
    name: 'VTooltipDirectiveApp',
    setup () {
      return {
        directives,
      }
    },
    render () {
      // the reactive array unwraps each item's `options`/`shown` refs
      const directives = this.directives as unknown as UnwrapRef<Directive>[]
      return directives.map((directive) => {
        // options are dynamic directive input; `shown` is forwarded to Popper via attrs
        const props = {
          ...directive.options,
          shown: directive.shown || directive.options.shown,
          key: directive.id,
        }
        return h(TooltipDirective, props as InstanceType<typeof TooltipDirective>['$props'])
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

export function createTooltip (el: TooltipElement, value: TooltipValue, modifiers?: Modifiers) {
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

export function destroyTooltip (el: TooltipElement) {
  if (el.$_popper) {
    const index = directives.value.indexOf(el.$_popper.item)
    if (index !== -1) { directives.value.splice(index, 1) }

    delete el.$_popper
    delete el.$_popperOldShown
    delete el.$_popperMountTarget
  }

  if (el.classList) {
    el.classList.remove(TARGET_CLASS)
  }
}

export function bind (el: TooltipElement, { value, modifiers }: DirectiveBinding<TooltipValue>) {
  const options = getOptions(el, value, modifiers)
  if (!options.content || getDefaultConfig(options.theme || 'tooltip', 'disabled')) {
    destroyTooltip(el)
  } else {
    let directive: TooltipHandle
    if (el.$_popper) {
      directive = el.$_popper
      directive.options.value = options
    } else {
      directive = createTooltip(el, value, modifiers)
    }

    // Manual show
    const shown = typeof value === 'object' ? value.shown : undefined
    if (typeof shown !== 'undefined' && shown !== el.$_popperOldShown) {
      el.$_popperOldShown = shown
      shown ? directive.show() : directive.hide()
    }
  }
}

export const vTooltip: ObjectDirective<TooltipElement, TooltipValue> = {
  beforeMount: bind,
  updated: bind,
  beforeUnmount (el) {
    destroyTooltip(el)
  },
}
