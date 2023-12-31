import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '1920px',
    },
    fontFamily: {
     sans: ['"ABC"', 'arial' , 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'homepage': "url('/media/images/homepage-bg.jpg')",
      },
      colors: {
        'primary': '#FF3D00'
      },
    },
  },
     plugins: [
      plugin(function({ addVariant }: { addVariant:any}) {
        addVariant('current', '&.active')
      })
    ],
}
export default config
