import * as stylex from '@stylexjs/stylex'
import { tokens } from '../styles/tokens.stylex'

const mq720 = '@media (max-width: 720px)'
const mq400 = '@media (max-width: 400px)'

export const homeStyles = stylex.create({
  home: {},
  hero: {
    position: 'relative',
    minHeight: 'min(50rem, calc(100vh - 4.75rem))',
    overflow: 'hidden',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: tokens.rule,
    [mq720]: {
      minHeight: '42rem',
    },
    [mq400]: {
      minHeight: '39rem',
    },
  },
  heroGrid: {
    position: 'relative',
    zIndex: 1,
    display: 'grid',
    minHeight: 'inherit',
    gridTemplateColumns: 'minmax(0, 1fr)',
    [mq720]: {
      gridTemplateColumns: '1fr',
    },
  },
  heroContent: {
    display: 'flex',
    maxWidth: '67rem',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBlock: tokens.space7,
    paddingInlineStart: 'clamp(1.5rem, 5vw, 5rem)',
    paddingInlineEnd: 0,
    [mq720]: {
      padding: `${tokens.space7} 0`,
    },
  },
  heroTitle: {
    maxWidth: '12ch',
    marginBlock: `${tokens.space4} ${tokens.space6}`,
    marginInline: 0,
  },
  heroTitleEm: {
    color: tokens.signal,
    fontWeight: 'inherit',
  },
  heroLower: {
    display: 'grid',
    gridTemplateColumns: 'minmax(16rem, 34rem) auto',
    alignItems: 'end',
    gap: tokens.space6,
    [mq720]: {
      gridTemplateColumns: '1fr',
      gap: tokens.space5,
    },
  },
  heroLede: {
    color: tokens.paperMuted,
    fontSize: 'clamp(1.08rem, 2vw, 1.35rem)',
    lineHeight: 1.5,
  },
  heroActions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: tokens.space3,
    [mq400]: {
      alignItems: 'stretch',
      flexDirection: 'column',
    },
  },
  homeProduct: {
    paddingBlock: tokens.space8,
    backgroundColor: tokens.ink,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: tokens.rule,
    [mq720]: {
      paddingBlock: tokens.space7,
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
    marginBlock: `${tokens.space3} ${tokens.space4}`,
    marginInline: 0,
  },
  productFeatureLede: {
    marginBottom: tokens.space4,
    color: tokens.paperMuted,
    fontSize: 'clamp(1.05rem, 2vw, 1.32rem)',
    lineHeight: 1.55,
  },
  productFeatureCaveat: {
    marginBottom: tokens.space5,
    color: tokens.paperSubtle,
    fontSize: '0.88rem',
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
    fontSize: '0.72rem',
    lineHeight: 1.4,
  },
  principleListTitle: {
    marginBottom: '0.5rem',
  },
  principleListBody: {
    maxWidth: '34rem',
    color: tokens.paperSubtle,
    fontSize: '0.9rem',
  },
})
