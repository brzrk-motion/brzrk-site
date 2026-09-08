const GITHUB_REPO = 'https://github.com/brzrk-motion/Playblast'
const INSTALL_DOCS =
  'https://brzrk-motion.github.io/Playblast/deployment/install-linux-nas'
const SPONSORS =
  'https://github.com/brzrk-motion/Playblast/blob/development-mvp/SPONSORS.md'
const MARKETING_LP = 'https://brzrk-motion.github.io/playblast-lp/'

const painPoints = [
  'Version sprawl across review rounds',
  'Timestamped feedback scattered in chat and email',
  'Annotations that don\u2019t survive a round-trip',
  'Side-by-side comparison without a dedicated tool',
  'Approval chains with no single source of truth',
  'Media that must stay on studio infrastructure',
]

export function Playblast() {
  return (
    <div className="page">
      <div className="container">
        <header className="page__header">
          <h1>Playblast</h1>
          <p className="page__intro">
            Self-hosted video proofing for studios that review work in-house —
            not in someone else&apos;s cloud.
          </p>
        </header>

        <section className="section">
          <h2 className="section__title">The workflow problem</h2>
          <div className="section__body">
            <p>
              Private review is still painful: versions pile up, feedback lives
              in threads, annotations get lost, and comparison means juggling
              players. Studios that can&apos;t ship media to a SaaS need a tool
              that runs on their own infrastructure.
            </p>
            <ul className="problem-list">
              {painPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">What Playblast offers</h2>
          <div className="section__body">
            <p>
              Playblast is <strong>free, open-source, and self-hosted</strong>.
              brzrk does not host it and does not provide a support package in
              the initial release. You run it on your own servers or NAS.
            </p>
            <p>
              Optional donations and sponsorships help fund maintenance — funding
              does <em>not</em> purchase support, an SLA, or roadmap control.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">Explore</h2>
          <div className="cta-group">
            <a
              href={GITHUB_REPO}
              className="btn btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore on GitHub
            </a>
            <a
              href={INSTALL_DOCS}
              className="btn btn--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read install docs
            </a>
            <a
              href={SPONSORS}
              className="btn btn--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sponsor / donate
            </a>
          </div>
          <p className="external-note">
            Install docs are published on the{' '}
            <a href={INSTALL_DOCS} target="_blank" rel="noopener noreferrer">
              Playblast docs site
            </a>
            . Marketing overview:{' '}
            <a href={MARKETING_LP} target="_blank" rel="noopener noreferrer">
              playblast-lp
            </a>
            .
          </p>

          <div className="honesty-block" style={{ marginTop: 'var(--space-xl)' }}>
            <div className="honesty-block__label">Status</div>
            <p>
              Self-hosted MVP release candidate. Core workflow exists;
              independent clean-install, Docker/NAS, and adoption checks are
              still in progress. Not commercially validated. Free,
              open-source, self-hosted. No hosted service. No support package
              from brzrk.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
