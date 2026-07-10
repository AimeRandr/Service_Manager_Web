import { Box, Typography } from '@mui/material'
import { useThemeMode } from '../context/ThemeModeContext.jsx'
import { getTokens } from '../theme/tokens.js'

function StatCard({ label, value, accentColor, onClick, isActive }) {
  const { mode } = useThemeMode()
  const t = getTokens(mode)

  return (
    <Box
      onClick={onClick}
      sx={{
        width: { xs: '100%', md: '228px' },
        maxWidth: { xs: '100%', md: '228px' },
        height: { xs: 'auto', md: '58px' },
        flexShrink: 1,
        background: t.gradient,
        border: `1px solid ${accentColor}`,
        boxShadow: isActive ? `0 0 16px ${accentColor}` : `0 0 12px ${accentColor}55`,
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 1,
        px: 2,
        py: { xs: 2, md: 0 },
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'box-shadow 0.2s ease',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Typography sx={{ fontSize: { xs: 14, md: 16 }, fontWeight: 700, color: t.textPrimary, textAlign: { xs: 'center', md: 'left' } }}>
        {label}
      </Typography>
      <Typography sx={{ fontSize: { xs: 28, md: 32 }, fontWeight: 700, color: accentColor, lineHeight: 1, flexShrink: 0 }}>
        {value}
      </Typography>
    </Box>
  )
}

export default StatCard