<script setup>
import { demos } from './router'
</script>

<template>
  <nav class="nav">
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
  text-decoration: none;
  color: black;
  padding: 2px 4px;
}

.nav a:not(:last-child) {
  border-right: 1px #ddd solid;
}

.nav a:hover {
  background: #eee;
}

.nav a.router-link-active {
  background: black;
  color: white;
}
</style>
