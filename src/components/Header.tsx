import { NavLink } from 'react-router-dom'
import * as stylex from '@stylexjs/stylex'
import { sharedStyles } from '../styles/shared.stylex'
import { layoutStyles } from './Layout.stylex'

const navItems = [
  { to: '/', label: 'Index', number: '00', end: true },
  { to: '/playblast', label: 'Playblast', number: '01' },
  { to: '/fund', label: 'Fund', number: '02' },
  { to: '/about', label: 'About', number: '03' },
  { to: '/contact', label: 'Contact', number: '04' },
]

export function Header() {
  return (
    <header {...stylex.props(layoutStyles.nav)}>
      <div {...stylex.props(sharedStyles.container, layoutStyles.navInner)}>
        <NavLink to="/" end aria-label="brzrk home" className={stylex.props(layoutStyles.navBrand).className ?? ''}>
          <img {...stylex.props(layoutStyles.brandLogo)} src={`${import.meta.env.BASE_URL}logo.svg`} alt="" />
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
  )
}
