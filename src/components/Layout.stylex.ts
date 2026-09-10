import * as stylex from '@stylexjs/stylex'
import { tokens } from '../styles/tokens.stylex'
import { sharedStyles } from '../styles/shared.stylex'

const mq1050 = '@media (max-width: 1050px)'
const mq720 = '@media (max-width: 720px)'
const mq400 = '@media (max-width: 400px)'

export const layoutStyles = stylex.create({
  layout: {
    position: 'relative',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    backgroundColor: tokens.inkDeep,
  },
  layoutHome: {},
  layoutPage: {},
  main: {
    position: 'relative',
    zIndex: 1,
    flex: 1,
    overflowX: 'clip',
  },
  skipLink: {
    position: 'fixed',
    top: '0.75rem',
    left: '0.75rem',
    zIndex: 1000,
    paddingBlock: '0.65rem',
    paddingInline: '0.9rem',
    color: tokens.inkDeep,
    backgroundColor: tokens.signalHot,
    transform: 'translateY(-150%)',
    ':focus': {
      transform: 'translateY(0)',
    },
  },
  nav: {
    position: 'relative',
    zIndex: 1,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: tokens.rule,
    backgroundColor: 'oklch(0.075 0.004 255 / 0.94)',
  },
  navInner: {
    display: 'grid',
    gridTemplateColumns: 'minmax(8rem, 1fr) auto',
    alignItems: 'stretch',
    minHeight: '4.75rem',
    [mq720]: {
      gridTemplateColumns: '1fr',
      paddingTop: '0.55rem',
    },
  },
  navBrand: {
    display: 'inline-flex',
    minHeight: '44px',
    alignItems: 'center',
    gap: '0.2rem',
    alignSelf: 'center',
    color: tokens.paper,
    fontSize: '1rem',
    fontWeight: 600,
    letterSpacing: '-0.03em',
    textDecoration: 'none',
    ':hover': {
      color: tokens.paper,
    },
    [mq720]: {
      minHeight: '44px',
    },
  },
  navBrandMark: {
    color: tokens.signal,
    fontFamily: tokens.fontMono,
  },
  navWrap: {
    [mq720]: {
      marginInline: `calc(${tokens.gutter} * -1)`,
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: tokens.rule,
    },
  },
  navLinks: {
    display: 'flex',
    height: '100%',
    margin: 0,
    padding: 0,
    listStyle: 'none',
    [mq720]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
    },
  },
  navLinksItem: {
    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
    borderLeftColor: tokens.rule,
    [mq720]: {
      minWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: '1px',
      borderRightStyle: 'solid',
      borderRightColor: tokens.rule,
      ':last-child': {
        borderRightWidth: 0,
      },
    },
  },
  navLink: {
    display: 'flex',
    minWidth: '7.25rem',
    minHeight: '4.75rem',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.55rem',
    paddingInline: '1rem',
    color: tokens.paperMuted,
    fontSize: '0.82rem',
    textDecoration: 'none',
    transitionProperty: 'color, background',
    transitionDuration: '140ms',
    transitionTimingFunction: 'ease',
    ':hover': {
      color: tokens.paper,
      backgroundColor: tokens.graphite,
    },
    [mq1050]: {
      minWidth: '5.5rem',
      paddingInline: '0.65rem',
    },
    [mq720]: {
      minWidth: 0,
      minHeight: '44px',
      paddingBlock: '0.35rem',
      paddingInline: '0.2rem',
      fontSize: '0.69rem',
    },
    [mq400]: {
      fontSize: '0.62rem',
      letterSpacing: '-0.01em',
    },
  },
  navLinkActive: {
    color: tokens.inkDeep,
    backgroundColor: tokens.signal,
    ':hover': {
      color: tokens.inkDeep,
      backgroundColor: tokens.signal,
    },
  },
  navNumber: {
    color: tokens.paperSubtle,
    fontFamily: tokens.fontMono,
    fontSize: '0.64rem',
    lineHeight: 1,
    [mq1050]: {
      display: 'none',
    },
  },
  navNumberActive: {
    color: tokens.inkDeep,
  },
  footer: {
    position: 'relative',
    zIndex: 1,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.rule,
    backgroundColor: tokens.inkDeep,
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: '1.3fr 0.7fr 1fr',
    gap: tokens.space5,
    paddingBlock: tokens.space6,
    [mq720]: {
      gridTemplateColumns: '1fr',
    },
  },
  footerBrand: {
    marginBottom: '0.55rem',
    color: tokens.paper,
    fontSize: '1.1rem',
    fontWeight: 600,
  },
  footerDescriptor: {
    color: tokens.paperSubtle,
    fontFamily: tokens.fontMono,
    fontSize: '0.76rem',
    lineHeight: 1.65,
  },
  footerMeta: {
    color: tokens.paperSubtle,
    fontFamily: tokens.fontMono,
    fontSize: '0.76rem',
    lineHeight: 1.65,
    textAlign: 'right',
    [mq720]: {
      textAlign: 'left',
    },
  },
  footerLinks: {
    display: 'flex',
    gap: tokens.space4,
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  footerLink: {
    display: 'inline-flex',
    minHeight: '44px',
    alignItems: 'center',
    fontSize: '0.84rem',
  },
})

export { sharedStyles }
