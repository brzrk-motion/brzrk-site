import { Link } from 'react-router-dom'
import * as stylex from '@stylexjs/stylex'
import { OceanHero } from '../components/OceanHero'
import { sharedStyles } from '../styles/shared.stylex'

export function NotFound() {
  return (
    <div {...stylex.props(sharedStyles.page)}>
      <div {...stylex.props(sharedStyles.container)}>
        <header {...stylex.props(sharedStyles.fullBleedHero, sharedStyles.revealHero)}>
          <OceanHero />
          <div {...stylex.props(sharedStyles.heroBandChild)}>
            <p {...stylex.props(sharedStyles.pageKicker)}>404 / Missing</p>
            <h1>Wrong reel.</h1>
          </div>
          <div {...stylex.props(sharedStyles.heroBandChild)}>
            <p {...stylex.props(sharedStyles.pageIntro)}>Dead link, mistype, or a page that never shipped.</p>
            <div {...stylex.props(sharedStyles.ctaGroup)}>
              <Link to="/" {...stylex.props(sharedStyles.btn, sharedStyles.btnPrimary)}>Return to the index <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}
