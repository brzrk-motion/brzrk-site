import * as stylex from '@stylexjs/stylex'
import { tokens } from '../styles/tokens.stylex'

const mq720 = '@media (max-width: 720px)'
const mq400 = '@media (max-width: 400px)'
const mqReducedMotion = '@media (prefers-reduced-motion: reduce)'

const carrySignal = stylex.keyframes({
  from: { transform: 'scaleX(0)' },
  to: { transform: 'scaleX(1)' },
})

export const homeStyles = stylex.create({
  home: {},
  hero: {
    position: 'relative',
    minHeight: '35rem',
    overflow: 'hidden',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: tokens.ruleStrong,
  },
  heroGrid: {
    position: 'relative',
    zIndex: 1,
    display: 'grid',
    minHeight: 'inherit',
    gridTemplateColumns: 'minmax(0, 1.5fr) minmax(16rem, 0.5fr)',
    gap: 'clamp(3rem, 9vw, 9rem)',
    alignItems: 'end',
    paddingBlock: 'clamp(4rem, 7vw, 6rem)',
    [mq720]: {
      minHeight: 0,
      gridTemplateColumns: '1fr',
      gap: tokens.space6,
      paddingBlock: tokens.space7,
    },
  },
  heroContent: {
    display: 'flex',
    maxWidth: '58rem',
    flexDirection: 'column',
  },
  heroTitle: {
    maxWidth: '10ch',
    marginBottom: tokens.space4,
    fontSize: tokens.fontHero,
    letterSpacing: '-0.038em',
  },
  heroTitleEm: {
    color: tokens.signal,
    fontWeight: 'inherit',
  },
  heroLede: {
    maxWidth: '42rem',
    marginTop: 0,
    marginBottom: 0,
    color: tokens.paperMuted,
    fontSize: tokens.fontIntro,
    lineHeight: 1.5,
  },
  heroActions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: tokens.space3,
    marginTop: tokens.space5,
    [mq400]: {
      alignItems: 'stretch',
      flexDirection: 'column',
    },
  },
  heroStatus: {
    paddingTop: tokens.space3,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.signal,
  },
  heroStatusTitle: {
    marginBottom: tokens.space3,
    color: tokens.signal,
    fontFamily: tokens.fontMono,
    fontSize: tokens.fontMeta,
    letterSpacing: '0.07em',
    textTransform: 'uppercase',
  },
  heroStatusList: {
    margin: 0,
  },
  heroStatusRow: {
    paddingBlock: tokens.space3,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.rule,
  },
  heroStatusTerm: {
    marginBottom: '0.3rem',
    color: tokens.paperSubtle,
    fontFamily: tokens.fontMono,
    fontSize: tokens.fontMeta,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  heroStatusValue: {
    margin: 0,
    color: tokens.paper,
    fontSize: tokens.fontBodyMd,
    lineHeight: 1.45,
  },
  heroStatusValueSignal: {
    color: tokens.signal,
    fontFamily: tokens.fontMono,
    fontSize: tokens.fontCaption,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
  heroSignal: {
    position: 'absolute',
    bottom: '-1px',
    left: tokens.gutter,
    width: 'clamp(7rem, 18vw, 14rem)',
    height: '3px',
    backgroundColor: tokens.signal,
    transformOrigin: 'left center',
    animationName: carrySignal,
    animationDuration: '700ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'both',
    [mqReducedMotion]: {
      animationName: 'none',
    },
  },
  homeProduct: {
    paddingBlock: 'clamp(4.5rem, 8vw, 7rem)',
    backgroundColor: tokens.ink,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.ruleStrong,
    [mq720]: {
      paddingBlock: tokens.space6,
    },
  },
  productFeature: {
    display: 'grid',
    gridTemplateColumns: 'minmax(17rem, 0.72fr) minmax(0, 1.28fr)',
    gap: 'clamp(2rem, 6vw, 6rem)',
    alignItems: 'center',
    [mq720]: {
      gridTemplateColumns: '1fr',
    },
  },
  productFeatureTitle: {
    marginBottom: tokens.space4,
    marginInline: 0,
  },
  productFeatureLede: {
    marginBottom: tokens.space4,
    color: tokens.paperMuted,
    fontSize: tokens.fontBodyLead,
    lineHeight: 1.55,
  },
  productFeatureCaveat: {
    marginBottom: tokens.space5,
    color: tokens.paperSubtle,
    fontSize: tokens.fontBodySm,
  },
  principles: {
    paddingBlock: tokens.space8,
    backgroundColor: tokens.ink,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: tokens.rule,
    [mq720]: {
      paddingBlock: tokens.space7,
    },
  },
  principlesGrid: {
    display: 'grid',
    gridTemplateColumns: '0.8fr 1.2fr',
    gap: 'clamp(2rem, 8vw, 8rem)',
    [mq720]: {
      gridTemplateColumns: '1fr',
    },
  },
  principlesTitle: {
    marginTop: tokens.space4,
  },
  principleList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.ruleStrong,
  },
  principleListItem: {
    display: 'grid',
    gridTemplateColumns: '3rem 1fr',
    gap: tokens.space4,
    paddingBlock: tokens.space4,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: tokens.rule,
  },
  principleListNumber: {
    color: tokens.signal,
    fontFamily: tokens.fontMono,
    fontSize: tokens.fontCaption,
    lineHeight: 1.4,
  },
  principleListTitle: {
    marginBottom: '0.5rem',
  },
  principleListBody: {
    maxWidth: '34rem',
    color: tokens.paperSubtle,
    fontSize: tokens.fontBodyMd,
  },
})
