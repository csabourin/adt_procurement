export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_description || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/adt_finance-R1/favicon.ico' },
      { rel:'stylesheet', href:'https://fonts.googleapis.com/css?family=Roboto&display=swap' },
      { rel:'stylesheet', href:'https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap' }
    ]
  },
  router:{
    base:'/adt_finance-R1/'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-i18n'
  ],
  layoutTransition: {
    name: "layout",
    mode: "in-out"
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  i18n: {
    strategy: 'prefix',
    vueI18nLoader: true,
    locales: [{
        code: 'en',
        name: 'English',
        iso: 'en-CA',
        file: 'en-CA.js'
      },
      {
        code: 'fr',
        name: 'Français',
        iso: 'fr-CA',
        file: 'fr-CA.js'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: "en",
    fallbackLocale: 'en',
    fallbackRoot: false,
    silentTranslationWarn: true,
    silentFallbackWarn: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
    }
  }
}
