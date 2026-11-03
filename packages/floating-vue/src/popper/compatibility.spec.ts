import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { computePosition } from '@floating-ui/dom'
import { usePopper } from './usePopper'
import { popperEmits, popperProps } from './props'
import { getOptions } from '../directives/v-tooltip'

vi.mock('@floating-ui/dom', async importOriginal => ({
  ...await importOriginal<typeof import('@floating-ui/dom')>(),
  computePosition: vi.fn(),
  getOverflowAncestors: vi.fn(() => [window]),
}))

let frames: Map<number, FrameRequestCallback>
let nextId: number
const cleanups: (() => void)[] = []

async function flush () {
  for (let i = 0; i < 25; i++) { await Promise.resolve() }
  await nextTick()
}

async function frame () {
  const callbacks = [...frames.values()]
  frames.clear()
  for (const callback of callbacks) { callback(0) }
  await flush()
}

async function settle () {
  for (let i = 0; i < 8 && frames.size; i++) { await frame() }
  await flush()
}

function mount (overrides: Record<string, unknown> = {}) {
  const host = document.createElement('div')
  const target = document.createElement('button')
  const popper = document.createElement('div')
  target.title = 'Native title'
  popper.innerHTML = '<div class="v-popper__wrapper"><div class="v-popper__inner"></div><div class="v-popper__arrow-container"></div></div>'
  document.body.append(host, target)
  const props = reactive<Record<string, any>>({ theme: 'tooltip', targetNodes: () => [target], referenceNode: () => target, popperNode: () => popper, triggers: [], popperTriggers: [], delay: 0, noAutoFocus: true, disposeTimeout: null, ...overrides })
  let api: ReturnType<typeof usePopper>
  const events: [string, ...unknown[]][] = []
  const component = defineComponent({
    props: popperProps,
    emits: popperEmits,
    setup (componentProps) {
      api = usePopper(componentProps, ((name, ...args) => { events.push([name, ...args]) }) as any)
      return () => h('div')
    },
  })
  const app = createApp({ render: () => h(component, props as any) })
  app.mount(host)
  let mounted = true
  const unmount = () => { if (mounted) { mounted = false; app.unmount(); host.remove(); target.remove(); popper.remove() } }
  cleanups.push(unmount)
  return { api: api!, props, target, popper, events, unmount }
}

beforeEach(() => {
  frames = new Map(); nextId = 0
  vi.useFakeTimers()
  vi.stubGlobal('requestAnimationFrame', vi.fn((cb: FrameRequestCallback) => { const id = ++nextId; frames.set(id, cb); return id }))
  vi.stubGlobal('cancelAnimationFrame', vi.fn((id: number) => frames.delete(id)))
  vi.mocked(computePosition).mockReset().mockResolvedValue({ x: 10, y: 20, placement: 'top', strategy: 'absolute', middlewareData: {} })
})

afterEach(async () => {
  for (const cleanup of cleanups.splice(0)) { cleanup() }
  await flush()
  frames.clear(); vi.clearAllTimers(); vi.useRealTimers(); vi.unstubAllGlobals()
  document.body.replaceChildren(); document.body.className = ''
})

describe('options compatibility', () => {
  it('preserves changes to existing reactive options', () => {
    const input = reactive({ content: 'Before', distance: 1, disabled: false })
    const options = getOptions(document.createElement('button'), input, {})
    input.content = 'After'; input.distance = 8; input.disabled = true
    expect(options.content).toBe('After'); expect(options.distance).toBe(8); expect(options.disabled).toBe(true)
  })

  it('preserves a reactive option added after creation', () => {
    const input = reactive<Record<string, any>>({ content: 'Text' })
    const options = getOptions(document.createElement('button'), input, {})
    input.disabled = true
    expect(options.disabled).toBe(true)
  })

  it('preserves getter-based content updates', () => {
    const text = ref('Before')
    const options = getOptions(document.createElement('button'), { get content () { return text.value } }, {})
    text.value = 'After'
    expect(options.content).toBe('After')
  })

  it('preserves an added reactive placement', () => {
    const input = reactive<Record<string, any>>({ content: 'Text' })
    const options = getOptions(document.createElement('button'), input, {})
    input.placement = 'bottom'
    expect(options.placement).toBe('bottom')
  })

  it('preserves deletion of an existing reactive option', () => {
    const input = reactive<Record<string, any>>({ content: 'Text', disabled: true })
    const options = getOptions(document.createElement('button'), input, {})
    delete input.disabled
    expect(options.disabled).toBeUndefined()
  })

  it('preserves modifier-based placement', () => {
    expect(getOptions(document.createElement('button'), { content: 'Text' }, { 'bottom-start': true }).placement).toBe('bottom-start')
  })
})

describe('popper visible behavior compatibility', () => {
  it('finishes a normal show transition and updates ARIA', async () => {
    const f = mount(); f.api.show({ skipDelay: true }); await settle()
    expect(f.api.slotData.value.isShown).toBe(true)
    expect(f.api.slotData.value.classes.showFrom).toBe(false)
    expect(f.api.slotData.value.classes.showTo).toBe(true)
    expect(f.target.getAttribute('aria-describedby')).toBe(f.api.slotData.value.popperId)
    expect(f.api.slotData.value.result?.x).toBe(10)
  })

  it('finishes an opening transition when show is repeated after apply-show', async () => {
    const f = mount(); f.api.show({ skipDelay: true })
    await frame(); await frame()
    expect(f.api.slotData.value.isShown).toBe(true)
    expect(f.api.slotData.value.classes.showFrom).toBe(true)
    f.api.show({ skipDelay: true }); await settle()
    expect(f.api.slotData.value.classes.showFrom).toBe(false)
    expect(f.api.slotData.value.classes.showTo).toBe(true)
  })

  it('finishes opening when shown prop confirms apply-show', async () => {
    const f = mount(); f.api.show({ skipDelay: true })
    await frame(); await frame()
    f.props.shown = true; await flush(); await settle()
    expect(f.api.slotData.value.isShown).toBe(true)
    expect(f.api.slotData.value.classes.showFrom).toBe(false)
    expect(f.api.slotData.value.classes.showTo).toBe(true)
  })

  it('finishes a normal hide transition and removes ARIA', async () => {
    const f = mount(); f.api.show({ skipDelay: true }); await settle()
    f.api.hide({ skipDelay: true }); await settle()
    expect(f.api.slotData.value.isShown).toBe(false)
    expect(f.api.slotData.value.classes.hideFrom).toBe(false)
    expect(f.api.slotData.value.classes.hideTo).toBe(true)
    expect(f.target.hasAttribute('aria-describedby')).toBe(false)
  })

  it('preserves completed hide event counts on disposal', async () => {
    const f = mount(); f.api.show({ skipDelay: true }); await settle()
    f.api.hide({ skipDelay: true }); await settle()
    const before = f.events.filter(([n]) => n === 'hide').length
    f.api.dispose()
    expect(f.events.filter(([n]) => n === 'hide')).toHaveLength(before)
  })

  it('preserves completed hide update:shown event counts on disposal', async () => {
    const f = mount(); f.api.show({ skipDelay: true }); await settle()
    f.api.hide({ skipDelay: true }); await settle()
    const before = f.events.filter(([n]) => n === 'update:shown').length
    f.api.dispose()
    expect(f.events.filter(([n]) => n === 'update:shown')).toHaveLength(before)
  })

  it('restores the original title when disposed while shown', async () => {
    const f = mount(); f.api.show({ skipDelay: true }); await settle()
    f.api.dispose()
    expect(f.target.title).toBe('Native title')
    expect(f.target.hasAttribute('data-original-title')).toBe(false)
    expect(f.target.hasAttribute('aria-describedby')).toBe(false)
  })

  it('cancels a delayed hide when shown again', async () => {
    const f = mount({ delay: { show: 0, hide: 500 } })
    f.api.show({ skipDelay: true }); await settle()
    f.api.hide(); f.api.show({ skipDelay: true }); await settle()
    await vi.advanceTimersByTimeAsync(600); await settle()
    expect(f.api.slotData.value.isShown).toBe(true)
    expect(f.api.slotData.value.classes.showTo).toBe(true)
  })

  it('honors the show delay', async () => {
    const f = mount({ delay: { show: 100, hide: 0 } }); f.api.show()
    await vi.advanceTimersByTimeAsync(99); await settle()
    expect(f.api.slotData.value.isShown).toBe(false)
    await vi.advanceTimersByTimeAsync(1); await settle()
    expect(f.api.slotData.value.isShown).toBe(true)
  })

  it('supports a disable and re-enable cycle', async () => {
    const f = mount(); f.api.show({ skipDelay: true }); await settle()
    f.props.disabled = true; await flush(); await settle()
    expect(f.api.slotData.value.isShown).toBe(false)
    f.props.disabled = false; await flush(); f.api.show({ skipDelay: true }); await settle()
    expect(f.api.slotData.value.isShown).toBe(true)
    expect(f.api.slotData.value.classes.showTo).toBe(true)
  })
})
