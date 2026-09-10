import * as stylex from '@stylexjs/stylex'
import { tokens } from '../styles/tokens.stylex'

const mq1050 = '@media (max-width: 1050px)'
const mq720 = '@media (max-width: 720px)'

export const fundStyles = stylex.create({
  sectionIntro: {
    maxWidth: tokens.contentWidth,
    color: tokens.paperMuted,
  },
  status: {
    display: 'grid',
    gridTemplateColumns: '0.7fr 1.3fr',
    gap: tokens.space6,
    [mq720]: {
      gridTemplateColumns: '1fr',
    },
  },
  statusSignal: {
    color: tokens.signal,
    fontFamily: tokens.fontMono,
    fontSize: '0.72rem',
    lineHeight: 1.5,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
  },
  policy: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    marginTop: tokens.space5,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: tokens.ruleStrong,
    [mq720]: {
      gridTemplateColumns: '1fr',
    },
  },
  policyArticle: {
    padding: tokens.space4,
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: tokens.rule,
    ':last-child': {
      borderRightWidth: 0,
    },
    [mq720]: {
      borderRightWidth: 0,
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: tokens.rule,
      ':last-child': {
        borderBottomWidth: 0,
      },
    },
  },
  policyTitle: {
    marginBottom: tokens.space3,
  },
  policyText: {
    color: tokens.paperSubtle,
    fontSize: '0.88rem',
  },
  tierGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
    marginTop: tokens.space5,
    marginBottom: 0,
    marginInline: 0,
    padding: 0,
    listStyle: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: tokens.rule,
    [mq1050]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [mq720]: {
      gridTemplateColumns: '1fr',
    },
  },
  tierCard: {
    minWidth: 0,
    padding: tokens.space4,
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: tokens.rule,
    ':last-child': {
      borderRightWidth: 0,
    },
    [mq1050]: {
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: tokens.rule,
      ':nth-child(2n)': {
        borderRightWidth: 0,
      },
      ':last-child': {
        borderRightWidth: '1px',
        borderBottomWidth: 0,
      },
    },
    [mq720]: {
      borderRightWidth: 0,
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: tokens.rule,
      ':nth-child(2n)': {
        borderRightWidth: 0,
      },
      ':last-child': {
        borderRightWidth: 0,
        borderBottomWidth: 0,
      },
    },
  },
  tierCardTitle: {
    marginBottom: tokens.space3,
    fontSize: '1rem',
  },
  tierCardPrice: {
    marginBottom: tokens.space3,
  },
  tierCardAmount: {
    color: tokens.paper,
    fontSize: '1.4rem',
  },
  tierCardPeriod: {
    color: tokens.paperSubtle,
    fontSize: '0.72rem',
  },
  tierCardRecognition: {
    color: tokens.paperSubtle,
    fontSize: '0.78rem',
  },
  tierCardBoundary: {
    color: tokens.paperSubtle,
    fontSize: '0.78rem',
    marginTop: tokens.space3,
  },
  fundingDisclaimer: {
    color: tokens.paperSubtle,
    fontSize: '0.78rem',
    marginTop: tokens.space4,
    paddingTop: tokens.space4,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.rule,
  },
})
