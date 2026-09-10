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
              <p {...stylex.props(homeStyles.heroLede)}>brzrk builds tools studios actually run — starting with private review of versions, frames, and approvals on your own hardware.</p>
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
            <p {...stylex.props(sharedStyles.sectionHeadingNote)}>One product in public view.<br />Status follows evidence, not the pitch.</p>
          </header>
          <div {...stylex.props(homeStyles.productFeature)}>
            <div>
              <div {...stylex.props(sharedStyles.statusLine)}><span {...stylex.props(sharedStyles.statusDot)} /> MVP release candidate / self-hosted OSS</div>
              <h2 id="product-title" {...stylex.props(homeStyles.productFeatureTitle)}>Playblast</h2>
              <p {...stylex.props(homeStyles.productFeatureLede)}>Private video review for small studios that want versions, comments, annotations, compare, and approvals on infrastructure they control.</p>
              <p {...stylex.props(homeStyles.productFeatureCaveat)}>Core proofing exists. Independent clean-install and adoption checks remain in progress. Not hosted. No support package.</p>
              <Link to="/playblast" {...stylex.props(sharedStyles.btn)}>See the review loop <span aria-hidden="true">→</span></Link>
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
            <h2 id="principles-title" {...stylex.props(homeStyles.principlesTitle)}>Show the cut. Skip the theater.</h2>
          </header>
          <ol {...stylex.props(homeStyles.principleList)}>
            <li {...stylex.props(homeStyles.principleListItem)}>
              <span {...stylex.props(homeStyles.principleListNumber)}>01</span>
              <div>
                <h3 {...stylex.props(homeStyles.principleListTitle)}>One job</h3>
                <p {...stylex.props(homeStyles.principleListBody)}>Ship the painful review loop first. CRM and studio-OS breadth wait.</p>
              </div>
            </li>
            <li {...stylex.props(homeStyles.principleListItem)}>
              <span {...stylex.props(homeStyles.principleListNumber)}>02</span>
              <div>
                <h3 {...stylex.props(homeStyles.principleListTitle)}>No SaaS costume</h3>
                <p {...stylex.props(homeStyles.principleListBody)}>Design for people who already know a timeline — not a landing-page funnel.</p>
              </div>
            </li>
            <li {...stylex.props(homeStyles.principleListItem)}>
              <span {...stylex.props(homeStyles.principleListNumber)}>03</span>
              <div>
                <h3 {...stylex.props(homeStyles.principleListTitle)}>Label it straight</h3>
                <p {...stylex.props(homeStyles.principleListBody)}>Call RC what it is. Screens from the real app beat invented proof.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </div>
  )
}
