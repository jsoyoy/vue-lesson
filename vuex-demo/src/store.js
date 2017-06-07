import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 9
}

const getters = {
    getCount(){
        return (state.count)+10
    }
}

const mutations = {
    increment(state,payload){
        state.count+=payload.n
    }
}

const actions = {
    add({commit},n){
        commit('increment',{n})    //{n} = {n:n}
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})