<script setup>
import { ref } from 'vue'
import ThemeButton from './ThemeButton.vue'
import ThemeInput from './ThemeInput.vue'
import ThemeModal from './ThemeModal.vue'
import { createNewTheme, state } from './state'
import { builtinThemes } from './builtin-themes'

const emit = defineEmits(['close'])
const name = ref('')
const error = ref(null)

function createTheme () {
  error.value = null
  if (!name.value) return

  if (builtinThemes.includes(name.value)) {
    error.value = 'This name is reserved for built-in presets.'
  } else if (name.value in state.themeMap) {
    error.value = 'A preset with this name already exists.'
  }

  if (error.value) return
  createNewTheme({
    name: name.value,
  })
  close()
}

function close () {
  emit('close')
}
</script>

<template>
  <ThemeModal>
    <div class="text-lg border-b border-gray-100 dark:border-gray-800">
      Create preset
    </div>

    <div class="space-y-2 w-96">
      <ThemeInput
        v-model="name"
        placeholder="Preset name"
        auto-focus
        @keyup.enter="createTheme()"
      />

      <div
        v-if="error"
        class="text-red-500"
      >
        {{ error }}
      </div>
    </div>

    <template #actions>
      <ThemeButton
        color="gray"
        class="flex-1 p-2"
        @click="close()"
      >
        Cancel
      </ThemeButton>

      <ThemeButton
        class="flex-1 p-2"
        @click="createTheme()"
      >
        Create preset
      </ThemeButton>
    </template>
  </ThemeModal>
</template>
