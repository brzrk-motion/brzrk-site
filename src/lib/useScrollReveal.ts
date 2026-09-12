import { useEffect, type RefObject } from 'react'

type RevealOptions = {
  distance?: number
  delay?: number
}

type ChildrenRevealOptions = {
  distance?: number
  stagger?: number
  baseDelay?: number
  perItem?: boolean
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function prepareReveal(element: HTMLElement, distance: number, delay: number) {
  element.classList.add('scroll-reveal')
  element.style.setProperty('--scroll-reveal-x', distance === 0 ? '0px' : `-${distance}px`)
  element.style.setProperty('--scroll-reveal-delay', `${delay}s`)
}

function markRevealed(element: HTMLElement) {
  element.classList.add('is-revealed')
}

export function useScrollRevealElement(
  ref: RefObject<HTMLElement | null>,
  { distance = 40, delay = 0.08 }: RevealOptions = {},
) {
  useEffect(() => {
    const element = ref.current
    if (!element || prefersReducedMotion()) return

    prepareReveal(element, distance, delay)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          markRevealed(entry.target as HTMLElement)
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -16% 0px', threshold: 0 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [ref, distance, delay])
}

export function useScrollRevealChildren(
  ref: RefObject<HTMLElement | null>,
  { distance = 40, stagger = 0.1, baseDelay = 0.08, perItem = false }: ChildrenRevealOptions = {},
) {
  useEffect(() => {
    const container = ref.current
    if (!container || prefersReducedMotion()) return

    const children = Array.from(container.children).filter(
      (child): child is HTMLElement => child instanceof HTMLElement,
    )
    if (children.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          if (perItem) {
            markRevealed(entry.target as HTMLElement)
            observer.unobserve(entry.target)
            continue
          }
          children.forEach(markRevealed)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -16% 0px', threshold: 0 },
    )

    if (perItem) {
      children.forEach((child, index) => {
        prepareReveal(child, distance, baseDelay + index * stagger)
        observer.observe(child)
      })
      return () => observer.disconnect()
    }

    children.forEach((child, index) => {
      prepareReveal(child, distance, baseDelay + index * stagger)
    })

    observer.observe(container)
    return () => observer.disconnect()
  }, [ref, distance, stagger, baseDelay, perItem])
}
