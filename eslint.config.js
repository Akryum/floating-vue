import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    typescript: true,
    lessOpinionated: true,
    perfectionist: false,
    jsonc: true,
    // Disabled: its yaml-enforce-settings autofix injects a strict pnpm
    // trustPolicy into pnpm-workspace.yaml that breaks `pnpm install`
    // against this repo's existing lockfile (ERR_PNPM_TRUST_DOWNGRADE).
    pnpm: false,
    yaml: true,
    toml: false,
    markdown: false,
    ignores: [
      '**/dist',
      '**/*.d.ts',
      '**/cache',
      '**/test-results',
      '**/playwright-report',
      '**/blob-report',
    ],
    stylistic: {
      braceStyle: '1tbs',
    },
  },
  {
    rules: {
      // Preserve the project's existing formatting conventions
      'style/space-before-function-paren': ['error', 'always'],
      'style/arrow-parens': 'off',
      'style/quote-props': 'off',
      'style/operator-linebreak': 'off',
      'style/max-statements-per-line': 'off',
      'vue/block-order': 'off',
      'vue/singleline-html-element-content-newline': 'off',

      // Matches the previous .eslintrc.js explicit choices
      'ts/no-use-before-define': 'off',
      'ts/no-this-alias': 'off',

      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      'vue/no-v-html': 'off',
      'vue/require-prop-types': 'off',
    },
  },
  {
    files: ['packages/floating-vue/src/components/**/*.vue'],
    rules: {
      // Template refs are consumed via `this.$refs`/`extends` from a different file
      'vue/no-unused-refs': 'off',
      // Public event API is intentionally kebab-case (e.g. `apply-show`, `close-group`)
      'vue/custom-event-name-casing': 'off',
    },
  },
)
