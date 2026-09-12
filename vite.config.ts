import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import stylex from '@stylexjs/unplugin'
import { wgslVitePlugin } from '@vgpu/wgsl/loader-vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  const siteUrl = (env.VITE_SITE_URL || 'https://brzrk-motion.github.io/brzrk-site').replace(/\/$/, '')

  return {
    plugins: [
      stylex.vite({ useCSSLayers: false }),
      react(),
      wgslVitePlugin(),
      {
        name: 'inject-site-url',
        transformIndexHtml(html) {
          return html.replaceAll('https://brzrk-motion.github.io/brzrk-site', siteUrl)
        },
      },
    ],
    base: env.VITE_BASE_PATH || '/',
  }
})
