<template>
  <div class="example flex justify-center items-center gap-6">
    <VDropdown placement="bottom-start">
      <button class="border border-gray-300 rounded px-4 py-2">
        Click me
      </button>

      <template #popper>
        <div class="px-4 py-1">
          Nested Dropdowns
        </div>

        <VDropdown
          placement="right-start"
          v-bind:hideParents="false"
          instant-move
        >
          <button class="rounded hover:bg-green-100 px-4 py-2">
            Nested Dropdown #1
          </button>
          <br>

          <template #popper="{ hide }">
            <button class="rounded hover:bg-green-100 px-4 py-2" @click="hide()">
              I won't close my parent(s)
            </button>
          </template>
        </VDropdown>

        <VDropdown
          placement="right-start"
          instant-move
        >
          <button class="rounded hover:bg-green-100 px-4 py-2">
            Nested Dropdown #2
          </button>
          <br>

          <template #popper="{ hide }">
            <button class="rounded hover:bg-green-100 px-4 py-2" @click="hide()">
              But I will!
            </button>
          </template>
        </VDropdown>
      </template>
    </VDropdown>
  </div>
</template>
