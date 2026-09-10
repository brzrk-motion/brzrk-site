import * as stylex from '@stylexjs/stylex'
import { OceanHero } from '../components/OceanHero'
import {
  LINKS,
  SPONSORSHIP_DISCLAIMER,
  SPONSORSHIP_TIERS,
} from '../playblast/constants'
import { SponsorshipTierBoundary } from '../playblast/SponsorshipTierBoundary'
import { sharedStyles } from '../styles/shared.stylex'
import { fundStyles } from './Fund.stylex'

function ExternalLink({ href, children, ...anchorProps }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" {...anchorProps}>{children}</a>
}

export function Fund() {
  return (
    <div {...stylex.props(sharedStyles.page)}>
      <div {...stylex.props(sharedStyles.container)}>
        <header {...stylex.props(sharedStyles.fullBleedHero, sharedStyles.revealHero)}>
          <OceanHero />
          <p {...stylex.props(sharedStyles.heroKicker)}>02 / Development fund</p>
          <h1 {...stylex.props(sharedStyles.heroBandChild, sharedStyles.heroHeadline)}>Fund the maintenance, not a support tier.</h1>
          <p {...stylex.props(sharedStyles.heroBandChild, sharedStyles.pageIntro)}>
            The Playblast Development Fund is the planned route for optional sponsorship of general maintenance and development. It is not open yet.
          </p>
          <div {...stylex.props(sharedStyles.heroBandChild, sharedStyles.ctaGroup)}>
            <ExternalLink href={LINKS.sponsorsDoc} {...stylex.props(sharedStyles.btn, sharedStyles.btnPrimary)}>Read the funding policy <span aria-hidden="true">↗</span></ExternalLink>
            <ExternalLink href={LINKS.issues} {...stylex.props(sharedStyles.btn)}>Follow public issues <span aria-hidden="true">↗</span></ExternalLink>
          </div>
        </header>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="fund-status-heading">
          <div {...stylex.props(fundStyles.status)}>
            <p {...stylex.props(fundStyles.statusSignal)}>Current state / Pre-launch</p>
            <div>
              <h2 id="fund-status-heading" {...stylex.props(sharedStyles.sectionTitle)}>Funding is not open yet.</h2>
              <p {...stylex.props(fundStyles.sectionIntro)}>
                There is no checkout, no fabricated activity, and no implied contributor base. The policy and recognition levels are public now so the boundary is clear before payments come online.
              </p>
            </div>
          </div>
        </section>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="policy-heading">
          <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>01</span> Funding policy</p>
          <h2 id="policy-heading" {...stylex.props(sharedStyles.sectionTitle)}>What sponsorship means.</h2>
          <div {...stylex.props(fundStyles.policy)}>
            <article {...stylex.props(fundStyles.policyArticle)}>
              <h3 {...stylex.props(fundStyles.policyTitle)}>Funds the commons</h3>
              <p {...stylex.props(fundStyles.policyText)}>Contributions support maintenance and development of the public Playblast project.</p>
            </article>
            <article {...stylex.props(fundStyles.policyArticle)}>
              <h3 {...stylex.props(fundStyles.policyTitle)}>Recognition only</h3>
              <p {...stylex.props(fundStyles.policyText)}>Planned tiers provide public credit. They do not change product access or service levels.</p>
            </article>
            <article {...stylex.props(fundStyles.policyArticle)}>
              <h3 {...stylex.props(fundStyles.policyTitle)}>No private lane</h3>
              <p {...stylex.props(fundStyles.policyText)}>No support SLA, roadmap control, hosting, installation, or priority security treatment is sold.</p>
            </article>
          </div>
        </section>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="tiers-heading">
          <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>02</span> Planned recognition</p>
          <h2 id="tiers-heading" {...stylex.props(sharedStyles.sectionTitle)}>Sponsorship tiers.</h2>
          <p {...stylex.props(fundStyles.sectionIntro)}>These levels describe public recognition once the fund opens. They are not support packages.</p>
          <ul {...stylex.props(fundStyles.tierGrid)}>
            {SPONSORSHIP_TIERS.map((tier) => (
              <li key={tier.name} {...stylex.props(fundStyles.tierCard)}>
                <div>
                  <h3 {...stylex.props(fundStyles.tierCardTitle)}>{tier.name}</h3>
                  <p {...stylex.props(fundStyles.tierCardPrice)}>
                    <span {...stylex.props(fundStyles.tierCardAmount)}>{tier.amount}</span>{' '}
                    <span {...stylex.props(fundStyles.tierCardPeriod)}>{tier.period}</span>
                  </p>
                </div>
                <p {...stylex.props(fundStyles.tierCardRecognition)}>{tier.recognition}</p>
                <SponsorshipTierBoundary disclaimerId="fund-disclaimer" />
              </li>
            ))}
          </ul>
          <p id="fund-disclaimer" {...stylex.props(fundStyles.fundingDisclaimer)}>{SPONSORSHIP_DISCLAIMER}</p>
        </section>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="open-heading">
          <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>03</span> Before opening</p>
          <h2 id="open-heading" {...stylex.props(sharedStyles.sectionTitle)}>Evidence first.</h2>
          <div {...stylex.props(sharedStyles.sectionBody)}>
            <p>The fund will only become actionable when the payment route, reporting cadence, and public record are ready. Until then, the repository and funding policy are the source of truth.</p>
          </div>
          <div {...stylex.props(sharedStyles.ctaGroup)}>
            <ExternalLink href={LINKS.github} {...stylex.props(sharedStyles.btn)}>View Playblast on GitHub <span aria-hidden="true">↗</span></ExternalLink>
            <ExternalLink href={LINKS.sponsorsDoc} {...stylex.props(sharedStyles.btn, sharedStyles.btnText)}>Read SPONSORS.md <span aria-hidden="true">↗</span></ExternalLink>
          </div>
        </section>
      </div>
    </div>
  )
}
