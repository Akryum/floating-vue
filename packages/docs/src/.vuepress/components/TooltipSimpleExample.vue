<template>
  <div class="example flex justify-center py-12">
    <button
      v-tooltip="'You have ' + count + ' new messages.'"
      class="border border-gray-300 rounded px-4 py-2"
    >
      Mouse over me
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
    }
  },

  mounted () {
    this.timer = setInterval(() => {
      this.count++
    }, 1000)
  },

  destroyed () {
    clearInterval(this.timer)
  },
}
</script>
