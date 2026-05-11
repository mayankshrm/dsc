import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        // Display: Anton — narrow, tall, all-caps headlines (skate-mag voice)
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
        // Body: Instrument Serif — characterful editorial serif
        sans: ['var(--font-body)', 'Georgia', 'serif'],
        serif: ['var(--font-body)', 'Georgia', 'serif'],
        // Mono: JetBrains Mono — for metadata (dates, badges, IDs)
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
        // Devanagari: Noto Serif Devanagari (heavy)
        deva: ['var(--font-deva)', 'serif'],
      },
      colors: {
        // Foundation
        paper: 'hsl(var(--paper))',
        ink: 'hsl(var(--ink))',

        // Punch
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        highlight: 'hsl(var(--highlight))',
        'secondary-punch': 'hsl(var(--secondary-punch))',

        // Semantic (shadcn-compatible)
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 1px)',
        sm: '0',
      },
      borderWidth: {
        '3': '3px',
      },
      fontSize: {
        // Add the absurd display sizes — used for hero headlines
        'mega': ['clamp(4rem, 12vw, 11rem)', { lineHeight: '0.85', letterSpacing: '-0.04em' }],
        'jumbo': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.88', letterSpacing: '-0.035em' }],
        'super': ['clamp(2.25rem, 5vw, 4.5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
      },
    },
  },
  plugins: [animate],
};

export default config;
