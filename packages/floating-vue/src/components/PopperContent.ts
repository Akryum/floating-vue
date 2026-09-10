import { defineComponent, h } from 'vue'
import { ThemeClass } from '../mixins/ThemeClass'

export const PopperContent = defineComponent({
  name: 'VPopperContent',

  mixins: [
    ThemeClass(),
  ],

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

  mounted () {
    if (this.handleResize) {
      this.$_resizeObserver = new ResizeObserver(() => this.$emit('resize'))
      this.$_resizeObserver.observe(this.$refs.inner)
    }
  },

  beforeUnmount () {
    this.$_resizeObserver?.disconnect()
  },

  methods: {
    toPx (value) {
      if (value != null && !Number.isNaN(value)) {
        return `${value}px`
      }
      return null
    },
  },

  render () {
    const { autoHide, classes, result, shown } = this

    return h('div', {
      id: this.popperId,
      ref: 'popover',
      'data-allow-mismatch': '',
      class: ['v-popper__popper', this.themeClass, classes.popperClass, {
        'v-popper__popper--shown': shown,
        'v-popper__popper--hidden': !shown,
        'v-popper__popper--show-from': classes.showFrom,
        'v-popper__popper--show-to': classes.showTo,
        'v-popper__popper--hide-from': classes.hideFrom,
        'v-popper__popper--hide-to': classes.hideTo,
        'v-popper__popper--skip-transition': this.skipTransition,
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
          this.$emit('hide')
        }
      },
    }, [
      h('div', {
        class: 'v-popper__backdrop',
        onClick: () => autoHide && this.$emit('hide'),
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
          ref: 'inner',
          class: 'v-popper__inner',
        }, this.mounted
          ? [
              h('div', this.$slots.default?.()),
            ]
          : undefined),
        h('div', {
          ref: 'arrow',
          class: 'v-popper__arrow-container',
          style: result
            ? {
                left: this.toPx(result.arrow.x),
                top: this.toPx(result.arrow.y),
              }
            : undefined,
        }, [
          h('div', { class: 'v-popper__arrow-outer' }),
          h('div', { class: 'v-popper__arrow-inner' }),
        ]),
      ]),
    ])
  },
})
