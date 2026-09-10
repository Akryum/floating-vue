// Ported from https://github.com/buttons/vue-github-button/blob/main/index.js

import { defineComponent, h } from 'vue'
import { hasOwn, hyphenate } from '@vue/shared'

export default defineComponent({
  name: 'GithubButton',
  props: {
    href: String,
    ariaLabel: String,
    title: String,
    dataIcon: String,
    dataColorScheme: String,
    dataSize: String,
    dataShowCount: String,
    dataText: String,
  },
  mounted () {
    this.paint()
  },
  beforeUpdate () {
    this.reset()
  },
  updated () {
    this.paint()
  },
  beforeUnmount () {
    this.reset()
  },
  methods: {
    paint () {
      const _ = this.$el.appendChild(document.createElement('span'))
      const _this = this
      import('github-buttons').then((module) => {
        module.render(_.appendChild(_this.$refs._), (el) => {
          try {
            _.parentNode.replaceChild(el, _)
          } catch {}
        })
      })
    },
    reset () {
      this.$el.replaceChild(/** @type {HTMLAnchorElement} */ (this.$refs._), this.$el.lastChild)
    },
  },
  render () {
    const props = { ref: '_' }
    for (const key in this.$props) {
      props[hyphenate(key)] = this.$props[key]
    }
    return h('span', [
      hasOwn(this.$slots, 'default')
        ? h('a', props, this.$slots.default())
        : h('a', props),
    ])
  },
})
