import Vue from "vue";
import Vuex from "vuex";
import operations from "./modules/operations";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    operations,
  },
});
