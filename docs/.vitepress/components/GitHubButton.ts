// Ported from https://github.com/buttons/vue-github-button/blob/main/index.js

import { defineComponent, h, onBeforeUnmount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue'
import { hasOwn, hyphenate } from '@vue/shared'

const githubButtonProps = {
  href: String,
  ariaLabel: String,
  title: String,
  dataIcon: String,
  dataColorScheme: String,
  dataSize: String,
  dataShowCount: String,
  dataText: String,
}

export default defineComponent((props, { slots }) => {
  const root = ref<HTMLElement | null>(null)
  const anchor = ref<HTMLAnchorElement | null>(null)

  /**
   * Lets github-buttons replace the placeholder anchor with its iframe.
   */
  function paint () {
    if (!root.value || !anchor.value) return

    const placeholder = root.value.appendChild(document.createElement('span'))
    import('github-buttons').then(module => {
      module.render(placeholder.appendChild(anchor.value), el => {
        try {
          placeholder.parentNode.replaceChild(el, placeholder)
        } catch (e) {}
      })
    })
  }

  /**
   * Restores the original anchor before Vue updates or unmounts.
   */
  function reset () {
    if (root.value && anchor.value && root.value.lastChild) {
      root.value.replaceChild(anchor.value, root.value.lastChild)
    }
  }

  onMounted(paint)
  onBeforeUpdate(reset)
  onUpdated(paint)
  onBeforeUnmount(reset)

  return () => {
    const anchorProps = { ref: anchor }
    for (const key in props) {
      anchorProps[hyphenate(key)] = props[key]
    }
    return h('span', { ref: root }, [
      hasOwn(slots, 'default')
        ? h('a', anchorProps, slots.default())
        : h('a', anchorProps),
    ])
  }
}, {
  name: 'GithubButton',
  props: githubButtonProps,
})
