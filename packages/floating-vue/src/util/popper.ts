import type { Placement as BasePlacement } from '@floating-ui/dom'

export type Placement = BasePlacement | 'auto' | 'auto-start' | 'auto-end'

const sides = ['auto', 'top', 'bottom', 'left', 'right'] as const

export const placements: Placement[] = sides.reduce<Placement[]>((acc, base) => acc.concat([
  base,
  `${base}-start`,
  `${base}-end`,
]), [])
