import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { nextFrame } from './frame'

let frames: Map<number, FrameRequestCallback>
let frameId: number

beforeEach(() => {
  frames = new Map()
  frameId = 0
  vi.stubGlobal('requestAnimationFrame', vi.fn((callback: FrameRequestCallback) => {
    const id = ++frameId
    frames.set(id, callback)
    return id
  }))
  vi.stubGlobal('cancelAnimationFrame', vi.fn((id: number) => {
    frames.delete(id)
  }))
})

afterEach(() => {
  frames.clear()
  vi.unstubAllGlobals()
})

function runFrame () {
  // A callback registered during this frame belongs to the next frame.
  const callbacks = [...frames.values()]
  frames.clear()
  for (const callback of callbacks) { callback(0) }
}

describe('nextFrame', () => {
  it('waits for two frames normally', async () => {
    const completed = vi.fn()
    const pending = nextFrame().then(completed)
    expect(requestAnimationFrame).toHaveBeenCalledTimes(1)
    expect(frames.size).toBe(1)

    runFrame()
    await Promise.resolve()
    expect(completed).not.toHaveBeenCalled()
    expect(requestAnimationFrame).toHaveBeenCalledTimes(2)
    expect(frames.size).toBe(1)

    runFrame()
    expect(frames.size).toBe(0)
    await pending
    expect(completed).toHaveBeenCalledOnce()
  })

  it('cancels the first frame and releases the awaiting caller on abort', async () => {
    const controller = new AbortController()
    const completed = vi.fn()
    const pending = nextFrame(controller.signal).then(completed)
    expect(frames.size).toBe(1)
    controller.abort()
    expect(frames.size).toBe(0)
    await pending
    expect(completed).toHaveBeenCalledOnce()
  })

  it('cancels the second frame on abort', async () => {
    const controller = new AbortController()
    const completed = vi.fn()
    const pending = nextFrame(controller.signal).then(completed)
    runFrame()
    expect(requestAnimationFrame).toHaveBeenCalledTimes(2)
    expect(frames.size).toBe(1)
    expect(completed).not.toHaveBeenCalled()
    controller.abort()
    expect(frames.size).toBe(0)
    await pending
    expect(completed).toHaveBeenCalledOnce()
  })

  it('does not queue frames for an already aborted signal', async () => {
    const controller = new AbortController()
    controller.abort()
    const completed = vi.fn()
    await nextFrame(controller.signal).then(completed)
    expect(requestAnimationFrame).not.toHaveBeenCalled()
    expect(frames.size).toBe(0)
    expect(completed).toHaveBeenCalledOnce()
  })
})
