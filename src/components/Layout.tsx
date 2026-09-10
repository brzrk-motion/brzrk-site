import { useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import * as stylex from '@stylexjs/stylex'
import { layoutStyles, sharedStyles } from './Layout.stylex'

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
    <div {...stylex.props(layoutStyles.layout, isHome ? layoutStyles.layoutHome : layoutStyles.layoutPage)}>
      <PageMeta pathname={pathname} />
      <a {...stylex.props(layoutStyles.skipLink)} href="#main-content">Skip to content</a>
      <header {...stylex.props(layoutStyles.nav)}>
        <div {...stylex.props(sharedStyles.container, layoutStyles.navInner)}>
          <NavLink to="/" end aria-label="brzrk home" className={stylex.props(layoutStyles.navBrand).className ?? ''}>
            <span {...stylex.props(layoutStyles.navBrandMark)}>b/</span>
            <span>brzrk</span>
          </NavLink>
          <nav {...stylex.props(layoutStyles.navWrap)} aria-label="Primary navigation">
            <ul {...stylex.props(layoutStyles.navLinks)}>
              {navItems.map(({ to, label, number, end }) => (
                <li key={to} {...stylex.props(layoutStyles.navLinksItem)}>
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      stylex.props(layoutStyles.navLink, isActive && layoutStyles.navLinkActive).className ?? ''
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span {...stylex.props(layoutStyles.navNumber, isActive && layoutStyles.navNumberActive)} aria-hidden="true">
                          {number}
                        </span>
                        {label}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main {...stylex.props(layoutStyles.main)} id="main-content"><Outlet /></main>
      <footer {...stylex.props(layoutStyles.footer)}>
        <div {...stylex.props(sharedStyles.container, layoutStyles.footerGrid)}>
          <div>
            <p {...stylex.props(layoutStyles.footerBrand)}>brzrk</p>
            <p {...stylex.props(layoutStyles.footerDescriptor)}>Independent product company.<br />Focused tools. Honest status.</p>
          </div>
          <nav aria-label="Footer navigation">
            <ul {...stylex.props(layoutStyles.footerLinks)}>
              <li>
                <a href="https://github.com/brzrk-motion" target="_blank" rel="noopener noreferrer" {...stylex.props(layoutStyles.footerLink)}>
                  GitHub ↗
                </a>
              </li>
              <li>
                <NavLink to="/contact" className={stylex.props(layoutStyles.footerLink).className ?? ''}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <p {...stylex.props(layoutStyles.footerMeta)}>© {new Date().getFullYear()} brzrk<br />Built in public / operated independently</p>
        </div>
      </footer>
    </div>
  )
}
