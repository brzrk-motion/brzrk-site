import * as stylex from '@stylexjs/stylex'
import { tokens } from '../styles/tokens.stylex'

const mq720 = '@media (max-width: 720px)'

export const playblastStyles = stylex.create({
  hero: {
    display: 'grid',
    gridTemplateColumns: 'minmax(12rem, 0.45fr) minmax(0, 1fr)',
    gap: tokens.space6,
    marginBottom: tokens.space7,
    paddingTop: tokens.space3,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.ruleStrong,
    [mq720]: {
      gridTemplateColumns: '1fr',
    },
  },
  heroKicker: {
    gridColumn: 1,
    gridRow: '1 / span 5',
    paddingTop: '0.65rem',
    color: tokens.signal,
    fontFamily: tokens.fontMono,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    fontSize: '0.7rem',
    [mq720]: {
      gridColumn: 1,
      gridRow: 'auto',
    },
  },
  heroContent: {
    gridColumn: 2,
    [mq720]: {
      gridColumn: 1,
      gridRow: 'auto',
    },
  },
  heroHeadline: {
    marginBottom: tokens.space4,
    fontSize: 'clamp(2.8rem, 7vw, 6rem)',
  },
  heroSubhead: {
    maxWidth: '42rem',
    color: tokens.paperMuted,
    fontSize: 'clamp(1.08rem, 2vw, 1.35rem)',
    lineHeight: 1.55,
  },
  sectionIntro: {
    maxWidth: tokens.contentWidth,
    color: tokens.paperMuted,
  },
  loopHeader: {
    display: 'grid',
    gridTemplateColumns: '0.7fr 1.3fr',
    gap: tokens.space6,
    marginBottom: tokens.space5,
    [mq720]: {
      gridTemplateColumns: '1fr',
    },
  },
  timeline: {
    display: 'grid',
    margin: 0,
    padding: 0,
    listStyle: 'none',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.ruleStrong,
  },
  timelineItem: {
    display: 'grid',
    gridTemplateColumns: '5rem minmax(0, 1fr)',
    gap: tokens.space5,
    paddingBlock: tokens.space4,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: tokens.rule,
    [mq720]: {
      gridTemplateColumns: '2.5rem 1fr',
      gap: tokens.space3,
    },
  },
  timelineMarker: {
    color: tokens.signal,
    fontFamily: tokens.fontMono,
    fontSize: '0.75rem',
    lineHeight: 1.4,
  },
  timelineBody: {
    display: 'grid',
    gridTemplateColumns: '0.5fr 1fr',
    gap: tokens.space5,
    [mq720]: {
      gridTemplateColumns: '1fr',
      gap: tokens.space2,
    },
  },
  timelineTitle: {
    margin: 0,
  },
  timelineText: {
    maxWidth: '40rem',
    color: tokens.paperSubtle,
  },
  screenshotsHeader: {
    display: 'grid',
    gridTemplateColumns: '0.7fr 1.3fr',
    gap: tokens.space6,
    marginBottom: tokens.space5,
    [mq720]: {
      gridTemplateColumns: '1fr',
    },
  },
  splitGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: tokens.ruleStrong,
    [mq720]: {
      gridTemplateColumns: '1fr',
    },
  },
  splitPanel: {
    padding: tokens.space5,
  },
  splitPanelRight: {
    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
    borderLeftColor: tokens.ruleStrong,
    [mq720]: {
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: tokens.ruleStrong,
      borderLeftWidth: 0,
    },
  },
  checkList: {
    marginTop: tokens.space4,
    marginBottom: 0,
    marginInline: 0,
    padding: 0,
    listStyle: 'none',
  },
  checkListItem: {
    paddingBlock: tokens.space3,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.rule,
    color: tokens.paperMuted,
    '::before': {
      content: '"+"',
      marginRight: '0.75rem',
      color: tokens.signal,
      fontFamily: tokens.fontMono,
    },
  },
  crossList: {
    marginTop: tokens.space4,
    marginBottom: 0,
    marginInline: 0,
    padding: 0,
    listStyle: 'none',
  },
  crossListItem: {
    paddingBlock: tokens.space3,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.rule,
    color: tokens.paperMuted,
    '::before': {
      content: '"—"',
      marginRight: '0.75rem',
      color: tokens.paperSubtle,
    },
  },
  selfhostBand: {
    display: 'grid',
    gridTemplateColumns: '0.7fr 1.3fr',
    gap: tokens.space6,
    [mq720]: {
      gridTemplateColumns: '1fr',
    },
  },
  fundingBlock: {
    padding: tokens.space5,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: tokens.ruleStrong,
    backgroundColor: tokens.graphite,
  },
  fundingCta: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: tokens.space3,
    alignItems: 'center',
    marginTop: tokens.space4,
  },
})
