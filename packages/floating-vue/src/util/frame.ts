export function nextFrame (signal?: AbortSignal): Promise<void> {
  return new Promise(resolve => {
    if (signal?.aborted) {
      resolve()
      return
    }

    let frame: number

    function finish () {
      signal?.removeEventListener('abort', abort)
      resolve()
    }

    function abort () {
      cancelAnimationFrame(frame)
      finish()
    }

    signal?.addEventListener('abort', abort, { once: true })

    frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(finish)
    })
  })
}
