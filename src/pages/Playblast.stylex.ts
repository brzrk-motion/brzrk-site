import * as stylex from '@stylexjs/stylex'
import { tokens } from '../styles/tokens.stylex'

const mq720 = '@media (max-width: 720px)'

const heroPaddingInline = 'clamp(1.5rem, 5vw, 5rem)'
const eyebrowPaddingTop = '0.65rem'
const contentRailWidth = 'min(100%, 67rem)'

export const playblastStyles = stylex.create({
  page: {
    paddingBottom: 0,
  },
  hero: {
    marginBlockEnd: 0,
  },
  heroStack: {
    position: 'relative',
    zIndex: 1,
    width: contentRailWidth,
    marginInlineStart: 0,
    marginInlineEnd: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.space4,
  },
  heroEyebrow: {
    paddingTop: eyebrowPaddingTop,
    margin: 0,
    color: tokens.signal,
    fontFamily: tokens.fontMono,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    fontSize: '0.7rem',
  },
  heroHeadline: {
    marginBlock: 0,
  },
  heroCta: {
    marginTop: 0,
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
  sectionEyebrow: {
    paddingTop: eyebrowPaddingTop,
    margin: 0,
    fontFamily: tokens.fontMono,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: tokens.paperSubtle,
    fontSize: '0.7rem',
  },
  sectionEyebrowIndex: {
    marginRight: '0.75rem',
    color: tokens.signal,
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
