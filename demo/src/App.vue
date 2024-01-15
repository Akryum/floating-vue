<script setup>
import { demos } from './router'
</script>

<template>
  <nav class="nav divide-x divide-gray-300 mb-4">
    <router-link
      v-for="(route, index) of demos"
      :key="index"
      :to="route.path"
    >
      {{ route.meta.label }}
    </router-link>
  </nav>
  <router-view/>
</template>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>

<style lang="postcss">
.nav a {
  @apply px-2 py-1 hover:bg-gray-200;
}

.nav a.router-link-active {
  @apply bg-teal-500 text-white;
}

button {
  @apply px-3 py-1 rounded bg-gray-100 border border-gray-200;
}
</style>
