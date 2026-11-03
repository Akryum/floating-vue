export function subscribeToPromise<T> (
  promise: PromiseLike<T>,
  callback: (value: T) => void,
) {
  let onResult: ((value: T) => void) | undefined = callback

  Promise.resolve(promise).then((value) => {
    const handler = onResult
    onResult = undefined
    handler?.(value)
  }, (error) => {
    const active = onResult != null
    onResult = undefined
    if (active) { throw error }
  })

  return () => { onResult = undefined }
}
