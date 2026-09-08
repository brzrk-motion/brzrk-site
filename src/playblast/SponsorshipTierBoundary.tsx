export function SponsorshipTierBoundary({
  disclaimerId,
}: {
  disclaimerId: string
}) {
  return (
    <p className="pb-tier-card__boundary">
      Recognition only —{' '}
      <a href={`#${disclaimerId}`} className="pb-tier-card__disclaimer-link">
        see disclaimer below
      </a>
      .
    </p>
  )
}
