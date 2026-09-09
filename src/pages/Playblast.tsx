import { Link } from 'react-router-dom'
import { LINKS, LOOP_STEPS, SCREENSHOTS, YOU_DONT_GET, YOU_GET } from '../playblast/constants'

function ExternalLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
}

export function Playblast() {
  return (
    <div className="page pb-page">
      <div className="container">
        <header className="pb-hero reveal-hero">
          <p className="pb-hero__kicker">01 / Playblast</p>
          <h1 className="pb-hero__headline">Private review.<br />Your infrastructure.</h1>
          <p className="pb-hero__subhead">
            A self-hosted video-proofing tool for small studios: versions, timestamped comments, frame annotations, compare, approvals, and review history.
          </p>
          <div className="cta-group">
            <ExternalLink href={LINKS.github} className="btn btn--primary">
              Explore on GitHub <span aria-hidden="true">↗</span>
            </ExternalLink>
            <ExternalLink href={LINKS.installGuide} className="btn btn--secondary">
              Read install docs <span aria-hidden="true">↗</span>
            </ExternalLink>
          </div>
          <aside className="honesty-block pb-hero__status">
            <div className="honesty-block__label">MVP release candidate</div>
            <p>Core proofing exists. Independent clean-install and adoption checks remain in progress. You run your own instance; brzrk does not provide hosting, installation, or a support SLA.</p>
          </aside>
        </header>

        <section className="section pb-section" aria-labelledby="problem-heading">
          <p className="index-label"><span>01</span> Problem</p>
          <h2 id="problem-heading" className="section__title">Feedback belongs with the cut.</h2>
          <div className="section__body">
            <p>Review breaks down when versions, notes, drawings, and approvals are split across email, chat, file shares, and improvised comparison reels.</p>
            <ul className="problem-list">
              <li>Notes lose their exact frame and version context.</li>
              <li>Old links and exports compete with the current cut.</li>
              <li>Studios trade workflow clarity for another external service.</li>
            </ul>
          </div>
        </section>

        <section className="section pb-section" aria-labelledby="loop-heading">
          <div className="pb-loop-header">
            <div><p className="index-label"><span>02</span> Review loop</p><h2 id="loop-heading" className="section__title">One traceable sequence.</h2></div>
            <p className="pb-section-intro">From a version landing on studio hardware to a recorded approval, the working context stays together.</p>
          </div>
          <ol className="pb-timeline">
            {LOOP_STEPS.map((step, index) => (
              <li key={step.title} className="pb-timeline__item">
                <span className="pb-timeline__marker" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div className="pb-timeline__body"><h3>{step.title}</h3><p>{step.body}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section pb-section" aria-labelledby="screenshots-heading">
          <div className="pb-screenshots-header">
            <div><p className="index-label"><span>03</span> Product evidence</p><h2 id="screenshots-heading" className="section__title">The interface, not a mockup.</h2></div>
            <p className="pb-section-intro">Current screens from the working Playblast review experience. No invented customer footage or feature theatre.</p>
          </div>
          <ul className="pb-screenshot-gallery">
            {SCREENSHOTS.map((shot) => (
              <li key={shot.src} className="pb-screenshot-card">
                <figure>
                  <div className="evidence-frame__chrome"><span>{shot.code}</span><span>1440 × 900 / CURRENT UI</span></div>
                  <div className="pb-screenshot-card__frame">
                    <img src={shot.src} alt={shot.alt} width="1440" height="900" loading="lazy" decoding="async" />
                  </div>
                  <figcaption><span>{shot.code}</span><span>{shot.caption}</span></figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>

        <section className="section pb-section pb-section--split" aria-labelledby="boundary-heading">
          <p className="index-label"><span>04</span> Product boundary</p>
          <div className="pb-split-grid">
            <div className="pb-split-panel pb-split-panel--get">
              <h2 id="boundary-heading" className="section__title">What you get.</h2>
              <ul className="pb-check-list">{YOU_GET.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="pb-split-panel pb-split-panel--dont">
              <h2 className="section__title">What you don&apos;t.</h2>
              <ul className="pb-cross-list">{YOU_DONT_GET.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="section pb-section" aria-labelledby="selfhost-heading">
          <div className="pb-selfhost-band">
            <div><p className="index-label"><span>05</span> Deployment</p><h2 id="selfhost-heading" className="section__title">Self-hosted means self-operated.</h2></div>
            <div className="section__body">
              <p>Playblast is intended for Docker deployment on a studio NAS or Linux host. Media stays on the filesystem you control. Each studio operates and backs up its own instance.</p>
              <div className="cta-group">
                <ExternalLink href={LINKS.installGuide} className="btn btn--secondary">Inspect deployment docs <span aria-hidden="true">↗</span></ExternalLink>
                <ExternalLink href={LINKS.issues} className="btn btn--text">Public issues <span aria-hidden="true">↗</span></ExternalLink>
              </div>
            </div>
          </div>
        </section>

        <section className="section pb-section" aria-labelledby="funding-heading">
          <div className="pb-funding-block">
            <p className="index-label"><span>06</span> Optional sponsorship</p>
            <h2 id="funding-heading" className="section__title">The fund is not open yet.</h2>
            <p className="pb-section-intro">The planned fund will support general maintenance and development. It will not buy private support, hosting, installation, response times, or roadmap control.</p>
            <div className="pb-funding-cta">
              <Link to="/fund" className="btn btn--primary">Read the funding boundary <span aria-hidden="true">→</span></Link>
              <ExternalLink href={LINKS.sponsorsDoc} className="btn btn--text">SPONSORS.md <span aria-hidden="true">↗</span></ExternalLink>
            </div>
          </div>
        </section>

        <p className="external-note">
          Full marketing overview also at{' '}
          <ExternalLink href={LINKS.marketingLp}>playblast-lp</ExternalLink>.
          External links open in a new tab.
        </p>
      </div>
    </div>
  )
}
