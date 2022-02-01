<script>
import Button from './Button.vue'
import Input from './Input.vue'
import Modal from './Modal.vue'
import { createNewTheme, state } from './state'
import { builtinThemes } from './builtin-themes'

export default {
  components: { Modal, Button, Input },

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
  <Modal>
    <div class="text-lg border-b border-gray-100">
      Create theme
    </div>

    <div class="space-y-2 w-96">
      <Input
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
      <Button
        color="gray"
        class="flex-1 p-2"
        @click="close()"
      >
        Cancel
      </Button>

      <Button
        class="flex-1 p-2"
        @click="createNewTheme()"
      >
        Create theme
      </Button>
    </template>
  </Modal>
</template>
