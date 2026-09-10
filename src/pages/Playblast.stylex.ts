import * as stylex from '@stylexjs/stylex'
import { tokens } from '../styles/tokens.stylex'

const mq720 = '@media (max-width: 720px)'

export const playblastStyles = stylex.create({
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
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: tokens.space6,
    [mq720]: {
      gridTemplateColumns: '1fr',
    },
  },
  financesHeader: {
    display: 'grid',
    gridTemplateColumns: '0.7fr 1.3fr',
    gap: tokens.space6,
    marginBottom: tokens.space5,
    [mq720]: {
      gridTemplateColumns: '1fr',
    },
  },
  financesList: {
    marginTop: tokens.space4,
    marginBottom: 0,
    marginInline: 0,
    padding: 0,
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
    gap: 0,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.ruleStrong,
  },
  financesListItem: {
    paddingBlock: tokens.space4,
    paddingInlineEnd: tokens.space5,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: tokens.rule,
    color: tokens.paperMuted,
    '::before': {
      content: '"+"',
      marginRight: '0.75rem',
      color: tokens.signal,
      fontFamily: tokens.fontMono,
    },
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
  selfhostBtn: {
    alignSelf: 'end',
    justifySelf: 'start',
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
