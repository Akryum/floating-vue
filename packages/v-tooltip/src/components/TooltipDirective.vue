<template>
  <Popper
    ref="popper"
    v-slot="{
      popperId,
      isOpen,
      isMounted,
      skipTransition,
      autoHide,
      hide,
      handleResize,
      onResize,
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
      :is-open="isOpen"
      :is-mounted="isMounted"
      :skip-transition="skipTransition"
      :auto-hide="autoHide"
      :handle-resize="handleResize"
      @hide="hide"
      @resize="onResize"
    >
      <div
        v-if="contentHtml"
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
import Popper from './Popper.vue'
import PopperContent from './PopperContent.vue'
import { getDefaultConfig } from '../config'
import PopperMethods from './PopperMethods'

export default {
  name: 'VTooltipDirective',

  components: {
    Popper,
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

    contentHtml: {
      type: Boolean,
      default () {
        return getDefaultConfig(this.theme, 'contentHtml')
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
      if (typeof this.content === 'function' && this.$_isOpen &&
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
      this.$_isOpen = true
      this.fetchContent()
    },

    onHide () {
      this.$_isOpen = false
    },
  },
}
</script>
