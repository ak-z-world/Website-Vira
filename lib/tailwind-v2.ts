// tailwind.config.ts — ArivuOn Academy V2
// Extend, do NOT replace. Merge with existing config.
// Usage: spread ...v2Extend into the existing config's extend block.

import type { Config } from 'tailwindcss'

const v2Extend = {
  colors: {
    surface: {
      0: '#0d0f17',
      1: '#12141e',
      2: '#181b27',
      3: '#1e2130',
      4: '#242840',
    },
    brand: {
      indigo: {
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
      },
      violet: {
        400: '#c084fc',
        500: '#a855f7',
      },
      cyan: {
        400: '#22d3ee',
        500: '#06b6d4',
      },
      emerald: {
        400: '#34d399',
      },
      amber: {
        400: '#fbbf24',
      },
      rose: {
        400: '#fb7185',
      },
    },
  },
  fontFamily: {
    display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
    body:    ['Inter', 'system-ui', 'sans-serif'],
    mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
  },
  borderRadius: {
    'neo-sm':   '8px',
    'neo-md':  '12px',
    'neo-lg':  '16px',
    'neo-xl':  '24px',
    'neo-2xl': '32px',
  },
  boxShadow: {
    'neo-sm': '4px 4px 8px rgba(0,0,0,0.45), -2px -2px 6px rgba(255,255,255,0.03)',
    'neo-md': '8px 8px 20px rgba(0,0,0,0.5), -4px -4px 12px rgba(255,255,255,0.04)',
    'neo-lg': '12px 12px 32px rgba(0,0,0,0.55), -6px -6px 20px rgba(255,255,255,0.04), 0 0 0 1px rgba(255,255,255,0.04)',
    'neo-xl': '20px 20px 48px rgba(0,0,0,0.6), -8px -8px 28px rgba(255,255,255,0.04), 0 0 0 1px rgba(255,255,255,0.05)',
    'neo-inset': 'inset 4px 4px 10px rgba(0,0,0,0.4), inset -2px -2px 8px rgba(255,255,255,0.04)',
    'neo-glow':  '0 0 40px rgba(99,102,241,0.3), 0 0 80px rgba(99,102,241,0.15), 8px 8px 20px rgba(0,0,0,0.5), -4px -4px 12px rgba(255,255,255,0.04)',
    'neo-glow-violet': '0 0 40px rgba(168,85,247,0.25), 8px 8px 20px rgba(0,0,0,0.5)',
    'neo-glow-cyan':   '0 0 40px rgba(34,211,238,0.2), 8px 8px 20px rgba(0,0,0,0.5)',
    'neo-btn':  '0 4px 24px rgba(99,102,241,0.4), 4px 4px 8px rgba(0,0,0,0.45)',
  },
  backgroundImage: {
    'gradient-brand':  'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    'gradient-text':   'linear-gradient(135deg, #a5b4fc 0%, #c084fc 50%, #22d3ee 100%)',
    'gradient-card':   'linear-gradient(145deg, #181b27 0%, #1e2130 100%)',
    'gradient-glow':   'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.25) 0%, transparent 65%)',
    'gradient-surface':'linear-gradient(180deg, #12141e 0%, #0d0f17 100%)',
    'gradient-border': 'linear-gradient(145deg, rgba(99,102,241,0.4) 0%, rgba(168,85,247,0.2) 50%, rgba(34,211,238,0.15) 100%)',
  },
  animation: {
    'float':         'float 6s ease-in-out infinite',
    'float-delayed': 'float 6s ease-in-out infinite 2s',
    'glow-pulse':    'glowPulse 3s ease-in-out infinite',
    'shimmer':       'shimmer 2.5s linear infinite',
    'slide-up':      'slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    'fade-in':       'fadeIn 0.5s ease',
    'scale-in':      'scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
    'counter':       'counter 2s ease-out forwards',
    'progress-fill': 'progressFill 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
  },
  keyframes: {
    float: {
      '0%, 100%': { transform: 'translateY(0px)' },
      '50%':      { transform: 'translateY(-12px)' },
    },
    glowPulse: {
      '0%, 100%': { opacity: '0.6' },
      '50%':      { opacity: '1' },
    },
    shimmer: {
      '0%':   { backgroundPosition: '-200% center' },
      '100%': { backgroundPosition: '200% center' },
    },
    slideUp: {
      '0%':   { opacity: '0', transform: 'translateY(24px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    fadeIn: {
      '0%':   { opacity: '0' },
      '100%': { opacity: '1' },
    },
    scaleIn: {
      '0%':   { opacity: '0', transform: 'scale(0.9)' },
      '100%': { opacity: '1', transform: 'scale(1)' },
    },
    progressFill: {
      '0%':   { width: '0%' },
      '100%': { width: 'var(--progress-width)' },
    },
  },
}

// ─── MERGE INSTRUCTION ─────────────────────────────────────────────────
// In your existing tailwind.config.ts, do:
//
//   import { v2Extend } from './lib/tailwind-v2'
//
//   const config: Config = {
//     ...existingConfig,
//     theme: {
//       ...existingConfig.theme,
//       extend: {
//         ...existingConfig.theme?.extend,
//         ...v2Extend,
//         colors: {
//           ...existingConfig.theme?.extend?.colors,
//           ...v2Extend.colors,
//         },
//       },
//     },
//   }
// ───────────────────────────────────────────────────────────────────────

export { v2Extend }
export type { Config }