<script>
import Navbar from '@vuepress/theme-default/components/Navbar.vue'

export default {
  components: {
    Navbar,
  },
}
</script>

<template>
  <div class="layout-blank">
    <Navbar />

    <Content class="content-layout-blank relative" />
  </div>
</template>

<style lang="postcss" scoped>
.content-layout-blank {
  height: calc(100vh - 3.6rem);
  margin-top: 3.6rem;
}
</style>
