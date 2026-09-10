import { computed, defineComponent, h, nextTick, ref, watch } from 'vue'
import type { PropType } from 'vue'
import { createPopper } from '../factories/Popper'
import { PopperContent } from './PopperContent'
import { getDefaultConfig } from '../config'

const Popper = /** @__PURE__ */ createPopper()

export const TooltipDirective = /** @__PURE__ */ defineComponent({
  name: 'VTooltipDirective',

  inheritAttrs: false,

  props: {
    theme: {
      type: String,
      default: 'tooltip',
    },

    html: {
      type: Boolean,
      default: props => getDefaultConfig(props.theme, 'html'),
    },

    content: {
      type: [String, Number, Function],
      default: null,
    },

    loadingContent: {
      type: String,
      default: props => getDefaultConfig(props.theme, 'loadingContent'),
    },

    targetNodes: {
      type: Function as PropType<() => Element[]>,
      required: true,
    },
  },

  setup (props, { attrs, expose }) {
    const asyncContent = ref<string | null>(null)

    const isContentAsync = computed(() => typeof props.content === 'function')
    const loading = computed(() => isContentAsync.value && asyncContent.value == null)
    const finalContent = computed(() => {
      if (isContentAsync.value) {
        return loading.value ? props.loadingContent : asyncContent.value
      }
      return props.content as string
    })

    let popperRef: InstanceType<typeof Popper> | undefined
    let popperContentRef: InstanceType<typeof PopperContent> | undefined

    let isPopperShown = false
    let isLoading = false
    let fetchId = 0

    function fetchContent (force = false) {
      if (typeof props.content === 'function' && isPopperShown &&
        (force || (!isLoading && asyncContent.value == null))) {
        asyncContent.value = null
        isLoading = true
        const currentFetchId = ++fetchId
        const result = props.content(props)
        if (result.then) {
          result.then((res: string) => onResult(currentFetchId, res))
        } else {
          onResult(currentFetchId, result)
        }
      }
    }

    function onResult (resultFetchId: number, result: string) {
      if (resultFetchId !== fetchId) { return }
      isLoading = false
      asyncContent.value = result
    }

    watch(() => props.content, () => fetchContent(true), { immediate: true })

    watch(finalContent, async () => {
      await nextTick()
      popperRef!.onResize()
    })

    function onShow () {
      isPopperShown = true
      fetchContent()
    }

    function onHide () {
      isPopperShown = false
    }

    expose({
      show: (...args: any[]) => popperRef!.show(...args),
      hide: (...args: any[]) => popperRef!.hide(...args),
      dispose: () => popperRef!.dispose(),
      onResize: () => popperRef!.onResize(),
    })

    return () => h(Popper, {
      ref: (el: any) => { popperRef = el },
      ...attrs,
      theme: props.theme,
      targetNodes: props.targetNodes,
      popperNode: () => popperContentRef!.$el,
      onApplyShow: onShow,
      onApplyHide: onHide,
    }, {
      default: ({
        popperId,
        isShown,
        shouldMountContent,
        skipTransition,
        autoHide,
        hide,
        handleResize,
        onResize,
        classes,
        result,
      }) => h(PopperContent, {
        ref: (el: any) => { popperContentRef = el },
        class: {
          'v-popper--tooltip-loading': loading.value,
        },
        popperId,
        theme: props.theme,
        shown: isShown,
        mounted: shouldMountContent,
        skipTransition,
        autoHide,
        handleResize,
        classes,
        result,
        onHide: hide,
        onResize,
      }, {
        default: () => props.html
          ? h('div', { innerHTML: finalContent.value })
          : h('div', { textContent: finalContent.value }),
      }),
    })
  },
})
