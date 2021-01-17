import { indent } from './format-object'
import Color from 'color'

export function generateCSS (theme) {
  const components = [
    generateInnerCSS(theme),
    generateArrowCSS(theme),
  ]
  return components.filter(lines => lines.length).map(lines => lines.join('\n')).join('\n\n')
}

function generateInnerCSS (theme) {
  return generateCSSForComponent(theme, 'inner', (styles, lines) => {
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

    if (styles.borderRadius != null) {
      lines.push(`border-radius: ${styles.borderRadius}px`)
    }

    if (styles.boxShadow != null) {
      const { x, y, size, color, opacity } = styles.boxShadow
      lines.push(`box-shadow: ${x}px ${y}px ${size}px ${generateColorCSS({ color, opacity })}`)
    }
  })
}

function generateArrowCSS (theme) {
  return generateCSSForComponent(theme, 'arrow', (styles, lines) => {
    if (styles.color != null) {
      lines.push(`border-color: ${generateColorCSS(styles.color)}`)
    }
  })
}

/**
 * @param {(styles: any, lines: string[]) => unknown} handler
 */
function generateCSSForComponent (theme, key, handler) {
  const styles = theme.styles[key]
  const lines = [`.v-popper--theme-${theme.name} .v-popper__${key} {`]
  const ruleLines = []
  handler(styles, ruleLines)
  if (!ruleLines.length) return []
  lines.push(...ruleLines.map(l => indent(1) + l + ';'))
  lines.push('}')
  return lines
}

function generateColorCSS ({ color, opacity }) {
  const c = Color(color).alpha(opacity)
  if (opacity === 1) {
    return c.hex().toLowerCase()
  } else {
    return c.string()
  }
}
