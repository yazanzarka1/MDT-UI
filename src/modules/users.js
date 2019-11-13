import ax from 'axios';
const state = {
    user:{
        loggedIn : false
    }
};

const getters = {
    loggedIn : (state) =>{return state.user.loggedIn }

};

const actions = {
    toggleLogIn({commit},arg){
        commit('toggleLogIn',arg)
    }
}

const mutations = {
    toggleLogIn(state, arg){
        state.user.loggedIn = arg
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}