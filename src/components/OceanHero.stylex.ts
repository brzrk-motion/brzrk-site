import * as stylex from '@stylexjs/stylex'

export const oceanHeroStyles = stylex.create({
  canvas: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    display: 'block',
    width: '100%',
    height: '100%',
    opacity: 0.82,
    pointerEvents: 'none',
  },
})
