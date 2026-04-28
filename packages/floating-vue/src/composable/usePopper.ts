import {
  computed,
  getCurrentInstance,
  inject,
  onActivated,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  provide,
  watch,
  type InjectionKey,
} from 'vue'
import { computePopperPosition } from './popper/positioning'
import { refreshPopperEventListeners } from './popper/listeners'
import { createPopperRuntime, createPopperState } from './popper/state'
import {
  autoShowHidePopper,
  disposePopper,
  initPopper,
  refreshPopperContainer,
  resizePopper,
} from './popper/lifecycle'
import { ensureGlobalPopperHandlers } from './popper/registry'
import { hidePopper, showPopper } from './popper/visibility'
import type { PopperApi, PopperProps, UsePopperOptions } from './popper/types'

/**
 * Provide key used to wire nested poppers to their parent.
 */
export const POPPER_PROVIDE_KEY: InjectionKey<{ parentPopper: PopperApi }> = Symbol('floating-vue-popper')

const POSITIONING_PROPS = [
  'placement',
  'distance',
  'skidding',
  'boundary',
  'strategy',
  'overflowPadding',
  'arrowPadding',
  'preventOverflow',
  'shift',
  'shiftCrossAxis',
  'flip',
] as const

/**
 * Composition API controller for Floating Vue popper behavior.
 */
export function usePopper (props: PopperProps, options: UsePopperOptions): PopperApi {
  ensureGlobalPopperHandlers()

  const instance = getCurrentInstance()
  const parentContext = inject(POPPER_PROVIDE_KEY, null)
  const state = createPopperState(props)
  const runtime = createPopperRuntime()

  const api = {} as PopperApi
  const popperId = computed(() => props.ariaId != null ? String(props.ariaId) : state.randomId)
  const shouldMountContent = computed(() => props.eagerMount || state.isMounted)

  Object.assign(api, {
    popperId,
    parentPopper: parentContext?.parentPopper ?? null,
    state,
    runtime,
    props,
    emit: options.emit,
    instance,
    show: (showOptions = {}) => showPopper(api, showOptions),
    hide: (hideOptions = {}) => hidePopper(api, hideOptions),
    dispose: () => disposePopper(api),
    onResize: () => resizePopper(api),
    recompute: () => computePopperPosition(api),
  })

  Object.assign(api, {
    slotData: computed(() => ({
      popperId: popperId.value,
      isShown: state.isShown,
      shouldMountContent: shouldMountContent.value,
      skipTransition: state.skipTransition,
      autoHide: typeof props.autoHide === 'function' ? state.lastAutoHide : props.autoHide,
      show: api.show,
      hide: api.hide,
      handleResize: props.handleResize,
      onResize: api.onResize,
      classes: {
        ...state.classes,
        popperClass: props.popperClass,
      },
      result: props.positioningDisabled ? null : state.result,
      attrs: options.attrs,
      ariaRole: props.ariaRole,
    })),
  })

  provide(POPPER_PROVIDE_KEY, {
    parentPopper: api,
  })

  setupWarnings(props)
  setupLifecycle(api, options)
  setupWatchers(api)

  return api
}

/**
 * Registers lifecycle hooks used by the popper controller.
 */
function setupLifecycle (api: PopperApi, options: UsePopperOptions) {
  onMounted(() => {
    initPopper(api, options.rootNode.value ?? api.instance?.proxy?.$el ?? null)
    detachInitialNode(api)
  })
  onActivated(() => autoShowHidePopper(api))
  onDeactivated(() => api.hide())
  onBeforeUnmount(() => api.dispose())
}

/**
 * Registers prop watchers that keep imperative popper state in sync.
 */
function setupWatchers (api: PopperApi) {
  watch(() => api.props.shown, () => autoShowHidePopper(api))
  watch(() => api.props.disabled, value => {
    value ? api.dispose() : initPopper(api, api.instance?.proxy?.$el ?? null)
  })
  watch(() => api.props.container, () => refreshPopperContainer(api))
  watch(() => api.props.triggers, () => refreshPopperEventListeners(api), { deep: true })
  watch(() => api.props.positioningDisabled, () => refreshPopperEventListeners(api))
  watch(() => POSITIONING_PROPS.map(prop => api.props[prop]), () => computePopperPosition(api))
}

/**
 * Emits deprecation warnings once per component creation.
 */
function setupWarnings (props: PopperProps) {
  if (props.autoMinSize) {
    console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.')
  }
  if (props.autoMaxSize) {
    console.warn('[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.')
  }
}

/**
 * Detaches the node once after mount to preserve legacy teleport timing.
 */
function detachInitialNode (api: PopperApi) {
  const node = api.runtime.nodes.popperNode
  if (node?.parentNode) {
    node.parentNode.removeChild(node)
  }
}

export type { PopperApi, PopperSlotData, PopperProps } from './popper/types'
