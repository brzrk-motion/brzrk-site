import { Link } from 'react-router-dom'
import {
  LINKS,
  LOOP_STEPS,
  SCREENSHOTS,
  SPONSORSHIP_DISCLAIMER,
  SPONSORSHIP_TIERS,
  YOU_DONT_GET,
  YOU_GET,
} from '../playblast/constants'

function ExternalLink({
  href,
  children,
  className = '',
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}

export function Playblast() {
  return (
    <div className="page pb-page">
      <div className="container">
        <header className="pb-hero reveal-hero">
          <p className="pb-hero__kicker">Playblast</p>
          <h1 className="pb-hero__headline">
            Private review for the work your studio is already making.
          </h1>
          <p className="pb-hero__subhead">
            Free, open-source video proofing for small motion, CGI, animation,
            and video studios. Versions, comments, frame annotations, compare,
            and approvals — media on infrastructure you control.
          </p>
          <div className="cta-group">
            <ExternalLink href={LINKS.github} className="btn btn--primary">
              Explore on GitHub
            </ExternalLink>
            <ExternalLink href={LINKS.installGuide} className="btn btn--secondary">
              Read install docs
            </ExternalLink>
          </div>
          <aside className="honesty-block pb-hero__status">
            <div className="honesty-block__label">Status</div>
            <p>
              Self-hosted MVP release candidate. Core proofing loop exists;
              independent clean-install / adoption checks still in progress. Not
              commercially validated. Not hosted. No support package.
            </p>
            <p className="pb-hero__status-helper">
              You run it; we don&apos;t host or support.
            </p>
          </aside>
        </header>

        <section className="section pb-section" aria-labelledby="problem-heading">
          <h2 id="problem-heading" className="section__title">
            Feedback shouldn&apos;t live in five places
          </h2>
          <div className="section__body">
            <p>
              Version notes in email. Frame feedback in chat. Drive links for
              cuts that don&apos;t match the thread. Approvals buried where
              nobody will find them next week — with no single source of truth
              tied to the media.
            </p>
          </div>
        </section>

        <section className="section pb-section" aria-labelledby="loop-heading">
          <div className="pb-loop-header">
            <h2 id="loop-heading" className="section__title">The loop</h2>
            <p className="pb-section-intro">
              Versions → frame-aware feedback → compare → approve — on
              infrastructure you control.
            </p>
          </div>
          <ol className="pb-timeline">
            {LOOP_STEPS.map((step, i) => (
              <li key={step.title} className="pb-timeline__item">
                <span className="pb-timeline__marker" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="pb-timeline__body">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="section pb-section"
          aria-labelledby="screenshots-heading"
        >
          <div className="pb-screenshots-header">
            <h2 id="screenshots-heading" className="section__title">
              Inside the proofing room
            </h2>
            <p className="pb-section-intro">
              Playback, compare, frame markup, and project tracking — the core
              loop in one self-hosted interface. Studio Demo seed data shown.
            </p>
          </div>
          <ul className="pb-screenshot-gallery">
            {SCREENSHOTS.map((shot) => (
              <li key={shot.caption} className="pb-screenshot-card">
                <figure>
                  <div className="pb-screenshot-card__frame">
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption>{shot.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="section pb-section pb-section--split"
          aria-labelledby="get-heading"
        >
          <div className="pb-split-grid">
            <div className="pb-split-panel pb-split-panel--get">
              <h2 id="get-heading" className="section__title">What you get</h2>
              <ul className="pb-check-list">
                {YOU_GET.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="pb-split-panel pb-split-panel--dont">
              <h2 className="section__title">What you don&apos;t get</h2>
              <ul className="pb-cross-list">
                {YOU_DONT_GET.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          className="section pb-section"
          aria-labelledby="selfhost-heading"
        >
          <div className="pb-selfhost-band">
            <h2 id="selfhost-heading" className="section__title">
              You operate the instance
            </h2>
            <div className="section__body">
              <p>
                Playblast runs where you put it. That means your team owns
                Docker, networking, HTTPS or VPN access, backups, SMTP for
                notifications, and who can reach the server. We publish the
                software and docs; you run the environment.
              </p>
              <p>
                Independent clean-install and NAS verification is still in
                progress—treat this as a release candidate and plan time to
                validate your setup.
              </p>
            </div>
            <ExternalLink href={LINKS.installGuide} className="btn btn--ghost">
              Read the installation guide →
            </ExternalLink>
          </div>
        </section>

        <section className="section pb-section" aria-label="Explore and contribute">
          <nav className="pb-cta-strip">
            <ExternalLink href={LINKS.github}>Explore GitHub</ExternalLink>
            <span className="pb-cta-sep" aria-hidden="true">·</span>
            <ExternalLink href={LINKS.installGuide}>Read install docs</ExternalLink>
            <span className="pb-cta-sep" aria-hidden="true">·</span>
            <ExternalLink href={LINKS.issues}>Report an issue</ExternalLink>
          </nav>
        </section>

        <section
          className="section pb-section"
          aria-labelledby="funding-heading"
        >
          <div className="pb-funding-block">
            <h2 id="funding-heading" className="section__title">
              Optional sponsorship
            </h2>
            <p className="pb-section-intro">
              Full tier ladder, credits, and fund numbers on the{' '}
              <Link to="/fund">Playblast Development Fund</Link> page.
            </p>
            <ul className="pb-tier-grid">
              {SPONSORSHIP_TIERS.map((tier) => (
                <li key={tier.name} className="pb-tier-card">
                  <div className="pb-tier-card__head">
                    <h3>{tier.name}</h3>
                    <p className="pb-tier-card__price">
                      <span className="pb-tier-card__amount">{tier.amount}</span>
                      <span className="pb-tier-card__period">{tier.period}</span>
                    </p>
                  </div>
                  <p className="pb-tier-card__recognition">{tier.recognition}</p>
                  <p className="pb-tier-card__boundary">
                    {SPONSORSHIP_DISCLAIMER}
                  </p>
                </li>
              ))}
            </ul>
            <p id="sponsorship-disclaimer" className="pb-funding-disclaimer">
              {SPONSORSHIP_DISCLAIMER}
            </p>
            <div className="pb-funding-cta">
              <p className="pb-funding-cta__note">GitHub Sponsors coming online.</p>
              <ExternalLink href={LINKS.sponsorsDoc} className="btn btn--ghost">
                Read SPONSORS.md →
              </ExternalLink>
              <ExternalLink href={LINKS.discussions} className="btn btn--ghost">
                Join Discussions →
              </ExternalLink>
            </div>
          </div>
        </section>

        <p className="external-note">
          Full marketing overview also at{' '}
          <ExternalLink href={LINKS.marketingLp}>playblast-lp</ExternalLink>.
        </p>
      </div>
    </div>
  )
}
