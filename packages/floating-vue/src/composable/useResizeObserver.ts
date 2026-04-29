import { onScopeDispose, watch, type Ref } from 'vue'

/**
 * Watches an element for size changes via the native ResizeObserver API.
 *
 * The observer (re)attaches when `enabled()` returns true and the target ref
 * resolves to an element. The first synchronous callback the browser fires on
 * observe() is swallowed so consumers only see real size changes after mount,
 * matching the behaviour of the previous vue-resize wrapper.
 *
 * @param target  Reactive ref to the element to observe.
 * @param callback Invoked on every size change after the initial mount.
 * @param enabled Optional getter to gate observation; defaults to always on.
 */
export function useResizeObserver (
  target: Ref<HTMLElement | null | undefined>,
  callback: () => void,
  enabled: () => boolean = () => true,
): void {
  let observer: ResizeObserver | null = null

  function stop () {
    observer?.disconnect()
    observer = null
  }

  function start (el: HTMLElement) {
    if (typeof ResizeObserver === 'undefined') return
    let initial = true
    observer = new ResizeObserver(() => {
      if (initial) {
        initial = false
        return
      }
      callback()
    })
    observer.observe(el)
  }

  watch(
    [target, enabled],
    ([el, on]) => {
      stop()
      if (on && el) start(el)
    },
    { immediate: true, flush: 'post' },
  )

  onScopeDispose(stop)
}
