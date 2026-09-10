<template>
  <div class="example flex justify-center items-center gap-6">
    <VMenu placement="bottom-start">
      <button class="border border-gray-300 rounded px-4 py-2">
        Hover me
      </button>

      <template #popper>
        <div class="px-4 py-1">
          Sub menus:
        </div>

        <VMenu
          v-for="n in 5"
          :key="n"
          placement="right-start"
          instant-move
        >
          <button class="rounded hover:bg-green-100 px-4 py-2">
            Sub menu >
          </button>

          <template #popper>
            <VMenu
              v-for="m in 5"
              :key="m"
              placement="right-start"
              instant-move
            >
              <button class="rounded hover:bg-green-100 px-4 py-2 w-full">
                Option {{ m }} >
              </button>

              <template #popper>
                <div class="px-6 py-2">
                  Hello
                </div>
              </template>
            </VMenu>
          </template>
        </VMenu>
      </template>
    </VMenu>

    <VDropdown placement="bottom-start">
      <button class="border border-gray-300 rounded px-4 py-2">
        Click me
      </button>

      <template #popper="{ hide }">
        <div class="px-4 py-1">
          Sub menus:
        </div>

        <VDropdown
          v-for="n in 5"
          :key="n"
          placement="right-start"
          instant-move
        >
          <button class="rounded hover:bg-green-100 px-4 py-2">
            Sub menu >
          </button>

          <template #popper="{ hide: hideLevel2 }">
            <VDropdown
              v-for="m in 5"
              :key="m"
              placement="right-start"
              instant-move
            >
              <button class="rounded hover:bg-green-100 px-4 py-2">
                Option {{ m }} >
              </button>

              <template #popper="{ hide: hideLevel3 }">
                <div class="px-6 py-2 text-center">
                  Hello
                  <button
                    class="rounded hover:bg-red-100 px-4 py-2 w-full mt-2"
                    @click="hideLevel3"
                  >
                    Hide
                  </button>
                </div>
              </template>
            </VDropdown>
            <button
              class="rounded hover:bg-red-100 px-4 py-2 w-full text-left"
              @click="hideLevel2"
            >
              Hide
            </button>
          </template>
        </VDropdown>

        <button
          class="rounded hover:bg-red-100 px-4 py-2 w-full text-left"
          @click="hide"
        >
          Hide
        </button>
      </template>
    </VDropdown>
  </div>
</template>
