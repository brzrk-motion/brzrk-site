import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import stylex from '@stylexjs/unplugin'
import { wgslVitePlugin } from '@vgpu/wgsl/loader-vite'

export default defineConfig(({ command }) => ({
  plugins: [stylex.vite({ useCSSLayers: false }), react(), wgslVitePlugin()],
  // Keep local development at /; GitHub Pages uses the project subpath.
  base: command === 'build' ? '/brzrk-site/' : '/',
}))
