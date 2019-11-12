import Vue from 'vue'
import Vuex from 'vuex'
import users from '@/modules/users.js'
import app from '@/modules/app.js'
import dashboard from '@/modules/dashboard.js'


Vue.use(Vuex)

const store = new Vuex.Store({
 
  modules: {
    users,
    app,
    dashboard
  }
})

export default store