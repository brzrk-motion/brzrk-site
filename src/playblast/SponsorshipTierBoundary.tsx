import * as stylex from '@stylexjs/stylex'
import { fundStyles } from '../pages/Fund.stylex'

export function SponsorshipTierBoundary({
  disclaimerId,
}: {
  disclaimerId: string
}) {
  return (
    <p {...stylex.props(fundStyles.tierCardBoundary)}>
      Recognition only.{' '}
      <a href={`#${disclaimerId}`}>
        See the disclaimer below
      </a>
      .
    </p>
  )
}
