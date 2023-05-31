<template>
  <div class="example flex flex-col  items-center space-y-6">
    <button
      v-tooltip="{
        content,
        html: true,
        placement: 'right',
        triggers: [],
        shown: true,
        preventOverflow: false,
      }"
      class="border border-gray-300 rounded px-4 py-2"
    >
      Reference
    </button>

    <textarea
      v-model="content"
      class="resize-y w-full p-4 rounded font-mono border border-gray-300"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: '<b>Bold</b>',
    }
  },
}
</script>
