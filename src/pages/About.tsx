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
          <p {...stylex.props(sharedStyles.heroBandChild, sharedStyles.pageIntro)}>brzrk ships software for creative production. Motion craft informs the product — it is not the company category.</p>
        </header>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="judgment-heading">
          <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>01</span> Product judgment</p>
          <h2 id="judgment-heading" {...stylex.props(sharedStyles.sectionTitle)}>Judgment from the suite</h2>
          <div {...stylex.props(sharedStyles.sectionBody)}>
            <p>Years in software, motion, and graphic craft shape how frame notes should feel and where review chains break. That is product input — not a services pitch.</p>
          </div>
        </section>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="principles-heading">
          <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>02</span> Operating position</p>
          <h2 id="principles-heading" {...stylex.props(sharedStyles.sectionTitle)}>Bounded products</h2>
          <div {...stylex.props(sharedStyles.sectionBody)}>
            <p>Independent, design-literate, technically serious, evidence-led. Public focus: Playblast — whether self-hosted OSS proofing earns real studio use without pretending validation is done.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
