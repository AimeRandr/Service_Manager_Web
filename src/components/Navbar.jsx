import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Backdrop,          // ← Ajouté pour l'overlay de chargement
  CircularProgress,  // ← Ajouté pour l'icône de chargement de l'API MUI
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonIcon from '@mui/icons-material/Person'
import InfoIcon from '@mui/icons-material/Info'
import LogoutIcon from '@mui/icons-material/Logout'
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import { useNavigate } from 'react-router-dom'
import { useThemeMode } from '../context/ThemeModeContext.jsx'

// La Navbar garde volontairement ses couleurs sombres d'origine,
// même quand le reste de l'app passe en mode clair.
const NAVBAR_COLORS = {
  gradient: 'linear-gradient(90deg, #050A24 0%, #0F1D5A 51%, #050A24 100%)',
  textPrimary: '#FFFFFF',
  drawerBg: '#050A24',
  drawerDivider: 'rgba(255,255,255,0.1)',
  backdropTint: 'rgba(5, 10, 36, 0.8)',
}

const navLinks = [
  { label: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { label: 'Manage account', icon: <PersonIcon />, path: '/manage-account' },
  { label: 'About', icon: <InfoIcon />, path: '/about' },
  { label: 'Logout', icon: <LogoutIcon />, path: '/login', isLogout: true },
]

function Navbar({ onLogout }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false) // ← État pour gérer le chargement de déconnexion
  const { mode, toggleMode } = useThemeMode()
  const t = NAVBAR_COLORS

  const handleNavigate = (link) => {
    if (link.isLogout) {
      setIsLoggingOut(true) // On active l'overlay de chargement
      
      // Petit délai de 1.5s pour un effet visuel fluide avant la redirection
      setTimeout(() => {
        onLogout()          
        navigate('/login')  
      }, 1500)
    } else {
      navigate(link.path)
    }
    setDrawerOpen(false)
  }

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Écran de chargement plein écran pendant la déconnexion */}
      <Backdrop
        sx={{ 
          color: t.textPrimary, 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: t.backdropTint // Teinte accordée au thème courant
        }}
        open={isLoggingOut}
      >
        <div className="flex flex-col items-center gap-4">
          <CircularProgress color="inherit" />
          <span className="text-lg font-semibold tracking-wide">Déconnexion en cours...</span>
        </div>
      </Backdrop>

      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: 0,
          left: 0,
          right: 0,
          zIndex: (theme) => theme.zIndex.appBar,
          background: t.gradient,
          color: t.textPrimary,
        }}
      >
        <Toolbar className="flex justify-between">
          <Box className="flex items-center gap-2 font-bold text-lg">
            <ScreenSearchDesktopIcon />
            TRACKER TEAM
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }} gap={1}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                startIcon={link.icon}
                color="inherit"
                disabled={isLoggingOut} // Désactive les boutons pendant la déconnexion
                sx={{
                  textTransform: 'none',
                  fontWeight: isActive(link.path) ? '700' : '400',
                  fontSize: isActive(link.path) ? '1.05rem' : '1rem',
                }}
                onClick={() => handleNavigate(link)}
              >
                {link.label}
              </Button>
            ))}
            <IconButton
              onClick={toggleMode}
              color="inherit"
              disabled={isLoggingOut}
              aria-label={mode === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
              title={mode === 'dark' ? 'Mode clair' : 'Mode sombre'}
            >
              {mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <IconButton
              color="inherit"
              disabled={isLoggingOut}
              onClick={toggleMode}
              aria-label={mode === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
            >
              {mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
            </IconButton>
            <IconButton
              color="inherit"
              disabled={isLoggingOut}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{ width: 250, height: '100%', background: t.drawerBg }}
          role="presentation"
        >
          <List>
            {navLinks.map((link, index) => (
              <div key={link.label}>
                <ListItem disablePadding>
                  <ListItemButton 
                    onClick={() => handleNavigate(link)}
                    disabled={isLoggingOut}
                    sx={{ color: t.textPrimary }}
                  >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      {link.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        sx: {
                          textTransform: 'none',
                          fontWeight: isActive(link.path) ? '700' : '400',
                          fontSize: isActive(link.path) ? '1.05rem' : '1rem',
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                {index < navLinks.length - 1 && (
                  <Divider sx={{ borderColor: t.drawerDivider }} />
                )}
              </div>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Navbar