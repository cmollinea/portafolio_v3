/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        primary: 'var(--primary)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        border: 'var(--border)',
        muted: 'var(--muted)'
      },
      fontFamily: {
        sans: ['"Space Mono"', 'monospace'],
        mono: ['"Space Mono"', '"JetBrains Mono"', 'monospace']
      }
    }
  },
  plugins: []
};
