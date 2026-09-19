import { NavLink } from 'react-router-dom'
import * as stylex from '@stylexjs/stylex'
import { sharedStyles } from '../styles/shared.stylex'
import { layoutStyles } from './Layout.stylex'

const CONTACT_EMAIL = 'brzrk@brzrk-motion.com'

export function Footer() {
  return (
    <footer {...stylex.props(layoutStyles.footer)}>
      <div {...stylex.props(sharedStyles.container, layoutStyles.footerShell)}>
        <div {...stylex.props(layoutStyles.footerMain)}>
          <section {...stylex.props(layoutStyles.footerIntro)} aria-labelledby="footer-heading">
            <img {...stylex.props(layoutStyles.footerLogo)} src={`${import.meta.env.BASE_URL}logo.svg`} alt="brzrk" />
            <p id="footer-heading" {...stylex.props(layoutStyles.footerDescriptor)}>Independent product company. Building focused tools for creative production.</p>
            <a href={`mailto:${CONTACT_EMAIL}`} {...stylex.props(layoutStyles.footerEmail)}>{CONTACT_EMAIL}</a>
          </section>

          <nav {...stylex.props(layoutStyles.footerNav)} aria-label="Footer navigation">
            <h2 {...stylex.props(layoutStyles.footerNavTitle)}>Site Map</h2>
            <ul {...stylex.props(layoutStyles.footerLinks)}>
              <li><NavLink to="/" end {...stylex.props(layoutStyles.footerLink)}>Index</NavLink></li>
              <li><NavLink to="/playblast" {...stylex.props(layoutStyles.footerLink)}>Playblast</NavLink></li>
              <li><NavLink to="/fund" {...stylex.props(layoutStyles.footerLink)}>Fund</NavLink></li>
              <li><NavLink to="/about" {...stylex.props(layoutStyles.footerLink)}>About</NavLink></li>
              <li><NavLink to="/contact" {...stylex.props(layoutStyles.footerLink)}>Contact</NavLink></li>
              <li><a href="https://github.com/brzrk-motion" target="_blank" rel="noopener noreferrer" {...stylex.props(layoutStyles.footerLink)}>GitHub <span aria-hidden="true">↗</span></a></li>
            </ul>
          </nav>
        </div>

        <div {...stylex.props(layoutStyles.footerBottom)}>
          <p {...stylex.props(layoutStyles.footerMeta)}>© {new Date().getFullYear()} brzrk</p>
          <p {...stylex.props(layoutStyles.footerMeta)}>Built in public. Operated independently.</p>
        </div>
      </div>
    </footer>
  )
}
