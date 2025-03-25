import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Ecommerce } from './Ecommerce'
import { BrowserRouter } from 'react-router-dom'
import 'bulma/css/bulma.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Ecommerce></Ecommerce>
    </StrictMode>
  </BrowserRouter>
)