import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { useThemeMode } from '../context/ThemeModeContext.jsx'
import { getTokens } from '../theme/tokens.js'

function MainLayout({ onLogout}) {
  const { mode } = useThemeMode()
  const t = getTokens(mode)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: t.pageBg }}>
      <Navbar onLogout={onLogout} />
      <main className="flex-1 pt-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout

