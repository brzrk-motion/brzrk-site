import { useEffect, useRef, useState } from 'react'
import * as stylex from '@stylexjs/stylex'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { OceanHero } from '../components/OceanHero'
import { sharedStyles } from '../styles/shared.stylex'
import { contactStyles } from './Contact.stylex'

const CONTACT_EMAIL = 'brzrk@brzrk-motion.com'
const TOPICS = [
  {
    value: 'Playblast studio interest',
    label: 'Evaluating Playblast',
    detail: 'Questions about the workflow, self-hosting, or fit for a small studio.',
  },
  {
    value: 'Product feedback',
    label: 'Product feedback',
    detail: 'Share what worked, what did not, or what needs clearer consideration.',
  },
  {
    value: 'General',
    label: 'General enquiry',
    detail: 'For other brzrk work that does not belong in the issue tracker.',
  },
]

gsap.registerPlugin(ScrollTrigger)

export function Contact() {
  const [topic, setTopic] = useState(TOPICS[0].value)
  const composeRef = useRef<HTMLElement>(null)
  const composeHeadingRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const compose = composeRef.current
    const composeHeading = composeHeadingRef.current
    const form = formRef.current
    if (!compose || !composeHeading || !form || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const context = gsap.context(() => {
      gsap.fromTo(composeHeading,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          delay: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: compose,
            start: 'top 84%',
            once: true,
          },
        },
      )

      gsap.fromTo(form,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.2,
          delay: 0.78,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: compose,
            start: 'top 84%',
            once: true,
          },
        },
      )
    }, compose)

    return () => context.revert()
  }, [])

  return (
      <div {...stylex.props(contactStyles.page)}>
      <header {...stylex.props(contactStyles.intro)}>
        <OceanHero />
        <div {...stylex.props(sharedStyles.container, contactStyles.introGrid)}>
          <div>
            <h1 {...stylex.props(contactStyles.title)}><span {...stylex.props(contactStyles.titleLine)}>Send the context.</span>Keep the handoff simple.</h1>
            <p {...stylex.props(contactStyles.lede)}>Questions about Playblast, product feedback, or other brzrk work can start here.</p>
          </div>
          <aside {...stylex.props(contactStyles.direct)} aria-labelledby="direct-heading">
            <h2 id="direct-heading" {...stylex.props(contactStyles.directTitle)}>Prefer plain email?</h2>
            <a href={`mailto:${CONTACT_EMAIL}`} {...stylex.props(contactStyles.emailLink)}>{CONTACT_EMAIL}</a>
            <p {...stylex.props(contactStyles.directNote)}>The form below prepares a draft to this address. Nothing is submitted through the site.</p>
          </aside>
        </div>
      </header>

      <section ref={composeRef} {...stylex.props(contactStyles.compose)} aria-labelledby="contact-form-heading">
        <div {...stylex.props(sharedStyles.container)}>
          <div ref={composeHeadingRef} {...stylex.props(contactStyles.composeHeading)}>
            <h2 id="contact-form-heading" {...stylex.props(contactStyles.composeTitle)}>Draft the message.</h2>
            <p {...stylex.props(contactStyles.composeIntro)}>Choose the closest route, add the useful context, then continue in your default email app.</p>
          </div>
          <form
            ref={formRef}
            {...stylex.props(contactStyles.form)}
            aria-describedby="contact-privacy-note"
            onSubmit={(event) => {
              event.preventDefault()
              const data = new FormData(event.currentTarget)
              const subject = `${data.get('topic') || 'General'} | brzrk site`
              const body = [`Name: ${data.get('name') || ''}`, `Email: ${data.get('email') || ''}`, '', String(data.get('message') || '')].join('\n')
              window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
            }}
          >
            <div {...stylex.props(contactStyles.formSignal)} aria-hidden="true" />
            <fieldset {...stylex.props(contactStyles.routes)}>
              <legend {...stylex.props(contactStyles.legend)}>Choose a route <span {...stylex.props(contactStyles.required)}>(required)</span></legend>
              <div {...stylex.props(contactStyles.routeGrid)}>
                {TOPICS.map((item, index) => (
                  <label key={item.value} {...stylex.props(contactStyles.route, topic === item.value && contactStyles.routeActive)}>
                    <span {...stylex.props(contactStyles.routeTopline)}>
                      <input
                        name="topic"
                        type="radio"
                        value={item.value}
                        required
                        checked={topic === item.value}
                        onChange={() => setTopic(item.value)}
                        {...stylex.props(contactStyles.radio)}
                      />
                      <span {...stylex.props(contactStyles.routeNumber)}>{String(index + 1).padStart(2, '0')}</span>
                    </span>
                    <span {...stylex.props(contactStyles.routeTitle)}>{item.label}</span>
                    <span {...stylex.props(contactStyles.routeDetail)}>{item.detail}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div {...stylex.props(contactStyles.identityGrid)}>
              <div {...stylex.props(contactStyles.field)}>
                <label {...stylex.props(contactStyles.label)} htmlFor="contact-name">Name <span {...stylex.props(contactStyles.required)}>(required)</span></label>
                <input id="contact-name" name="name" type="text" required autoComplete="name" {...stylex.props(contactStyles.input)} />
              </div>
              <div {...stylex.props(contactStyles.field)}>
                <label {...stylex.props(contactStyles.label)} htmlFor="contact-email">Email <span {...stylex.props(contactStyles.required)}>(required)</span></label>
                <input id="contact-email" name="email" type="email" required autoComplete="email" {...stylex.props(contactStyles.input)} />
              </div>
            </div>
            <div {...stylex.props(contactStyles.field, contactStyles.messageField)}>
              <label {...stylex.props(contactStyles.label)} htmlFor="contact-message">Useful context <span {...stylex.props(contactStyles.required)}>(required)</span></label>
              <textarea id="contact-message" name="message" rows={7} required placeholder="What are you evaluating, trying, or reporting?" {...stylex.props(contactStyles.input, contactStyles.textarea)} />
            </div>
            <div {...stylex.props(contactStyles.formFooter)}>
              <p id="contact-privacy-note" {...stylex.props(contactStyles.privacyNote)}>This opens a draft in your default email app. No form data is sent to a brzrk server.</p>
              <button type="submit" {...stylex.props(sharedStyles.btn, sharedStyles.btnPrimary, contactStyles.submit)}>Create Draft</button>
            </div>
          </form>
        </div>
      </section>

      <section {...stylex.props(contactStyles.technical)} aria-labelledby="technical-heading">
        <div {...stylex.props(sharedStyles.container, contactStyles.technicalGrid)}>
          <h2 id="technical-heading" {...stylex.props(contactStyles.technicalTitle)}>Found a reproducible bug?</h2>
          <div {...stylex.props(contactStyles.technicalBody)}>
            <p>Use the public Playblast issue tracker so technical details can stay with the report.</p>
            <a href="https://github.com/brzrk-motion/Playblast/issues" target="_blank" rel="noopener noreferrer" {...stylex.props(sharedStyles.btn, contactStyles.technicalLink)}>Open the issue tracker</a>
          </div>
        </div>
      </section>
    </div>
  )
}
