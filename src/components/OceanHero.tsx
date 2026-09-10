import { useEffect, useRef } from 'react'
import { createRenderer } from '../fft-ocean/renderer'

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

  return <canvas ref={canvasRef} className={`ocean-hero ${className}`} aria-hidden="true" />
}
