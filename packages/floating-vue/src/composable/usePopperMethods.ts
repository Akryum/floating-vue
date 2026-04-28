import { nextTick, type Ref } from 'vue'
import type { PopperApi, PopperMethodOptions } from './popper/types'

type PopperMethods = Pick<PopperApi, 'show' | 'hide' | 'dispose' | 'onResize'>

/**
 * Creates stable method proxies that forward to an inner popper ref.
 */
export function usePopperMethods (popper: Ref<PopperMethods | null>) {
  return {
    show: (options?: PopperMethodOptions) => callOrWait(popper, 'show', options),
    hide: (options?: PopperMethodOptions) => callOrWait(popper, 'hide', options),
    dispose: () => callOrWait(popper, 'dispose'),
    onResize: () => callOrWait(popper, 'onResize'),
  }
}

/**
 * Calls an exposed popper method, or retries after refs settle.
 */
function callOrWait<K extends keyof PopperMethods> (
  popper: Ref<PopperMethods | null>,
  method: K,
  options?: PopperMethodOptions,
) {
  const fn = popper.value?.[method] as ((options?: PopperMethodOptions) => unknown) | undefined
  if (fn) {
    return fn(options)
  }
  return nextTick(() => {
    const deferredFn = popper.value?.[method] as ((options?: PopperMethodOptions) => unknown) | undefined
    return deferredFn?.(options)
  })
}
