/// <reference types="vitest/config" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['packages/*/src/**/*.spec.ts', 'test/**/*.test.ts'],
  },
})
