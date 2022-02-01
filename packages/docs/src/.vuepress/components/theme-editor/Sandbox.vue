<script>
import { mapState, state } from './state'

export default {
  data () {
    return {
      uid: 0,
      ready: false,
      shown: [true, false, false],
    }
  },

  computed: {
    ...mapState([
      'theme',
      'settings',
      'allStyleOutput',
    ]),
  },

  watch: {
    'theme.config': {
      handler () {
        this.uid++
      },
      deep: true,
    },
  },

  mounted () {
    this.ready = true
  },

  errorCaptured (e) {
    state.error = e.message
  },
}
</script>

<template>
  <div
    class="sandbox flex flex-col items-stretch"
    :class="{
      [settings.darkClass]: settings.darkMode,
    }"
  >
    <div class="flex-none border-b border-gray-100 p-1 flex items-center space-x-2 overflow-x-auto">
      <span>Shown:</span>
      <label
        v-for="n in 3"
        :key="n"
        class="flex items-center space-x-1 select-none"
      >
        <input
          v-model="shown[n - 1]"
          type="checkbox"
        >
        <span>{{ n }}</span>
      </label>

      <label class="flex-none flex items-center space-x-1 select-none">
        <input
          v-model="settings.ignoreAutoHide"
          type="checkbox"
        >
        <span>Ignore auto hide</span>
      </label>

      <label class="flex-none flex items-center space-x-1 select-none">
        <input
          v-model="settings.darkMode"
          type="checkbox"
        >
        <span>Dark mode</span>
      </label>

      <label class="flex-none flex items-center space-x-1 select-none">
        <input
          v-model="settings.vertical"
          type="checkbox"
        >
        <span>Vertical</span>
      </label>

      <label class="flex-none flex items-center space-x-1 select-none">
        <input
          v-model="settings.editablePopper"
          type="checkbox"
        >
        <span>Editable</span>
      </label>
    </div>

    <div
      ref="sandbox"
      class="flex-1"
      :class="{
        'dark': settings.darkMode,
        [settings.darkClass]: settings.darkMode,
      }"
    >
      <div
        class="h-full flex items-center justify-center dark:text-white"
        :class="[
          settings.darkBlackBg ? 'dark:bg-black' : 'dark:bg-gray-900',
          settings.vertical ? 'flex-col space-y-2' : 'space-x-2',
        ]"
      >
        <template v-if="ready">
          <VDropdown
            v-for="n in 3"
            :key="uid + ':' + n"
            :theme="theme.name"
            :container="$refs.sandbox"
            :boundary="$refs.sandbox"
            :shown.sync="shown[n - 1]"
            :auto-hide="settings.ignoreAutoHide ? false : undefined"
          >
            <button class="border border-gray-300 dark:border-gray-700 rounded px-4 py-2">
              Reference
            </button>

            <template #popper>
              <textarea
                v-if="settings.editablePopper"
                rows="1"
                class="bg-green-50 text-green-900 border border-green-100 p-1 rounded resize"
              >Popper content here</textarea>
              <div v-else>
                Popper content here
              </div>
            </template>
          </VDropdown>
        </template>
      </div>
    </div>

    <style v-text="allStyleOutput" />
  </div>
</template>
