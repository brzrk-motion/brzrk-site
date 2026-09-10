import * as stylex from '@stylexjs/stylex'
import { OceanHero } from '../components/OceanHero'
import { LINKS, SPONSORSHIP_TIERS } from '../playblast/constants'
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
          <h1 {...stylex.props(sharedStyles.heroBandChild, sharedStyles.heroHeadline)}>Fund Playblast development.</h1>
          <p {...stylex.props(sharedStyles.heroBandChild, sharedStyles.pageIntro)}>
            Optional sponsorship that sustains Playblast maintenance and development.
          </p>
          <div {...stylex.props(sharedStyles.heroBandChild, sharedStyles.ctaGroup)}>
            <ExternalLink href={LINKS.sponsorsDoc} {...stylex.props(sharedStyles.btn, sharedStyles.btnPrimary)}>Read SPONSORS.md <span aria-hidden="true">↗</span></ExternalLink>
            <ExternalLink href={LINKS.github} {...stylex.props(sharedStyles.btn)}>Explore Playblast on GitHub <span aria-hidden="true">↗</span></ExternalLink>
          </div>
        </header>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="fund-overview-heading">
          <p {...stylex.props(fundStyles.sectionIntro)}>Sponsorship checkout opens soon.</p>
          <h2 id="fund-overview-heading" {...stylex.props(sharedStyles.sectionTitle)}>How it works</h2>
          <div {...stylex.props(sharedStyles.sectionBody)}>
            <p>Sponsorship is optional. Sponsors receive public recognition. Full terms live in SPONSORS.md.</p>
          </div>
        </section>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="tiers-heading">
          <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>01</span> Planned recognition</p>
          <h2 id="tiers-heading" {...stylex.props(sharedStyles.sectionTitle)}>Sponsorship tiers.</h2>
          <p {...stylex.props(fundStyles.sectionIntro)}>Recognition levels for sponsors.</p>
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
              </li>
            ))}
          </ul>
          <p {...stylex.props(fundStyles.fundingDisclaimer)}>
            Details in{' '}
            <ExternalLink href={LINKS.sponsorsDoc}>SPONSORS.md</ExternalLink>.
          </p>
        </section>
      </div>
    </div>
  )
}
