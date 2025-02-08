import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Like from './Like.jsx'
import Lotery from './Lotery.jsx'
import Array from './Array.jsx'
import Name from './Name.jsx'
import Factorial from './Factorial.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Like />
    <Lotery />
    <Array />
    <Name />
    <Factorial />
  </StrictMode>,
)
