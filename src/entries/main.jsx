import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '../index.css'
import { BASE } from '../lib/base'
import App from './App'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <BrowserRouter basename={BASE || '/'}>
      <App />
    </BrowserRouter>
  </StrictMode>
)

if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
