// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import FloatingVue, { Dropdown, Menu, Tooltip, hideAllPoppers, recomputeAllPoppers } from './index'

// This suite runs without any browser global: importing the library or
// rendering it on the server must never touch window/document.

function render (component: unknown, props = {}) {
  const app = createSSRApp({
    render: () => h(component as Parameters<typeof h>[0], props, {
      default: () => h('button', 'Trigger'),
      popper: () => h('p', 'Popper content'),
    }),
  })
  app.use(FloatingVue)
  return renderToString(app)
}

describe('ssr', () => {
  it('imports without touching browser globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof FloatingVue.install).toBe('function')
  })

  it('global helpers no-op on the server', () => {
    expect(() => hideAllPoppers()).not.toThrow()
    expect(() => recomputeAllPoppers()).not.toThrow()
  })

  it.each([
    ['Dropdown', Dropdown],
    ['Menu', Menu],
    ['Tooltip', Tooltip],
  ])('renders %s to string', async (_name, component) => {
    const html = await render(component)
    expect(html).toContain('v-popper')
    expect(html).toContain('Trigger')
  })

  it('does not render the popper content lazily by default', async () => {
    const html = await render(Dropdown)
    expect(html).not.toContain('Popper content')
  })

  it('renders the popper content when eagerMount is set', async () => {
    const html = await render(Dropdown, { eagerMount: true })
    expect(html).toContain('Popper content')
    expect(html).toContain('v-popper__popper--hidden')
  })
})
