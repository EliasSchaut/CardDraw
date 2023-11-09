// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'CardDraw'
    }
  },
  srcDir: 'src/',
  devtools: { enabled: true },
  tailwindcss: {
    configPath: 'tailwind.config.ts',
  },
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },
})
