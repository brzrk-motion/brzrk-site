const CONTACT_EMAIL = 'brzrk@brzrk-motion.com'

export function Contact() {
  return (
    <div className="page">
      <div className="container">
        <header className="page__header reveal-hero">
          <div><p className="page__kicker">04 / Contact</p><h1>Start with context.</h1></div>
          <p className="page__intro">Reach out about Playblast for your studio, product feedback, or other brzrk work. No SaaS pitch and no implied support package.</p>
        </header>

        <section className="section" aria-labelledby="contact-form-heading">
          <p className="index-label"><span>01</span> Email draft</p>
          <h2 id="contact-form-heading" className="section__title">What are you working through?</h2>
          <form
            className="contact-form"
            onSubmit={(event) => {
              event.preventDefault()
              const data = new FormData(event.currentTarget)
              const subject = `${data.get('topic') || 'General'} — brzrk site`
              const body = [`Name: ${data.get('name') || ''}`, `Email: ${data.get('email') || ''}`, '', String(data.get('message') || '')].join('\n')
              window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
            }}
          >
            <div className="contact-form__field">
              <label className="contact-form__label" htmlFor="contact-name">Name <span className="contact-form__required">(required)</span></label>
              <input id="contact-name" name="name" type="text" required autoComplete="name" />
            </div>
            <div className="contact-form__field">
              <label className="contact-form__label" htmlFor="contact-email">Email <span className="contact-form__required">(required)</span></label>
              <input id="contact-email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="contact-form__field">
              <label className="contact-form__label" htmlFor="contact-topic">Topic <span className="contact-form__required">(required)</span></label>
              <select id="contact-topic" name="topic" required defaultValue="">
                <option value="" disabled>Select a reason</option>
                <option value="Playblast studio interest">Playblast studio interest</option>
                <option value="Product feedback">Product feedback</option>
                <option value="General">General</option>
              </select>
            </div>
            <div className="contact-form__field">
              <label className="contact-form__label" htmlFor="contact-message">Message <span className="contact-form__required">(required)</span></label>
              <textarea id="contact-message" name="message" rows={6} required />
            </div>
            <button type="submit" className="btn btn--primary">Open email draft <span aria-hidden="true">↗</span></button>
          </form>
          <p className="external-note">Submitting opens a draft in your default email app. No form data is sent to a brzrk server.</p>
        </section>

        <section className="section" aria-labelledby="technical-heading">
          <p className="index-label"><span>02</span> Technical issues</p>
          <h2 id="technical-heading" className="section__title">Keep the issue public.</h2>
          <div className="section__body"><p>For reproducible Playblast problems, use the <a href="https://github.com/brzrk-motion/Playblast/issues" target="_blank" rel="noopener noreferrer">GitHub issue tracker</a>. brzrk does not offer a paid support package at this stage.</p></div>
        </section>
      </div>
    </div>
  )
}
