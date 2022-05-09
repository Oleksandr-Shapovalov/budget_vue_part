//import Vue from "vue";
const operationsStore = {
  namespaced: true,
  state: {
    list: JSON.parse(localStorage.getItem("list")) || {},
  },
  getters: {
    listOfOperations: ({ list }) => {
      console.log(list);
      return list;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
};

export default operationsStore;