import * as stylex from '@stylexjs/stylex'
import { tokens } from '../styles/tokens.stylex'

const mq720 = '@media (max-width: 720px)'

export const contactStyles = stylex.create({
  form: {
    display: 'grid',
    gap: tokens.space4,
    marginTop: tokens.space6,
    paddingTop: tokens.space5,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.ruleStrong,
  },
  field: {
    display: 'grid',
    gridTemplateColumns: '10rem 1fr',
    gap: tokens.space4,
    alignItems: 'start',
    [mq720]: {
      gridTemplateColumns: '1fr',
      gap: tokens.space2,
    },
  },
  label: {
    paddingTop: '0.75rem',
    color: tokens.paperMuted,
    fontFamily: tokens.fontMono,
    fontSize: '0.73rem',
    lineHeight: 1.4,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    [mq720]: {
      paddingTop: 0,
    },
  },
  required: {
    color: tokens.paperSubtle,
    fontSize: '0.66rem',
  },
  input: {
    width: '100%',
    minHeight: '44px',
    paddingBlock: '0.7rem',
    paddingInline: '0.8rem',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: tokens.ruleStrong,
    borderRadius: 0,
    color: tokens.paper,
    backgroundColor: tokens.graphite,
    '::placeholder': {
      color: tokens.paperSubtle,
    },
    ':focus': {
      borderColor: tokens.signalHot,
      outlineWidth: '3px',
      outlineStyle: 'solid',
      outlineColor: tokens.signalHot,
      outlineOffset: '2px',
    },
  },
  textarea: {
    minHeight: '10rem',
    resize: 'vertical',
  },
  submit: {
    justifySelf: 'start',
    marginLeft: '14rem',
    [mq720]: {
      marginLeft: 0,
    },
  },
})
