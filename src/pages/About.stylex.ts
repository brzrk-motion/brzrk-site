import * as stylex from '@stylexjs/stylex'
import { tokens } from '../styles/tokens.stylex'

const mq721To900 = '@media (min-width: 721px) and (max-width: 900px)'
const mq720 = '@media (max-width: 720px)'
const mqReducedMotion = '@media (prefers-reduced-motion: reduce)'

const drawRule = stylex.keyframes({
  from: { transform: 'scaleX(0)' },
  to: { transform: 'scaleX(1)' },
})

export const aboutStyles = stylex.create({
  page: {
    overflowX: 'clip',
    backgroundColor: tokens.ink,
  },
  hero: {
    position: 'relative',
    overflow: 'hidden',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: tokens.ruleStrong,
    backgroundColor: tokens.inkDeep,
  },
  heroInner: {
    position: 'relative',
    zIndex: 1,
    display: 'grid',
    minHeight: '35rem',
    gridTemplateColumns: 'minmax(0, 1.8fr) minmax(15rem, 0.62fr)',
    gap: 'clamp(3rem, 8vw, 8rem)',
    alignItems: 'end',
    paddingBlock: 'clamp(3.5rem, 5vw, 4rem)',
    [mq721To900]: {
      gridTemplateColumns: 'minmax(0, 1fr) minmax(13rem, 0.48fr)',
      gap: tokens.space5,
    },
    [mq720]: {
      minHeight: 'auto',
      gridTemplateColumns: '1fr',
      gap: tokens.space6,
      paddingBlock: tokens.space7,
    },
  },
  heroStatement: {
    maxWidth: '61rem',
  },
  heroTitle: {
    maxWidth: '11ch',
    marginBottom: tokens.space5,
    fontSize: tokens.fontHero,
    letterSpacing: '-0.038em',
  },
  heroTitleSignal: {
    color: tokens.signal,
  },
  heroLede: {
    maxWidth: '45rem',
    marginBottom: tokens.space4,
    color: tokens.paper,
    fontSize: tokens.fontIntroAbout,
    lineHeight: 1.5,
  },
  heroThesis: {
    maxWidth: '42rem',
    color: tokens.paperSubtle,
    fontFamily: tokens.fontMono,
    fontSize: tokens.fontControl,
    lineHeight: 1.7,
  },
  position: {
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.signal,
  },
  positionLabel: {
    marginBlock: tokens.space3,
    color: tokens.signal,
    fontFamily: tokens.fontMono,
    fontSize: tokens.fontMeta,
    letterSpacing: '0.07em',
    textTransform: 'uppercase',
  },
  positionList: {
    margin: 0,
  },
  positionRow: {
    paddingBlock: tokens.space3,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.rule,
  },
  positionTerm: {
    marginBottom: '0.3rem',
    color: tokens.paperSubtle,
    fontFamily: tokens.fontMono,
    fontSize: tokens.fontMeta,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  positionDetail: {
    margin: 0,
    color: tokens.paper,
    fontSize: tokens.fontBodyMd,
    lineHeight: 1.45,
  },
  heroRule: {
    position: 'absolute',
    bottom: 0,
    left: tokens.gutter,
    width: 'clamp(4rem, 11vw, 9rem)',
    height: '3px',
    backgroundColor: tokens.signal,
    transformOrigin: 'left center',
    animationName: drawRule,
    animationDuration: '700ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'both',
    [mqReducedMotion]: {
      animationName: 'none',
    },
  },
  method: {
    paddingBlock: `${tokens.space6} ${tokens.space7}`,
  },
  sectionLead: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.15fr) minmax(18rem, 0.85fr)',
    gap: 'clamp(2rem, 8vw, 8rem)',
    alignItems: 'start',
    marginBottom: tokens.space5,
    [mq720]: {
      gridTemplateColumns: '1fr',
      gap: tokens.space4,
    },
  },
  sectionTitle: {
    maxWidth: '13ch',
    margin: 0,
    fontSize: tokens.fontSectionTitleSm,
  },
  sectionIntro: {
    maxWidth: '34rem',
    color: tokens.paperMuted,
    fontSize: tokens.fontSubhead,
    lineHeight: 1.65,
  },
  layers: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  layer: {
    display: 'grid',
    minHeight: '11rem',
    gridTemplateColumns: '5rem minmax(12rem, 0.8fr) minmax(0, 1.2fr)',
    gap: tokens.space4,
    alignItems: 'start',
    paddingBlock: tokens.space5,
    paddingInline: tokens.space5,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.ruleStrong,
    [mq720]: {
      minHeight: 0,
      gridTemplateColumns: '2.5rem 1fr',
      gap: tokens.space3,
      paddingBlock: tokens.space4,
      paddingInline: tokens.space3,
    },
  },
  layerOne: {
    backgroundColor: tokens.graphite,
  },
  layerTwo: {
    width: 'calc(100% - clamp(2rem, 7vw, 6rem))',
    marginLeft: 'clamp(2rem, 7vw, 6rem)',
    backgroundColor: tokens.steel,
    [mq720]: {
      width: 'calc(100% - 0.75rem)',
      marginLeft: '0.75rem',
    },
  },
  layerThree: {
    width: 'calc(100% - clamp(4rem, 14vw, 12rem))',
    marginLeft: 'clamp(4rem, 14vw, 12rem)',
    backgroundColor: tokens.inkDeep,
    [mq720]: {
      width: 'calc(100% - 1.5rem)',
      marginLeft: '1.5rem',
    },
  },
  layerFour: {
    width: 'calc(100% - clamp(6rem, 21vw, 18rem))',
    marginLeft: 'clamp(6rem, 21vw, 18rem)',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: tokens.ruleStrong,
    backgroundColor: tokens.graphite,
    [mq720]: {
      width: 'calc(100% - 2.25rem)',
      marginLeft: '2.25rem',
    },
  },
  layerNumber: {
    color: tokens.signal,
    fontFamily: tokens.fontMono,
    fontSize: tokens.fontCaption,
    lineHeight: 1.4,
  },
  layerTitle: {
    maxWidth: '13ch',
    margin: 0,
    fontSize: tokens.fontPullquote,
    lineHeight: 1.15,
  },
  layerBody: {
    maxWidth: '38rem',
    color: tokens.paperMuted,
    lineHeight: 1.65,
    [mq720]: {
      gridColumn: '2',
    },
  },
  background: {
    paddingBlock: 'clamp(5rem, 10vw, 8rem)',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.ruleStrong,
    backgroundColor: tokens.graphite,
  },
  backgroundGrid: {
    display: 'grid',
    gridTemplateColumns: 'minmax(15rem, 0.85fr) minmax(0, 1.15fr)',
    columnGap: 'clamp(3rem, 9vw, 9rem)',
    rowGap: tokens.space7,
    [mq720]: {
      gridTemplateColumns: '1fr',
      gap: tokens.space5,
    },
  },
  backgroundTitle: {
    maxWidth: '11ch',
    margin: 0,
  },
  backgroundCopy: {
    maxWidth: '40rem',
    color: tokens.paperMuted,
    fontSize: tokens.fontBodyLead,
    lineHeight: 1.65,
  },
  backgroundParagraph: {
    ':not(:first-child)': {
      marginTop: tokens.space4,
    },
  },
  commitments: {
    gridColumn: '1 / -1',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    margin: 0,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.ruleStrong,
    [mq720]: {
      gridColumn: '1',
      gridTemplateColumns: '1fr',
    },
  },
  commitment: {
    paddingBlock: tokens.space4,
    paddingInline: tokens.space4,
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: tokens.rule,
    ':last-child': {
      borderRightWidth: 0,
    },
    [mq720]: {
      paddingInline: 0,
      borderRightWidth: 0,
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: tokens.rule,
    },
  },
  commitmentTerm: {
    marginBottom: tokens.space2,
    color: tokens.signal,
    fontSize: tokens.fontSubhead,
    fontWeight: 600,
  },
  commitmentDetail: {
    margin: 0,
    color: tokens.paperSubtle,
    fontSize: tokens.fontBodySm,
    lineHeight: 1.6,
  },
  current: {
    paddingBlock: 'clamp(5rem, 10vw, 8rem)',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.ruleStrong,
    backgroundColor: tokens.inkDeep,
  },
  currentGrid: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.2fr) minmax(18rem, 0.8fr)',
    gap: 'clamp(3rem, 10vw, 10rem)',
    alignItems: 'end',
    [mq720]: {
      gridTemplateColumns: '1fr',
      gap: tokens.space5,
    },
  },
  currentStatus: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.space2,
    marginTop: tokens.space4,
    color: tokens.paperSubtle,
    fontFamily: tokens.fontMono,
    fontSize: tokens.fontMeta,
    letterSpacing: '0.07em',
    textTransform: 'uppercase',
  },
  statusMark: {
    width: '0.65rem',
    height: '0.65rem',
    backgroundColor: tokens.signal,
  },
  currentTitle: {
    maxWidth: '12ch',
    margin: 0,
    fontSize: tokens.fontSectionTitleLg,
  },
  currentBody: {
    maxWidth: '35rem',
    color: tokens.paperMuted,
    fontSize: tokens.fontSubhead,
  },
  actions: {
    marginTop: tokens.space5,
  },
})
