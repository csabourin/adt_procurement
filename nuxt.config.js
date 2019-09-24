export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
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
        name: 'English'
      },
      {
        code: 'fr',
        name: 'Français'
      }
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        "en": {
          "searchBar": "Search",
          "homePage": "Home",
          "plan": "Plan",
          "spend": "Spend",
          "report": "Report",
          "previousPage": "Previous",
          "backButton": "Back",
          "home": "Home",
          "KeyMessages": "Key Messages",
          "BuildWorkPlan": "Build a Work Plan",
          "CreateBudget": "Create a Budget",
          "InitiateAuthorizeSpending": "Initiate and Authorize Spending (S. 32)",
          "ExerciseFinancialAuthority": "Exercise Financial Authority (S. 34)",
          "MonitorControlFinances": "Monitor and Control Finances",
          "ConductPeriodicVarianceReporting": "Conduct Periodic Variance Reporting",
          "ContributeReporting": "Contribute in Reporting ",
          "Test": "Test"
        },
        "fr": {
          "searchBar": "Recherche",
          "plan": "Planifier",
          "spend": "Dépenser",
          "report": "Rapports",
          "homePage": "Accueil",
          "previousPage": "Précédent",
          "backButton": "Retour",
          "KeyMessages": "Messages clés",
          "BuildWorkPlan": "Élaborer un plan de travail",
          "CreateBudget": "Établir un budget",
          "InitiateAuthorizeSpending": "Engager et autoriser les dépenses (art. 32)",
          "ExerciseFinancialAuthority": "Exercice des pouvoirs financiers (art. 34)",
          "MonitorControlFinances": "Surveiller et contrôler les finances",
          "ConductPeriodicVarianceReporting": "Rapports périodiques sur les écarts",
          "ContributeReporting": "Contribuer à l'établissement de rapports",
          "Test": "Test"

        }
      }
    }

  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
