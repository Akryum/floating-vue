import { createApp, defineComponent, h } from 'vue'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { usePopper } from './usePopper'
import type { PopperProps } from './usePopper'

const mounted: ReturnType<typeof createApp>[] = []
afterEach(() => {
  for (const app of mounted) { app.unmount() }
  mounted.length = 0
  vi.restoreAllMocks()
})

describe('popper delay scheduling', () => {
  it('uses zero for object delays instead of passing NaN to setTimeout', () => {
    const timer = vi.spyOn(globalThis, 'setTimeout')
    let popper!: ReturnType<typeof usePopper>
    const root = document.createElement('div')
    const content = document.createElement('div')
    content.innerHTML = '<div class="v-popper__inner"></div><div class="v-popper__arrow-container"></div>'
    const app = createApp(defineComponent({
      setup (_, { emit }) {
        popper = usePopper({ delay: { show: 0, hide: 0 }, triggers: [], theme: 'tooltip', referenceNode: () => root, targetNodes: () => [], popperNode: () => content } as unknown as PopperProps, emit as any)
        return () => h('div')
      },
    }))
    app.mount(root)
    mounted.push(app)
    popper.show()
    expect(timer.mock.lastCall?.[1]).toBe(0)
    popper.hide()
    expect(timer.mock.lastCall?.[1]).toBe(0)
  })
})
