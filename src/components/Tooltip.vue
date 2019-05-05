<script>
import PopperWrapper from './PopperWrapper.vue'

export default {
  ...PopperWrapper,
  name: 'VTooltip',
  vPopperTheme: 'tooltip',
}
</script>

<style>
.v-popper--theme-tooltip .v-popper__inner {
  background: black;
  color: white;
  border-radius: 16px;
  padding: 5px 10px 4px;
}

.v-popper--theme-tooltip .v-popper__arrow {
  border-color: black;
}
</style>
