import { Link } from 'react-router-dom'
import * as stylex from '@stylexjs/stylex'
import { OceanHero } from '../components/OceanHero'
import { CLIENT_FINANCE_FEATURES, LINKS, LOOP_STEPS, SCREENSHOTS, YOU_GET } from '../playblast/constants'
import { ScreenshotCarousel } from '../playblast/ScreenshotCarousel'
import { sharedStyles } from '../styles/shared.stylex'
import { playblastStyles } from './Playblast.stylex'

function ExternalLink({ href, children, ...anchorProps }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" {...anchorProps}>{children}</a>
}

export function Playblast() {
  return (
    <div {...stylex.props(sharedStyles.page)}>
      <div {...stylex.props(sharedStyles.container)}>
        <header {...stylex.props(sharedStyles.fullBleedHero, sharedStyles.revealHero)}>
          <OceanHero />
          <p {...stylex.props(sharedStyles.heroKicker)}>01 / Playblast</p>
          <h1 {...stylex.props(sharedStyles.heroBandChild, sharedStyles.heroHeadline)}>Review and studio ops in one place.</h1>
          <p {...stylex.props(sharedStyles.heroBandChild, sharedStyles.pageIntro)}>
            Playblast is self-hosted software for small studios. Review versions with comments and annotations, manage clients and retainers, and issue invoices from the same projects.
          </p>
          <div {...stylex.props(sharedStyles.heroBandChild, sharedStyles.ctaGroup)}>
            <ExternalLink href={LINKS.github} {...stylex.props(sharedStyles.btn, sharedStyles.btnPrimary)}>
              Explore on GitHub <span aria-hidden="true">↗</span>
            </ExternalLink>
            <ExternalLink href={LINKS.installGuide} {...stylex.props(sharedStyles.btn)}>
              Read install docs <span aria-hidden="true">↗</span>
            </ExternalLink>
          </div>
        </header>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="screenshots-heading">
          <div {...stylex.props(playblastStyles.screenshotsHeader)}>
            <div>
              <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>01</span> Screens</p>
              <h2 id="screenshots-heading" {...stylex.props(sharedStyles.sectionTitle)}>See the workflow.</h2>
            </div>
            <p {...stylex.props(playblastStyles.sectionIntro)}>Clients, invoices, review, and compare in one walkthrough.</p>
          </div>
          <ScreenshotCarousel screenshots={SCREENSHOTS} />
        </section>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="problem-heading">
          <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>02</span> Problem</p>
          <h2 id="problem-heading" {...stylex.props(sharedStyles.sectionTitle)}>Review and money should share one project.</h2>
          <div {...stylex.props(sharedStyles.sectionBody)}>
            <p>Studios lose time when review lives in one tool and clients, estimates, and invoices live in another. Context frays; handoffs multiply.</p>
            <ul {...stylex.props(sharedStyles.problemList)}>
              <li {...stylex.props(sharedStyles.problemListItem)}>Notes lose their frame and version context.</li>
              <li {...stylex.props(sharedStyles.problemListItem)}>Client and invoice history sits outside the project.</li>
              <li {...stylex.props(sharedStyles.problemListItem)}>Teams rebuild the same story for review and for billing.</li>
            </ul>
          </div>
        </section>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="loop-heading">
          <div {...stylex.props(playblastStyles.loopHeader)}>
            <div>
              <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>03</span> How it works</p>
              <h2 id="loop-heading" {...stylex.props(sharedStyles.sectionTitle)}>How Playblast works.</h2>
            </div>
            <p {...stylex.props(playblastStyles.sectionIntro)}>From upload to approval, feedback stays with the media. Clients and invoices can attach to the same projects.</p>
          </div>
          <ol {...stylex.props(playblastStyles.timeline)}>
            {LOOP_STEPS.map((step, index) => (
              <li key={step.title} {...stylex.props(playblastStyles.timelineItem)}>
                <span {...stylex.props(playblastStyles.timelineMarker)} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div {...stylex.props(playblastStyles.timelineBody)}>
                  <h3 {...stylex.props(playblastStyles.timelineTitle)}>{step.title}</h3>
                  <p {...stylex.props(playblastStyles.timelineText)}>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="boundary-heading">
          <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>04</span> Features</p>
          <h2 id="boundary-heading" {...stylex.props(sharedStyles.sectionTitle)}>What you get.</h2>
          <ul {...stylex.props(playblastStyles.checkList)}>
            {YOU_GET.map((item) => <li key={item} {...stylex.props(playblastStyles.checkListItem)}>{item}</li>)}
          </ul>
        </section>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="finances-heading">
          <div {...stylex.props(playblastStyles.financesHeader)}>
            <div>
              <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>05</span> Clients and finances</p>
              <h2 id="finances-heading" {...stylex.props(sharedStyles.sectionTitle)}>Clients and finances.</h2>
            </div>
            <p {...stylex.props(playblastStyles.sectionIntro)}>
              Track leads and clients, retainers, and lifetime value. Build estimates, log services, and send invoices without leaving the project.
            </p>
          </div>
          <ul {...stylex.props(playblastStyles.financesList)}>
            {CLIENT_FINANCE_FEATURES.map((item) => (
              <li key={item} {...stylex.props(playblastStyles.financesListItem)}>{item}</li>
            ))}
          </ul>
        </section>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="selfhost-heading">
          <div {...stylex.props(playblastStyles.selfhostBand)}>
            <div>
              <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>06</span> Deployment</p>
              <h2 id="selfhost-heading" {...stylex.props(sharedStyles.sectionTitle)}>Runs on your infrastructure.</h2>
            </div>
            <div {...stylex.props(sharedStyles.sectionBody)}>
              <p>Deploy with Docker on a studio NAS or Linux host. You control media, backups, and access.</p>
              <div {...stylex.props(sharedStyles.ctaGroup)}>
                <ExternalLink href={LINKS.installGuide} {...stylex.props(sharedStyles.btn, playblastStyles.selfhostBtn)}>Read install docs <span aria-hidden="true">↗</span></ExternalLink>
                <ExternalLink href={LINKS.issues} {...stylex.props(sharedStyles.btn, sharedStyles.btnText, playblastStyles.selfhostBtn)}>View public issues <span aria-hidden="true">↗</span></ExternalLink>
              </div>
            </div>
          </div>
        </section>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="funding-heading">
          <div {...stylex.props(playblastStyles.fundingBlock)}>
            <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>07</span> Support</p>
            <h2 id="funding-heading" {...stylex.props(sharedStyles.sectionTitle)}>Support development.</h2>
            <p {...stylex.props(playblastStyles.sectionIntro)}>Optional sponsorship helps fund ongoing Playblast development.</p>
            <div {...stylex.props(playblastStyles.fundingCta)}>
              <Link to="/fund" {...stylex.props(sharedStyles.btn, sharedStyles.btnPrimary)}>Visit the Development Fund <span aria-hidden="true">→</span></Link>
              <ExternalLink href={LINKS.sponsorsDoc} {...stylex.props(sharedStyles.btn, sharedStyles.btnText)}>Read SPONSORS.md <span aria-hidden="true">↗</span></ExternalLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
