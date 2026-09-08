import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from 'react'

export type ScreenshotSlide = {
  readonly src: string
  readonly alt: string
  readonly caption: string
}

const AUTOPLAY_MS = 7000
const SWIPE_THRESHOLD_PX = 48

type ScreenshotCarouselProps = {
  slides: readonly ScreenshotSlide[]
  label?: string
}

export function ScreenshotCarousel({
  slides,
  label = 'Playblast product screenshots',
}: ScreenshotCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const regionRef = useRef<HTMLDivElement>(null)
  const pointerStartX = useRef<number | null>(null)
  const captionId = useId()
  const slideCount = slides.length

  const goTo = useCallback(
    (index: number) => {
      if (slideCount === 0) return
      const next = ((index % slideCount) + slideCount) % slideCount
      setActiveIndex(next)
    },
    [slideCount],
  )

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo])
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setPrefersReducedMotion(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || isPaused || slideCount <= 1) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slideCount)
    }, AUTOPLAY_MS)

    return () => window.clearInterval(timer)
  }, [isPaused, prefersReducedMotion, slideCount])

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goPrev()
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      goNext()
    } else if (event.key === 'Home') {
      event.preventDefault()
      goTo(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      goTo(slideCount - 1)
    }
  }

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    pointerStartX.current = event.clientX
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return
    const delta = event.clientX - pointerStartX.current
    if (delta >= SWIPE_THRESHOLD_PX) goPrev()
    else if (delta <= -SWIPE_THRESHOLD_PX) goNext()
    pointerStartX.current = null
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  const handlePointerCancel = () => {
    pointerStartX.current = null
  }

  if (slideCount === 0) return null

  const activeSlide = slides[activeIndex]

  return (
    <div
      ref={regionRef}
      className="pb-screenshot-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!regionRef.current?.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false)
        }
      }}
    >
      <div
        className="pb-carousel__viewport"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        <ul
          className="pb-carousel__track"
          aria-live="polite"
          aria-atomic="true"
          style={{
            transform: `translate3d(-${activeIndex * 100}%, 0, 0)`,
            transition: prefersReducedMotion
              ? 'none'
              : 'transform 0.55s var(--ease-out-expo)',
          }}
        >
          {slides.map((slide, index) => (
            <li
              key={slide.caption}
              className="pb-carousel__slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slideCount}`}
              aria-hidden={index !== activeIndex}
            >
              <figure className="pb-carousel__figure">
                <div className="pb-carousel__frame">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    draggable={false}
                  />
                </div>
              </figure>
            </li>
          ))}
        </ul>
      </div>

      <div className="pb-carousel__controls">
        <button
          type="button"
          className="pb-carousel__nav pb-carousel__nav--prev"
          onClick={goPrev}
          aria-label="Previous screenshot"
        >
          <span aria-hidden="true">←</span>
        </button>

        <div className="pb-carousel__meta">
          <p id={captionId} className="pb-carousel__caption">
            {activeSlide.caption}
          </p>
          <div
            className="pb-carousel__dots"
            role="tablist"
            aria-label="Choose screenshot"
          >
            {slides.map((slide, index) => {
              const isActive = index === activeIndex
              return (
                <button
                  key={slide.caption}
                  type="button"
                  role="tab"
                  className="pb-carousel__dot"
                  aria-selected={isActive}
                  aria-controls={captionId}
                  aria-label={`${slide.caption} (${index + 1} of ${slideCount})`}
                  onClick={() => goTo(index)}
                >
                  <span className="pb-carousel__dot-label">{slide.caption}</span>
                </button>
              )
            })}
          </div>
        </div>

        <button
          type="button"
          className="pb-carousel__nav pb-carousel__nav--next"
          onClick={goNext}
          aria-label="Next screenshot"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  )
}
