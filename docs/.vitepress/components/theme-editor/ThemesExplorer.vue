<script setup>
import { computed, ref } from 'vue'
import SearchIcon from '~icons/lucide/search'
import PlusIcon from '~icons/lucide/plus'
import MoreVerticalIcon from '~icons/lucide/more-vertical'
import Trash2Icon from '~icons/lucide/trash-2'
import ThemeButton from './ThemeButton.vue'
import ThemeModal from './ThemeModal.vue'
import { state, loadTheme, deleteTheme as deleteThemeFromState } from './state'

const searchText = ref('')
const confirmDeleteTheme = ref(null)
const emit = defineEmits(['create'])
const themes = computed(() => state.themes)
const theme = computed(() => state.theme)
const filteredThemes = computed(() => {
  if (!searchText.value) {
    return themes.value
  }

  const reg = new RegExp(searchText.value.trim().replace(/\s+/g, '|'), 'gi')
  return themes.value.filter(t => reg.test(t.name))
})

function deleteTheme () {
  deleteThemeFromState(confirmDeleteTheme.value)
  confirmDeleteTheme.value = null
}
</script>

<template>
  <div class="flex flex-col">
    <div class="flex-none flex items-center border-b border-gray-100 dark:border-gray-800">
      <SearchIcon class="flex-none w-4 h-4 ml-4 -mr-6 relative z-10 pointer-events-none text-gray-500" />

      <input
        v-model="searchText"
        placeholder="Filter presets..."
        class="flex-1 w-0 pl-8 py-2"
      >

      <button
        v-tooltip.bottom="'Create a new preset...'"
        class="flex-none px-3 h-full text-gray-500 hover:text-black hover:bg-emerald-100 dark:hover:text-white dark:hover:bg-emerald-800"
        @click="emit('create')"
      >
        <PlusIcon class="w-4 h-4" />
      </button>
    </div>

    <div class="flex-1 overflow-y-auto">
      <div
        v-for="t of filteredThemes"
        :key="t.name"
        class="flex items-stretch hover:bg-emerald-100 dark:hover:bg-emerald-800"
        :class="{
          'bg-emerald-50 dark:bg-emerald-700 text-emerald-500 dark:text-emerald-200 font-medium': theme === t,
        }"
      >
        <button
          class="px-4 py-2 flex-1 text-left"
          @click="loadTheme(t.name)"
        >
          {{ t.name }}
        </button>

        <VDropdown
          preset="_editor-dropdown"
          placement="right-start"
        >
          <button class="px-3 h-full">
            <MoreVerticalIcon
              class="w-4 h-4"
            />
          </button>

          <template #popper>
            <ThemeButton
              v-close-popper
              color="red"
              flat
              class="px-4 py-2"
              @click="confirmDeleteTheme = t"
            >
              <Trash2Icon class="w-4 h-4 mr-2" />
              Delete
            </ThemeButton>
          </template>
        </VDropdown>
      </div>
    </div>

    <ThemeModal
      v-if="confirmDeleteTheme"
    >
      <div class="text-lg">
        <Trash2Icon class="w-5 h-5 mr-1 inline-block" />
        Confirm deleting preset '{{ confirmDeleteTheme.name }}'?
      </div>

      <template #actions>
        <ThemeButton
          color="gray"
          class="flex-1 p-2"
          @click="confirmDeleteTheme = null"
        >
          Cancel
        </ThemeButton>

        <ThemeButton
          color="red"
          class="flex-1 p-2"
          @click="deleteTheme()"
        >
          Delete preset
        </ThemeButton>
      </template>
    </ThemeModal>
  </div>
</template>
