import { describe, expect, it } from 'vitest'
import { createApp, defineComponent, h, nextTick, ref, withDirectives } from 'vue'
import * as VTooltip from './v-tooltip'

describe('getPlacement', () => {
  it('object notation', () => {
    const value = {
      placement: 'bottom',
    }
    const modifiers = {}
    const result = VTooltip.getPlacement(value, modifiers)
    expect(result).toBe('bottom')
  })

  it('modifier', () => {
    const value = {}
    const modifiers = {
      'top-end': true,
    }
    const result = VTooltip.getPlacement(value, modifiers)
    expect(result).toBe('top-end')
  })

  it('invalid modifier', () => {
    const value = {}
    const modifiers = {
      'left-middle': true,
    }
    const result = VTooltip.getPlacement(value, modifiers)
    expect(result).toBe('top')
  })
})

describe('directive app', () => {
  it('runs host mounted hooks after their elements are inserted', async () => {
    const connected: boolean[] = []
    const Child = defineComponent({
      mounted () {
        connected.push(this.$el.isConnected)
      },
      render: () => h('span', 'child'),
    })
    const shown = ref(false)
    const root = document.createElement('div')
    document.body.appendChild(root)
    const app = createApp({
      render: () => shown.value
        ? h('div', [
            h(Child),
            withDirectives(h('button', 'trigger'), [[VTooltip.vTooltip, 'Tooltip']]),
          ])
        : null,
    })
    app.mount(root)

    // The first tooltip is created during a scheduler update, not the initial mount
    shown.value = true
    await nextTick()

    expect(connected).toEqual([true])
    app.unmount()
    root.remove()
  })
})
