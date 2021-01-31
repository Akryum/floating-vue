<template>
  <Popper
    ref="popper"
    v-slot="{
      popperId,
      isShown,
      shouldMountContent,
      skipTransition,
      autoHide,
      hide,
      handleResize,
      onResize,
      classes,
    }"
    v-bind="$attrs"
    :theme="theme"
    :popper-node="() => $refs.popperContent.$el"
    :arrow-node="() => $refs.popperContent.$refs.arrow"
    v-on="$listeners"
    @apply-show="onShow"
    @apply-hide="onHide"
  >
    <PopperContent
      ref="popperContent"
      :class="{
        'v-popper--tooltip-loading': loading,
      }"
      :popper-id="popperId"
      :theme="theme"
      :shown="isShown"
      :mounted="shouldMountContent"
      :skip-transition="skipTransition"
      :auto-hide="autoHide"
      :handle-resize="handleResize"
      :classes="classes"
      @hide="hide"
      @resize="onResize"
    >
      <div
        v-if="html"
        v-html="finalContent"
      />
      <div
        v-else
        v-text="finalContent"
      />
    </PopperContent>
  </Popper>
</template>

<script>
import Popper from './Popper'
import PopperContent from './PopperContent.vue'
import { getDefaultConfig } from '../config'
import PopperMethods from './PopperMethods'

export default {
  name: 'VTooltipDirective',

  components: {
    Popper: Popper(),
    PopperContent,
  },

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
      default () {
        return getDefaultConfig(this.theme, 'html')
      },
    },

    content: {
      type: [String, Number, Function],
      default: null,
    },

    loadingContent: {
      type: String,
      default () {
        return getDefaultConfig(this.theme, 'loadingContent')
      },
    },
  },

  data () {
    return {
      asyncContent: null,
    }
  },

  computed: {
    isContentAsync () {
      return typeof this.content === 'function'
    },

    loading () {
      return this.isContentAsync && this.asyncContent == null
    },

    finalContent () {
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

    finalContent (value) {
      this.$nextTick(() => {
        this.$refs.popper.onResize()
      })
    },
  },

  created () {
    this.$_fetchId = 0
  },

  methods: {
    fetchContent (force) {
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
      if (fetchId !== this.$_fetchId) return
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
}
</script>
