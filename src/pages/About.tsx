export function About() {
  return (
    <div className="page">
      <div className="container container--narrow">
        <header className="page__header">
          <h1>About brzrk</h1>
          <p className="page__intro">
            An independent product company — not a motion-graphics studio with
            a software side project.
          </p>
        </header>

        <section className="section">
          <div className="section__body">
            <p>
              brzrk is founded and led by someone with a motion-design and
              graphic-craft background. That experience informs product judgment
              — how feedback should feel, how dense interfaces should breathe,
              how creative workflows actually break — but it is not the
              company&apos;s public identity.
            </p>
            <p>
              brzrk is <strong>independent</strong>, <strong>design-literate</strong>,{' '}
              <strong>technically serious</strong>, and <strong>evidence-led</strong>.
              Products ship when they solve real workflow friction, with honest
              status labels and no inflated adoption claims.
            </p>
            <p>
              The current focus is Playblast: proving that a self-hosted,
              open-source proofing tool can earn adoption in real studio
              environments — without pretending the path is already complete.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
