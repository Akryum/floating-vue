<script lang="ts">
import { defineComponent } from 'vue'
import PopperWrapper from './PopperWrapper.vue'

export default defineComponent({
  ...PopperWrapper,
  name: 'VDropdown',
  vPopperTheme: 'dropdown',
})
</script>

<style>
.v-popper--theme-dropdown .v-popper__inner {
  background: #fff;
  color: black;
  border-radius: 6px;
  border: 1px solid #ddd;
  box-shadow: 0 6px 30px rgba(0, 0, 0, .1);
}

.v-popper--theme-dropdown .v-popper__arrow-inner {
  visibility: visible;
  border-color: #fff;
}

.v-popper--theme-dropdown .v-popper__arrow-outer {
  border-color: #ddd;
}
</style>
