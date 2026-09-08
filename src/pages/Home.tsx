import { Link } from 'react-router-dom'

export function Home() {
  return (
    <section className="hero">
      <div className="container">
        <span className="hero__eyebrow">Product company</span>
        <h1 className="hero__headline">Tools for the work behind the work.</h1>
        <p className="hero__oneliner">
          brzrk builds opinionated, design-led software that removes friction
          from creative and technical workflows.
        </p>
        <p className="hero__body">
          brzrk is an independent product company building focused tools for
          people who make things with computers. It combines deep software
          experience with graphic and motion-design judgment to make complex
          workflows clearer, faster, and more enjoyable.
        </p>
        <div className="hero__actions">
          <Link to="/playblast" className="btn btn--primary">
            Explore Playblast
          </Link>
          <Link to="/products" className="btn btn--secondary">
            See what brzrk is making
          </Link>
        </div>
        <p className="hero__status">
          <span className="status-chip status-chip--rc">
            Release candidate · self-hosted OSS
          </span>
          <span className="hero__status-note">
            Independent clean-install checks still in progress.
          </span>
        </p>
      </div>
    </section>
  )
}
