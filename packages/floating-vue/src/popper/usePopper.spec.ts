import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive } from 'vue'
import { computePosition } from '@floating-ui/dom'
import { acquirePopperContext, releasePopperContext } from './context'
import { popperEmits, popperProps } from './props'
import { usePopper } from './usePopper'
import type { PopperEmit } from './usePopper'

vi.mock('../util/frame', () => ({ nextFrame: vi.fn(() => Promise.resolve()) }))

vi.mock('@floating-ui/dom', async importOriginal => ({
  ...await importOriginal<typeof import('@floating-ui/dom')>(),
  computePosition: vi.fn(),
  getOverflowAncestors: vi.fn(() => [window]),
}))

const position = { x: 0, y: 0, placement: 'top' as const, strategy: 'absolute' as const, middlewareData: {} }
interface PopperFixture {
  api: ReturnType<typeof usePopper>
  reference: HTMLButtonElement
  popper: HTMLDivElement
  unmount: () => void
  setProps: (values: Record<string, unknown>) => Promise<void>
}

const fixtures: PopperFixture[] = []
let heldContexts = 0
let addedListeners: ReturnType<typeof vi.spyOn>

async function flush () {
  for (let i = 0; i < 30; i++) { await Promise.resolve() }
}

function holdContext () {
  heldContexts++
  return acquirePopperContext()
}

function mountPopper (overrides: Record<string, unknown> = {}): PopperFixture {
  const host = document.createElement('div')
  const reference = document.createElement('button')
  const popper = document.createElement('div')
  popper.innerHTML = '<div class="v-popper__wrapper"><div class="v-popper__inner"></div><div class="v-popper__arrow-container"></div></div>'
  document.body.append(host, reference)
  let api: ReturnType<typeof usePopper>
  let mounted = true
  const component = defineComponent({
    props: popperProps,
    emits: popperEmits,
    setup (props, { emit }) {
      api = usePopper(props, emit as PopperEmit)
      return () => h('div')
    },
  })
  const componentProps = reactive({
    theme: 'tooltip',
    targetNodes: () => [reference],
    referenceNode: () => reference,
    popperNode: () => popper,
    triggers: [],
    popperTriggers: [],
    delay: 0,
    noAutoFocus: true,
    ...overrides,
  })
  const app = createApp({ render: () => h(component, componentProps) })
  app.mount(host)
  const fixture = {
    api: api!,
    reference,
    popper,
    async setProps (values: Record<string, unknown>) {
      Object.assign(componentProps, values)
      await nextTick()
    },
    unmount () {
      if (mounted) {
        mounted = false
        app.unmount()
        host.remove()
        reference.remove()
      }
    },
  }
  fixtures.push(fixture)
  return fixture
}

beforeEach(() => {
  vi.useFakeTimers()
  vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => setTimeout(callback, 16, 0))
  vi.stubGlobal('cancelAnimationFrame', clearTimeout)
  vi.mocked(computePosition).mockReset().mockResolvedValue(position)
  addedListeners = vi.spyOn(window, 'addEventListener')
})

afterEach(async () => {
  for (const fixture of fixtures.splice(0)) { fixture.unmount() }
  await flush()
  while (heldContexts > 0) {
    heldContexts--
    releasePopperContext()
  }
  // Clean listeners even when an assertion exposes an upstream leak.
  for (const [type, handler, options] of addedListeners.mock.calls) {
    window.removeEventListener(type, handler, options)
  }
  vi.clearAllTimers()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
  vi.useRealTimers()
  document.body.replaceChildren()
  document.body.className = ''
})

describe('popper disposal', () => {
  it('does not attach scroll listeners after unmounting during show', async () => {
    const fixture = mountPopper()
    fixture.api.show({ skipDelay: true })
    fixture.unmount()
    const callsAtUnmount = addedListeners.mock.calls.length
    await flush()
    expect(addedListeners.mock.calls.slice(callsAtUnmount).filter(([type]) => type === 'scroll')).toEqual([])
  })

  it('removes a shown controller from a shared context during delayed hide', async () => {
    const context = holdContext()
    const fixture = mountPopper({ delay: { hide: 1000 } })
    fixture.api.show({ skipDelay: true })
    await flush()
    expect(context.shownPoppers).toHaveLength(1)
    fixture.api.hide()
    fixture.unmount()
    expect(context.shownPoppers).toHaveLength(0)
    expect(context.hidingPopper).toBe(null)
  })

  it('removes a controller even while one of its children is shown', async () => {
    const context = holdContext()
    const fixture = mountPopper()
    fixture.api.show({ skipDelay: true })
    await flush()
    context.shownPoppers[0].shownChildren.add('shown-child')
    fixture.unmount()
    expect(context.shownPoppers).toHaveLength(0)
  })

  it('cancels a long delayed show instead of keeping the detached nodes alive', async () => {
    const fixture = mountPopper({ delay: 60_000 })
    fixture.api.show()
    await vi.advanceTimersByTimeAsync(16)
    fixture.unmount()
    expect(vi.getTimerCount()).toBe(0)
  })

  it('does not schedule delayed DOM disposal when the component is unmounted', async () => {
    const fixture = mountPopper({ disposeTimeout: 60_000 })
    fixture.api.show({ skipDelay: true })
    await flush()
    await vi.advanceTimersByTimeAsync(16)
    fixture.unmount()
    expect(vi.getTimerCount()).toBe(0)
  })

  it('ignores the result of positioning when it resolves after unmount', async () => {
    let resolvePosition: (value: typeof position) => void
    vi.mocked(computePosition).mockImplementationOnce(() => new Promise(resolve => { resolvePosition = resolve }))
    const fixture = mountPopper()
    fixture.api.show({ skipDelay: true })
    await flush()
    expect(computePosition).toHaveBeenCalledOnce()
    fixture.unmount()
    const callsAtUnmount = addedListeners.mock.calls.length
    resolvePosition!(position)
    await flush()
    expect(fixture.api.slotData.value.isShown).toBe(false)
    expect(addedListeners.mock.calls.slice(callsAtUnmount).filter(([type]) => type === 'scroll')).toEqual([])
  })

  it('registers a popper only once when show is requested twice before the next frame', async () => {
    const context = holdContext()
    const fixture = mountPopper()
    fixture.api.show({ skipDelay: true })
    fixture.api.show({ skipDelay: true })
    await flush()
    expect(context.shownPoppers).toHaveLength(1)
    fixture.api.hide({ skipDelay: true })
    expect(context.shownPoppers).toHaveLength(0)
  })

  it('still shows again after cancelling a delayed hide', async () => {
    const context = holdContext()
    const fixture = mountPopper({ delay: { hide: 1000 } })
    fixture.api.show({ skipDelay: true })
    await flush()
    fixture.api.hide()
    fixture.api.show({ skipDelay: true })
    await flush()
    await vi.advanceTimersByTimeAsync(1100)
    expect(fixture.api.slotData.value.isShown).toBe(true)
    expect(context.shownPoppers).toHaveLength(1)
    fixture.api.hide({ skipDelay: true })
    expect(context.shownPoppers).toHaveLength(0)
  })

  it('does not accept work from a previous lifecycle after disabling and re-enabling', async () => {
    const context = holdContext()
    let resolvePosition: (value: typeof position) => void
    vi.mocked(computePosition).mockImplementationOnce(() => new Promise(resolve => { resolvePosition = resolve }))
    const fixture = mountPopper()
    fixture.api.show({ skipDelay: true })
    await flush()
    await fixture.setProps({ disabled: true })
    await fixture.setProps({ disabled: false })
    fixture.api.show({ skipDelay: true })
    await flush()
    resolvePosition!({ ...position, x: 999 })
    await flush()
    expect(fixture.api.slotData.value.result!.x).toBe(0)
    expect(context.shownPoppers).toHaveLength(1)
  })

  it('ignores public show and hide calls after disposal', async () => {
    const context = holdContext()
    const fixture = mountPopper()
    fixture.unmount()
    fixture.api.show({ skipDelay: true })
    fixture.api.hide({ skipDelay: true })
    await flush()
    expect(context.shownPoppers).toHaveLength(0)
    expect(vi.getTimerCount()).toBe(0)
  })
})
