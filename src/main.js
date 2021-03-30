// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// v2.0
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'
/* import Vuex from 'vuex'
import axios from 'axios' */

export default function (Vue, { appOptions, head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });

  const opts = {
        themes: {
            light: {
                primary: "#2196F3",
                secondary: "#FF5722",
                accent: "#FFC400",
                error: "#F44336",
                info: "#03A9F4",
                success: "#76FF03",
                warning: "#FDD835",
            },
            dark: {
                primary: "#0D47A1",
                secondary: "#DD2C00",
                accent: "#FFAB00",
                error: "#D50000",
                info: "#00B0FF",
                success: "#64DD17",
                warning: "#F57F17",
            },
        },
   } //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify)

  appOptions.vuetify = new Vuetify(opts);

  /* Vue.use(Vuex)


  appOptions.store = new Vuex.Store({
    state: {
    },
    mutations: {

    }
  }) */


  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}