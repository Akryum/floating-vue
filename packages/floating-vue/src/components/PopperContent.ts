import { computed, defineComponent, h, onBeforeUnmount, onMounted, ref } from 'vue'
import { getThemeClasses } from '../config'

export const PopperContent = /** @__PURE__ */ defineComponent({
  name: 'VPopperContent',

  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object,
    result: Object,
  },

  emits: [
    'hide',
    'resize',
  ],

  setup (props, { emit, slots }) {
    const inner = ref<HTMLElement>()

    const themeClass = computed(() => getThemeClasses(props.theme))

    let resizeObserver: ResizeObserver | undefined

    onMounted(() => {
      if (props.handleResize) {
        resizeObserver = new ResizeObserver(() => emit('resize'))
        resizeObserver.observe(inner.value!)
      }
    })

    onBeforeUnmount(() => {
      resizeObserver?.disconnect()
    })

    function toPx (value) {
      if (value != null && !Number.isNaN(value)) {
        return `${value}px`
      }
      return null
    }

    return () => {
      const { autoHide, classes, result, shown } = props

      return h('div', {
        id: props.popperId,
        ref: 'popover',
        'data-allow-mismatch': '',
        class: ['v-popper__popper', themeClass.value, classes.popperClass, {
          'v-popper__popper--shown': shown,
          'v-popper__popper--hidden': !shown,
          'v-popper__popper--show-from': classes.showFrom,
          'v-popper__popper--show-to': classes.showTo,
          'v-popper__popper--hide-from': classes.hideFrom,
          'v-popper__popper--hide-to': classes.hideTo,
          'v-popper__popper--skip-transition': props.skipTransition,
          'v-popper__popper--arrow-overflow': result && result.arrow.overflow,
          'v-popper__popper--no-positioning': !result,
        }],
        style: result
          ? {
              position: result.strategy,
              transform: `translate3d(${Math.round(result.x)}px,${Math.round(result.y)}px,0)`,
            }
          : undefined,
        'aria-hidden': shown || autoHide ? 'false' : 'true',
        tabindex: autoHide ? 0 : undefined,
        'data-popper-placement': result ? result.placement : undefined,
        onKeyup: (event: KeyboardEvent) => {
          if (event.key === 'Escape' && autoHide) {
            emit('hide')
          }
        },
      }, [
        h('div', {
          class: 'v-popper__backdrop',
          onClick: () => autoHide && emit('hide'),
        }),
        h('div', {
          class: 'v-popper__wrapper',
          style: result
            ? {
                transformOrigin: result.transformOrigin,
              }
            : undefined,
        }, [
          h('div', {
            ref: inner,
            class: 'v-popper__inner',
          }, props.mounted
            ? [
                h('div', slots.default?.()),
              ]
            : undefined),
          h('div', {
            ref: 'arrow',
            class: 'v-popper__arrow-container',
            style: result
              ? {
                  left: toPx(result.arrow.x),
                  top: toPx(result.arrow.y),
                }
              : undefined,
          }, [
            h('div', { class: 'v-popper__arrow-outer' }),
            h('div', { class: 'v-popper__arrow-inner' }),
          ]),
        ]),
      ])
    }
  },
})
