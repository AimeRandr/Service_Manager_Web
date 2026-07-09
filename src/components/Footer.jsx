import { Box, Link, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookIcon from '@mui/icons-material/Facebook'
import { useNavigate } from 'react-router-dom'

// Le Footer garde volontairement ses couleurs sombres d'origine,
// même quand le reste de l'app passe en mode clair.
const FOOTER_COLORS = {
  gradient: 'linear-gradient(90deg, #050A24 0%, #0F1D5A 51%, #050A24 100%)',
  textPrimary: '#FFFFFF',
  textMuted: 'rgba(255,255,255,0.7)',
}

const footerLinks = [
  { label: 'About', path: '/about' },
  { label: 'Dashboard', path: '/' },
  { label: 'Manage Account', path: '/manage-account' },
]

const socialIcons = [
  { icon: <EmailIcon sx={{ fontSize: 35 }} />, href: 'mailto:contact@trackerteam.com' },
  { icon: <LinkedInIcon sx={{ fontSize: 35 }} />, href: 'https://linkedin.com' },
  { icon: <WhatsAppIcon sx={{ fontSize: 35 }} />, href: 'https://wa.me/0000000000' },
  { icon: <FacebookIcon sx={{ fontSize: 35 }} />, href: 'https://facebook.com' },
]

function Footer() {
  const navigate = useNavigate()
  const t = FOOTER_COLORS

  return (
    <Box component="footer" sx={{ background: t.gradient, color: t.textPrimary }}>
      <Box
        sx={{
          maxWidth: 1440,
          mx: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 1,
          px: { xs: 4, md: 8 },
          py: { xs: 0.5, md: 0.75 },
          minHeight: 80,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              component="button"
              onClick={() => navigate(link.path)}
              underline="hover"
              color="inherit"
              sx={{
                textAlign: 'left',
                fontSize: 16,
                lineHeight: 1.2,
                fontWeight: 700,
                textTransform: 'none',
                px: 0,
                py: 0.25,
              }}
            >
              {link.label}
            </Link>
          ))}
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: { xs: 'flex-start', md: 'flex-start' } }}>
          <Typography sx={{ fontSize: 20, fontWeight: 600, color: t.textPrimary, textAlign: 'left' }}>
            Contact us
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {socialIcons.map((social, index) => (
              <Box
                key={index}
                component="a"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'inline-flex',
                  width: 35,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: t.textPrimary,
                  textDecoration: 'none',
                  '&:hover': {
                    opacity: 0.8,
                  },
                }}
              >
                {social.icon}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box sx={{ py: 0.15 }}>
        <Typography sx={{ fontSize: 16, lineHeight: 1.3, textAlign: 'center', color: t.textMuted }}>
          Copyright © {new Date().getFullYear()} All rights reserved
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer