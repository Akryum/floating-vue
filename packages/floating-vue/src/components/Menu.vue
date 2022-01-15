<script lang="ts">
import { defineComponent } from 'vue'
import PopperWrapper from './PopperWrapper.vue'

export default defineComponent({
  ...PopperWrapper,
  name: 'VMenu',
  vPopperTheme: 'menu',
})
</script>
