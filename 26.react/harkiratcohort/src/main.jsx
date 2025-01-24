import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Product from './Product.jsx'
import ProductTab from './ProductTab.jsx'
// import App from './App.jsx'
// import Msg from './msg.jsx'
// import Navigate from './Navigate.jsx'
// import Cold from './Cold.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductTab />
    {/* <App />
    <Msg name="raj"/>
    <Navigate name="rucha"/>
    <Cold textColor="sk" userName="patil" create="blue"/> */}
  </StrictMode>,
)
