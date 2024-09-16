// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/test-utils/module'
  ],
  runtimeConfig: {
    public: {
      someValue: process.env.NUXT_PUBLIC_SOME_VALUE
    }
  }
})
