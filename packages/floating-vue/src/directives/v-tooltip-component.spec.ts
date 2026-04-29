import { afterEach, describe, expect, test } from 'vitest'
import { createTooltip, destroyTooltip } from './v-tooltip'

let target: HTMLElement | null = null

/**
 * Waits for directive component rendering and popper animation frames.
 */
async function waitForTooltipUpdates () {
  await Promise.resolve()
  await new Promise(resolve => setTimeout(resolve, 0))
  await new Promise(resolve => requestAnimationFrame(resolve))
  await new Promise(resolve => requestAnimationFrame(resolve))
  await Promise.resolve()
}

afterEach(() => {
  if (target) {
    destroyTooltip(target)
    target = null
  }
  document.body.innerHTML = ''
  document.body.className = ''
})

describe('v-tooltip directive component', () => {
  test('shows and hides manual directive content', async () => {
    target = document.createElement('button')
    target.textContent = 'Reference'
    document.body.appendChild(target)
    const tooltip = createTooltip(target, {
      content: 'Directive content',
      triggers: [],
      delay: 0,
      disposeTimeout: null,
      noAutoFocus: true,
    }, {})

    tooltip.show()
    await waitForTooltipUpdates()

    expect(document.body.textContent).toContain('Directive content')
    expect(document.body.querySelector('.v-popper__popper--shown')).not.toBe(null)

    tooltip.hide()
    await waitForTooltipUpdates()

    expect(document.body.querySelector('.v-popper__popper--hidden')).not.toBe(null)
  })
})
