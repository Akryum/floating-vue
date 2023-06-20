<script>
import ThemeButton from './ThemeButton.vue'
import ThemeInput from './ThemeInput.vue'
import ThemeModal from './ThemeModal.vue'
import { createNewTheme, state } from './state'
import { builtinThemes } from './builtin-themes'

export default {
  components: {
    ThemeModal,
    ThemeButton,
    ThemeInput,
  },

  data () {
    return {
      name: '',
      error: null,
    }
  },

  methods: {
    createNewTheme () {
      this.error = null
      if (!this.name) return

      // Validation
      if (builtinThemes.includes(this.name)) {
        this.error = 'This name is reserved for built-in themes.'
      } else if (this.name in state.themeMap) {
        this.error = 'A theme with this name already exists.'
      }

      if (this.error) return
      createNewTheme({
        name: this.name,
      })
      this.close()
    },

    close () {
      this.$emit('close')
    },
  },
}
</script>

<template>
  <ThemeModal>
    <div class="text-lg border-b border-gray-100 dark:border-gray-800">
      Create theme
    </div>

    <div class="space-y-2 w-96">
      <ThemeInput
        v-model="name"
        placeholder="Theme name"
        auto-focus
        @keyup.enter="createNewTheme()"
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
        @click="createNewTheme()"
      >
        Create theme
      </ThemeButton>
    </template>
  </ThemeModal>
</template>
