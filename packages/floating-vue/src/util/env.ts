export const supportsPassive = (() => {
  if (typeof window === 'undefined') { return false }
  let supported = false
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get () {
        supported = true
      },
    })
    window.addEventListener('test', null, opts)
  } catch {}
  return supported
})()

export const isIOS = typeof window !== 'undefined' && typeof navigator !== 'undefined'
  // @ts-expect-error MSStream is missing in window type
  && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
