<template>
  <div class="example flex flex-col space-y-6 items-center">
    <button
      :key="id"
      v-tooltip="{
        content: asyncMethod,
        loadingContent: 'Please wait...',
      }"
      class="border border-gray-300 rounded px-4 py-2"
    >
      Hover me!
    </button>

    <button
      class="border border-gray-300 rounded px-4 py-2"
      @click="id++"
    >
      Reset
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: 0,
    }
  },

  methods: {
    asyncMethod () {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('I\'m a message loaded asynchronously')
        }, 2000)
      })
    },
  },
}
</script>

<style>
.v-popper--tooltip-loading .v-popper__inner {
  color: #77aaff;
}
</style>
