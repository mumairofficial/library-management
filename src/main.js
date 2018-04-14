// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// Helpers
import colors from 'vuetify/es5/util/colors'

import App from './App'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: colors.teal.accent3, // #E53935
    secondary: colors.teal.lighten4, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
