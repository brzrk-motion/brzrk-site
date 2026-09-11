import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import stylex from '@stylexjs/unplugin'
import { wgslVitePlugin } from '@vgpu/wgsl/loader-vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')

  return {
    plugins: [stylex.vite({ useCSSLayers: false }), react(), wgslVitePlugin()],
    base: env.VITE_BASE_PATH || '/',
  }
})
