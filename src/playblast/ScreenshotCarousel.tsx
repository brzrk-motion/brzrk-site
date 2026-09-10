import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import * as stylex from '@stylexjs/stylex'
import { sharedStyles } from '../styles/shared.stylex'
import { carouselStyles } from './ScreenshotCarousel.stylex'

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
      {...stylex.props(carouselStyles.carousel)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Playblast product screens"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div
        {...stylex.props(carouselStyles.viewport)}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onPointerLeave={handlePointerCancel}
      >
        <div {...stylex.props(sharedStyles.evidenceFrameChrome, carouselStyles.chrome)}>
          <span>{activeShot.code}</span>
          <span>1440 × 900 / CURRENT UI</span>
        </div>
        <div {...stylex.props(carouselStyles.slides)}>
          {screenshots.map((shot, index) => (
            <figure
              key={shot.src}
              id={`playblast-slide-${index + 1}`}
              role="group"
              aria-roledescription="slide"
              {...stylex.props(carouselStyles.slide, index !== activeIndex && carouselStyles.slideHidden)}
              hidden={index !== activeIndex}
              aria-label={`${index + 1} of ${total}: ${shot.caption}`}
            >
              <div {...stylex.props(carouselStyles.frame)}>
                <img
                  {...stylex.props(carouselStyles.image)}
                  src={shot.src}
                  alt={shot.alt}
                  width="1440"
                  height="900"
                  loading={index === activeIndex ? 'eager' : 'lazy'}
                  decoding="async"
                  draggable="false"
                />
              </div>
              <figcaption {...stylex.props(carouselStyles.figcaption)}>
                <span {...stylex.props(carouselStyles.figcaptionCode)}>{shot.code}</span>
                <span>{shot.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <button
          type="button"
          {...stylex.props(carouselStyles.control, carouselStyles.controlPrevious)}
          onPointerDown={(event) => event.stopPropagation()}
          onClick={showPrevious}
          aria-controls={`playblast-slide-${activeIndex + 1}`}
          aria-label="Previous product screen"
        >
          ←
        </button>
        <button
          type="button"
          {...stylex.props(carouselStyles.control, carouselStyles.controlNext)}
          onPointerDown={(event) => event.stopPropagation()}
          onClick={showNext}
          aria-controls={`playblast-slide-${activeIndex + 1}`}
          aria-label="Next product screen"
        >
          →
        </button>
      </div>
      <div {...stylex.props(carouselStyles.footer)}>
        <p {...stylex.props(carouselStyles.status)} aria-live="polite">
          Screen {activeIndex + 1} of {total}: {activeShot.caption}
        </p>
        <div {...stylex.props(carouselStyles.dots)} role="group" aria-label="Choose a product screen">
          {screenshots.map((shot, index) => (
            <button
              key={shot.src}
              type="button"
              aria-label={`Show screen ${index + 1}: ${shot.caption}`}
              aria-controls={`playblast-slide-${index + 1}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              {...stylex.props(carouselStyles.dot, index === activeIndex && carouselStyles.dotActive)}
              onClick={() => showSlide(index)}
            />
          ))}
        </div>
        <p {...stylex.props(carouselStyles.hint)}>Use ← → or swipe</p>
      </div>
    </div>
  )
}
