import Vue from 'vue'
import Vuex from 'vuex'
import users from '@/modules/officer.js'
import app from '@/modules/app.js'
import search from '@/modules/search.js'
import dashboard from '@/modules/dashboard.js'
Vue.use(Vuex)

const store = new Vuex.Store({
 
  modules: {
    users,
    app,
    dashboard,
    search,
    plugins: [
    ]
  }
})

export default store