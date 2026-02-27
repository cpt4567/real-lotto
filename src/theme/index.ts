/** 디자인 토큰 및 테마 */

export const theme = {
  colors: {
    gold: '#e6b800',
    goldLight: '#f5d547',
    goldDark: '#c99a00',
    goldShadow: '#8b6914',
    dark: {
      bg: '#0a0a12',
      bgSecondary: '#080812',
      surface: '#1a1a2e',
      surfaceLight: '#1e1e32',
      surfaceLighter: '#252538',
      surfaceLightest: '#2a2a3e',
      border: '#2a2a3e',
      borderLight: '#3d3d52',
      text: '#4a4a6a',
      textMuted: '#3a3a5a',
    },
    white: '#ffffff',
    success: '#388E3C',
    successLight: '#4CAF50',
  },
  shadows: {
    goldGlow: '0 0 20px rgba(230, 184, 0, 0.2)',
    goldGlowStrong: '0 0 40px rgba(230, 184, 0, 0.6)',
    inset: 'inset 0 2px 8px rgba(0, 0, 0, 0.6)',
    card: '0 30px 80px rgba(0, 0, 0, 0.6)',
  },
  borderRadius: {
    sm: 6,
    md: 10,
    lg: 12,
    xl: 16,
    xxl: 28,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },
} as const;

export type Theme = typeof theme;
