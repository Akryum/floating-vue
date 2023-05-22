<script>
let count = 0

export default {
  data () {
    return {
      isMobile: false,
    }
  },

  methods: {
    onShow () {
      if (count === 0) {
        document.body.classList.add('no-scroll')
      }
      count++
    },

    onHide () {
      count--
      if (count === 0) {
        document.body.classList.remove('no-scroll')
      }
    },
  },
}
</script>

<template>
  <div class="example flex flex-col items-center justify-center space-y-6">
    <label>
      <input
        v-model="isMobile"
        type="checkbox"
      >
      Is mobile
    </label>

    <VDropdown
      :positioning-disabled="isMobile"
      @apply-show="isMobile && onShow()"
      @apply-hide="isMobile && onHide()"
    >
      <button class="border border-gray-300 rounded px-4 py-2">
        Click me
      </button>

      <template #popper="{ hide }">
        <div class="p-6 space-y-6">
          <div>This is awesome!</div>

          <div v-if="isMobile">
            <button
              class="bg-gray-300 rounded px-4 py-2 w-full"
              @click="hide()"
            >
              Cancel
            </button>
          </div>
        </div>
      </template>
    </VDropdown>
  </div>
</template>

<style>
body.no-scroll {
  overflow: hidden;
}

.v-popper__popper--no-positioning {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
}

.v-popper__popper--no-positioning .v-popper__backdrop {
  display: block;
  background: rgba(0 0 0 / 90%);
}

.v-popper__popper--no-positioning .v-popper__wrapper {
  width: 100%;
  pointer-events: auto;
  transition: transform .15s ease-out;
  padding: 12px;
}

.v-popper__popper--no-positioning.v-popper__popper--hidden .v-popper__wrapper {
  transform: translateY(100%);
}

</style>
