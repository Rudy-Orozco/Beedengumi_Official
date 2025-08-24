import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Playground from './Playground.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Playground /> */}
  </StrictMode>,
)
