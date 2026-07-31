import { type App, createApp, type DirectiveBinding, h, type ObjectDirective, type Ref, ref, unref } from 'vue'
import TooltipDirective from '../components/TooltipDirective.vue'
import { getDefaultConfig } from '../config'
import { placements, type Placement } from '../util/popper'
import { resolvePresetName } from '../util/preset'

const TARGET_CLASS = 'v-popper--has-tooltip'

/**
 * Resolved tooltip directive options merged from binding value, modifiers and preset defaults.
 */
export interface TooltipOptions {
  content?: unknown
  placement?: Placement
  preset?: string
  /**
   * @deprecated Use `preset` instead.
   */
  theme?: string
  shown?: boolean
  targetNodes: () => Element[]
  referenceNode: () => Element | null
  [key: string]: unknown
}

type ModifierMap = Record<string, boolean>

type ObjectValue = Record<string, unknown> & {
  content?: unknown
  placement?: Placement
  preset?: string
  /**
   * @deprecated Use `preset` instead.
   */
  theme?: string
  shown?: boolean
}

type DirectiveValue = string | number | ObjectValue | false | null | undefined

export interface TooltipDirectiveItem {
  id: number
  options: Ref<TooltipOptions>
  shown: Ref<boolean>
}

/**
 * Element instance augmented with directive-private state.
 */
type TooltipEl = HTMLElement & {
  $_popper?: {
    options: Ref<TooltipOptions>
    item: TooltipDirectiveItem
    show: () => void
    hide: () => void
  }
  $_popperOldShown?: boolean
  $_popperMountTarget?: HTMLElement
}

/**
 * Support placement as directive modifier.
 */
export function getPlacement (options: { placement?: Placement, preset?: string, theme?: string }, modifiers: ModifierMap | undefined): Placement {
  let result: Placement | undefined = options.placement
  if (!result && modifiers) {
    for (const pos of placements) {
      if (modifiers[pos]) {
        result = pos
      }
    }
  }
  if (!result) {
    result = getDefaultConfig(resolvePresetName(options, 'tooltip'), 'placement') as Placement
  }
  return result
}

export function getOptions (el: Element, value: DirectiveValue, modifiers: ModifierMap | undefined): TooltipOptions {
  let options: TooltipOptions
  const type = typeof value
  if (type === 'string') {
    options = { content: value } as TooltipOptions
  } else if (value && type === 'object') {
    options = { ...(value as ObjectValue) } as TooltipOptions
  } else {
    options = { content: false } as TooltipOptions
  }
  options.placement = getPlacement(options, modifiers)
  options.targetNodes = () => [el]
  options.referenceNode = () => el
  return options
}

let directiveApp: App | undefined
let directives: Ref<TooltipDirectiveItem[]>
let uid = 0

function ensureDirectiveApp () {
  if (directiveApp) return

  directives = ref([])

  directiveApp = createApp({
    name: 'VTooltipDirectiveApp',
    setup () {
      return () => directives.value.map((directive) => {
        const options = unref(directive.options)
        const shown = unref(directive.shown)
        const props = {
          ...options,
          shown: shown || options.shown,
          key: directive.id,
        }
        return h(TooltipDirective as unknown as Parameters<typeof h>[0], props)
      })
    },
    devtools: {
      hide: true,
    },
  } as Parameters<typeof createApp>[0])

  const mountTarget = document.createElement('div')
  document.body.appendChild(mountTarget)
  directiveApp.mount(mountTarget)
}

export function createTooltip (el: TooltipEl, value: DirectiveValue, modifiers: ModifierMap | undefined) {
  ensureDirectiveApp()
  const options = ref(getOptions(el, value, modifiers))
  const shown = ref(false)

  const item: TooltipDirectiveItem = {
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

export function destroyTooltip (el: TooltipEl) {
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

export function bind (el: TooltipEl, { value, modifiers }: DirectiveBinding<DirectiveValue>) {
  const options = getOptions(el, value, modifiers as ModifierMap | undefined)
  if (!options.content || getDefaultConfig(resolvePresetName(options, 'tooltip'), 'disabled')) {
    destroyTooltip(el)
  } else {
    let directive: NonNullable<TooltipEl['$_popper']>
    if (el.$_popper) {
      directive = el.$_popper
      directive.options.value = options
    } else {
      directive = createTooltip(el, value, modifiers as ModifierMap | undefined)
    }

    // Manual show
    if (value && typeof value === 'object' && 'shown' in value && value.shown !== el.$_popperOldShown) {
      el.$_popperOldShown = value.shown
      value.shown ? directive.show() : directive.hide()
    }
  }
}

const vTooltip: ObjectDirective<TooltipEl, DirectiveValue> = {
  beforeMount: bind,
  updated: bind,
  beforeUnmount (el: TooltipEl) {
    destroyTooltip(el)
  },
}

export default vTooltip
