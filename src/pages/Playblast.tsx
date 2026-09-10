import { Link } from 'react-router-dom'
import * as stylex from '@stylexjs/stylex'
import { LINKS, LOOP_STEPS, SCREENSHOTS, YOU_DONT_GET, YOU_GET } from '../playblast/constants'
import { sharedStyles } from '../styles/shared.stylex'
import { playblastStyles } from './Playblast.stylex'

function ExternalLink({ href, children, ...anchorProps }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" {...anchorProps}>{children}</a>
}

export function Playblast() {
  return (
    <div {...stylex.props(sharedStyles.page)}>
      <div {...stylex.props(sharedStyles.container)}>
        <header {...stylex.props(playblastStyles.hero, sharedStyles.revealHero)}>
          <p {...stylex.props(playblastStyles.heroKicker)}>01 / Playblast</p>
          <div {...stylex.props(playblastStyles.heroContent)}>
            <h1 {...stylex.props(playblastStyles.heroHeadline)}>Private review.<br />Your infrastructure.</h1>
            <p {...stylex.props(playblastStyles.heroSubhead)}>
              A self-hosted video-proofing tool for small studios: versions, timestamped comments, frame annotations, compare, approvals, and review history.
            </p>
            <div {...stylex.props(sharedStyles.ctaGroup)}>
              <ExternalLink href={LINKS.github} {...stylex.props(sharedStyles.btn, sharedStyles.btnPrimary)}>
                Explore on GitHub <span aria-hidden="true">↗</span>
              </ExternalLink>
              <ExternalLink href={LINKS.installGuide} {...stylex.props(sharedStyles.btn)}>
                Read install docs <span aria-hidden="true">↗</span>
              </ExternalLink>
            </div>
            <aside {...stylex.props(sharedStyles.honestyBlock)}>
              <div {...stylex.props(sharedStyles.honestyBlockLabel)}>MVP release candidate</div>
              <p>Core proofing exists. Independent clean-install and adoption checks remain in progress. You run your own instance; brzrk does not provide hosting, installation, or a support SLA.</p>
            </aside>
          </div>
        </header>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="problem-heading">
          <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>01</span> Problem</p>
          <h2 id="problem-heading" {...stylex.props(sharedStyles.sectionTitle)}>Feedback belongs with the cut.</h2>
          <div {...stylex.props(sharedStyles.sectionBody)}>
            <p>Review breaks down when versions, notes, drawings, and approvals are split across email, chat, file shares, and improvised comparison reels.</p>
            <ul {...stylex.props(sharedStyles.problemList)}>
              <li {...stylex.props(sharedStyles.problemListItem)}>Notes lose their exact frame and version context.</li>
              <li {...stylex.props(sharedStyles.problemListItem)}>Old links and exports compete with the current cut.</li>
              <li {...stylex.props(sharedStyles.problemListItem)}>Studios trade workflow clarity for another external service.</li>
            </ul>
          </div>
        </section>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="loop-heading">
          <div {...stylex.props(playblastStyles.loopHeader)}>
            <div>
              <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>02</span> Review loop</p>
              <h2 id="loop-heading" {...stylex.props(sharedStyles.sectionTitle)}>One traceable sequence.</h2>
            </div>
            <p {...stylex.props(playblastStyles.sectionIntro)}>From a version landing on studio hardware to a recorded approval, the working context stays together.</p>
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

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="screenshots-heading">
          <div {...stylex.props(playblastStyles.screenshotsHeader)}>
            <div>
              <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>03</span> Product evidence</p>
              <h2 id="screenshots-heading" {...stylex.props(sharedStyles.sectionTitle)}>The interface, not a mockup.</h2>
            </div>
            <p {...stylex.props(playblastStyles.sectionIntro)}>Current screens from the working Playblast review experience. No invented customer footage or feature theatre.</p>
          </div>
          <ul {...stylex.props(playblastStyles.screenshotGallery)}>
            {SCREENSHOTS.map((shot) => (
              <li key={shot.src} {...stylex.props(playblastStyles.screenshotCard)}>
                <figure>
                  <div {...stylex.props(sharedStyles.evidenceFrameChrome)}>
                    <span>{shot.code}</span><span>1440 × 900 / CURRENT UI</span>
                  </div>
                  <div {...stylex.props(playblastStyles.screenshotCardFrame)}>
                    <img
                      {...stylex.props(playblastStyles.screenshotCardImage)}
                      src={shot.src}
                      alt={shot.alt}
                      width="1440"
                      height="900"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption {...stylex.props(playblastStyles.screenshotCardFigcaption)}>
                    <span>{shot.code}</span><span>{shot.caption}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
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
              <h2 {...stylex.props(sharedStyles.sectionTitle)}>What you don&apos;t.</h2>
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
                <ExternalLink href={LINKS.installGuide} {...stylex.props(sharedStyles.btn)}>Inspect deployment docs <span aria-hidden="true">↗</span></ExternalLink>
                <ExternalLink href={LINKS.issues} {...stylex.props(sharedStyles.btn, sharedStyles.btnText)}>Public issues <span aria-hidden="true">↗</span></ExternalLink>
              </div>
            </div>
          </div>
        </section>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="funding-heading">
          <div {...stylex.props(playblastStyles.fundingBlock)}>
            <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>06</span> Optional sponsorship</p>
            <h2 id="funding-heading" {...stylex.props(sharedStyles.sectionTitle)}>The fund is not open yet.</h2>
            <p {...stylex.props(playblastStyles.sectionIntro)}>The planned fund will support general maintenance and development. It will not buy private support, hosting, installation, response times, or roadmap control.</p>
            <div {...stylex.props(playblastStyles.fundingCta)}>
              <Link to="/fund" {...stylex.props(sharedStyles.btn, sharedStyles.btnPrimary)}>Read the funding boundary <span aria-hidden="true">→</span></Link>
              <ExternalLink href={LINKS.sponsorsDoc} {...stylex.props(sharedStyles.btn, sharedStyles.btnText)}>SPONSORS.md <span aria-hidden="true">↗</span></ExternalLink>
            </div>
          </div>
        </section>

        <p {...stylex.props(sharedStyles.externalNote)}>
          Full marketing overview also at{' '}
          <ExternalLink href={LINKS.marketingLp}>playblast-lp</ExternalLink>.
          External links open in a new tab.
        </p>
      </div>
    </div>
  )
}
