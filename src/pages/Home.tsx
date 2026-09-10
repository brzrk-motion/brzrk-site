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
            <p {...stylex.props(homeStyles.heroLede)}>brzrk builds software for creative production. Today that means Playblast: private video review, clients, and invoices for studios that want review and studio ops in one place.</p>
            <div {...stylex.props(homeStyles.heroActions)}>
              <Link to="/playblast" {...stylex.props(sharedStyles.btn, sharedStyles.btnPrimary)}>View Playblast <span aria-hidden="true">↗</span></Link>
              <Link to="/about" {...stylex.props(sharedStyles.btn, sharedStyles.btnText)}>About brzrk <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section {...stylex.props(homeStyles.homeProduct)} aria-labelledby="product-title">
        <div {...stylex.props(sharedStyles.container)}>
          <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>01</span> Product</p>
          <div {...stylex.props(homeStyles.productFeature)}>
            <div>
              <h2 id="product-title" {...stylex.props(homeStyles.productFeatureTitle)}>Playblast</h2>
              <p {...stylex.props(homeStyles.productFeatureLede)}>Private video review for small studios, plus clients and invoices. Keep versions, feedback, and studio finances with the same projects.</p>
              <Link to="/playblast" {...stylex.props(sharedStyles.btn)}>Explore Playblast <span aria-hidden="true">→</span></Link>
            </div>
            <figure {...stylex.props(sharedStyles.evidenceFrame)}>
              <div {...stylex.props(sharedStyles.evidenceFrameChrome)}><span>PLAYBLAST / REVIEW</span></div>
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
                <span {...stylex.props(sharedStyles.evidenceFrameFigcaptionSpan)}>Timestamped review on the current version.</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  )
}
