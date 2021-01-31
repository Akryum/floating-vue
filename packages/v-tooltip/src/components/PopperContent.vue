<template>
  <div
    :id="popperId"
    ref="popover"
    class="v-popper__popper"
    :class="[
      themeClass,
      {
        'v-popper__popper--shown': shown,
        'v-popper__popper--hidden': !shown,
        'v-popper__popper--show-from': classes.showFrom,
        'v-popper__popper--show-to': classes.showTo,
        'v-popper__popper--hide-from': classes.hideFrom,
        'v-popper__popper--hide-to': classes.hideTo,
        'v-popper__popper--skip-transition': skipTransition,
      },
    ]"
    :aria-hidden="shown ? 'false' : 'true'"
    :tabindex="autoHide ? 0 : undefined"
    @keyup.esc="autoHide && $emit('hide')"
  >
    <div class="v-popper__wrapper">
      <div
        ref="inner"
        class="v-popper__inner"
      >
        <template v-if="mounted">
          <div>
            <slot />
          </div>

          <ResizeObserver
            v-if="handleResize"
            @notify="$emit('resize', $event)"
          />
        </template>
      </div>

      <div
        ref="arrow"
        class="v-popper__arrow-container"
      >
        <div class="v-popper__arrow" />
      </div>
    </div>
  </div>
</template>

<script>
import { ResizeObserver } from 'vue-resize'
import ThemeClass from './ThemeClass'

export default {
  name: 'VPopperContent',

  components: {
    ResizeObserver,
  },

  mixins: [
    ThemeClass,
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
  },
}
</script>

<style>
.v-popper__popper {
  z-index: 10000;
}

.v-popper__popper.v-popper__popper--hidden {
  visibility: hidden;
  opacity: 0;
  transition: opacity .15s, visibility .15s;
}

.v-popper__popper.v-popper__popper--shown {
  visibility: visible;
  opacity: 1;
  transition: opacity .15s;
}

.v-popper__popper.v-popper__popper--skip-transition,
.v-popper__popper.v-popper__popper--skip-transition > .v-popper__wrapper {
  transition: none !important;
}

.v-popper__inner {
  position: relative;
}

.v-popper__arrow-container {
  width: 10px;
  height: 10px;
}

.v-popper__arrow {
  border-style: solid;
  position: relative;
  width: 0;
  height: 0;
}

.v-popper__popper[data-popper-placement^="top"] .v-popper__arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
}

.v-popper__popper[data-popper-placement^="bottom"] .v-popper__arrow-container {
  top: 0;
}

.v-popper__popper[data-popper-placement^="bottom"] .v-popper__arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
}

.v-popper__popper[data-popper-placement^="right"] .v-popper__arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
}

.v-popper__popper[data-popper-placement^="left"] .v-popper__arrow-container {
  right: -5px;
}

.v-popper__popper[data-popper-placement^="left"] .v-popper__arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
}
</style>
