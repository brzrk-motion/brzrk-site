import * as stylex from '@stylexjs/stylex'
import { tokens } from '../styles/tokens.stylex'

const mq800 = '@media (max-width: 800px)'
const mq720 = '@media (max-width: 720px)'
const mqReducedMotion = '@media (prefers-reduced-motion: reduce)'

const heroPaddingInline = 'clamp(1.5rem, 5vw, 5rem)'
const carrySignal = stylex.keyframes({
  from: { transform: 'scaleX(0)' },
  to: { transform: 'scaleX(1)' },
})

export const playblastStyles = stylex.create({
  page: {
    paddingBottom: 0,
    backgroundColor: tokens.ink,
    overflowX: 'clip',
  },
  hero: {
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: tokens.ruleStrong,
    backgroundColor: tokens.inkDeep,
  },
  heroGrid: {
    position: 'relative',
    display: 'grid',
    minHeight: '35rem',
    gridTemplateColumns: 'minmax(0, 1.5fr) minmax(16rem, 0.5fr)',
    gap: 'clamp(3rem, 9vw, 9rem)',
    alignItems: 'end',
    paddingBlock: 'clamp(4rem, 7vw, 6rem)',
    [mq800]: {
      minHeight: 0,
      gridTemplateColumns: '1fr',
      gap: tokens.space6,
      paddingBlock: tokens.space7,
    },
  },
  heroCopy: {
    maxWidth: '58rem',
  },
  heroHeadline: {
    maxWidth: '10ch',
    marginBottom: tokens.space4,
    fontSize: 'clamp(3.2rem, 7vw, 5.9rem)',
    letterSpacing: '-0.038em',
  },
  heroLede: {
    maxWidth: '43rem',
    color: tokens.paperMuted,
    fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
    lineHeight: 1.55,
  },
  heroCta: {
    marginTop: tokens.space5,
  },
  status: {
    paddingTop: tokens.space3,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.signal,
  },
  statusTitle: {
    marginBottom: tokens.space3,
    fontSize: '1.2rem',
    letterSpacing: '-0.02em',
  },
  statusList: {
    margin: 0,
  },
  statusRow: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: tokens.space3,
    paddingBlock: tokens.space3,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.rule,
  },
  statusTerm: {
    color: tokens.paperSubtle,
    fontFamily: tokens.fontMono,
    fontSize: '0.65rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  statusValue: {
    margin: 0,
    color: tokens.paper,
    fontSize: '0.84rem',
    textAlign: 'right',
  },
  statusValueSignal: {
    color: tokens.signal,
    fontFamily: tokens.fontMono,
    fontSize: '0.72rem',
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
  pageSections: {
    width: `min(100%, calc(${tokens.maxWidth} + (2 * ${heroPaddingInline})))`,
    marginInline: 'auto',
    paddingInline: heroPaddingInline,
  },
  section: {
    margin: 0,
    paddingBlock: tokens.space7,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.ruleStrong,
    [mq720]: {
      paddingBlock: tokens.space6,
    },
  },
  sectionFirst: {
    borderTopWidth: 0,
  },
  sectionBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: tokens.space4,
    marginBottom: tokens.space5,
  },
  sectionBlockTight: {
    marginBottom: 0,
  },
  sectionHeaderSplit: {
    display: 'grid',
    gridTemplateColumns: '0.7fr 1.3fr',
    gap: tokens.space6,
    alignItems: 'start',
    marginBottom: tokens.space5,
    [mq720]: {
      gridTemplateColumns: '1fr',
      gap: tokens.space4,
    },
  },
  sectionTitle: {
    maxWidth: '14ch',
    marginBlock: 0,
    textWrap: 'balance',
  },
  sectionIntro: {
    maxWidth: tokens.contentWidth,
    margin: 0,
    color: tokens.paperMuted,
  },
  sectionBody: {
    maxWidth: tokens.contentWidth,
    color: tokens.paperMuted,
  },
  problemList: {
    display: 'grid',
    gap: tokens.space3,
    marginTop: tokens.space4,
    marginBottom: 0,
    marginInline: 0,
    padding: 0,
    listStyle: 'none',
  },
  problemListItem: {
    paddingBlock: tokens.space2,
    paddingInlineStart: '2rem',
    paddingInlineEnd: 0,
    color: tokens.paperMuted,
    position: 'relative',
    '::before': {
      content: '"—"',
      position: 'absolute',
      left: 0,
      color: tokens.signal,
    },
  },
  timeline: {
    display: 'grid',
    gap: 0,
    margin: 0,
    padding: 0,
    listStyle: 'none',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.ruleStrong,
  },
  timelineItem: {
    display: 'grid',
    gridTemplateColumns: '4rem minmax(12rem, 0.65fr) minmax(0, 1.35fr)',
    gap: tokens.space5,
    alignItems: 'start',
    paddingBlock: tokens.space4,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: tokens.rule,
    [mq720]: {
      gridTemplateColumns: '2.5rem minmax(0, 1fr)',
      columnGap: tokens.space3,
      rowGap: tokens.space2,
    },
  },
  timelineMarker: {
    color: tokens.signal,
    fontFamily: tokens.fontMono,
    fontWeight: 600,
    fontSize: '0.75rem',
    lineHeight: 1.4,
    [mq720]: {
      gridRow: '1 / span 2',
    },
  },
  timelineTitle: {
    margin: 0,
    [mq720]: {
      gridColumn: 2,
    },
  },
  timelineText: {
    maxWidth: '40rem',
    margin: 0,
    color: tokens.paperSubtle,
    [mq720]: {
      gridColumn: 2,
    },
  },
  checkList: {
    marginTop: 0,
    marginBottom: 0,
    marginInline: 0,
    padding: 0,
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    rowGap: tokens.space3,
    columnGap: tokens.space6,
    [mq720]: {
      gridTemplateColumns: '1fr',
    },
  },
  checkListItem: {
    paddingBlock: tokens.space2,
    color: tokens.paperMuted,
    '::before': {
      content: '"+"',
      marginRight: '0.75rem',
      color: tokens.signal,
      fontFamily: tokens.fontMono,
    },
  },
  financesList: {
    marginTop: 0,
    marginBottom: 0,
    marginInline: 0,
    padding: 0,
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
    gap: tokens.space4,
  },
  financesListItem: {
    paddingBlock: tokens.space2,
    color: tokens.paperMuted,
    '::before': {
      content: '"+"',
      marginRight: '0.75rem',
      color: tokens.signal,
      fontFamily: tokens.fontMono,
    },
  },
  fundingCta: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: tokens.space3,
    alignItems: 'center',
    marginTop: 0,
  },
})
