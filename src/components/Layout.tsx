import { useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const SITE_URL = 'https://brzrk-motion.github.io/brzrk-site'
const PAGE_META: Record<string, { title: string; description: string }> = {
  '/': { title: 'brzrk — Tools for the work behind the work', description: 'brzrk is an independent product company building focused software for creative and technical workflows.' },
  '/playblast': { title: 'Playblast — Private review for self-hosted teams | brzrk', description: 'Playblast is a self-hosted MVP release candidate for video proofing, versions, comments, annotations, compare, and approvals.' },
  '/fund': { title: 'Playblast Development Fund | brzrk', description: 'The pre-launch Playblast Development Fund will support general maintenance and development through optional sponsorship.' },
  '/about': { title: 'About brzrk — Independent product company', description: 'brzrk is an independent, design-literate product company building focused tools with honest status labels.' },
  '/contact': { title: 'Contact brzrk', description: 'Contact brzrk about Playblast, product feedback, or other things the independent product company is building.' },
}

function PageMeta({ pathname }: { pathname: string }) {
  const meta = PAGE_META[pathname] ?? {
    title: 'Page not found | brzrk',
    description: 'The requested page could not be found on the brzrk site.',
  }
  useEffect(() => {
    document.title = meta.title
    for (const [name, content] of [['description', meta.description], ['og:title', meta.title], ['og:description', meta.description]] as const) {
      document.querySelector(`meta[name="${name}"], meta[property="${name}"]`)?.setAttribute('content', content)
    }
    const url = `${SITE_URL}${pathname === '/' ? '/' : pathname}`
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', url)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url)
  }, [meta, pathname])
  return null
}

const navItems = [
  { to: '/', label: 'Index', number: '00', end: true },
  { to: '/playblast', label: 'Playblast', number: '01' },
  { to: '/fund', label: 'Fund', number: '02' },
  { to: '/about', label: 'About', number: '03' },
  { to: '/contact', label: 'Contact', number: '04' },
]

export function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  return (
    <div className={`layout${isHome ? ' layout--home' : ' layout--page'}`}>
      <PageMeta pathname={pathname} />
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="nav">
        <div className="container nav__inner">
          <NavLink to="/" className="nav__brand" end aria-label="brzrk home"><span className="nav__brand-mark">b/</span><span>brzrk</span></NavLink>
          <nav aria-label="Primary navigation">
            <ul className="nav__links">
              {navItems.map(({ to, label, number, end }) => <li key={to}>
                <NavLink to={to} end={end} className={({ isActive }) => `nav__link${isActive ? ' nav__link--active' : ''}`}>
                  <span className="nav__number" aria-hidden="true">{number}</span>{label}
                </NavLink>
              </li>)}
            </ul>
          </nav>
        </div>
      </header>
      <main className="layout__main" id="main-content"><Outlet /></main>
      <footer className="footer">
        <div className="container footer__grid">
          <div><p className="footer__brand">brzrk</p><p className="footer__descriptor">Independent product company.<br />Focused tools. Honest status.</p></div>
          <nav aria-label="Footer navigation"><ul className="footer__links">
            <li><a href="https://github.com/brzrk-motion" target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul></nav>
          <p className="footer__meta">© {new Date().getFullYear()} brzrk<br />Built in public / operated independently</p>
        </div>
      </footer>
    </div>
  )
}
