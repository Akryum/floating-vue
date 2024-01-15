<template>
  <div ref="host" class="tooltip-shadow-dom-demo">
    <span style="color: red; font-weight: bold;">ShadowDOM Container</span>
  </div>
</template>

<script>
import Vue from 'vue'
import TooltipShadowDOMContent from './TooltipShadowDOMContent'

export default {

  data () {
    return {
      shadowRoot: null,
      shadowApp: null,
    }
  },

  async mounted() {
    const host = this.$refs.host;
    this.shadowRoot = host.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = '<style>.tooltip { background-color: lightpink } </style>';
    const el = document.createElement('div');
    const appEl = document.createElement('div');
    el.appendChild(appEl);
    this.shadowRoot.appendChild(el);
    this.shadowApp = new Vue({
      el: appEl,
      render: (h) => h(
        TooltipShadowDOMContent,
        { props: {} },
      )
    })
    this.shadowApp.$root.shadowRoot = this.shadowRoot;
  }
}
</script>
