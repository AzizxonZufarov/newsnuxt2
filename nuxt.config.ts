// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
      head: {
        title: 'Hacker news',
        meta: [
          { name: 'description', content: 'Everything about - Nuxt-3' }
        ],
        link: [
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
        ]
      }
    },
    runtimeConfig: {
      currencyKey: process.env.CURRENCY_API_KEY
    },
    modules: [
      "@nuxtjs/tailwindcss",
    ]   
  })