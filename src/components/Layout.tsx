import { useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { HeroShader } from './HeroShader'

const SITE_URL = 'https://brzrk-motion.github.io/brzrk-site'
const PAGE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'brzrk — Tools for the work behind the work',
    description:
      'brzrk is an independent product company building focused software for creative and technical workflows.',
  },
  '/playblast': {
    title: 'Playblast — Private review for self-hosted teams | brzrk',
    description:
      'Playblast is a self-hosted MVP release candidate for video proofing, versions, comments, annotations, compare, and approvals.',
  },
  '/fund': {
    title: 'Playblast Development Fund | brzrk',
    description:
      'Optional sponsorship funds general maintenance and development of the open-source Playblast project.',
  },
  '/about': {
    title: 'About brzrk — Independent product company',
    description:
      'brzrk is an independent, design-literate product company building focused tools with honest status labels.',
  },
  '/contact': {
    title: 'Contact brzrk',
    description:
      'Contact brzrk about Playblast, product feedback, or other things the independent product company is building.',
  },
}

function PageMeta({ pathname }: { pathname: string }) {
  const meta = PAGE_META[pathname] ?? PAGE_META['/']

  useEffect(() => {
    document.title = meta.title
    for (const [name, content] of [
      ['description', meta.description],
      ['og:title', meta.title],
      ['og:description', meta.description],
    ] as const) {
      document.querySelector(`meta[name="${name}"], meta[property="${name}"]`)
        ?.setAttribute('content', content)
    }

    const url = `${SITE_URL}${pathname === '/' ? '/' : pathname}`
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', url)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url)
  }, [meta, pathname])

  return null
}

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/playblast', label: 'Playblast' },
  { to: '/fund', label: 'Fund' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className={`layout${isHome ? ' layout--home' : ' layout--page'}`}>
      <PageMeta pathname={pathname} />
      <div className="layout__shader-bg" aria-hidden="true">
        <HeroShader />
        <div className="layout__scrim" />
      </div>

      <header className="nav">
        <div className="container nav__inner">
          <NavLink to="/" className="nav__brand" end>
            brzrk
          </NavLink>
          <nav aria-label="Main">
            <ul className="nav__links">
              {navItems.map(({ to, label, end }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      `nav__link${isActive ? ' nav__link--active' : ''}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="layout__main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} brzrk</span>
          <ul className="footer__links">
            <li>
              <a
                href="https://github.com/brzrk-motion"
                className="footer__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <NavLink to="/contact" className="footer__link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
