/**
 * Selector that matches every commonly-focusable element. Browsers also focus
 * elements with positive tabindex even when natively non-interactive.
 */
const FOCUSABLE_SELECTOR = [
  'a[href]',
  'area[href]',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  'iframe',
  'audio[controls]',
  'video[controls]',
  '[tabindex]:not([tabindex="-1"])',
  '[contenteditable]:not([contenteditable="false"])',
].join(',')

/**
 * Returns descendants of `root` that can receive keyboard focus, in DOM order.
 * Hidden elements (display:none, visibility:hidden, zero size) are filtered out.
 */
export function getFocusableElements (root: Element): HTMLElement[] {
  const all = Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
  return all.filter(isVisible)
}

/**
 * Lightweight visibility check used by getFocusableElements. Falls back gracefully
 * when getComputedStyle is unavailable (non-browser environments).
 */
function isVisible (el: HTMLElement): boolean {
  if (el.offsetWidth === 0 && el.offsetHeight === 0 && !el.getClientRects().length) return false
  if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') return true
  const style = window.getComputedStyle(el)
  return style.visibility !== 'hidden' && style.display !== 'none'
}

/**
 * Installs a Tab/Shift+Tab focus trap on `root`. Returns a cleanup function that
 * removes the listener.
 */
export function installFocusTrap (root: HTMLElement): () => void {
  function onKey (event: KeyboardEvent) {
    if (event.key !== 'Tab' || event.defaultPrevented) return
    const focusables = getFocusableElements(root)
    if (focusables.length === 0) {
      event.preventDefault()
      root.focus()
      return
    }
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    const active = document.activeElement
    if (event.shiftKey) {
      if (active === first || !root.contains(active)) {
        event.preventDefault()
        last.focus()
      }
    } else if (active === last) {
      event.preventDefault()
      first.focus()
    }
  }
  root.addEventListener('keydown', onKey)
  return () => root.removeEventListener('keydown', onKey)
}

/**
 * Installs Arrow Up/Down/Home/End navigation between elements with
 * `role="menuitem"`. Returns a cleanup function.
 */
export function installMenuKeyboardNav (root: HTMLElement): () => void {
  function onKey (event: KeyboardEvent) {
    if (!['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key) || event.defaultPrevented) return
    const items = Array.from(root.querySelectorAll<HTMLElement>('[role="menuitem"]')).filter(isVisible)
    if (items.length === 0) return
    event.preventDefault()
    const active = document.activeElement
    const currentIndex = active instanceof HTMLElement ? items.indexOf(active) : -1
    let nextIndex = currentIndex
    if (event.key === 'ArrowDown') nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % items.length
    else if (event.key === 'ArrowUp') nextIndex = currentIndex <= 0 ? items.length - 1 : currentIndex - 1
    else if (event.key === 'Home') nextIndex = 0
    else nextIndex = items.length - 1
    items[nextIndex].focus()
  }
  root.addEventListener('keydown', onKey)
  return () => root.removeEventListener('keydown', onKey)
}

/**
 * Returns the element that should receive focus on close, or `null` if it is
 * no longer in the document.
 */
export function pickRestoreTarget (previousFocus: Element | null): HTMLElement | null {
  if (!previousFocus) return null
  if (!previousFocus.isConnected) return null
  if (previousFocus instanceof HTMLElement) return previousFocus
  return null
}
