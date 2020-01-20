<template>
  <div
    :id="popperId"
    ref="popover"
    class="v-popper__popper"
    :class="[
      themeClass,
      {
        'v-popper__popper--open': isOpen,
        'v-popper__popper--skip-transition': skipTransition,
      },
    ]"
    :aria-hidden="isOpen ? 'false' : 'true'"
    :tabindex="autoHide ? 0 : undefined"
    @keyup.esc="autoHide && $emit('hide')"
  >
    <div class="v-popper__wrapper">
      <div
        ref="inner"
        class="v-popper__inner"
        style="position: relative;"
      >
        <template v-if="isMounted">
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
        class="v-popper__arrow"
      />
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
    isOpen: Boolean,
    isMounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
  },
}
</script>

<style>
.v-popper__popper {
  z-index: 10000;
  visibility: hidden;
  opacity: 0;
  transition: opacity .15s, visibility .15s;
}

.v-popper__popper.v-popper__popper--open {
  visibility: visible;
  opacity: 1;
  transition: opacity .15s;
}

.v-popper__popper.v-popper__popper--skip-transition {
  transition: none !important;
}

.v-popper__arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  z-index: 1;
}

.v-popper__popper[x-placement^="top"] {
  margin-bottom: 5px;
}

.v-popper__popper[x-placement^="top"] .v-popper__arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.v-popper__popper[x-placement^="bottom"] {
  margin-top: 5px;
}

.v-popper__popper[x-placement^="bottom"] .v-popper__arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.v-popper__popper[x-placement^="right"] {
  margin-left: 5px;
}

.v-popper__popper[x-placement^="right"] .v-popper__arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.v-popper__popper[x-placement^="left"] {
  margin-right: 5px;
}

.v-popper__popper[x-placement^="left"] .v-popper__arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}
</style>
