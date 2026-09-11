import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import * as stylex from '@stylexjs/stylex'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { OceanHero } from '../components/OceanHero'
import { sharedStyles } from '../styles/shared.stylex'
import { aboutStyles } from './About.stylex'

const LAYERS = [
  {
    title: 'Start with the whole job.',
    body: 'Creative production moves through versions, feedback, clients, estimates, and invoices. Product decisions start with that connected reality, not an isolated feature list.',
  },
  {
    title: 'Cut until the tool is focused.',
    body: 'A product earns its place by solving a coherent job. The public focus stays on Playblast; anything else can wait until it has a reason to exist.',
  },
  {
    title: 'State the boundary.',
    body: 'Release maturity, self-hosting, and support limits are named plainly. Independence matters most when it keeps the product and the communication honest.',
  },
  {
    title: 'Put the judgment to work.',
    body: 'Today, the result is Playblast: one focused product connecting private review, client context, and invoices in a self-hosted workflow.',
  },
]

const COMMITMENTS = [
  { term: 'Focus', detail: 'One public product, developed with a clear scope.' },
  { term: 'Control', detail: 'Playblast runs on infrastructure its users control.' },
  { term: 'Candor', detail: 'Maturity and support boundaries stay visible.' },
]

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const layersRef = useRef<HTMLOListElement>(null)
  const commitmentsRef = useRef<HTMLDListElement>(null)

  useEffect(() => {
    const layers = layersRef.current
    const commitments = commitmentsRef.current
    if (!layers || !commitments || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const context = gsap.context(() => {
      Array.from(layers.children).forEach((layer) => {
        gsap.fromTo(layer,
          { opacity: 0, x: -72 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            delay: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: layer,
              start: 'top 84%',
              once: true,
            },
          },
        )
      })

      gsap.fromTo(Array.from(commitments.children),
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.65,
          delay: 0.08,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: commitments,
            start: 'top 84%',
            once: true,
          },
        },
      )
    }, layers)

    return () => context.revert()
  }, [])

  return (
    <div {...stylex.props(aboutStyles.page)}>
      <header {...stylex.props(aboutStyles.hero)}>
        <OceanHero />
        <div {...stylex.props(sharedStyles.container, aboutStyles.heroInner)}>
          <div {...stylex.props(aboutStyles.heroStatement)}>
            <h1 {...stylex.props(aboutStyles.heroTitle)}>Built from the <span {...stylex.props(aboutStyles.heroTitleSignal)}>work</span>, not around it.</h1>
            <p {...stylex.props(aboutStyles.heroLede)}>brzrk exists to turn experience across software, motion, and graphic craft into focused tools for creative production.</p>
            <p {...stylex.props(aboutStyles.heroThesis)}>Start with the real workflow. Keep the scope honest. Let working software earn what comes next.</p>
          </div>
          <aside {...stylex.props(aboutStyles.position)} aria-label="Company position">
            <p {...stylex.props(aboutStyles.positionLabel)}>brzrk / position</p>
            <dl {...stylex.props(aboutStyles.positionList)}>
              <div {...stylex.props(aboutStyles.positionRow)}>
                <dt {...stylex.props(aboutStyles.positionTerm)}>Company</dt>
                <dd {...stylex.props(aboutStyles.positionDetail)}>Independent product company</dd>
              </div>
              <div {...stylex.props(aboutStyles.positionRow)}>
                <dt {...stylex.props(aboutStyles.positionTerm)}>Current focus</dt>
                <dd {...stylex.props(aboutStyles.positionDetail)}>Playblast</dd>
              </div>
              <div {...stylex.props(aboutStyles.positionRow)}>
                <dt {...stylex.props(aboutStyles.positionTerm)}>Public stage</dt>
                <dd {...stylex.props(aboutStyles.positionDetail)}>MVP release candidate</dd>
              </div>
            </dl>
          </aside>
          <div {...stylex.props(aboutStyles.heroRule)} aria-hidden="true" />
        </div>
      </header>

      <section {...stylex.props(aboutStyles.method)} aria-labelledby="method-heading">
        <div {...stylex.props(sharedStyles.container)}>
          <div {...stylex.props(aboutStyles.sectionLead)}>
            <h2 id="method-heading" {...stylex.props(aboutStyles.sectionTitle)}>Experience becomes product judgment.</h2>
            <p {...stylex.props(aboutStyles.sectionIntro)}>The company is not organized around a catalogue of ideas. It is a way of turning production knowledge into smaller, sharper software.</p>
          </div>
          <ol ref={layersRef} {...stylex.props(aboutStyles.layers)}>
            {LAYERS.map((layer, index) => (
              <li
                key={layer.title}
                {...stylex.props(
                  aboutStyles.layer,
                  index === 0 && aboutStyles.layerOne,
                  index === 1 && aboutStyles.layerTwo,
                  index === 2 && aboutStyles.layerThree,
                  index === 3 && aboutStyles.layerFour,
                )}
              >
                <span {...stylex.props(aboutStyles.layerNumber)} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <h3 {...stylex.props(aboutStyles.layerTitle)}>{layer.title}</h3>
                <p {...stylex.props(aboutStyles.layerBody)}>{layer.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section {...stylex.props(aboutStyles.background)} aria-labelledby="background-heading">
        <div {...stylex.props(sharedStyles.container, aboutStyles.backgroundGrid)}>
          <h2 id="background-heading" {...stylex.props(aboutStyles.backgroundTitle)}>Craft sits on both sides of the interface.</h2>
          <div {...stylex.props(aboutStyles.backgroundCopy)}>
            <p {...stylex.props(aboutStyles.backgroundParagraph)}>The founder brings experience in software, motion, and graphic craft. That mix shapes how tools should feel in real production: direct enough for daily work and considered enough to stay out of the way.</p>
            <p {...stylex.props(aboutStyles.backgroundParagraph)}>brzrk is a product company, not a motion studio. The craft background is here to sharpen product judgment.</p>
          </div>
          <dl ref={commitmentsRef} {...stylex.props(aboutStyles.commitments)}>
            {COMMITMENTS.map(({ term, detail }) => (
              <div key={term} {...stylex.props(aboutStyles.commitment)}>
                <dt {...stylex.props(aboutStyles.commitmentTerm)}>{term}</dt>
                <dd {...stylex.props(aboutStyles.commitmentDetail)}>{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section {...stylex.props(aboutStyles.current)} aria-labelledby="current-heading">
        <div {...stylex.props(sharedStyles.container, aboutStyles.currentGrid)}>
          <div>
            <h2 id="current-heading" {...stylex.props(aboutStyles.currentTitle)}>Today, that work is Playblast.</h2>
            <div {...stylex.props(aboutStyles.currentStatus)}><span {...stylex.props(aboutStyles.statusMark)} aria-hidden="true" />Current output</div>
          </div>
          <div {...stylex.props(aboutStyles.currentBody)}>
            <p>Playblast brings private video review, clients, and invoices into the same self-hosted project workflow. The core workflow exists; clean-install and adoption checks continue.</p>
            <div {...stylex.props(sharedStyles.ctaGroup, aboutStyles.actions)}>
              <Link to="/playblast" {...stylex.props(sharedStyles.btn, sharedStyles.btnPrimary)}>Explore Playblast</Link>
              <Link to="/contact" {...stylex.props(sharedStyles.btn)}>Contact brzrk</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
