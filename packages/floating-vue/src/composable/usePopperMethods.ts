import { nextTick, type Ref } from 'vue'
import type { PopperApi, PopperMethodOptions } from './popper/types'

/**
 * Imperative methods exposed by public popper wrapper components.
 */
export type PopperExposedMethods = Pick<PopperApi, 'show' | 'hide' | 'dispose' | 'onResize'>

/**
 * Creates stable method proxies that forward to an inner popper ref.
 */
export function usePopperMethods (popper: Ref<PopperExposedMethods | null>): PopperExposedMethods {
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
function callOrWait (
  popper: Ref<PopperExposedMethods | null>,
  method: 'show' | 'hide',
  options?: PopperMethodOptions,
): void | Promise<void>
function callOrWait (
  popper: Ref<PopperExposedMethods | null>,
  method: 'dispose',
): void | Promise<void>
function callOrWait (
  popper: Ref<PopperExposedMethods | null>,
  method: 'onResize',
): Promise<void>
function callOrWait (
  popper: Ref<PopperExposedMethods | null>,
  method: keyof PopperExposedMethods,
  options?: PopperMethodOptions,
): void | Promise<void> {
  const fn = popper.value?.[method] as ((options?: PopperMethodOptions) => void | Promise<void>) | undefined
  if (fn) {
    return fn(options)
  }
  return nextTick(() => {
    const deferredFn = popper.value?.[method] as ((options?: PopperMethodOptions) => void | Promise<void>) | undefined
    return deferredFn?.(options)
  })
}
