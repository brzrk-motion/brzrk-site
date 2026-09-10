import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
type Screenshot = {
  src: string
  alt: string
  caption: string
  code: string
}

type ScreenshotCarouselProps = {
  screenshots: readonly Screenshot[]
}

export function ScreenshotCarousel({ screenshots }: ScreenshotCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const pointerStart = useRef<number | null>(null)
  const total = screenshots.length

  const showSlide = (index: number) => {
    setActiveIndex((index + total) % total)
  }

  const showPrevious = () => showSlide(activeIndex - 1)
  const showNext = () => showSlide(activeIndex + 1)

  useEffect(() => {
    if (activeIndex >= total) setActiveIndex(0)
  }, [activeIndex, total])

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      showPrevious()
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      showNext()
    }
  }

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    pointerStart.current = event.clientX
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStart.current === null) return
    const distance = event.clientX - pointerStart.current
    pointerStart.current = null
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    if (Math.abs(distance) < 48) return
    if (distance > 0) showPrevious()
    else showNext()
  }

  const handlePointerCancel = (event: PointerEvent<HTMLDivElement>) => {
    pointerStart.current = null
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  if (!total) return null

  const activeShot = screenshots[activeIndex]

  return (
    <div
      className="pb-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Playblast product screens"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="pb-carousel__viewport" onPointerDown={handlePointerDown} onPointerUp={handlePointerUp} onPointerCancel={handlePointerCancel} onPointerLeave={handlePointerCancel}>
        <div className="pb-carousel__chrome evidence-frame__chrome">
          <span>{activeShot.code}</span>
          <span>1440 × 900 / CURRENT UI</span>
        </div>
        <div className="pb-carousel__slides">
          {screenshots.map((shot, index) => (
            <figure
              key={shot.src}
              id={`playblast-slide-${index + 1}`}
              role="group"
              aria-roledescription="slide"
              className="pb-carousel__slide"
              hidden={index !== activeIndex}
              aria-label={`${index + 1} of ${total}: ${shot.caption}`}
            >
              <div className="pb-screenshot-card__frame">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  width="1440"
                  height="900"
                  loading={index === activeIndex ? 'eager' : 'lazy'}
                  decoding="async"
                  draggable="false"
                />
              </div>
              <figcaption><span>{shot.code}</span><span>{shot.caption}</span></figcaption>
            </figure>
          ))}
        </div>
        <button type="button" className="pb-carousel__control pb-carousel__control--previous" onPointerDown={(event) => event.stopPropagation()} onClick={showPrevious} aria-controls={`playblast-slide-${activeIndex + 1}`} aria-label="Previous product screen">←</button>
        <button type="button" className="pb-carousel__control pb-carousel__control--next" onPointerDown={(event) => event.stopPropagation()} onClick={showNext} aria-controls={`playblast-slide-${activeIndex + 1}`} aria-label="Next product screen">→</button>
      </div>
      <div className="pb-carousel__footer">
        <p className="pb-carousel__status" aria-live="polite">Screen {activeIndex + 1} of {total}: {activeShot.caption}</p>
        <div className="pb-carousel__dots" role="group" aria-label="Choose a product screen">
          {screenshots.map((shot, index) => (
            <button
              key={shot.src}
              type="button"
              aria-label={`Show screen ${index + 1}: ${shot.caption}`}
              aria-controls={`playblast-slide-${index + 1}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              className={`pb-carousel__dot${index === activeIndex ? ' pb-carousel__dot--active' : ''}`}
              onClick={() => showSlide(index)}
            />
          ))}
        </div>
        <p className="pb-carousel__hint">Use ← → or swipe</p>
      </div>
    </div>
  )
}
