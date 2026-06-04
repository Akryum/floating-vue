export let supportsPassive = false

if (typeof window !== 'undefined') {
  supportsPassive = false
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get () {
        supportsPassive = true
      },
    })
    // Listener body is irrelevant — we only care that reading `passive` triggers the getter.
    const noop = () => {}
    window.addEventListener('test' as keyof WindowEventMap, noop, opts)
    window.removeEventListener('test' as keyof WindowEventMap, noop, opts)
  } catch (e) {}
}

export let isIOS = false
if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
  const msStream = (window as Window & { MSStream?: unknown }).MSStream
  isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !msStream
}
