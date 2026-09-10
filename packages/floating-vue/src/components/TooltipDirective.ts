import { defineComponent, h } from 'vue'
import { createPopper } from '../factories/Popper'
import { PopperContent } from './PopperContent'
import { PopperMethods } from '../mixins/PopperMethods'
import { getDefaultConfig } from '../config'

const Popper = createPopper()

export const TooltipDirective = defineComponent({
  name: 'VTooltipDirective',

  mixins: [
    PopperMethods,
  ],

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
      type: Function,
      required: true,
    },
  },

  data () {
    return {
      asyncContent: null as string,
    }
  },

  computed: {
    isContentAsync (): boolean {
      return typeof this.content === 'function'
    },

    loading (): boolean {
      return this.isContentAsync && this.asyncContent == null
    },

    finalContent (): string {
      if (this.isContentAsync) {
        return this.loading ? this.loadingContent : this.asyncContent
      }
      return this.content
    },
  },

  watch: {
    content: {
      handler () {
        this.fetchContent(true)
      },
      immediate: true,
    },

    async finalContent () {
      await this.$nextTick()
      this.$refs.popper.onResize()
    },
  },

  created () {
    this.$_fetchId = 0
  },

  methods: {
    fetchContent (force: boolean) {
      if (typeof this.content === 'function' && this.$_isShown &&
        (force || (!this.$_loading && this.asyncContent == null))) {
        this.asyncContent = null
        this.$_loading = true
        const fetchId = ++this.$_fetchId
        const result = this.content(this)
        if (result.then) {
          result.then(res => this.onResult(fetchId, res))
        } else {
          this.onResult(fetchId, result)
        }
      }
    },

    onResult (fetchId, result) {
      if (fetchId !== this.$_fetchId) { return }
      this.$_loading = false
      this.asyncContent = result
    },

    onShow () {
      this.$_isShown = true
      this.fetchContent()
    },

    onHide () {
      this.$_isShown = false
    },
  },

  render () {
    return h(Popper, {
      ref: 'popper',
      ...this.$attrs,
      theme: this.theme,
      targetNodes: this.targetNodes,
      popperNode: () => (this.$refs as any).popperContent.$el,
      onApplyShow: this.onShow,
      onApplyHide: this.onHide,
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
        ref: 'popperContent',
        class: {
          'v-popper--tooltip-loading': this.loading,
        },
        popperId,
        theme: this.theme,
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
        default: () => this.html
          ? h('div', { innerHTML: this.finalContent })
          : h('div', { textContent: this.finalContent }),
      }),
    })
  },
})
