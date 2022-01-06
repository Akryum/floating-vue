const KEY_ESCAPE_REG = /[\s-.:|#@$£*%]/
const MAX_SINGLE_LINE_ARRAY_LENGTH = 3

export function formatObjectToSource (obj) {
  return printLines(Array.isArray(obj) ? arrayToSourceLines(obj) : objectToSourceLines(obj))
}

function objectToSourceLines (object, indentCount = 0) {
  return createLines(indentCount, lines => {
    lines.push('{')
    lines.push(...createLines(1, lines => {
      for (const key in object) {
        const value = object[key]

        let printedKey = key
        if (KEY_ESCAPE_REG.test(key)) {
          printedKey = `'${printedKey}'`
        }

        addLinesFromValue(lines, value, `${printedKey}: `, ',')
      }
    }))
    lines.push('}')
  })
}

/**
 * @param {any[]} array
 * @param {number} indentCount
 */
function arrayToSourceLines (array, indentCount = 0) {
  return createLines(indentCount, lines => {
    const contentLines = createLines(1, lines => {
      for (const value of array) {
        addLinesFromValue(lines, value, '', ',')
      }
    })
    if (contentLines.length === 0) {
      lines.push('[]')
    } else if (contentLines.length <= MAX_SINGLE_LINE_ARRAY_LENGTH) {
      const [first] = contentLines
      first.line = contentLines.map(({ line }) => line.substring(0, line.length - 1)).join(', ')
      first.line = `[${first.line}]`
      first.spaces--
      lines.push(first)
    } else {
      lines.push('[', ...contentLines, ']')
    }
  })
}

/**
 * @param {number} count
 */
export function indent (count) {
  return ' '.repeat(count * 2)
}

/**
 * @param {number} indentCount
 * @param {(lines: any[]) => unknown} handler
 */
function createLines (indentCount, handler) {
  const lines = []
  handler(lines)
  return lines.map(line => {
    if (line.spaces != null) {
      line.spaces += indentCount
      return line
    }
    return { spaces: indentCount, line }
  })
}

function printLines (lines) {
  return lines.map(({ spaces, line }) => indent(spaces) + line).join('\n')
}

function addLinesFromValue (lines, value, before, after) {
  let result
  if (Array.isArray(value)) {
    lines.push(...wrap(arrayToSourceLines(value), before, after))
    return
  } else if (value && typeof value === 'object') {
    lines.push(...wrap(objectToSourceLines(value), before, after))
    return
  } else if (typeof value === 'string') {
    result = value.includes('\'') ? `\`${value}\`` : `'${value}'`
  } else if (typeof value === 'undefined') {
    return
  } else {
    result = value
  }
  lines.push(before + result + after)
}

function wrap (lines, before, after) {
  lines[0].line = before + lines[0].line
  lines[lines.length - 1].line += after
  return lines
}
