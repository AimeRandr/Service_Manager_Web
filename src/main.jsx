import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material'
import { HashRouter as Router } from 'react-router-dom'
import { ThemeModeProvider } from './context/ThemeModeContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeModeProvider>
        <Router>
          <App />
        </Router>
      </ThemeModeProvider>
    </StyledEngineProvider>
  </StrictMode>,
)