import { Link } from 'react-router-dom'
import * as stylex from '@stylexjs/stylex'
import { OceanHero } from '../components/OceanHero'
import { LINKS, LOOP_STEPS, SCREENSHOTS, YOU_DONT_GET, YOU_GET } from '../playblast/constants'
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
          <h1 {...stylex.props(sharedStyles.heroBandChild, sharedStyles.heroHeadline)}>Private review.<br />Your infrastructure.</h1>
          <p {...stylex.props(sharedStyles.heroBandChild, sharedStyles.pageIntro)}>
            Self-hosted video proofing for small studios. Versions, timestamped comments, frame annotations, compare, approvals, and review history in one place.
          </p>
          <div {...stylex.props(sharedStyles.heroBandChild, sharedStyles.ctaGroup)}>
            <ExternalLink href={LINKS.github} {...stylex.props(sharedStyles.btn, sharedStyles.btnPrimary)}>
              Explore on GitHub <span aria-hidden="true">↗</span>
            </ExternalLink>
            <ExternalLink href={LINKS.installGuide} {...stylex.props(sharedStyles.btn)}>
              Read install docs <span aria-hidden="true">↗</span>
            </ExternalLink>
          </div>
          <aside {...stylex.props(sharedStyles.heroBandChild, sharedStyles.honestyBlock)}>
            <div {...stylex.props(sharedStyles.honestyBlockLabel)}>MVP release candidate</div>
            <p>Core proofing exists. Independent clean-install and adoption checks remain in progress. Not commercially validated. You run your own instance; brzrk does not provide hosting, installation, or a support SLA.</p>
          </aside>
        </header>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="screenshots-heading">
          <div {...stylex.props(playblastStyles.screenshotsHeader)}>
            <div>
              <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>01</span> Product evidence</p>
              <h2 id="screenshots-heading" {...stylex.props(sharedStyles.sectionTitle)}>Real product screens.</h2>
            </div>
            <p {...stylex.props(playblastStyles.sectionIntro)}>Screens from the working Playblast review experience. No invented customer footage or staged feature demos.</p>
          </div>
          <ScreenshotCarousel screenshots={SCREENSHOTS} />
        </section>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="problem-heading">
          <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>02</span> Problem</p>
          <h2 id="problem-heading" {...stylex.props(sharedStyles.sectionTitle)}>Keep feedback with the version.</h2>
          <div {...stylex.props(sharedStyles.sectionBody)}>
            <p>Review breaks down when versions, notes, drawings, and approvals are split across email, chat, file shares, and ad hoc comparison exports.</p>
            <ul {...stylex.props(sharedStyles.problemList)}>
              <li {...stylex.props(sharedStyles.problemListItem)}>Notes lose their exact frame and version context.</li>
              <li {...stylex.props(sharedStyles.problemListItem)}>Old links and exports compete with the current cut.</li>
              <li {...stylex.props(sharedStyles.problemListItem)}>Studios give up private media control for another external service.</li>
            </ul>
          </div>
        </section>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="loop-heading">
          <div {...stylex.props(playblastStyles.loopHeader)}>
            <div>
              <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>03</span> Review loop</p>
              <h2 id="loop-heading" {...stylex.props(sharedStyles.sectionTitle)}>One continuous review path.</h2>
            </div>
            <p {...stylex.props(playblastStyles.sectionIntro)}>From upload on studio hardware to a recorded approval, context stays with the media.</p>
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
          <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>04</span> Product boundary</p>
          <div {...stylex.props(playblastStyles.splitGrid)}>
            <div {...stylex.props(playblastStyles.splitPanel)}>
              <h2 id="boundary-heading" {...stylex.props(sharedStyles.sectionTitle)}>What you get.</h2>
              <ul {...stylex.props(playblastStyles.checkList)}>
                {YOU_GET.map((item) => <li key={item} {...stylex.props(playblastStyles.checkListItem)}>{item}</li>)}
              </ul>
            </div>
            <div {...stylex.props(playblastStyles.splitPanel, playblastStyles.splitPanelRight)}>
              <h2 {...stylex.props(sharedStyles.sectionTitle)}>What you do not get.</h2>
              <ul {...stylex.props(playblastStyles.crossList)}>
                {YOU_DONT_GET.map((item) => <li key={item} {...stylex.props(playblastStyles.crossListItem)}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="selfhost-heading">
          <div {...stylex.props(playblastStyles.selfhostBand)}>
            <div>
              <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>05</span> Deployment</p>
              <h2 id="selfhost-heading" {...stylex.props(sharedStyles.sectionTitle)}>Self-hosted means self-operated.</h2>
            </div>
            <div {...stylex.props(sharedStyles.sectionBody)}>
              <p>Playblast is intended for Docker deployment on a studio NAS or Linux host. Media stays on the filesystem you control. Each studio operates and backs up its own instance.</p>
              <div {...stylex.props(sharedStyles.ctaGroup)}>
                <ExternalLink href={LINKS.installGuide} {...stylex.props(sharedStyles.btn, playblastStyles.selfhostBtn)}>Read install docs <span aria-hidden="true">↗</span></ExternalLink>
                <ExternalLink href={LINKS.issues} {...stylex.props(sharedStyles.btn, sharedStyles.btnText, playblastStyles.selfhostBtn)}>View public issues <span aria-hidden="true">↗</span></ExternalLink>
              </div>
            </div>
          </div>
        </section>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="funding-heading">
          <div {...stylex.props(playblastStyles.fundingBlock)}>
            <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>06</span> Optional sponsorship</p>
            <h2 id="funding-heading" {...stylex.props(sharedStyles.sectionTitle)}>The fund is not open yet.</h2>
            <p {...stylex.props(playblastStyles.sectionIntro)}>The planned fund will fund general maintenance and development. It will not purchase private support, hosting, installation, response times, or roadmap control.</p>
            <div {...stylex.props(playblastStyles.fundingCta)}>
              <Link to="/fund" {...stylex.props(sharedStyles.btn, sharedStyles.btnPrimary)}>Read the funding boundary <span aria-hidden="true">→</span></Link>
              <ExternalLink href={LINKS.sponsorsDoc} {...stylex.props(sharedStyles.btn, sharedStyles.btnText)}>SPONSORS.md <span aria-hidden="true">↗</span></ExternalLink>
            </div>
          </div>
        </section>

        <p {...stylex.props(sharedStyles.externalNote)}>
          Additional overview:{' '}
          <ExternalLink href={LINKS.marketingLp}>playblast-lp</ExternalLink>.
          External links open in a new tab.
        </p>
      </div>
    </div>
  )
}
