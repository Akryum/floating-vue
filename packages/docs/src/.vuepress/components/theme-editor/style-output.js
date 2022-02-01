import { indent } from './format-object'
import { state } from './state'
import Color from 'color'
import { baseStyles, builtinStyles } from './builtin-themes'

const keys = [
  'normal',
  'dark',
]

export function generateCSS (theme) {
  const components = []
  for (const key of keys) {
    components.push(
      generateInnerCSS(theme, key),
      generateArrowOuterCSS(theme, key),
      generateArrowInnerCSS(theme, key),
    )
  }
  return components.filter(lines => lines.length).map(lines => lines.join('\n')).join('\n\n')
}

function generateInnerCSS (theme, key) {
  return generateCSSForComponent(theme, key, 'inner', (styles, { merged, inherited }, lines) => {
    if (styles.backgroundColor != null) {
      lines.push(`background: ${generateColorCSS(styles.backgroundColor)}`)
    }

    if (styles.color != null) {
      lines.push(`color: ${generateColorCSS(styles.color)}`)
    }

    if (styles.padding != null) {
      const { multiple, top, right, bottom, left } = styles.padding
      const values = [top]
      if (multiple) {
        if (right !== top || bottom !== top || left !== right) {
          values.push(right)
        }
        if (bottom !== top || left !== right) {
          values.push(bottom)
        }
        if (left !== right) {
          values.push(left)
        }
      }
      lines.push(`padding: ${values.map(v => `${v}px`).join(' ')}`)
    }

    if (styles.border && (styles.border.enabled !== inherited.border?.enabled || (styles.border.enabled && styles.border.color !== inherited.border?.color))) {
      if (merged.border.enabled) {
        lines.push(`border: 1px ${generateColorCSS(styles.border)} solid`)
      } else {
        lines.push(`border: none`)
      }
    }

    if (styles.borderRadius != null) {
      lines.push(`border-radius: ${styles.borderRadius}px`)
    }

    if (styles.boxShadow != null) {
      const { x, y, size, color, opacity } = styles.boxShadow
      lines.push(`box-shadow: ${x}px ${y}px ${size}px ${generateColorCSS({ color, opacity })}`)
    }
  })
}

function generateArrowOuterCSS (theme, key) {
  return generateCSSForComponent(theme, key, 'arrow-outer', (styles, { merged, inherited }, lines) => {
    if (styles.arrow && styles.arrow.enabled !== inherited.arrow?.enabled) {
      if (merged.arrow?.enabled) {
        lines.push(`visibility: visible`)
      } else {
        lines.push(`visibility: hidden`)
      }
    }

    if (merged.arrow?.enabled) {
      // Arrow enabled
      if (styles.border?.enabled) {
        lines.push(`border-color: ${generateColorCSS(styles.border)}`)
      } else if (!merged.border?.enabled && styles.backgroundColor != null) {
        lines.push(`border-color: ${generateColorCSS(styles.backgroundColor)}`)
      }
    }
  })
}

function generateArrowInnerCSS (theme, key) {
  return generateCSSForComponent(theme, key, 'arrow-inner', (styles, { merged, inherited }, lines) => {
    if ((styles.arrow && styles.arrow.enabled !== inherited.arrow?.enabled) ||
    (styles.border && styles.border.enabled !== inherited.border?.enabled)) {
      if (merged.arrow?.enabled && merged.border?.enabled) {
        lines.push(`visibility: visible`)
      } else {
        lines.push(`visibility: hidden`)
      }
    }

    if (merged.arrow?.enabled) {
      // Arrow enabled
      if (merged.border?.enabled && styles.backgroundColor != null) {
        lines.push(`border-color: ${generateColorCSS(styles.backgroundColor)}`)
      }
    }
  })
}

/**
 * @param {(styles: any, inheritedStyles: { merged: any, inherited: any }, lines: string[]) => unknown} handler
 */
function generateCSSForComponent (theme, key, classKey, handler) {
  const styles = theme.styles[key]
  if (!styles) return []
  const inherited = getInheritedStyleOptions(theme)[key]
  const merged = assign(assign({}, inherited), styles)

  const isDark = key === 'dark'
  let className = `.v-popper--theme-${theme.name} .v-popper__${classKey}`
  if (isDark) {
    className = `.${state.settings.darkClass} ${className}`
  }
  const lines = [`${className} {`]
  const ruleLines = []
  handler(styles, { inherited, merged }, ruleLines)
  if (!ruleLines.length) return []
  lines.push(...ruleLines.map(l => indent(1) + l + ';'))
  lines.push('}')
  return lines
}

function generateColorCSS ({ color, opacity }) {
  let c = Color(color)
  if (opacity != null) {
    c = c.alpha(opacity)
  }
  if (opacity == null || opacity === 1) {
    return c.hex().toLowerCase()
  } else {
    return c.string()
  }
}

function getInheritedStyleOptions (theme) {
  let themeConfig = theme
  const value = {}
  for (const key of keys) {
    value[key] = assign({}, baseStyles)
  }
  const parentStyles = []
  do {
    // Support theme extend
    if (themeConfig.config.$extend) {
      if (themeConfig.config.$extend in builtinStyles) {
        const obj = {}
        for (const key in value) {
          obj[key] = assign({}, builtinStyles[themeConfig.config.$extend])
        }
        parentStyles.push(obj)
        break
      }
      themeConfig = state.themeMap[themeConfig.config.$extend]
    } else {
      themeConfig = null
    }
    if (themeConfig) {
      parentStyles.push(themeConfig.styles)
    }
  } while (themeConfig)

  parentStyles.reverse()

  for (const styles of parentStyles) {
    assign(value, styles)
  }

  return value
}

function assign (to, from) {
  for (const key in from) {
    if (Object.prototype.hasOwnProperty.call(from, key)) {
      if (typeof from[key] === 'object') {
        if (!to[key]) {
          to[key] = {}
        }
        assign(to[key], from[key])
      } else {
        to[key] = from[key]
      }
    }
  }
  return to
}
