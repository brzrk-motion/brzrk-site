const CONTACT_EMAIL = 'hello@brzrk.dev'

export function Contact() {
  return (
    <div className="page">
      <div className="container container--narrow">
        <header className="page__header">
          <h1>Contact</h1>
          <p className="page__intro">
            Reach out if you&apos;re interested in Playblast for your studio,
            have product feedback, or want to connect on something else brzrk is
            building. No SaaS pitch, no support promises.
          </p>
        </header>

        <ul className="contact-list">
          <li>
            <span className="contact-list__label">
              Playblast studio interest
            </span>
            <a href={`mailto:${CONTACT_EMAIL}?subject=Playblast%20studio%20interest`}>
              {CONTACT_EMAIL}
            </a>
          </li>
          <li>
            <span className="contact-list__label">Product feedback</span>
            <a href={`mailto:${CONTACT_EMAIL}?subject=Product%20feedback`}>
              {CONTACT_EMAIL}
            </a>
          </li>
          <li>
            <span className="contact-list__label">General</span>
            <a href={`mailto:${CONTACT_EMAIL}?subject=General%20inquiry`}>
              {CONTACT_EMAIL}
            </a>
          </li>
        </ul>

        <p className="external-note" style={{ marginTop: 'var(--space-xl)' }}>
          For Playblast technical issues, use the{' '}
          <a
            href="https://github.com/brzrk-motion/Playblast/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub issue tracker
          </a>
          . brzrk does not offer a paid support package at this stage.
        </p>
      </div>
    </div>
  )
}
