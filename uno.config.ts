// uno.config.ts
import { defineConfig, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify()
  ],
  theme: {
    colors: {
        'prime': '#f1f875',
        'second': '#f1f5f9',
        'white': '#ebebeb',
        'black': '#000000',

      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
    },
    aspectRatio: {
      '1/1': '1 / 1',
      '3/4': '3 / 4',
    },
  },
  shortcuts: {
    'navLink': 'text-black font-700 mx-1 bg-gray-3 px-3 py-1 rounded-3xl hover:bg-black hover:text-white transition-colors duration-300',
  },
})
