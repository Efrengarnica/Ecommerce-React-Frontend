import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Ecommerce } from './Ecommerce'
import 'bulma/css/bulma.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ecommerce></Ecommerce>
  </StrictMode>,
)