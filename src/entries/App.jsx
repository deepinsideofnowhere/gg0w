import { Route, Routes } from 'react-router-dom'
import { DEFAULT_LANG, LANGS } from '../i18n'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Post from '../pages/Post'
import About from '../pages/About'
import Car from '../pages/Car'
import Donate from '../pages/Donate'
import NotFound from '../pages/NotFound'

// одинаковый набор страниц для каждого языка
const pages = (
  <>
    <Route index element={<Home />} />
    <Route path="posts/:slug" element={<Post />} />
    <Route path="about" element={<About />} />
    <Route path="car" element={<Car />} />
    <Route path="donate" element={<Donate />} />
    <Route path="*" element={<NotFound />} />
  </>
)

export default function App() {
  return (
    <Routes>
      {LANGS.map((lang) => (
        <Route key={lang} path={lang === DEFAULT_LANG ? '/' : lang} element={<Layout lang={lang} />}>
          {pages}
        </Route>
      ))}
    </Routes>
  )
}
