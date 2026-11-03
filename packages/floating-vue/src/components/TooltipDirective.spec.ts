import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, h, nextTick, ref } from 'vue'
import { TooltipDirective } from './TooltipDirective'

const { resize } = vi.hoisted(() => ({ resize: vi.fn() }))

vi.mock('../factories/Popper', async () => {
  const { defineComponent, onMounted } = await import('vue')
  return {
    createPopper: () => defineComponent({
      inheritAttrs: false,
      emits: ['apply-show', 'apply-hide'],
      setup (_props, { slots, emit, expose }) {
        expose({ show: () => {}, hide: () => {}, dispose: () => {}, onResize: resize })
        onMounted(() => emit('apply-show'))
        return () => slots.default?.({
          popperId: 'async-content-probe',
          isShown: true,
          shouldMountContent: true,
          skipTransition: false,
          autoHide: false,
          hide: () => {},
          handleResize: false,
          onResize: resize,
          classes: {},
          result: null,
        })
      },
    }),
  }
})

const cleanups: (() => void)[] = []
function deferred () {
  let resolve!: (value: string) => void
  let reject!: (error: Error) => void
  const promise = new Promise<string>((res, rej) => { resolve = res; reject = rej })
  return { promise, resolve, reject }
}
function mount (initial: string | (() => Promise<string>)) {
  const host = document.createElement('div')
  document.body.append(host)
  const content = ref(initial)
  const errors: unknown[] = []
  const app = createApp({ render: () => h(TooltipDirective, { content: content.value, targetNodes: () => [] }) })
  app.config.errorHandler = error => errors.push(error)
  app.mount(host)
  let mounted = true
  const unmount = () => {
    if (mounted) { mounted = false; app.unmount(); host.remove() }
  }
  cleanups.push(unmount)
  return { host, content, unmount, errors }
}

afterEach(async () => {
  for (const cleanup of cleanups.splice(0)) { cleanup() }
  await nextTick()
  resize.mockClear()
})

describe('async tooltip content lifecycle', () => {
  it('renders a resolved promise while mounted', async () => {
    const request = deferred()
    const fixture = mount(() => request.promise)
    request.resolve('Loaded content')
    await Promise.resolve(); await nextTick(); await nextTick()
    expect(fixture.host.textContent).toContain('Loaded content')
    expect(fixture.errors).toEqual([])
  })

  it('ignores a stale promise when content is replaced', async () => {
    const first = deferred()
    const second = deferred()
    const fixture = mount(() => first.promise)
    fixture.content.value = () => second.promise
    await nextTick()
    first.resolve('Stale content')
    await Promise.resolve(); await nextTick()
    expect(fixture.host.textContent).not.toContain('Stale content')
    second.resolve('Current content')
    await Promise.resolve(); await nextTick(); await nextTick()
    expect(fixture.host.textContent).toContain('Current content')
  })

  it('does not resize after the async watcher resumes on an unmounted component', async () => {
    const fixture = mount('Before')
    fixture.content.value = 'After'
    // Flush the watcher up to its await nextTick(), then unmount it.
    await Promise.resolve()
    fixture.unmount()
    await nextTick(); await nextTick()
    expect(fixture.errors).toEqual([])
    expect(resize).not.toHaveBeenCalled()
  })

  it('does not apply a promise result after destruction', async () => {
    const request = deferred()
    const fixture = mount(() => request.promise)
    fixture.unmount()
    request.resolve('Too late')
    await Promise.resolve(); await nextTick(); await nextTick()
    expect(resize).not.toHaveBeenCalled()
    expect(fixture.errors).toEqual([])
  })
})
