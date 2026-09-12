import * as stylex from '@stylexjs/stylex'
import { tokens } from '../styles/tokens.stylex'

const mq800 = '@media (max-width: 800px)'
const mq600 = '@media (max-width: 600px)'
const mqReducedMotion = '@media (prefers-reduced-motion: reduce)'

const dispatch = stylex.keyframes({
  from: { transform: 'scaleX(0)' },
  to: { transform: 'scaleX(1)' },
})

export const contactStyles = stylex.create({
  page: {
    overflowX: 'clip',
    backgroundColor: tokens.ink,
  },
  intro: {
    position: 'relative',
    minHeight: 'min(42rem, calc(100vh - 4.75rem))',
    overflow: 'hidden',
    paddingBlock: 'clamp(3rem, 5vw, 4rem)',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: tokens.ruleStrong,
    backgroundColor: tokens.inkDeep,
  },
  introGrid: {
    position: 'relative',
    zIndex: 1,
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.5fr) minmax(17rem, 0.5fr)',
    gap: 'clamp(3rem, 9vw, 9rem)',
    alignItems: 'center',
    [mq800]: {
      gridTemplateColumns: '1fr',
      gap: tokens.space4,
    },
  },
  title: {
    maxWidth: '17ch',
    marginBottom: tokens.space4,
    fontSize: tokens.fontHero,
    letterSpacing: '-0.038em',
  },
  titleLine: {
    display: 'block',
    marginBottom: tokens.space4,
  },
  lede: {
    maxWidth: '42rem',
    color: tokens.paperMuted,
    fontSize: tokens.fontIntro,
    lineHeight: 1.55,
  },
  direct: {
    paddingTop: tokens.space3,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.signal,
  },
  directTitle: {
    marginBottom: tokens.space3,
    fontSize: tokens.fontSection,
    letterSpacing: '-0.02em',
  },
  emailLink: {
    display: 'inline-flex',
    minHeight: '44px',
    alignItems: 'center',
    overflowWrap: 'anywhere',
    fontFamily: tokens.fontMono,
    fontSize: tokens.fontSmall,
  },
  directNote: {
    marginTop: tokens.space2,
    color: tokens.paperSubtle,
    fontSize: tokens.fontNav,
    lineHeight: 1.6,
  },
  compose: {
    paddingBlock: 'clamp(3rem, 6vw, 5rem)',
    [mq800]: {
      paddingBlock: `${tokens.space5} ${tokens.space6}`,
    },
  },
  composeHeading: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) minmax(18rem, 0.65fr)',
    gap: 'clamp(2rem, 8vw, 8rem)',
    alignItems: 'start',
    marginBottom: tokens.space6,
    [mq800]: {
      gridTemplateColumns: '1fr',
      gap: tokens.space3,
    },
  },
  composeTitle: {
    margin: 0,
    fontSize: tokens.fontSectionTitle,
  },
  composeIntro: {
    maxWidth: '32rem',
    justifySelf: 'end',
    textAlign: 'right',
    color: tokens.paperMuted,
    lineHeight: 1.65,
    [mq800]: {
      justifySelf: 'start',
      textAlign: 'left',
    },
  },
  form: {
    position: 'relative',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: tokens.ruleStrong,
    backgroundColor: tokens.graphite,
  },
  formSignal: {
    position: 'absolute',
    top: '-1px',
    left: '-1px',
    width: 'clamp(5rem, 13vw, 10rem)',
    height: '3px',
    backgroundColor: tokens.signal,
    transformOrigin: 'left center',
    animationName: dispatch,
    animationDuration: '650ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'both',
    [mqReducedMotion]: {
      animationName: 'none',
    },
  },
  routes: {
    minWidth: 0,
    margin: 0,
    padding: 0,
    borderWidth: 0,
  },
  legend: {
    width: '100%',
    paddingBlock: tokens.space4,
    paddingInline: tokens.space4,
    color: tokens.paper,
    fontSize: tokens.fontTitleSm,
    fontWeight: 600,
    [mq800]: {
      paddingBlock: tokens.space3,
    },
  },
  required: {
    color: tokens.paperSubtle,
    fontFamily: tokens.fontMono,
    fontSize: tokens.fontMeta,
    fontWeight: 400,
    letterSpacing: '0.03em',
    textTransform: 'uppercase',
  },
  routeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.rule,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: tokens.rule,
    [mq800]: {
      gridTemplateColumns: '1fr',
    },
  },
  route: {
    display: 'flex',
    minHeight: '10rem',
    flexDirection: 'column',
    padding: tokens.space4,
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: tokens.rule,
    backgroundColor: tokens.ink,
    cursor: 'pointer',
    transitionProperty: 'background-color, color',
    transitionDuration: '160ms',
    transitionTimingFunction: 'ease',
    ':last-child': {
      borderRightWidth: 0,
    },
    ':hover': {
      backgroundColor: tokens.steel,
    },
    [mq800]: {
      minHeight: 0,
      borderRightWidth: 0,
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: tokens.rule,
      ':last-child': {
        borderBottomWidth: 0,
      },
    },
  },
  routeActive: {
    backgroundColor: tokens.steel,
  },
  routeTopline: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: tokens.space4,
  },
  radio: {
    width: '1.1rem',
    height: '1.1rem',
    margin: 0,
    accentColor: tokens.signal,
  },
  routeNumber: {
    color: tokens.signal,
    fontFamily: tokens.fontMono,
    fontSize: tokens.fontMeta,
  },
  routeTitle: {
    marginBottom: tokens.space2,
    color: tokens.paper,
    fontSize: tokens.fontSubheadLg,
    fontWeight: 600,
    lineHeight: 1.25,
  },
  routeDetail: {
    maxWidth: '28rem',
    color: tokens.paperSubtle,
    fontSize: tokens.fontLead,
    lineHeight: 1.55,
  },
  identityGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    [mq600]: {
      gridTemplateColumns: '1fr',
    },
  },
  field: {
    display: 'grid',
    gap: tokens.space2,
    padding: tokens.space4,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: tokens.rule,
  },
  label: {
    color: tokens.paperMuted,
    fontFamily: tokens.fontMono,
    fontSize: tokens.fontCaption,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  input: {
    width: '100%',
    minHeight: '48px',
    paddingBlock: '0.75rem',
    paddingInline: '0.85rem',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: tokens.ruleStrong,
    borderRadius: 0,
    color: tokens.paper,
    caretColor: tokens.signal,
    backgroundColor: tokens.inkDeep,
    '::placeholder': {
      color: tokens.paperSubtle,
    },
    ':focus-visible': {
      borderColor: tokens.signalHot,
    },
  },
  messageField: {
    borderBottomWidth: 0,
  },
  textarea: {
    minHeight: '11rem',
    resize: 'vertical',
  },
  formFooter: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) auto',
    gap: tokens.space4,
    alignItems: 'center',
    padding: tokens.space4,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.ruleStrong,
    backgroundColor: tokens.inkDeep,
    [mq600]: {
      gridTemplateColumns: '1fr',
    },
  },
  privacyNote: {
    maxWidth: '42rem',
    color: tokens.paperSubtle,
    fontSize: tokens.fontSmall,
    lineHeight: 1.6,
  },
  submit: {
    width: 'fit-content',
    minWidth: 0,
    justifyContent: 'center',
    gap: tokens.space2,
    [mq600]: {
      width: 'fit-content',
    },
  },
  technical: {
    paddingBlock: 'clamp(4.5rem, 8vw, 7rem)',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.ruleStrong,
    backgroundColor: tokens.inkDeep,
  },
  technicalGrid: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.2fr) minmax(18rem, 0.8fr)',
    gap: 'clamp(3rem, 10vw, 10rem)',
    alignItems: 'end',
    [mq800]: {
      gridTemplateColumns: '1fr',
      gap: tokens.space4,
    },
  },
  technicalTitle: {
    maxWidth: '13ch',
    margin: 0,
  },
  technicalBody: {
    color: tokens.paperMuted,
  },
  technicalLink: {
    marginTop: tokens.space4,
  },
})
