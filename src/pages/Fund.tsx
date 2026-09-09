import {
  LINKS,
  SPONSORSHIP_DISCLAIMER,
  SPONSORSHIP_TIERS,
} from '../playblast/constants'
import { SponsorshipTierBoundary } from '../playblast/SponsorshipTierBoundary'

function ExternalLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
}

export function Fund() {
  return (
    <div className="page fund-page">
      <div className="container">
        <header className="fund-hero reveal-hero">
          <p className="fund-hero__kicker">02 / Development fund</p>
          <h1 className="fund-hero__headline">Fund the maintenance, not a support tier.</h1>
          <p className="fund-hero__pitch">
            The Playblast Development Fund is the planned route for optional sponsorship of general maintenance and development. It is not open yet.
          </p>
          <div className="cta-group">
            <ExternalLink href={LINKS.sponsorsDoc} className="btn btn--primary">Read the funding policy <span aria-hidden="true">↗</span></ExternalLink>
            <ExternalLink href={LINKS.issues} className="btn btn--secondary">Follow public issues <span aria-hidden="true">↗</span></ExternalLink>
          </div>
        </header>

        <section className="section fund-section" aria-labelledby="fund-status-heading">
          <div className="fund-status">
            <p className="fund-status__signal">Current state / Pre-launch</p>
            <div>
              <h2 id="fund-status-heading" className="section__title">Funding is not open yet.</h2>
              <p className="fund-section-intro">
                There is no checkout, no fabricated activity, and no implied contributor base. The policy and recognition levels are public now so the boundary is clear before payments come online.
              </p>
            </div>
          </div>
        </section>

        <section className="section fund-section" aria-labelledby="policy-heading">
          <p className="index-label"><span>01</span> Funding policy</p>
          <h2 id="policy-heading" className="section__title">What sponsorship means.</h2>
          <div className="fund-policy">
            <article><h3>Funds the commons</h3><p>Contributions support maintenance and development of the public Playblast project.</p></article>
            <article><h3>Recognition only</h3><p>Planned tiers provide public credit. They do not change product access or service levels.</p></article>
            <article><h3>No private lane</h3><p>No support SLA, roadmap control, hosting, installation, or priority security treatment is sold.</p></article>
          </div>
        </section>

        <section className="section fund-section" aria-labelledby="tiers-heading">
          <p className="index-label"><span>02</span> Planned recognition</p>
          <h2 id="tiers-heading" className="section__title">Sponsorship tiers.</h2>
          <p className="fund-section-intro">These levels describe public recognition once the fund opens. They are not support packages.</p>
          <ul className="pb-tier-grid">
            {SPONSORSHIP_TIERS.map((tier) => (
              <li key={tier.name} className="pb-tier-card">
                <div className="pb-tier-card__head">
                  <h3>{tier.name}</h3>
                  <p className="pb-tier-card__price"><span className="pb-tier-card__amount">{tier.amount}</span> <span className="pb-tier-card__period">{tier.period}</span></p>
                </div>
                <p className="pb-tier-card__recognition">{tier.recognition}</p>
                <SponsorshipTierBoundary disclaimerId="fund-disclaimer" />
              </li>
            ))}
          </ul>
          <p id="fund-disclaimer" className="pb-funding-disclaimer">{SPONSORSHIP_DISCLAIMER}</p>
        </section>

        <section className="section fund-section" aria-labelledby="open-heading">
          <p className="index-label"><span>03</span> Before opening</p>
          <h2 id="open-heading" className="section__title">Evidence first.</h2>
          <div className="section__body">
            <p>The fund will only become actionable when the payment route, reporting cadence, and public record are ready. Until then, the repository and funding policy are the source of truth.</p>
          </div>
          <div className="cta-group">
            <ExternalLink href={LINKS.github} className="btn btn--secondary">View Playblast on GitHub <span aria-hidden="true">↗</span></ExternalLink>
            <ExternalLink href={LINKS.sponsorsDoc} className="btn btn--text">Read SPONSORS.md <span aria-hidden="true">↗</span></ExternalLink>
          </div>
        </section>
      </div>
    </div>
  )
}
