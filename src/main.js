// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

import App from './App'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'


Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: colors.lightBlue.darken1,
    secondary: colors.lightBlue.darken3,
    accent: colors.indigo.base
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
