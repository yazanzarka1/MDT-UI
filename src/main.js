import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import "vuetify/dist/vuetify.min.css";
import store from './store'
import router from './router'


//Setting Up Axios
///import Axios from 'axios'

Vue.config.productionTip = false
const app = new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

export default app

global.app = app;
global.appData = app.$store.state;
global.store = store;
global.router = router;
