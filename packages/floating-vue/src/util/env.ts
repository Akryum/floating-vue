export let supportsPassive = false

if (typeof window !== 'undefined') {
  supportsPassive = false
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get () {
        supportsPassive = true
      },
    })
    window.addEventListener('test', null, opts)
  } catch (e) {}
}

export let isIOS = false
if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
  // @ts-expect-error MSStream is missing in window type
  isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
}
