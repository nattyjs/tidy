
// https://nuxt.com/docs/api/configuration/nuxt-config
import hljs from "highlight.js"

export default defineNuxtConfig({
  css: ['highlight.js/styles/nord.css'],

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css:['~/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/content'],
  content: {
    highlight: {
      theme:'material-theme-lighter'

    }

  },

  router: {
    pages: false
  },
  components: {
    global: true, // This enables global component registration
  },
  plugins: [
  ],
  ui: {
    icons: ['heroicons', 'simple-icons']
  }

})
