import { useEffect, useRef, useState } from 'react'
import * as stylex from '@stylexjs/stylex'
import { oceanHeroStyles } from './OceanHero.stylex'

type OceanHeroProps = {
  className?: string
}

type RendererHandle = {
  dispose: () => void
  ready: Promise<unknown>
}

function canUseWebGpu() {
  return 'gpu' in navigator && Boolean(navigator.gpu)
}

export function OceanHero({ className }: OceanHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [active, setActive] = useState(false)
  const sx = stylex.props(oceanHeroStyles.canvas)

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => {
      setActive(!motion.matches && canUseWebGpu())
    }

    sync()
    motion.addEventListener('change', sync)
    return () => motion.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (!active) return

    const canvas = canvasRef.current
    if (!canvas) return

    let disposed = false
    let renderer: RendererHandle | null = null

    void import('../fft-ocean/renderer').then(({ createRenderer }) => {
      if (disposed || !canvasRef.current) return
      renderer = createRenderer({ canvas: canvasRef.current })
      void renderer.ready.catch(() => {
        // WebGPU availability is optional; the hero remains visually quiet on failure.
      })
    })

    return () => {
      disposed = true
      renderer?.dispose()
    }
  }, [active])

  if (!active) return null

  return (
    <canvas
      ref={canvasRef}
      style={sx.style}
      className={[sx.className, className].filter(Boolean).join(' ') || undefined}
      aria-hidden="true"
    />
  )
}

export function LazyOceanHero(props: OceanHeroProps) {
  return <OceanHero {...props} />
}
