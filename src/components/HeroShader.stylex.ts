import * as stylex from '@stylexjs/stylex'
import { tokens } from '../styles/tokens.stylex'

export const heroShaderStyles = stylex.create({
  canvas: {
    display: 'block',
    width: '100%',
    height: '100%',
  },
  fallback: {
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundColor: tokens.graphite,
  },
})
