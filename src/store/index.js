import Vue from 'vue'
import Vuex from 'vuex'
import users from '@/modules/officer.js'
import app from '@/modules/app.js'
import search from '@/modules/search.js'
import dashboard from '@/modules/dashboard.js'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex)

const store = new Vuex.Store({
 
  modules: {
    users,
    app,
    dashboard,
    search,
    plugins: [
      createPersistedState({
        getState: (key) => Cookies.getJSON(key),
        setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
      })
    ]
  }
})

export default store