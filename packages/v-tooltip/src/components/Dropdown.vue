<script>
import PopperWrapper from './PopperWrapper.vue'

export default {
  ...PopperWrapper,
  name: 'VDropdown',
  vPopperTheme: 'dropdown',
}
</script>

<style>
.v-popper--theme-dropdown .v-popper__inner {
  background: #fff;
  color: black;
  padding: 24px;
  border-radius: 6px;
  box-shadow: 0 6px 30px rgba(0, 0, 0, .1);
}

.v-popper--theme-dropdown .v-popper__arrow {
  border-color: #fff;
}
</style>
