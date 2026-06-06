/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        serif: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}