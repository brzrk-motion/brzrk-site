import { Link } from 'react-router-dom'
import * as stylex from '@stylexjs/stylex'
import { CLIENT_FINANCE_FEATURES, LINKS, LOOP_STEPS, SCREENSHOTS, YOU_GET } from '../playblast/constants'
import { ScreenshotCarousel } from '../playblast/ScreenshotCarousel'
import { sharedStyles } from '../styles/shared.stylex'
import { playblastStyles } from './Playblast.stylex'

function ExternalLink({ href, children, ...anchorProps }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" {...anchorProps}>{children}</a>
}

export function Playblast() {
  return (
    <div {...stylex.props(playblastStyles.page)}>
      <header {...stylex.props(playblastStyles.hero)}>
        <div {...stylex.props(sharedStyles.container, playblastStyles.heroGrid)}>
          <div {...stylex.props(playblastStyles.heroCopy)}>
            <h1 {...stylex.props(playblastStyles.heroHeadline)}>Review and studio ops in one place.</h1>
            <p {...stylex.props(playblastStyles.heroLede)}>
              Playblast is self-hosted software for small studios. Review versions with comments and annotations, manage clients and retainers, and issue invoices from the same projects.
            </p>
            <div {...stylex.props(sharedStyles.ctaGroup, playblastStyles.heroCta)}>
              <ExternalLink href={LINKS.github} {...stylex.props(sharedStyles.btn, sharedStyles.btnPrimary)}>
                Explore on GitHub <span aria-hidden="true">↗</span>
              </ExternalLink>
              <ExternalLink href={LINKS.installGuide} {...stylex.props(sharedStyles.btn)}>
                Read install docs <span aria-hidden="true">↗</span>
              </ExternalLink>
            </div>
          </div>
          <aside {...stylex.props(playblastStyles.status)} aria-labelledby="playblast-status-heading">
            <h2 id="playblast-status-heading" {...stylex.props(playblastStyles.statusTitle)}>Playblast status</h2>
            <dl {...stylex.props(playblastStyles.statusList)}>
              <div {...stylex.props(playblastStyles.statusRow)}>
                <dt {...stylex.props(playblastStyles.statusTerm)}>Stage</dt>
                <dd {...stylex.props(playblastStyles.statusValue, playblastStyles.statusValueSignal)}>MVP release candidate</dd>
              </div>
              <div {...stylex.props(playblastStyles.statusRow)}>
                <dt {...stylex.props(playblastStyles.statusTerm)}>Deployment</dt>
                <dd {...stylex.props(playblastStyles.statusValue)}>Self-hosted</dd>
              </div>
              <div {...stylex.props(playblastStyles.statusRow)}>
                <dt {...stylex.props(playblastStyles.statusTerm)}>Current focus</dt>
                <dd {...stylex.props(playblastStyles.statusValue)}>Review + studio ops</dd>
              </div>
            </dl>
          </aside>
          <div {...stylex.props(playblastStyles.heroSignal)} aria-hidden="true" />
        </div>
      </header>

      <div {...stylex.props(playblastStyles.pageSections)}>
        <section {...stylex.props(playblastStyles.section, playblastStyles.sectionFirst)} aria-labelledby="screenshots-heading">
          <div {...stylex.props(playblastStyles.sectionHeaderSplit)}>
            <div {...stylex.props(playblastStyles.sectionBlock, playblastStyles.sectionBlockTight)}>
              <h2 id="screenshots-heading" {...stylex.props(playblastStyles.sectionTitle)}>See the workflow.</h2>
              <p {...stylex.props(playblastStyles.sectionIntro)}>Clients, invoices, review, and compare in one walkthrough.</p>
            </div>
          </div>
          <ScreenshotCarousel screenshots={SCREENSHOTS} />
        </section>

        <section {...stylex.props(playblastStyles.section)} aria-labelledby="problem-heading">
          <div {...stylex.props(playblastStyles.sectionBlock)}>
            <h2 id="problem-heading" {...stylex.props(playblastStyles.sectionTitle)}>Review and money should share one project.</h2>
          </div>
          <div {...stylex.props(playblastStyles.sectionBody)}>
            <p>Studios lose time when review lives in one tool and clients, estimates, and invoices live in another. Context frays; handoffs multiply.</p>
            <ul {...stylex.props(playblastStyles.problemList)}>
              <li {...stylex.props(playblastStyles.problemListItem)}>Notes lose their frame and version context.</li>
              <li {...stylex.props(playblastStyles.problemListItem)}>Client and invoice history sits outside the project.</li>
              <li {...stylex.props(playblastStyles.problemListItem)}>Teams rebuild the same story for review and for billing.</li>
            </ul>
          </div>
        </section>

        <section {...stylex.props(playblastStyles.section)} aria-labelledby="loop-heading">
          <div {...stylex.props(playblastStyles.sectionHeaderSplit)}>
            <div {...stylex.props(playblastStyles.sectionBlock, playblastStyles.sectionBlockTight)}>
              <h2 id="loop-heading" {...stylex.props(playblastStyles.sectionTitle)}>How Playblast works.</h2>
            </div>
            <p {...stylex.props(playblastStyles.sectionIntro)}>From upload to approval, feedback stays with the media. Clients and invoices can attach to the same projects.</p>
          </div>
          <ol {...stylex.props(playblastStyles.timeline)}>
            {LOOP_STEPS.map((step, index) => (
              <li key={step.title} {...stylex.props(playblastStyles.timelineItem)}>
                <span {...stylex.props(playblastStyles.timelineMarker)} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <h3 {...stylex.props(playblastStyles.timelineTitle)}>{step.title}</h3>
                <p {...stylex.props(playblastStyles.timelineText)}>{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section {...stylex.props(playblastStyles.section)} aria-labelledby="boundary-heading">
          <div {...stylex.props(playblastStyles.sectionBlock)}>
            <h2 id="boundary-heading" {...stylex.props(playblastStyles.sectionTitle)}>What you get.</h2>
          </div>
          <ul {...stylex.props(playblastStyles.checkList)}>
            {YOU_GET.map((item) => <li key={item} {...stylex.props(playblastStyles.checkListItem)}>{item}</li>)}
          </ul>
        </section>

        <section {...stylex.props(playblastStyles.section)} aria-labelledby="finances-heading">
          <div {...stylex.props(playblastStyles.sectionHeaderSplit)}>
            <div {...stylex.props(playblastStyles.sectionBlock, playblastStyles.sectionBlockTight)}>
              <h2 id="finances-heading" {...stylex.props(playblastStyles.sectionTitle)}>Clients and finances.</h2>
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

        <section {...stylex.props(playblastStyles.section)} aria-labelledby="selfhost-heading">
          <div {...stylex.props(playblastStyles.sectionHeaderSplit)}>
            <div {...stylex.props(playblastStyles.sectionBlock, playblastStyles.sectionBlockTight)}>
              <h2 id="selfhost-heading" {...stylex.props(playblastStyles.sectionTitle)}>Runs on your infrastructure.</h2>
            </div>
            <div {...stylex.props(playblastStyles.sectionBody)}>
              <p>Deploy with Docker on a studio NAS or Linux host. You control media, backups, and access.</p>
              <div {...stylex.props(sharedStyles.ctaGroup, playblastStyles.heroCta)}>
                <ExternalLink href={LINKS.installGuide} {...stylex.props(sharedStyles.btn)}>Read install docs <span aria-hidden="true">↗</span></ExternalLink>
                <ExternalLink href={LINKS.issues} {...stylex.props(sharedStyles.btn, sharedStyles.btnText)}>View public issues <span aria-hidden="true">↗</span></ExternalLink>
              </div>
            </div>
          </div>
        </section>

        <section {...stylex.props(playblastStyles.section)} aria-labelledby="funding-heading">
          <div {...stylex.props(playblastStyles.sectionBlock)}>
            <h2 id="funding-heading" {...stylex.props(playblastStyles.sectionTitle)}>Support development.</h2>
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
