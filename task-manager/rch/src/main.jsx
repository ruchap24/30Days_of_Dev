import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Like from './Like.jsx'
import Lotery from './Lotery.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Like />
    <Lotery />
  </StrictMode>,
)
