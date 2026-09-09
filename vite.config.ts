import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { wgslVitePlugin } from '@vgpu/wgsl/loader-vite'

export default defineConfig(({ command }) => ({
  plugins: [react(), wgslVitePlugin()],
  // Keep local development at /; GitHub Pages uses the project subpath.
  base: command === 'build' ? '/brzrk-site/' : '/',
}))
