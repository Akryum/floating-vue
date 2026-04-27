import { supportsPassive } from '../../util/env'

let mousePreviousX = 0
let mousePreviousY = 0
let mouseX = 0
let mouseY = 0

if (typeof window !== 'undefined') {
  window.addEventListener('mousemove', event => {
    mousePreviousX = mouseX
    mousePreviousY = mouseY
    mouseX = event.clientX
    mouseY = event.clientY
  }, supportsPassive
    ? {
      passive: true,
    }
    : undefined)
}

/**
 * Returns true when pointer movement is aimed from reference toward popper.
 */
export function isAimingPopper (referenceNode: Element | null, popperNode: Element | null): boolean {
  if (!referenceNode || !popperNode) return false

  const referenceBounds = referenceNode.getBoundingClientRect()
  if (
    mouseX < referenceBounds.left ||
    mouseX > referenceBounds.right ||
    mouseY < referenceBounds.top ||
    mouseY > referenceBounds.bottom
  ) {
    return false
  }

  const popperBounds = popperNode.getBoundingClientRect()
  const vectorX = mouseX - mousePreviousX
  const vectorY = mouseY - mousePreviousY
  const distance = (popperBounds.left + popperBounds.width / 2) -
    mousePreviousX +
    (popperBounds.top + popperBounds.height / 2) -
    mousePreviousY
  const newVectorLength = distance + popperBounds.width + popperBounds.height
  const edgeX = mousePreviousX + vectorX * newVectorLength
  const edgeY = mousePreviousY + vectorY * newVectorLength

  return (
    lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.left, popperBounds.top, popperBounds.left, popperBounds.bottom) ||
    lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.left, popperBounds.top, popperBounds.right, popperBounds.top) ||
    lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.right, popperBounds.top, popperBounds.right, popperBounds.bottom) ||
    lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.left, popperBounds.bottom, popperBounds.right, popperBounds.bottom)
  )
}

/**
 * Tests whether two line segments intersect.
 */
function lineIntersectsLine (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number) {
  const uA = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))
  const uB = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))
  return (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1)
}
