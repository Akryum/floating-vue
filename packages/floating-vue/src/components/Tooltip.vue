<script lang="ts">
import { defineComponent } from 'vue'
import PopperWrapper from './PopperWrapper.vue'

export default defineComponent({
  ...PopperWrapper,
  name: 'VTooltip',
  vPopperTheme: 'tooltip',
})
</script>

<style>
.v-popper--theme-tooltip .v-popper__inner {
  background: rgba(0, 0, 0, .8);
  color: white;
  border-radius: 6px;
  padding: 7px 12px 6px;
}

.v-popper--theme-tooltip .v-popper__arrow-outer {
  border-color: rgba(0, 0, 0, .8);
}
</style>
