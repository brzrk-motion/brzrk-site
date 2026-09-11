import * as stylex from '@stylexjs/stylex'
import { tokens } from '../styles/tokens.stylex'
import { sharedStyles } from '../styles/shared.stylex'

const mq1050 = '@media (max-width: 1050px)'
const mq721To1050 = '@media (min-width: 721px) and (max-width: 1050px)'
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
    position: 'sticky',
    top: 0,
    zIndex: 10,
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
  brandLogo: {
    display: 'block',
    width: 'clamp(6.5rem, 12vw, 9rem)',
    height: 'auto',
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
    [mq721To1050]: {
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
    borderTopColor: tokens.ruleStrong,
    backgroundColor: tokens.inkDeep,
  },
  footerShell: {
    paddingBlock: 'clamp(4.5rem, 8vw, 7rem) 1.5rem',
  },
  footerMain: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.1fr) minmax(20rem, 0.9fr)',
    gap: 'clamp(3rem, 10vw, 10rem)',
    [mq720]: {
      gridTemplateColumns: '1fr',
      gap: tokens.space7,
    },
  },
  footerIntro: {
    maxWidth: '40rem',
    paddingTop: tokens.space3,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.signal,
  },
  footerLogo: {
    display: 'block',
    width: 'clamp(7.5rem, 15vw, 10rem)',
    height: 'auto',
    marginBottom: tokens.space6,
  },
  footerTitle: {
    maxWidth: '12ch',
    marginBottom: tokens.space4,
    fontSize: 'clamp(2.3rem, 5vw, 4.25rem)',
  },
  footerEmail: {
    display: 'inline-flex',
    minHeight: '44px',
    alignItems: 'center',
    marginTop: tokens.space5,
    color: tokens.signalHot,
    fontFamily: tokens.fontMono,
    fontSize: '0.78rem',
  },
  footerNav: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: tokens.space6,
    alignSelf: 'start',
    [mq400]: {
      gridTemplateColumns: '1fr',
      gap: tokens.space5,
    },
  },
  footerNavGroup: {
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.rule,
  },
  footerNavTitle: {
    marginBlock: tokens.space3,
    color: tokens.paperSubtle,
    fontFamily: tokens.fontMono,
    fontSize: '0.68rem',
    letterSpacing: '0.07em',
    textTransform: 'uppercase',
  },
  footerDescriptor: {
    color: tokens.paperSubtle,
    fontSize: '1rem',
    lineHeight: 1.6,
  },
  footerLinks: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  footerLink: {
    display: 'inline-flex',
    minHeight: '44px',
    alignItems: 'center',
    color: tokens.paperMuted,
    fontSize: '0.88rem',
    textDecoration: 'none',
    ':hover': {
      color: tokens.signalHot,
    },
  },
  footerBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: tokens.space4,
    marginTop: 'clamp(4rem, 8vw, 7rem)',
    paddingTop: tokens.space4,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.rule,
    [mq720]: {
      alignItems: 'flex-start',
      flexDirection: 'column',
      gap: tokens.space1,
    },
  },
  footerMeta: {
    margin: 0,
    color: tokens.paperSubtle,
    fontFamily: tokens.fontMono,
    fontSize: '0.7rem',
    lineHeight: 1.65,
  },
})

export { sharedStyles }
