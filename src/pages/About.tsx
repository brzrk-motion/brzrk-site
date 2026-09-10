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
          <p {...stylex.props(sharedStyles.heroBandChild, sharedStyles.pageIntro)}>brzrk is a product company informed by creative practice—not a motion-graphics studio with a software side project.</p>
        </header>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="judgment-heading">
          <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>01</span> Product judgment</p>
          <h2 id="judgment-heading" {...stylex.props(sharedStyles.sectionTitle)}>Craft is context.</h2>
          <div {...stylex.props(sharedStyles.sectionBody)}>
            <p>brzrk is founded and led by someone with software-development, motion-design, and graphic-craft experience. That perspective informs how feedback should feel, how dense interfaces should breathe, and where creative workflows actually break.</p>
            <p {...stylex.props(sharedStyles.sectionBodyParagraph)}>It informs the work without turning the company into a services studio or a founder-personality brand.</p>
          </div>
        </section>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="principles-heading">
          <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>02</span> Operating position</p>
          <h2 id="principles-heading" {...stylex.props(sharedStyles.sectionTitle)}>Specific over expansive.</h2>
          <div {...stylex.props(sharedStyles.sectionBody)}>
            <p>brzrk is <strong>independent</strong>, <strong>design-literate</strong>, <strong>technically serious</strong>, and <strong>evidence-led</strong>. Products address bounded workflow friction and carry honest status labels.</p>
            <p {...stylex.props(sharedStyles.sectionBodyParagraph)}>The current public focus is Playblast: testing whether a self-hosted, open-source proofing tool earns adoption in real studio environments without pretending that validation is complete.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
