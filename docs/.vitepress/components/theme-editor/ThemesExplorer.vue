<script>
import SearchIcon from '~icons/lucide/search'
import PlusIcon from '~icons/lucide/plus'
import MoreVerticalIcon from '~icons/lucide/more-vertical'
import Trash2Icon from '~icons/lucide/trash-2'
import ThemeButton from './ThemeButton.vue'
import ThemeModal from './ThemeModal.vue'
import { mapState, loadTheme, deleteTheme } from './state'

export default {
  components: {
    SearchIcon,
    PlusIcon,
    MoreVerticalIcon,
    Trash2Icon,
    ThemeButton,
    ThemeModal,
  },

  data () {
    return {
      searchText: '',
      confirmDeleteTheme: null,
    }
  },

  computed: {
    ...mapState([
      'themes',
      'theme',
    ]),

    filteredThemes () {
      if (!this.searchText) {
        return this.themes
      } else {
        const reg = new RegExp(this.searchText.trim().replace(/\s+/g, '|'), 'gi')
        return this.themes.filter(t => reg.test(t.name))
      }
    },
  },

  methods: {
    loadTheme,

    deleteTheme () {
      deleteTheme(this.confirmDeleteTheme)
      this.confirmDeleteTheme = null
    },
  },
}
</script>

<template>
  <div class="flex flex-col">
    <div class="flex-none flex items-center border-b border-gray-100 dark:border-gray-800">
      <SearchIcon class="flex-none w-4 h-4 ml-4 -mr-6 relative z-10 pointer-events-none text-gray-500" />

      <input
        v-model="searchText"
        placeholder="Filter themes..."
        class="flex-1 w-0 pl-8 py-2"
      >

      <button
        v-tooltip.bottom="'Create a new theme...'"
        class="flex-none px-3 h-full text-gray-500 hover:text-black hover:bg-emerald-100 dark:hover:text-white dark:hover:bg-emerald-800"
        @click="$emit('create')"
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
          theme="_editor-dropdown"
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
        Confirm deleting theme '{{ confirmDeleteTheme.name }}'?
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
          Delete theme
        </ThemeButton>
      </template>
    </ThemeModal>
  </div>
</template>
