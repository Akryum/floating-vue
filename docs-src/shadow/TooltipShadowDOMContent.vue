<template>
  <div class="tooltip-shadow-dom-demo-content">
    <h2>ShadowDOM Content</h2>
    <input class="tooltip-content" v-model="msg" placeholder="Tooltip content"/>
    <button
        class="tooltip-target"
        title="This is a button"
        v-tooltip.bottom="{
          content: msg,
          container: el
        }">Hover me</button>
  </div>
</template>

<script>
import Vue from 'vue'

export default {

  props: {},

  data () {
    return {
      msg: 'This is a button within shadowDOM',
      el: (targetElement) => this.$root.$el.parentElement,
    }
  },

}
</script>

<style lang="scss">

</style>


