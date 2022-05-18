import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['bg-primary', 'bg-gray-200/70 dark:bg-gray-200/20 rounded'],
    ['btn-primary', 'inline-flex cursor-pointer justify-center px-4 py-2 bg-primary'],
    ['btn-primary-small', 'inline-flex cursor-pointer justify-center px-2 py-1 bg-primary text-sm'],
    ['icon-primary', 'inline-block cursor-pointer select-none opacity-70 transition duration-200 ease-in-out hover:opacity-100'],
    ['tab-item', 'rounded-sm text-center w-full px-4 py-2 cursor-pointer hover:bg-gray-300 hover:text-dark-900 dark:text-dark-200 dark:hover:text-light-200 dark:hover:bg-dark-700'],
    ['tab-item--active', 'bg-gray-300 bg-dark-200 dark:text-light-200']
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono'
      }
    })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ]
})
