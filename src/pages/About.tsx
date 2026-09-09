export function About() {
  return (
    <div className="page">
      <div className="container">
        <header className="page__header reveal-hero">
          <div><p className="page__kicker">03 / Company notes</p><h1>Independent by design.</h1></div>
          <p className="page__intro">brzrk is a product company informed by creative practice—not a motion-graphics studio with a software side project.</p>
        </header>

        <section className="section" aria-labelledby="judgment-heading">
          <p className="index-label"><span>01</span> Product judgment</p>
          <h2 id="judgment-heading" className="section__title">Craft is context.</h2>
          <div className="section__body">
            <p>brzrk is founded and led by someone with software-development, motion-design, and graphic-craft experience. That perspective informs how feedback should feel, how dense interfaces should breathe, and where creative workflows actually break.</p>
            <p>It informs the work without turning the company into a services studio or a founder-personality brand.</p>
          </div>
        </section>

        <section className="section" aria-labelledby="principles-heading">
          <p className="index-label"><span>02</span> Operating position</p>
          <h2 id="principles-heading" className="section__title">Specific over expansive.</h2>
          <div className="section__body">
            <p>brzrk is <strong>independent</strong>, <strong>design-literate</strong>, <strong>technically serious</strong>, and <strong>evidence-led</strong>. Products address bounded workflow friction and carry honest status labels.</p>
            <p>The current public focus is Playblast: testing whether a self-hosted, open-source proofing tool earns adoption in real studio environments without pretending that validation is complete.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
