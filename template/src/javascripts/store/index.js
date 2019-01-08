import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    }
  },
  plugins: process.env.NODE_ENV !== 'production' ? [
    createLogger({
      collapsed: false
    })
  ] : []
});

export default store;
