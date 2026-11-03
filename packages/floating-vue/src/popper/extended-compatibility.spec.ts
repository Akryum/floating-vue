import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, isReactive, isShallow, markRaw, nextTick, reactive, ref, shallowReactive, toRefs, watchEffect } from 'vue'
import { computePosition } from '@floating-ui/dom'
import { usePopper } from './usePopper'
import { popperEmits, popperProps } from './props'
import { getOptions } from '../directives/v-tooltip'
import { acquirePopperContext, releasePopperContext } from './context'

vi.mock('@floating-ui/dom', async importOriginal => ({
  ...await importOriginal<typeof import('@floating-ui/dom')>(),
  computePosition: vi.fn(),
  getOverflowAncestors: vi.fn(() => [window]),
}))

let frames: Map<number, FrameRequestCallback>
let frameId: number
const cleanups: (() => void)[] = []
const stops: (() => void)[] = []
let held = 0
async function flush () { for (let i = 0; i < 30; i++) { await Promise.resolve() }; await nextTick() }
async function frame () { const callbacks = [...frames.values()]; frames.clear(); for (const cb of callbacks) { cb(0) }; await flush() }
async function advance (count: number) { for (let i = 0; i < count; i++) { await frame() } }
async function settle () { for (let i = 0; i < 12; i++) { await vi.runOnlyPendingTimersAsync(); await frame() }; await flush() }
function context () { held++; return acquirePopperContext() }
function mount (overrides: Record<string, unknown> = {}, callback: (name: string) => void = () => {}) {
  const host = document.createElement('div'); const target = document.createElement('button'); const popper = document.createElement('div')
  target.title = 'Native title'; popper.tabIndex = 0
  popper.innerHTML = '<div class="v-popper__wrapper"><div class="v-popper__inner"></div><div class="v-popper__arrow-container"></div></div>'
  document.body.append(host, target)
  const props = reactive<Record<string, any>>({ theme: 'tooltip', targetNodes: () => [target], referenceNode: () => target, popperNode: () => popper, triggers: [], popperTriggers: [], delay: 0, noAutoFocus: false, disposeTimeout: null, ...overrides })
  let api: ReturnType<typeof usePopper>
  const events: [string, ...unknown[]][] = []
  const component = defineComponent({ props: popperProps, emits: popperEmits, setup (componentProps) { api = usePopper(componentProps, ((name, ...args) => { events.push([name, ...args]); callback(name) }) as any); return () => h('div') } })
  const app = createApp({ render: () => h(component, props as any) }); app.mount(host)
  let mounted = true
  const unmount = () => { if (mounted) { mounted = false; app.unmount(); host.remove(); target.remove(); popper.remove() } }
  cleanups.push(unmount)
  return { api: api!, props, events, target, popper, unmount }
}
function assertState (fixture: ReturnType<typeof mount>, shown: boolean) {
  const state = fixture.api.slotData.value
  expect(state.isShown).toBe(shown)
  expect(state.classes.showFrom).toBe(false)
  expect(state.classes.hideFrom).toBe(false)
  expect(state.classes.showTo).toBe(shown)
  expect(state.classes.hideTo).toBe(!shown)
  expect(fixture.target.hasAttribute('aria-describedby')).toBe(shown)
  if (shown) { expect(document.activeElement).toBe(fixture.popper) }
}
beforeEach(() => {
  frames = new Map(); frameId = 0; vi.useFakeTimers()
  vi.stubGlobal('requestAnimationFrame', vi.fn((cb: FrameRequestCallback) => { const id = ++frameId; frames.set(id, cb); return id }))
  vi.stubGlobal('cancelAnimationFrame', vi.fn((id: number) => frames.delete(id)))
  vi.mocked(computePosition).mockReset().mockResolvedValue({ x: 10, y: 20, placement: 'top', strategy: 'absolute', middlewareData: {} })
})
afterEach(async () => {
  for (const stop of stops.splice(0)) { stop() }
  for (const cleanup of cleanups.splice(0)) { cleanup() }
  await flush()
  while (held) { held--; releasePopperContext() }
  frames.clear(); vi.clearAllTimers(); vi.useRealTimers(); vi.unstubAllGlobals(); document.body.replaceChildren(); document.body.className = ''
})

describe('opening and closing schedules', () => {
  for (const firstGap of [0, 1, 2, 3, 4, 5]) {
    for (const secondGap of [0, 1, 2, 3, 4, 5]) {
      it(`show-hide-show, frame gaps ${firstGap}/${secondGap}`, async () => {
        const f = mount(); f.api.show({ skipDelay: true }); await advance(firstGap); f.api.hide({ skipDelay: true }); await advance(secondGap); f.api.show({ skipDelay: true }); await settle(); assertState(f, true)
      })
      it(`hide-show-hide, frame gaps ${firstGap}/${secondGap}`, async () => {
        const f = mount(); f.api.show({ skipDelay: true }); await settle(); f.api.hide({ skipDelay: true }); await advance(firstGap); f.api.show({ skipDelay: true }); await advance(secondGap); f.api.hide({ skipDelay: true }); await settle(); assertState(f, false)
      })
    }
  }
  for (const gap of [0, 1, 2, 3, 4, 5]) {
    it(`repeated show at frame ${gap}`, async () => { const f = mount(); f.api.show({ skipDelay: true }); await advance(gap); f.api.show({ skipDelay: true }); await settle(); assertState(f, true) })
    it(`disable and enable at frame ${gap}`, async () => { const f = mount(); f.api.show({ skipDelay: true }); await advance(gap); f.props.disabled = true; await flush(); f.props.disabled = false; await flush(); f.api.show({ skipDelay: true }); await settle(); assertState(f, true) })
  }
  for (const delay of [0, 10, 100]) {
    it(`cancels a queued show with hide at delay ${delay}`, async () => { const f = mount({ delay }); f.api.show(); f.api.hide(); await settle(); expect(f.api.slotData.value.isShown).toBe(false) })
    it(`cancels a queued hide with show at delay ${delay}`, async () => { const f = mount({ delay }); f.api.show({ skipDelay: true }); await settle(); f.api.hide(); f.api.show(); await settle(); assertState(f, true) })
  }
})

describe('live options and descriptors', () => {
  for (const reactiveInput of [false, true]) {
    const name = reactiveInput ? 'reactive' : 'plain'
    const make = (value: Record<string, any>) => reactiveInput ? reactive(value) : value
    it(`${name}: reflects writes made through the returned options`, () => { const value = make({ content: 'Before', placement: 'top' }); const options = getOptions(document.createElement('button'), value, {}); options.content = 'After'; options.placement = 'bottom'; expect(options.content).toBe('After'); expect(options.placement).toBe('bottom') })
    it(`${name}: preserves a getter receiver`, () => { const value = make({ label: 'Before', get content () { return this.label } }); const options = getOptions(document.createElement('button'), value, {}); options.label = 'After'; expect(options.content).toBe('After') })
    it(`${name}: forwards custom attributes`, () => { const value = make({ content: 'Text', 'data-demo': 'Before' }); const options = getOptions(document.createElement('button'), value, {}); options['data-demo'] = 'After'; expect(options['data-demo']).toBe('After') })
    it(`${name}: preserves enumerated new keys`, () => { const value = make({ content: 'Text' }); const options = getOptions(document.createElement('button'), value, {}); options.disabled = true; expect({ ...options }.disabled).toBe(true); expect('disabled' in options).toBe(true) })
    it(`${name}: deletes an option through the returned view`, () => { const value = make({ content: 'Text', distance: 5 }); const options = getOptions(document.createElement('button'), value, {}); delete options.distance; expect(options.distance).toBeUndefined(); expect(Object.keys(options)).not.toContain('distance') })
    it(`${name}: preserves an explicit placement during a theme change`, () => { const value = make({ content: 'Text', theme: 'tooltip', placement: 'left' }); const options = getOptions(document.createElement('button'), value, {}); options.theme = 'dropdown'; expect(options.placement).toBe('left') })
    it(`${name}: preserves the resolved default placement during a theme change`, () => { const value = make({ content: 'Text', theme: 'tooltip' }); const options = getOptions(document.createElement('button'), value, {}); expect(options.placement).toBe('top'); options.theme = 'dropdown'; expect(options.placement).toBe('top') })
  }
  it('keeps a ref-backed content value live', () => { const content = ref('Before'); const options = getOptions(document.createElement('button'), reactive({ content }), {}); content.value = 'After'; expect(options.content).toBe('After') })
  it('lets toRefs observe returned option writes', () => { const options = getOptions(document.createElement('button'), reactive({ content: 'Before' }), {}); const refs = toRefs(options); refs.content.value = 'After'; expect(options.content).toBe('After') })
  it('tracks newly added application properties in a rendered option spread', async () => { const value = reactive<Record<string, any>>({ content: 'Text' }); const options = getOptions(document.createElement('button'), value, {}); let rendered: Record<string, any>; stops.push(watchEffect(() => { rendered = { ...options } })); value.disabled = true; await flush(); expect(rendered!.disabled).toBe(true) })
  it('tracks deletion of application properties in a rendered option spread', async () => { const value = reactive<Record<string, any>>({ content: 'Text', disabled: true }); const options = getOptions(document.createElement('button'), value, {}); let rendered: Record<string, any>; stops.push(watchEffect(() => { rendered = { ...options } })); delete value.disabled; await flush(); expect(rendered!).not.toHaveProperty('disabled') })
})

describe('vue option semantics', () => {
  it('preserves markRaw option semantics', () => {
    const input = markRaw({ content: 'Text' })
    const options = getOptions(document.createElement('button'), input, {})
    expect(isReactive(options)).toBe(false)
    expect(options).toBe(input)
  })
  it('preserves shallowReactive option semantics', () => {
    const nested = { value: 'Text' }
    const input = shallowReactive({ content: 'Text', nested })
    const options = getOptions(document.createElement('button'), input, {})
    expect(isShallow(options)).toBe(true)
    expect(options.nested).toBe(nested)
  })
  it('does not unwrap a raw option ref before Vue receives the options', () => {
    const content = ref('Text')
    const options = getOptions(document.createElement('button'), { content }, {})
    expect(options.content).toBe(content)
  })
})

describe('event handlers that change lifecycle state', () => {
  it('does not queue animation frames when disposed inside apply-hide', async () => { const f: ReturnType<typeof mount> = mount({}, name => { if (name === 'apply-hide') { f.api.dispose() } }); f.api.show({ skipDelay: true }); await settle(); f.api.hide({ skipDelay: true }); expect(frames.size).toBe(0); expect(f.api.slotData.value.isShown).toBe(false) })
  it('does not queue animation frames when unmounted inside apply-hide', async () => { const f: ReturnType<typeof mount> = mount({}, name => { if (name === 'apply-hide') { f.unmount() } }); f.api.show({ skipDelay: true }); await settle(); f.api.hide({ skipDelay: true }); expect(frames.size).toBe(0) })
  it('can show from an apply-hide handler', async () => { const f: ReturnType<typeof mount> = mount({}, name => { if (name === 'apply-hide') { f.api.show({ skipDelay: true }) } }); f.api.show({ skipDelay: true }); await settle(); f.api.hide({ skipDelay: true }); await settle(); assertState(f, true) })
  it('does not register a controller destroyed by another popper group handler', async () => { const ctx = context(); let second: ReturnType<typeof mount>; const first = mount({ showGroup: 'first' }, name => { if (name === 'close-group') { second.api.dispose() } }); first.api.show({ skipDelay: true }); await settle(); second = mount({ showGroup: 'second' }); second.api.show({ skipDelay: true }); await settle(); expect(ctx.shownPoppers).toHaveLength(0) })
  it('closes all previous groups even if a hide handler synchronously unmounts a popper', async () => { const ctx = context(); const first: ReturnType<typeof mount> = mount({ showGroup: 'old' }, name => { if (name === 'hide') { first.unmount() } }); const second = mount({ showGroup: 'old' }); first.api.show({ skipDelay: true }); second.api.show({ skipDelay: true }); await settle(); const next = mount({ showGroup: 'new' }); next.api.show({ skipDelay: true }); await settle(); expect(second.api.slotData.value.isShown).toBe(false); expect(ctx.shownPoppers).toHaveLength(1); expect(next.api.slotData.value.isShown).toBe(true) })
})

describe('live positioning requests', () => {
  it('keeps a live resize result when show is requested again', async () => {
    const f = mount(); f.api.show({ skipDelay: true }); await settle()
    let resolvePosition!: (value: any) => void
    vi.mocked(computePosition).mockImplementationOnce(() => new Promise(resolve => { resolvePosition = resolve }))
    const pending = f.api.onResize(); await flush()
    f.api.show({ skipDelay: true })
    resolvePosition({ x: 99, y: 20, placement: 'top', strategy: 'absolute', middlewareData: {} })
    await pending; await settle()
    expect(f.api.slotData.value.result?.x).toBe(99)
    expect(f.api.slotData.value.isShown).toBe(true)
  })
  it('updates position while a delayed hide still leaves the popper visible', async () => {
    const f = mount({ delay: { show: 0, hide: 1000 } }); f.api.show({ skipDelay: true }); await settle()
    let resolvePosition!: (value: any) => void
    vi.mocked(computePosition).mockImplementationOnce(() => new Promise(resolve => { resolvePosition = resolve }))
    const pending = f.api.onResize(); await flush(); f.api.hide()
    resolvePosition({ x: 99, y: 20, placement: 'top', strategy: 'absolute', middlewareData: {} })
    await pending; await flush()
    expect(f.api.slotData.value.isShown).toBe(true)
    expect(f.api.slotData.value.result?.x).toBe(99)
  })
})
