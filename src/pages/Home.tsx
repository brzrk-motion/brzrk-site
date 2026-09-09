import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="home">
      <section className="hero reveal-hero" aria-labelledby="home-title">
        <div className="container hero__grid">
          <div className="hero__rail" aria-label="Company profile">
            <span>BRZRK / 2026</span><span>Independent</span><span>Product systems</span>
          </div>
          <div className="hero__content">
            <p className="index-label"><span>00</span> Company index</p>
            <h1 id="home-title">Tools for the work <em>behind</em> the work.</h1>
            <div className="hero__lower">
              <p className="hero__lede">brzrk builds focused software that removes friction from creative and technical workflows.</p>
              <div className="hero__actions">
                <Link to="/playblast" className="btn btn--primary">View Playblast <span aria-hidden="true">↗</span></Link>
                <Link to="/about" className="btn btn--text">Company notes <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-product" aria-labelledby="product-title">
        <div className="container">
          <header className="section-heading section-heading--split">
            <p className="index-label"><span>01</span> Current product</p>
            <p className="section-heading__note">One product in public view.<br />Status shown without inflation.</p>
          </header>
          <div className="product-feature">
            <div className="product-feature__copy">
              <div className="status-line"><span className="status-dot" /> MVP release candidate / self-hosted OSS</div>
              <h2 id="product-title">Playblast</h2>
              <p className="product-feature__lede">Private video review for small studios that want versions, comments, annotations, compare, and approvals on infrastructure they control.</p>
              <p className="product-feature__caveat">Core proofing exists. Independent clean-install and adoption checks remain in progress. Not hosted. No support package.</p>
              <Link to="/playblast" className="btn btn--secondary">Inspect the workflow <span aria-hidden="true">→</span></Link>
            </div>
            <figure className="evidence-frame evidence-frame--home">
              <div className="evidence-frame__chrome"><span>PLAYBLAST / REVIEW</span><span>REAL INTERFACE</span></div>
              <img src={`${import.meta.env.BASE_URL}screenshots/review.png`} alt="Playblast review player showing a deliverable cut with timestamped comments" width="1440" height="900" loading="lazy" decoding="async" />
              <figcaption><span>Fig. 01</span> Timestamped review tied to the cut.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="principles" aria-labelledby="principles-title">
        <div className="container principles__grid">
          <header><p className="index-label"><span>02</span> Operating principles</p><h2 id="principles-title">Less pitch.<br />More proof.</h2></header>
          <ol className="principle-list">
            <li><span>01</span><div><h3>Focused</h3><p>Build for specific workflow friction rather than category breadth.</p></div></li>
            <li><span>02</span><div><h3>Self-possessed</h3><p>Use design and engineering judgment without borrowing SaaS theater.</p></div></li>
            <li><span>03</span><div><h3>Evidence-led</h3><p>Label readiness honestly and let working interfaces make the case.</p></div></li>
          </ol>
        </div>
      </section>
    </div>
  )
}
