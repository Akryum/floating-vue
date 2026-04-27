import { nextTick, type Ref } from 'vue'
import type { PopperApi, PopperMethodOptions } from './popper/types'

/**
 * Creates stable method proxies that forward to an inner popper ref.
 */
export function usePopperMethods (popper: Ref<Pick<PopperApi, 'show' | 'hide' | 'dispose' | 'onResize'> | null>) {
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
function callOrWait (popper: Ref<any>, method: string, options?: PopperMethodOptions) {
  if (popper.value?.[method]) {
    return popper.value[method](options)
  }
  return nextTick(() => popper.value?.[method]?.(options))
}
