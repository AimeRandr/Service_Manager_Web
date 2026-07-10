// src/theme/tokens.js
// Palette centralisée : une seule source de vérité pour toutes les couleurs
// qui changent entre le mode sombre (par défaut) et le mode clair.
// Les couleurs de statut / accent (bleu, vert, rouge) restent identiques
// dans les deux modes pour préserver l'identité visuelle de Tracker Team.

export function getTokens(mode) {
  const isDark = mode === 'dark'

  return {
    isDark,

    // Fonds en dégradé (Navbar, Footer, StatsSummary, StatCard)
    gradient: isDark
      ? 'linear-gradient(90deg, #050A24 0%, #0F1D5A 50%, #050A24 100%)'
      : 'linear-gradient(90deg, #DCEEFF 0%, #F8FDFC 50%, #E8F2FF 100%)',

    // Fond de page général
    pageBg: isDark ? '#050A24' : '#E2E9F4',

    // Fond des cartes (ServiceCard, AccountCard)
    // En mode clair, on utilise une surface douce et légèrement plus sombre
    cardBg: isDark ? '#2b3550' : '#EEF3FA',
    cardBorder: isDark ? 'transparent' : '#C8DAF1',

    // Fond des menus déroulants / dialogues
    menuBg: isDark ? '#0F1730' : '#FFFFFF',
    dialogBg: isDark ? '#081228' : '#FFFFFF',

    // Bordures accentuées (restent bleues dans les deux modes)
    borderAccent: '#3B82F6',

    // Textes
    textPrimary: isDark ? '#FFFFFF' : '#0B1220',
    textSecondary: isDark ? '#B0B7C3' : '#5B6472',
    textMuted: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(11,18,32,0.6)',

    // Survols / interactions
    hoverBg: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(11,18,32,0.06)',
    discardHoverBg: isDark ? '#0A1338' : '#EAF1FF',

    // Drawer mobile (Navbar)
    drawerBg: isDark ? '#050A24' : '#FFFFFF',
    drawerDivider: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(11,18,32,0.1)',

    // Champs de saisie (AccountInput)
    inputBg: isDark ? '#050A24' : '#FFFFFF',

    // Overlay de chargement (Navbar déconnexion)
    backdropTint: isDark ? 'rgba(5, 10, 36, 0.8)' : 'rgba(244, 246, 251, 0.85)',
  }
}