import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// noinspection ES6UnusedImports
import type {} from 'vite-ssg'

// https://vite.dev/config/
export default defineConfig({
  // base: '/cssnr-vue/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: { allowedHosts: true },
  ssgOptions: {
    mock: true,
    script: 'async',
  },
  ssr: {
    noExternal: ['bootstrap'],
  },
})
