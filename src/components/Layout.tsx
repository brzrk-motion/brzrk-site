import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { HeroShader } from './HeroShader'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/playblast', label: 'Playblast' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className={`layout${isHome ? ' layout--home' : ' layout--page'}`}>
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
