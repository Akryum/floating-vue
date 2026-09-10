export const isIOS = typeof window !== 'undefined' && typeof navigator !== 'undefined'
  // @ts-expect-error MSStream is missing in window type
  && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
