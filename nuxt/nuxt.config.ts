// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '@/assets/styles/reset.scss',
    '@/assets/styles/fonts.scss',
    "@/assets/styles/base.scss"
  ]
})
