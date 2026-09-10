import { Link } from 'react-router-dom'
import * as stylex from '@stylexjs/stylex'
import { OceanHero } from '../components/OceanHero'
import { sharedStyles } from '../styles/shared.stylex'
import { homeStyles } from './Home.stylex'

export function Home() {
  return (
    <div {...stylex.props(homeStyles.home)}>
      <section {...stylex.props(homeStyles.hero, sharedStyles.revealHero)} aria-labelledby="home-title">
        <OceanHero />
        <div {...stylex.props(sharedStyles.container, homeStyles.heroGrid)}>
          <div {...stylex.props(homeStyles.heroContent)}>
            <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>00</span> Company index</p>
            <h1 id="home-title" {...stylex.props(homeStyles.heroTitle)}>
              Tools for the work <em {...stylex.props(homeStyles.heroTitleEm)}>behind</em> the work.
            </h1>
            <div {...stylex.props(homeStyles.heroLower)}>
              <p {...stylex.props(homeStyles.heroLede)}>brzrk builds focused software that removes friction from creative and technical workflows.</p>
              <div {...stylex.props(homeStyles.heroActions)}>
                <Link to="/playblast" {...stylex.props(sharedStyles.btn, sharedStyles.btnPrimary)}>View Playblast <span aria-hidden="true">↗</span></Link>
                <Link to="/about" {...stylex.props(sharedStyles.btn, sharedStyles.btnText)}>Company notes <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section {...stylex.props(homeStyles.homeProduct)} aria-labelledby="product-title">
        <div {...stylex.props(sharedStyles.container)}>
          <header {...stylex.props(sharedStyles.sectionHeading, sharedStyles.sectionHeadingSplit)}>
            <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>01</span> Current product</p>
            <p {...stylex.props(sharedStyles.sectionHeadingNote)}>One product in public view.<br />Status shown without inflation.</p>
          </header>
          <div {...stylex.props(homeStyles.productFeature)}>
            <div>
              <div {...stylex.props(sharedStyles.statusLine)}><span {...stylex.props(sharedStyles.statusDot)} /> MVP release candidate / self-hosted OSS</div>
              <h2 id="product-title" {...stylex.props(homeStyles.productFeatureTitle)}>Playblast</h2>
              <p {...stylex.props(homeStyles.productFeatureLede)}>Private video review for small studios that want versions, comments, annotations, compare, and approvals on infrastructure they control.</p>
              <p {...stylex.props(homeStyles.productFeatureCaveat)}>Core proofing exists. Independent clean-install and adoption checks remain in progress. Not hosted. No support package.</p>
              <Link to="/playblast" {...stylex.props(sharedStyles.btn)}>Inspect the workflow <span aria-hidden="true">→</span></Link>
            </div>
            <figure {...stylex.props(sharedStyles.evidenceFrame)}>
              <div {...stylex.props(sharedStyles.evidenceFrameChrome)}><span>PLAYBLAST / REVIEW</span><span>REAL INTERFACE</span></div>
              <img
                {...stylex.props(sharedStyles.evidenceFrameImage)}
                src={`${import.meta.env.BASE_URL}screenshots/review.png`}
                alt="Playblast review player showing a deliverable cut with timestamped comments"
                width="1440"
                height="900"
                loading="lazy"
                decoding="async"
              />
              <figcaption {...stylex.props(sharedStyles.evidenceFrameFigcaption)}>
                <span {...stylex.props(sharedStyles.evidenceFrameFigcaptionSpan)}>Fig. 01</span>
                <span {...stylex.props(sharedStyles.evidenceFrameFigcaptionSpan)}>Timestamped review tied to the cut.</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section {...stylex.props(homeStyles.principles)} aria-labelledby="principles-title">
        <div {...stylex.props(sharedStyles.container, homeStyles.principlesGrid)}>
          <header>
            <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>02</span> Operating principles</p>
            <h2 id="principles-title" {...stylex.props(homeStyles.principlesTitle)}>Less pitch.<br />More proof.</h2>
          </header>
          <ol {...stylex.props(homeStyles.principleList)}>
            <li {...stylex.props(homeStyles.principleListItem)}>
              <span {...stylex.props(homeStyles.principleListNumber)}>01</span>
              <div>
                <h3 {...stylex.props(homeStyles.principleListTitle)}>Focused</h3>
                <p {...stylex.props(homeStyles.principleListBody)}>Build for specific workflow friction rather than category breadth.</p>
              </div>
            </li>
            <li {...stylex.props(homeStyles.principleListItem)}>
              <span {...stylex.props(homeStyles.principleListNumber)}>02</span>
              <div>
                <h3 {...stylex.props(homeStyles.principleListTitle)}>Self-possessed</h3>
                <p {...stylex.props(homeStyles.principleListBody)}>Use design and engineering judgment without borrowing SaaS theater.</p>
              </div>
            </li>
            <li {...stylex.props(homeStyles.principleListItem)}>
              <span {...stylex.props(homeStyles.principleListNumber)}>03</span>
              <div>
                <h3 {...stylex.props(homeStyles.principleListTitle)}>Evidence-led</h3>
                <p {...stylex.props(homeStyles.principleListBody)}>Label readiness honestly and let working interfaces make the case.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </div>
  )
}
