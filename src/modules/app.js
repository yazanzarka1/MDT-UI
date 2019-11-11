//import ax from 'axios';
const state = {
    loading: false,
    notification:{
        text:'',
        color:'',
        active: false
    }
};

const getters = {
    loading:(state)=>{return state.loading},
    notification:(state)=>{
        return state.notification
    }
};

const actions = {
     toggleLoading({commit}){
         commit('toggleLoading')
     },
     alertUser({commit},obj){
         console.log(`${obj.color} + ${obj.text}`)
        commit('alertUser',obj)
     }
};

const mutations = {
    toggleLoading(state) {
        state.loading = !state.loading
    },

    alertUser(state,obj){
        state.notification.text = obj.text
        state.notification.color = obj.color
        state.notification.active = true
        console.log(obj.color)
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}