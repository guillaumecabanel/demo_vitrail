/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}',
    './lib/assets/stylesheets/**/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--hsl-zinc-200) / <alpha-value>)",
        input: "hsl(var(--hsl-zinc-200) / <alpha-value>)",
        ring: "hsl(var(--hsl-zinc-400) / <alpha-value>)",
        background: "hsl(var(--hsl-white) / <alpha-value>)",
        foreground: "hsl(var(--hsl-zinc-950) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--hsl-zinc-900) / <alpha-value>)",
          foreground: "hsl(var(--hsl-zinc-50) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--hsl-zinc-100) / <alpha-value>)",
          foreground: "hsl(var(--hsl-zinc-900) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--hsl-red-600) / <alpha-value>)",
          foreground: "hsl(var(--hsl-zinc-50) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--hsl-zinc-100) / <alpha-value>)",
          foreground: "hsl(var(--hsl-zinc-500) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--hsl-zinc-100) / <alpha-value>)",
          foreground: "var(--hsl-zinc-900) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--hsl-white) / <alpha-value>)",
          foreground: "hsl(var(--hsl-zinc-950) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--hsl-white) / <alpha-value>)",
          foreground: "hsl(var(--hsl-zinc-950) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
