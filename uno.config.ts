// uno.config.ts
import { defineConfig, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify()
  ],
  shortcuts: {
    'navLink': 'text-sm font-700 mx-1 bg-gray-3 px-3 rounded-xl',
  },
})