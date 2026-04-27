<template>
  <p class="sponsor-button">
    <github-button
      href="https://github.com/sponsors/Akryum"
      data-icon="octicon-heart"
      data-size="large"
      aria-label="Sponsor @Akryum on GitHub"
    >
      Sponsor on GitHub
    </github-button>
  </p>
</template>

<script setup>
import GithubButton from './GitHubButton'
</script>

<style scoped>
.sponsor-button {
  text-align: center;
  margin: 24px 0;
}
</style>
