import {
  LINKS,
  SPONSORSHIP_DISCLAIMER,
  SPONSORSHIP_TIERS,
} from '../playblast/constants'
import { SponsorshipTierBoundary } from '../playblast/SponsorshipTierBoundary'

function ExternalLink({
  href,
  children,
  className = '',
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}

const FUND_STATS = {
  monthlyContribution: '$0',
  individuals: '0',
  corporate: '0',
} as const

export function Fund() {
  return (
    <div className="page fund-page">
      <div className="container">
        <header className="fund-hero reveal-hero">
          <p className="fund-hero__kicker">Development fund</p>
          <h1 className="fund-hero__headline">Playblast Development Fund</h1>
          <p className="fund-hero__pitch">
            Optional sponsorship helps fund open-source maintenance and
            development of Playblast — brzrk&apos;s flagship self-hosted proofing
            tool. Every contribution funds maintenance and development;
            recognition tiers are listed below.
          </p>
          <div className="cta-group">
            <ExternalLink href={LINKS.sponsorsDoc} className="btn btn--primary">
              Sponsor (coming online)
            </ExternalLink>
            <ExternalLink href={LINKS.issues} className="btn btn--secondary">
              Open Playblast issues
            </ExternalLink>
          </div>
          <p className="fund-hero__note">
            GitHub Sponsors is not live yet. Read{' '}
            <ExternalLink href={LINKS.sponsorsDoc}>SPONSORS.md</ExternalLink>{' '}
            for how sponsorship will work when checkout opens.
          </p>
        </header>

        <section
          className="section fund-section"
          aria-labelledby="activity-heading"
        >
          <h2 id="activity-heading" className="section__title">
            Latest activity
          </h2>
          <div className="fund-activity fund-activity--empty">
            <p>No recent donations yet.</p>
          </div>
        </section>

        <section
          className="section fund-section"
          aria-labelledby="numbers-heading"
        >
          <h2 id="numbers-heading" className="section__title visually-hidden">
            Fund numbers
          </h2>
          <ul className="fund-numbers">
            <li className="fund-numbers__item">
              <span className="fund-numbers__value">
                {FUND_STATS.monthlyContribution}
              </span>
              <span className="fund-numbers__label">Monthly contribution</span>
            </li>
            <li className="fund-numbers__item">
              <span className="fund-numbers__value">
                {FUND_STATS.individuals}
              </span>
              <span className="fund-numbers__label">Individuals</span>
            </li>
            <li className="fund-numbers__item">
              <span className="fund-numbers__value">
                {FUND_STATS.corporate}
              </span>
              <span className="fund-numbers__label">Corporate</span>
            </li>
          </ul>
        </section>

        <section
          className="section fund-section"
          aria-labelledby="credits-heading"
        >
          <h2 id="credits-heading" className="section__title">Credits</h2>
          <p className="fund-section-intro">
            Supporters recognized by sponsorship tier. Lists update when
            GitHub Sponsors goes live.
          </p>
          <div className="fund-credits">
            {SPONSORSHIP_TIERS.map((tier) => (
              <section
                key={tier.name}
                className="fund-credits__tier"
                aria-labelledby={`credits-${tier.name.replace(/\s+/g, '-').toLowerCase()}`}
              >
                <h3
                  id={`credits-${tier.name.replace(/\s+/g, '-').toLowerCase()}`}
                  className="fund-credits__tier-name"
                >
                  {tier.name}
                  <span className="fund-credits__tier-amount">
                    {tier.amount}
                    {tier.period}
                  </span>
                </h3>
                <div className="fund-credits__supporters fund-credits__supporters--empty">
                  <p>No supporters yet.</p>
                </div>
              </section>
            ))}
          </div>
          <p id="credits-disclaimer" className="pb-funding-disclaimer">
            {SPONSORSHIP_DISCLAIMER}
          </p>
        </section>

        <section
          className="section fund-section"
          aria-labelledby="tiers-heading"
        >
          <div className="pb-funding-block">
            <h2 id="tiers-heading" className="section__title">
              Sponsorship tiers
            </h2>
            <p className="fund-section-intro">
              Locked ladder for optional development fund sponsorship. Funding
              supports Playblast maintenance — not support packages or SLAs.
            </p>
            <ul className="pb-tier-grid">
              {SPONSORSHIP_TIERS.map((tier) => (
                <li key={tier.name} className="pb-tier-card">
                  <div className="pb-tier-card__head">
                    <h3>{tier.name}</h3>
                    <p className="pb-tier-card__price">
                      <span className="pb-tier-card__amount">{tier.amount}</span>
                      <span className="pb-tier-card__period">{tier.period}</span>
                    </p>
                  </div>
                  <p className="pb-tier-card__recognition">{tier.recognition}</p>
                  <SponsorshipTierBoundary disclaimerId="sponsorship-disclaimer" />
                </li>
              ))}
            </ul>
            <p id="sponsorship-disclaimer" className="pb-funding-disclaimer">
              {SPONSORSHIP_DISCLAIMER}
            </p>
            <div className="pb-funding-cta">
              <p className="pb-funding-cta__note">
                GitHub Sponsors coming online.
              </p>
              <ExternalLink href={LINKS.sponsorsDoc} className="btn btn--ghost">
                Read SPONSORS.md →
              </ExternalLink>
              <ExternalLink href={LINKS.issues} className="btn btn--ghost">
                Open Playblast issues →
              </ExternalLink>
              <ExternalLink href={LINKS.github} className="btn btn--ghost">
                Explore Playblast on GitHub →
              </ExternalLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
