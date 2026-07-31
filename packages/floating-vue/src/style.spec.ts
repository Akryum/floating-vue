import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, test } from 'vitest'
import { getPresetClasses } from './config'

const style = readFileSync(resolve(process.cwd(), 'src/style.css'), 'utf8')

describe('default stylesheet', () => {
  test('targets the classes emitted for built-in presets', () => {
    expect(getPresetClasses('tooltip')).toContain('v-popper--preset-tooltip')
    expect(getPresetClasses('dropdown')).toContain('v-popper--preset-dropdown')
    expect(style).toContain('.v-popper--preset-tooltip .v-popper__inner')
    expect(style).toContain('.v-popper--preset-dropdown .v-popper__inner')
  })
})
