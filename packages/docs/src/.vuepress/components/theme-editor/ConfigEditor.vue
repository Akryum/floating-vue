<script>
import { builtinThemes } from './builtin-themes'
import { mapState, state } from './state'
import { placements } from '@popperjs/core'
import { SHOW_EVENT_MAP } from 'floating-vue'
import { ToolIcon } from 'vue-feather-icons'
import Tabs from './Tabs.vue'
import { loadValue, storeValue } from './util'

const TAB_KEY = 'v-tooltip.theme-editor.config-tab'

export default {
  components: {
    ToolIcon,
    Tabs,
  },

  data () {
    return {
      tab: 'general',
    }
  },

  computed: {
    ...mapState([
      'theme',
    ]),

    otherThemes () {
      return [
        ...builtinThemes,
        ...state.themes.filter(t => t.name !== this.theme.name).map(t => t.name),
      ]
    },

    inheritTriggers: {
      get () {
        return this.theme.config.triggers == null
      },
      set (value) {
        this.theme.config.triggers = value ? undefined : []
      },
    },

    inheritOffset: {
      get () {
        return this.theme.config.offset == null
      },
      set (value) {
        this.theme.config.offset = value ? undefined : [0, 0]
      },
    },

    inheritDelay: {
      get () {
        return this.theme.config.delay == null
      },
      set (value) {
        this.theme.config.delay = value ? undefined : { show: 0, hide: 0 }
      },
    },

    inheritLoadingContent: {
      get () {
        return this.theme.config.loadingContent == null
      },
      set (value) {
        this.theme.config.loadingContent = value ? undefined : '...'
      },
    },
  },

  watch: {
    tab: storeValue.bind(null, TAB_KEY),
  },

  created () {
    this.placements = placements
    this.triggers = Object.keys(SHOW_EVENT_MAP)

    loadValue(TAB_KEY, value => {
      this.tab = value
    })
  },
}
</script>

<template>
  <div class="overflow-auto flex flex-col items-stretch">
    <div class="text-gray-500 flex items-center border-b border-gray-100">
      <ToolIcon class="w-4 h-4 mx-2" />
      <span class="flex-1">
        Theme Configuration
      </span>

      <Tabs
        v-model="tab"
        :tabs="[
          { id: 'general', label: 'General' },
          { id: 'display', label: 'Display' },
          { id: 'position', label: 'Position' },
          { id: 'directive', label: 'Directive '},
        ]"
      />
    </div>

    <template v-if="tab === 'general'">
      <div class="flex space-x-1 hover:bg-gray-50 p-2">
        <span>Theme name:</span>
        <input
          v-model="theme.name"
          class="w-0 flex-1 border border-gray-300 rounded px-1"
        >
      </div>

      <div class="flex space-x-1 hover:bg-gray-50 p-2">
        <label for="extend">Inherit another theme:</label>
        <select
          id="extend"
          v-model="theme.config.$extend"
          class="flex-1"
        >
          <option
            :value="undefined"
          >
            No extend
          </option>
          <option
            v-for="t of otherThemes"
            :key="t"
            :value="t"
          >
            Extends '{{ t }}' theme
          </option>
        </select>
      </div>

      <div class="flex space-x-3 hover:bg-gray-50 p-2">
        <span>Reset CSS:</span>
        <label
          v-for="value of [undefined, true, false]"
          :key="value"
          class="flex items-center space-x-1"
        >
          <input
            v-model="theme.config.$resetCss"
            type="radio"
            :value="value"
          >
          <span>{{ value != null ? value : '(inherit)' }}</span>
        </label>
      </div>
    </template>

    <template v-if="tab === 'display'">
      <div class="flex space-x-3 hover:bg-gray-50 p-2">
        <span>Triggers:</span>
        <label class="flex items-center space-x-1">
          <input
            v-model="inheritTriggers"
            type="checkbox"
          >
          <span>(inherit)</span>
        </label>
        <template v-if="!inheritTriggers">
          <label
            v-for="trigger of triggers"
            :key="trigger"
            class="flex items-center space-x-1"
          >
            <input
              v-model="theme.config.triggers"
              type="checkbox"
              :value="trigger"
            >
            <span>{{ trigger }}</span>
          </label>
        </template>
      </div>

      <div class="flex space-x-3 hover:bg-gray-50 p-2">
        <span>Delay (ms):</span>
        <label class="flex items-center space-x-1">
          <input
            v-model="inheritDelay"
            type="checkbox"
          >
          <span>(inherit)</span>
        </label>
        <template v-if="!inheritDelay">
          <label for="showDelay">Show:</label>
          <input
            id="showDelay"
            v-model.number="theme.config.delay.show"
            type="number"
            class="w-0 flex-1"
          >
          <input
            v-model.number="theme.config.delay.show"
            type="range"
            min="0"
            max="3000"
            step="100"
            class="w-0 flex-1"
          >
          <label for="hideDelay">Hide:</label>
          <input
            id="hideDelay"
            v-model.number="theme.config.delay.hide"
            type="number"
            class="w-0 flex-1"
          >
          <input
            v-model.number="theme.config.delay.hide"
            type="range"
            min="0"
            max="3000"
            step="100"
            class="w-0 flex-1"
          >
        </template>
      </div>

      <div class="flex space-x-3 hover:bg-gray-50 p-2">
        <span>Auto hide:</span>
        <label
          v-for="value of [undefined, true, false]"
          :key="value"
          class="flex items-center space-x-1"
        >
          <input
            v-model="theme.config.autoHide"
            type="radio"
            :value="value"
          >
          <span>{{ value != null ? value : '(inherit)' }}</span>
        </label>
      </div>

      <div class="flex space-x-3 hover:bg-gray-50 p-2">
        <span>Eager mount:</span>
        <label
          v-for="value of [undefined, true, false]"
          :key="value"
          class="flex items-center space-x-1"
        >
          <input
            v-model="theme.config.eagerMount"
            type="radio"
            :value="value"
          >
          <span>{{ value != null ? value : '(inherit)' }}</span>
        </label>
      </div>
    </template>

    <template v-if="tab === 'position'">
      <div class="flex space-x-1 hover:bg-gray-50 p-2">
        <label for="placement">Placement:</label>
        <select
          id="placement"
          v-model="theme.config.placement"
          class="flex-1"
        >
          <option
            :value="undefined"
          >
            (inherit)
          </option>
          <option
            v-for="value of placements"
            :key="value"
            :value="value"
          >
            {{ value }}
          </option>
        </select>
      </div>

      <div class="flex space-x-3 hover:bg-gray-50 p-2">
        <span>Strategy:</span>
        <label
          v-for="value of [undefined, 'absolute', 'fixed']"
          :key="value"
          class="flex items-center space-x-1"
        >
          <input
            v-model="theme.config.strategy"
            type="radio"
            :value="value"
          >
          <span>{{ value || '(inherit)' }}</span>
        </label>
      </div>

      <div class="flex space-x-3 hover:bg-gray-50 p-2">
        <span>Offset (px):</span>
        <label class="flex items-center space-x-1">
          <input
            v-model="inheritOffset"
            type="checkbox"
          >
          <span>(inherit)</span>
        </label>
        <template v-if="!inheritOffset">
          <label for="skidding">Skidding:</label>
          <input
            id="skidding"
            v-model.number="theme.config.offset[0]"
            type="number"
            class="w-0 flex-1"
          >
          <input
            v-model.number="theme.config.offset[0]"
            type="range"
            min="-32"
            max="64"
            class="w-0 flex-1"
          >
          <label for="distance">Distance:</label>
          <input
            id="distance"
            v-model.number="theme.config.offset[1]"
            type="number"
            class="w-0 flex-1"
          >
          <input
            v-model.number="theme.config.offset[1]"
            type="range"
            min="-32"
            max="64"
            class="w-0 flex-1"
          >
        </template>
      </div>

      <div class="flex space-x-3 hover:bg-gray-50 p-2">
        <span>Instant move:</span>
        <label
          v-for="value of [undefined, true, false]"
          :key="value"
          class="flex items-center space-x-1"
        >
          <input
            v-model="theme.config.instantMove"
            type="radio"
            :value="value"
          >
          <span>{{ value != null ? value : '(inherit)' }}</span>
        </label>
      </div>

      <div class="flex space-x-3 hover:bg-gray-50 p-2">
        <span>Handle resize:</span>
        <label
          v-for="value of [undefined, true, false]"
          :key="value"
          class="flex items-center space-x-1"
        >
          <input
            v-model="theme.config.handleResize"
            type="radio"
            :value="value"
          >
          <span>{{ value != null ? value : '(inherit)' }}</span>
        </label>
      </div>

      <div class="flex space-x-3 hover:bg-gray-50 p-2">
        <span>Compute transform origin:</span>
        <label
          v-for="value of [undefined, true, false]"
          :key="value"
          class="flex items-center space-x-1"
        >
          <input
            v-model="theme.config.computeTransformOrigin"
            type="radio"
            :value="value"
          >
          <span>{{ value != null ? value : '(inherit)' }}</span>
        </label>
      </div>

      <div class="flex space-x-3 hover:bg-gray-50 p-2">
        <span>Auto min size:</span>
        <label
          v-for="value of [undefined, true, false]"
          :key="value"
          class="flex items-center space-x-1"
        >
          <input
            v-model="theme.config.autoMinSize"
            type="radio"
            :value="value"
          >
          <span>{{ value != null ? value : '(inherit)' }}</span>
        </label>
      </div>
    </template>

    <template v-if="tab === 'directive'">
      <div class="flex space-x-3 hover:bg-gray-50 p-2">
        <span>Allow HTML content:</span>
        <label
          v-for="value of [undefined, true, false]"
          :key="value"
          class="flex items-center space-x-1"
        >
          <input
            v-model="theme.config.html"
            type="radio"
            :value="value"
          >
          <span>{{ value != null ? value : '(inherit)' }}</span>
        </label>
      </div>

      <div class="flex space-x-1 hover:bg-gray-50 p-2">
        <span>Loading placeholder content:</span>
        <label class="flex items-center space-x-1">
          <input
            v-model="inheritLoadingContent"
            type="checkbox"
          >
          <span>(inherit)</span>
        </label>
        <input
          v-if="!inheritLoadingContent"
          v-model="theme.config.loadingContent"
          class="w-0 flex-1 border border-gray-300 rounded px-1"
        >
      </div>
    </template>
  </div>
</template>
