<template>
  <div class="example flex justify-center items-center gap-6">
    <VMenu placement="bottom-start">
      <button class="border border-gray-300 rounded px-4 py-2" data-test="menu-root">
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
              v-for="n in 5"
              :key="n"
              placement="right-start"
              instant-move
            >
              <button class="rounded hover:bg-green-100 px-4 py-2">
                Option {{ n }} >
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
      <button class="border border-gray-300 rounded px-4 py-2" data-test="dropdown-root">
        Click me
      </button>

      <template #popper>
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

          <template #popper>
            <VDropdown
              v-for="n in 5"
              :key="n"
              placement="right-start"
              instant-move
            >
              <button class="rounded hover:bg-green-100 px-4 py-2">
                Option {{ n }} >
              </button>

              <template #popper="{ hide }">
                <div class="px-6 py-2 text-center">
                  Hello
                  <button
                    class="rounded hover:bg-red-100 px-4 py-2 w-full mt-2"
                    data-test="nested-dropdown-hide"
                    @click="hide"
                  >
                    Hide
                  </button>
                </div>
              </template>
            </VDropdown>
          </template>
        </VDropdown>
      </template>
    </VDropdown>
  </div>
</template>
