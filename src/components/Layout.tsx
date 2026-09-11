import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import * as stylex from '@stylexjs/stylex'
import { Footer } from './Footer'
import { Header } from './Header'
import { layoutStyles } from './Layout.stylex'

const SITE_URL = 'https://brzrk-motion.github.io/brzrk-site'
const PAGE_META: Record<string, { title: string; description: string }> = {
  '/': { title: 'brzrk. Tools for the work behind the work', description: 'brzrk builds software for creative and technical teams. Flagship product: Playblast, private video review with clients and invoices for studios.' },
  '/playblast': { title: 'Playblast. Review, clients, and invoices for studios | brzrk', description: 'Playblast brings review, clients, invoices, and project estimates together for studios.' },
  '/fund': { title: 'Playblast Development Fund | brzrk', description: 'Optional sponsorship that funds Playblast maintenance and development.' },
  '/about': { title: 'About brzrk. Independent product company', description: 'brzrk builds focused software. Public focus: Playblast.' },
  '/contact': { title: 'Contact brzrk', description: 'Email brzrk@brzrkmotion.com about Playblast, feedback, or other brzrk work.' },
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

export function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  return (
    <div {...stylex.props(layoutStyles.layout, isHome ? layoutStyles.layoutHome : layoutStyles.layoutPage)}>
      <PageMeta pathname={pathname} />
      <a {...stylex.props(layoutStyles.skipLink)} href="#main-content">Skip to content</a>
      <Header />
      <main {...stylex.props(layoutStyles.main)} id="main-content"><Outlet /></main>
      <Footer />
    </div>
  )
}
