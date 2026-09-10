import * as stylex from '@stylexjs/stylex'
import { OceanHero } from '../components/OceanHero'
import { sharedStyles } from '../styles/shared.stylex'

export function About() {
  return (
    <div {...stylex.props(sharedStyles.page)}>
      <div {...stylex.props(sharedStyles.container)}>
        <header {...stylex.props(sharedStyles.fullBleedHero, sharedStyles.revealHero)}>
          <OceanHero />
          <div {...stylex.props(sharedStyles.heroBandChild)}>
            <p {...stylex.props(sharedStyles.pageKicker)}>03 / About</p>
            <h1>Independent by design.</h1>
          </div>
          <p {...stylex.props(sharedStyles.heroBandChild, sharedStyles.pageIntro)}>brzrk is an independent product company. We build software for creative and technical teams, starting with Playblast.</p>
        </header>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="background-heading">
          <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>01</span> Background</p>
          <h2 id="background-heading" {...stylex.props(sharedStyles.sectionTitle)}>Our background</h2>
          <div {...stylex.props(sharedStyles.sectionBody)}>
            <p>The founding team brings software, motion, and graphic craft experience. That shapes how review tools should feel in real production.</p>
          </div>
        </section>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="building-heading">
          <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>02</span> Direction</p>
          <h2 id="building-heading" {...stylex.props(sharedStyles.sectionTitle)}>What we are building</h2>
          <div {...stylex.props(sharedStyles.sectionBody)}>
            <p>Public focus is Playblast: private video review for studios. More products will follow when they earn a place.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
