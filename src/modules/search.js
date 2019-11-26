import ax from 'axios';
const state = {
    search:[],
    person:{
        name: '',
        number: '',
        gender: '',
        age: '',
        additionalInfo: '',
        priorConvictions: [],
        vehicles:[],
        properties: [],
        licenses:{
            driver:{
                granted: false,
                issue: '',
                expire: '',
            },
            bike:{
                granted: false,
                issue: '',
                expire: '',
            },
            heavy:{
                granted: false,
                issue: '',
                expire: '',
            },
            pilot:{
                granted: false,
                issue: '',
                expire: '',
            },
            w1:{
                granted: false,
                issue: '',
                expire: '',
            },
            w2:{
                granted: false,
                issue: '',
                expire: '',
            }
        }


    },

};

const getters = {
    searchResults(){
        return state.search
    },
    personGetter(){
        return state.person
    }
};

const actions = {
    async getSearch({commit,dispatch},searchQuery){
     ax.get("https://my-json-server.typicode.com/yazanzarka1/fakeapi/citizens").then(res => {
         console.log(res)
     }).then(res => {
         const {count, entries} = res
         console.log(entries)
     }).finally(()=> {
     })
    },
    addPerson({commit}, person){
        console.log(person)
        commit('addPerson', person)
    }
};

const mutations = {
    getSearch(state, data){
        state.search = data 
    },

    addPerson(state, person){
        state.person.name = person.name
        state.person.age = person.age
        state.person.gender = person.gender
        state.person.additionalInfo = person.additional
        state.person.number = person.Number
        state.person.priorConvictions = person.priorConvictions
        state.person.vehicles = person.vehicles
        state.person.licenses.driver = person.licenses.driver
        state.person.licenses.bike = person.licenses.bike
        state.person.licenses.heavy = person.licenses.heavy
        state.person.licenses.pilot = person.licenses.pilot
        state.person.licenses.w1 = person.licenses.w1
        state.person.licenses.w2 = person.licenses.w2
        state.person.properties = person.properties

    }
};

export default {
    state,
    getters,
    actions,
    mutations
}