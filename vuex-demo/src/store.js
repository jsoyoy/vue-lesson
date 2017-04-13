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
export default new Vuex.Store({
    state,
    getters
})