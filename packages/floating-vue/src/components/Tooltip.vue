<script lang="ts">
import PopperWrapper from './PopperWrapper.vue'

const Component = ({
  ...PopperWrapper,
  name: 'VTooltip',
  vPopperTheme: 'tooltip',
}) as unknown as typeof PopperWrapper

export default Component
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
