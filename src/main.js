import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import "vuetify/dist/vuetify.min.css";
import store from './store'
import router from './router'

//Setting Up Axios
///import Axios from 'axios'

Vue.config.productionTip = false
new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
