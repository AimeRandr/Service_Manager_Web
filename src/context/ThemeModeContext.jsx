import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material'
import { getMuiTheme } from '../theme/muiTheme.js'

const ThemeModeContext = createContext(null)
const STORAGE_KEY = 'tracker-team-theme-mode'

// Enveloppe l'app entière : fournit le mode ('dark' par défaut) à tous les
// composants via le contexte, ET applique le thème MUI correspondant.
export function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode)
  }, [mode])

  const toggleMode = () => setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))

  const muiTheme = useMemo(() => getMuiTheme(mode), [mode])
  const value = useMemo(() => ({ mode, isDark: mode === 'dark', toggleMode }), [mode])

  return (
    <ThemeModeContext.Provider value={value}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeModeContext.Provider>
  )
}

// Hook à utiliser dans n'importe quel composant : const { mode, isDark, toggleMode } = useThemeMode()
export function useThemeMode() {
  const ctx = useContext(ThemeModeContext)
  if (!ctx) {
    throw new Error('useThemeMode doit être utilisé à l\'intérieur de <ThemeModeProvider>')
  }
  return ctx
}