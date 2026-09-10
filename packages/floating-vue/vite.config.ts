/// <reference types="vitest/config" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['src/**/*.spec.ts'],
  },
})
