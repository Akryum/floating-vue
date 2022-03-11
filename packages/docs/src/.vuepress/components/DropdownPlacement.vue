<template>
  <div class="example flex flex-col space-y-16 items-center pt-12">
    <VDropdown
      v-bind="{
        placement,
        triggers: [],
        shown: true,
        preventOverflow: false,
        arrowPadding: 8,
        autoHide: false,
      }"
      @show="log('show')"
      @apply-show="log('apply-show')"
      @hide="log('hide')"
      @apply-hide="log('apply-hide')"
      @update:shown="log('update:shown', $event)"
    >
      <button
        class="border border-gray-300 rounded px-4 py-3 text-xl"
      >
        🐈️
      </button>

      <template #popper>
        <div class="p-2">
          {{ placement }}
        </div>
      </template>
    </VDropdown>

    <select
      v-model="placement"
      class="bg-gray-300 rounded px-4 py-2"
    >
      <option
        v-for="p of placements"
        :key="p"
        :value="p"
      >
        {{ p }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      placement: 'auto',
    }
  },

  computed: {
    placements () {
      const primary = ['auto', 'top', 'right', 'bottom', 'left']
      const secondary = ['', '-start', '-end']
      const list = []
      for (const p of primary) {
        for (const s of secondary) {
          list.push(`${p}${s}`)
        }
      }
      return list
    },
  },

  methods: {
    log (...args) {
      console.log(...args)
    },
  },
}
</script>
