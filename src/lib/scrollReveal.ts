import type { CSSProperties } from 'react'

/** CSS scroll-driven reveal props. Requires `.scroll-reveal` rules in index.css. */
export function scrollReveal(distance = 40, delay = 0.08) {
  return {
    className: 'scroll-reveal',
    style: {
      '--scroll-reveal-x': distance === 0 ? '0px' : `-${distance}px`,
      '--scroll-reveal-delay': `${delay}s`,
    } as CSSProperties,
  }
}
