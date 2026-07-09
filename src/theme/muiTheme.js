import { createTheme } from '@mui/material/styles'

// Avant : un thème unique figé en mode sombre.
// Maintenant : une fonction qui génère le thème MUI selon le mode courant.
export function getMuiTheme(mode = 'dark') {
  const isDark = mode === 'dark'

  return createTheme({
    palette: {
      mode,
      background: {
        default: isDark ? '#050816' : '#F4F6FB',
        paper: isDark ? '#2b3550' : '#FFFFFF',
      },
      primary: {
        main: '#3b82f6',
      },
      success: {
        main: '#22c55e',
      },
      error: {
        main: '#ef4444',
      },
      text: {
        primary: isDark ? '#e5e7eb' : '#111827',
        secondary: isDark ? '#9ca3af' : '#4b5563',
      },
    },
    shape: {
      borderRadius: 10,
    },
    typography: {
      fontFamily: '"Roboto Slab", serif',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontFamily: '"Roboto Slab", serif',
          },
        },
      },
    },
  })
}