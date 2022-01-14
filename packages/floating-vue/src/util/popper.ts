import type { Placement as BasePlacement } from '@floating-ui/dom'

export type Placement = BasePlacement | 'auto' | 'auto-start' | 'auto-end'

export const placements: Placement[] = ['auto', 'top', 'bottom', 'left', 'right'].reduce((acc, base) => acc.concat([
  base,
  `${base}-start`,
  `${base}-end`,
]), [])
