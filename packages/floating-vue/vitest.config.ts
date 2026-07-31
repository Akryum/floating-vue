import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    vue(),
  ],
  // Mirrors the build-time define in vite.config.ts so specs can import src/index.ts.
  define: {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    VERSION: JSON.stringify(require('./package.json').version),
  },
  test: {
    environment: 'happy-dom',
    globals: false,
    include: ['src/**/*.spec.ts'],
    setupFiles: ['./tests/unit/vitest-setup.ts'],
  },
})
