import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode'
  ],
  experimental: {
    reactivityTransform: true
  },
  unocss: {
    preflight: true
  },
  colorMode: {
    classSuffix: ''
  }
})
