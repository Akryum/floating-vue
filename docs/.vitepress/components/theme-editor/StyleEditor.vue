<script>
import { mapState } from './state'
import Tabs from './Tabs.vue'
import { PenToolIcon } from 'vue-feather-icons'
import { loadValue, storeValue } from './util'

const TAB_KEY = 'v-tooltip.theme-editor.style-tab'

function inherit (key, defaultValue) {
  return {
    get () {
      return this.currentStyle[key] == null
    },
    set (value) {
      this.$set(this.currentStyle, key, value ? undefined : getDefaultValue(defaultValue))
    },
  }
}

function getDefaultValue (value) {
  if (typeof value === 'function') {
    return value()
  } else {
    return value
  }
}

export default {
  components: {
    Tabs,
    PenToolIcon,
  },

  data () {
    return {
      tab: 'normal',
    }
  },

  computed: {
    ...mapState([
      'theme',
    ]),

    currentStyle () {
      return this.theme.styles[this.tab]
    },

    inheritBackgroundColor: inherit('backgroundColor', () => ({ color: '#ffffff', opacity: 1 })),

    inheritColor: inherit('color', () => ({ color: '#000000', opacity: 1 })),

    inheritPadding: inherit('padding', () => ({ multiple: false, top: 0, right: 0, bottom: 0, left: 0 })),

    inheritBorder: inherit('border', () => ({ enabled: true, color: '#000000' })),
    inheritBorderRadius: inherit('borderRadius', 0),

    inheritBoxShadow: inherit('boxShadow', () => ({ color: '#000', opacity: 0.5, size: 10, x: 0, y: 0 })),

    inheritArrow: inherit('arrow', () => ({ enabled: true })),
  },

  watch: {
    tab: storeValue.bind(null, TAB_KEY),

    currentStyle: {
      handler (value) {
      // Create new styles
        if (value == null) {
          this.$set(this.theme.styles, this.tab, {})
        }
      },
      immediate: true,
    },
  },

  created () {
    loadValue(TAB_KEY, value => {
      this.tab = value
    })
  },
}
</script>

<template>
  <div class="overflow-hidden flex flex-col items-stretch">
    <div class="flex items-center border-b border-gray-100">
      <div class="flex-1 flex items-center p-2 text-gray-500">
        <PenToolIcon class="w-4 h-4 mr-2" />
        Style
      </div>

      <Tabs
        v-model="tab"
        :tabs="[
          { id: 'normal', label: 'Normal' },
          { id: 'dark', label: 'Dark' },
        ]"
      />
    </div>

    <div
      v-if="currentStyle"
      class="flex-1 overflow-auto flex flex-col items-stretch"
    >
      <div class="flex space-x-3 hover:bg-gray-50 p-2">
        <label for="backgroundColor">Background color:</label>
        <label class="flex items-center space-x-1">
          <input
            v-model="inheritBackgroundColor"
            type="checkbox"
          >
          <span>(inherit)</span>
        </label>
        <template v-if="!inheritBackgroundColor">
          <input
            v-model="currentStyle.backgroundColor.color"
            type="color"
            class="h-full"
          >
          <input
            v-model.number="currentStyle.backgroundColor.opacity"
            v-tooltip="{
              content: `Opacity (${currentStyle.backgroundColor.opacity})`,
              theme: '_editor-tooltip',
            }"
            type="range"
            min="0"
            max="1"
            step="0.01"
          >
        </template>
      </div>

      <div class="flex space-x-3 hover:bg-gray-50 p-2">
        <label for="backgroundColor">Text color:</label>
        <label class="flex items-center space-x-1">
          <input
            v-model="inheritColor"
            type="checkbox"
          >
          <span>(inherit)</span>
        </label>
        <template v-if="!inheritColor">
          <input
            v-model="currentStyle.color.color"
            type="color"
            class="h-full"
          >
          <input
            v-model.number="currentStyle.color.opacity"
            v-tooltip="{
              content: `Opacity (${currentStyle.color.opacity})`,
              theme: '_editor-tooltip',
            }"
            type="range"
            min="0"
            max="1"
            step="0.01"
          >
        </template>
      </div>

      <div class="hover:bg-gray-50 p-2 space-y-2">
        <div class="flex space-x-3">
          <label for="backgroundColor">Padding:</label>
          <label class="flex items-center space-x-1">
            <input
              v-model="inheritPadding"
              type="checkbox"
            >
            <span>(inherit)</span>
          </label>
          <label
            v-if="!inheritPadding"
            class="flex items-center space-x-1"
          >
            <input
              v-model="currentStyle.padding.multiple"
              type="checkbox"
            >
            <span>Multiple values</span>
          </label>
        </div>
        <div
          v-if="!inheritPadding"
          class="flex space-x-3"
        >
          <input
            v-model.number="currentStyle.padding.top"
            v-tooltip="{
              content: `${currentStyle.padding.multiple ? 'Top' : 'Padding'} (${currentStyle.padding.top}px)`,
              theme: '_editor-tooltip',
            }"
            type="number"
            class="flex-1 w-0"
            :aria-label="(currentStyle.padding.multiple ? 'Top' : 'Padding') + ' padding'"
          >
          <input
            v-model.number="currentStyle.padding.top"
            v-tooltip="{
              content: `${currentStyle.padding.multiple ? 'Top' : 'Padding'} (${currentStyle.padding.top}px)`,
              theme: '_editor-tooltip',
            }"
            type="range"
            min="0"
            max="100"
            class="flex-1 w-0"
            :aria-label="(currentStyle.padding.multiple ? 'Top' : 'Padding') + ' padding slider'"
          >
          <template v-if="currentStyle.padding.multiple">
            <input
              v-model.number="currentStyle.padding.right"
              v-tooltip="{
                content: `Right (${currentStyle.padding.right}px)`,
                theme: '_editor-tooltip',
              }"
              type="number"
              class="flex-1 w-0"
              aria-label="Right padding"
            >
            <input
              v-model.number="currentStyle.padding.right"
              v-tooltip="{
                content: `Right (${currentStyle.padding.right}px)`,
                theme: '_editor-tooltip',
              }"
              type="range"
              min="0"
              max="100"
              class="flex-1 w-0"
              aria-label="Right padding slider"
            >
            <input
              v-model.number="currentStyle.padding.bottom"
              v-tooltip="{
                content: `Bottom (${currentStyle.padding.bottom}px)`,
                theme: '_editor-tooltip',
              }"
              type="number"
              class="flex-1 w-0"
              aria-label="Bottom padding"
            >
            <input
              v-model.number="currentStyle.padding.bottom"
              v-tooltip="{
                content: `Bottom (${currentStyle.padding.bottom}px)`,
                theme: '_editor-tooltip',
              }"
              type="range"
              min="0"
              max="100"
              class="flex-1 w-0"
              aria-label="Bottom padding slider"
            >
            <input
              v-model.number="currentStyle.padding.left"
              v-tooltip="{
                content: `Left (${currentStyle.padding.left}px)`,
                theme: '_editor-tooltip',
              }"
              type="number"
              class="flex-1 w-0"
              aria-label="Left padding"
            >
            <input
              v-model.number="currentStyle.padding.left"
              v-tooltip="{
                content: `Left (${currentStyle.padding.left}px)`,
                theme: '_editor-tooltip',
              }"
              type="range"
              min="0"
              max="100"
              class="flex-1 w-0"
              aria-label="Left padding slider"
            >
          </template>
        </div>
      </div>

      <div class="flex space-x-3 hover:bg-gray-50 p-2">
        <label for="backgroundColor">Border:</label>
        <label class="flex items-center space-x-1">
          <input
            v-model="inheritBorder"
            type="checkbox"
          >
          <span>(inherit)</span>
        </label>
        <template v-if="!inheritBorder">
          <label>
            <input
              v-model="currentStyle.border.enabled"
              type="checkbox"
            >
            Enable
          </label>
          <input
            v-if="currentStyle.border.enabled"
            v-model="currentStyle.border.color"
            type="color"
            class="h-full"
          >
        </template>
      </div>

      <div class="flex space-x-3 hover:bg-gray-50 p-2">
        <label for="backgroundColor">Border radius:</label>
        <label class="flex items-center space-x-1">
          <input
            v-model="inheritBorderRadius"
            type="checkbox"
          >
          <span>(inherit)</span>
        </label>
        <template v-if="!inheritBorderRadius">
          <input
            v-model.number="currentStyle.borderRadius"
            type="number"
            class="w-16"
          >
          <input
            v-model.number="currentStyle.borderRadius"
            type="range"
            min="0"
            max="100"
            class="flex-1 w-0"
          >
        </template>
      </div>

      <div class="flex space-x-3 hover:bg-gray-50 p-2">
        <label for="backgroundColor">Drop shadow:</label>
        <label class="flex items-center space-x-1">
          <input
            v-model="inheritBoxShadow"
            type="checkbox"
          >
          <span>(inherit)</span>
        </label>
        <template v-if="!inheritBoxShadow">
          <input
            v-model="currentStyle.boxShadow.color"
            type="color"
            class="flex-none w-6 h-full"
            aria-label="Box shadow color"
          >
          <input
            v-model.number="currentStyle.boxShadow.opacity"
            v-tooltip="{
              content: `Opacity (${currentStyle.boxShadow.opacity})`,
              theme: '_editor-tooltip',
            }"
            type="range"
            min="0"
            max="1"
            step="0.01"
            class="w-0 flex-1"
            aria-label="Box shadow color opacity"
          >
          <input
            v-model.number="currentStyle.boxShadow.size"
            v-tooltip="{
              content: `Size (${currentStyle.boxShadow.size}px)`,
              theme: '_editor-tooltip',
            }"
            type="number"
            class="w-0 flex-1"
            aria-label="Box shadow size in pixels"
          >
          <input
            v-model.number="currentStyle.boxShadow.x"
            v-tooltip="{
              content: `Horizontal position (${currentStyle.boxShadow.x}px)`,
              theme: '_editor-tooltip',
            }"
            type="number"
            class="w-0 flex-1"
            aria-label="Box shadow horizontal position"
          >
          <input
            v-model.number="currentStyle.boxShadow.y"
            v-tooltip="{
              content: `Vertical position (${currentStyle.boxShadow.y}px)`,
              theme: '_editor-tooltip',
            }"
            type="number"
            class="w-0 flex-1"
            aria-label="Box shadow vertial position"
          >
        </template>
      </div>

      <div class="flex space-x-3 hover:bg-gray-50 p-2">
        <label for="backgroundColor">Arrow:</label>
        <label class="flex items-center space-x-1">
          <input
            v-model="inheritArrow"
            type="checkbox"
          >
          <span>(inherit)</span>
        </label>
        <template v-if="!inheritArrow">
          <label>
            <input
              v-model="currentStyle.arrow.enabled"
              type="checkbox"
            >
            Enable
          </label>
        </template>
      </div>
    </div>
  </div>
</template>
