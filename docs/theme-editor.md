---
layout: false
---

<script setup>
import VPNav from 'vitepress/dist/client/theme-default/components/VPNav.vue'
</script>


<ClientOnly>
  <div class="h-screen grid grid-rows-[max-content_1fr]">
    <VPNav class="!relative" />
    <ThemeEditorVue />
  </div>
</ClientOnly>
