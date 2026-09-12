/// <reference types="vite/client" />
/// <reference types="@vgpu/wgsl/wgsl-types" />

interface ImportMetaEnv {
  readonly VITE_BASE_PATH?: string
  readonly VITE_SITE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
