import { lazy, Suspense } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'

const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })))
const Playblast = lazy(() => import('./pages/Playblast').then((module) => ({ default: module.Playblast })))
const About = lazy(() => import('./pages/About').then((module) => ({ default: module.About })))
const Contact = lazy(() => import('./pages/Contact').then((module) => ({ default: module.Contact })))
const Fund = lazy(() => import('./pages/Fund').then((module) => ({ default: module.Fund })))
const NotFound = lazy(() => import('./pages/NotFound').then((module) => ({ default: module.NotFound })))

function RouteFallback() {
  return <div className="sr-only" aria-live="polite">Loading page</div>
}

export default function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Navigate to="/playblast" replace />} />
          <Route path="playblast" element={<Playblast />} />
          <Route path="fund" element={<Fund />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
