import * as stylex from '@stylexjs/stylex'
import { ExternalLink } from '../components/ExternalLink'
import { OceanHero } from '../components/OceanHero'
import { scrollReveal } from '../lib/scrollReveal'
import { LINKS, SPONSORSHIP_TIERS } from '../playblast/constants'
import { sharedStyles } from '../styles/shared.stylex'
import { fundStyles } from './Fund.stylex'

const FUNDING_FLOW = [
  { title: 'Optional sponsorship', body: 'A proposed way for people and studios to contribute when the fund opens.' },
  { title: 'Maintenance and development', body: 'Contributions fund the ongoing work of maintaining and developing Playblast.' },
  { title: 'Public recognition', body: 'Sponsors receive recognition according to the planned level they choose.' },
]

const BOUNDARIES = ['Paid support', 'An SLA', 'Hosted Playblast', 'Installation', 'Roadmap control', 'Priority treatment']

export function Fund() {
  return (
      <div {...stylex.props(fundStyles.page)}>
      <header {...stylex.props(fundStyles.hero)}>
        <OceanHero />
        <div {...stylex.props(sharedStyles.container, fundStyles.heroGrid)}>
          <div {...stylex.props(fundStyles.heroCopy)}>
            <h1 {...stylex.props(fundStyles.heroTitle)}>The product comes first. The fund follows.</h1>
            <p {...stylex.props(fundStyles.heroLede)}>The Playblast Development Fund is a planned, optional sponsorship program for maintenance and development. It is not open yet.</p>
            <div {...stylex.props(sharedStyles.ctaGroup, fundStyles.heroActions)}>
              <ExternalLink href={LINKS.github} {...stylex.props(sharedStyles.btn, sharedStyles.btnPrimary)}>Explore Playblast</ExternalLink>
              <ExternalLink href={LINKS.sponsorsDoc} {...stylex.props(sharedStyles.btn)}>Read the full terms</ExternalLink>
            </div>
          </div>
          <aside {...stylex.props(fundStyles.status)} aria-labelledby="fund-status-heading">
            <h2 id="fund-status-heading" {...stylex.props(fundStyles.statusTitle)}>Fund status</h2>
            <dl {...stylex.props(fundStyles.statusList)}>
              <div {...stylex.props(fundStyles.statusRow)}>
                <dt {...stylex.props(fundStyles.statusTerm)}>Stage</dt>
                <dd {...stylex.props(fundStyles.statusValue, fundStyles.statusValueSignal)}>Pre-launch</dd>
              </div>
              <div {...stylex.props(fundStyles.statusRow)}>
                <dt {...stylex.props(fundStyles.statusTerm)}>Checkout</dt>
                <dd {...stylex.props(fundStyles.statusValue)}>Not open</dd>
              </div>
              <div {...stylex.props(fundStyles.statusRow)}>
                <dt {...stylex.props(fundStyles.statusTerm)}>Current focus</dt>
                <dd {...stylex.props(fundStyles.statusValue)}>Playblast</dd>
              </div>
            </dl>
          </aside>
          <div {...stylex.props(fundStyles.heroSignal)} aria-hidden="true" />
        </div>
      </header>

      <section {...stylex.props(fundStyles.circuit)} aria-labelledby="circuit-heading">
        <div {...stylex.props(sharedStyles.container)}>
          <div {...stylex.props(fundStyles.sectionHeading)}>
            <h2 id="circuit-heading" {...stylex.props(fundStyles.sectionTitle)}>Support follows a clear path.</h2>
            <p {...stylex.props(fundStyles.sectionIntro)}>Optional sponsorship supports maintenance and development, then returns public recognition. Product direction stays independent.</p>
          </div>
          <ol {...stylex.props(fundStyles.flow)} aria-label="Planned sponsorship flow">
            {FUNDING_FLOW.map((step, index) => (
              <li key={step.title} {...stylex.props(fundStyles.flowStep)} {...scrollReveal(0, 0.08 + index * 0.12)}>
                <span {...stylex.props(fundStyles.flowConnector, index === 2 && fundStyles.flowConnectorLast)} aria-hidden="true">
                  <span {...stylex.props(fundStyles.flowNode)} />
                </span>
                <span {...stylex.props(fundStyles.flowNumber)} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <h3 {...stylex.props(fundStyles.flowTitle)}>{step.title}</h3>
                <p {...stylex.props(fundStyles.flowBody)}>{step.body}</p>
              </li>
            ))}
          </ol>
          <div {...stylex.props(fundStyles.hardStop)} {...scrollReveal(40, 0.08)}>
            <span {...stylex.props(fundStyles.hardStopWire)} aria-hidden="true" />
            <span {...stylex.props(fundStyles.hardStopMark)} aria-hidden="true" />
            <p><strong {...stylex.props(fundStyles.hardStopTitle)}>Influence / disconnected.</strong> Sponsorship never becomes purchased influence.</p>
          </div>
        </div>
      </section>

      <section {...stylex.props(fundStyles.tiers)} aria-labelledby="tiers-heading">
        <div {...stylex.props(sharedStyles.container)}>
          <div {...stylex.props(fundStyles.sectionHeading)}>
            <h2 id="tiers-heading" {...stylex.props(fundStyles.sectionTitle)}>Recognition, planned in public.</h2>
            <p {...stylex.props(fundStyles.sectionIntro)}>These levels are planned for launch. Amounts and recognition are listed here without an inactive checkout.</p>
          </div>
          <ul {...stylex.props(fundStyles.tierLedger)}>
            {SPONSORSHIP_TIERS.map((tier, index) => (
              <li key={tier.name} {...stylex.props(fundStyles.tierRow)} {...scrollReveal(40, 0.08 + index * 0.1)}>
                <h3 {...stylex.props(fundStyles.tierName)}>{tier.name}</h3>
                <p {...stylex.props(fundStyles.tierPrice)}><span {...stylex.props(fundStyles.tierAmount)}>{tier.amount}</span> {tier.period}</p>
                <p {...stylex.props(fundStyles.tierRecognition)}>{tier.recognition}</p>
              </li>
            ))}
          </ul>
          <p {...stylex.props(fundStyles.fundingDisclaimer)}>
            Full recognition details live in <ExternalLink href={LINKS.sponsorsDoc} {...stylex.props(fundStyles.fundingLink)}>SPONSORS.md</ExternalLink>.
          </p>
        </div>
      </section>

      <section {...stylex.props(fundStyles.boundary)} aria-labelledby="boundary-heading">
        <div {...stylex.props(sharedStyles.container, fundStyles.boundaryGrid)}>
          <div>
            <h2 id="boundary-heading" {...stylex.props(fundStyles.boundaryTitle)}>Clear boundaries keep the work independent.</h2>
            <p {...stylex.props(fundStyles.boundaryIntro)}>Sponsorship funds maintenance and development. It does not buy:</p>
          </div>
          <ul {...stylex.props(fundStyles.boundaryList)}>
            {BOUNDARIES.map((item) => <li key={item} {...stylex.props(fundStyles.boundaryItem)}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section {...stylex.props(fundStyles.close)} aria-labelledby="close-heading">
        <div {...stylex.props(sharedStyles.container, fundStyles.closeGrid)}>
          <h2 id="close-heading" {...stylex.props(fundStyles.closeTitle)}>Start with Playblast.</h2>
          <div {...stylex.props(fundStyles.closeBody)}>
            <p>Playblast is a self-hosted MVP release candidate. The core workflow exists while clean-install and adoption checks continue.</p>
            <div {...stylex.props(sharedStyles.ctaGroup, fundStyles.closeActions)}>
              <ExternalLink href={LINKS.github} {...stylex.props(sharedStyles.btn, sharedStyles.btnPrimary)}>Explore Playblast</ExternalLink>
              <ExternalLink href={LINKS.sponsorsDoc} {...stylex.props(sharedStyles.btn)}>Read SPONSORS.md</ExternalLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
