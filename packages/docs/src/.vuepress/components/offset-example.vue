<template>
  <div class="example space-y-6">
    <VDropdown
      :triggers="[]"
      :shown="true"
      :autoHide="false"
      placement="right"
      :offset="tempOffset"
      :modifiers="[
        { name: 'preventOverflow', enabled: false }
      ]"
    >
      <button class="p-16 bg-gray-500 text-white rounded-lg">Reference</button>

      <template #popper>
        <div>Offset: {{ tempOffset }}</div>
        <div v-if="info" class="text-sm text-gray-500">{{ info }}</div>
      </template>
    </VDropdown>

    <div class="flex items-center space-x-6">
      <input
        v-model.number="tempOffset[0]"
        type="range"
        min="-32"
        max="32"
      >

      <input
        v-model.number="tempOffset[1]"
        type="range"
        min="-64"
        max="64"
      >

      <button
        class="border border-gray-300 rounded px-2"
        @click="tempOffset = [...offset]"
      >
        Reset
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['offset', 'info'],

  data () {
    return {
      tempOffset: [...this.offset]
    }
  }
}
</script>