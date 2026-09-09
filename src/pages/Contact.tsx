const CONTACT_EMAIL = 'brzrk@brzrk-motion.com'

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

        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault()
            const form = event.currentTarget
            const data = new FormData(form)
            const subject = `${data.get('topic') || 'General'} — brzrk site`
            const body = [
              `Name: ${data.get('name') || ''}`,
              `Email: ${data.get('email') || ''}`,
              '',
              String(data.get('message') || ''),
            ].join('\n')
            window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
          }}
        >
          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="contact-name">
              Name <span className="contact-form__required">(required)</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
            />
          </div>

          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="contact-email">
              Email <span className="contact-form__required">(required)</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
          </div>

          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="contact-topic">
              Topic
            </label>
            <select id="contact-topic" name="topic" required defaultValue="">
              <option value="" disabled>
                Select a reason
              </option>
              <option value="Playblast studio interest">
                Playblast studio interest
              </option>
              <option value="Product feedback">Product feedback</option>
              <option value="General">General</option>
            </select>
          </div>

          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="contact-message">
              Message <span className="contact-form__required">(required)</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={6}
              required
            />
          </div>

          <button type="submit" className="btn btn--primary">
            Open email draft
          </button>
        </form>

        <p className="external-note">
          Submitting opens a draft in your default email app; no form data is
          sent to a brzrk server.
        </p>

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
