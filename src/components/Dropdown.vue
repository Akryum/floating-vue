<script>
import PopperWrapper from './PopperWrapper.vue'

export default {
  ...PopperWrapper,
  name: 'VDropdown',
  vPopperTheme: 'dropdown',
}
</script>

<style>
.v-popper--theme-dropdown .v-popper__popper-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, .1);
}

.v-popper--theme-dropdown .v-popper__popper-arrow {
  border-color: #f9f9f9;
}
</style>
