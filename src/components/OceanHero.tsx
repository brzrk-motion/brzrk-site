import { useEffect, useRef } from 'react'
import * as stylex from '@stylexjs/stylex'
import { createRenderer } from '../fft-ocean/renderer'
import { oceanHeroStyles } from './OceanHero.stylex'

type OceanHeroProps = {
  className?: string
}

export function OceanHero({ className = '' }: OceanHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !navigator.gpu) return

    const renderer = createRenderer({ canvas })
    void renderer.ready.catch(() => {
      // WebGPU availability is optional; the hero remains visually quiet on failure.
    })

    return () => renderer.dispose()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      {...stylex.props(oceanHeroStyles.canvas)}
      className={className || undefined}
      aria-hidden="true"
    />
  )
}
