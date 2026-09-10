import * as stylex from '@stylexjs/stylex'
import { OceanHero } from '../components/OceanHero'
import { sharedStyles } from '../styles/shared.stylex'
import { contactStyles } from './Contact.stylex'

const CONTACT_EMAIL = 'brzrk@brzrk-motion.com'

export function Contact() {
  return (
    <div {...stylex.props(sharedStyles.page)}>
      <div {...stylex.props(sharedStyles.container)}>
        <header {...stylex.props(sharedStyles.fullBleedHero, sharedStyles.revealHero)}>
          <OceanHero />
          <div {...stylex.props(sharedStyles.heroBandChild)}>
            <p {...stylex.props(sharedStyles.pageKicker)}>04 / Contact</p>
            <h1>Get in touch.</h1>
          </div>
          <p {...stylex.props(sharedStyles.heroBandChild, sharedStyles.pageIntro)}>Email about Playblast for your studio, product feedback, or other brzrk work. No sales pitch. No support package implied.</p>
        </header>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="contact-form-heading">
          <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>01</span> Email draft</p>
          <h2 id="contact-form-heading" {...stylex.props(sharedStyles.sectionTitle)}>How can we help?</h2>
          <form
            {...stylex.props(contactStyles.form)}
            onSubmit={(event) => {
              event.preventDefault()
              const data = new FormData(event.currentTarget)
              const subject = `${data.get('topic') || 'General'} | brzrk site`
              const body = [`Name: ${data.get('name') || ''}`, `Email: ${data.get('email') || ''}`, '', String(data.get('message') || '')].join('\n')
              window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
            }}
          >
            <div {...stylex.props(contactStyles.field)}>
              <label {...stylex.props(contactStyles.label)} htmlFor="contact-name">Name <span {...stylex.props(contactStyles.required)}>(required)</span></label>
              <input id="contact-name" name="name" type="text" required autoComplete="name" {...stylex.props(contactStyles.input)} />
            </div>
            <div {...stylex.props(contactStyles.field)}>
              <label {...stylex.props(contactStyles.label)} htmlFor="contact-email">Email <span {...stylex.props(contactStyles.required)}>(required)</span></label>
              <input id="contact-email" name="email" type="email" required autoComplete="email" {...stylex.props(contactStyles.input)} />
            </div>
            <div {...stylex.props(contactStyles.field)}>
              <label {...stylex.props(contactStyles.label)} htmlFor="contact-topic">Topic <span {...stylex.props(contactStyles.required)}>(required)</span></label>
              <select id="contact-topic" name="topic" required defaultValue="" {...stylex.props(contactStyles.input)}>
                <option value="" disabled>Select a reason</option>
                <option value="Playblast studio interest">Playblast studio interest</option>
                <option value="Product feedback">Product feedback</option>
                <option value="General">General</option>
              </select>
            </div>
            <div {...stylex.props(contactStyles.field)}>
              <label {...stylex.props(contactStyles.label)} htmlFor="contact-message">Message <span {...stylex.props(contactStyles.required)}>(required)</span></label>
              <textarea id="contact-message" name="message" rows={6} required {...stylex.props(contactStyles.input, contactStyles.textarea)} />
            </div>
            <button type="submit" {...stylex.props(sharedStyles.btn, sharedStyles.btnPrimary, contactStyles.submit)}>Open email draft <span aria-hidden="true">↗</span></button>
          </form>
          <p {...stylex.props(sharedStyles.externalNote)}>Submitting opens a draft in your default email app. No form data is sent to a brzrk server.</p>
        </section>

        <section {...stylex.props(sharedStyles.section)} aria-labelledby="technical-heading">
          <p {...stylex.props(sharedStyles.indexLabel)}><span {...stylex.props(sharedStyles.indexLabelSpan)}>02</span> Technical issues</p>
          <h2 id="technical-heading" {...stylex.props(sharedStyles.sectionTitle)}>Prefer public issues.</h2>
          <div {...stylex.props(sharedStyles.sectionBody)}>
            <p>For reproducible Playblast problems, use the <a href="https://github.com/brzrk-motion/Playblast/issues" target="_blank" rel="noopener noreferrer">GitHub issue tracker</a>. brzrk does not offer a paid support package at this stage.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
