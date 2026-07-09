import { Box } from '@mui/material'
import StatCard from './StatCard.jsx'
import { useThemeMode } from '../context/ThemeModeContext.jsx'
import { getTokens } from '../theme/tokens.js'

function StatsSummary({ total, running, stopped, filter, onFilterChange }) {
  const { mode } = useThemeMode()
  const t = getTokens(mode)

  const stats = [
    { key: 'all', label: 'All services', value: total, accentColor: '#0C8CE9' },
    {
      key: 'running',
      label: <>Services <span style={{ color: '#14A430' }}>started</span></>,
      value: running,
      accentColor: '#14A430',
    },
    {
      key: 'stopped',
      label: <>Services <span style={{ color: '#DD4515' }}>stopped</span></>,
      value: stopped,
      accentColor: '#DD4515',
    },
  ]

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '969px',
        mx: 'auto',
        background: t.gradient,
        borderRadius: '10px',
        borderBottom: '4px solid #0C8CE9',
        px: { xs: 2, md: '71px' },
        py: { xs: 2, md: '22px' },
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        gap: { xs: 2, md: '40px' },
      }}
    >
      {stats.map((stat) => (
        <StatCard
          key={stat.key}
          label={stat.label}
          value={stat.value}
          accentColor={stat.accentColor}
          onClick={() => onFilterChange(stat.key)}
          isActive={filter === stat.key}
        />
      ))}
    </Box>
  )
}

export default StatsSummary