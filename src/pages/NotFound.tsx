import { Link } from 'react-router-dom'
import * as stylex from '@stylexjs/stylex'
import { sharedStyles } from '../styles/shared.stylex'

export function NotFound() {
  return (
    <div {...stylex.props(sharedStyles.page)}>
      <div {...stylex.props(sharedStyles.container)}>
        <header {...stylex.props(sharedStyles.pageHeader, sharedStyles.revealHero)}>
          <div>
            <p {...stylex.props(sharedStyles.pageKicker)}>404 / Missing</p>
            <h1>That page isn&apos;t here.</h1>
          </div>
          <div>
            <p {...stylex.props(sharedStyles.pageIntro)}>The link may be outdated, or the address may be mistyped.</p>
            <div {...stylex.props(sharedStyles.ctaGroup)}>
              <Link to="/" {...stylex.props(sharedStyles.btn, sharedStyles.btnPrimary)}>Return to the index <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}
