import { defineConfig } from '@peeky/test'

export default defineConfig({
  runtimeEnv: 'dom',
  setupFiles: [
    './tests/unit/jest-setup.js',
  ],
})
