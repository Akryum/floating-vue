// Track mouse movement to detect aiming at the popper

let mousePreviousX = 0
let mousePreviousY = 0
let mouseX = 0
let mouseY = 0

let interestCount = 0

function trackMouse (event: MouseEvent) {
  mousePreviousX = mouseX
  mousePreviousY = mouseY
  mouseX = event.clientX
  mouseY = event.clientY
}

// The global mousemove tracker is refcounted: it is only attached while at
// least one popper needs hover aiming.

export function acquireMouseTracking () {
  interestCount++
  if (interestCount === 1) {
    window.addEventListener('mousemove', trackMouse, { passive: true })
  }
}

export function releaseMouseTracking () {
  interestCount--
  if (interestCount === 0) {
    window.removeEventListener('mousemove', trackMouse)
  }
}

export function isAimingPopper (referenceNode: Element, popperNode: Element): boolean {
  const referenceBounds = referenceNode.getBoundingClientRect()
  if (mouseX >= referenceBounds.left && mouseX <= referenceBounds.right && mouseY >= referenceBounds.top && mouseY <= referenceBounds.bottom) {
    const popperBounds = popperNode.getBoundingClientRect()
    const vectorX = mouseX - mousePreviousX
    const vectorY = mouseY - mousePreviousY
    const distance = (popperBounds.left + popperBounds.width / 2) - mousePreviousX + (popperBounds.top + popperBounds.height / 2) - mousePreviousY
    // Make the vector long enough to be sure that it can intersect with the popper
    const newVectorLength = distance + popperBounds.width + popperBounds.height
    const edgeX = mousePreviousX + vectorX * newVectorLength
    const edgeY = mousePreviousY + vectorY * newVectorLength
    // Check for collision between the vector and the popper bounds
    return (
      lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.left, popperBounds.top, popperBounds.left, popperBounds.bottom) || // Left edge
      lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.left, popperBounds.top, popperBounds.right, popperBounds.top) || // Top edge
      lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.right, popperBounds.top, popperBounds.right, popperBounds.bottom) || // Right edge
      lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.left, popperBounds.bottom, popperBounds.right, popperBounds.bottom) // Bottom edge
    )
  }
  return false
}

export function lineIntersectsLine (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number) {
  const uA = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))
  const uB = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))
  return (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1)
}
