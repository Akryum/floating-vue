import { afterEach, describe, expect, test, vi } from 'vitest'
import { createSSRApp, defineComponent, h, nextTick, type App } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { getPopperElement, waitForPopperUpdates } from '../../tests/unit/popper-helpers'
import Dropdown from './Dropdown'

let app: App<Element> | null = null

afterEach(() => {
  app?.unmount()
  app = null
  document.body.replaceChildren()
  vi.restoreAllMocks()
})

/**
 * Builds one real dropdown for server rendering and client hydration.
 */
function createFixture (props: { ariaId?: string, eagerMount?: boolean, shown?: boolean } = {}) {
  const root = defineComponent({
    setup () {
      return () => h(Dropdown, {
        ...props,
        triggers: [],
        delay: 0,
        disposeTimeout: null,
        noAutoFocus: true,
      }, {
        default: () => h('button', { id: 'reference' }, 'Reference'),
        popper: () => h('span', 'Floating content'),
      })
    },
  })

  return { root }
}

/**
 * Reads the popper root from HTML rendered before client mount.
 */
function getSsrPopper (html: string): HTMLElement {
  const container = document.createElement('div')
  container.innerHTML = html
  const popper = container.querySelector('.v-popper__popper')

  if (!popper) throw new Error('Expected SSR popper root')
  return popper as HTMLElement
}

describe('Popper hydration', () => {
  test.each([false, true])('does not render generated IDs or warn while hydrating (eagerMount: %s)', async eagerMount => {
    const fixture = createFixture({ eagerMount })
    const html = await renderToString(createSSRApp(fixture.root))

    expect(getSsrPopper(html).hasAttribute('id')).toBe(false)

    const container = document.createElement('div')
    container.innerHTML = html
    document.body.append(container)
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
    const error = vi.spyOn(console, 'error').mockImplementation(() => undefined)

    app = createSSRApp(fixture.root)
    app.mount(container)
    await nextTick()

    expect(warn).not.toHaveBeenCalled()
    expect(error).not.toHaveBeenCalled()
  })

  test('renders an explicit ariaId during SSR', async () => {
    const fixture = createFixture({ ariaId: 'account-menu' })
    const html = await renderToString(createSSRApp(fixture.root))

    expect(getSsrPopper(html).id).toBe('account-menu')
  })

  test('uses generated ID for both popper and aria-describedby when initially shown', async () => {
    const fixture = createFixture({ eagerMount: true, shown: true })
    const html = await renderToString(createSSRApp(fixture.root))
    const container = document.createElement('div')
    container.innerHTML = html
    document.body.append(container)

    app = createSSRApp(fixture.root)
    app.mount(container)
    await nextTick()

    await waitForPopperUpdates()

    const popper = getPopperElement()
    const reference = document.querySelector('#reference')

    expect(popper?.id).toMatch(/^popper_/)
    expect(reference?.getAttribute('aria-describedby')).toBe(popper?.id)
  })
})
