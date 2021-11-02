<script>
import {
  SearchIcon,
  PlusIcon,
  MoreVerticalIcon,
  Trash2Icon,
} from 'vue-feather-icons'
import Button from './Button.vue'
import Modal from './Modal.vue'
import { mapState, loadTheme, deleteTheme } from './state'

export default {
  components: {
    SearchIcon,
    PlusIcon,
    MoreVerticalIcon,
    Trash2Icon,
    Button,
    Modal,
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
    <div class="flex-none flex items-center border-b border-gray-100">
      <SearchIcon class="flex-none w-4 h-4 ml-4 -mr-6 relative z-10 pointer-events-none text-gray-500" />

      <input
        v-model="searchText"
        placeholder="Filter themes..."
        class="flex-1 w-0 pl-8 py-2"
      >

      <button
        v-tooltip.bottom="'Create a new theme...'"
        class="flex-none px-3 h-full text-gray-500 hover:text-black hover:bg-green-100"
        @click="$emit('create')"
      >
        <PlusIcon class="w-4 h-4" />
      </button>
    </div>

    <div class="flex-1 overflow-y-auto">
      <div
        v-for="t of filteredThemes"
        :key="t.name"
        class="flex items-stretch hover:bg-green-100"
        :class="{
          'bg-green-50 text-green-500 font-medium': theme === t,
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
            <Button
              v-close-popper
              color="red"
              flat
              class="px-4 py-2"
              @click="confirmDeleteTheme = t"
            >
              <Trash2Icon class="w-4 h-4 mr-2" />
              Delete
            </Button>
          </template>
        </VDropdown>
      </div>
    </div>

    <Modal
      v-if="confirmDeleteTheme"
    >
      <div class="text-lg">
        <Trash2Icon class="w-5 h-5 mr-1 inline-block" />
        Confirm deleting theme '{{ confirmDeleteTheme.name }}'?
      </div>

      <template #actions>
        <Button
          color="gray"
          class="flex-1 p-2"
          @click="confirmDeleteTheme = null"
        >
          Cancel
        </Button>

        <Button
          color="red"
          class="flex-1 p-2"
          @click="deleteTheme()"
        >
          Delete theme
        </Button>
      </template>
    </Modal>
  </div>
</template>
