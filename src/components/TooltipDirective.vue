<template>
  <Popper
    ref="popper"
    v-slot="{
      popperId,
      isOpen,
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
  >
    <PopperContent
      ref="popperContent"
      :popper-id="popperId"
      :theme="theme"
      :is-open="isOpen"
      :auto-hide="autoHide"
      :handle-resize="handleResize"
      @hide="hide"
      @resize="onResize"
    >
      <div
        v-if="contentHtml"
        v-html="content"
      />
      <div
        v-else
        v-text="content"
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
      type: String,
      default: '',
    },
  },
}
</script>
