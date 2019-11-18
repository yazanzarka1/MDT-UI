import ax from 'axios';
const state = {
    user:{
        loggedIn : false,
        rank: "",
        name: "",
        callsign: "",
        duty: false,
        partner: ""
        
        
    }
};

const getters = {
    loggedIn : (state) =>{return state.user.loggedIn },
    officer : (state) =>{return state.user}

};

const actions = {
    toggleLogIn({commit},arg){
        commit('toggleLogIn',arg)
    },

    updateOfficer({commit}, arg){
      console.log("Updated Officer Received");
        console.log(arg)
        commit('updateOfficer',arg)
    }
}

const mutations = {
    toggleLogIn(state, arg){
        state.user.loggedIn = arg
    },

    updateOfficer(state, arg){
        state.user.callsign = arg[0]
        state.user.duty = arg[1]
        state.user.partner = arg[2] 
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}