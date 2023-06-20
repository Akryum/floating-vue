
<script>
import FloatingVue from 'floating-vue'
import AlertTriangleIcon from '~icons/lucide/alert-triangle'
import SettingsIcon from '~icons/lucide/settings'
import EyeIcon from '~icons/lucide/eye'
import CodeIcon from '~icons/lucide/code'
import PlusIcon from '~icons/lucide/plus'
import { loadSettings, loadLastTheme, mapState, loadThemes } from './state'
import Sandbox from './Sandbox.vue'
import StyleEditor from './StyleEditor.vue'
import ConfigEditor from './ConfigEditor.vue'
import Tabs from './Tabs.vue'
import ThemesExplorer from './ThemesExplorer.vue'
import CreateTheme from './CreateTheme.vue'
import ThemeButton from './ThemeButton.vue'
import { loadValue, storeValue } from './util'

const OUTPUT_TAB_KEY = 'v-tooltip.theme-editor.output-tab'

export default {
  components: {
    AlertTriangleIcon,
    SettingsIcon,
    PlusIcon,
    Sandbox,
    StyleEditor,
    ConfigEditor,
    Tabs,
    ThemesExplorer,
    CreateTheme,
    ThemeButton,
  },

  data () {
    return {
      outputTab: 'sandbox',
      createThemeOpen: false,
    }
  },

  computed: {
    ...mapState([
      'theme',
      'error',
      'settings',
      'sourceOutput',
      'styleOutput',
    ]),
  },

  watch: {
    outputTab: storeValue.bind(null, OUTPUT_TAB_KEY),
  },

  beforeCreate () {
    loadSettings()
    loadThemes()
    loadLastTheme()
  },

  created () {
    this.version = FloatingVue.version

    Object.assign(this, {
      EyeIcon,
      CodeIcon,
    })

    loadValue(OUTPUT_TAB_KEY, value => {
      this.outputTab = value
    })
  },

  methods: {
    openCreateTheme () {
      this.createThemeOpen = true
    },
  },
}
</script>

<template>
  <div class="theme-editor h-full flex flex-col items-stretch text-sm border-t border-gray-200 dark:border-gray-700">
    <div class="flex-1 flex items-stretch !md:flex-col md:divide-x divide-gray-200 dark:divide-gray-700 overflow-hidden">
      <ThemesExplorer
        class="w-1/6"
        @create="openCreateTheme()"
      />

      <div class="flex-1 flex flex-col overflow-hidden divide-y divide-gray-200 dark:divide-gray-700">
        <template v-if="theme">
          <ConfigEditor
            class="flex-1"
          />

          <StyleEditor
            class="flex-1"
          />
        </template>

        <div
          v-else
          class="flex-1 flex flex-col items-center justify-center space-y-6"
        >
          <img
            src="/logo.png"
            alt="v-tooltip logo"
            class="max-w-32"
          >
          <div class="text-gray-500 text-lg">
            Select a theme or create a new one to get started
          </div>
          <ThemeButton
            class="px-4 py-3"
            @click="openCreateTheme()"
          >
            <PlusIcon class="w-4 h-4 mr-2" />
            New theme
          </ThemeButton>
        </div>
      </div>

      <div class="flex-1 flex flex-col items-stretch">
        <template v-if="theme">
          <Tabs
            v-model="outputTab"
            :tabs="[
              { id: 'sandbox', label: 'Preview', icon: EyeIcon },
              { id: 'source', label: 'Code Output', icon: CodeIcon },
            ]"
            class="border-b border-gray-100 dark:border-gray-800"
          />

          <Sandbox
            v-show="outputTab === 'sandbox'"
            class="flex-1"
          />

          <div
            v-if="outputTab === 'source'"
            class="flex-1 flex flex-col items-stretch divide-y divide-gray-100 dark:divide-gray-900"
          >
            <textarea
              :value="sourceOutput"
              readonly
              class="flex-1 font-mono p-4 resize-none"
            />
            <textarea
              :value="styleOutput"
              readonly
              class="flex-1 font-mono p-4 resize-none"
            />
          </div>
        </template>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer flex-none flex items-center border-t border-gray-200 dark:border-gray-700 text-xs">
      <div class="px-4 py-1 text-gray-600 dark:text-gray-400">
        floating-vue <span class="text-black dark:text-white">v{{ version }}</span>
      </div>

      <div
        v-if="error"
        class="px-4 py-1 text-red-500 flex items-center space-x-2"
      >
        <AlertTriangleIcon
          class="w-4 h-4"
        />
        <span>{{ error }}</span>
      </div>

      <div class="flex-1" />

      <VDropdown
        placement="top-end"
        class="h-full"
      >
        <ThemeButton
          v-tooltip="'Settings'"
          class="px-4 py-1 h-full !rounded-none hover:bg-emerald-200 dark:bg-emerald-800 dark:text-white dark:hover:bg-emerald-700"
        >
          <SettingsIcon
            class="w-4 h-4"
          />
        </ThemeButton>

        <template #popper>
          <div class="flex flex-col space-y-2 text-sm p-4">
            <div>
              <label
                for="darkClass"
                class="block text-gray-600"
              >Class for dark mode</label>
              <input
                id="darkClass"
                v-model="settings.darkClass"
                class="block w-full border border-gray-300 rounded px-1"
              >
            </div>

            <label class="flex space-x-1 select-none">
              <input
                v-model="settings.darkBlackBg"
                type="checkbox"
              >
              <span>Use black for dark background</span>
            </label>
          </div>
        </template>
      </VDropdown>
    </div>

    <CreateTheme
      v-if="createThemeOpen"
      @close="createThemeOpen = false"
    />
  </div>
</template>

<style lang="postcss" scoped>
.footer {
  height: 32px;
}
</style>
