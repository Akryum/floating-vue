import type { Placement as BasePlacement } from '@floating-ui/dom'

export function applyModifier (modifiers, name, data) {
  let modifier = modifiers.find(m => m.name === name)

  if (!modifier) {
    modifier = {
      name,
    }
    modifiers.push(modifier)
  }

  for (const key in data) {
    if (key === 'options') {
      if (!modifier.options) {
        modifier.options = {}
      }
      Object.assign(modifier.options, data.options)
    } else {
      modifier[key] = data[key]
    }
  }
}

export type Placement = BasePlacement | 'auto' | 'auto-start' | 'auto-end'

export const placements: Placement[] = ['auto', 'top', 'bottom', 'left', 'right'].reduce((acc, base) => acc.concat([
  base,
  `${base}-start`,
  `${base}-end`,
]), [])
