/**
 * Emits exposed by popper components and consumed by the popper composable.
 */
export const popperEmits = {
  show: () => true,
  hide: () => true,
  'update:shown': (shown: boolean) => typeof shown === 'boolean',
  'apply-show': () => true,
  'apply-hide': () => true,
  'close-group': () => true,
  'close-directive': () => true,
  'auto-hide': () => true,
  resize: () => true,
}

export type PopperEmitOptions = typeof popperEmits
