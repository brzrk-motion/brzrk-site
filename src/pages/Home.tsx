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
              <p {...stylex.props(homeStyles.heroLede)}>brzrk builds focused software for studios. The public product is Playblast: private review of versions, frames, and approvals on hardware you control.</p>
              <div {...stylex.props(homeStyles.heroActions)}>
                <Link to="/playblast" {...stylex.props(sharedStyles.btn, sharedStyles.btnPrimary)}>View Playblast <span aria-hidden="true">↗</span></Link>
                <Link to="/about" {...stylex.props(sharedStyles.btn, sharedStyles.btnText)}>About brzrk <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section {...stylex.props(homeStyles.homeProduct)} aria-labelledby="product-title">
        <div {...stylex.props(sharedStyles.container)}>
          <header {...stylex.props(sharedStyles.sectionHeading, sharedStyles.sectionHeadingSplit)}>
            <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>01</span> Current product</p>
            <p {...stylex.props(sharedStyles.sectionHeadingNote)}>One product in public view.<br />Status follows evidence, not marketing.</p>
          </header>
          <div {...stylex.props(homeStyles.productFeature)}>
            <div>
              <div {...stylex.props(sharedStyles.statusLine)}><span {...stylex.props(sharedStyles.statusDot)} /> MVP release candidate / self-hosted OSS</div>
              <h2 id="product-title" {...stylex.props(homeStyles.productFeatureTitle)}>Playblast</h2>
              <p {...stylex.props(homeStyles.productFeatureLede)}>Private video review for small studios. Versions, comments, annotations, compare, and approvals stay on infrastructure you control.</p>
              <p {...stylex.props(homeStyles.productFeatureCaveat)}>Core proofing exists. Independent clean-install and adoption checks remain in progress. Not commercially validated. Not hosted. No support package.</p>
              <Link to="/playblast" {...stylex.props(sharedStyles.btn)}>View the product <span aria-hidden="true">→</span></Link>
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
                <span {...stylex.props(sharedStyles.evidenceFrameFigcaptionSpan)}>Timestamped review on the current version.</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section {...stylex.props(homeStyles.principles)} aria-labelledby="principles-title">
        <div {...stylex.props(sharedStyles.container, homeStyles.principlesGrid)}>
          <header>
            <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>02</span> Operating principles</p>
            <h2 id="principles-title" {...stylex.props(homeStyles.principlesTitle)}>Clear product. Honest status.</h2>
          </header>
          <ol {...stylex.props(homeStyles.principleList)}>
            <li {...stylex.props(homeStyles.principleListItem)}>
              <span {...stylex.props(homeStyles.principleListNumber)}>01</span>
              <div>
                <h3 {...stylex.props(homeStyles.principleListTitle)}>Focused scope</h3>
                <p {...stylex.props(homeStyles.principleListBody)}>Ship the review workflow first. Broader studio operations stay out of scope for now.</p>
              </div>
            </li>
            <li {...stylex.props(homeStyles.principleListItem)}>
              <span {...stylex.props(homeStyles.principleListNumber)}>02</span>
              <div>
                <h3 {...stylex.props(homeStyles.principleListTitle)}>Operator respect</h3>
                <p {...stylex.props(homeStyles.principleListBody)}>Design for people who already know production tools, not for a generic SaaS funnel.</p>
              </div>
            </li>
            <li {...stylex.props(homeStyles.principleListItem)}>
              <span {...stylex.props(homeStyles.principleListNumber)}>03</span>
              <div>
                <h3 {...stylex.props(homeStyles.principleListTitle)}>Evidence over claims</h3>
                <p {...stylex.props(homeStyles.principleListBody)}>Call a release candidate what it is. Screens from the working product beat invented proof.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </div>
  )
}
