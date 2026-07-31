<script setup>
import { computed, onBeforeUnmount, onErrorCaptured, onMounted, ref, watch } from 'vue'
import { state } from './state'

const uid = ref(0)
const ready = ref(false)
const shown = ref([true, false, false])
const sandbox = ref(null)
const theme = computed(() => state.theme)
const settings = computed(() => state.settings)
const allStyleOutput = computed(() => state.allStyleOutput)
let style

watch(() => theme.value.config, () => {
  uid.value++
}, { deep: true })

watch(allStyleOutput, value => {
  if (style) {
    style.innerHTML = value
  }
}, { immediate: true })

onMounted(() => {
  ready.value = true
  style = document.createElement('style')
  document.head.appendChild(style)
})

onBeforeUnmount(() => {
  style?.remove()
})

onErrorCaptured(e => {
  state.error = e.message
})
</script>

<template>
  <div
    class="sandbox flex flex-col items-stretch"
    :class="{
      [settings.darkClass]: settings.darkMode,
    }"
  >
    <div class="flex-none border-b border-gray-100 dark:border-gray-800 p-1 flex items-center space-x-2 overflow-x-auto">
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
            :preset="theme.name"
            :container="sandbox"
            :boundary="sandbox"
            :shown="shown[n - 1]"
            :auto-hide="settings.ignoreAutoHide ? false : undefined"
            @update:shown="value => shown[n - 1] = value"
          >
            <button class="border border-gray-300 dark:border-gray-700 rounded px-4 py-2">
              Reference
            </button>

            <template #popper>
              <textarea
                v-if="settings.editablePopper"
                rows="1"
                class="bg-emerald-50 text-emerald-900 border border-emerald-100 p-1 rounded resize"
              >Popper content here</textarea>
              <div v-else>
                Popper content here
              </div>
            </template>
          </VDropdown>
        </template>
      </div>
    </div>
  </div>
</template>
