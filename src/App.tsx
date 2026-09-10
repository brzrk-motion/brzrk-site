import { Navigate, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Playblast } from './pages/Playblast'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Fund } from './pages/Fund'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
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
  )
}
