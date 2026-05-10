import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n/config.js'
import App from './App.jsx'
import { migrateOntoKeysToDasein } from './storageKeys.js'

migrateOntoKeysToDasein()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
