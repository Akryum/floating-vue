---
layout: false
---

<script setup>
import VPNav from 'vitepress/dist/client/theme-default/components/VPNav.vue'
</script>


<ClientOnly>
  <div class="h-screen grid grid-rows-[max-content_1fr]">
    <VPNav class="!relative [&_.container>.title]:!pl-6 [&_.container>.content]:!pr-6 [&_.title]:border-none [&_.curtain]:hidden" />
    <ThemeEditorVue />
  </div>
</ClientOnly>
