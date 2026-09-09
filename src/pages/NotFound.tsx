import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="page">
      <div className="container">
        <header className="page__header reveal-hero">
          <div><p className="page__kicker">404 / Missing</p><h1>That page isn&apos;t here.</h1></div>
          <div><p className="page__intro">The link may be outdated, or the address may be mistyped.</p><div className="cta-group"><Link to="/" className="btn btn--primary">Return to the index <span aria-hidden="true">→</span></Link></div></div>
        </header>
      </div>
    </div>
  )
}
