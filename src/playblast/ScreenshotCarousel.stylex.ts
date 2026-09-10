import * as stylex from '@stylexjs/stylex'
import { tokens } from '../styles/tokens.stylex'

const mq720 = '@media (max-width: 720px)'
const mq400 = '@media (max-width: 400px)'
const mqReducedMotion = '@media (prefers-reduced-motion: reduce)'

export const carouselStyles = stylex.create({
  carousel: {
    width: '100%',
    minWidth: 0,
    margin: 0,
    overflowX: 'clip',
    ':focus-visible': {
      outlineOffset: '6px',
    },
  },
  viewport: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: tokens.graphite,
    touchAction: 'pan-y',
    userSelect: 'none',
  },
  chrome: {
    borderWidth: 0,
  },
  slides: {
    minWidth: 0,
    overflow: 'hidden',
  },
  slide: {
    margin: 0,
  },
  slideHidden: {
    display: 'none',
  },
  frame: {
    overflow: 'hidden',
    backgroundColor: tokens.graphite,
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  figcaption: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: tokens.space3,
    padding: tokens.space3,
    color: tokens.paperMuted,
    fontFamily: tokens.fontMono,
    fontSize: '0.72rem',
    lineHeight: 1.5,
    [mq400]: {
      flexDirection: 'column',
    },
  },
  figcaptionCode: {
    color: tokens.signal,
  },
  control: {
    position: 'absolute',
    top: '50%',
    zIndex: 1,
    display: 'grid',
    width: '3rem',
    height: '3rem',
    placeItems: 'center',
    padding: 0,
    borderWidth: 0,
    borderRadius: 0,
    color: tokens.paper,
    backgroundColor: 'oklch(0.075 0.004 255 / 0.72)',
    fontFamily: tokens.fontMono,
    fontSize: '1.25rem',
    lineHeight: 1,
    cursor: 'pointer',
    transform: 'translateY(-50%)',
    transitionProperty: 'color, border-color, background',
    transitionDuration: '140ms',
    transitionTimingFunction: 'ease',
    ':hover': {
      color: tokens.inkDeep,
      backgroundColor: tokens.signal,
    },
    [mq400]: {
      width: '2.75rem',
      height: '2.75rem',
    },
    [mqReducedMotion]: {
      transitionProperty: 'none',
    },
  },
  controlPrevious: {
    left: tokens.space3,
  },
  controlNext: {
    right: tokens.space3,
  },
  footer: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) auto auto',
    gap: tokens.space4,
    alignItems: 'center',
    minWidth: 0,
    paddingTop: tokens.space3,
    overflowX: 'clip',
    [mq720]: {
      gridTemplateColumns: '1fr',
      gap: tokens.space2,
    },
  },
  status: {
    margin: 0,
    minWidth: 0,
    color: tokens.paperSubtle,
    fontFamily: tokens.fontMono,
    fontSize: '0.7rem',
    lineHeight: 1.5,
  },
  hint: {
    margin: 0,
    color: tokens.paperSubtle,
    fontFamily: tokens.fontMono,
    fontSize: '0.7rem',
    lineHeight: 1.5,
    textAlign: 'right',
    [mq720]: {
      textAlign: 'left',
    },
  },
  dots: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
  },
  dot: {
    position: 'relative',
    width: '44px',
    height: '44px',
    padding: 0,
    borderWidth: 0,
    borderRadius: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    '::after': {
      content: '""',
      position: 'absolute',
      inset: '19px 5px',
      borderRadius: '999px',
      backgroundColor: tokens.rule,
    },
    ':hover::after': {
      backgroundColor: tokens.signal,
    },
    ':focus-visible': {
      outlineWidth: '3px',
      outlineStyle: 'solid',
      outlineColor: tokens.signalHot,
      outlineOffset: '2px',
    },
  },
  dotActive: {
    '::after': {
      backgroundColor: tokens.signal,
    },
  },
})
