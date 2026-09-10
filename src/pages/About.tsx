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
            <p {...stylex.props(sharedStyles.pageKicker)}>03 / Company notes</p>
            <h1>Independent by design.</h1>
          </div>
          <p {...stylex.props(sharedStyles.heroBandChild, sharedStyles.pageIntro)}>brzrk ships software for creative production. Motion and design craft inform product judgment. They are not the company category.</p>
        </header>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="judgment-heading">
          <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>01</span> Product judgment</p>
          <h2 id="judgment-heading" {...stylex.props(sharedStyles.sectionTitle)}>Product judgment</h2>
          <div {...stylex.props(sharedStyles.sectionBody)}>
            <p>Experience in software, motion, and graphic craft shapes how review tools should feel and where feedback chains fail. That informs the product. It is not a services offering.</p>
          </div>
        </section>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="principles-heading">
          <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>02</span> Operating position</p>
          <h2 id="principles-heading" {...stylex.props(sharedStyles.sectionTitle)}>Focused products</h2>
          <div {...stylex.props(sharedStyles.sectionBody)}>
            <p>Independent, design-literate, technically serious, and evidence-led. Public focus: Playblast, and whether self-hosted open-source proofing earns real studio use without claiming commercial validation.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
