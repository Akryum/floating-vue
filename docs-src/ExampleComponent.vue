<template>
  <div class="example-component">
    <span>&lt;I'm a component!</span>
    <button class="button" @click="count < 10 && count++">+</button>
    <button class="button" @click="count > 0 && count--">-</button>
    <span class="counter">
			<span v-for="n in count" :key="n">{{ char }}</span>
		</span>
		<span>/&gt;</span>
  </div>
</template>

<script>
export default {
  props: {
    char: {
      type: String,
      default: '#',
    },
  },

  data () {
    return {
      count: 0,
    }
  },
}
</script>

<style lang="scss" scoped>
.example-component {
	background: $primary-color;
	padding: 4px 16px;
	border-radius: 3px;
	color: white;
	text-align: center;
	font-family: monospace;
	font-size: 1.2em;
}

.button {
	padding: 2px 6px;
}

.counter {
	font-weight: bold;
}
</style>
