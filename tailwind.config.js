/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: 'var(--color-primary)',
        // secondary: '#9792E3 ',
        // background: 'rgb(151, 146, 227, 0.45)',
        dark: '#48435C',
        // accent: '#61E786',
        light: '#5A5766',
        extra: 'rgb(167, 164, 177, 0.5)',

        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
      },
    },
  },
  plugins: [],
}
