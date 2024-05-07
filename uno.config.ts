// uno.config.ts
import { defineConfig, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify()
  ],
  theme: {
    extend: {
      colors: {
        'gray-3': '#f1f5f9',
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
    'navLink': 'text-sm font-700 mx-1 bg-gray-3 px-3 rounded-xl',
  },
}
})
