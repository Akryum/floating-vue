import { describe, expect, it, vi } from 'vitest'
import { createApp, h, nextTick, ref } from 'vue'
import { TooltipDirective } from './TooltipDirective'

describe('tooltip directive', () => {
  it('does not throw when unmounted during a pending content update', async () => {
    const content = ref('Tooltip content')
    const onError = vi.fn()
    const app = createApp(() => h(TooltipDirective, {
      content: content.value,
      targetNodes: () => [],
    }))
    app.config.errorHandler = onError

    app.mount(document.createElement('div'))
    content.value = 'Updated tooltip content'
    await nextTick()
    app.unmount()

    // Allow the pending watcher and Vue's error handler to finish.
    await new Promise(resolve => setTimeout(resolve, 0))
    expect(onError).not.toHaveBeenCalled()
  })
})
