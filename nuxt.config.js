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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css' }
    ]
  },
  router: {
    // base: '/ProdContent/cninv000000000017454/'
    base: '/adt_finance-R1/'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
  '@fortawesome/fontawesome-svg-core/styles.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
  '~/plugins/fontawesome.js',
   { src: '~plugins/ga.js', mode: 'client' }],
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
    'nuxt-i18n',
    ['vue-scrollto/nuxt', {container: "#scrollDiv",
     duration: 750,
     easing: "ease",
     offset: -200,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: true,
     y: false }]
  ],
  layoutTransition: {
    name: "layout",
    mode: "out-in"
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
    loaders: {
      rules: [{
        test: /\.(ico)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: '[path][name].[ext]'
      }

    }]},
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(pdf|docx|xlsx)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },{
        test: /\.(vtt)$/i,
        use: [{
          loader: 'file-loader'
        }]
      })

    }
  }
}