import { describe, expect, it } from 'vitest'
import { acquireMouseTracking, isAimingPopper, lineIntersectsLine } from './aiming'

function fakeElement (left: number, top: number, width: number, height: number): Element {
  const el = document.createElement('div')
  el.getBoundingClientRect = () => ({
    x: left,
    y: top,
    left,
    top,
    width,
    height,
    right: left + width,
    bottom: top + height,
    toJSON: () => '',
  })
  return el
}

function moveMouse (x: number, y: number) {
  window.dispatchEvent(new MouseEvent('mousemove', { clientX: x, clientY: y }))
}

describe('lineIntersectsLine', () => {
  it('detects crossing segments', () => {
    expect(lineIntersectsLine(0, 0, 10, 10, 0, 10, 10, 0)).toBe(true)
  })

  it('rejects parallel segments', () => {
    expect(lineIntersectsLine(0, 0, 10, 0, 0, 5, 10, 5)).toBe(false)
  })

  it('rejects segments that would only cross when extended', () => {
    expect(lineIntersectsLine(0, 0, 1, 1, 0, 10, 10, 0)).toBe(false)
  })
})

describe('mouse aiming', () => {
  const reference = fakeElement(0, 0, 100, 100)
  const popper = fakeElement(200, 0, 100, 100)

  it('detects the mouse heading from the reference toward the popper', () => {
    const release = acquireMouseTracking()
    moveMouse(50, 50)
    moveMouse(60, 50)
    expect(isAimingPopper(reference, popper)).toBe(true)
    release()
  })

  it('rejects the mouse heading away from the popper', () => {
    const release = acquireMouseTracking()
    moveMouse(50, 50)
    moveMouse(40, 50)
    expect(isAimingPopper(reference, popper)).toBe(false)
    release()
  })

  it('stops tracking once every interest is released', () => {
    const release = acquireMouseTracking()
    moveMouse(50, 50)
    moveMouse(60, 50)
    release()

    // If the tracker were still attached, this would leave the reference bounds
    moveMouse(500, 500)
    moveMouse(510, 510)
    expect(isAimingPopper(reference, popper)).toBe(true)
  })
})
