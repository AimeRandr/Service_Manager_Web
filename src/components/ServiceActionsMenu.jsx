import { useState } from 'react'
import { IconButton, Menu, MenuItem, Divider } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import { useThemeMode } from '../context/ThemeModeContext.jsx'
import { getTokens } from '../theme/tokens.js'

function ServiceActionsMenu({ status, onRestart, onStop, onStart, isBlurring }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const { mode } = useThemeMode()
  const t = getTokens(mode)

  const handleAction = (action) => {
    setAnchorEl(null)
    action()
  }

  const secondAction =
    status === 'running'
      ? { label: 'Stop', handler: onStop, hoverColor: 'rgba(221, 69, 21, 0.15)' }
      : { label: 'Start', handler: onStart, hoverColor: 'rgba(20, 164, 48, 0.15)' }

  return (
    <>
      <IconButton
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{
          color: t.textPrimary,
          p: 1,
          borderRadius: '12px',
          bgcolor: 'transparent',
          '&:hover': { bgcolor: t.hoverBg },
          transition: 'filter 0.25s ease',
          filter: isBlurring ? 'blur(3px)' : 'none',
        }}
      >
        <SettingsIcon sx={{ fontSize: 45 }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        slotProps={{
          paper: {
            sx: {
              mt: 0.5,
              background: t.menuBg,
              border: `1px solid ${t.borderAccent}`,
              borderRadius: '12px',
              color: t.textPrimary,
              minWidth: 140,
              overflow: 'hidden',
            },
          },
        }}
      >
        <MenuItem
          onClick={() => handleAction(onRestart)}
          sx={{
            pl: 3,
            pr: 3,
            borderRadius: '10px',
            '&:hover': { background: 'rgba(59, 130, 246, 0.12)' },
          }}
        >
          Restart
        </MenuItem>
        <Divider sx={{ borderColor: t.borderAccent }} />
        <MenuItem
          onClick={() => handleAction(secondAction.handler)}
          sx={{
            pl: 3,
            pr: 3,
            borderRadius: '10px',
            '&:hover': { background: secondAction.hoverColor },
          }}
        >
          {secondAction.label}
        </MenuItem>
      </Menu>
    </>
  )
}

export default ServiceActionsMenu