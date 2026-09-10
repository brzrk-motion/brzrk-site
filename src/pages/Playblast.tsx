import { Link } from 'react-router-dom'
import * as stylex from '@stylexjs/stylex'
import { OceanHero } from '../components/OceanHero'
import { LINKS, LOOP_STEPS, SCREENSHOTS, YOU_GET } from '../playblast/constants'
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
          <h1 {...stylex.props(sharedStyles.heroBandChild, sharedStyles.heroHeadline)}>Private review for studio work.</h1>
          <p {...stylex.props(sharedStyles.heroBandChild, sharedStyles.pageIntro)}>
            Playblast is video review software for small studios. Versions, timestamped comments, frame annotations, compare, and approvals in one place.
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
            <p {...stylex.props(playblastStyles.sectionIntro)}>Walk through review, compare, and annotation.</p>
          </div>
          <ScreenshotCarousel screenshots={SCREENSHOTS} />
        </section>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="problem-heading">
          <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>02</span> Problem</p>
          <h2 id="problem-heading" {...stylex.props(sharedStyles.sectionTitle)}>Feedback should travel with the version.</h2>
          <div {...stylex.props(sharedStyles.sectionBody)}>
            <p>Review breaks down when versions, notes, drawings, and approvals are split across email, chat, file shares, and ad hoc comparison exports.</p>
            <ul {...stylex.props(sharedStyles.problemList)}>
              <li {...stylex.props(sharedStyles.problemListItem)}>Notes lose their exact frame and version context.</li>
              <li {...stylex.props(sharedStyles.problemListItem)}>Old links and exports compete with the current cut.</li>
              <li {...stylex.props(sharedStyles.problemListItem)}>Teams lose time rebuilding context instead of finishing the review.</li>
            </ul>
          </div>
        </section>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="loop-heading">
          <div {...stylex.props(playblastStyles.loopHeader)}>
            <div>
              <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>03</span> How it works</p>
              <h2 id="loop-heading" {...stylex.props(sharedStyles.sectionTitle)}>How Playblast works.</h2>
            </div>
            <p {...stylex.props(playblastStyles.sectionIntro)}>From upload to approval, the conversation stays with the media.</p>
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

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="selfhost-heading">
          <div {...stylex.props(playblastStyles.selfhostBand)}>
            <div>
              <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>05</span> Deployment</p>
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
            <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>06</span> Support</p>
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
