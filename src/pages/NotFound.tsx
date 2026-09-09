import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="page">
      <div className="container container--narrow">
        <header className="page__header">
          <p className="hero__eyebrow">404</p>
          <h1>That page isn&apos;t here.</h1>
          <p className="page__intro">
            The link may be outdated, or the address may be mistyped.
          </p>
        </header>
        <Link to="/" className="btn btn--primary">
          Back to brzrk
        </Link>
      </div>
    </div>
  )
}